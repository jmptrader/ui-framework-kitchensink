import {autoinject} from "aurelia-framework";
import {_} from "sigma-ui-framework";

@autoinject()
export class CssFlags {
  countries = {};
  constructor() {
    this.countries = _.chain(window.countries).sortBy('name').groupBy('continent').value();
  }
}
