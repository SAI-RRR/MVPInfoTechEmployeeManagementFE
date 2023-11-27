import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claims } from './claims';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  private baseURL = "localhost:9090/api/v1/claims";
  constructor(private httpclient : HttpClient){}

  createClaim(claim:Claims ): Observable<object>{
    return this.httpclient.post(`${this.baseURL}`,claim);
  }
}
