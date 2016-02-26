import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import * as angular from 'angular';
import * as Rx from 'rx';
import {
  MainComponent,
  TaskListComponent,
  LoginFormComponent,
  TaskComponent } from './components';

import {TasksService} from './services/tasks/tasks-service';
import {ServerService} from './services/server/server-service';

angular.module('ngcourse.server', [])
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .service('serverService', ServerService);

angular.module('ngcourse', [
  'ngcourse.server'
])
  .directive(
    MainComponent.selector,
    MainComponent.directiveFactory)
  .directive(
    TaskListComponent.selector,
    TaskListComponent.directiveFactory)
  .directive(
    LoginFormComponent.selector,
    LoginFormComponent.directiveFactory)
  .directive(
    TaskComponent.selector,
    TaskComponent.directiveFactory)
  .service('tasksService', TasksService)
  .run($log => $log.info('All ready!'));

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
