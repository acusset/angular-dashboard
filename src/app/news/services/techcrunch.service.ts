import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Article} from '../article';
import "rxjs/Rx";

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
   * TODO : replace any by a class
   * @param method
   * @returns {Promise<Article[]>}
   */
  private getNews(method: String): Promise<any> {
    const url = `https://newsapi.org/v1/articles?source=${this.source}&apiKey=${this.key}&sortBy=${method}`;

    return this.http.get(url).toPromise()
      .then((response) => {
        return response.json().articles;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
