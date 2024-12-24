import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as e,o as a}from"./app-CAOAhp7p.js";const n={};function l(h,i){return a(),t("div",null,i[0]||(i[0]=[e(`<h2 id="python环境配置" tabindex="-1"><a class="header-anchor" href="#python环境配置"><span>python环境配置</span></a></h2><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><p>由于不同的项目需要不同的python版本, 并且依赖的第三方库版本也不相同, 因此需要配置不同的python环境.python虚拟环境(venv)可以帮助我们管理不同项目的python环境, 避免不同项目之间版本冲突.</p><h3 id="常用配置方法" tabindex="-1"><a class="header-anchor" href="#常用配置方法"><span>常用配置方法</span></a></h3><h4 id="pyenv" tabindex="-1"><a class="header-anchor" href="#pyenv"><span>pyenv</span></a></h4><p>pyenv是一个python版本管理工具, 可以帮助我们管理不同python版本.</p><ul><li>安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pyenv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>配置(.zshrc) 添加配置到.zshrc文件中</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PYENV_ROOT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pyenv</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PYENV_ROOT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/bin:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PYENV_ROOT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/shims:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> which</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pyenv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dev/null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> eval</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pyenv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init -)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启终端或者重新载入配置</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.zshrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">pyenv --version</td><td style="text-align:left;">查看 pyenv 的版本</td></tr><tr><td style="text-align:left;">pyenv versions</td><td style="text-align:left;">查看已安装的python版本</td></tr><tr><td style="text-align:left;">pyenv install -l</td><td style="text-align:left;">显示可以安装的版本列表</td></tr><tr><td style="text-align:left;">pyenv install 版本号</td><td style="text-align:left;">安装指定版本的python</td></tr><tr><td style="text-align:left;">pyenv rehash</td><td style="text-align:left;">更新pyenv的内部环境变量, 安装指定版本的python后需要执行此命令</td></tr><tr><td style="text-align:left;">pyenv global 版本号</td><td style="text-align:left;">设置全局python版本</td></tr><tr><td style="text-align:left;">pyenv local</td><td style="text-align:left;">设置当前目录的python版本, 会在当前目录创建 .python-version 文件，并记录设置的 python 环境</td></tr><tr><td style="text-align:left;">pyenv shell 版本号</td><td style="text-align:left;">更改当前 shell 下使用的 python 版本，临时生效，优先级高于 global</td></tr></tbody></table><h4 id="venv创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#venv创建虚拟环境"><span>venv创建虚拟环境</span></a></h4><ul><li>创建虚拟环境</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> myproject</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> myproject</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> venv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .venv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>激活虚拟环境</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .venv/bin/activate</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者 source 就是 . 语法</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .venv/bin/activate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>退出虚拟环境</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">deactivate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,20)]))}const r=s(n,[["render",l],["__file","env.html.vue"]]),k=JSON.parse('{"path":"/blog/ai/python/env.html","title":"python环境配置","lang":"zh-CN","frontmatter":{"title":"python环境配置","article":true,"index":true,"order":0,"description":"python环境配置 背景 由于不同的项目需要不同的python版本, 并且依赖的第三方库版本也不相同, 因此需要配置不同的python环境.python虚拟环境(venv)可以帮助我们管理不同项目的python环境, 避免不同项目之间版本冲突. 常用配置方法 pyenv pyenv是一个python版本管理工具, 可以帮助我们管理不同python版本...","head":[["meta",{"property":"og:url","content":"https://codeloved.github.io/ccz-blog/ccz-blog/blog/ai/python/env.html"}],["meta",{"property":"og:site_name","content":"首页"}],["meta",{"property":"og:title","content":"python环境配置"}],["meta",{"property":"og:description","content":"python环境配置 背景 由于不同的项目需要不同的python版本, 并且依赖的第三方库版本也不相同, 因此需要配置不同的python环境.python虚拟环境(venv)可以帮助我们管理不同项目的python环境, 避免不同项目之间版本冲突. 常用配置方法 pyenv pyenv是一个python版本管理工具, 可以帮助我们管理不同python版本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T03:05:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T03:05:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python环境配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-24T03:05:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ccz\\",\\"url\\":\\"https://codeloved.github.io/ccz-blog/\\"}]}"]]},"headers":[{"level":2,"title":"python环境配置","slug":"python环境配置","link":"#python环境配置","children":[{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"常用配置方法","slug":"常用配置方法","link":"#常用配置方法","children":[]}]}],"git":{"createdTime":1735009506000,"updatedTime":1735009506000,"contributors":[{"name":"zhengcc","email":"chengcheng.zheng@evchong.com","commits":1}]},"readingTime":{"minutes":1.41,"words":423},"filePathRelative":"blog/ai/python/env.md","localizedDate":"2024年12月24日","excerpt":"<h2>python环境配置</h2>\\n<h3>背景</h3>\\n<p>由于不同的项目需要不同的python版本, 并且依赖的第三方库版本也不相同, 因此需要配置不同的python环境.python虚拟环境(venv)可以帮助我们管理不同项目的python环境, 避免不同项目之间版本冲突.</p>\\n<h3>常用配置方法</h3>\\n<h4>pyenv</h4>\\n<p>pyenv是一个python版本管理工具, 可以帮助我们管理不同python版本.</p>\\n<ul>\\n<li>安装</li>\\n</ul>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">brew</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pyenv</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,k as data};