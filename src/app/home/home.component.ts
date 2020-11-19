import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id:number
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
    this.crud.getPosts()
  }

  selectPost(index){
    this.crud.selectedPost=this.crud.posts[index]
    console.log(this.crud.selectedPost)
  }

  deletePost(index){
    
    this.crud.selectedPost=this.crud.posts[index]
    this.id=this.crud.selectedPost.id
    this.crud.deletePost(this.id)
    this.ngOnInit();
    

  }

}
