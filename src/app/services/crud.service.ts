import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  posts: any[]
  selectedPost: any
  post: any[]
  status: boolean

  constructor(public http: HttpClient, public router: Router) { }

  addPost(newPost) {
    this.http.post('http://localhost:8080/posts/add', newPost).subscribe(res => {
      this.posts.unshift(res)
      this.router.navigateByUrl('/')
    })
  }

  getPosts() {
    this.http.get('http://localhost:8080/posts/all').subscribe((data: any[]) => this.posts = data)
  }

  getPost() {
    this.http.get("http://localhost:8080/posts/get/" + this.selectedPost.id).subscribe((data: any[]) => this.post = data)
  }

  updatePost(updatePost) {
    this.http.put('http://localhost:8080/posts/update', updatePost).subscribe(res => { this.posts.unshift(res) })
  }

  deletePost(id) {
    this.http.delete('http://localhost:8080/posts/delete/' + id).subscribe((res: boolean) => this.status = res)
  }

}
