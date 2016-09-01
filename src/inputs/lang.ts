import {inject, NewInstance} from "aurelia-framework";
import {ValidationController, ValidationRules} from "aurelia-validation";
import {_, UIEvent} from "sigma-ui-framework";

@inject(NewInstance.of(ValidationController))
export class InputLang {
  lang = '';
  langModel = {};
  langModels = {
    en: new LangModel(),
    es: new LangModel()
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
    this.langModel = this.langModels[$event.detail];
  }

  validate() {
    this.controller.validate().then(e => console.log(e));
  }
}

export class LangModel {
  summary: string = '';
  description: string = '';

  constructor() {
    ValidationRules
      .ensure((m: LangModel) => m.summary)
      .required()
      .ensure(m => m.description)
      .required()
      .on(this);
  }
}
