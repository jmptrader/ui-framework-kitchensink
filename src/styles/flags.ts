import {autoinject} from "aurelia-framework";
import {_} from "sigma-ui-framework";

@autoinject()
export class CssFlags {
	countries = {};
	constructor() {
		this.countries = _.groupBy(window.countries, 'continent');
		console.log(this.countries);
	}
}
