import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { urlBase } from 'src/environments/environment';
import { RegistrationModel } from 'src/app/model/registration-model';


const USER_GET = `${urlBase}users/`;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> | undefined{
      return this.http.get<any>(USER_GET).pipe(
        tap(),
        catchError(this.handleError)
      );
  }

  public delete(userId: number): Observable<any> | undefined{
      return this.http.delete<any>(`${USER_GET}${userId}`).pipe(
        tap(),
        catchError(this.handleError)
      );
  }

  public insert(user: RegistrationModel): Observable<any> | undefined{
      return this.http.post<any>(`${USER_GET}`, user).pipe(
        tap(),
        catchError(this.handleError)
      );
  }

  public update(user: any): Observable<any> | undefined{
      return this.http.patch<any>(`${USER_GET}`, user).pipe(
        tap(),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code '+error.status+', body was: '+error.error
      );
    }

    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}
