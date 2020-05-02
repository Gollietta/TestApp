import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProductComponent } from './local-product.component';

describe('LocalProductComponent', () => {
  let component: LocalProductComponent;
  let fixture: ComponentFixture<LocalProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
