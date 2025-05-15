---
title: "git简介" # 文章标题,用于生成侧边栏目录名称
article: false # 不在首页文章列表页展示
index: true # 不在侧边栏展示
order: 2 # 文章排序,越大越靠后
---

## git介绍
- 直接记录快照, 而非差异比较 \
  如下图所示, 每次提交时, 都会对所有文件创建一个快照, 如果文件没有改变, 则会直接指向先前的文件(白色文件), 提升效率.
  ```mermaid
  ---
  title: Flowchart
  ---
  flowchart LR

  subgraph version1
  direction TB
  a1[fileA] --- b1[fileB] --- c1[fileC]
  end

  subgraph version2
  direction TB
  a2[A1] --- b2[B] --- c2[C1]
  end

  subgraph version3
  direction TB
  a3[A1] --- b3[B] --- c3[C2]
  end

  subgraph version4
  direction TB
  a4[A2] --- b4[B1] --- c4[C2]
  end

  subgraph version5
  direction TB
  a5[A2] --- b5[B2] --- c5[C3]
  end

  version1 e1@--> version2 e2@--> version3 e3@--> version4 e4@--> version5
  e1@{ animation: fast }
  e2@{ animation: fast }
  e3@{ animation: fast }
  e4@{ animation: fast }

  classDef white fill:#fff,stroke:#333,stroke-width:2px;
  %% 注意, class应用多节点,逗号之后不能有空格
  class b2,a3,b3,c4,a5 white
  ```

- 近乎所有操作都是本地完成 \
  git绝大部分操作都只需要访问本地问价和资源

- SHA-1哈希值 \
  git的对象模型中, 每个对象都有唯一的SHA-1哈希值, 用于标识对象内容的完整性和位置。

- 安全性 \
  git一般只进行添加操作, 基本上绝大部分操作都是可以恢复的

## git工作流程

- 工作区: \
  就是你在电脑里能看到的目录, 是某个版本提取出来的所有的文件快照
- 暂存区: \
  又称索引区(index), 保存了下次将要提交的文件列表信息, 一般在.git目录下
- git仓库: \
  git用来保存元数据和对象数据库的地方, 也就是Git的核心, 就是.git目录, 克隆仓库就是复制这个目录
  目录中有所有的提交记录和文件快照, 可以检出(checkout)文件到工作区

  ```mermaid
    sequenceDiagram
    participant ws as 工作区
    participant idx as  暂存区
    participant git as Git仓库
    ws ->> idx: git add 文件名
    idx ->> git: git commit -m "提交说明"
    git ->> ws: git checkout 文件名
  ```

## git配置
- git config \
  可以给git配置变量, 变量存储在不同的位置.
  - /etc/gitconfig 文件 \
  包含系统上每一个用户的仓库的通用配置, 执行 git config 时带上 --system 选项，那么它就会读写该文件中的配置变量
  - ~/.gitconfig 或 ~/.config/git/config 文件 \
  包含当前用于的仓库配置, 执行 git config 时带上 --global 选项，那么它就会读写该文件中的配置变量
  - 工作区的.git/config 文件 \
  包含当前仓库的配置, 执行 git config 时不带任何选项或者--local，那么它就会读写该文件中的配置变量
  - 使用方式: \
  一般使用--global设置通用的配置(用户名,邮箱), 使用--local设置当前仓库的配置(用户名,邮箱等), 使用--system设置系统的配置.
  - 优先级: \
  --local > --global > --system
- 配置方式: 
  ```bash
  # 设置全局用户名和邮箱
  git config --global user.name "your name" 
  git config --global user.email "your email"
  # 设置当前仓库用户名和邮箱(在当前仓库目录下执行)
  git config user.name "your name" 
  git config user.email "your email"
  # 查看配置信息
  git config --list
  git config user.name
  git config user.email
  ```
