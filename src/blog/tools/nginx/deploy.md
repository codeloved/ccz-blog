---
title: "部署暂时笔记" # 文章标题,用于生成侧边栏目录名称
article: false # 不在首页文章列表页展示
index: false # 不在侧边栏展示
order: 0 # 文章排序,越大越靠后
---

# 一定要清楚,请求的整个路径, 比如从前端本地到nginx再到后端等
1. 比如nginx  / 目录下返回前端html资源, /api通过nginx转发到后端, 此时配置dev-server时, /api前缀不能被pathRewrite
如果是target直接到后端的服务,不经过前端的/api转发, 则pathRewrite要重写为空字符串

2. 一定要分清, 请求先经过前端的nginx还是先经过后端的服务, 再转发到前端, 确定前缀匹配是否要去除等