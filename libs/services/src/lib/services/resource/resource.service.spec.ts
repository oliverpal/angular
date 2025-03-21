import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ResourceService } from './resource.service';
import { Item } from '../../types/interfaces/item.interface';

describe('ResourceService', () => {
  let service: ResourceService<Item, Item>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceService, HttpClientModule],
    });
    service = TestBed.inject(ResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
