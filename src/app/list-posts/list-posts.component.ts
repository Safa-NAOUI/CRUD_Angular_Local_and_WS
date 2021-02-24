import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  posts
  constructor(private service:PostsService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      response => {
        this.posts=response
        console.log(this.posts)
      }
    )
  }

}
