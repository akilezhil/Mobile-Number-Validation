import { Component,OnInit } from '@angular/core';
import * as data from '../assets/json/country.json';
import {HttpService} from './http.service'
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobileNumberTracker';
  counrtryList: any = (data as any).default;
  mobileNumber:any = " ";
  selectedCountry:any = " ";
  //info:any = {"valid":true,"number":"918667560120","local_format":"08667560120","international_format":"+918667560120","country_prefix":"+91","country_code":"IN","country_name":"India (Republic of)","location":"Tamil Nadu","carrier":"Reliance Jio Infocomm Ltd (RJIL)","line_type":"mobile"}
  info:any
  loader:boolean = false;
  showTable:boolean = false;
  mobileForm:any
  submitted:boolean= false
  error:any ='';
  
  public constructor( private http:HttpService){

  }

  ngOnInit(){
    this.mobileForm = new FormGroup({
      'mobileNumber':new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(14)]),
      'country':new FormControl(null,[Validators.required])
    });


  }

  get f() { return this.mobileForm.controls; }

  onSubmit(){
    this.submitted = true;
   if(this.mobileForm.valid){
     console.log(this.mobileForm.value);
      this.getInfo(this.mobileForm.value);
   }
  }

  onReset(){
    this.submitted = false;
    this.mobileForm.reset();
  }

  setCountry(event:any){
    console.log(event);
    this.selectedCountry = event
  }




  getInfo(value:any){
    this.loader = true
    this.mobileForm.reset();
    this.submitted = false;
    this.http.LoadData(value).subscribe((res)=>{
      this.info = res;
      console.log(this.info)
      this.loader = false;
      this.showTable = true
    },
    (err)=>{
      console.log("here come")
      this.info.valid = false
      this.loader= false
      this.mobileForm.reset()
      this.submitted = false
      this.error =  "Unable to get the information form API"
    })
  }

  getError(){
    if(!this.info.valid){
      this.error =  "Invalid phone (or) mobile number"
    }
  }

  
}
