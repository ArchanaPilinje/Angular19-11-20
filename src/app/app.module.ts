import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes:Routes=[
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
    UpdateComponent,
    NavbarComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
