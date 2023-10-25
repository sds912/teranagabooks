import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackFormComponent } from './add-pack-form.component';

describe('AddPackFormComponent', () => {
  let component: AddPackFormComponent;
  let fixture: ComponentFixture<AddPackFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPackFormComponent]
    });
    fixture = TestBed.createComponent(AddPackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
