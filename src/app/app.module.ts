import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { DynamicFormComponentComponent } from './components/DynamicForm/dynamic-form-component/dynamic-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    DynamicFormComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
