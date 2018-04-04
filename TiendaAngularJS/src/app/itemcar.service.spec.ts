/* tslint:disable:no-unused-variable */

import { TestBed, async, injectable } from '@angular/core/testing';
import { ItemcarService } from './itemcar.service';

describe('ItemcarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemcarService]
    });
  });

  it('should ...', injectable([ItemcarService], (service: ItemcarService) => {
    expect(service).toBeTrurhy();
  }));

});
