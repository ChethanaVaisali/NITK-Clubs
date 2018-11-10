import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentMemberComponent } from './delete-student-member.component';

describe('DeleteStudentMemberComponent', () => {
  let component: DeleteStudentMemberComponent;
  let fixture: ComponentFixture<DeleteStudentMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStudentMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
