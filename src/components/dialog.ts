import {autoinject} from "aurelia-framework";
import {UIApplication, UIDialogService} from "sigma-ui-framework";
import {MyDialog} from "./my-dialog";

@autoinject()
export class CompDialog {
  constructor(public app: UIApplication, public dialogService: UIDialogService) { }

  dlgModel = {
    icon: '',
    title: 'Dialog Title',
    modal: false,
    drag: false,
    resize: false,
    maximize: false
  }

  alert = {
    message: 'This is an alert message',
    type: 'info',
    yesLabel: 'OK',
    noLabel: 'Cancel'
  }

  toast = {
    icon: '',
    autoHide: 5000,
    message: 'This is a toast message',
    theme: 'normal'
  }


  openDialog() {
    console.log(this.dlgModel);
    this.dialogService.show(MyDialog, this.dlgModel);
  }

  openToast() {
    this.app.toast(this.toast);
  }

  openAlert() {
    this.app.alert(this.alert);
  }

  openConfirm() {
    this.app.confirm(this.alert)
      .then(() => this.app.toastSuccess('You clicked yes :)'))
      .catch(() => this.app.toastError('You clicked no :('));
  }
}
