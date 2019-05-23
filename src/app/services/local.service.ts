import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  myPI = 3.14

  welcome = function () {
    console.log('Angular 7 Services')
  }


  constructor() { }
}
