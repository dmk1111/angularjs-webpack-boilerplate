import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularLoadingBar from 'angular-loading-bar';

// modules
import { CommonModule } from './common/common.module';
import { AppComponent } from './app.component';
import './app.styles.scss';

const MODULE_NAME = 'app-root';
const MODULE_IMPORTS = [
  uiRouter,
  angularLoadingBar,
  CommonModule
];

const _app = angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(AppComponent.selector, AppComponent)
  .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state(AppComponent.selector, {
        url: `/`,
        component: AppComponent.selector,
        data: {
          requiredAuth: true
        }
      });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  })
  .value('EventEmitter', payload => ({ $event: payload }))
  .run(($transitions, cfpLoadingBar) => {
    'ngInject';

    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  })
  .name;
