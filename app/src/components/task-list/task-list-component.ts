export class TaskListComponent {

  private numberOfTasks;
  private username;

  static selector = 'ngcTasks';

  static directiveFactory: ng.IDirectiveFactory = () => ({
    restrict: 'E',
    controllerAs: 'ctrl',
    scope: {},
    bindToController: {
      username: '=username'
    },
    controller: TaskListComponent,
    template: require('./task-list-component.html')
  });

  constructor(private $log ) {
    this.numberOfTasks = 0;
  }

  public addTask() {
    this.$log.debug('Current number of tasks:', this.numberOfTasks);
    this.numberOfTasks += 1;
  }

};
