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
import {TaskActions} from './actions/task-actions';
import {TasksStore} from './stores/tasks/tasks-store';

angular.module('ngcourse.dispatcher', [])
  .service('dispatcher', Rx.Subject);

angular.module('ngcourse.server', [])
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .service('serverService', ServerService);

angular.module('ngcourse', [
  'ngcourse.server',
  'ngcourse.dispatcher'
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
  .service('tasksActions', TaskActions)
  .service('tasksStore', TasksStore)
  .run((tasksActions) => {
    tasksActions.getTasks();
  });

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
