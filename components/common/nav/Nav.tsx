import Link from "next/link";
import React from "react";
import style from './Nav.module.scss'

export default function Nav() {
  return (
    <nav className={ style.navBar }>
      <Link href={ '/' }>
        <a>
          <div className={ style.left }>
            <img
              src="https://avatars3.githubusercontent.com/u/19303341?s=460&u=b4b50f08dda14b1d90d98597310c00c531ba192c&v=4"
              alt="avatar"/>
            <p className={ style.name }>Kelly</p>
            <p className={ style.smallText }>无聊的消遣地</p>
          </div>
        </a>
      </Link>
      <a className={ style.right } href={ 'https://github.com/guo40020' }>
        <p>find me on GitHub</p>
        <img src="/github-logo.png" alt="GitHub"/>
      </a>
    </nav>
  )
}
