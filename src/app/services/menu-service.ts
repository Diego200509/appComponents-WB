import { Injectable } from '@angular/core';
import { MenuInterface } from '../interfaces/menu-interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: MenuInterface[] = [
    { title: 'Clientes', url: '/clients', icon: 'client' },
    { title: 'Facturas', url: '/invoices', icon: 'invoice' },
    { title: 'Post', url: '/listpost', icon: 'invoice'}, 
    { title: 'Memes', url: '/memes', icon: 'meme' }
  ];

  getMenu() {
    return [...this.listMenu];
  }

  getMenuByUrl(url: string) {
    return this.listMenu.find(
      (menu) => {
        menu.url.toLowerCase() === url.toLowerCase()
      }
    ) as MenuInterface;
  }
}