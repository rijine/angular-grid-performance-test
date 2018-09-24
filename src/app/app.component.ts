import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'performance-tryout';
  grid = {
    rows: [
      {
        id: 0,
        cells: [{ id: 0 }]
      }
    ]
  };
  rowsCount = 300;
  cellsCount = 100;

  renderGrid() {
    this.generate();
  }

  clearIt() {
    this.grid = {
      rows: []
    };
  }

  generate() {
    this.clearIt();
    for (let i = 0; i < this.rowsCount; i++) {
      const row = {
        id: i,
        cells: []
      };
      for (let j = 0; j < this.cellsCount; j++) {
        row.cells.push({ id: j });
      }
      this.grid.rows.push(row);
    }
  }
}
