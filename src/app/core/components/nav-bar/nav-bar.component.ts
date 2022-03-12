import { Component, OnInit } from '@angular/core';
import {AppModalService} from "../../../shared/components/app-modal/app-modal.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  bodyText: string = '';

  constructor(private modalService: AppModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    debugger;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
