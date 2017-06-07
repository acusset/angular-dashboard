/**
 *
 */
export class Article {

  private _author: string;
  private _title: string;
  private _description: string;
  private _url: string;
  private _urlToImage: string;
  private _publishedAt: Date;

  /**
   *
   * @param author
   * @param title
   * @param description
   * @param url
   * @param urlToImage
   * @param publishedAt
   */
  constructor(author: string, title: string, description: string, url: string, urlToImage: string, publishedAt: Date) {
    this._author = author;
    this._title = title;
    this._description = description;
    this._url = url;
    this._urlToImage = urlToImage;
    this._publishedAt = publishedAt; // TODO date format
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get urlToImage(): string {
    return this._urlToImage;
  }

  set urlToImage(value: string) {
    this._urlToImage = value;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  set publishedAt(value: Date) {
    this._publishedAt = value;
  }
}
