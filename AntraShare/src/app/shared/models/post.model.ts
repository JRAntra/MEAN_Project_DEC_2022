export interface Post {
    publisherName: string | null,
    publishedTime?: Date,
    content: Content,
    comment?: string,
    likedIdList?: LikedList[],
    _id?: string
}

export interface Content {
    image?: string;
    video?: string,
    text?: string,
}

export interface Comment{
    publisherName: string,
    publishedTime?: Date,
    content: Content,
}
export interface LikedList{
    userId: string
}