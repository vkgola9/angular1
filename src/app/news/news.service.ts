import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { News } from "./news";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpclient: HttpClient) { }
  topNews = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=909434d65cb14a7d8df3b2cac7101437';
  business = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=909434d65cb14a7d8df3b2cac7101437';
  science = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=909434d65cb14a7d8df3b2cac7101437';
  entertainment = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=909434d65cb14a7d8df3b2cac7101437';
  sports = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=909434d65cb14a7d8df3b2cac7101437';
  technology = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=909434d65cb14a7d8df3b2cac7101437';
  health = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=909434d65cb14a7d8df3b2cac7101437';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  topHeadlines(): Observable<any> {
    return this.httpclient.get(this.topNews);
  }
  topBusiness(): Observable<any> {
    return this.httpclient.get(this.business);
  }
  topScience(): Observable<any> {
    return this.httpclient.get(this.science);
  }
  topSports(): Observable<any> {
    return this.httpclient.get(this.sports);
  }
  topTechnology(): Observable<any> {
    return this.httpclient.get(this.technology);
  }
  topEntertainment(): Observable<any> {
    return this.httpclient.get(this.entertainment);
  }
  topHealth(): Observable<any> {
    return this.httpclient.get(this.health);
  }
}
