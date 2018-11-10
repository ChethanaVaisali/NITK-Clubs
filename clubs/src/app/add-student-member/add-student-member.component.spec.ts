import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentMemberComponent } from './add-student-member.component';

describe('AddStudentMemberComponent', () => {
  let component: AddStudentMemberComponent;
  let fixture: ComponentFixture<AddStudentMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
