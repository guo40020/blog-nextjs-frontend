import React from "react";
import Nav from "../components/common/nav/Nav";
import PostList from "../components/PostList/PostList";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://api.kellyiscute.com/get_posts`);
  const data = await res.json();
  console.log(res);
  return {
    props: data,
    revalidate: 1,
  };
}


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Kelly is Cute</title>
      </Head>
      <Nav/>
      <PostList posts={ posts }/>
    </div>
  )
}
