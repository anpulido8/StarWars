import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  uri: string;

  constructor(private http: HttpClient) { }

  getFilms() {
    this.uri = 'https://swapi.co/api/films/';
    return this.http.get(this.uri);
  }
  getfilmById(id) {
    this.uri = `https://swapi.co/api/films/${id}/`;
    return this.http.get(this.uri);
  }
}
