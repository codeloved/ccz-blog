import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const patterns = ['**/*.md', '!.vuepress', '!node_modules'];
if (process.env.NODE_ENV === "production") {
  patterns.push("!**/*_snip.md"); // 生产环境不显示草稿, 或者设置dir.index: false 不显示草稿
}


export default defineUserConfig({
  base: "/ccz-blog/",
  lang: "zh-CN",
  title: "首页",
  description: "CCZ 的博客",
  pagePatterns: patterns,
  theme,
});
