import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/api/v1/product';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(response => response), catchError(error => {
          alert(error.error);
          return error;
        }
      )
    );
  }

  getProductByCategory(category: String): Observable<any> {
    return this.http.get(this.url + "?category=" + category).pipe(
      map(response => response), catchError(error => {
          alert(error.error);
          return error;
        }
      )
    );
  }

  getProductBYId(id: String): Observable<any> {
    return this.http.get(this.url + "/" + id).pipe(
      map(response => response), catchError(error => {
          alert(error.error);
          return error;
        }
      )
    );
  }
}
