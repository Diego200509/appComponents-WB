import { inject, Injectable } from '@angular/core';
import { IconInterface } from '../interfaces/icon-interface';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private listIcons: IconInterface[] = [
    { name: 'logo', path: '/assets/icons/logo.svg' },
    { name: 'client', path: '/assets/icons/client.svg' },
    { name: 'invoice', path: '/assets/icons/invoice.svg' },
    { name: 'user', path: '/assets/icons/user.svg' },
    { name: 'meme', path: '/assets/icons/meme.svg' }
  ];

  MatIconRegistry = inject(MatIconRegistry);
  DomSanitizer = inject(DomSanitizer);

  constructor() {
    this.registryIcons();
  }

  registryIcons() {
    this.listIcons.forEach(icon => {
      this.MatIconRegistry.addSvgIcon(
        icon.name,
        this.DomSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
