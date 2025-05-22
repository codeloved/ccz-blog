---
title: "变基" # 文章标题,用于生成侧边栏目录名称
article: false # 不在首页文章列表页展示
index: true # 不在侧边栏展示
order: 5 # 文章排序,越大越靠后
---

## git变基 
git 合并其他分支的修改3种方式<font color="red">merge</font> 、<font color="red">rebase</font>、<font color="red">cherry-pick</font>

- 使用merge合并2个分支 \
  假设开发分支feat和master, 在b2时分别有开发变更, 现在要将feat合并到master
  1. 合并前(在master分支)
    ```mermaid
    flowchart RL
    b2 --> b1 --> b0
    b3 --> b2
    master --> b3
    b4 --> b2
    feat --> b4
    ```
  2. 合并后(git merge feat)
    ```mermaid
    flowchart RL
    b2 --> b1 --> b0
    b3 --> b2
    b5 --> b3
    b5 --> b4
    b4 --> b2
    feat --> b4
    master --> b5
    ``` 
    <font color="red">注意:</font>此时不满足快速合并, 会生成一个新的合并记录b5, 有2个父提交, master分支指向新的b5提交

  - 使用rebase合并2个分支
    1. 合并前(在feat分支)
      ```mermaid
        flowchart RL
        b2 --> b1 --> b0
        b3 --> b2
        master --> b3
        b4 --> b2
        feat --> b4
      ```
    2. rebase后(git rebase master)
    ```bash
    git checkout feat
    git rebase master
    ```
    ```mermaid
        flowchart RL
        b2 --> b1 --> b0
        b3 --> b2
        master --> b3
        b4 --x b2
        b4' --> b3
        feat --> b4'
    ```
    <font color='red'>原理:</font> 先找到feat和master的共同祖先b2, 然后将当前分支(feat)基于共同祖先b2的历次提交暂存起来
    然后将当前分支feat指向目标分支master的最新提交b3, 再将暂存的提交以b3为基底重新提交一遍 \
    总结就是, 相当于feat从基于共同最近祖先的提交(新增的提交)断开, 以master的最新提交为基底, 重演一遍断开的提交, 提交的id会改变,
    也可能会存在冲突,需要解决冲突后继续提交,看起来好像是从master的b3处开始开发的, 然后再使用快速合并
    ```bash
    git checkout master
    git merge feat
    ```
    ```mermaid
        flowchart RL
        b2 --> b1 --> b0
        b3 --> b2
        b4' --> b3
        feat --> b4'
        master --> b4'
    ```
    <font color='red'>总结:</font> 
      1. 无论是直接合并的得到的b5, 还是先rebase再merge得到的b4', 指向的最终快照结果是完全一样的, 唯一的区别是提交的历史记录 \
      如果先rebase再merge, 得到的提交历史是一条没有分叉的直线, 而不是直接合并会有一个合并节点, 使得并行工作的任务的提交记录,看起来和串行工作的提交记录一样的
      2. 一般使用情况, 先使用git fetch抓取最新的远程分支, 再使用git rebase origin/master变基, 然后推送到远端, 这样别人合并代码到主分支时, 不需要处理整合操作, 只需要快速合并即可
      3. 不论是rebase还是直接merge, 最终得到的快照结果, 一定是一样的, 唯一有区别的是提交历史
      4. <font color='red'>千万千万注意:</font>  如果别人也基于相同远端分支开发, 并且已经检出了, 千万不要rebase, 会导致其他人的工作内容丢失和处理烦恼

## 重写提交历史
- 原因 
  1. 可能对提交的commit信息不满意, 需要重写commit信息
  2. 可能对提交的历史记录不满意, 需要合并提交或者删除提交等
  3. 修改历史的原则, 是在本地未提交远端的历史, 或者已经提交, 但是未共享给他人的历史, 切记不能重写影响他人的历史
- 修改最后的一次提交
  1. 修改最后一次提交的提交信息
  ```bash
  git commit --amend
  ```
  2. 修改最后一次的提交信息或者提交内容
  ```bash
  # 先将内容暂存
  git add .
  # 提交此次暂存内容的同时, 修改最近的一次条信息, 相当于将本次的修改, 合并到最近的一次提交中
  git commit --amend
  ```

  3. 修改多个提交信息(git rebase -i)
  ``` bash
  # 修改最近的三次提交信息
  git rebase -i HEAD~3
  # 得到内容, 注意提交信息的排序是由远到近, 最后一个提交记录f40f0df是最近的提交
  pick e2e3790 add
  pick 90de6eb test
  pick f40f0df rebase

  # 变基 776327d..f40f0df 到 776327d（3 个提交）
  #
  # 命令:
  # p, pick <提交> = 使用提交
  # r, reword <提交> = 使用提交，但编辑提交说明
  # e, edit <提交> = 使用提交，但停止以便修补提交
  # s, squash <提交> = 使用提交，但挤压到前一个提交
  # f, fixup [-C | -c] <提交> = 类似于 "squash"，但只保留前一个提交
  #                    的提交说明，除非使用了 -C 参数，此情况下则只
  #                    保留本提交说明。使用 -c 和 -C 类似，但会打开
  #                    编辑器修改提交说明
  # x, exec <命令> = 使用 shell 运行命令（此行剩余部分）


  # 修改以上内容, 常用命名s, r, p, d, e
  ```
    - <font color="red">注意</font>
    1. git rebase -i 显示的提交日志顺序是由远到近, 最近的提交在最下面, 因为git会<font color="red">从上到下依次重演每一个修改的提交</font>, 所有顺序是这样排序的. 因为是从上到下重演每一次提交, 所以, 你可以直接修改提交的顺序, 删除某一个提交(推荐用d命令)
    2. 拆分提交, 使用e命令可以在重演到该提交时, 使用git add 和git commit 分多次提交修改的内容, 当提交完成后, 使用git rebase conitnue继续重演下一个提交
    3. 总结, rebase是从上到下依次重演提交内容的, 如果碰到中断的操作, 操作完成后, 需要使用git rebase --continue继续, 如果想放弃rebase, 使用git rebase --abort
  4. filter-branch(全局修改)
  ```bash
  # 用于全局修改提交邮箱和用户名, 整理自己的邮箱提交记录
    git filter-branch --commit-filter '
    if [ "$GIT_AUTHOR_EMAIL" = "想要修改的邮箱地址" ];
    then
            GIT_AUTHOR_NAME="新用户名";
            GIT_AUTHOR_EMAIL="新邮箱地址";
            git commit-tree "$@";
    else
            git commit-tree "$@";
    fi' HEAD

  # 全局删除某个文件
  git filter-branch --tree-filter 'rm -f xxx.txt' HEAD
  ```


## stash的使用
- 目的 \
  一般用来在当前工作目录中有修改, 突然想切到其他分支上, 但是又不想提交这部分内容. 或者想将这部分内容带到其他分支上
  1. git stash \
  将当前修改和暂存的改动贮藏起来, 如果当前有未跟踪的新文件需要贮藏, 可以使用 git stash -u
  2. git stash list \
  查看当前贮藏的列表
  3. git stash apply \
  应用贮藏的修改, 如果需要指定应用哪一个, 需要加上对应的index, 使用git stash apply stash@{index}
  4. git stash drop stash@{index} \
  通过贮藏的名称移除贮藏
  5. git stash pop \
  常用操作, 应用最近的一个贮藏, 并且从栈中移除该贮藏, 相当于 git stash apply 和 git stash drop两个命令的结合
  6. git stash clear \
  清除贮藏区的所有内容, 注意, 此命令不可恢复





