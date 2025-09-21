import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMeme, ImgflipResponse } from '../../interfaces/imeme';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MemeService {
  private http = inject(HttpClient);
  private url = 'https://api.imgflip.com/get_memes';

  getMemes(): Observable<IMeme[]> {
    return this.http.get<ImgflipResponse>(this.url).pipe(
      map(r => r.data?.memes ?? [])
    );
  }
}