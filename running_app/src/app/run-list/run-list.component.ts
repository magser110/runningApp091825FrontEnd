import { Component, OnInit } from '@angular/core';
import { RunService } from '../services/run.service';
import { Run } from '../models/run';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-run-list',
  imports: [FormsModule, CommonModule],
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

  updateRun(run: Run){
    this.runService.updateRun(run).subscribe(updateRun => {
      const indexRun = this.runs.findIndex(run => run.id === updateRun.id);
      this.runs[indexRun] = updateRun;
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
