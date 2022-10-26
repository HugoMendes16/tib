import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css']
})

export class DetailsProduitsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Nom', 'Prix', 'Prix en promo','% Promo','Quantité en stock','Nb Article Vendu','Commentaire'];  listeProduits: Product[] = [];
  dataSource0: Product[] = [];
  dataSource1: Product[] = [];
  dataSource2: Product[] = [];
  unproduit: any;
  listePoissons: Product[] = [];
  listeFruitsMer: Product[] = [];
  listeCrustaces: Product[] = [];
  show0: boolean = false;
  show1: boolean = false;
  show2: boolean = false;
 


  constructor(private router : Router, public productsService : ProductsService) { 
  }

  getProducts(){
    this.productsService.getProductsFromJson().subscribe((res: Product[]) => {
      this.listeProduits = res;
      for (let p of this.listeProduits) {

        if (p.category==0) {
          this.listePoissons.push(p);
        }
        if (p.category==1) {
          this.listeFruitsMer.push(p);
        }
        if (p.category==2) {
          this.listeCrustaces.push(p);
        }
      }
      this.dataSource0 = this.listePoissons;
      this.dataSource1 = this.listeFruitsMer;
      this.dataSource2 = this.listeCrustaces;
    },
    (err) => {
      alert('failed loading json data');
    });
  }

  getProduct(id: number) {
    this.productsService.getProductsFromJson().subscribe((res: Product[]) => {
      this.listeProduits = res;
      for (let p of this.listeProduits) {
        if (id == p.id) {
          this.unproduit = p;
          console.log(this.unproduit);
          break;
        }
      }
    },
      (err) => {
        console.log()
        alert('failed loading json data');
      }
    );
  }

  getCategorie(cat: number){
    this.productsService.getProductsFromJson().subscribe((res: Product[]) => {
      this.listeProduits = res;
      for (let p of this.listeProduits) {
        if (cat == p.category) {
          this.unproduit = p;
          break;
        }
  
      }
    },
      (err) => {
        console.log()
        alert('failed loading json data');
      }
    );
  }
  
  ngOnInit(): void {
    this.getProducts();
    this.getProduct(2)
  }
}
