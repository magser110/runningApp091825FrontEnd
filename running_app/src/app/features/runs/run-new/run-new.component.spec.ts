import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunNewComponent } from './run-new.component';

describe('RunNewComponent', () => {
  let component: RunNewComponent;
  let fixture: ComponentFixture<RunNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
