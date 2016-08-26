import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class CoreHome {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = "Core Elements";
		config.map([{
			route: ['', 'viewport'],
			moduleId: './viewport',
			title: 'Viewport',
			nav: true,
			auth: false,
			name: 'viewport'
		}, {
				route: 'pages',
				moduleId: './pages',
				title: 'Pages',
				nav: true,
				auth: false,
				name: 'pages'
			}, {
				route: 'grid',
				moduleId: './grid',
				title: 'Responsive Layout',
				nav: true,
				auth: false,
				name: 'grid'
			}]);
	}
}
