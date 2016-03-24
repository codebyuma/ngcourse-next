import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';
import {MainComponent} from './components/main/main-component';

import * as angular from 'angular';
import * as Rx from 'rx';



angular.module('ngcourse', [])
  .directive(MainComponent.selector, MainComponent.directiveFactory);

angular.element(document).ready(
    () => angular.bootstrap(document, ['ngcourse'])
);
