import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscrribeComponent } from './subscrribe.component';

describe('SubscrribeComponent', () => {
  let component: SubscrribeComponent;
  let fixture: ComponentFixture<SubscrribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscrribeComponent]
    });
    fixture = TestBed.createComponent(SubscrribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
