import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubUrl = "https://api.github.com"
  private pac = "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"

  constructor(private http: HttpClient) { }

  fetchUser(username: string) {
    const url = `${this.githubUrl}/users/${username}`
    let promise = new Promise((resolve, reject) => {
      this.http
      .get<any>(url, ({headers: new HttpHeaders({ Authorization: `token ${this.pac}`})}))
      .toPromise()
      .then(
        res => {
          let user = new User(
            res.login, res.email, res.location, res.created_at, res.followers,
            res.following, res.repos, res.gists, res.bio, res.avatar_url, res.name);
          resolve(user);
        },
        error => {
          reject(error)
        })
    })
    return promise
  }

  fetchUserRepos(username: string) {
    const url = `${this.githubUrl}/users/${username}/repos`;
    let promise = new Promise((resolve, reject) => {
      this.http
      .get<any>(url, ({headers: new HttpHeaders({ Authorization: `token ${this.pac}`})}))
      .toPromise()
      .then(
        res => {
          let repos = res.map((repo: any) => {
            return new Repository(repo.name, repo.description, repo.stargazers_count, repo.language,
              repo.homepage, repo.created_by, repo.created_at);
          });
          resolve(repos);
        },
        error => {
          reject(error)
        })
    })
    return promise
  }

  fetchRepos(repo: string) {
    const url = `${this.githubUrl}/search/repositories?q=${repo}`;
    let promise = new Promise((resolve, reject) => {
      this.http
      .get<any>(url, ({headers: new HttpHeaders({ Authorization: `token ${this.pac}`})}))
      .toPromise()
      .then(
        res => {
          let repos = res.items.map((repo: any) => {
            return new Repository(repo.name, repo.description, repo.stargazers_count, repo.language,
              repo.homepage, repo.created_by, repo.created_at);
          });
          resolve(repos);
        },
        error => {
          reject(error)
        })
    })
    return promise
  }
}
