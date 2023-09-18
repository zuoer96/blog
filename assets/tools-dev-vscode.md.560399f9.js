import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.027d2da0.js";const p="/images/image-20230917150326077.png",o="/images/image-20230917150337837.png",e="/images/image-20230917150351887.png",t="/images/image-20230917150418841.png",c="/images/image-20230917150427011.png",r="/images/image-20230917150437371.png",y="/images/image-20230917150441621.png",E="/images/image-20230917150451715.png",i="/images/image-20230917150512586.png",f="/images/image-20230917150524494.png",D="/images/image-20230917150533186.png",u="/images/image-20230917150536794.png",k=JSON.parse('{"title":"vscode","description":"","frontmatter":{"typora-root-url":"./..\\\\..\\\\..\\\\public"},"headers":[],"relativePath":"tools-dev-vscode.md","filePath":"docs/06_工具/05_编程工具/02_VsCode.md"}'),A={name:"tools-dev-vscode.md"},F=l(`<h1 id="vscode" tabindex="-1">vscode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;vscode&quot;">​</a></h1><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">https://code.visualstudio.com/Download</span></span>
<span class="line"><span style="color:#e1e4e8;">ps：官网有很多文档，插件，以及使用技巧，可以看到 ！！！！</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">https://code.visualstudio.com/Download</span></span>
<span class="line"><span style="color:#24292e;">ps：官网有很多文档，插件，以及使用技巧，可以看到 ！！！！</span></span></code></pre></div><p><img src="`+p+`" alt="image-20230917150326077"></p><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">中文(简体)汉化包：Chinese (Simplified) Language Pack for VS Code</span></span>
<span class="line"><span style="color:#e1e4e8;">右击在浏览器打开html:open in browser</span></span>
<span class="line"><span style="color:#e1e4e8;">图标主题，支持更换不同色系的图标:Material Icon Theme</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">中文(简体)汉化包：Chinese (Simplified) Language Pack for VS Code</span></span>
<span class="line"><span style="color:#24292e;">右击在浏览器打开html:open in browser</span></span>
<span class="line"><span style="color:#24292e;">图标主题，支持更换不同色系的图标:Material Icon Theme</span></span></code></pre></div><p>提高开发效率及代码格式化</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify" target="_blank" rel="noreferrer">Iconify IntelliSense</a> - Iconify 图标插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense" target="_blank" rel="noreferrer">windicss IntelliSense</a> - windicss 提示插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noreferrer">I18n-ally</a> - i18n 插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noreferrer">Vetur</a> - vue 开发必备 （也可以选择 Volar）</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint</a> - 脚本代码检查</li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noreferrer">Stylelint</a> - css 格式化</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noreferrer">DotENV</a> - .env 文件 高亮</li></ul><h3 id="prettier-代码格式化" tabindex="-1"><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">Prettier</a> - 代码格式化 <a class="header-anchor" href="#prettier-代码格式化" aria-label="Permalink to &quot;[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化&quot;">​</a></h3><ul><li>参考：<a href="https://zhuanlan.zhihu.com/p/125773296" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/125773296</a></li></ul><p>用户setting.json</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// settings.json</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[javascript]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[javascriptreact]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[typescript]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[typescriptreact]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[json]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[vue]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[html]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[css]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[less]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[scss]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[markdown]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;[yaml]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// settings.json</span></span>
<span class="line"><span style="color:#032F62;">&quot;[javascript]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[javascriptreact]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[typescript]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[typescriptreact]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[json]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[vue]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[html]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[css]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[less]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[scss]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[markdown]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#032F62;">&quot;[yaml]&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>设置下面，开启保存自动格式化</p><p><img src="`+o+'" alt="image-20230917150337837"></p><h3 id="设置默认浏览器" tabindex="-1">设置默认浏览器 <a class="header-anchor" href="#设置默认浏览器" aria-label="Permalink to &quot;设置默认浏览器&quot;">​</a></h3><p><img src="'+e+`" alt="image-20230917150351887"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">php:</span></span>
<span class="line"><span style="color:#e1e4e8;">- PHP Intelephense</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">php:</span></span>
<span class="line"><span style="color:#24292e;">- PHP Intelephense</span></span></code></pre></div><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><h3 id="vscode-终端-禁止运行脚本" tabindex="-1">vscode 终端 禁止运行脚本 <a class="header-anchor" href="#vscode-终端-禁止运行脚本" aria-label="Permalink to &quot;vscode 终端 禁止运行脚本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">babel : 无法加载文件 D:\\\\develop\\\\nodejs\\\\babel.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/[go.microsoft.com/fwlink/?LinkID=135170](http://go.microsoft.com/fwlink/?LinkID=135170) 中的about\\_Execution\\_Policies。所在位置 行:1 字符: 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">babel : 无法加载文件 D:\\\\develop\\\\nodejs\\\\babel.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/[go.microsoft.com/fwlink/?LinkID=135170](http://go.microsoft.com/fwlink/?LinkID=135170) 中的about\\_Execution\\_Policies。所在位置 行:1 字符: 1</span></span></code></pre></div><p><img src="`+t+'" alt="image-20230917150418841"></p><p>我在cmd是可以查看的</p><p><img src="'+c+'" alt="image-20230917150427011"></p><p>所以有2种解决办法</p><ul><li>1.vscode终端选择cmd</li></ul><p><img src="'+r+'" alt="image-20230917150437371"></p><p><img src="'+y+`" alt="image-20230917150441621"></p><ul><li>2.更改powershell的权限</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">set-ExecutionPolicy RemoteSigned</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">set-ExecutionPolicy RemoteSigned</span></span></code></pre></div><pre><code>* 如果该步骤又报需要管理员运行,则右键属性,以管理员身份运行,然后再操作
</code></pre><p><img src="`+E+`" alt="image-20230917150451715"></p><h2 id="vscode中使用emmet语法" tabindex="-1">Vscode中使用emmet语法 <a class="header-anchor" href="#vscode中使用emmet语法" aria-label="Permalink to &quot;Vscode中使用emmet语法&quot;">​</a></h2><blockquote><p>Emmet是一种介于标记性语言（如HTML、XML）和规范之外的逻辑输入方法，是一种能大幅提高前端开发效率的工具。</p></blockquote><h3 id="html-文档类型和结构初始化" tabindex="-1">HTML 文档类型和结构初始化 <a class="header-anchor" href="#html-文档类型和结构初始化" aria-label="Permalink to &quot;HTML 文档类型和结构初始化&quot;">​</a></h3><ul><li><code>html:5</code> 或<code>!</code>：用于 HTML5文档类型</li><li><code>html:xt</code>：用于 XHTML 过渡文档类型</li><li><code>html:4s</code>：用于 HTML4 严格文档类型</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">html:5</span></span>
<span class="line"><span style="color:#E1E4E8;">!</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">http-equiv</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ie=edge&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Document&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">html:5</span></span>
<span class="line"><span style="color:#24292E;">!</span></span>
<span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;X-UA-Compatible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ie=edge&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Document&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="点号" tabindex="-1">点号 <a class="header-anchor" href="#点号" aria-label="Permalink to &quot;点号&quot;">​</a></h4><p>表示class属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div.jpf</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf&quot;&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div.jpf</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h4 id="井号" tabindex="-1">井号 <a class="header-anchor" href="#井号" aria-label="Permalink to &quot;井号&quot;">​</a></h4><p>表示id属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div#jpf</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div id=&quot;jpf&quot;&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div#jpf</span></span>
<span class="line"><span style="color:#24292e;">&lt;div id=&quot;jpf&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h4 id="方括号" tabindex="-1">方括号 <a class="header-anchor" href="#方括号" aria-label="Permalink to &quot;方括号&quot;">​</a></h4><p>表示标签的内部属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a[href=&quot;123&quot; class=&quot;a&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;a href=&quot;123&quot; class=&quot;a&quot;&gt;&lt;/a&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a[href=&quot;123&quot; class=&quot;a&quot;]</span></span>
<span class="line"><span style="color:#24292e;">&lt;a href=&quot;123&quot; class=&quot;a&quot;&gt;&lt;/a&gt;</span></span></code></pre></div><h4 id="花括号" tabindex="-1">花括号 <a class="header-anchor" href="#花括号" aria-label="Permalink to &quot;花括号&quot;">​</a></h4><p>表示标签的内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div{hi}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;hi&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div{hi}</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;hi&lt;/div&gt;</span></span></code></pre></div><h4 id="小括号" tabindex="-1">小括号 <a class="header-anchor" href="#小括号" aria-label="Permalink to &quot;小括号&quot;">​</a></h4><p>表示分组标签。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(a&gt;h1)+(b&gt;h2)</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;a href=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;h1&gt;&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;b&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;h2&gt;&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/b&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(a&gt;h1)+(b&gt;h2)</span></span>
<span class="line"><span style="color:#24292e;">&lt;a href=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;h1&gt;&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/a&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;b&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;h2&gt;&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/b&gt;</span></span></code></pre></div><h4 id="特殊实例" tabindex="-1">特殊实例 <a class="header-anchor" href="#特殊实例" aria-label="Permalink to &quot;特殊实例&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ul&gt;.jpf</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li class=&quot;jpf&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">label[for=&#39;content&#39;]&gt;#content</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;label for=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;span id=&quot;content&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/label&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ul&gt;.jpf</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li class=&quot;jpf&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">label[for=&#39;content&#39;]&gt;#content</span></span>
<span class="line"><span style="color:#24292e;">&lt;label for=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span id=&quot;content&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/label&gt;</span></span></code></pre></div><h3 id="关系符号" tabindex="-1">关系符号 <a class="header-anchor" href="#关系符号" aria-label="Permalink to &quot;关系符号&quot;">​</a></h3><p>关系符号共有五个，分别是大于号、加号、角号、星号和美元符。</p><h4 id="大于号" tabindex="-1">大于号 <a class="header-anchor" href="#大于号" aria-label="Permalink to &quot;大于号&quot;">​</a></h4><p>表示嵌套元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ul&gt;li</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ul&gt;li</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><h4 id="加号" tabindex="-1">加号 <a class="header-anchor" href="#加号" aria-label="Permalink to &quot;加号&quot;">​</a></h4><p>表示同级元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div+div</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ul&gt;li+a</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;a href=&quot;&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div+div</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ul&gt;li+a</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;a href=&quot;&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><h4 id="角号" tabindex="-1">角号 <a class="header-anchor" href="#角号" aria-label="Permalink to &quot;角号&quot;">​</a></h4><p>表示上级元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div&gt;ul&gt;li^p</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">div&gt;ul&gt;li^^p</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ul&gt;li^ul&gt;li</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">div&gt;(p&gt;ul&gt;li*2&gt;a)+div&gt;p</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">div&gt;(tr&gt;td*5)*2+div&gt;p</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div&gt;ul&gt;li^p</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">div&gt;ul&gt;li^^p</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ul&gt;li^ul&gt;li</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">div&gt;(p&gt;ul&gt;li*2&gt;a)+div&gt;p</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;p&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">div&gt;(tr&gt;td*5)*2+div&gt;p</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><h4 id="星号" tabindex="-1">星号 <a class="header-anchor" href="#星号" aria-label="Permalink to &quot;星号&quot;">​</a></h4><p>表示批量复制。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ul&gt;li*5</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">div*5</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ul&gt;li*5</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">div*5</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span></code></pre></div><h4 id="美元符" tabindex="-1">美元符 <a class="header-anchor" href="#美元符" aria-label="Permalink to &quot;美元符&quot;">​</a></h4><p>表示数字通配符。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div.jpf$*5</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf2&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf5&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">div.jpf$$$*5</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf001&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf002&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf003&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf004&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf005&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">div&gt;ul&gt;li.item-$*3</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;li class=&quot;item-1&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;li class=&quot;item-2&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;li class=&quot;item-3&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ul&gt;li.$*3</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li class=&quot;1&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li class=&quot;2&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li class=&quot;3&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ul&gt;li[id=&#39;item$&#39;]{第$$$条数据}*3</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li id=&quot;item1&quot;&gt;第001条数据&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li id=&quot;item2&quot;&gt;第002条数据&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;li id=&quot;item3&quot;&gt;第003条数据&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div.jpf$*5</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf2&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf5&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">div.jpf$$$*5</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf001&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf002&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf003&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf004&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf005&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">div&gt;ul&gt;li.item-$*3</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;li class=&quot;item-1&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;li class=&quot;item-2&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;li class=&quot;item-3&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ul&gt;li.$*3</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li class=&quot;1&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li class=&quot;2&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li class=&quot;3&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ul&gt;li[id=&#39;item$&#39;]{第$$$条数据}*3</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li id=&quot;item1&quot;&gt;第001条数据&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li id=&quot;item2&quot;&gt;第002条数据&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;li id=&quot;item3&quot;&gt;第003条数据&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span></code></pre></div><p><strong>美元符配合@可以实现从指定数字开始向后数指定位数。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div.jpf$@3*5</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf5&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf6&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;jpf7&quot;&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div.jpf$@3*5</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf5&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf6&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;jpf7&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h4 id="占位标记" tabindex="-1">占位标记 <a class="header-anchor" href="#占位标记" aria-label="Permalink to &quot;占位标记&quot;">​</a></h4><p><code>lorem</code>表示占位标记，作用是随机生成一个文本。lorem1表示生成的文本包含一个单词，lorem2表示生成的文本包含两个单词，以此类推，loremN表示生成的文本包含N个单词。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">p*4&gt;lorem2</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;Lorem, ipsum.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;Blanditiis, consequatur.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;Ullam, id?&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;p&gt;Corrupti, ratione.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">div&gt;lorem2</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div&gt;Lorem, ipsum.&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">p*4&gt;lorem2</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;Lorem, ipsum.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;Blanditiis, consequatur.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;Ullam, id?&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;p&gt;Corrupti, ratione.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">div&gt;lorem2</span></span>
<span class="line"><span style="color:#24292e;">&lt;div&gt;Lorem, ipsum.&lt;/div&gt;</span></span></code></pre></div><p><a href="https://emmet.io/" target="_blank" rel="noreferrer">官网:open in new window</a><a href="https://emmet.io/" target="_blank" rel="noreferrer">https://emmet.io/open in new window</a></p><h3 id="快速生成css样式" tabindex="-1">快速生成CSS样式 <a class="header-anchor" href="#快速生成css样式" aria-label="Permalink to &quot;快速生成CSS样式&quot;">​</a></h3><p>CSS 基本采取简写形式</p><p>1.<code>w200</code>生成width: <code>200px;</code></p><p>2.<code>lh26</code>生成<code>line-height: 26px;</code></p><h2 id="vscode中使用eslint" tabindex="-1">vscode中使用eslint <a class="header-anchor" href="#vscode中使用eslint" aria-label="Permalink to &quot;vscode中使用eslint&quot;">​</a></h2><ul><li>缩进修改</li></ul><p><img src="`+i+'" alt="image-20230917150512586"></p><ul><li>文件末尾需要换行符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Newline required at end of file but not found</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Newline required at end of file but not found</span></span></code></pre></div><p><img src="'+f+'" alt="image-20230917150524494"></p><ul><li>逗号后面要有空格</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">A space is required after &#39;,&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">A space is required after &#39;,&#39;</span></span></code></pre></div><p><img src="'+D+'" alt="image-20230917150533186"></p><p><img src="'+u+`" alt="image-20230917150536794"></p><p>非友情提示**：每个规则对应的0，1，2分别表示off, warning, error三个错误级别</p><ul><li>no-unused-vars</li></ul><p>定义了变量却没有在代码中使用，这是防止产生多余没用的变量</p><ul><li>semi</li></ul><p>缺少分号，行尾必须使用分号，这是为了在压缩代码的时候出现意外情况</p><ul><li>no-console</li></ul><p>禁止使用 console，提醒开发者，上线时要去掉，因为是warning不会导致编译的js出问题</p><ul><li>consistent-this</li></ul><p>this的别名规则，只允许self和that，防止有些人写成_this或者me等等，哈哈</p><ul><li>curly</li></ul><p>if 后必须包含 { ，单行 if 除外，也是为了方便阅读代码</p><ul><li>eqeqeq</li></ul><p>必须使用全等===进行比较，防止隐式转换带来的意外问题</p><ul><li>guard-for-in</li></ul><p>for in时需检测hasOwnProperty，避免遍历到继承来的属性方法</p><ul><li>max-depth</li></ul><p>最大块嵌套不能超过5层</p><ul><li>max-params</li></ul><p>函数的形参不能多于8个,如果形参过多，我们现在可以用扩展运算符...来代替后面多余的形参</p><ul><li>new-cap</li></ul><p>new关键字后类名应首字母大写，区分类和函数</p><ul><li>no-array-constructor</li></ul><p>禁止使用Array构造函数，定义数组直接用最快捷的方式[1, 2, 3]</p><ul><li>no-await-in-loop</li></ul><p>禁止将await写在循环里,循环属于同步操作，不该将await异步操作写在内部</p><ul><li>no-caller</li></ul><p>禁止使用arguments.caller和arguments.callee，ES6中废弃了</p><ul><li>no-const-assign</li></ul><p>禁止对const定义重新赋值</p><ul><li>no-delete-var</li></ul><p>禁止对变量使用delete关键字，delete只适用于对象的属性，提醒使用的范围</p><ul><li>no-dupe-args</li></ul><p>函数参数禁止重名</p><ul><li>no-empty-function</li></ul><p>禁止空的function,保证写的每一个function都有用</p><ul><li>no-eval</li></ul><p>禁止使用eval，eval是“魔鬼”，所以在开发中避免</p><ul><li>no-extra-semi</li></ul><p>禁止额外的分号，有些地方没必要加分号比如if () {};这样就是错误的</p><ul><li>no-global-assign</li></ul><p>禁止对全局变量赋值</p><p>例如一份公司中用到的规则:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="color:#E1E4E8;">module.exports = {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 解析ES6</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">&#39;parser&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;babel-eslint&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">&#39;parserOptions&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 启用ES8语法支持</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;ecmaVersion&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2017</span><span style="color:#E1E4E8;">,    </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// module表示ECMAScript模块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;sourceType&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;module&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 使用额外的语言特性</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;ecmaFeatures&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;experimentalObjectRestSpread&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;jsx&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;modules&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这些环境并不是互斥的，所以你可以同时定义多个</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">&#39;env&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;browser&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;jquery&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;node&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;commonjs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;es6&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">&#39;root&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 所以需要定义这些额外的全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">&#39;globals&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;OnlySVG&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;monitor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;CanvasRender&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;Vue&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;VueRouter&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">&#39;rules&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 设置了 setter ，必须相应设置 getter ，反之不必须</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;accessor-pairs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 数组方括号前后的换行符使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;array-bracket-newline&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 数组方括号前后的空格使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;array-bracket-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 数组的 map、filter、sort 等方法，回调函数必须有返回值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;array-callback-return&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 每个数组项是否独占一行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;array-element-newline&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 箭头函数的书写规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;arrow-body-style&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 箭头函数的圆括号使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;arrow-parens&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 箭头函数的空格使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;arrow-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 不能在块外使用块作用域内 var 定义的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;block-scoped-var&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 代码块花括号前后的空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;block-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// if else 的花括号换行规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;brace-style&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// callback 之后必须立即 return</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;callback-return&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 变量名必须使用驼峰式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;camelcase&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 注释的首字母应该大写</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;capitalized-comments&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// class 的非静态方法必须包含 this 关键字</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;class-methods-use-this&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对象的最后一项后面是否写逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 此项目不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @fixable 对于 PC 项目考虑兼容性时需要设置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;comma-dangle&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 逗号前后是否有空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;comma-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 逗号写在行首还是行尾</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;comma-style&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止函数 if ... else if ... else 的复杂度超过 20</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;complexity&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 使用方括号访问对象属性时，方括号前后的空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;computed-property-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止函数在不同条件下返回不同类型的值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 有时候会希望通过参数获取不同类型的返回值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;consistent-return&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// this 的别名规则，只允许 self 或 that</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;consistent-this&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;self&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;that&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 构造函数中必须调用 super</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;constructor-super&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// if 后必须包含 { ，单行 if 除外</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;curly&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;multi-line&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;consistent&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// switch 语句必须包含 default</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;default-case&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 链式操作时，点的位置，是在上一行结尾还是下一行开头</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;dot-location&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 文件最后必须有空行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;eol-last&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用 === 和 !== ，和 null 对比时除外</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;eqeqeq&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;always&#39;</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">&#39;null&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;ignore&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// for 循环不得因方向错误造成死循环</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;for-direction&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 执行函数的圆括号前后的空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;func-call-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 把函数赋给变量或对象属性时，函数名和变量名或对象属性名必须一致</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;func-name-matching&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 不允许匿名函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;func-names&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须只使用函数申明或只使用函数表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;func-style&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// generator 的 * 前后空格使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;generator-star-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// getter 必须有返回值，允许返回 undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;getter-return&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">allowImplicit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// require 必须在全局作用域下</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 条件加载很常见</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;global-require&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// for in 时需检测 hasOwnProperty</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;guard-for-in&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// callback 中的 err、error 参数和变量必须被处理</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;handle-callback-err&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// id 黑名单</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;id-blacklist&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 变量名长度限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 长度不是重点，清晰易读才是关键</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;id-length&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 限制变量名必须匹配指定的正则表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制变量名</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;id-match&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 缩进使用 tab 还是空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;indent&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 变量必须在定义的时候赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 先定义后赋值很常见</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;init-declarations&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// jsx 语法中，属性的值必须使用双引号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;jsx-quotes&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-double&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对象字面量冒号前后的空格使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;key-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 关键字前后必须有空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;keyword-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 换行符使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;linebreak-style&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 单行注释必须写在前一行还是行尾</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;line-comment-position&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 注释前后是否要空一行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;lines-around-comment&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 最大块嵌套深度为 5 层</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;max-depth&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 限制单行代码的长度</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;max-len&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 限制单个文件最大行数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;max-lines&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 最大回调深度为 3 层</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;max-nested-callbacks&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 函数的形参不能多于8个</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;max-params&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 限制一行中的语句数量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;max-statements-per-line&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 限制函数块中的语句数量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;max-statements&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 三元表达式的换行规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;multiline-ternary&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// new关键字后类名应首字母大写</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;new-cap&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;capIsNew&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许大写开头的函数直接执行</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// new 关键字后类应包含圆括号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;new-parens&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 链式调用是否要换行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;newline-per-chained-call&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 alert，提醒开发者，上线时要去掉</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-alert&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 Array 构造函数，使用 Array(num) 直接创建长度为 num 的数组时可以</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-array-constructor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止将 await 写在循环里</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-await-in-loop&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止位运算</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-bitwise&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在 Node.js 中直接调用 Buffer 构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-buffer-constructor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 arguments.caller 和 arguments.callee</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-caller&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// switch的条件中出现 var、let、const、function、class 等关键字，必须使用花括号把内容括起来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-case-declarations&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// catch中不得使用已定义的变量名</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-catch-shadow&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// class定义的类名不得与其它变量重名</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-class-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止与 -0 做比较</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-compare-neg-zero&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在 if、for、while 中出现赋值语句，除非用圆括号括起来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-cond-assign&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;except-parens&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止出现难以理解的箭头函数，除非用圆括号括起来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-confusing-arrow&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">&#39;allowParens&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 console，提醒开发者，上线时要去掉</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-console&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用常量作为判断条件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-constant-condition&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">&#39;checkLoops&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止对 const 定义重新赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-const-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 continue</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-continue&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止正则表达式中出现 Ctrl 键的 ASCII 表示，即/\\x1f/</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-control-regex&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 debugger 语句，提醒开发者，上线时要去掉</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-debugger&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止对变量使用 delete 关键字，删除对象的属性不受限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-delete-var&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-div-regex&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 函数参数禁止重名</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-dupe-args&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止对象出现重名键值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-dupe-keys&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 类方法禁止重名</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-dupe-class-members&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 switch 中出现相同的 case</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-duplicate-case&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止重复 import</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-duplicate-imports&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止出现 if (cond) { return a } else { return b }，应该写为 if (cond) { return a } return b</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 有时前一种写法更清晰易懂</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-else-return&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 正则表达式中禁止出现空的字符集[]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-empty-character-class&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止空的 function</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 包含注释的情况下允许</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-empty-function&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止解构中出现空 {} 或 []</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-empty-pattern&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止出现空代码块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-empty&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">&#39;allowEmptyCatch&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 == 和 != 与 null 做比较，必须用 === 或 !==</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 非严格相等可以同时判断 null 和 undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-eq-null&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 eval</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-eval&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// catch 定义的参数禁止赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-ex-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止扩展原生对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-extend-native&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">&#39;exceptions&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#FDAEB7;font-style:italic;">&#39;Array&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;Object&#39;</span><span style="color:#E1E4E8;">] }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止额外的 bind</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-extra-bind&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止额外的布尔值转换</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-extra-boolean-cast&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止额外的 label</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-extra-label&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止额外的括号，仅针对函数体</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-extra-parens&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;functions&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止额外的分号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-extra-semi&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 每一个 switch 的 case 都需要有 break, return 或 throw</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 包含注释的情况下允许</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-fallthrough&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">&#39;commentPattern&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;.&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-floating-decimal&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止对函数声明重新赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-func-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止对全局变量赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-global-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用隐式类型转换</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-implicit-coercion&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;allow&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#FDAEB7;font-style:italic;">&#39;+&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;!!&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 允许 + 转数值 &#39;&#39; + 转字符串和 !! 转布尔值</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-implied-eval&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止隐式定义全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-implicit-globals&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止行内注释</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-inline-comments&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在块作用域内使用 var 或函数声明</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-inner-declarations&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;both&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用非法的正则表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-invalid-regexp&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在类之外的地方使用 this</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-invalid-this&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用不规范空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-irregular-whitespace&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;skipStrings&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许在字符串中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;skipComments&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许在注释中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;skipRegExps&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许在正则表达式中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;skipTemplates&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许在模板字符串中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 __iterator__</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-iterator&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// label 不得与已定义的变量重名</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-label-var&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 label</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 禁止了将很难 break 多重循环和多重 switch</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-labels&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用无效的块作用域</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-lone-blocks&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 else 中只有一个单独的 if</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 单独的 if 可以把逻辑表达的更清楚</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-lonely-if&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 for (var i) { function() { use i } }，使用 let 则可以</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-loop-func&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止魔法数字</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-magic-numbers&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用混合的逻辑判断，必须把不同的逻辑用圆括号括起来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-mixed-operators&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;groups&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                [</span><span style="color:#9ECBFF;">&quot;&amp;&amp;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;||&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 相同类型的 require 必须放在一起</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-mixed-requires&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止混用空格和 tab 来做缩进，必须统一</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-mixed-spaces-and-tabs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止连等赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-multi-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用连续的空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-multi-spaces&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 \\ 来定义多行字符串，统一使用模板字符串来做</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-multi-str&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 连续空行的数量限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-multiple-empty-lines&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">max</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 文件内最多连续 3 个</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">maxEOF</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 文件末尾最多连续 1 个</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">maxBOF</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 文件头最多连续 1 个</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 if 中出现否定表达式 !==</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 否定的表达式可以把逻辑表达的更清楚</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-negated-condition&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止嵌套的三元表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没有必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-nested-ternary&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 new Function</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 有时会用它来解析非标准格式的 JSON 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-new-func&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 new Object</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-new-object&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 new require</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-new-require&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 new Symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-new-symbol&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 new Boolean、Number 或 String</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-new-wrappers&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 new 一个类而不存储该实例</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-new&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止把原生对象 Math、JSON、Reflect 当函数使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-obj-calls&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用八进制转义符</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-octal-escape&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用0开头的数字表示八进制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-octal&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 __dirname + &#39;file&#39; 的形式拼接路径，应该使用 path.join 或 path.resolve 来代替</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-path-concat&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止对函数的参数重新赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-param-reassign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 ++ 和 --</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-plusplus&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 p<wbr>rocess.env.NODE_ENV</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 使用很常见</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-process-env&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 process.exit(0)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 使用很常见</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-process-exit&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 与 guard-for-in 规则冲突，且没有必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-prototype-builtins&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 __proto__</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-proto&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止重复声明</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-redeclare&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在正则表达式中出现连续空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-regex-spaces&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止特定的全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-restricted-globals&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 import 特定的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-restricted-imports&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用特定的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-restricted-modules&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止特定的对象属性</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-restricted-properties&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用特定的语法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-restricted-syntax&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在return中赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-return-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在 return 中使用 await</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-return-await&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 location.href = &#39;javascript:void&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-script-url&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止将自己赋值给自己</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-self-assign&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止自己与自己作比较</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-self-compare&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止逗号操作符</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-sequences&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用保留字作为变量名</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-shadow-restricted-names&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在嵌套作用域中出现重名的定义，如 let a; function b() { let a }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-shadow&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止数组中出现连续逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-sparse-arrays&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 node 中的同步的方法，比如 fs.readFileSync</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 使用很常见</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-sync&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 tabs</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-tabs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止普通字符串中出现模板字符串语法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-template-curly-in-string&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止三元表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-ternary&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在构造函数的 super 之前使用 this</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-this-before-super&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 throw 字面量，必须 throw 一个 Error 对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-throw-literal&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止行尾空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-trailing-spaces&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;skipBlankLines&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 不检查空行</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;ignoreComments&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 不检查注释</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止将 undefined 赋值给变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-undef-init&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止访问未定义的变量或方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-undef&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === &#39;undefined&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-undefined&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止变量名中使用下划线</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-underscore-dangle&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止出现难以理解的多行代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unexpected-multiline&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 循环体内必须对循环条件进行修改</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unmodified-loop-condition&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止不必要的三元表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unneeded-ternary&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, { </span><span style="color:#FDAEB7;font-style:italic;">&#39;defaultAssignment&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止出现不可到达的代码，如在 return、throw 之后的代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unreachable&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在finally块中出现 return、throw、break、continue</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unsafe-finally&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止出现不安全的否定，如 for (!key in obj} {}，应该写为 for (!(key in obj)} {}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unsafe-negation&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止出现无用的表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unused-expressions&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;allowShortCircuit&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许使用 a() || b 或 a &amp;&amp; b()</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;allowTernary&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许在表达式中使用三元运算符</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;allowTaggedTemplates&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许标记模板字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止定义不使用的 label</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unused-labels&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止定义不使用的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-unused-vars&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;vars&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;all&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 变量定义必须被使用</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;args&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;none&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 对于函数形参不检测</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;ignoreRestSiblings&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 忽略剩余子项 fn(...args)，{a, b, ...coords}</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;caughtErrors&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;none&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 忽略 catch 语句的参数使用</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止在变量被定义之前使用它</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-use-before-define&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;functions&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许函数在定义之前被调用</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&#39;classes&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许类在定义之前被引用</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止不必要的 call 和 apply</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-useless-call&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用不必要计算的key，如 var a = { [&#39;0&#39;]: 0 }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-useless-computed-key&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止不必要的字符串拼接</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-useless-concat&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止无用的构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-useless-constructor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止无用的转义</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-useless-escape&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止无效的重命名，如 import {a as a} from xxx</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-useless-rename&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止没有必要的 return</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没有必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-useless-return&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用 var，必须用 let 或 const</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-var&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止使用void</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-void&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止注释中出现 TODO 或 FIXME，用这个来提醒开发者，写了 TODO 就一定要做完</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-warning-comments&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止属性前出现空格，如 foo. bar()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-whitespace-before-property&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 with</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;no-with&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止 if 语句在没有花括号的情况下换行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;nonblock-statement-body-position&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 定义对象的花括号前后是否要加空行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;object-curly-newline&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 定义对象的花括号前后是否要加空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;object-curly-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对象每个属性必须独占一行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;object-property-newline&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// obj = { a: a } 必须转换成 obj = { a }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;object-shorthand&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 每个变量声明必须独占一行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 有 one-var 就不需要此规则了</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;one-var-declaration-per-line&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否允许使用逗号一次声明多个变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;one-var&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;const&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;never&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 所有 const 声明必须独占一行，不允许用逗号定义多个</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用 x = x + y 而不是 x += y</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;operator-assignment&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 断行时操作符位于行首还是行尾</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;operator-linebreak&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 代码块首尾必须要空行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;padded-blocks&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 限制语句之间的空行规则，比如变量定义完之后必须要空行</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;padding-line-between-statements&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用箭头函数作为回调</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-arrow-callback&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 声明后不再修改的变量必须使用 const</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-const&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用解构</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-destructuring&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用 0b11111011 而不是 parseInt(&#39;111110111&#39;, 2)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-numeric-literals&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// promise 的 reject 中必须传入 Error 对象，而不允许使用字面量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-promise-reject-errors&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用解构 ...args 来代替 arguments</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-rest-params&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用 func(...args) 来代替 func.apply(args)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-spread&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用模板字符串来代替字符串拼接</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;prefer-template&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 字符串必须使用单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;quotes&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;single&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;avoidEscape&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许包含单引号的字符串使用双引号</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;allowTemplateLiterals&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许使用模板字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对象字面量的键名禁止用引号括起来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;quote-props&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// parseInt方法必须传进制参数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;radix&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// async 函数中必须存在 await 语句</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off async function 中没有 await 的写法很常见，比如 koa 的示例中就有这种用法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;require-await&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 必须使用 jsdoc 风格的注释</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂不考虑开启</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;require-jsdoc&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// generator 函数内必须有 yield</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;require-yield&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ...后面不允许有空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;rest-spread-spacing&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;never&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 分号前后的空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;semi-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止行首出现分号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;semi-style&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;last&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 行尾必须使用分号结束</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;semi&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// imports 必须排好序</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;sort-imports&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对象字面量的键名必须排好序</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;sort-keys&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 变量声明必须排好序</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;sort-vars&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// function 等的花括号之前是否使用空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;space-before-blocks&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// function 的圆括号之前是否使用空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;space-before-function-paren&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 圆括号内的空格使用规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;space-in-parens&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 操作符前后要加空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;space-infix-ops&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;space-unary-ops&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;words&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;nonwords&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 注释的斜线和星号后要加空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;spaced-comment&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;always&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&#39;block&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">exceptions</span><span style="color:#E1E4E8;">: [</span><span style="color:#FDAEB7;font-style:italic;">&#39;*&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">balanced</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁用严格模式，禁止在任何地方出现 &#39;use strict&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;strict&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;never&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// switch 中冒号前后的空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;switch-colon-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建 Symbol 的时候必须传入描述</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;symbol-description&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 模板字符串 \${} 前后的空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;template-curly-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 模板字符串前后的空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;template-tag-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 所有文件头禁止出现 BOM</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;unicode-bom&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止直接对 NaN 进行判断，必须使用 isNaN</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;use-isnan&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 注释必须符合 jsdoc 的规范</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 暂不考虑开启</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;valid-jsdoc&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// typeof 判断条件只能是 &quot;undefined&quot;, &quot;object&quot;, &quot;boolean&quot;, &quot;number&quot;, &quot;string&quot;, &quot;function&quot; 或 &quot;symbol&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;valid-typeof&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// var 必须在作用域的最前面</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off var 不在最前面也是很常见的用法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;vars-on-top&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 自执行函数必须使用圆括号括起来，如 (function(){do something...})()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;wrap-iife&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">&#39;inside&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 正则表达式必须用圆括号括起来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;wrap-regex&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// yield 的 * 前后空格规则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;yield-star-spacing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&#39;yoda&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="color:#24292E;">module.exports = {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 解析ES6</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">&#39;parser&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;babel-eslint&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">&#39;parserOptions&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 启用ES8语法支持</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;ecmaVersion&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2017</span><span style="color:#24292E;">,    </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// module表示ECMAScript模块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;sourceType&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;module&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 使用额外的语言特性</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;ecmaFeatures&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;experimentalObjectRestSpread&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;jsx&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;modules&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这些环境并不是互斥的，所以你可以同时定义多个</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">&#39;env&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;browser&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;jquery&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;node&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;commonjs&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;es6&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">&#39;root&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 所以需要定义这些额外的全局变量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">&#39;globals&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;OnlySVG&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;monitor&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;CanvasRender&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;Vue&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;VueRouter&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">&#39;rules&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 设置了 setter ，必须相应设置 getter ，反之不必须</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;accessor-pairs&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 数组方括号前后的换行符使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;array-bracket-newline&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 数组方括号前后的空格使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;array-bracket-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 数组的 map、filter、sort 等方法，回调函数必须有返回值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;array-callback-return&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 每个数组项是否独占一行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;array-element-newline&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 箭头函数的书写规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;arrow-body-style&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 箭头函数的圆括号使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;arrow-parens&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 箭头函数的空格使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;arrow-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 不能在块外使用块作用域内 var 定义的变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;block-scoped-var&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 代码块花括号前后的空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;block-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// if else 的花括号换行规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;brace-style&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// callback 之后必须立即 return</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;callback-return&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 变量名必须使用驼峰式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;camelcase&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 注释的首字母应该大写</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;capitalized-comments&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// class 的非静态方法必须包含 this 关键字</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;class-methods-use-this&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对象的最后一项后面是否写逗号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 此项目不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @fixable 对于 PC 项目考虑兼容性时需要设置</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;comma-dangle&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 逗号前后是否有空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;comma-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 逗号写在行首还是行尾</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;comma-style&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止函数 if ... else if ... else 的复杂度超过 20</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;complexity&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 使用方括号访问对象属性时，方括号前后的空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;computed-property-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止函数在不同条件下返回不同类型的值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 有时候会希望通过参数获取不同类型的返回值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;consistent-return&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// this 的别名规则，只允许 self 或 that</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;consistent-this&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;self&#39;</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;that&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 构造函数中必须调用 super</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;constructor-super&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// if 后必须包含 { ，单行 if 除外</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;curly&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;multi-line&#39;</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;consistent&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// switch 语句必须包含 default</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;default-case&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 链式操作时，点的位置，是在上一行结尾还是下一行开头</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;dot-location&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 文件最后必须有空行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;eol-last&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用 === 和 !== ，和 null 对比时除外</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;eqeqeq&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;always&#39;</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">&#39;null&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;ignore&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// for 循环不得因方向错误造成死循环</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;for-direction&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 执行函数的圆括号前后的空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;func-call-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 把函数赋给变量或对象属性时，函数名和变量名或对象属性名必须一致</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;func-name-matching&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 不允许匿名函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;func-names&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须只使用函数申明或只使用函数表达式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;func-style&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// generator 的 * 前后空格使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;generator-star-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// getter 必须有返回值，允许返回 undefined</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;getter-return&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">allowImplicit</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// require 必须在全局作用域下</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 条件加载很常见</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;global-require&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// for in 时需检测 hasOwnProperty</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;guard-for-in&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// callback 中的 err、error 参数和变量必须被处理</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;handle-callback-err&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// id 黑名单</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;id-blacklist&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 变量名长度限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 长度不是重点，清晰易读才是关键</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;id-length&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 限制变量名必须匹配指定的正则表达式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制变量名</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;id-match&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 缩进使用 tab 还是空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;indent&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 变量必须在定义的时候赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 先定义后赋值很常见</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;init-declarations&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// jsx 语法中，属性的值必须使用双引号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;jsx-quotes&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-double&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对象字面量冒号前后的空格使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;key-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 关键字前后必须有空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;keyword-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 换行符使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;linebreak-style&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 单行注释必须写在前一行还是行尾</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;line-comment-position&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 注释前后是否要空一行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;lines-around-comment&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 最大块嵌套深度为 5 层</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;max-depth&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 限制单行代码的长度</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;max-len&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 限制单个文件最大行数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;max-lines&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 最大回调深度为 3 层</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;max-nested-callbacks&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 函数的形参不能多于8个</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;max-params&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 限制一行中的语句数量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;max-statements-per-line&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 限制函数块中的语句数量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;max-statements&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 三元表达式的换行规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;multiline-ternary&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// new关键字后类名应首字母大写</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;new-cap&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;capIsNew&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许大写开头的函数直接执行</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// new 关键字后类应包含圆括号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;new-parens&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 链式调用是否要换行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;newline-per-chained-call&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 alert，提醒开发者，上线时要去掉</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-alert&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 Array 构造函数，使用 Array(num) 直接创建长度为 num 的数组时可以</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-array-constructor&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止将 await 写在循环里</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-await-in-loop&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止位运算</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-bitwise&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在 Node.js 中直接调用 Buffer 构造函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-buffer-constructor&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 arguments.caller 和 arguments.callee</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-caller&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// switch的条件中出现 var、let、const、function、class 等关键字，必须使用花括号把内容括起来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-case-declarations&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// catch中不得使用已定义的变量名</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-catch-shadow&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// class定义的类名不得与其它变量重名</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-class-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止与 -0 做比较</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-compare-neg-zero&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在 if、for、while 中出现赋值语句，除非用圆括号括起来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-cond-assign&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;except-parens&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止出现难以理解的箭头函数，除非用圆括号括起来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-confusing-arrow&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">&#39;allowParens&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 console，提醒开发者，上线时要去掉</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-console&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用常量作为判断条件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-constant-condition&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">&#39;checkLoops&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止对 const 定义重新赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-const-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 continue</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-continue&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止正则表达式中出现 Ctrl 键的 ASCII 表示，即/\\x1f/</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-control-regex&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 debugger 语句，提醒开发者，上线时要去掉</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-debugger&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止对变量使用 delete 关键字，删除对象的属性不受限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-delete-var&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-div-regex&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 函数参数禁止重名</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-dupe-args&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止对象出现重名键值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-dupe-keys&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 类方法禁止重名</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-dupe-class-members&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 switch 中出现相同的 case</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-duplicate-case&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止重复 import</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-duplicate-imports&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止出现 if (cond) { return a } else { return b }，应该写为 if (cond) { return a } return b</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 有时前一种写法更清晰易懂</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-else-return&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 正则表达式中禁止出现空的字符集[]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-empty-character-class&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止空的 function</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 包含注释的情况下允许</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-empty-function&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止解构中出现空 {} 或 []</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-empty-pattern&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止出现空代码块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-empty&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">&#39;allowEmptyCatch&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 == 和 != 与 null 做比较，必须用 === 或 !==</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 非严格相等可以同时判断 null 和 undefined</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-eq-null&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 eval</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-eval&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// catch 定义的参数禁止赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-ex-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止扩展原生对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-extend-native&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">&#39;exceptions&#39;</span><span style="color:#24292E;">: [</span><span style="color:#B31D28;font-style:italic;">&#39;Array&#39;</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;Object&#39;</span><span style="color:#24292E;">] }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止额外的 bind</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-extra-bind&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止额外的布尔值转换</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-extra-boolean-cast&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止额外的 label</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-extra-label&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止额外的括号，仅针对函数体</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-extra-parens&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;functions&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止额外的分号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-extra-semi&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 每一个 switch 的 case 都需要有 break, return 或 throw</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 包含注释的情况下允许</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-fallthrough&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">&#39;commentPattern&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;.&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-floating-decimal&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止对函数声明重新赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-func-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止对全局变量赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-global-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用隐式类型转换</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-implicit-coercion&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;allow&#39;</span><span style="color:#24292E;">: [</span><span style="color:#B31D28;font-style:italic;">&#39;+&#39;</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;!!&#39;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 允许 + 转数值 &#39;&#39; + 转字符串和 !! 转布尔值</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-implied-eval&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止隐式定义全局变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-implicit-globals&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止行内注释</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-inline-comments&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在块作用域内使用 var 或函数声明</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-inner-declarations&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;both&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用非法的正则表达式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-invalid-regexp&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在类之外的地方使用 this</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-invalid-this&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用不规范空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-irregular-whitespace&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;skipStrings&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许在字符串中使用</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;skipComments&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许在注释中使用</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;skipRegExps&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许在正则表达式中使用</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;skipTemplates&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许在模板字符串中使用</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 __iterator__</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-iterator&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// label 不得与已定义的变量重名</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-label-var&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 label</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 禁止了将很难 break 多重循环和多重 switch</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-labels&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用无效的块作用域</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-lone-blocks&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 else 中只有一个单独的 if</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 单独的 if 可以把逻辑表达的更清楚</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-lonely-if&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 for (var i) { function() { use i } }，使用 let 则可以</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-loop-func&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止魔法数字</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-magic-numbers&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用混合的逻辑判断，必须把不同的逻辑用圆括号括起来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-mixed-operators&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;groups&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                [</span><span style="color:#032F62;">&quot;&amp;&amp;&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;||&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 相同类型的 require 必须放在一起</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-mixed-requires&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止混用空格和 tab 来做缩进，必须统一</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-mixed-spaces-and-tabs&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止连等赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-multi-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用连续的空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-multi-spaces&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 \\ 来定义多行字符串，统一使用模板字符串来做</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-multi-str&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 连续空行的数量限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-multiple-empty-lines&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">max</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 文件内最多连续 3 个</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">maxEOF</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 文件末尾最多连续 1 个</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">maxBOF</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 文件头最多连续 1 个</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 if 中出现否定表达式 !==</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 否定的表达式可以把逻辑表达的更清楚</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-negated-condition&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止嵌套的三元表达式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没有必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-nested-ternary&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 new Function</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 有时会用它来解析非标准格式的 JSON 数据</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-new-func&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 new Object</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-new-object&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 new require</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-new-require&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 new Symbol</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-new-symbol&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 new Boolean、Number 或 String</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-new-wrappers&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 new 一个类而不存储该实例</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-new&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止把原生对象 Math、JSON、Reflect 当函数使用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-obj-calls&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用八进制转义符</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-octal-escape&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用0开头的数字表示八进制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-octal&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 __dirname + &#39;file&#39; 的形式拼接路径，应该使用 path.join 或 path.resolve 来代替</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-path-concat&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止对函数的参数重新赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-param-reassign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 ++ 和 --</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-plusplus&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 p<wbr>rocess.env.NODE_ENV</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 使用很常见</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-process-env&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 process.exit(0)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 使用很常见</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-process-exit&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 与 guard-for-in 规则冲突，且没有必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-prototype-builtins&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 __proto__</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-proto&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止重复声明</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-redeclare&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在正则表达式中出现连续空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-regex-spaces&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止特定的全局变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-restricted-globals&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 import 特定的模块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-restricted-imports&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用特定的模块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-restricted-modules&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;off&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止特定的对象属性</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-restricted-properties&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用特定的语法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂时没有</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-restricted-syntax&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在return中赋值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-return-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在 return 中使用 await</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-return-await&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 location.href = &#39;javascript:void&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-script-url&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止将自己赋值给自己</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-self-assign&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止自己与自己作比较</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-self-compare&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止逗号操作符</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-sequences&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用保留字作为变量名</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-shadow-restricted-names&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在嵌套作用域中出现重名的定义，如 let a; function b() { let a }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-shadow&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止数组中出现连续逗号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-sparse-arrays&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 node 中的同步的方法，比如 fs.readFileSync</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 使用很常见</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-sync&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 tabs</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-tabs&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止普通字符串中出现模板字符串语法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-template-curly-in-string&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止三元表达式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 很常用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-ternary&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在构造函数的 super 之前使用 this</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-this-before-super&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 throw 字面量，必须 throw 一个 Error 对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-throw-literal&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止行尾空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-trailing-spaces&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;skipBlankLines&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 不检查空行</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;ignoreComments&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 不检查注释</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止将 undefined 赋值给变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-undef-init&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止访问未定义的变量或方法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-undef&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === &#39;undefined&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-undefined&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止变量名中使用下划线</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-underscore-dangle&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止出现难以理解的多行代码</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unexpected-multiline&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 循环体内必须对循环条件进行修改</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unmodified-loop-condition&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止不必要的三元表达式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unneeded-ternary&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, { </span><span style="color:#B31D28;font-style:italic;">&#39;defaultAssignment&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止出现不可到达的代码，如在 return、throw 之后的代码</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unreachable&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在finally块中出现 return、throw、break、continue</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unsafe-finally&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止出现不安全的否定，如 for (!key in obj} {}，应该写为 for (!(key in obj)} {}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unsafe-negation&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止出现无用的表达式</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unused-expressions&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;allowShortCircuit&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许使用 a() || b 或 a &amp;&amp; b()</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;allowTernary&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许在表达式中使用三元运算符</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;allowTaggedTemplates&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许标记模板字符串</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止定义不使用的 label</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unused-labels&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止定义不使用的变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-unused-vars&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;vars&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;all&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 变量定义必须被使用</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;args&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;none&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 对于函数形参不检测</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;ignoreRestSiblings&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 忽略剩余子项 fn(...args)，{a, b, ...coords}</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;caughtErrors&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;none&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 忽略 catch 语句的参数使用</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止在变量被定义之前使用它</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-use-before-define&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;functions&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许函数在定义之前被调用</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&#39;classes&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许类在定义之前被引用</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止不必要的 call 和 apply</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-useless-call&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用不必要计算的key，如 var a = { [&#39;0&#39;]: 0 }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-useless-computed-key&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止不必要的字符串拼接</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-useless-concat&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止无用的构造函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-useless-constructor&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止无用的转义</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-useless-escape&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止无效的重命名，如 import {a as a} from xxx</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-useless-rename&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止没有必要的 return</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没有必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-useless-return&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用 var，必须用 let 或 const</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-var&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止使用void</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-void&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止注释中出现 TODO 或 FIXME，用这个来提醒开发者，写了 TODO 就一定要做完</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-warning-comments&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止属性前出现空格，如 foo. bar()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-whitespace-before-property&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 with</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;no-with&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止 if 语句在没有花括号的情况下换行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;nonblock-statement-body-position&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 定义对象的花括号前后是否要加空行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;object-curly-newline&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 定义对象的花括号前后是否要加空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;object-curly-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对象每个属性必须独占一行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;object-property-newline&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// obj = { a: a } 必须转换成 obj = { a }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;object-shorthand&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 每个变量声明必须独占一行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 有 one-var 就不需要此规则了</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;one-var-declaration-per-line&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是否允许使用逗号一次声明多个变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;one-var&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;const&#39;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;never&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 所有 const 声明必须独占一行，不允许用逗号定义多个</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用 x = x + y 而不是 x += y</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;operator-assignment&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 断行时操作符位于行首还是行尾</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;operator-linebreak&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 代码块首尾必须要空行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;padded-blocks&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 限制语句之间的空行规则，比如变量定义完之后必须要空行</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;padding-line-between-statements&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用箭头函数作为回调</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-arrow-callback&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 声明后不再修改的变量必须使用 const</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-const&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用解构</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-destructuring&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用 0b11111011 而不是 parseInt(&#39;111110111&#39;, 2)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-numeric-literals&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// promise 的 reject 中必须传入 Error 对象，而不允许使用字面量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-promise-reject-errors&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用解构 ...args 来代替 arguments</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-rest-params&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用 func(...args) 来代替 func.apply(args)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-spread&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用模板字符串来代替字符串拼接</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;prefer-template&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 字符串必须使用单引号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;quotes&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;single&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;avoidEscape&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许包含单引号的字符串使用双引号</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;allowTemplateLiterals&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许使用模板字符串</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对象字面量的键名禁止用引号括起来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;quote-props&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// parseInt方法必须传进制参数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;radix&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// async 函数中必须存在 await 语句</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off async function 中没有 await 的写法很常见，比如 koa 的示例中就有这种用法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;require-await&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 必须使用 jsdoc 风格的注释</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂不考虑开启</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;require-jsdoc&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// generator 函数内必须有 yield</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;require-yield&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ...后面不允许有空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;rest-spread-spacing&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;never&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 分号前后的空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;semi-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止行首出现分号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;semi-style&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;last&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 行尾必须使用分号结束</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;semi&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// imports 必须排好序</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;sort-imports&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对象字面量的键名必须排好序</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;sort-keys&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 变量声明必须排好序</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 没必要限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;sort-vars&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// function 等的花括号之前是否使用空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;space-before-blocks&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// function 的圆括号之前是否使用空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;space-before-function-paren&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 圆括号内的空格使用规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;space-in-parens&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 操作符前后要加空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;space-infix-ops&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;space-unary-ops&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;words&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;nonwords&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 注释的斜线和星号后要加空格</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;spaced-comment&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;always&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&#39;block&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">exceptions</span><span style="color:#24292E;">: [</span><span style="color:#B31D28;font-style:italic;">&#39;*&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">balanced</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁用严格模式，禁止在任何地方出现 &#39;use strict&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;strict&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;never&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// switch 中冒号前后的空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不关心</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;switch-colon-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建 Symbol 的时候必须传入描述</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;symbol-description&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 模板字符串 \${} 前后的空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;template-curly-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 模板字符串前后的空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;template-tag-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 所有文件头禁止出现 BOM</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;unicode-bom&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止直接对 NaN 进行判断，必须使用 isNaN</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;use-isnan&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 注释必须符合 jsdoc 的规范</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 暂不考虑开启</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;valid-jsdoc&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// typeof 判断条件只能是 &quot;undefined&quot;, &quot;object&quot;, &quot;boolean&quot;, &quot;number&quot;, &quot;string&quot;, &quot;function&quot; 或 &quot;symbol&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;valid-typeof&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// var 必须在作用域的最前面</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off var 不在最前面也是很常见的用法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;vars-on-top&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 自执行函数必须使用圆括号括起来，如 (function(){do something...})()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;wrap-iife&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">&#39;inside&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 正则表达式必须用圆括号括起来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;wrap-regex&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// yield 的 * 前后空格规则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// @off 不限制</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;yield-star-spacing&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&#39;yoda&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,133),d=[F];function B(g,C,m,h,v,q){return n(),a("div",null,d)}const w=s(A,[["render",B]]);export{k as __pageData,w as default};
