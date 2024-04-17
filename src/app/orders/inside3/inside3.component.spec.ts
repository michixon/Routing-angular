import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inside3Component } from './inside3.component';

describe('Inside3Component', () => {
  let component: Inside3Component;
  let fixture: ComponentFixture<Inside3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inside3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inside3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
