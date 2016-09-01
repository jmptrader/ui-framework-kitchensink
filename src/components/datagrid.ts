import {moment, UIEvent} from "sigma-ui-framework";

export class CompDatagrid {
  data = [];
  dataCount = 5;

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

  dgMenu = [
    { id: 'view', text: "View Details", icon: 'fi-vaadin-eye' },
    { id: 'edit', text: "Edit", icon: 'fi-vaadin-pencil' },
    { id: 'delete', text: "Delete", icon: 'fi-vaadin-trash' },
    '-',
    { id: 'export', text: "Export Details", icon: 'fi-vaadin-download-symbol' }
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
        type: Math.ceil(Math.random() * 6),
        text: this.texts[Math.floor(Math.random() * 10)],
        date: moment().add(Math.round(Math.random() * -30), 'day'),
        number: (Math.random() * 10) * 500,
        amount: (Math.random() * 100) * 5000
      });
    }
    this.data = data;
  }
}
