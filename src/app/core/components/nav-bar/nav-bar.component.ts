import {Component, OnInit, TemplateRef} from '@angular/core';
import {AppModalService} from "../../../shared/components/app-modal/app-modal.service";
import {BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';
import {LoginComponent} from "../login/login.component";
import {AuthType} from "../../models/auth-type";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  AuthType = AuthType;
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent(type: AuthType) {

    const initialState: ModalOptions = {
      class: 'modal-dialog-centered',
      initialState: {
        type: type,
      }



    };
    this.bsModalRef = this.modalService.show(LoginComponent, initialState);
  }

}
