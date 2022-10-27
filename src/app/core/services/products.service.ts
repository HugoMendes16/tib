import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlServ = "http://localhost:8000"

  constructor( private http : HttpClient) { }

  getProductsFromJson(){
    return this.http.get<Product[]>("../assets/data/Products.json");
  }

  getProducts(){
    return this.http.get(this.urlServ + "/infoproducts/");
  }

  
}


