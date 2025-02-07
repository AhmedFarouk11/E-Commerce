import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User_token: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http: HttpClient) { }
  sendRegisterData(data: object): Observable<any> {
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data)
  }
  LoginApi(data: object): Observable<any> {
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data)
  }
  SaveData() {
    this.User_token.next(jwtDecode(JSON.stringify(localStorage.getItem('Usertoken'))))
  }
}

