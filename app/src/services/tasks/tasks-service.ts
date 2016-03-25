export class TasksService {

  static $inject = ['$log', 'serverService'];

  constructor(private $log, private serverService) { }

  public getTasks() {
    return this.serverService.get('/api/v1/tasks');
  };

  public addTask(task) {
    return this.serverService.post('/api/v1/tasks', task);
  }
}
