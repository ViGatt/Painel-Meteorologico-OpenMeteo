import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoDiariaComponent } from './previsao-diaria.component';

describe('PrevisaoDiariaComponent', () => {
  let component: PrevisaoDiariaComponent;
  let fixture: ComponentFixture<PrevisaoDiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevisaoDiariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevisaoDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
