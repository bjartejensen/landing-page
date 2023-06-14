import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendCardComponent } from './spend-card.component';

describe('SpendCardComponent', () => {
  let component: SpendCardComponent;
  let fixture: ComponentFixture<SpendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
