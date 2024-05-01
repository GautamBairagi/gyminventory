import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockManageComponent } from './add-stock-manage.component';

describe('AddStockManageComponent', () => {
  let component: AddStockManageComponent;
  let fixture: ComponentFixture<AddStockManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddStockManageComponent]
    });
    fixture = TestBed.createComponent(AddStockManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
