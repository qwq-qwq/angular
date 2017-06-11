import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: formBuilder.control('', [Validators.required,
        Validators.minLength(3)]),
      password: formBuilder.control('', [Validators.required, Validators.minLength(4)
      ])
    });
  }

  ngOnInit() {
  }

}
