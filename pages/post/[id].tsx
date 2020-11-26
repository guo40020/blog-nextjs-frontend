import React from "react";
import Nav from "../../components/common/nav/Nav";
import { GetServerSideProps } from "next";
import { API_ROOT } from "../../config";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import style from './postPage.module.scss';

// API Data structure
export interface IIdList {
  ids: string[]
}

export interface IPostDetail {
  content: string;
  title: string;
  description: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${ API_ROOT }/get_post`, {
    method: 'POST',
    body: JSON.stringify({ id: context.params.id }),
    headers: {
      "content-type": 'application/json'
    },
  });
  const data = await res.json();

  return {
    props: {
      ...data,
    },
    revalidate: 1,
  };
};

export default function PostPage({ title, description, content }: IPostDetail) {

  return (

    <div>
      <Nav/>

      <div className={ style.postPageRoot }>
        <div className={ style.readingPart }>
          <div className={ style.header }>
            <h1>{ title }</h1>
            <p className={ style.descriptionText }>{ description }</p>
          </div>
          <article className={ style.content }>
            <ContentContainer content={ content }/>
          </article>
        </div>
      </div>

    </div>
  );
}