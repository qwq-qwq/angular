import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailWindowComponent } from './book-detail-window.component';

describe('BookDetailWindowComponent', () => {
  let component: BookDetailWindowComponent;
  let fixture: ComponentFixture<BookDetailWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
