import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/api/v1/auth/login';

  constructor(private http: HttpClient) {
  }


  login(user: UserModel): Observable<any> {
    return this.http.post(this.url, user).pipe(
      map(response => response),
      catchError(error => {
          alert(error.error)
          return error
        }
      )
    )
  }
}
