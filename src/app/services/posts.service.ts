import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {

   }

   public getData()
   {
    return this.http.get(this.baseUrl)
   }
}