import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedicuraComponent } from './pedicura.component';

describe('PedicuraComponent', () => {
  let component: PedicuraComponent;
  let fixture: ComponentFixture<PedicuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedicuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedicuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
