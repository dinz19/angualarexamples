import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltcomponent',
  templateUrl: './inbuiltcomponent.component.html',
  styleUrls: ['./inbuiltcomponent.component.css']
})
export class InbuiltcomponentComponent implements OnInit {

  money = 88
  location = 'chennai'
  dob = new Date()

  friends = ["OLA","ZOOM","UBER","AUTO"]
  scores = [99,88,8,5,54]
  constructor() { }

  
  ngOnInit() {
  }

}
