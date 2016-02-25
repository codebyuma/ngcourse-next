export class TaskListComponent {

  private username: string;
  private tasks: any[];

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
    this.tasks = [
      {
        owner: 'alice',
        description: 'Build the dog shed.'
      },
      {
        owner: 'bob',
        description: 'Get the milk.'
      },
      {
        owner: 'alice',
        description: 'Fix the door handle.'
      }
    ];
  }

  public addTask() {
    this.$log.debug('Current number of tasks:', this.tasks.length);
  }

};
