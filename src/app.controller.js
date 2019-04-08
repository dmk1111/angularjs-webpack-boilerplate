export class AppController {
  constructor() {
    "ngInject";

    this.button = null;
    this.user = {};
  }

  $onInit() {
    this.button = "Logout";
    this.user = {
      email: "user@email.com",
      password: "3%2f43#}54f[st31"
    };
  }

  logout(event) {
    // Make a service call or simmilar...
    if (event.userEmail === this.user.email) {
      console.log(">>>User has been logged out: ", { email: event.userEmail });
    }
  }
}
