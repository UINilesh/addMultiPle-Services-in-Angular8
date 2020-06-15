import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const apiUrl = 'https://jsonplaceholder.typicode.com/comments?postId=1';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {
    
   }

  getData(): Observable<any> {
    const response1 = this.http.get(apiUrl + '1');
    const response2 = this.http.get(apiUrl + '2');
    const response3 = this.http.get(apiUrl + '3');
    const response4 = this.http.get(apiUrl + '4');
    return forkJoin([response1, response2, response3, response4]);
  }
}
