import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartCardComponent } from './area-chart-card.component';

describe('AreaChartCardComponent', () => {
  let component: AreaChartCardComponent;
  let fixture: ComponentFixture<AreaChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaChartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
