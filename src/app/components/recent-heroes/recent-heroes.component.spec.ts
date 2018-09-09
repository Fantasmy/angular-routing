import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentHeroesComponent } from './recent-heroes.component';

describe('RecentHeroesComponent', () => {
  let component: RecentHeroesComponent;
  let fixture: ComponentFixture<RecentHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
