import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraCardComponent } from './quadra-card.component';

describe('QuadraCardComponent', () => {
  let component: QuadraCardComponent;
  let fixture: ComponentFixture<QuadraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadraCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
