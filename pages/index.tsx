import React from "react";
import Nav from "../components/common/nav/Nav";
import PostList from "../components/PostList/PostList";
import { GetStaticProps } from "next";

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
      <Nav/>
      <PostList posts={ posts }/>
    </div>
  )
}
