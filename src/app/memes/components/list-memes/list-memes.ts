import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { Container } from '../../../components/container/container';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IMeme } from '../../../interfaces/imeme';
import { MemeService } from '../../services/meme-service';

@Component({
  selector: 'app-list-memes',
  standalone: true,
  imports: [
    Container,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './list-memes.html',
  styleUrl: './list-memes.css'
})
export class ListMemes implements AfterViewInit {
  displayedColumns = ['thumb', 'name', 'size', 'boxes', 'link'];
  dataSource = new MatTableDataSource<IMeme>([]);
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private memeSrv = inject(MemeService);

  constructor() {
    this.memeSrv.getMemes().subscribe({
      next: (rows) => {
        this.dataSource.data = rows;
        this.loading = false;
      },
      error: (e) => { console.error(e); this.loading = false; }
    });

    // filtro por nombre
    this.dataSource.filterPredicate = (row, filter) =>
      row.name.toLowerCase().includes(filter.trim().toLowerCase());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value;
    this.paginator?.firstPage();
  }

  clear(input: HTMLInputElement) {
    input.value = '';
    this.applyFilter('');
  }
}