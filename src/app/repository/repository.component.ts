import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: Repository[] = [
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru", new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru",new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru",new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru",new Date(2021, 7, 29)),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru",new Date(2021, 7, 29)),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
