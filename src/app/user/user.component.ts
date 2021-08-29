import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
// import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = {
    "login": "HWaruguru",
    "id": 48224930,
    "node_id": "MDQ6VXNlcjQ4MjI0OTMw",
    "avatar_url": "https://avatars.githubusercontent.com/u/48224930?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HWaruguru",
    "html_url": "https://github.com/HWaruguru",
    "followers_url": "https://api.github.com/users/HWaruguru/followers",
    "following_url": "https://api.github.com/users/HWaruguru/following{/other_user}",
    "gists_url": "https://api.github.com/users/HWaruguru/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HWaruguru/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HWaruguru/subscriptions",
    "organizations_url": "https://api.github.com/users/HWaruguru/orgs",
    "repos_url": "https://api.github.com/users/HWaruguru/repos",
    "events_url": "https://api.github.com/users/HWaruguru/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HWaruguru/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hannah Waruguru",
    "company": "Gathudev Team",
    "blog": "https://hwaruguru.github.io/Waruguru-Portfolio/",
    "location": "Kenya",
    "email": null,
    "hireable": null,
    "bio": "I am an upcoming Software Developer currently studying Software Development at Moringa School. ",
    "twitter_username": null,
    "public_repos": 28,
    "public_gists": 0,
    "followers": 6,
    "following": 0,
    "created_at": "2019-03-04T21:09:09Z",
    "updated_at": "2021-08-27T15:42:47Z"
}
  username = "hwaruguru"
  repos: any;

  constructor() { }

  ngOnInit(): void {

  }

}