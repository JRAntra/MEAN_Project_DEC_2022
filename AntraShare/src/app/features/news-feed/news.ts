export interface Content {
    image: string;
    video: string;
    text: string;
    _id: string;
}

export interface Content2 {
    text: string;
    _id: string;
}

export interface Comment {
    content: Content2;
    _id: string;
    publishedTime: Date;
    publisherName: string;
}

export interface LikedIdList {
    userId: string;
    _id: string;
}

export interface News {
    _id: string;
    publisherName: string;
    content: Content;
    publishedTime: Date;
    comment: Comment[];
    likedIdList: LikedIdList[];
    __v: number;
}

