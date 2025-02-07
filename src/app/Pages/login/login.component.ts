import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Core/Services/Authentication/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  isLoading:boolean=false
  errorMsg:string=''
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  })
  LoginSubmit() {
    if (this.loginform.valid) {
      this.isLoading=true
      this.authService.LoginApi(this.loginform.value).subscribe({
        next: (res) => {
          if (res.message == 'success') {
            localStorage.setItem('Usertoken', res.token)
           this.authService.SaveData()
            this.router.navigate(['/home'])
            this.isLoading=false
            
          }
        },
        error: (err) => {
          console.log(err);
          this.isLoading=false
        }
      })
     
    }

  }
}
