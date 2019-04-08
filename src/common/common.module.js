import angular from 'angular';

// components
import { AppNavComponent } from './components/app-nav/app-nav.component';
// styles
import './components/app-nav/app-nav.component.scss';

const MODULE_NAME = 'common';
const MODULE_IMPORTS = [];

export const CommonModule = angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(AppNavComponent.selector, AppNavComponent)
  .name;
