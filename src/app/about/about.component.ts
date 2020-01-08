import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  c_url="https://jsonplaceholder.typicode.com/users"
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
