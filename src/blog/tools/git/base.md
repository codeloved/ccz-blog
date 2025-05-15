---
title: "基础操作" # 文章标题,用于生成侧边栏目录名称
article: false # 不在首页文章列表页展示
index: true # 不在侧边栏展示
order: 3 # 文章排序,越大越靠后
---

## 文件状态
- 跟踪文件: 已纳入版本控制管理的文件, 即在版本库中可以找到该文件, 并在未提交前可进行版本控制
- 未跟踪文件: 未纳入版本控制管理的文件, 即在版本库中找不到该文件, 不能进行版本控制
- 已忽略文件: 被版本控制管理系统忽略的文件, 不会纳入版本控制管理, 也不会被提交到版本库
  ```mermaid
  sequenceDiagram
  participant Untracked as 未跟踪
  participant Unmodified as 未修改
  participant Modified as 已修改
  participant Staged as 已暂存

  Untracked -->> Staged: git add 文件名
  Unmodified -->> Modified: edit file
  Modified -->> Staged: git add 文件名
  Staged -->> Modified: git commit
  Unmodified -->> Untracked: git remove
  ```
- 查看当前文件状态: git status
- 移除文件
  - git rm 文件名: 从版本库中移除文件, 并将修改添加到暂存区
  - 直接在工作区手动删除文件
    - 此时使用git status, 提示添加到暂存区, 使用 git add 文件名, 状态变为和git status一致
  - git rm --cached 文件名: 从版本库中移除文件, 但不删除文件, 只是从版本库中移除记录
    - 适用于希望把文件从仓库中删除,但是又想保留在当前工作目录中的情况
    - 比如先通过git rm --cached 删除文件, 再将文件放入.gitignore中, 提交之后, 文件就不会再被纳入版本控制管理
- 移动文件
  - git mv 文件名 新文件名: 移动文件, 并将修改添加到暂存区
  - 区别:
    - 直接重命名文件, 不会跟踪文件移动操作, 使用git status, 会显示删除了原文件, 未跟踪新文件
    - git mv 使用git status 会显示重命名文件

## 撤销操作
- git commit --amend \
  用来修改最后一次的提交, 相当于用这次的提交替换掉上一次的提交, 如果这次提交没有内容, 那么相当于修改上次提交的提价信息
- git reset HEAD 文件名 \
  用来取消暂存区的修改, 回到上一次提交的状态 (比如使用git add 添加了不想提交的文件, 可以使用此命令撤销暂存区的修改)
- git checkout -- 文件名 \
  用来丢弃工作区的修改, 回到上一次提交的状态 (注意: 此命令不可恢复)

## 远程仓库
- git remote -v \
  查看远程仓库信息
- git remote add name url \
  添加远程仓库name, 并制定url路径 (远端仓库的分支就可以通过 name/branch 形式访问)
- git fetch remote(name) \
  从远端仓库获取最新数据, 但不合并到本地仓库, remote(name)就是添加时起的名字 

  <font color="red">注意:</font> 所有远端的分支的操作, 都是通过name/branch的方式访问的, 要想拿到最新的远端数据, 需要先fetch操作
- git push remote(name) branch \
  将当前分支推送到远端的branch分支, 如果使用了-u参数,就会将远端分支branch设置为当前分支的跟踪分支
- git remote show remote(name) \
  查看远程仓库的详细信息, 包括远端仓库的名称, 地址, 跟踪分支等
- git remote rename old_name new_name \
  远程仓库的名称修改
- git remote remove name \
  删除远程仓库

## 打标签
- git tag \
  查看所有标签
- 打标签
  - 附注标签 \
  git tag -a v1.0 -m "version 1.0" 9fceb02 
  打一个名为v1.0的附注标签, 指向commit 9fceb02
  - 轻量标签 \
  git tag v1.1 9fceb02 
  打一个名为v1.1的轻量标签, 指向commit 9fceb02
- 推送标签
  - git push remote(name) --tags \
  将所有标签推送到远端仓库
  - git push remote(name) tag_name \
  将单个标签推送到远端仓库
- 删除标签
  - git tag -d tag_name \
  删除本地标签
  - git push origin --delete tag_name \
  删除远端标签
- 检出标签
  git checkout -b branch_name tag_name \
  检出指定标签为新分支, 并切换到该分支