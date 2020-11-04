import React from "react";
import style from "./PostList.module.scss"
import { IPostList } from "./typing";
import PostListItem from "./PostListItem";

export default function PostList({ posts }: IPostList) {
  const postAvailable = posts.length > 0;
  return (
    <div className={ style.postListRoot } style={ { flexDirection: postAvailable ? 'column' : 'initial' } }>
      {
        postAvailable ?
          posts.map((v, i) => {
            return (
              <PostListItem key={ i } { ...v }/>
            )
          })
          :
          <p>空空如也</p>
      }
    </div>
  )
}