import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  title = 'Categories';
  constructor (private httpService: HttpClient) { }
  
  categories : string[]
  
  ngOnInit() {
    this.httpService.get('http://localhost:3000/categories').subscribe(
      data => {
        this.categories = data as string [];	
       
      },
      
    );
  }

}





