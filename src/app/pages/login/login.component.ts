import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      }
    )
  }

  submitLogin() {
    var loginData = this.loginForm.getRawValue() as LoginModel;
    this.authService.login(loginData)
      .subscribe(
        result => {
          var token = result.accessToken;
          this.authService.setToken(token);
          this.router.navigate(['/home'])
        },
        error => {
          console.log(error)
          this.snackBar.open(error.error, 'Fechar', { duration: 3000 });
        }
      )
  }

}
