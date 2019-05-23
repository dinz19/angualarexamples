import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltcomponentComponent } from './inbuiltcomponent.component';

describe('InbuiltcomponentComponent', () => {
  let component: InbuiltcomponentComponent;
  let fixture: ComponentFixture<InbuiltcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuiltcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
