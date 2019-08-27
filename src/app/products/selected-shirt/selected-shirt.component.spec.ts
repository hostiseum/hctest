import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedShirtComponent } from './selected-shirt.component';

describe('SelectedShirtComponent', () => {
  let component: SelectedShirtComponent;
  let fixture: ComponentFixture<SelectedShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
