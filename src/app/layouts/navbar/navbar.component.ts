import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Core/Services/Authentication/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  isLogin: boolean = false
  ngOnInit() {
    this.authService.User_token.subscribe(() => {
      if (this.authService.User_token.getValue() == null) {
        this.isLogin = false    
      } else {
        this.isLogin = true
      }
    })
  }
  LogOut() {
    localStorage.removeItem('Usertoken')
    this.router.navigate(['/login'])
    this.authService.User_token.next(null)
  }

}
