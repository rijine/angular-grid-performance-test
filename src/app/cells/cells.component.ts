import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css']
})
export class CellsComponent implements OnInit {
  @Input() cells;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEntered() {
    console.log('here');
  }

}
