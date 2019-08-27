import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirttieMatchComponent } from './shirttie-match.component';

describe('ShirttieMatchComponent', () => {
  let component: ShirttieMatchComponent;
  let fixture: ComponentFixture<ShirttieMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirttieMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirttieMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
