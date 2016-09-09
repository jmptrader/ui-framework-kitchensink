import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class InputsHome {
  private router: Router;

  configureRouter(config, router: Router) {
    this.router = router;
    config.title = "Input Elements";
    config.map([{
      route: ['', 'form'],
      moduleId: './form',
      title: 'Form',
      nav: true,
      auth: false,
      name: 'form'
    }, {
        route: 'button',
        moduleId: './button',
        title: 'Buttons',
        nav: true,
        auth: false,
        name: 'buttons'
      }, {
        route: 'input',
        moduleId: './input',
        title: 'Basic Inputs',
        settings: { disabled: true },
        nav: true,
        auth: false,
        name: 'input'
      }, {
        route: 'options',
        moduleId: './options',
        title: 'Checkbox/Radio',
        settings: { disabled: true },
        nav: true,
        auth: false,
        name: 'file'
      }, {
        route: 'lists',
        moduleId: './lists',
        title: 'List Inputs',
        settings: { disabled: true },
        nav: true,
        auth: false,
        name: 'lists'
      }, {
        route: 'file',
        moduleId: './file',
        title: 'File Inputs',
        settings: { disabled: true },
        nav: true,
        auth: false,
        name: 'file'
      }, {
        route: 'lang',
        moduleId: './lang',
        title: 'Language Selector',
        nav: true,
        auth: false,
        name: 'lang'
      }, {
        route: 'markdown',
        moduleId: './markdown',
        title: 'Markdown Editor',
        settings: { disabled: true },
        nav: true,
        auth: false,
        name: 'markdown'
      }]);
  }
}
