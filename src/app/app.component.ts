import { Component } from '@angular/core';
import { GitHubUser } from './git-hub-user';
import { GitHubSearchService } from './git-hub-search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists: boolean = null;
  score: number;
  searchTerm: string;
  constructor(private gitHubSearch: GitHubSearchService) {}
  searchForUser(){
    let currUserP = this.gitHubSearch.getGitHubUser(this.searchTerm);
    currUserP.then((resp)=>{
      this.userExists = true;
      let foundUser:GitHubUser = resp;
      this.score = foundUser.followers + foundUser.public_repos;
    }).catch((error)=>{
      this.userExists = false;
      console.error(error);
    })
  }
}
