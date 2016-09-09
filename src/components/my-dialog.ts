import {autoinject, inlineView} from "aurelia-framework";
import {UIDialog} from "sigma-ui-framework";

@autoinject()
@inlineView('<template><ui-content scroll padded><span innerhtml.bind="lipsum | markdown"></span></ui-content><ui-toolbar><ui-button click.trigger="close()" label="Close"></ui-buton></ui-toolbar></template>')
export class MyDialog extends UIDialog {
  lipsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit odio id tortor bibendum, ac sollicitudin sem ullamcorper. Sed molestie, ligula in dictum ultrices, nisi ligula tincidunt massa, tempor hendrerit nunc odio ac lacus. Vivamus vitae pellentesque velit, eget commodo orci. Donec suscipit, urna non luctus auctor, enim est ullamcorper ex, at ornare mi dolor nec enim. Donec in nulla non ante iaculis hendrerit. Nullam lobortis blandit justo, et vestibulum risus hendrerit nec. Nullam eleifend metus at magna imperdiet pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tincidunt risus eleifend quam gravida suscipit. Nam dignissim dui sit amet sagittis vehicula. Cras ultrices mattis dui, quis ornare sapien pellentesque ac. Proin eu tortor et lorem gravida congue. Cras varius sapien non quam commodo tincidunt. Praesent sed semper justo, nec maximus est. Fusce turpis nisl, viverra in ante sed, malesuada auctor augue.

Ut vel urna a augue pellentesque vulputate sit amet ut turpis. Curabitur in vulputate dui. Proin vel convallis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et felis in risus tincidunt lobortis. Suspendisse vestibulum semper erat scelerisque pharetra. Fusce gravida purus non nisl malesuada, quis gravida tortor sollicitudin. Mauris ultricies tristique lectus. Donec sagittis eros sit amet nibh ultrices ultrices. Nunc at aliquam justo, sed dignissim nunc. Vivamus at commodo est. Aenean porttitor, nunc at rutrum bibendum, diam leo finibus enim, in porttitor nisl mauris sed tortor. In sed ante eu sapien dapibus tristique.
`;

  width = "500px";
  height = "300px";

  modal = false;

  canActivate(model) {
    Object.assign(this, model);
    return true;
  }
}
