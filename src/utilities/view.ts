import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class UtilsHome {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = "Utility Classes";
		config.map([{
			route: ['', 'app'],
			moduleId: './app',
			title: 'Application',
			nav: true,
			auth: false,
			name: 'app'
		}, {
				route: 'http',
				moduleId: './http',
				title: 'Http Service',
				nav: true,
				auth: false,
				name: 'http'
			}, {
				route: 'event',
				moduleId: './event',
				title: 'Event Service',
				nav: true,
				auth: false,
				name: 'event'
			}, {
				route: 'convert',
				moduleId: './convert',
				title: 'Converters & Formatters',
				nav: true,
				auth: false,
				name: 'convert'
			}, {
				route: 'utils',
				moduleId: './utils',
				title: 'Utilities',
				nav: true,
				auth: false,
				name: 'utils'
			}]);
	}
}
