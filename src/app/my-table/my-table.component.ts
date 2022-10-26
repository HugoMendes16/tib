import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../core/interfaces/product';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

@Input() products:any[]=[];

fields=["id","name","price","quantity_stock","quantity_sold","unit","discount"]
//last for btn

  constructor() { }

  ngOnInit(): void {
  }


  updateProduct(id:any){

    console.log("updaating "+id)
    console.log(typeof id)

    const product=this.products.filter(p=>p.id==id);


    console.log(product)

  }

  delete(id:any){

    console.log("deleting")
    
  }
}
