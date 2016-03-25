import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';

import {MainComponent, TaskListComponent, LoginFormComponent, TaskComponent, TaskAddComponent} from './components';
import {TasksService} from './services/tasks/tasks-service';
import {ServerService} from './services/server/server-service';

import {TasksActions} from './actions/tasks/tasks-actions';
import {TasksStore} from './stores/tasks/tasks-store';
import * as angular from 'angular';
import * as Rx from 'rx';



angular.module('ngcourse', ['ngcourse.services', 'ngcourse.dispatcher'])
  .directive(MainComponent.selector, MainComponent.directiveFactory)
  .directive(LoginFormComponent.selector, LoginFormComponent.directiveFactory)
  .directive(TaskComponent.selector, TaskComponent.directiveFactory)
  .directive(TaskListComponent.selector, TaskListComponent.directiveFactory)
  .directive(TaskAddComponent.selector,TaskAddComponent.directiveFactory)
  .service('tasksActions', TasksActions)
  .service('tasksStore', TasksStore)
  .run(tasksActions => {
    tasksActions.getTasks();
  })




angular.module('ngcourse.services', [])
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .service('tasksService', TasksService)
  .service('serverService', ServerService);

angular.module('ngcourse.dispatcher', [])
  .service('dispatcher', Rx.Subject);

angular.element(document).ready(
    () => angular.bootstrap(document, ['ngcourse'])
);
