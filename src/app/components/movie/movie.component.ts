import { Component, Input } from '@angular/core';
import { SearchMovieApi } from 'src/models';

@Component({
  selector: 'movie-component',
  templateUrl: 'movie.component.html'
})
export class MovieComponent {
  @Input() public movie: SearchMovieApi;
}