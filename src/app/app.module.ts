import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperComponent } from './directive/super/super.component';
import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from './base/base.component';
import { NotfoundComponent } from './NotFound/notfound/notfound.component';
import { TemplateformsComponent } from './forms/templateforms/templateforms.component'
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { TaskComponent } from './todo/task/task.component';
import { InbuiltcomponentComponent } from './inbuiltcomponent/inbuiltcomponent.component';
import { SortdataPipe } from './custompipe/sortdata.pipe';
import { ConsumeserviceComponent } from './services/consumeservice/consumeservice.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component'


const myroutes : Routes = [
  {
    path:'',
    redirectTo:'header',
    pathMatch:'full'

  },
  {
    path:'super',
    component:SuperComponent
  },
  {
    path:'base',
    component:BaseComponent
   },
   {
    path:'template',
    component:TemplateformsComponent
   },
   {
    path:'reactive',
    component:ReactiveformsComponent
   },
   {
    path:'task',
    component:TaskComponent
   },
   {
    path:'pipe',
    component: InbuiltcomponentComponent
   },
   {
    path:'consumeservice',
    component: ConsumeserviceComponent
   },
   {
    path:'header',
    component: HeaderComponent
   },
   {
    path:'categories',
    component: CategoriesComponent
   },
   {
    path:'products/:categoryId',
    component: ProductsComponent,
    
   },
   {
    path:'products',
    component: ProductsComponent,
    
   },
   {
     path:'**',
     component:NotfoundComponent
   }
]

@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    BaseComponent,
    NotfoundComponent,
    TemplateformsComponent,
    ReactiveformsComponent,
    TaskComponent,
    InbuiltcomponentComponent,
    SortdataPipe,
    ConsumeserviceComponent,
    HeaderComponent,
    CategoriesComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
