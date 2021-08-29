import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  username = "hwaruguru"
  repos: any;

  constructor(private githubService: GithubService) { }

  async search() {
    this.user = await this.githubService.fetchUser(this.username);

    this.repos = await this.githubService.fetchUserRepos(this.username);
  }

  ngOnInit(): void {
    this.search()
  }
}