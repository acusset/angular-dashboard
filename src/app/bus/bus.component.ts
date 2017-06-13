import { Component, OnInit } from '@angular/core';
import {BusService} from './services/bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  private step;
  private value = 0;
  private rotation = 30000;
  private schedules;
  private code = '80';
  private station = 'Bucarest';

  constructor(private service: BusService) {
    this.step = (100 / this.rotation) * 100;
  }

  ngOnInit() {
    this.service.getSchedule(this.code, this.station)
      .then((data) => {
        this.schedules = data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        window.setInterval(() => {
          this.value = 0; // Reset Progress Bar
        }, this.rotation);
        window.setInterval(() => {
          // Increase Progress Bar periodicaly
          this.value = (this.value + this.step);
        }, 100);
      } );
  }

}
