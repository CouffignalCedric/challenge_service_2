import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './models/cocktail.model';
@Injectable({
  providedIn: 'root'
})
export class CocktailService {

constructor(public http: HttpClient) { }
getCocktails(): Observable<Cocktail[]> {
  return this.http.get<Cocktail[]>("assets/cocktails.json");
  console.log(this.getCocktails());
}
}
