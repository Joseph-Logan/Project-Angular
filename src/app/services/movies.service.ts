import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api/';

  headers = new HttpHeaders({'Content-Type':'application/json','Accept':'application/json'});//.set('Content-Type','application/json'); // o new HttpHeaders({'Content-Type':'application/json'})

  constructor(private httpClient: HttpClient) { }

  getAllProfession(){
    return this.httpClient.get(this.API_ENDPOINT + 'professions');
  }
  
  getAllUsers(){
    return this.httpClient.get(this.API_ENDPOINT + 'users');
  }

  store(movie:Movie){
    return this.httpClient.post(this.API_ENDPOINT + 'users/store',JSON.stringify(movie),{headers:this.headers });
  }

  update(movie:Movie){
    console.log(movie);
    return this.httpClient.put(this.API_ENDPOINT + 'users/update/'+movie.id ,JSON.stringify(movie),{headers:this.headers });
  }

  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + 'users/delete/' + id, {headers:this.headers});
  }
}
