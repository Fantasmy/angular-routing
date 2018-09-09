import { TestBed, inject } from '@angular/core/testing';

import { RecentHeroesService } from './recent-heroes.service';

describe('RecentHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecentHeroesService]
    });
  });

  it('should be created', inject([RecentHeroesService], (service: RecentHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
