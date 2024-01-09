import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatasPage } from './datas.page';

describe('DatasPage', () => {
  let component: DatasPage;
  let fixture: ComponentFixture<DatasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
