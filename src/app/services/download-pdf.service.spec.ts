import { TestBed } from '@angular/core/testing';

import { DownloadPDFService } from './download-pdf.service';

describe('DownloadPDFService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadPDFService = TestBed.get(DownloadPDFService);
    expect(service).toBeTruthy();
  });
});
