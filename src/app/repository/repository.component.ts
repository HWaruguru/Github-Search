import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: Repository[] = [
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru", "2019-03-04T21:09:09Z"),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru","2019-03-04T21:09:09Z"),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru","2019-03-04T21:09:09Z"),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru","2019-03-04T21:09:09Z"),
    new Repository("Inspirational-Quotes", "An insipirational quotes application that allows users to read and add quotes.", 5, "JavaScript","github.com/Inspirational-Quotes", "HWaruguru","2019-03-04T21:09:09Z"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
