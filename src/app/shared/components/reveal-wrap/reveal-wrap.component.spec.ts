import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealWrapComponent } from './reveal-wrap.component';

describe('RevealWrapComponent', () => {
  let component: RevealWrapComponent;
  let fixture: ComponentFixture<RevealWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevealWrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevealWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
