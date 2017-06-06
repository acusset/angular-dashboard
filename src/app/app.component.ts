import {Component} from "@angular/core";
import * as moment from 'moment/moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  ngAfterViewInit() {
    let clock = document.getElementById('date-and-time');
    window.setInterval(() => {
      clock.innerHTML = moment().locale('fr').format('LLLL:ss');
    }, 1000);
  }
}
