import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag-cloud-tag',
  templateUrl: './app-tag-cloud-tag.component.html',
  styleUrls: ['./app-tag-cloud-tag.component.scss']
})
export class AppTagCloudTagComponent implements OnInit {

  @Input() tag: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
