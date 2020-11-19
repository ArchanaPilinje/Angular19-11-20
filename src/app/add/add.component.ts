import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
newPost

  constructor(public crud:CrudService) { 
    this.newPost = {
      title: '',
      body: '',
      id: 0
    }
    
  }

  ngOnInit(): void {
  }

  addPost(postForm) {
    this.crud.addPost(this.newPost)
    
    this.newPost = {
      title: '',
      body: '',
      id: 0
    }
    postForm.form.markAsPristine()
  }

}
