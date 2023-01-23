export class News {
  newsId: string;
  publisherName: string;
  content: { image: string; video: string; text: string; _id: string };
  publishedTime: string;
  comment: Array<{
    publisherName: string;
    content: { image: string; video: string; text: string; _id: string };
    _id: string;
    publishedTime: string;
  }>;

  constructor(
    newsId: string,
    publisherName: string,
    content: { image: string; video: string; text: string; _id: string },
    publishedTime: string,
    comment: Array<{
      publisherName: string;
      content: { image: string; video: string; text: string; _id: string };
      _id: string;
      publishedTime: string;
    }>
  ) {
    this.newsId = newsId;
    this.publisherName = publisherName;
    this.content = content;
    this.publishedTime = publishedTime;
    this.comment = comment;
  }
}
