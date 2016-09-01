import {moment, UIEvent} from "sigma-ui-framework";

export class CompDatagrid {
  data = [];
  dataCount = 25;

  useVirtual = false;

  texts = [
    'Cras iaculis lectus quis arcu finibus lacinia.',
    'Curabitur ac elit non massa iaculis bibendum.',
    'Ut finibus justo sit amet mauris facilisis tempus sit amet sit amet neque.',
    'Etiam laoreet nunc sed lobortis tempor.',
    'Mauris commodo risus eu mattis pellentesque.',
    'Quisque lobortis ipsum vel libero convallis tristique.',
    'Sed ullamcorper neque tempus libero efficitur, nec consectetur nibh lacinia.',
    'Integer rhoncus libero in efficitur egestas.',
    'Mauris at metus ut purus ultrices blandit sit amet non justo.',
    'Vestibulum volutpat mi non magna condimentum convallis.',
    'Sed tincidunt lorem vel ex tempus accumsan.'
  ]

  attached() {
    setTimeout(() => this.generateData(this.dataCount), 500);
  }

  generateData(v) {
    this.useVirtual = v > 25;
    let data = [];
    for (let i = 0; i < v * 10; i++) {
      data.push({
        id: (i + 1),
        text: this.texts[Math.floor(Math.random() * 10)],
        text2: this.texts[Math.floor(Math.random() * 10)],
        text3: this.texts[Math.floor(Math.random() * 10)],
        text4: this.texts[Math.floor(Math.random() * 10)],
        type: Math.ceil(Math.random() * 5),
        date: moment().add(Math.floor(Math.random() * 30), 'day')
      });
    }
    this.data = data;
  }
}
