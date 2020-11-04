import React from "react";
import { IPostPreview } from "./typing";
import style from './PostListItem.module.scss';
import Link from "next/link";

export default function PostListItem({ title, description, tags, id }: IPostPreview) {

  return (
    <div className={ style.postListItemRoot }>
      <Link href={ `/post/${ id }` }><a className={ style.title }>{ title }</a></Link>
      <p className={ style.preview }>{ description }</p>
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