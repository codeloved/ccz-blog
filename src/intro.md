---
title: 我的画像
---

# 介绍页

将你的个人介绍和档案放置在此处。

markdown 语法 https://theme-hope.vuejs.press/zh/cookbook/markdown/
markdown 扩展1 https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html
markdown 扩展2 https://theme-hope.vuejs.press/zh/guide/intro/markdown.html#markdown-%E6%89%A9%E5%B1%95


出于性能考虑，博客相关数据在开发服务器下默认不启用热更新，也就是如果你新增了文章或者修改了已有文章的分类、时间、标签、置顶、星标状态等，整个站点的相关数据仅会在重启开发服务器后更新。
## Frontmatter 控制侧边栏
dir.text: 目录标题，默认为 README.md 标题
dir.icon: 目录图标，默认为 README.md 图标
dir.collapsible: 目录是否可折叠，默认为 true
dir.expanded: 目录是否默认展开，默认为 false
dir.link: 目录是否可点击，默认为 false
dir.index: 是否索引此目录，默认为 true
dir.order: 目录在侧边栏中的顺序，默认为 0
```
---
dir:
  order: 1
  text: Group 1
---
```

