import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  c_url="https://restcountries.eu/rest/v2/all"
  data={}
  constructor(private ds:DataService) {
   }

  ngOnInit() {
    this.ds.getData(this.c_url).subscribe(d=>{
      this.data=d;
      console.log(this.data);
    })
  }

}
