import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookExchangeFormComponent } from './add-book-exchange-form.component';

describe('AddBookExchangeFormComponent', () => {
  let component: AddBookExchangeFormComponent;
  let fixture: ComponentFixture<AddBookExchangeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookExchangeFormComponent]
    });
    fixture = TestBed.createComponent(AddBookExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
