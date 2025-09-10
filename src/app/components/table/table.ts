import { Component, Input, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IMetaDataColumn } from '../../interfaces/imeta-data-column';

@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() data!: any[];
  @Input() metaDataColumns!: IMetaDataColumn[];
  columns: string[] = [];

  ngOnChanges(change:SimpleChanges) {
    if (change['metaDataColumns']) {
      this.columns = this.metaDataColumns.map(col => col.field);
    }
  }
}
