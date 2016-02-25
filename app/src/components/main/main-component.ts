export class MainDirectiveCtrl {

  private username;
  private numberOfTasks;

  static selector = 'ngcMain';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./main-component.html'),
      controller: MainDirectiveCtrl,
      controllerAs: 'ctrl',
      bindToController: true
    };
  };

  constructor() {
    this.username = 'alice';
    this.numberOfTasks = 0;
  }
}
