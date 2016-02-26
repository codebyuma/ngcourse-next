import {TASK_ACTIONS} from './action-constants';

export class TaskActions {

  static $inject = ['dispatcher', 'tasksService'];
  constructor(
    private dispatcher: Rx.Subject<any>,
    private tasksService
  ) { }

  getTasks() {
    this.tasksService.getTasks()
      .then(tasks => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.GET_TASKS,
        tasks: tasks
      }))
      .then(null, error => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.GET_TASKS_RESPONSE_ERROR,
        error: error
      }));
  }
}
