import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {AuthType} from "../../models/auth-type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: AuthType = AuthType.LOGIN;
  AuthType = AuthType;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
