 export class ServerService {

    static $inject = ['$http', 'API_BASE_URL'];

    constructor(private $http, private API_BASE_URL) { }

    public get(path) {
      return this.$http.get(`${this.API_BASE_URL}${path}`)
        .then(response => response.data);
    }
  }