import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgNoChangesComponent } from './test-ng-no-changes.component';

describe('TestNgNoChangesComponent', () => {
  let component: TestNgNoChangesComponent;
  let fixture: ComponentFixture<TestNgNoChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgNoChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgNoChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
