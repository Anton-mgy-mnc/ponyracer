/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceModel } from './models/race.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private httpClient: HttpClient) { }



  list(): Observable<Array<RaceModel>> {
    return this.httpClient.get<Array<RaceModel>>('https://ponyracer.ninja-squad.com/api/races?status=PENDING')
  }
}
