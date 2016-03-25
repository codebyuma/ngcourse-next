export class TaskAddComponent {

  static selector = 'ngcTaskAdd';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {},
      controller: TaskAddComponent,
      template: require('./task-add-component.html')
    };
  };

  static $inject = ['$log', 'tasksActions'];
  constructor(
    private $log,
    private tasksActions
   ) {
     //
  }

  save(task) {
    this.tasksActions.addTask(task);
  }
}