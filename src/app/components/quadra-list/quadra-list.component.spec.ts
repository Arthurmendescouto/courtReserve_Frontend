import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraListComponent } from './quadra-list.component';

describe('QuadraListComponent', () => {
  let component: QuadraListComponent;
  let fixture: ComponentFixture<QuadraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadraListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
