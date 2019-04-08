export class MoviesController {
  constructor() {
    this.movies = [];
  }

  $onChanges(changes) {
    console.log(this.movies);
    console.log(changes.movies);
  }
}
