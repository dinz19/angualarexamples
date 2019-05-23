import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title = 'Products'
  products : string[]


  constructor (private route: ActivatedRoute, private httpService: HttpClient) { 
          
   }
    
  ngOnInit() {
    
    this.route.params.subscribe(params=>{
      if(this.route.snapshot.params['categoryId']!=null)
      { this.httpService.get('http://localhost:2000/products?categoryId=' + this.route.snapshot.params['categoryId']).subscribe(
        data => {
           this.products = data as string [];	
        },
        
      );
    }else{

      this.httpService.get('http://localhost:2000/products').subscribe(
        data => {
           this.products = data as string [];	
        },);
    }
     
  });
    
  }

  

}
