import {Component, Input} from '@angular/core';

/**
 * Based on:
 * https://codepen.io/raubaca/pen/PZzpVe
 */

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent {

  @Input() imageUrl: string;
  @Input() itemIndex: number;
  @Input() title: string;

}
