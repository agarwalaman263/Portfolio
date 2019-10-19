import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DownloadPDFService {

  constructor(private http: HttpClient) { }
  public downloadPdf = (url: string) => {
    const options = { headers: { responseType: 'blob' } };

    // return this.http.get(url, options).pipe(map(res => new Blob([res.blob()], { type: 'application/pdf' })));
  }
}
