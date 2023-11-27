import { Component, OnInit } from '@angular/core';
import { Claims } from '../claims';
import { ClaimsService } from '../claims.service';
import{FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-claim-page',
  templateUrl: './employee-claim-page.component.html',
  styleUrls: ['./employee-claim-page.component.css']
})
export class EmployeeClaimPageComponent implements OnInit {
[x: string]: any;
imgURL:any;
 
  claims:Claims = new Claims();
claimsform!: FormGroup<any>;
employeeName: any;
name: any;
public selectedFile:any;
  constructor(  private claimService:ClaimsService,private formBuilder:FormBuilder) {
  }


  ngOnInit() : void{
  }
  public onFileChanged(event:any){
    this.selectedFile=event.target.files[0];

let reader=new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload=(event2)=>{
  this.imgURL=reader.result;
};

  }

  saveClaim(){
    const uploadData = new FormData();
    uploadData.append('pic',this.selectedFile,this.selectedFile.name);

    this.claimService.createClaim(this.claims).subscribe(data =>{
      console.log(data);
    });
  }
  onSubmit() {
   console.log(this.claims);
    this.saveClaim();
    console.log("details added successfully")
   }
  
  }

