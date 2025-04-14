---
title: "字符编码" # 文章标题,用于生成侧边栏目录名称
article: false # 不在首页文章列表页展示
index: true # 不在侧边栏展示
order: 0 # 文章排序,越大越靠后
---

## Unicode字符集
Unicode是国际组织制定的，用于收纳世界上**所有文字和符号**的字符集方案，一般使用两个字节来表示一个字符。

- 码点 \
每个字符的数字编号称为码点(code point)。使用U+hex的形式表示。范围为U+0000-U+10FFFF。
- 码元 \
码元(code unit)是对码点进行编码的最小基本单位。每个码元由一个或多个字节组成。

|编码方式|码元|编码后的字节数|
|:--:|:--:|:--:|
|UTF-8|1个字节|1-4个字节|
|UTF-16|2个字节|2或4个字节|
|UTF-32|4个字节|4个字节|

## UTF-8编码
UTF-8编码是一种变长编码方式, 汉字一般占3个字节, 表情符号占4个字节。

|字节数|码点位数|码点范围|编码方式|
|:--:|:--:|:--:|:--:|
|1|7|U+0000-U+007F|0×××××××|
|2|11|U+0080-U+07FF|110××××× 10××××××|
|3|16|U+0800-U+FFFF|1110×××× 10×××××× 10××××××|
|4|21|U+10000-U+10FFFF|11110××× 10×××××× 10×××××× 10××××××|

**码点位数**就是除了固定1和0开头的数字之后X的个数。

## UTF-16编码
UTF-16采用**2**个字节或**4**个字节来表示一个码点。当采用2个字节时, 码元实际上和Unicode的码点是相同的。

## 前端开发中的编码知识
- 码元的位数
  - UTF-8编码的码元位数是8位, 即1个字节。
  - UTF-16编码的码元位数是16位, 即2个字节。
  - UTF-32编码的码元位数是32位, 即4个字节。
- JavaScript中的字符串
  - 是基于UTF-16编码的。
  - 字符串的长度是码元的个数, 而不是字节的个数。
  - 字符串的索引是码元的位置, 而不是字节的位置。
- 字符串的length属性
  - ASCII码和大部分中文，都是一个码元(2个字节)
  - 而表情字符和其他特殊字符都是两个码元(4个字节)
```js
'a'.length // 1
'中'.length // 1
'😀'.length // 2
```
- 多码元字符操作
  - 对于多码元字符, 使用下标取值时, 拿到的是它的码元
  ```js
  '😄'[0] // '\uD83D' 
  '😄'[1] // '\uDE04'
  '123'[0] // '1' 单码元能拿到字符
  ```
  - 对于多码元字符, 使用for会乱码, 使用<font color="red">for-of</font>则正常(es6做了优化)
  ```js
  let smile = '😄'
  for(let i = 0; i < smile.length; i++) { 
    console.log(smile[i]) 
  }
  // �
  // �

  for (let tt of smile) {
    console.log(tt)
  }
  // 😄
  ```
  - 其他访问方式
  ```js
  // 数组方式访问
  Array.from('😄') // [ '😄' ]
  [...'😄'][0] // '😄'

  // 码点方式
  String.fromCodePoint('😄'.codePointAt()) // '😄'

  // split()，slice()，charAt()，charCodeAt()，substr()，substring() 方式都会切割码元
  '😄'.slice(0, 2) // '😄'
  '😄'.slice(0, 1) // '\uD83D'
  '😄'.slice(1, 2) // '\uDE04'
  '😄'.substr(0,1) // '\uD83D'
  '😄'.substr(0,2) // '😄'
  '😄'.split('') // ['\uD83D', '\uDE04']

  ```

- <font color="red">常用API</font>
  - charAt(index)
  返回指定位置的字符,如果是多码元字符,则返回对应的码元。
  ```js
  'a'.charAt(0) // 'a'
  '😄'.charAt(0) // '\uD83D'
  '😄'.charAt(1) // '\uDE04'
  ```
  - charCodeAt(index)
  返回指定位置的字符的码点。
  ```js
  '😄'.charCodeAt(0) // '\uD83D'
  '😄'.charCodeAt(1) // '\uDE04'
  ```
- <font color="red">URL的编解码</font>
  url链接编码和解码比较常见, 通常将中文字符, 特殊字符, 表情等进行UTF-8编解码操作
  - encodeURI() 和 encodeURIComponent()
  - decodeURI() 和 decodeURIComponent()
  - 转换方式:
  先将字符转换为UTF-8的字节码,再在字节码前面加上%分隔
  ```js
  encodeURI('好') // '%E5%A5%BD'
  decodeURI('%E5%A5%BD') // '好'
  encodeURIComponent('好') // '%E5%A5%BD'
  decodeURIComponent('%E5%A5%BD') // '好'
  encodeURI('hello') // 'hello'
  encodeURIComponent('hello') // 'hello'
  encodeURIComponent('😄') // '%F0%9F%98%84'
  ```
  - 区别:
  encodeURIComponent可以对元字符进行编码, URL元字符：分号（;），逗号（’,’），斜杠（/），问号（?），冒号（:），at（@），&，等号（=），加号（+），美元符号（$），井号（#）
  ```js
  encodeURIComponent('http://www.baidu.com?q=中文') // 'http%3A%2F%2Fwww.baidu.com%3Fq%3D%E4%B8%AD%E6%96%87'
  encodeURI('http://www.baidu.com?q=中文') // 'http://www.baidu.com?q=%E4%B8%AD%E6%96%87'
  ```

- js文件的utf-8编码
  - 文件存储编码
  JavaScrip文件通常以utf-8编码存储再磁盘上
  - 文件传输
  文件在传输过程中, 也通常使用utf-8
- js内部的utf-16编码
  - js引擎内部将字符串存储为utf-16编码
  - 当浏览器加载js文件时
    - 读取utf-8编码的文件
    - 解码为Unicode码点
    - 然后编码为utf-16存储在内存中
  - 当执行字符串操作时
    - 所有操作都基于utf-16编码的字符串



## 总结


- 总结 \
Unicode是字符集, 其中的码点是唯一对应一个字符, UTF-8, UTF-16, UTF-32是三种编码方式, 它们都可以表示Unicode字符集。\
不同的编码方式,就是将Unicode字符集的码点转换为码元的不同表示方式。



