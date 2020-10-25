import {Component, OnChanges } from '@angular/core';
import { SearchMovieApi } from 'src/models';
import {SearchMovieService} from "./services/search-movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnChanges {
  title = 'movies-library';
  public searchedMovie: SearchMovieApi;
  public searchedMovies: SearchMovieApi[];

  constructor(public movieService: SearchMovieService) {}

  ngOnChanges(changes) {
    console.log(changes)
  }

    public ngDoCheck(): void {
      if (this.movieService.selectMovie()) {
        if (this.movieService.selectMovie().length > 0) {
          this.searchedMovies = this.movieService.selectMovie()
          this.searchedMovie = undefined
        } else {
          this.searchedMovie = this.movieService.selectMovie()
          this.searchedMovies = undefined
        }
      }
    }

  // public onMovieEmit(movie: SearchMovieApi): void {
  //   this.searchedMovie = movie;
  // }
}

