import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class ComponentsHome {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = "Components";
		config.map([{
			route: ['', 'menus'],
			moduleId: './menus',
			title: 'Menu',
			nav: true,
			auth: false,
			name: 'menus'
		}, {
				route: 'panel',
				moduleId: './panel',
				title: 'Panel',
				nav: true,
				auth: false,
				name: 'panel'
			}, {
				route: 'dialog',
				moduleId: './dialog',
				title: 'Dialog',
				nav: true,
				auth: false,
				name: 'dialog'
			}, {
				route: 'tabs',
				moduleId: './tabs',
				title: 'Tab Panel',
				nav: true,
				auth: false,
				name: 'tabs'
			}, {
				route: 'login',
				moduleId: './login',
				title: 'Login Panel',
				nav: true,
				auth: false,
				name: 'login'
			}, {
				route: 'datagrid',
				moduleId: './datagrid',
				title: 'Datagrid',
				nav: true,
				auth: false,
				name: 'datagrid'
			}, {
				route: 'tree',
				moduleId: './tree',
				title: 'Tree Panel',
				nav: true,
				auth: false,
				name: 'tree'
			}, {
				route: 'charts',
				moduleId: './charts',
				title: 'Chart Panel',
				nav: true,
				auth: false,
				name: 'charts'
			}]);
	}
}
