export class MainComponent {

  private username;
  
  private isAuthenticated: boolean = false;

  static selector = 'ngcMain';

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

  static $inject = ['$log'];  
  constructor(private $log) {
    this.username = 'alice';
    
  }

  public login(data,x) {
    console.log(data);
    this.isAuthenticated = true;
  }
  
  
}

