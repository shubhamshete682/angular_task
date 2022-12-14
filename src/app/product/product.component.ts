import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  proData:any;
  constructor(){}
  ngOnInit(): void {
    this.proData=[
      {name:"Product-1",price:"$20"},
      {name:"Product-2",price:"$25"},
      {name:"Product-3",price:"$30"},
      {name:"Product-4",price:"$50"},
      {name:"Product-5",price:"$44"},
      {name:"Product-6",price:"$12"},
      {name:"Product-7",price:"$15"},
      {name:"Product-8",price:"$99"},
      {name:"Product-9",price:"$84"},
      {name:"Product-10",price:"$70"},
    ]
  }
}

