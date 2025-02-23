import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelComponent } from './gel.component';

describe('GelComponent', () => {
  let component: GelComponent;
  let fixture: ComponentFixture<GelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
