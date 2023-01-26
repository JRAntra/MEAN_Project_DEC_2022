export interface News {
  publisherName: string;
  publishedTime: Date;
  content: Content;
  comment?: Comment[];
  LikedIdList: LikedIdList;
  _id: string;
}

export interface Comment {
  publisherName: string;
  content: Content;
  publishedTime: Date;
  _id: string;
}

export interface Content {
  imageUrl: string;
  image?: string;
  videoUrl: string;
  video?: string;
  textUrl: string;
  text?: string;
  _id: string;
}

export interface LikedIdList {
  _id?: string;
}
