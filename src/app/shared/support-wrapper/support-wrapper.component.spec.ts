import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportWrapperComponent } from './support-wrapper.component';

describe('SupportWrapperComponent', () => {
  let component: SupportWrapperComponent;
  let fixture: ComponentFixture<SupportWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
