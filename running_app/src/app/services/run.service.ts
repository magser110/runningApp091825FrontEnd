import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Run, NewRun } from '../models/run';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  private url = 'http://localhost:3000/runs'

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getRuns(): Observable< Run[]>{
    return this.http.get<Run[]>('http://localhost:3000/user_runs', {
      headers: this.getAuthHeaders()
    });
  }

  getRunById(id: number): Observable<Run>{
    return this.http.get<Run>(`${this.url}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  // createRun(run: {distance: number; time: number}): Observable<Run>{
  createRun(runData:NewRun): Observable<Run>{
    return this.http.post<Run>(this.url, runData, {
      headers: this.getAuthHeaders()
    });
  }

updateRunById(id: number, runData: NewRun | Partial<NewRun>): Observable<Run> {
  return this.http.put<Run>(
    `${this.url}/${id}`,
    { run: runData },
    { headers: this.getAuthHeaders() }
  );
}

  deleteRun(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`,
      { headers: this.getAuthHeaders() }
    );
  }
}
