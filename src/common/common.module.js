import angular from 'angular';

// components
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieInfoComponent } from "./components/movie-info/movie-info.component";

const MODULE_NAME = 'common';
const MODULE_IMPORTS = [];

export const CommonModule = angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(MovieInfoComponent.selector, MovieInfoComponent)
  .component(AppNavComponent.selector, AppNavComponent)
  .component(MoviesComponent.selector, MoviesComponent)
  .name;
