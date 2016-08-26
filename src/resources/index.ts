import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  //config.globalResources([]);
  config.globalResources('./elements/md-view');
}
