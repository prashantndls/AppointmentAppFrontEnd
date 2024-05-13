import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewslotComponent } from './viewslot.component';

describe('ViewslotComponent', () => {
  let component: ViewslotComponent;
  let fixture: ComponentFixture<ViewslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
