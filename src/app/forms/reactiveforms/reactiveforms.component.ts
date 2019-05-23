import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms'
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
   
  simpleForm : any 

  constructor() { }

  ngOnInit() {
    this.simpleForm = new FormGroup({
      fname: new FormControl("Arun",Validators.compose([
        Validators.required,Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]+$') 
      ])),
      lname: new FormControl("Arun",Validators.compose([
        Validators.required,Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]+$'),this.customLengthValidator 
      ])),
            
      hobby :new FormControl()
    })
  }
  
  saveData = function(simpledata)
  {
    console.log(simpledata)
  }
  customLengthValidator = function(control){
   if(control.value.length < 4)
   {
     return{'lname':true}
   }

  }
}
