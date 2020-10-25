import {Component, Input, OnInit} from '@angular/core';
import { SearchMovieApi } from 'src/models';

@Component({
  selector: 'movie-component',
  templateUrl: 'movie.component.html'
})
export class MovieComponent implements OnInit {
  @Input() public movie: SearchMovieApi;

  public ngOnInit(): void {
    console.log(this.movie)
  }
}
