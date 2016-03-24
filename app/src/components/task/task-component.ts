export class TaskComponent {

    static selector = 'ngcTask';

    static directiveFactory: ng.IDirectiveFactory = () => {
      return {
        restrict: 'E',
        controllerAs: 'ctrl',
        scope: {},
        bindToController: {
          task: '='
        },
        controller: TaskComponent,
        template: require('./task-component.html')
      };
    };

    private task;
    constructor(private $log) {


    }
  };