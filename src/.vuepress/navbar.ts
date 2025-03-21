import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "AI开发",
    prefix: "/blog/ai/",
    children: [
      {
        text: "python基础",
        link: "/blog/ai/python/",
        prefix: "/blog/ai/python/",
        children: []
      },
      {
        text: "flask基础",
        link: "/blog/ai/flask/",
        prefix: "/blog/ai/flask/",
        children: []
      },
    ]
  },
  {
    text: "WEB开发",
    prefix: "/blog/web/",
    children: [
      {
        text: "react",
        link: "/blog/web/react/",
        prefix: "/blog/web/react/",
        children: []
      },
    ]
  },
]);
