import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Article} from '../article';
import 'rxjs/Rx';

@Injectable()
export class TechCrunchService {

  private source = 'techcrunch';
  private key = '577069058f4c4d20baedb1af50f37eb4';

  constructor(private http: Http) {

  }

  getTopHeadlines() {
    return this.getNews('top');
  }

  getLatestHeadlines() {
    return this.getNews('latest');
  }

  /**
   * Get Articles from API
   * TODO : return actual articles instead of an array
   * @param method
   * @returns {Promise<Article[]>}
   */
  private getNews(method: String): Promise<Article[]> {
    const url = `https://newsapi.org/v1/articles?source=${this.source}&apiKey=${this.key}&sortBy=${method}`;

    return this.http.get(url).toPromise()
      .then((response) => {
      // New Article
        if (0 < response.json().articles.length) {
          return response.json().articles;
        } else {
          return Promise.reject('API Responded with 0 artcle');
        }
      })
      .catch((err) => {
        throw new Error('Something went wrong : ' + err);
      });
  }
}
