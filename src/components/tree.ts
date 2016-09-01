import {_, UITreeOptions, UIEvent} from 'sigma-ui-framework';

export class CompTree {
  __tree;
  checked;
  treeModel;
  treeSelected = 'UAE';
  treeOpts = new UITreeOptions({
    showCheckbox: true,
    selectionLevel: 0
  });
  treeOpts2 = new UITreeOptions({
    showCheckbox: false,
    selectionLevel: 1
  });

  constructor() {
    var ct = [];
    _.forEach(_.groupBy(window.countries, 'continent'), (v: any, k: string) => {
      let c = {
        id: _.camelCase(k),
        name: k,
        expanded: k == 'Asia',
        children: []
      }
      _.forEach(v, (o: any) => {
        c.children.push({
          id: o.iso3,
          name: o.name,
          leaf: true,
          iconGlyph: `ui-flag ${o.iso3}`
        })
      });
      ct.push(c);
    });
    this.treeModel = ct;
  }

  attached() {
    UIEvent.queueTask(() => {
      this.__tree.check('UAE', 1, true);
      this.__tree.check('IND', 1, true);
      this.checked = this.__tree.getChecked();
    })
  }
}
