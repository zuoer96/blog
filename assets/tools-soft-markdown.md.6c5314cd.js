import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.027d2da0.js";const p="/images/image-20230913151600452.png",e="/images/image-20230913154858544.png",o="/images/image-20230913153138387.png",m=JSON.parse('{"title":"Markdown","description":"","frontmatter":{"typora-root-url":"./..\\\\..\\\\..\\\\public"},"headers":[],"relativePath":"tools-soft-markdown.md","filePath":"docs/06_工具/01_软性办公/17_Markdown.md"}'),t={name:"tools-soft-markdown.md"},c=l(`<h1 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h1><h2 id="基础语法" tabindex="-1">基础语法 <a class="header-anchor" href="#基础语法" aria-label="Permalink to &quot;基础语法&quot;">​</a></h2><h3 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-label="Permalink to &quot;标题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 一级标题 快捷键为 Ctrl + 1</span></span>
<span class="line"><span style="color:#e1e4e8;">## 二级标题 快捷键为 Ctrl + 2</span></span>
<span class="line"><span style="color:#e1e4e8;">......</span></span>
<span class="line"><span style="color:#e1e4e8;">###### 六级标题 快捷键为 Ctrl + 6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 一级标题 快捷键为 Ctrl + 1</span></span>
<span class="line"><span style="color:#24292e;">## 二级标题 快捷键为 Ctrl + 2</span></span>
<span class="line"><span style="color:#24292e;">......</span></span>
<span class="line"><span style="color:#24292e;">###### 六级标题 快捷键为 Ctrl + 6</span></span></code></pre></div><h3 id="加粗" tabindex="-1">加粗 <a class="header-anchor" href="#加粗" aria-label="Permalink to &quot;加粗&quot;">​</a></h3><p>使用 <code>**两个星号**</code> 或者 <code>__两个下划线__</code> 可以字体加粗。快捷键 <code>Ctrl + B</code></p><p>效果：<strong>加粗</strong></p><h3 id="斜体" tabindex="-1">斜体 <a class="header-anchor" href="#斜体" aria-label="Permalink to &quot;斜体&quot;">​</a></h3><p>用法：使用 <code>*单个星号*</code> 或者 <code>_单下划线_</code> 可以字体倾斜。快捷键 <code>Ctrl + I</code></p><p>效果：<em>斜体</em></p><h3 id="加粗斜体" tabindex="-1">加粗斜体 <a class="header-anchor" href="#加粗斜体" aria-label="Permalink to &quot;加粗斜体&quot;">​</a></h3><p>使用<code>***加粗斜体***</code>可以加粗斜体。</p><p>效果：<em><strong>加粗斜体</strong></em></p><h3 id="引用块" tabindex="-1">引用块 <a class="header-anchor" href="#引用块" aria-label="Permalink to &quot;引用块&quot;">​</a></h3><p>用法：<code>&gt; 引用</code></p><p>效果：</p><blockquote><p>用法</p></blockquote><h3 id="有序列表" tabindex="-1">有序列表 <a class="header-anchor" href="#有序列表" aria-label="Permalink to &quot;有序列表&quot;">​</a></h3><p>用法: 使用 <code>1. 2. 3.</code> 创建有序列表</p><p><code>1. 列表项一</code></p><p><code>2. 列表项二</code></p><p><code>3. 列表项三</code></p><p>效果：</p><ol><li>列表项一</li><li>列表项二</li><li>列表项三</li></ol><h3 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-label="Permalink to &quot;无序列表&quot;">​</a></h3><p>用法: 使用<code>* + -</code>都可以创建一个无序列表,推荐用<code>-</code></p><p><code>-. 列表项一</code></p><p><code>-. 列表项二</code></p><p><code>-. 列表项三</code></p><p>效果：</p><ul><li>列表项一</li><li>列表项二</li><li>列表项三</li></ul><h3 id="任务列表" tabindex="-1">任务列表 <a class="header-anchor" href="#任务列表" aria-label="Permalink to &quot;任务列表&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">- [ ] 不勾选</span></span>
<span class="line"><span style="color:#e1e4e8;">- [x] 勾选</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- [ ] 不勾选</span></span>
<span class="line"><span style="color:#24292e;">- [x] 勾选</span></span></code></pre></div><ul><li>[ ] 不勾选</li><li>[x] 勾选</li></ul><h3 id="定义列表" tabindex="-1">定义列表 <a class="header-anchor" href="#定义列表" aria-label="Permalink to &quot;定义列表&quot;">​</a></h3><p>用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">项</span></span>
<span class="line"><span style="color:#e1e4e8;">: 定义1</span></span>
<span class="line"><span style="color:#e1e4e8;">: 定义2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">项</span></span>
<span class="line"><span style="color:#24292e;">: 定义1</span></span>
<span class="line"><span style="color:#24292e;">: 定义2</span></span></code></pre></div><p>HTML中会转成<code>dl+dt+dd</code></p><h3 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-label="Permalink to &quot;代码块&quot;">​</a></h3><p>在Typora中插入程序代码的方式有两种：使用反引号 \`（~ 键）、使用缩进（Tab）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`代码块\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`代码块\`</span></span></code></pre></div><ul><li>插入行内代码，即插入一个单词或者一句代码的情况，使用 <code>code</code> 这样的形式插入。</li><li>插入多行代码输入3个反引号（\`） + 回车，并在后面选择一个语言名称即可实现语法高亮。</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">helloworld</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello, world!&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">helloworld</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello, world!&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="分隔线" tabindex="-1">分隔线 <a class="header-anchor" href="#分隔线" aria-label="Permalink to &quot;分隔线&quot;">​</a></h3><p>用法： <code>***</code> 或者<code>---</code> 再按回车即可绘制一条水平线（为了兼容性，请在分隔线的前后均添加空白行）</p><p>效果：</p><hr><h3 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h3><p>用法：<code>[左耳](https://nbchen.com)</code> （为了兼容性，请尽量使用<code>%20</code>代替URL中的空格。）</p><p>效果：<a href="https://nbchen.com" target="_blank" rel="noreferrer">左耳</a></p><p>使用<strong>尖括号</strong>可以很方便地把URL或者email地址变成可点击的链接。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;https://markdown.com.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;fake@example.com&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;https://markdown.com.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;fake@example.com&gt;</span></span></code></pre></div><p><a href="https://markdown.com.cn" target="_blank" rel="noreferrer">https://markdown.com.cn</a><a href="mailto:fake@example.com" target="_blank" rel="noreferrer">fake@example.com</a></p><p>当然，直接写也是可以的</p><p><a href="https://nbchen.com" target="_blank" rel="noreferrer">https://nbchen.com</a></p><h3 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h3><p>用法：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">![</span><span style="color:#DBEDFF;text-decoration:underline;">nier-001</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">Markdown/nier-001.jpg</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">![</span><span style="color:#032F62;text-decoration:underline;">nier-001</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">Markdown/nier-001.jpg</span><span style="color:#24292E;">)</span></span></code></pre></div><p>图片可以增加连接：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">![nier-001](Markdown/nier-001.jpg)</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">https://nbchen.com</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">![nier-001](Markdown/nier-001.jpg)</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">https://nbchen.com</span><span style="color:#24292E;">)</span></span></code></pre></div><p>效果：</p><p><img src="`+p+`" alt="image-20230913151600452"></p><blockquote><p>支持插入GIF动图</p></blockquote><h3 id="段落" tabindex="-1">段落 <a class="header-anchor" href="#段落" aria-label="Permalink to &quot;段落&quot;">​</a></h3><p>要创建段落，请使用空白行将一行或多行文本进行分隔。</p><p>不要用空格（spaces）或制表符（ tabs）缩进段落。</p><h3 id="换行" tabindex="-1">换行 <a class="header-anchor" href="#换行" aria-label="Permalink to &quot;换行&quot;">​</a></h3><p>在一行的末尾<strong>添加两个或多个空格</strong>，然后<strong>按回车键</strong>,即可创建一个换行(<code>&lt;br&gt;</code>)。但是这种方式在编辑器中看不到。</p><blockquote><p>在markdown中，段落由多个空格分隔。在Typora中，只需回车即可创建新段落。</p></blockquote><p>为了兼容性，请在行尾添加“结尾空格”或 HTML 的 <code>&lt;br&gt;</code> 标签来实现换行。</p><h3 id="转义" tabindex="-1">转义 <a class="header-anchor" href="#转义" aria-label="Permalink to &quot;转义&quot;">​</a></h3><p>用<code>\\</code>来转义Markdown字符</p><p><code>&lt;</code> 和 <code>&amp;</code> 在Markdown中会被自动转成HTML实体<code>&amp;lt;</code> 和<code>&amp;amp;</code>,而不用手动写了，这很方便。</p><h3 id="内嵌html标签" tabindex="-1">内嵌html标签 <a class="header-anchor" href="#内嵌html标签" aria-label="Permalink to &quot;内嵌html标签&quot;">​</a></h3><p>Markdown可以直接在文件中使用HTML本身，在HTML块级标签内不能使用Markdown语法。</p><h3 id="插入表格" tabindex="-1">插入表格 <a class="header-anchor" href="#插入表格" aria-label="Permalink to &quot;插入表格&quot;">​</a></h3><blockquote><p>Typora推荐用快捷键<code>Ctrl + T</code></p></blockquote><p>用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">| 表头1 | 表头2 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| ----- | ----- |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 内容1 | 内容2 |</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">扩展：对齐：可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。</span></span>
<span class="line"><span style="color:#e1e4e8;">| 表头1 | 表头2 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| :----- | ----- |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 内容1 | 内容2 |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">| 表头1 | 表头2 |</span></span>
<span class="line"><span style="color:#24292e;">| ----- | ----- |</span></span>
<span class="line"><span style="color:#24292e;">| 内容1 | 内容2 |</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">扩展：对齐：可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。</span></span>
<span class="line"><span style="color:#24292e;">| 表头1 | 表头2 |</span></span>
<span class="line"><span style="color:#24292e;">| :----- | ----- |</span></span>
<span class="line"><span style="color:#24292e;">| 内容1 | 内容2 |</span></span></code></pre></div><p>效果：</p><table><thead><tr><th>表头1</th><th>表头2</th></tr></thead><tbody><tr><td>内容1</td><td>内容2</td></tr></tbody></table><h2 id="扩展语法" tabindex="-1">扩展语法 <a class="header-anchor" href="#扩展语法" aria-label="Permalink to &quot;扩展语法&quot;">​</a></h2><h3 id="目录-toc" tabindex="-1">目录（TOC） <a class="header-anchor" href="#目录-toc" aria-label="Permalink to &quot;目录（TOC）&quot;">​</a></h3><p>输入 <code>[ toc ]</code> 然后回车，即可创建一个“目录”。TOC从文档中提取所有标题，其内容将自动更新。</p><h3 id="删除线" tabindex="-1">删除线 <a class="header-anchor" href="#删除线" aria-label="Permalink to &quot;删除线&quot;">​</a></h3><p>使用<code>~~删除线~~</code> 快捷键 <code>Alt + Shift + 5</code></p><p>用法：<code>~~这是一条删除线.~~</code></p><p>效果：<s>这是一条删除线.</s></p><h3 id="锚点跳转" tabindex="-1">锚点跳转 <a class="header-anchor" href="#锚点跳转" aria-label="Permalink to &quot;锚点跳转&quot;">​</a></h3><p>用法：通过锚点+标题编号可以跳转</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">### 这是标题编号,就是给h3元素添加了id {#custom-id}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[标题](#自定义锚点)  </span></span>
<span class="line"><span style="color:#e1e4e8;">[标题](第三方网站地址#自定义锚点)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">### 这是标题编号,就是给h3元素添加了id {#custom-id}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[标题](#自定义锚点)  </span></span>
<span class="line"><span style="color:#24292e;">[标题](第三方网站地址#自定义锚点)</span></span></code></pre></div><h3 id="下划线" tabindex="-1">下划线 <a class="header-anchor" href="#下划线" aria-label="Permalink to &quot;下划线&quot;">​</a></h3><p>通过<code>&lt;u&gt;下划线的内容&lt;/u&gt;</code> 或者 快捷键<code>Ctrl + U</code>可实现下划线</p><h3 id="表情符号" tabindex="-1">表情符号 <a class="header-anchor" href="#表情符号" aria-label="Permalink to &quot;表情符号&quot;">​</a></h3><p>Github的Markdown语法支持添加emoji表情，输入不同的符号码（两个冒号包围的字符）可以显示出不同的表情。</p><p>😄</p><p>😺</p><h3 id="高亮" tabindex="-1">高亮 <a class="header-anchor" href="#高亮" aria-label="Permalink to &quot;高亮&quot;">​</a></h3><p><code>==高亮==</code>(需在设置中打开该功能)</p><p>我是最重要的</p><h3 id="文本居中" tabindex="-1">文本居中 <a class="header-anchor" href="#文本居中" aria-label="Permalink to &quot;文本居中&quot;">​</a></h3><p>使用 <code>&lt;center&gt;这是要居中的内容&lt;/center&gt;</code>可以使文本居中</p><p>这是要居中的文本内容</p><h3 id="换行符" tabindex="-1">换行符 <a class="header-anchor" href="#换行符" aria-label="Permalink to &quot;换行符&quot;">​</a></h3><p>使用 <code>空格 + 空格 + Enter</code>可以实现换行，例如：</p><p>或者可以使用<code>&lt;br/&gt;</code>实现换行。例如:</p><p>你好<br>换行</p><h3 id="转义-1" tabindex="-1">转义 <a class="header-anchor" href="#转义-1" aria-label="Permalink to &quot;转义&quot;">​</a></h3><p>Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符。</p><p>Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\\   反斜线</span></span>
<span class="line"><span style="color:#E1E4E8;">\`   反引号</span></span>
<span class="line"><span style="color:#FFAB70;">*</span><span style="color:#E1E4E8;">   星号</span></span>
<span class="line"><span style="color:#E1E4E8;">_   下划线</span></span>
<span class="line"><span style="color:#E1E4E8;">{}  花括号</span></span>
<span class="line"><span style="color:#E1E4E8;">[]  方括号</span></span>
<span class="line"><span style="color:#E1E4E8;">()  小括号</span></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">#   井字号</span></span>
<span class="line"><span style="color:#FFAB70;">+</span><span style="color:#E1E4E8;">   加号</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;">   减号</span></span>
<span class="line"><span style="color:#E1E4E8;">.   英文句点</span></span>
<span class="line"><span style="color:#E1E4E8;">!   感叹号</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\\   反斜线</span></span>
<span class="line"><span style="color:#24292E;">\`   反引号</span></span>
<span class="line"><span style="color:#E36209;">*</span><span style="color:#24292E;">   星号</span></span>
<span class="line"><span style="color:#24292E;">_   下划线</span></span>
<span class="line"><span style="color:#24292E;">{}  花括号</span></span>
<span class="line"><span style="color:#24292E;">[]  方括号</span></span>
<span class="line"><span style="color:#24292E;">()  小括号</span></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">#   井字号</span></span>
<span class="line"><span style="color:#E36209;">+</span><span style="color:#24292E;">   加号</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;">   减号</span></span>
<span class="line"><span style="color:#24292E;">.   英文句点</span></span>
<span class="line"><span style="color:#24292E;">!   感叹号</span></span></code></pre></div><h3 id="下标" tabindex="-1">下标 <a class="header-anchor" href="#下标" aria-label="Permalink to &quot;下标&quot;">​</a></h3><p>可以使用 <code>&lt;sub&gt;文本&lt;/sub&gt;</code>实现下标。</p><p>(需在设置中打开该功能)</p><p>H~2~O</p><p>H<sub>2</sub>O</p><h3 id="上标" tabindex="-1">上标 <a class="header-anchor" href="#上标" aria-label="Permalink to &quot;上标&quot;">​</a></h3><p>可以使用<code>&lt;sup&gt;文本&lt;/sup&gt;</code>实现上标。</p><p>(需在设置中打开该功能)</p><p>x^2^</p><p>X<sup>2</sup></p><h3 id="脚注" tabindex="-1">脚注 <a class="header-anchor" href="#脚注" aria-label="Permalink to &quot;脚注&quot;">​</a></h3><p>用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">这是被标注的. [^1]</span></span>
<span class="line"><span style="color:#e1e4e8;">[^1]: 这是脚注内容</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">这是被标注的. [^1]</span></span>
<span class="line"><span style="color:#24292e;">[^1]: 这是脚注内容</span></span></code></pre></div><p>效果：</p><p><img src="`+e+`" alt="image-20230913154858544"></p><p>注意：该例子脚注标识是1，脚注标识可以为字母数字下划线，但是暂不支持中文。脚注内容可为任意字符，包括中文。</p><h3 id="数学表达式" tabindex="-1">数学表达式 <a class="header-anchor" href="#数学表达式" aria-label="Permalink to &quot;数学表达式&quot;">​</a></h3><p>当你需要在编辑器中插入数学公式时，可以使用两个美元符 $$ 包裹 TeX 或 LaTeX 格式的数学公式来实现。根据需要加载 Mathjax 对数学公式进行渲染。</p><p>按下 <code>$$</code>，然后按下回车键，即可进行数学公式的编辑。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$$</span></span>
<span class="line"><span style="color:#e1e4e8;">\\mathbf{V}_1\\times\\mathbf{V}_2 = \\mathbf{X}_3</span></span>
<span class="line"><span style="color:#e1e4e8;">$$</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$$</span></span>
<span class="line"><span style="color:#24292e;">\\mathbf{V}_1\\times\\mathbf{V}_2 = \\mathbf{X}_3</span></span>
<span class="line"><span style="color:#24292e;">$$</span></span></code></pre></div><h3 id="键盘键" tabindex="-1">键盘键 <a class="header-anchor" href="#键盘键" aria-label="Permalink to &quot;键盘键&quot;">​</a></h3><p>支持HTML</p><p>不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。</p><p>目前支持的 HTML 元素有：<code>&lt;kbd&gt; &lt;b&gt; &lt;i&gt; &lt;em&gt; &lt;sup&gt; &lt;sub&gt; &lt;br&gt;</code>等 ，如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">使用 &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Alt&lt;/kbd&gt;+&lt;kbd&gt;Del&lt;/kbd&gt; 重启电脑</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;kbd&gt; &lt;/kbd&gt; -- 白色框框</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">使用 &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Alt&lt;/kbd&gt;+&lt;kbd&gt;Del&lt;/kbd&gt; 重启电脑</span></span>
<span class="line"><span style="color:#24292e;">&lt;kbd&gt; &lt;/kbd&gt; -- 白色框框</span></span></code></pre></div><p>效果： 使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑 <kbd></kbd> 白色框框</p><h3 id="行内文字颜色" tabindex="-1">行内文字颜色 <a class="header-anchor" href="#行内文字颜色" aria-label="Permalink to &quot;行内文字颜色&quot;">​</a></h3><p>代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;span style=&quot;background-color: #ffaaaa&quot;&gt;如何在原生复制操作完自动触发快捷指令?&lt;/span&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;span style=&quot;background-color: #ffaaaa&quot;&gt;如何在原生复制操作完自动触发快捷指令?&lt;/span&gt;</span></span></code></pre></div><p>效果：</p><p><img src="`+o+`" alt="image-20230913153138387"></p><h2 id="技巧" tabindex="-1">技巧 <a class="header-anchor" href="#技巧" aria-label="Permalink to &quot;技巧&quot;">​</a></h2><h3 id="代码diff高亮效果" tabindex="-1">代码diff高亮效果 <a class="header-anchor" href="#代码diff高亮效果" aria-label="Permalink to &quot;代码diff高亮效果&quot;">​</a></h3><p>将代码块的格式设置为<code>diff</code>，可以看到漂亮的高亮效果</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// 数组去重 </span></span>
<span class="line"><span style="color:#E1E4E8;">const unique = (arr)=&amp;gt;{ </span></span>
<span class="line"><span style="color:#FDAEB7;">-	return Array.from(new Set(arr)) </span></span>
<span class="line"><span style="color:#85E89D;">+	return [...new Set(arr)] </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// 数组去重 </span></span>
<span class="line"><span style="color:#24292E;">const unique = (arr)=&amp;gt;{ </span></span>
<span class="line"><span style="color:#B31D28;">-	return Array.from(new Set(arr)) </span></span>
<span class="line"><span style="color:#22863A;">+	return [...new Set(arr)] </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="图片设置宽高" tabindex="-1">图片设置宽高 <a class="header-anchor" href="#图片设置宽高" aria-label="Permalink to &quot;图片设置宽高&quot;">​</a></h3><p>markdown就是转成html的，所以我们可以直接img标签，并设置宽高</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// 原始 markdown 语法 </span></span>
<span class="line"><span style="color:#E1E4E8;">![图片描述](https://xxxx.com/xxxx.jpg)  </span></span>
<span class="line"><span style="color:#E1E4E8;">// 转化成 html 后语法 </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://xxxx.com/xxxx.jpg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;图片描述&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 直接写 html 后语法 , 并且加上宽高</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://xxxx.com/xxxx.jpg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;图片描述&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;300&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// 原始 markdown 语法 </span></span>
<span class="line"><span style="color:#24292E;">![图片描述](https://xxxx.com/xxxx.jpg)  </span></span>
<span class="line"><span style="color:#24292E;">// 转化成 html 后语法 </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://xxxx.com/xxxx.jpg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;图片描述&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 直接写 html 后语法 , 并且加上宽高</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://xxxx.com/xxxx.jpg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;图片描述&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;300&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><h3 id="折叠效果" tabindex="-1">折叠效果 <a class="header-anchor" href="#折叠效果" aria-label="Permalink to &quot;折叠效果&quot;">​</a></h3><p>也是直接写html代码，示例：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">&gt;点击查看更多内容&lt;/</span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">你在乎吗&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">在乎吗&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">我在乎而且叭叭~&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">details</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">summary</span><span style="color:#24292E;">&gt;点击查看更多内容&lt;/</span><span style="color:#22863A;">summary</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">你在乎吗&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">在乎吗&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">我在乎而且叭叭~&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">details</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><details><summary>点击查看更多内容</summary> 你在乎吗<br> 在乎吗<br> 我在乎而且叭叭~<br></details><h3 id="插入视频" tabindex="-1">插入视频 <a class="header-anchor" href="#插入视频" aria-label="Permalink to &quot;插入视频&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">video</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;视频链接&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">video</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">iframe</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">498</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">510</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;视频链接&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">video</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;视频链接&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">video</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">498</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">510</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;视频链接&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>效果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;video src=&quot;https://www.bilibili.com/video/BV1BS4y1c7a7&quot;&gt;&lt;/video&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;video src=&quot;https://www.bilibili.com/video/BV1BS4y1c7a7&quot;&gt;&lt;/video&gt;</span></span></code></pre></div><p>或者这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;iframe height=498 width=510 src=&quot;https://www.bilibili.com/video/BV1BS4y1c7a7&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;iframe height=498 width=510 src=&quot;https://www.bilibili.com/video/BV1BS4y1c7a7&quot;&gt;</span></span></code></pre></div><p>⚠️ iframe中无法设置音频静音，此处为了不看查看的人受惊，不放置效果，感兴趣的自行实验。</p><h3 id="网易云音乐播放器" tabindex="-1">网易云音乐播放器 <a class="header-anchor" href="#网易云音乐播放器" aria-label="Permalink to &quot;网易云音乐播放器&quot;">​</a></h3><p>用法：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">iframe</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sandbox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">frameborder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;no&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">border</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">marginwidth</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">marginheight</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">330</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">86</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;//music.163.com/outchain/player?type=2&amp;id=33367876&amp;auto=1&amp;height=66&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">iframe</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sandbox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">frameborder</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;no&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">border</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">marginwidth</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">marginheight</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">330</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">86</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;//music.163.com/outchain/player?type=2&amp;id=33367876&amp;auto=1&amp;height=66&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>效果：</p><p>⚠️ iframe中无法设置音频静音，此处为了不看查看的人受惊，不放置效果，感兴趣的自行实验。</p><h3 id="音频播放器" tabindex="-1">音频播放器 <a class="header-anchor" href="#音频播放器" aria-label="Permalink to &quot;音频播放器&quot;">​</a></h3><p>用法：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">audio</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xxxx&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">audio</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">audio</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xxxx&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">audio</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>效果：</p><p><audio src="xxxx"></audio></p><h1 id="常用文档图标" tabindex="-1">常用文档图标 <a class="header-anchor" href="#常用文档图标" aria-label="Permalink to &quot;常用文档图标&quot;">​</a></h1><p>对：✅</p><p>错：❌</p><p>星星：⭐</p>`,174),r=[c];function i(d,h,y,E,u,g){return a(),n("div",null,r)}const k=s(t,[["render",i]]);export{m as __pageData,k as default};
