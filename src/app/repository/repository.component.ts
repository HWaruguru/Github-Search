import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any;
  repo: string = 'tetris';

  constructor(private githubService: GithubService) { }

  async searchRepos() {
    this.repos = await this.githubService.fetchRepos(this.repo);
  }

  ngOnInit() {
    this.searchRepos()
  }

}
