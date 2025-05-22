---
title: "重置" # 文章标题,用于生成侧边栏目录名称
article: false # 不在首页文章列表页展示
index: true # 不在侧边栏展示
order: 6 # 文章排序,越大越靠后
---

## git的工作流程
* git reset commitId \
  注意: commitId是指重置到当前id
* HEAD \
  HEAD是当前分支的引用, 指向当前分支的最后一次提交, 也就是指向当前分支的引用的引用 \
  内容存储在.git目录中

  ```mermaid 
  flowchart RL
  c3 --> c2 --> c1
  master --> c3
  HEAD --> master
  ```
* Index \
  索引区, 也叫暂存区, 使用git add 可以将工作区文件加入暂存区 \
  索引就是预期的下一次提交, 使用git commit可以将索引区提交到仓库(也就是HEAD指向的提交) \
  内容存储在.git目录中

* working Direction \
  工作区间就是你能编辑的地方, 工作区间就是解包了仓库或者暂存区的内容 

* HEAD, Index, Working Direction三者关系
  ```mermaid
    sequenceDiagram
    participant ws as 工作区(Working Direction)
    participant idx as  暂存区(Index)
    participant git as Git仓库(HEAD)
    ws ->> idx: git add 文件名
    idx ->> git: git commit -m "提交说明"
    git ->> idx: git checkout 文件名
    git ->> ws: git checkout 文件名
  ```

## 工作流程示例
1. 新增文件file.js
  ```mermaid
    flowchart RL

    subgraph working[working Direction]
    direction TB
    id1([file.js <br> v1])
    end

    subgraph index[Index]
    direction TB
    id2([null])
    end

    subgraph head[HEAD]
    direction TB
    id3([null])
    end

    subgraph git[Git Repo]
    direction TB
    HEAD --> master --> id4([null])
    end

    working --> index --> head

    style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```
  ```bash
  # 此时执行git status
  # 因为工作区改变了, 但是暂存区和HEAD指向的git仓库内容是一样的, 所以只提示使用git add 暂存文件
  位于分支 master
  未跟踪的文件:
    （使用 "git add <文件>..." 以包含要提交的内容）
          file.js

  提交为空，但是存在尚未跟踪的文件（使用 "git add" 建立跟踪）
  ```

2. 添加到暂存区 git add

  ```mermaid
    flowchart RL

    subgraph working[working Direction]
    direction TB
    id1([file.js <br> v1])
    end

    subgraph index[Index]
    direction TB
    id2([file.js <br> v1])
    end

    subgraph head[HEAD]
    direction TB
    id3([null])
    end

    subgraph git[Git Repo]
    direction TB
    HEAD --> master --> id4([null])
    end

    working --> index --> head

    style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```
  ```bash
  # 此时执行git status
  # 此时工作区和暂存区是相同的,但是暂存区和git仓库是不一样的,说明暂存区有内容需要提交到git仓库
  位于分支 master
  要提交的变更：
    （使用 "git restore --staged <文件>..." 以取消暂存）
          新文件：   file.js
  ```

3. 提交文件 git commit
  ```mermaid
    flowchart RL

    subgraph working[working Direction]
    direction TB
    id1([file.js <br> v1])
    end

    subgraph index[Index]
    direction TB
    id2([file.js <br> v1])
    end

    subgraph head[HEAD]
    direction TB
    id3([file.js <br> v1])
    end

    subgraph git[Git Repo]
    direction TB
    HEAD --> master -->id4([file.js <br> v1])
    end

    working --> index --> head

    style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id3 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id4 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5


  ```

  ```bash
  # 此时执行git status
  # 此时工作区,暂存区,git仓库内容一模一样, 所有没有文件提交,也不需要暂存
  位于分支 master
  无文件要提交，干净的工作区
  ```

4. 修改文件file.js
  ```mermaid
    flowchart RL

    subgraph working[working Direction]
    direction TB
    id1([file.js <br> v2])
    end

    subgraph index[Index]
    direction TB
    id2([file.js <br> v1])
    end

    subgraph head[HEAD]
    direction TB
    id3([file.js <br> v1])
    end

    subgraph git[Git Repo]
    direction TB
    HEAD --> master -->id4([file.js <br> v1])
    end

    working --> index --> head

    style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```
  ```bash
  # 此时执行git status
  # 此时工作区和暂存区是相同的,但是暂存区和git仓库是不一样的,说明暂存区有内容需要提交到git仓库
  位于分支 master
  要提交的变更：
    （使用 "git restore --staged <文件>..." 以取消暂存）
          新文件：   file.js
  ```

5. 添加到暂存区 git add 
  ```mermaid
    flowchart RL

    subgraph working[working Direction]
    direction TB
    id1([file.js <br> v2])
    end

    subgraph index[Index]
    direction TB
    id2([file.js <br> v2])
    end

    subgraph head[HEAD]
    direction TB
    id3([file.js <br> v1])
    end

    subgraph git[Git Repo]
    direction TB
    HEAD --> master -->id4([file.js <br> v1])
    end

    working --> index --> head

    style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```

6. 提交文件 git commit
  ```mermaid
    flowchart RL

    subgraph working[working Direction]
    direction TB
    id1([file.js <br> v2])
    end

    subgraph index[Index]
    direction TB
    id2([file.js <br> v2])
    end

    subgraph head[HEAD]
    direction TB
    id3([file.js <br> v2])
    end

    subgraph git[Git Repo]
    direction TB
    HEAD --> master --> id5([file.js <br> v2]) -->id4([file.js <br> v1])
    end

    working --> index --> head


    style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id3 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id5 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```

## reset重置
* 初始模型: 假设我们提交了3次 
```mermaid
    flowchart RL

    subgraph working[working Direction]
    direction TB
    id1([file.js <br> v3])
    end

    subgraph index[Index]
    direction TB
    id2([file.js <br> v3])
    end

    subgraph head[HEAD]
    direction TB
    id3([file.js <br> v3])
    end

    subgraph git[Git Repo]
    direction TB
    HEAD --> master --> id6([file.js <br> v3]) --> id5([file.js <br> v2]) -->id4([file.js <br> v1])
    end

    working --> index --> head


    style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id3 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id6 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```
  1. git reset --soft HEAD~(或者v2 hash) \
    --soft参数, git会移动HEAD指向v2, <font color="red">并且master也会指向v2</font>, 相当于回到了上一次commit之前的状态 \
    你可以重新commit提交, 此操作相当于撤销提交, 但是暂存区和工作区不变
  ```mermaid
      flowchart RL

      subgraph working[working Direction]
      direction TB
      id1([file.js <br> v3])
      end

      subgraph index[Index]
      direction TB
      id2([file.js <br> v3])
      end

      subgraph head[HEAD]
      direction TB
      id3([file.js <br> v2])
      end

      subgraph git[Git Repo]
      direction TB
      HEAD --> master --> id5([file.js <br> v2]) -->id4([file.js <br> v1])
      id6([file.js <br> v3]) ---> id5
      end

      working --> index --> head


      style id3 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
      style id5 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```
  2. git reset --mixed HEAD~(或者v2 hash) \
    --mixed是默认参数, git会移动HEAD指向v2, <font color="red">并且master也会指向v2</font>, 并且暂存区也会回到v2, 相当于回到了上一次add之前的状态 \
    你可以重新add暂存commit提交, 此操作相当于撤销提交和暂存, 但是工作区不变
  ```mermaid
      flowchart RL

      subgraph working[working Direction]
      direction TB
      id1([file.js <br> v3])
      end

      subgraph index[Index]
      direction TB
      id2([file.js <br> v2])
      end

      subgraph head[HEAD]
      direction TB
      id3([file.js <br> v2])
      end

      subgraph git[Git Repo]
      direction TB
      HEAD --> master --> id5([file.js <br> v2]) -->id4([file.js <br> v1])
      id6([file.js <br> v3]) ---> id5
      end

      working --> index --> head

      style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
      style id3 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
      style id5 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```
  3. git reset --hard HEAD~(或者v2 hash) \
  --hard: git会移动HEAD指向v2, <font color="red">并且master也会指向v2</font>, 暂存区和工作区也会回到v2, 相当于回到了上一次编辑之前的状态, 整个v3状态都消失了 \
  注意: 此命令是唯一的危险命令, 如果工作区有修改, 会被直接覆盖, 这些修改会永远消失, 无法找回, 如果想找回v3版本, 可以使用git reflog找到v3的提交id, 然后reset到v3版本
   ```mermaid
      flowchart RL

      subgraph working[working Direction]
      direction TB
      id1([file.js <br> v2])
      end

      subgraph index[Index]
      direction TB
      id2([file.js <br> v2])
      end

      subgraph head[HEAD]
      direction TB
      id3([file.js <br> v2])
      end

      subgraph git[Git Repo]
      direction TB
      HEAD --> master --> id5([file.js <br> v2]) -->id4([file.js <br> v1])
      id6([file.js <br> v3]) ---> id5
      end

      working --> index --> head

      style id1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
      style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
      style id3 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
      style id5 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

  ```

## 通过路径来重置
* 路径 \
  如果提供了作用路径, <font color="red">则会跳过第一步, 不会修改HEAD的指向</font>, 只能修改暂存区和工作区的内容, 只会将它的作用范围限定为指定的文件或者文件集合. 
  1. git reset file.js (相当于it reset --mixed HEAD file.txt 的简写) \
  此方法不会改变HEAD和master的指向, 但是会将HEAD指向的file.js文件内容覆盖暂存区文件内容 \
  此命令相当于取消暂存, 将暂存区和文件恢复到和HEAD相同, 和git add 的作用刚刚好相反,
  git add是将工作区的内容添加到暂存区
  2. git reset commitid fileNmae \
  将对应的commitid的内容提取到暂存区, 此时和工作区的内容变化, 以及和HEAD的变化, 就可以对比了, git status可以看到, 相关文件既需要暂存,也需要提交. 如果将--hard参数加上, 不仅将暂存区重置, 也是将工作区重置.

## reset和checkout的区别
* git checkout [branch] 和 git reset --hard [branch] 
  1. checkout通过移动HEAD指针的指向来切换新的分支, 当前分支的指向不会改变. reset通过移动HEAD和当前的分支的指针到指定的分支位置.区别就是当前分支的指针有没有移动
  2. reset对工作区的文件是强制覆盖, checkout对工作区的文件是尝试合并,如果合并有冲突,则会停止切换行为

* 带路径
  1. 都不会移动HEAD和当前分支指针的指向
  2. reset根据参数不同, 重置的范围不同, checkout会更新索引区和覆盖工作区的文件





