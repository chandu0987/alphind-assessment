import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Activity {
  id: number;
  title: string;
  dueDate: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  fetchActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(
      `https://fakerestapi.azurewebsites.net/api/v1/Activities`
    );
  }
}
