import React from "react";
import Nav from "../../components/common/nav/Nav";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();

  return (
    <div>
      <Nav/>
      <p>{ router.query.id }</p>
    </div>
  )
}