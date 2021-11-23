import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies = [];

  constructor(private movieService : MoviesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe(movies => this.movies = movies.results ? movies.results : [movies])
  }

  clickOnCard(movie:any) {
    this.router.navigate([movie.id], {relativeTo: this.activatedRoute});
  }

  changeCategory(event:string){
    this.movieService.getMovies(event).subscribe(movies => this.movies = movies.results ? movies.results : [movies])

  }

  search(searchText:string){
    searchText === ''?
    this.movieService.getMovies('popular').subscribe(movies => this.movies = movies.results ? movies.results : [movies]):
    this.movieService.getMoviesByTitle(searchText).subscribe(movies => this.movies = movies.results ? movies.results : [movies])

  }

}
