import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChartCardComponent } from './data-chart-card.component';

describe('DataChartCardComponent', () => {
  let component: DataChartCardComponent;
  let fixture: ComponentFixture<DataChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataChartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
