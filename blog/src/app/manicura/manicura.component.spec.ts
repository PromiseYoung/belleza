import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicuraComponent } from './manicura.component';

describe('ManicuraComponent', () => {
  let component: ManicuraComponent;
  let fixture: ComponentFixture<ManicuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManicuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManicuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
