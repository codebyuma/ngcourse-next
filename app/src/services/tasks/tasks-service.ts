export class TasksService {

  static $inject = ['$log', '$http'];

  constructor(private $log, private $http) {
  }

  public getTasks () {
    return this.$http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .then(response => response.data);
  };
}
