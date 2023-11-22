import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedActiviteComponent } from './selected-activite.component';

describe('SelectedActiviteComponent', () => {
  let component: SelectedActiviteComponent;
  let fixture: ComponentFixture<SelectedActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedActiviteComponent]
    });
    fixture = TestBed.createComponent(SelectedActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
