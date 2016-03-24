export class TasksService {

  static $inject = ['$log', 'serverService'];

  constructor(private $log, private serverService) { }

  public getTasks () {
    return this.serverService.get('/api/v1/tasks');
  };

 
}
