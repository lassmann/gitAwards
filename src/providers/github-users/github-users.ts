import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as scrapeIt from 'scrape-it';

import { User } from '../../models/user';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http ) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]>res.json());
  }

  loadDetails(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
      .map(res => <User>(res.json()))
  }

  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
      .map(res => <User[]>(res.json().items))
  }

  getRanking(): Promise<any>{
    return     scrapeIt("http://git-awards.com/users?utf8=%E2%9C%93&type=country&language=javascript&city=resistencia", {
      title: "h1",
      users: {
        listItem:"tr",
        data:{
          avatar:{
            selector: "a img",
            attr: "src"
          },
          username:"td a",
          rank: "td:nth-child(3)",
          stars: "td:nth-child(4)"
        }
      }
    })

  }
}
