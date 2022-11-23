import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class RestcallService {

  constructor(private http:HttpClient) { }

  public submit(model: Model){
    return this.http.post("http://ec2-52-23-185-171.compute-1.amazonaws.com:31707/submitSurvey", model);
  }  

  public fetch(){
    return this.http.get("http://ec2-52-23-185-171.compute-1.amazonaws.com:31707/getAllSurveys");
  }
}
