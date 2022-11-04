import { Espacio } from './../models/espacio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) { }

  getEspacios(){
    return this.http.get<Espacio[]>(this.basePath)
  }

  newEspacios(espacios: Espacio){
    return this.http.post<Espacio>(this.basePath,espacios)
  }
}