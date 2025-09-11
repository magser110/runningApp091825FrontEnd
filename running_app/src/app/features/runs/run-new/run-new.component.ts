import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RunService } from '../../../services/run.service';
import { Router } from '@angular/router';
import { Run } from '../../../models/run';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-run-new',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './run-new.component.html',
  styleUrl: './run-new.component.scss'
})
export class RunNewComponent {
  runForm = new FormGroup({
    distance: new FormControl(0, [Validators.required]),
    time: new FormControl(0, [Validators.required]),
  });

  constructor(private runService: RunService, private router: Router){}

  onSubmit(){
    const formValue = this.runForm.value;
    const runData = {
      distance: formValue.distance ?? 0,
      time: formValue.time ?? 0,
    };

    this.runService.createRun(runData).subscribe({
      next: (run: Run) => {
        console.log('Run added', run);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.error('Error creating run', error)
      },
    });
  }

}
