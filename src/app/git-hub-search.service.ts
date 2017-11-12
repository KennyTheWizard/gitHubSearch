import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GitHubUser } from './git-hub-user';
import 'rxjs/add/operator/map';
@Injectable()
export class GitHubSearchService {
  apiRoot: string = 'https://api.github.com/users/'

  constructor(private http: Http) { }

  getGitHubUser(userName:string): Promise<GitHubUser>{
    let apiUrl = this.apiRoot + userName;
    return this.http.get(apiUrl).map(response => response.json()).toPromise();
  }
}
