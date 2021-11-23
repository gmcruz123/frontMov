import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) {

   }

   getMovies(category:string){
     let headers : HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
    return this.http.get<any>(environment.API_URL +'movie/' + category , {headers})
   }

   getMoviesByTitle(query:string){
    return this.http.get<any>(environment.API_URL + 'search/movie?query='+ query )
   }

   getMovieById(idMovie:string) {
    let headers : HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
  return this.http.get<any>(environment.API_URL +'movie/' + idMovie , {headers})
   }
}
