import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Espacio } from './../models/espacio';
@Injectable({
  providedIn: 'root',
})

export class EspacioService{
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getEspacios(){
    return this.http.get<Espacio[]>(this.basePath)
  }
}
