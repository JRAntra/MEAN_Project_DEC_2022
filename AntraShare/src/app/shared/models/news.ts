import { ContentChildDecorator } from "@angular/core";

export interface News {
    publisherName: string;
    publishedTime: Date;
    content: Content;
    comment?: Comment[];
    LikedIdList: LikedIdList;
    
}

export interface Comment {
    publisherName: string;
    content: Content;
    publishedTime: Date;
}

export interface Content {
    imageUrl: string;
    image? : string;
    videoUrl: string;
    video?: string;
    textUrl: string;
    text?: string;

}

export interface LikedIdList {
    userId: string;
}