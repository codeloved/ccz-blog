---
title: "python环境配置" # 文章标题,用于生成侧边栏目录名称
article: true # 不在首页文章列表页展示
index: true # 不在侧边栏展示
order: 0 # 文章排序,越大越靠后
---

## python环境配置

### 背景
由于不同的项目需要不同的python版本, 并且依赖的第三方库版本也不相同, 因此需要配置不同的python环境.python虚拟环境(venv)可以帮助我们管理不同项目的python环境, 避免不同项目之间版本冲突.

### 常用配置方法

#### pyenv
pyenv是一个python版本管理工具, 可以帮助我们管理不同python版本.
- 安装
```bash
brew install pyenv
```
- 配置(.zshrc)
添加配置到.zshrc文件中
```bash
export PYENV_ROOT=/usr/local/var/pyenv
export PATH="$PYENV_ROOT/bin:$PATH"
export PATH="$PYENV_ROOT/shims:$PATH"
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
```
- 重启终端或者重新载入配置
```bash
source ~/.zshrc
```
|命令|描述|
|:---|:---|
|pyenv --version|查看 pyenv 的版本|
|pyenv versions|查看已安装的python版本|
|pyenv install -l|显示可以安装的版本列表|
|pyenv install 版本号|安装指定版本的python|
|pyenv rehash|更新pyenv的内部环境变量, 安装指定版本的python后需要执行此命令|
|pyenv global 版本号|设置全局python版本|
|pyenv local|设置当前目录的python版本, 会在当前目录创建 .python-version 文件，并记录设置的 python 环境|
|pyenv shell 版本号|更改当前 shell 下使用的 python 版本，临时生效，优先级高于 global|

#### venv创建虚拟环境
- 创建虚拟环境
```bash
mkdir myproject
cd myproject
python3 -m venv .venv
```
- 激活虚拟环境
```bash
source .venv/bin/activate
# 或者 source 就是 . 语法
. .venv/bin/activate
```
- 退出虚拟环境
```bash
deactivate
```

