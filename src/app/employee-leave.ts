import { Time } from "@angular/common";

export class EmployeeLeave {
    empName!:string;
    leaveType!:string;
    startDate!:Time;
    endDate!:Time;
    reason!:string;
    compensation_leaves:number=4;
    leaveStatus!:string
}
