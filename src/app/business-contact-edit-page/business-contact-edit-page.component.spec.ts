import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessContactEditPageComponent } from './business-contact-edit-page.component';

describe('BusinessContactEditPageComponent', () => {
  let component: BusinessContactEditPageComponent;
  let fixture: ComponentFixture<BusinessContactEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessContactEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessContactEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
