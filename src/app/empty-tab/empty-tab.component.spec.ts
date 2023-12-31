import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTabComponent } from './empty-tab.component';

describe('EmptyTabComponent', () => {
  let component: EmptyTabComponent;
  let fixture: ComponentFixture<EmptyTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyTabComponent]
    });
    fixture = TestBed.createComponent(EmptyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
