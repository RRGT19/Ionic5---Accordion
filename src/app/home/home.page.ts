import {Component} from '@angular/core';

interface IItem {
  name: string;
  image: string;
  options: {
    name: string;
  }[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: IItem[] = [];

  constructor() {
    for (let i = 0; i < 6; i++) {
      const item: IItem = {
        name: 'Title ' + (i + 1),
        image: 'https://via.placeholder.com/500',
        options: [
          {name: 'Option ' + (i + 1)},
          {name: 'Option ' + (i + 1)},
          {name: 'Option ' + (i + 1)},
        ]
      };
      this.items.push(item);
    }
  }

  onItemClick(option) {
    console.log(option);
  }

}
