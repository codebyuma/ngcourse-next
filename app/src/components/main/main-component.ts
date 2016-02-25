export class MainComponent {

  private isAuthenticated;
  private username;

  static selector = 'ngcMain';

  static $inject = ['$log'];

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./main-component.html'),
      controller: MainComponent,
      controllerAs: 'ctrl',
      bindToController: true
    };
  };

  constructor(private $log) {
    this.isAuthenticated = false;
  }

  public login (data) {
    this.username = data.username;
    this.isAuthenticated = true;
  }
}
