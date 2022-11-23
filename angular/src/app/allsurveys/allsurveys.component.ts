import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { RestcallService } from '../restcall.service';

@Component({
  selector: 'app-allsurveys',
  templateUrl: './allsurveys.component.html',
  styleUrls: ['./allsurveys.component.css']
})
export class AllsurveysComponent implements OnInit {

  surveys: any;

  constructor(private service:RestcallService) { }

  ngOnInit(): void {
    this.service.fetch().subscribe((result)=>this.surveys=result);
  }

}
