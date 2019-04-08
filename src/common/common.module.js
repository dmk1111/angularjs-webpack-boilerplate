import angular from 'angular';

// components
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { MoviesComponent } from "./components/movies/movies.component";

const MODULE_NAME = 'common';
const MODULE_IMPORTS = [];

export const CommonModule = angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(AppNavComponent.selector, AppNavComponent)
  .component(MoviesComponent.selector, MoviesComponent)
  .name;
