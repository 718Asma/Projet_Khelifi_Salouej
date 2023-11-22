import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPublicComponent } from './menu-public.component';

describe('MenuPublicComponent', () => {
  let component: MenuPublicComponent;
  let fixture: ComponentFixture<MenuPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPublicComponent]
    });
    fixture = TestBed.createComponent(MenuPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
