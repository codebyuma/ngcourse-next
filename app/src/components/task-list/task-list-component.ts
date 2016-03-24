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

    constructor(private $log ) {
      this.numberOfTasks = 0;
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
      this.$log.debug('Current number of tasks:', this.numberOfTasks);
      this.tasks.push({ owner: 'test', description: 'thing' });
      
    }

  };