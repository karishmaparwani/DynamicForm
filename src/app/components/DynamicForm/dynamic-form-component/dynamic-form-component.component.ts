import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.css']
})
export class DynamicFormComponentComponent implements OnInit, OnChanges {
  dynamicForm;
  @Input('controls') formFields = [];
  @Output('onSubmit') onSubmit = new EventEmitter();
  nestedFormGroupName:'';

  constructor() {
  }

  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    const controls = {};
    const childControl = {};

      if (changes.formFields.currentValue) {
        this.formFields.forEach(res => {

          const validationsArray = [];
          res.validations?.forEach(val => {
            if (val.name === 'required') {
              validationsArray.push(
                Validators.required
              );
            }
            if (val.name === 'pattern') {
              validationsArray.push(
                Validators.pattern(val.validator)
              );
            }
          });
          controls[res.field] = new FormControl('', validationsArray);
          var nestedProp;
          res.children?.forEach(val => {
            nestedProp = val.field.split('.');
            childControl[nestedProp[1]] = new FormControl('')
            this.nestedFormGroupName= nestedProp[0];
            controls[nestedProp[0]] = new FormGroup(
              childControl
            );

          });
        });


        this.dynamicForm = new FormGroup(
          controls
        );
      } else {
        this.formFields = [];
      }
      
  }


  ngOnInit(): void {
  }

  submit() {
    if(!this.dynamicForm.invalid){
    this.onSubmit.emit(this.dynamicForm.value);
    this.dynamicForm.reset();}
  }

}