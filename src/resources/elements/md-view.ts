import {customElement, bindable, inlineView, autoinject, TaskQueue} from "aurelia-framework";
import {UIApplication, UIFormat} from "sigma-ui-framework";
import * as ZeroClipboard from "zeroclipboard";

@autoinject()
@customElement('md-view')
@inlineView('<template class="ui-markdown ui-block"><button class="ui-btn-copy" data-clipboard-text.bind="__code" ref="__copy">Copy</button><div ref="__md"><slot></slot></div></template>')
export class UIMdView {
  @bindable()
  type = 'html';

  __md;
  __code;
  __copy;
  constructor(public element: Element, public taskQueue: TaskQueue, public app: UIApplication) {
    if (this.element.hasAttribute('bash')) this.type = 'bash\n';
    if (this.element.hasAttribute('json')) this.type = 'json\n';
    if (this.element.hasAttribute('ts')) this.type = 'typescript\n';
  }

  attached() {
    this.taskQueue.queueMicroTask(() => {
      this.__code = this.__md.textContent;
      this.__md.innerHTML = UIFormat.toHTML('```' + this.type + '' + this.__md.textContent + '```');
      if (hljs) hljs.highlightBlock(this.__md);
      new ZeroClipboard(this.__copy)
        .on('aftercopy', () => this.app.toast("Copied!!!"));
    });
  }
}
