"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(request, response) {
    response.json('Index');
  }
}

exports. default = new HomeController();
