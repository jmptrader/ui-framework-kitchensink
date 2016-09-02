import {inject, NewInstance} from "aurelia-framework";
import {ValidationController, ValidationRules} from "aurelia-validation";
import {_, UIEvent} from "sigma-ui-framework";

@inject(NewInstance.of(ValidationController))
export class InputLang {
  lang = '';
  langModel = {};
  langDir = 'ltr';
  langModels = {
    ar: new LangModel('### هل تتحدث العربية؟'),
    en: new LangModel('### Do you speak English?'),
    es: new LangModel('### ¿Hablas español?'),
    fr: new LangModel('### Parlez-vous français?'),
    de: new LangModel('### Sprechen sie deutsch?')
  }

  __langInput;

  constructor(public controller: ValidationController) {
  }

  attached() {
    UIEvent.queueTask(() => {
      ValidationRules
        .ensure((m: InputLang) => m.langModels)
        .satisfiesRule('language', this.controller, this.__langInput)
        .on(this);

      // this.controller.addObject(this.langModels.en);
      // this.controller.addObject(this.langModels.es);
    });
  }

  changeLang($event) {
    this.controller.reset({ object: this.langModel });
    this.langModel = this.langModels[$event.detail] || {};
    this.langDir = $event.detail == 'ar' ? 'rtl' : 'ltr';
  }

  addLang($event) {
    this.langModels[$event.detail] = new LangModel();
  }

  removeLang($event) {
    delete this.langModels[$event.detail];
  }

  validate() {
    this.controller.validate().then(e => console.log(e));
  }
}

export class LangModel {
  summary: string = '';
  description: string = '';

  constructor(su?, de?) {
    this.summary = su;
    this.description = de;
    ValidationRules
      .ensure((m: LangModel) => m.summary)
      .required()
      .ensure(m => m.description)
      .required()
      .on(this);
  }
}
