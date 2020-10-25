import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchMovieApi } from '../../models'

@Injectable({ providedIn: 'root' })
export class SearchMovieService {
  public searchedMovie: any;
  constructor(private http: HttpClient) {}

  public consoleState(): void {
   console.log('Działa')
  }

  public getMovieByTitle(title: string, isTitleUnknown: boolean): Observable<SearchMovieApi> {
    const searchParameter: string = isTitleUnknown ? 's' : 't';
    return this.http.get<SearchMovieApi>(`${environment.baseApiUrl}&${searchParameter}=${title}`)
  }

  public getMovieById(id: string): Observable<SearchMovieApi> {
    return this.http.get<SearchMovieApi>(`${environment.baseApiUrl}&i=${id}`)
  }

  public setMovie(movie: SearchMovieApi): void {
    this.searchedMovie = movie;
    console.log(this.searchedMovie);
  }

  public selectMovie(): any {
    return this.searchedMovie;
  }
}
