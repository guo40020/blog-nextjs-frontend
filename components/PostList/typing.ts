export interface IPostPreview {
  title: string;
  dateTime: number;
  contentPreview: string;
  tags: string;
}

export interface IPostList {
  posts: IPostPreview[]
}