import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title:string="Home Page";
  courses:string[]=["Php","Java","Linux","Python"];
  constructor(){}
  ngOnInit():void{}
}
