import React from "react";
import { IPostPreview } from "./typing";
import style from './PostListItem.module.scss'
import Link from "next/link";

export default function PostListItem({ title, contentPreview, dateTime, tags }: IPostPreview) {

  return (
    <div className={ style.postListItemRoot }>
      <Link href={ '' } className={ style.title }>{ title }</Link>
      <p className={ style.preview }>{ contentPreview }</p>
      <div className={ style.bottomContainer }>
        {
          tags.split(' ').map((v, i) => (
            <div className={ style.tags }>{ v }</div>
          ))
        }
      </div>
    </div>
  )
}