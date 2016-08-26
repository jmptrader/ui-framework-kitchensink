import {Aurelia} from 'aurelia-framework'
import {I18N} from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';
import environment from './environment';
import "highlight.js";

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
	warnings: {
		wForgottenReturn: false
	}
});

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.feature('resources')
		.plugin('aurelia-validation')
		.plugin('aurelia-validatejs')
		.plugin('aurelia-i18n', (instance) => {
			// register backend plugin
			instance.i18next.use(Backend);

			// adapt options to your needs (see http://i18next.com/docs/options/)
			// make sure to return the promise of the setup method, in order to guarantee proper loading
			return instance.setup({
				backend: {                                  // <-- configure backend settings
					loadPath: './locales/{{lng}}/{{ns}}.json' // <-- XHR settings for where to get the files from
				},
				lng: 'en',
				defaultNS: 'strings',
				ns: ['strings'],
				lowerCaseLng: true,
				attributes: ['t', 'i18n'],
				fallbackLng: 'en',
				debug: true
			});
		})
		.plugin('sigma-ui-framework', function(config: UIConfig) {
		});

	if (environment.debug) {
		aurelia.use.developmentLogging();
	}

	if (environment.testing) {
		aurelia.use.plugin('aurelia-testing');
	}

	aurelia.start()
		.then(() => aurelia.setRoot())
		.then(() => {
			var splash = window.document.querySelector('.ui-splash');
			splash.classList.add('animate');
			setTimeout(() => {
				splash.parentElement.removeChild(splash);
			}, 1000);
		})
		.catch(e => {
			console.log(e);
		});;
}
