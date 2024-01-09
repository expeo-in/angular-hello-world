import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
  // styles: [
  //   `
  //     h2 {
  //       color: blue;
  //     }
  //   `,
  // ],
})
export class LikeComponent implements OnInit {
  @Input('count') total: number;
  @Input('control-type') controlType: string = 'Like';
  @Output() increment = new EventEmitter();

  // @Input() dislikeCount: number = 0;

  constructor() {
    this.total = 0;
  }

  ngOnInit(): void {}

  onClicked() {
    this.total += 1;
    // this.increment.emit(this.total);
    this.increment.emit({ count: this.total, type: this.controlType });
  }
}
