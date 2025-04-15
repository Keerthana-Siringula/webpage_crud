import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeForm: FormGroup = new FormGroup({});

  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];
  constructor()
  {
    this.createForm()
    const oldData = localStorage.getItem("EmpData");
    if(oldData!= null)
    {
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    }

  createForm()
  {
    this.employeeForm = new FormGroup({
      empid: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name),
      city: new FormControl(this.employeeObj.city),
      address: new FormControl(this.employeeObj.address),
      emailId: new FormControl(this.employeeObj.emailId),
      phoneno: new FormControl(this.employeeObj.phoneno),
      state: new FormControl(this.employeeObj.state),
      pincode: new FormControl(this.employeeObj.pincode)
    })
  }
  onSave()
  {
    const oldData = localStorage.getItem("EmpData");
    if(oldData!= null)
    {
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empid'].setValue(parseData.length+1);
      this.employeeList.unshift(this.employeeForm.value);
    }
  }
}
