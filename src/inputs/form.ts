import {inject, NewInstance} from "aurelia-framework";
import {ValidationController, ValidationRules} from "aurelia-validation";
import {_} from "sigma-ui-framework";

@inject(NewInstance.of(ValidationController))
export class InputForm {
  countries = _.groupBy(window.countries, 'continent');
  model: FormModel;
  constructor(public controller: ValidationController) {
    this.model = new FormModel();
  }

  validate() {
    this.controller.validate();
  }
}

export class FormModel {
  firstName: string = '';
  lastName: string = '';

  latitude: number;
  longitude: number;

  email: string;
  phone: string;

  gender: string = 'male';
  info: string;

  nationality: string;
  countries: string;

  birthday: string;
  dateRangeStart: string;
  dateRangeEnd: string;

  movies = [
    { name: 'Casablanca', selected: false },
    { name: 'Gone with the Wind', selected: false },
    { name: 'The Godfather', selected: false },
    { name: 'The Good, The Bad, The Ugly', selected: false },
    { name: 'Cape Fear', selected: false }
  ]
  cuisine: string = 'None';
  cuisines = ['None', 'Italian', 'Mexican', 'Indian', 'Lebanese', 'Japanese']

  constructor() {
    ValidationRules
      .ensure((m: FormModel) => m.firstName)
      .required()
      .maxLength(20)
      .ensure(m => m.lastName)
      .required()
      .maxLength(20)
      .ensure(m => m.email)
      .required()
      .email()
      .ensure(m => m.phone)
      .required()
      .satisfiesRule('phone')
      .ensure(m => m.latitude)
      .required()
      .satisfiesRule('decimal', -90, 90)
      .ensure(m => m.longitude)
      .required()
      .satisfiesRule('decimal', -180, 180)
      .on(FormModel);
  }
}
