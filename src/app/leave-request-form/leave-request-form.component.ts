import { Component } from '@angular/core';
import { LeaveRequestService } from '../leave-request.service'; 
import { Router } from '@angular/router';
import { EmployeeLeave } from '../employee-leave';

@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.component.html',
  styleUrls: ['./leave-request-form.component.css'] 
})
export class LeaveRequestFormComponent {
[x: string]: any;
employe:EmployeeLeave=new EmployeeLeave();

constructor(private leaverequestservice : LeaveRequestService, private router: Router){}
submitRequest(){
  this.leaverequestservice.submitrequest(this.employe).subscribe(data=>{
    console.log(data);
    alert("correct!")
    this.router.navigateByUrl('/leave-dtls');
    console.log("redirected")
  
  },(error)=> alert("entered the wrong message"))
}

}
