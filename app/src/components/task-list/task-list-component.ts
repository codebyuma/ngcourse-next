
declare interface ITask {
  owner: string;
  description: string;
}
export class TaskListComponent {

  private numberOfTasks;
  private tasks: any[];

  static selector = 'ngcTasks';

  static directiveFactory: ng.IDirectiveFactory = () => ({
    restrict: 'E',
    controllerAs: 'ctrl',
    scope: {
      username: '=username'
    },
    bindToController: true,
    controller: TaskListComponent,
    template: require('./task-list-component.html')
  });

  static $inject = ['$log', 'tasksStore'];
  constructor(private $log, private tasksStore) {

    this.numberOfTasks = 0;
    this.tasksStore.tasks.subscribe(tasks => this.tasks = tasks);



  }

  public addTask() {
    this.$log.debug('Current number of tasks:', this.numberOfTasks);
    this.tasks.push({ owner: 'test', description: 'thing' });

  }

};