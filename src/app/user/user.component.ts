import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repository } from '../repository';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User("HWaruguru", "hannah.waruguru8@gmail.com", "Nairobi", new Date(2021, 7, 29), 6, 7, 20,28,  "I am an upcoming Software Developer currently studying Software Development at Moringa School.", "https://avatars.githubusercontent.com/u/48224930?v=4", "Hannah Waruguru")
  repos: Repository[] = [
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru" ,new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru" ,new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru" ,new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru" ,new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru" ,new Date(2021, 7, 29)),
  ];


  constructor() { }

  ngOnInit(): void {

  }

}