import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { SearchMovieApi } from 'src/models';
import { SearchMovieService } from '../../services/search-movie.service';
@Component({
  selector: 'main-navbar',
  templateUrl: 'main-navbar.component.html'
})
export class MainNavbarComponent implements OnInit, OnDestroy {
  @Output() public emitMovie = new EventEmitter<SearchMovieApi>();
  public searchQuery: string;
  public isSearchedById: boolean = false;
  public movie: SearchMovieApi;

  constructor(private searchMovieService: SearchMovieService) {}

  public ngOnInit(): void {
    console.log('Komponent zainicjalizowany')
  }

  public ngOnDestroy(): void {
    // Unsubscribe Subscription
  }

  public searchMovieByKeypress($event): void {
    const keyName = 'Enter';

    if ($event.code === keyName) {
      this.searchMovie()
    }
  }

  public searchMovie(): void {
    if (this.searchQuery === undefined || this.searchQuery.length === 0) {
      return;
    }

    if (this.isSearchedById) {
      this.searchMovieService.getMovieById(this.searchQuery).subscribe((res: any) => {
        this.movie = res;
        this.emitMovie.emit(this.movie);
      })
    } else {
      this.searchMovieService.getMovieByTitle(this.searchQuery).subscribe((res: any) => {
        this.movie = res;
        this.emitMovie.emit(this.movie);
      })
    }

    this.searchQuery = undefined;
  }

  public setSearchById(): void {
    this.isSearchedById = !this.isSearchedById;
  }
}
