import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu-service';
import { MenuInterface } from '../../interfaces/menu-interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, MatButtonModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  listMenu: MenuInterface[];
  menuSrv = inject(MenuService);

  constructor() {
    this.listMenu = this.menuSrv.getMenu();
  }
}
