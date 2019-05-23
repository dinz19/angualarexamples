import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  friends = ["GOPI","RAM","ARUN","VINOTH"]
  constructor() { }
  location = [
    {
      city:"Chennai",
      code: 'CHN'
    },
    {
      city:"Chennai",
      code: 'CHN'
    }
  ];
  display:boolean = true
  
  check = "A"

  myFunc(){

    if(this.display == false)
    {
      this.display = true
    }
    else{
      this.display = false
    }
  }
  
  
  ngOnInit() {
  }

}
