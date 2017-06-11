import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRegistrationComponent } from './book-registration.component';

describe('BookRegistrationComponent', () => {
  let component: BookRegistrationComponent;
  let fixture: ComponentFixture<BookRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
