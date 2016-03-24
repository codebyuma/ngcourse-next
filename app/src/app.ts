import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import {MainComponent, TaskListComponent, LoginFormComponent, TaskComponent} from './components';
import {TasksService} from './services/tasks/tasks-service';
import {ServerService} from './services/server/server-service';

import * as angular from 'angular';
import * as Rx from 'rx';



angular.module('ngcourse', ['ngcourse.services','ngcourse.b'])
  .directive(MainComponent.selector, MainComponent.directiveFactory)
  .directive(LoginFormComponent.selector, LoginFormComponent.directiveFactory)
  .directive(TaskComponent.selector, TaskComponent.directiveFactory)
  .directive(TaskListComponent.selector, TaskListComponent.directiveFactory);
  

angular.module('ngcourse.services', [])
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .service('tasksService', TasksService)
  .service('serverService', ServerService);


angular.element(document).ready(
    () => angular.bootstrap(document, ['ngcourse'])
);
