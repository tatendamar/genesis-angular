import { TestBed } from '@angular/core/testing';

import { MenuchangeeventTsService } from './menuchangeevent.';

describe('MenuchangeeventTsService', () => {
  let service: MenuchangeeventTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuchangeeventTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
