import { model } from "@angular/core";

export class EmployeeModel
{
    empId: number;
    name: string;
    city: string;
    state: string;
    emailId: string;
    phoneno: string;
    address: string;
    pincode: string;
    constructor()
    {
        this.empId = 0;
        this.name = '';
        this.city = '';
        this.state = '';
        this.emailId = '';
        this.phoneno = '';
        this.address = '';
        this.pincode = '';
    }
}   