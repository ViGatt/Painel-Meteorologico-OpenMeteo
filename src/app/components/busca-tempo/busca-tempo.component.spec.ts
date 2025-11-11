import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaTempoComponent } from './busca-tempo.component';

describe('BuscaTempoComponent', () => {
  let component: BuscaTempoComponent;
  let fixture: ComponentFixture<BuscaTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaTempoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
