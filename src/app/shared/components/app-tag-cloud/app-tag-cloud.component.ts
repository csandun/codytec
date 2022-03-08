import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './app-tag-cloud.component.html',
  styleUrls: ['./app-tag-cloud.component.scss']
})
export class AppTagCloudComponent implements OnInit {
  // define tag array
  public tags = [ "Angular", "C#", "C++", "C", "Java", "JavaScript", "PHP", "Python", "Ruby", "Swift", "TypeScript", "Visual Basic" ];


  constructor() { }

  ngOnInit(): void {
  }

}
