import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEntered(event) {
    console.log(event.offsetX, event.offsetY);
  }

}
