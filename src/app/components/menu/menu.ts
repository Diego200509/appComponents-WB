import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, MatButtonModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  menuItems = [
    { icon: 'client', label: 'Clientes', route: 'clients' },
    { icon: 'invoice', label: 'Facturas', route: 'invoices' },
  ];
  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'logo_menu',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/logo.svg")
    );
    this.iconRegistry.addSvgIcon(
      'client',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/client.svg")
    );
    this.iconRegistry.addSvgIcon(
      'invoice',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/invoice.svg")
    );
    this.iconRegistry.addSvgIcon(
      'user',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/icons/user.svg")
    );
  }
}
