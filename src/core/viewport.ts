import {autoinject} from "aurelia-framework";

@autoinject()
export class CoreViewport {
	constructor() { }

	__zoom;
	__zoomer;
	hideZoom = true;
	zoomImage($event) {
		this.__zoom.src = $event.target.firstChild.src;
		this.hideZoom = false;
	}
}
