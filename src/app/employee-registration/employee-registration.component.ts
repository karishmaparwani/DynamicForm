import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
// import form_template from '../shared/form_template'
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  employeeRegistrationForm: FormGroup;
  fields: any ;

  constructor(private _dataService :DataService) { 

  }

  ngOnInit(): void {

    this._dataService.getFormTemplate().subscribe((data)=>{
      this.fields = data
    })

  }

  submit(event){
  //  var keys = Object.keys(event);
  //  console.log(keys);
  //  var resultData 
  //  for(let key in event) {
  //   //Whatever you want to do with key or obj[key]
  //   resultData.push()
    
  //   }
  //   }
   
   var resultData = {
      Username  : event.Username ,
      user: { 
        Name : event.Username,
        Skill : event.Skill,
        Experience: event.Experience,
      },
      City: event.City,
      Gender : event.Gender

    }
    console.log(resultData)
    this.fields = [];
    
  }

}

//component with input
//submit output event emmitter
//subject behaviour/service






// if(res.children){
//   const childrenControl ={}
//   res.children?.forEach(val => {
//     childrenControl[val.label] = new FormControl('');
 
//   });

//   new FormArray([
//     new FormGroup (
//       childrenControl
//     )
//   ]);


// }