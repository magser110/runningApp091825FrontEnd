import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Run } from '../models/run';

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

  getRuns(): Observable<{payload: Run[]}>{
    return this.http.get<{payload: Run[]}>(this.url, {
      headers: this.getAuthHeaders()
    });
  }

  getRunById(id: number): Observable<Run>{
    return this.http.get<Run>(`${this.url}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  // createRun(run: {distance: number; time: number}): Observable<Run>{
  createRun(runData:any): Observable<Run>{
    return this.http.post<Run>(this.url, runData, {
      headers: this.getAuthHeaders()
    });
  }

  updateRun(run: Run): Observable<Run>{
    return this.http.put<Run>(`${this.url}/${run.id}`, run, {
      headers: this.getAuthHeaders()
    });
  }

  deleteRun(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`,
      { headers: this.getAuthHeaders() }
    );
  }
}
