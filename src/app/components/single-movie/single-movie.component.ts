import { Component, Input } from "@angular/core";
import { SearchMovieApi } from "../../../models";

@Component({
  selector: 'single-movie',
  templateUrl: 'single-movie.component.html'
})
export class SingleMovieComponent {
  @Input() public singleMovie: SearchMovieApi;
}
