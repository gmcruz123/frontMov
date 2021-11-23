import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  url_images = environment.URL_IMAGES;
  movie = {vote_average:0,poster_path:'',
  title:'', runtime:0, status:'',
  overview:'', tagline:''}

  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idMovie = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.movieService.getMovieById(idMovie).subscribe(movie => this.movie= movie);
  }

}
