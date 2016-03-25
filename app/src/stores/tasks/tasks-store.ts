import {TASK_ACTIONS} from '../../actions/action-constants';

export class TasksStore {

  private _tasks: Rx.ReplaySubject<any[]>;
  private _error: Rx.ReplaySubject<any>;


  static $inject = ['dispatcher'];
  constructor(private dispatcher) {
this._tasks = new Rx.ReplaySubject<any[]>(1);
    this._error = new Rx.ReplaySubject(1);
      this.registerActionHandlers();
  }

  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE)
        .subscribe(action => this._tasks.onNext(action.tasks));

    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE_ERROR)
        .subscribe(action => this._error.onNext({
          type: action.actionType,
          error: action.error
        }));
  }

  get tasks() {
    return this._tasks;
  }

  get error() {
    return this._error;
  }  
}