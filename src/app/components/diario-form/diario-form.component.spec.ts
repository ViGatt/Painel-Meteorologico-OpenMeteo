import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioFormComponent } from './diario-form.component';

describe('DiarioFormComponent', () => {
  let component: DiarioFormComponent;
  let fixture: ComponentFixture<DiarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiarioFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
