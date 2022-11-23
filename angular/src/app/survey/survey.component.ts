import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { RestcallService } from '../restcall.service';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CheckboxRequiredValidator } from '@angular/forms';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  model: Model = new Model("","","","","","","","","","","","");

  title = 'swe645';
  count = 0;
  obj : any
  selectedItemsList = [{}];
  checkedIDs = [];
  selectedItemsString = "";

  checkboxesDataList = [
    {
      label: 'Students',
      isChecked: false
    },
    {
      label: 'Location',
      isChecked: false
    },
    {
      label: 'Campus',
      isChecked: false
    },
    {
      label: 'Atmosphere',
      isChecked: false
    },
    {
      label: 'Dorm Rooms',
      isChecked: false
    },
    {
      label: 'Sports',
      isChecked: false
    }
  ];

  constructor(private http:HttpClient, private service:RestcallService, private router:Router) { }

  ngOnInit(): void {
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  checkInfo():boolean{
    return this.model.firstName==''||this.model.lastName==''||this.model.address==''||this.model.city==''||
    this.model.state==''||this.model.zip==''||this.model.mobile==''||this.model.email==''||this.model.dateOfSurvey=='';
  }

  public submit(){

    if(this.checkInfo()){
      alert('Please fill all the required fields...\n');
    }

    else{
      alert('Thank you! Your Response has been saved\n');
      this.router.navigate(['/home']);
    }

    this.fetchSelectedItems()
    
    for (let i of this.selectedItemsList) {
      this.obj = this.selectedItemsList[this.count]
      this.selectedItemsString += this.obj.label + ", "
      this.count++;
    }
    
    this.model.likes = this.selectedItemsString.slice(0,-2)
    console.warn(this.model)
    
    this.service.submit(this.model).subscribe((result) => { console.warn("result", result) })
  }
  

}
