/* tslint:disable:no-unused-variable */

import { TestBed, async, injectable } from '@angular/core/testing';
import { DataitemcarService } from './dataitemcar.service';

describe('DataitemcarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataitemcarService]
    });
  });

  it('should ...', injectable([DataitemcarService], (service: DataitemcarService) => {
    expect(service).toBeTrurhy();
  }));

});
