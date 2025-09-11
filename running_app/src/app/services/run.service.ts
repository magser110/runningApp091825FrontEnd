import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Run } from '../models/run';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  private url = 'http://localhost:3000/runs'

  constructor(private http: HttpClient) { }

  getRuns(): Observable<Run[]>{
    return this.http.get<Run[]>(this.url);
  }

  getRunById(id: number): Observable<Run>{
    return this.http.get<Run>(`${this.url}/${id}`);
  }

  createRun(run: {distance: number; time: number}): Observable<Run>
{
return this.http.post<Run>(this.url, run);
}

  updateRun(run: Run): Observable<Run>{
    return this.http.put<Run>(`${this.url}/${run.id}`, run);
  }

  deleteRun(id: number): Observable<Run>{
    return this.http.delete<Run>(`${this.url}`);
  }
}
