import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class StyleHome {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = "Glyphs & CSS Classes";
		config.map([{
			route: ['', 'typo'],
			moduleId: './typo',
			title: 'Typography',
			nav: true,
			auth: false,
			name: 'typo'
		}, {
				route: 'helper',
				moduleId: './helper',
				title: 'Helper Classes',
				nav: true,
				auth: false,
				name: 'helper'
			}, {
				route: 'glyphs',
				moduleId: './glyphs',
				title: 'Glyph Icons',
				nav: true,
				auth: false,
				name: 'glyphs'
			}, {
				route: 'flags',
				moduleId: './flags',
				title: 'Flag Glyphs',
				nav: true,
				auth: false,
				name: 'flags'
			}]);
	}
}
