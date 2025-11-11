import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  posts: any[] = [];
  newPost = { title: '', body: '' };
  loading = false;

  constructor(private api: Api) {}

  ngOnInit() {}

  loadPosts() {
    this.loading = true;
    this.api.getPosts().subscribe({
      next: (res) => {
        this.posts = res.slice(0, 5);
        this.loading = false;
      },
      error: (err) => console.error(err),
    });
  }

  addPost() {
    if (!this.newPost.title || !this.newPost.body) return;
    this.api.addPost(this.newPost).subscribe({
      next: (res) => {
        alert('Post added!');
        this.posts.unshift(res);
        this.newPost = { title: '', body: '' };
      },
    });
  }

}
