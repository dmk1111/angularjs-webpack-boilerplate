import { findMovieById } from "../../../helpers";

export class MovieInfoController {
  constructor($stateParams) {
    'ngInject';
    this.movie = findMovieById($stateParams.movieId);
  }

  $onInit() {
    console.log(this.movie);
  }
}
