import { AfterViewInit, Component, inject } from '@angular/core';
import { Container } from '../../../components/container/container';
import { Table } from '../../../components/table/table';
import { Paginator } from '../../../components/paginator/paginator';
import { MatColumnDef, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IMeme } from '../../../interfaces/imeme';
import { MemeService } from '../../services/meme-service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-list-memes',
  standalone: true,
  imports: [
    Container,
    Table, Paginator,
    MatColumnDef, MatTableModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './list-memes.html',
  styleUrl: './list-memes.css'
})
export class ListMemes implements AfterViewInit {
  loading = true;
  data: IMeme[] = [];
  filtered: IMeme[] = [];
  records: IMeme[] = [];
  totalRecords = 0;

  private memeSrv = inject(MemeService);

  constructor() {
    this.memeSrv.getMemes().subscribe({
      next: (rows) => {
        this.data = rows;
        this.filtered = rows;
        this.totalRecords = this.filtered.length;
        this.ChangePage(0);
        this.loading = false;
      },
      error: (e) => { console.error(e); this.loading = false; }
    });
  }

  ngAfterViewInit(): void {}

  applyFilter(value: string) {
    const term = (value ?? '').trim().toLowerCase();
    if (!term) {
      this.filtered = this.data;
    } else {
      this.filtered = this.data.filter(m => m.name.toLowerCase().includes(term));
    }
    this.totalRecords = this.filtered.length;
    this.ChangePage(0);
  }

  clear(input: HTMLInputElement) {
    input.value = '';
    this.applyFilter('');
  }

  ChangePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = page * pageSize;
    this.records = this.filtered.slice(skip, skip + pageSize);
  }
}