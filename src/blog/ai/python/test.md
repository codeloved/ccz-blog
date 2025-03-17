---
title: "Test"
date: 2021-01-01T00:00:00Z
order: 4 # 文章排序,越大越靠后
---

# 我是一级标题, 一直到6级标题
## 二级标题

这句话里拥有**加粗**、*倾斜*和~~删除~~

这是一个段落。末尾加上这个反斜线可以换行 \
一个段落的换行,增加一个空行,就会生成一个新的段落

这是一个新的段落


> 引用也可以连用
>
> > 可以添加额外的大于号制造更深的引用

- 无序列表项
- 无序列表项

  - 列表中的列表项
    - 更多的列表项
    - 更多的列表项
    - 更多的列表项
  - 列表中的长列表项，这个列表项很长。

    而且由很多个段落构成。

- 无序列表项

1. 有序列表第一项
2. 有序列表第二项  
   第二项的需要换行\
   再次换行
3. 有序列表第三项

下面是分割线
---

链接
[根目录访问主页](/v2/)

图片,比链接多了一个感叹号
![Logo](/logo.png)


下面是简单的表格
|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |


高亮格式:

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

```python
def foo(bar):
    return bar + 1
```

行高亮和代码title
```ts{1,7-9} title=".vuepress/config.ts"
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```