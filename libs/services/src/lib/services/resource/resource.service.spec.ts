import { TestBed } from '@angular/core/testing';

import { ResourceService } from './resource.service';
import { Item } from '../../types/interfaces/item.interface';

describe('ResourceService', () => {
  let service: ResourceService<Item>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
