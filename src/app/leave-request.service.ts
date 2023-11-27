import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { EmployeeLeave } from './employee-leave';
@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  private baseUrl="http://localhost:8081/leave/api/createleave"
  constructor(private httpClient : HttpClient) { }
  submitrequest(emp : EmployeeLeave):Observable<Object>{
return this.httpClient.post(`${this.baseUrl}`, emp);
  }
  getEmployeeList():Observable<EmployeeLeave[]>{
    return this.httpClient.get<EmployeeLeave[]>("http://localhost:8081/leave/api/getleave");
  }
}
