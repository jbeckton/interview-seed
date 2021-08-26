import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetsResponse } from './planets.interface';


@Injectable()
export class PlanetsService {
  constructor(private httpClient: HttpClient) { }

  public getPlanets(): Observable<PlanetsResponse> {

    const url = 'https://swapi.dev/api/planets';

    return this.httpClient.get<PlanetsResponse>(url);

  }
}
