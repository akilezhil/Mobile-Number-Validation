import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/json/country.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countryList: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
  }

}
