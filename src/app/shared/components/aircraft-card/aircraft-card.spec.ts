import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftCard } from './aircraft-card';

describe('AircraftCard', () => {
  let component: AircraftCard;
  let fixture: ComponentFixture<AircraftCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AircraftCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
