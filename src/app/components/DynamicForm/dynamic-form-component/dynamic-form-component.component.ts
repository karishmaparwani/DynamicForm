import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.css']
})
export class DynamicFormComponentComponent implements OnInit {

  form :FormGroup;
  @Input('controls') formFields;
  @Output('onSubmit') onSubmit = new EventEmitter();

  constructor() { 

  }
  ngOnInit(): void {
 
    const controls = {};
     setTimeout(() => {
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
        controls[res.label] = new FormControl('', validationsArray);
        res.children?.forEach(val => {
              controls[val.label] = new FormControl('',validationsArray);
           
            });
      }); 
  
    this.form = new FormGroup(
      controls
    );
     }, 0);
    
  }

  submit(){
    this.onSubmit.emit(this.form.value);
  }

}
