export class Schedule {

  private type: string;
  private code: string;
  private station: string;
  private destination: string;
  private message: string[];


  constructor(type: string, code: string, station: string, destination: string, message: string[]) {
    this.type = type;
    this.code = code;
    this.station = station;
    this.destination = destination;
    this.message = message;
  }
}
