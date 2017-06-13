import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Schedule} from '../schedule';

@Injectable()
export class BusService {

  private station1 = 'bucarest';

  constructor(private http: Http) {
  }

  getSchedule(code: string, station: string) {

    const urlA = `https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/${code}/${station}/A`;
    const urlR = `https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/${code}/${station}/R`;

    return Promise.all([
      this.http.get(urlA).toPromise(),
      this.http.get(urlR).toPromise()
    ])
      .then((values) => {
        const test = values.map((data) => {
          const schedules = data.json().result.schedules;
          if (0 < schedules.length) {
            return new Schedule('bus', code, station, schedules[0].destination, [schedules[0].message, schedules[1].message]);
          }
        });
        return test;
      });
  }
}
