import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  errorText: string;

  constructor(formBuilder: FormBuilder, private authService: AuthService,
              private router: Router) {
    this.loginForm = formBuilder.group({
      username: formBuilder.control('', [Validators.required,
        Validators.minLength(3)]),
      password: formBuilder.control('', [Validators.required, Validators.minLength(4)
      ])
    });
  }

  login(): void {
    if (this.authService.login(this.loginForm.value.username,
        this.loginForm.value.password)) {
      this.router.navigate(['/admin']);
    } else {
      this.errorText = 'Invalid username or password';
    }
  }

  ngOnInit() {
  }

}
