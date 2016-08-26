import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIConstants, UIEvent, UIApplication} from "sigma-ui-framework";
import {I18N} from 'aurelia-i18n';

@autoinject()
export class App {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = UIConstants.App.Title;
		config.showInfoBox = false;
		config.showLogo = true;
		config.map([{
			route: ['', 'home'],
			moduleId: './home/view',
			title: 'Home',
			nav: false,
			auth: false,
			name: 'home'
		}, {
				route: 'start',
				moduleId: './home/start',
				title: 'Getting Started',
				settings: { icon: 'fi-vaadin-automation' },
				nav: true,
				auth: false,
				name: 'start'
			}, {
				route: 'core',
				moduleId: './core/view',
				title: 'Core Elements',
				settings: { icon: 'fi-vaadin-layout' },
				nav: true,
				auth: false,
				name: 'core'
			}, {
				route: 'inputs',
				moduleId: './inputs/view',
				title: 'Input Elements',
				settings: { icon: 'fi-vaadin-input' },
				nav: true,
				auth: false,
				name: 'inputs'
			}, {
				route: 'components',
				moduleId: './components/view',
				title: 'Components',
				settings: { icon: 'fi-vaadin-toolbox' },
				nav: true,
				auth: false,
				name: 'components'
			}, {
				route: 'utilities',
				moduleId: './utilities/view',
				title: 'Utility Class',
				settings: { icon: 'fi-vaadin-tools' },
				nav: true,
				auth: false,
				name: 'utilities'
			}, {
				route: 'styles',
				moduleId: './styles/view',
				title: 'Glyphs & CSS Classes',
				settings: { icon: 'fi-vaadin-css-code' },
				nav: true,
				auth: false,
				name: 'styles'
			}]);
	}

	constructor(public element: Element, public app: UIApplication, public i18n: I18N) {
		app.IsAuthenticated = true;
	}

	attached() {
		UIEvent.subscribe('i18n:locale:changed', payload => {
			this.i18n.updateTranslations(this.element);
		});
	}

	changeLanguage($event) {
		console.log($event.detail);
		this.i18n.setLocale($event.detail.id);
	}
}
