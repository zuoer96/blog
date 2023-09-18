import{_ as s,o as e,c as a,Q as l}from"./chunks/framework.027d2da0.js";const n="/images/image-20230917145636041.png",p="/images/image-20230917145650863.png",t="/images/image-20230917145659754.png",o="/images/image-20230917145725697.png",i="/images/image-20230917145738131.png",c="/images/image-20230917145750427.png",r="/images/image-20230917145802142.png",d="/images/image-20230917145814345.png",g="/images/image-20230917145836974.png",h="/images/image-20230917145853472.png",m="/images/image-20230917145906248.png",u="/images/image-20230917145930930.png",y="/images/image-20230917150002412.png",q=JSON.parse('{"title":"PyCharm","description":"","frontmatter":{"typora-root-url":"./..\\\\..\\\\..\\\\public"},"headers":[],"relativePath":"tools-dev-pycharm.md","filePath":"docs/06_工具/05_编程工具/03_PyCharm.md"}'),b={name:"tools-dev-pycharm.md"},v=l('<h1 id="pycharm" tabindex="-1">PyCharm <a class="header-anchor" href="#pycharm" aria-label="Permalink to &quot;PyCharm&quot;">​</a></h1><h2 id="安装下载使用" tabindex="-1">安装下载使用 <a class="header-anchor" href="#安装下载使用" aria-label="Permalink to &quot;安装下载使用&quot;">​</a></h2><p>PyCharm安装下载使用</p><ul><li>下载：<a href="https://www.jetbrains.com/pycharm/download/" target="_blank" rel="noreferrer">https://www.jetbrains.com/pycharm/download/</a></li><li>安装：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">双击安装包 -- [运行] -- [允许你应用更改设备]: [是] -- [Next] -- [选择安装位置] -- [Next] -- [Install] -- [Finish]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">双击安装包 -- [运行] -- [允许你应用更改设备]: [是] -- [Next] -- [选择安装位置] -- [Next] -- [Install] -- [Finish]</span></span></code></pre></div><p><img src="'+n+'" alt="image-20230917145636041"></p><ul><li>新建项目</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">打开PyCharm -- [Create New Project] -- 选择项目根目录和解释器版本 -- [Create]，即可完成新建一个项目。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">打开PyCharm -- [Create New Project] -- 选择项目根目录和解释器版本 -- [Create]，即可完成新建一个项目。</span></span></code></pre></div><p><img src="'+p+`" alt="image-20230917145650863"></p><ul><li>新建文件并书写代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">项目根目录或根目录内部任意位置 — 右键 -- [New] -- [Python File] -- 输入文件名 -- [OK]</span></span>
<span class="line"><span style="color:#e1e4e8;">ps:如果是将来要上传到服务器的文件，那么文件名切记不能用中文</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">项目根目录或根目录内部任意位置 — 右键 -- [New] -- [Python File] -- 输入文件名 -- [OK]</span></span>
<span class="line"><span style="color:#24292e;">ps:如果是将来要上传到服务器的文件，那么文件名切记不能用中文</span></span></code></pre></div><p><img src="`+t+`" alt="image-20230917145659754"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 双击打开文件，并书写一个最简单的Python代码：</span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;hello world&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 双击打开文件，并书写一个最简单的Python代码：</span></span>
<span class="line"><span style="color:#24292e;">print(&quot;hello world&quot;)</span></span></code></pre></div><ul><li>运行文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">文件打开状态 -- 空白位置 — 右键 -- Run -- 即可调出Pycharm的控制台输出程序结果。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">文件打开状态 -- 空白位置 — 右键 -- Run -- 即可调出Pycharm的控制台输出程序结果。</span></span></code></pre></div><p><img src="`+o+`" alt="image-20230917145725697"></p><ul><li>PyCharm的基本设置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[file] -- [Settings]/[Default Settings]。</span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改解释器</span></span>
<span class="line"><span style="color:#e1e4e8;">[Project: 项目名称] -- [Project Interpreter] -- [设置图标] -- [Add] -- 浏览到目标解释器 -- [OK] -- [OK]。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[file] -- [Settings]/[Default Settings]。</span></span>
<span class="line"><span style="color:#24292e;"># 修改解释器</span></span>
<span class="line"><span style="color:#24292e;">[Project: 项目名称] -- [Project Interpreter] -- [设置图标] -- [Add] -- 浏览到目标解释器 -- [OK] -- [OK]。</span></span></code></pre></div><ul><li>项目管理</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">打开项目</span></span>
<span class="line"><span style="color:#e1e4e8;">[File] -- [Open] -- 浏览选择目标项目根目录 -- [OK] -- 选择打开项目方式。</span></span>
<span class="line"><span style="color:#e1e4e8;">关闭项目</span></span>
<span class="line"><span style="color:#e1e4e8;">[File] -- [Close Project]/[Close Projects in current window]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">打开项目</span></span>
<span class="line"><span style="color:#24292e;">[File] -- [Open] -- 浏览选择目标项目根目录 -- [OK] -- 选择打开项目方式。</span></span>
<span class="line"><span style="color:#24292e;">关闭项目</span></span>
<span class="line"><span style="color:#24292e;">[File] -- [Close Project]/[Close Projects in current window]</span></span></code></pre></div><p><img src="`+i+'" alt="image-20230917145738131"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">attach模式：并且打开.这种模式不错！</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">attach模式：并且打开.这种模式不错！</span></span></code></pre></div><p><img src="'+c+'" alt="image-20230917145750427"></p><ul><li>更换解释器</li></ul><p><img src="'+r+'" alt="image-20230917145802142"></p><ul><li>交互式开发环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">一些简单的运算,可以用这个,不用写print。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">一些简单的运算,可以用这个,不用写print。</span></span></code></pre></div><p><img src="'+d+`" alt="image-20230917145814345"></p><ul><li><p>破解参考IDEA破解</p></li><li><p><strong>ubuntu 20.04 下pycharm 无法使用IBUS中文输入法,怎么解决?</strong></p></li></ul><h2 id="cpython扩展提示" tabindex="-1">cpython扩展提示 <a class="header-anchor" href="#cpython扩展提示" aria-label="Permalink to &quot;cpython扩展提示&quot;">​</a></h2><p>cpython扩展提示</p><p>使用问题</p><ul><li>debug的时候出现安装cpython扩展</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Python Debugger Extension Available</span></span>
<span class="line"><span style="color:#e1e4e8;">                    Cython extension speeds up Python debugging</span></span>
<span class="line"><span style="color:#e1e4e8;">                    Install   How does it work</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Python Debugger Extension Available</span></span>
<span class="line"><span style="color:#24292e;">                    Cython extension speeds up Python debugging</span></span>
<span class="line"><span style="color:#24292e;">                    Install   How does it work</span></span></code></pre></div><p>windows不用管他,其他的安装下就行：<a href="https://www.jetbrains.com/help/pycharm/2017.2/cython-speedups.html" target="_blank" rel="noreferrer">https://www.jetbrains.com/help/pycharm/2017.2/cython-speedups.html</a></p><p><img src="`+g+'" alt="image-20230917145836974"></p><ul><li>如果项目关联了GIT，pycharm新增文件都会询问是否增加到GIT，可以做如下设置不在询问</li></ul><p><img src="'+h+'" alt="image-20230917145853472"></p><ul><li>idea的GIT提交窗口有时候会在左边.不太习惯。可以切换为悬浮框</li></ul><p>现在是这样的</p><p><img src="'+m+'" alt="image-20230917145906248"></p><p>切换为悬浮+完整信息dialog</p><p><img src="'+u+'" alt="image-20230917145930930"></p><p>参考：<a href="https://blog.csdn.net/PowerBlogger/article/details/107707937" target="_blank" rel="noreferrer">https://blog.csdn.net/PowerBlogger/article/details/107707937</a></p><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><p><img src="'+y+'" alt="image-20230917150002412"></p>',46),_=[v];function k(C,P,w,f,x,j){return e(),a("div",null,_)}const N=s(b,[["render",k]]);export{q as __pageData,N as default};