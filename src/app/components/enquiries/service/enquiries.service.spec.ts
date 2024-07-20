/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnquiriesService } from './enquiries.service';

describe('Service: Enquiries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnquiriesService]
    });
  });

  it('should ...', inject([EnquiriesService], (service: EnquiriesService) => {
    expect(service).toBeTruthy();
  }));
});
