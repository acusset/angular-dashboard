import {Component, OnInit} from '@angular/core';
import {TechCrunchService} from './services/techcrunch.service';
import {Article} from './article';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private articles: Article[];
  private article: Article;
  private source = 'TechCrunch';
  private color = 'primary';
  private value = 1;
  private rotation = 15000; // 15s time in milleseconds
  private refreshTime = 600000; // News refresh time 600s
  private step;

  constructor(private service: TechCrunchService) {
    // Bar Max Value (100) / Duration * Window SetInterval
    this.step = (100 / this.rotation) * 100;
  }

  ngOnInit() {
    let i = 1;
    this.service.getTopHeadlines()
      .then((articles: Article[]) => {
        if (0 < articles.length) {
          this.articles = articles;
          this.article = articles[0];
        }
      })
      .catch((err) => {
      // Network not available
        console.log(err);
      })
      .then(() => {
        window.setInterval(() => {
          this.article = this.articles[i];
          i = (i + 1) % this.articles.length;
          this.value = 0; // Reset Progress Bar
        }, this.rotation);
        window.setInterval(() => {
          // Increase Progress bar periodicaly
          this.value = (this.value + this.step);
        }, 100);
      });
  }
}
