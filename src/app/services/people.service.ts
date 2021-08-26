import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PeopleResponse } from './people.interface';

@Injectable()
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  public getPeople(): Observable<PeopleResponse> {

    const url = 'https://swapi.dev/api/people';

    return this.httpClient.get<PeopleResponse>(url);

  }

}
