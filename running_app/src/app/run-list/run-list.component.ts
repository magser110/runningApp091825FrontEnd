import { Component, OnInit } from '@angular/core';
import { RunService } from '../services/run.service';
import { Run } from '../models/run';

@Component({
  selector: 'app-run-list',
  imports: [],
  templateUrl: './run-list.component.html',
  styleUrl: './run-list.component.scss'
})
export class RunListComponent implements OnInit{
  runs: Run[] = [];
  newRun: number = 1; //mile
  newRunTime: number = 12 ; //minutes

  constructor(private runService: RunService){}

  ngOnInit(): void {
    this.runService.getRuns().subscribe(runs => this.runs = runs);
  }

  addRun(){
    if(!this.newRun){
      return;
    }

    const run = {
      distance: this.newRun,
      time: this.newRunTime
    };

    this.runService.createRun(run).subscribe(this.newRun => {
      this.runs.push(this.newRun);
      this.newRun ='';
    });
  }
}
