import {autoinject} from "aurelia-framework";
import {UIDialogService} from "sigma-ui-framework";
import {MyDialog} from "./my-dialog";

@autoinject()
export class CompDialog {
  constructor(public dialogService: UIDialogService) { }

  dlgModel = {
    icon: '',
    title: 'Dialog Title',
    modal: false,
    drag: false,
    resize: false,
    maximize: false
  }

  openDialog() {
    console.log(this.dlgModel);
    this.dialogService.show(MyDialog, this.dlgModel);
  }
}
