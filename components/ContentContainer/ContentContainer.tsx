import React, { createRef, useEffect } from "react";
import hljs from "highlight.js";
import marked from "marked";
import style from "./ContentContainer.module.scss";

export default function ContentContainer({ content }) {
  const contentRef = createRef<HTMLDivElement>();

  // Component Did Mount
  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code, lang) => {
        const validLanguage = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
      },
    });
    contentRef.current.innerHTML = marked(content);
  }, []);

  return <div className={ style.content } ref={ contentRef }/>;
}
