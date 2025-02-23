import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcelanaComponent } from './porcelana.component';

describe('PorcelanaComponent', () => {
  let component: PorcelanaComponent;
  let fixture: ComponentFixture<PorcelanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcelanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorcelanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
