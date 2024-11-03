import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoVacuumCleanerComponent } from './auto-vacuum-cleaner.component';

describe('AutoVacuumCleanerComponent', () => {
  let component: AutoVacuumCleanerComponent;
  let fixture: ComponentFixture<AutoVacuumCleanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoVacuumCleanerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoVacuumCleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
