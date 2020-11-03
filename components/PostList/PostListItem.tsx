import React from "react";
import { IPostPreview } from "./typing";
import style from './PostListItem.module.scss'
import Link from "next/link";

export default function PostListItem({ title, contentPreview, dateTime, tags, postId }: IPostPreview) {

  return (
    <div className={ style.postListItemRoot }>
      <Link href={ `/post/${ postId }` }><a className={ style.title }>{ title }</a></Link>
      <p className={ style.preview }>{ contentPreview }</p>
      <div className={ style.bottomContainer }>
        {
          tags.split(' ').map((v, i) => (
            <div key={ i } className={ style.tags }>{ v }</div>
          ))
        }
      </div>
    </div>
  )
}