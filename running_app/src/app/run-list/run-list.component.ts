import { Component, OnInit } from '@angular/core';
import { RunService } from '../services/run.service';
import { Run } from '../models/run';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-run-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './run-list.component.html',
  styleUrl: './run-list.component.scss'
})
export class RunListComponent implements OnInit{
  runs: Run[] = [];
  newRun: number = 1; //mile
  newRunTime: number = 12 ; //minutes
  newRunDate: Date = new Date(); //current date

  constructor(private runService: RunService){}

  ngOnInit(): void {
    this.runService.getRuns().subscribe(runs => {
      console.log(runs);
      this.runs = runs.payload});
  }

  addRun(){
    if(!this.newRun){
      return;
    }

    const run = {
      distance: this.newRun,
      time: this.newRunTime,
      date: this.newRunDate
    };

    this.runService.createRun(run).subscribe(newRun => {
      this.runs.push(newRun);
      this.newRun = 0; //reset after adding
      this.newRunTime = 0; //reset after adding
      this.newRunDate = new Date(); //reset after adding
    } ,
    error => console.error('Error adding run:', error));
  }


	updateRun(run: Run) {
	  // const { id, distance, time, date } = run;
    // console.log(run)
	  const runData = { distance: this.newRun, time: this.newRunTime, date: this.newRunDate };

	  this.runService.updateRunById(run.id, runData).subscribe((updatedRun) => {
	    const index = this.runs.findIndex(r => r.id === updatedRun.id);
	    if (index !== -1) {
	      this.runs[index] = updatedRun;
	    }
	  });
	}

  deleteRun(id: number){
    this.runService.deleteRun(id).subscribe({
      next: () => {
         this.runs = this.runs.filter(run => run.id !== id);
         console.log(`Run with id ${id} deleted`);
      },
      error: (err) => console.error(err)
    });
  }
}
