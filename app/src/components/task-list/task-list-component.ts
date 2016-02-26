export class TaskListComponent {

  private username: string;
  private tasks: any[];

  static selector = 'ngcTasks';

  static $inject = ['$log', 'tasksStore', '$scope'];

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

  constructor(private $log, private tasksStore, private $scope) {
    this.tasks = [];

    var tasksStoreSubscription = this.tasksStore.tasks
      .subscribe(tasks => {
        this.tasks = tasks;
      });

    this.$scope.$on('$destroy', () => {
      tasksStoreSubscription.dispose();
    });
  }

  public addTask() {
    this.$log.debug('Current number of tasks:', this.tasks.length);
  }

};
