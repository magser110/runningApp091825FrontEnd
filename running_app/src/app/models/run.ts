export class Run {
  id: number = -1;
  distance: number = -1;
  time: number = -1;
  date: Date = new Date();
}

export type NewRun = {
  distance: number;
  time: number;
  date: Date;
}
