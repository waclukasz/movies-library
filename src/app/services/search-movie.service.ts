import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchMovieApi } from '../../models'

@Injectable({ providedIn: 'root' })
export class SearchMovieService {
  constructor(private http: HttpClient) {}

  public consoleState(): void {
   console.log('Działa')
  }

  public getMovieByTitle(title: string): Observable<SearchMovieApi> {
    return this.http.get<SearchMovieApi>(`${environment.baseApiUrl}&t=${title}`)
  }

  public getMovieById(id: string): Observable<SearchMovieApi> {
    return this.http.get<SearchMovieApi>(`${environment.baseApiUrl}&i=${id}`)
  }
}
