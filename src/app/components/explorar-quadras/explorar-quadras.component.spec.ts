import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarQuadrasComponent } from './explorar-quadras.component';

describe('ExplorarQuadrasComponent', () => {
  let component: ExplorarQuadrasComponent;
  let fixture: ComponentFixture<ExplorarQuadrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorarQuadrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarQuadrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
