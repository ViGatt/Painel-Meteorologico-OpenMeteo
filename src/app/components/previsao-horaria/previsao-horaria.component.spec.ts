import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoHorariaComponent } from './previsao-horaria.component';

describe('PrevisaoHorariaComponent', () => {
  let component: PrevisaoHorariaComponent;
  let fixture: ComponentFixture<PrevisaoHorariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevisaoHorariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevisaoHorariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
