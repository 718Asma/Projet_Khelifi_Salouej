import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivitesComponent } from './list-activites.component';

describe('ListActivitesComponent', () => {
  let component: ListActivitesComponent;
  let fixture: ComponentFixture<ListActivitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListActivitesComponent]
    });
    fixture = TestBed.createComponent(ListActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
