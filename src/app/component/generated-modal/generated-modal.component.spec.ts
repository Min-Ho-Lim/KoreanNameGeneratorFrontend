import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedModalComponent } from './generated-modal.component';

describe('GeneratedModalComponent', () => {
  let component: GeneratedModalComponent;
  let fixture: ComponentFixture<GeneratedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
