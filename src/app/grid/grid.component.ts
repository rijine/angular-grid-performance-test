import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()
  grid;
  constructor() {}
  ngOnInit() {}

  /* @HostListener('mousemove', ['$event'])
  setMouseposition(event: any) {
    console.log(event.offsetX, event.offsetY);
  } */
}
