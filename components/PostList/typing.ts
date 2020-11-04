export interface IPostPreview {
  title: string;
  dateTime: number;
  description: string;
  tags: string;
  postId: string;
}

export interface IPostList {
  posts: IPostPreview[]
}