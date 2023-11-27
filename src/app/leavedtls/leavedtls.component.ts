import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../leave-request.service';
import { EmployeeLeave } from '../employee-leave';

@Component({
  selector: 'app-leavedtls',
  templateUrl: './leavedtls.component.html',
  styleUrls: ['./leavedtls.component.css']
})
export class LeavedtlsComponent implements OnInit{
  leaves!:EmployeeLeave[];
  constructor(private employeeService:LeaveRequestService){ }
  ngOnInit() {
    this.getEmployees();
  }
   private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.leaves = data;
      console.log(this.leaves)
    });
  }
}
