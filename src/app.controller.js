import * as moviesMock from '../mocks/movies.json';

export class AppController {
  constructor() {
    "ngInject";

    this.button = null;
    this.user = {};
    this.movies = [];
  }

  $onInit() {
    this.button = "Logout";
    this.user = {
      email: "user@email.com",
      password: "3%2f43#}54f[st31"
    };
    this.movies = moviesMock.data;
  }

  logout(event) {
    // Make a service call or simmilar...
    if (event.userEmail === this.user.email) {
      console.log(">>>User has been logged out: ", { email: event.userEmail });
    }
  }
}
