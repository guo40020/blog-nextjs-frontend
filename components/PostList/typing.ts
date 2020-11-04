export interface IPostPreview {
  title: string;
  dateTime: number;
  description: string;
  tags: string;
  id: string;
}

export interface IPostList {
  posts: IPostPreview[]
}