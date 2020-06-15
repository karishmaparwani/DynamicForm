import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit  {


  employeeRegistrationForm: FormGroup;
  fields: any ;

  constructor(private dataservice: DataService,
              private toasterservice: ToastrService) {
  }

  ngOnInit(): void {
     this.dataservice.getFormTemplate().subscribe((data) => {
      this.fields = data;
    });

  }


  submit(event) {
    console.log(event);
    this.toasterservice.success('Registration succesfully done');

  }

}
