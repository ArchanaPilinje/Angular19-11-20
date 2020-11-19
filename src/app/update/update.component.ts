import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatePost
  constructor(public crud:CrudService) { 
   console.log("From Update")
   console.log(this.crud.selectedPost.id)
   console.log(this.crud.selectedPost.title)
   console.log(this.crud.selectedPost.body)

   this.updatePost = {
    id: this.crud.selectedPost.id,
    title: this.crud.selectedPost.title,
    body: this.crud.selectedPost.body
  }

  }

  ngOnInit(): void {
  }

  updatePosts(updatePostForm){
    this.crud.updatePost(this.updatePost)
    
  }



}
