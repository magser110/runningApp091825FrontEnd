import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningDashboardComponent } from './running-dashboard.component';

describe('RunningDashboardComponent', () => {
  let component: RunningDashboardComponent;
  let fixture: ComponentFixture<RunningDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunningDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
