export class TaskListComponent {

  private username: string;
  private tasks: any[];

  static selector = 'ngcTasks';

  static $inject = ['$log', 'tasksService'];

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

  constructor(private $log, private tasksService) {
    this.tasks = [];

    this.tasksService
      .getTasks()
      .then(tasks => {
        this.tasks = tasks;
      })
      .then(null, error => this.$log.error(status, error));
  }

  public addTask() {
    this.$log.debug('Current number of tasks:', this.tasks.length);
  }

};
