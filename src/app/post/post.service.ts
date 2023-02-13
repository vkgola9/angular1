import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = ' http://localhost:3000/posts/';
  httpoptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL);
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + id, this.httpoptions);
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + id);
  }
  create(post: Post): Observable<any> {
    return this.httpClient.post(this.apiURL, JSON.stringify(post), this.httpoptions);
  }
  update(id: number, post: Post): Observable<any> {
    return this.httpClient.put(this.apiURL + id, JSON.stringify(post), this.httpoptions);
  }

  getPosts(page: number) {
    return this.httpClient.get(this.apiURL + '?page=' + page);
  }
}
