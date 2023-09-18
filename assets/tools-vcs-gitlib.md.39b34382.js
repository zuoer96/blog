import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.027d2da0.js";const l="/images/image-20230915152518079.png",o="/images/image-20220330185656149.png",t="/images/image-20220330190055331.png",p="/images/image-20220330190245525.png",c="/images/image-20220330190414632.png",r="/images/image-20220330190520029.png",i="/images/image-20220330191017591.png",d="/images/image-20220330191108053.png",g="/images/image-20220330191217596.png",u="/images/image-20220331095631493.png",h="/images/image-20230915201203483.png",y="/images/image-20230915201158446.png",m="/images/image-20220331101909397.png",b="/images/image-20220331102040784.png",k="/images/image-20220331102152555.png",f="/images/image-20220331110502901.png",v="/images/image-20220331110547966.png",q="/images/image-20220331103238010.png",w="/images/image-20220331103439498.png",C="/images/image-20230915222932289.png",E="/images/image-20220331105233768.png",x="/images/image-20220331105426234.png",_="/images/image-20220331100930872.png",J="/images/image-20220331101041179.png",A="/images/image-20220331111030043.png",P="/images/image-20220331111136163.png",D="/images/image-20220331111237738.png",F="/images/image-20220331111434906.png",G="/images/image-20220331111509830.png",T="/images/image-20220331113142371.png",j="/images/image-20230915201243176.png",M="/images/image-20220331113451880.png",S="/images/image-20220630153515666.png",W="/images/image-20230915223300122.png",L="/images/image-20220331114119927.png",I="/images/image-20220331114601764.png",H="/images/image-20220331135451583.png",R="/images/image-20220331135702575.png",z="/images/image-20220331140118192.png",B="/images/image-20220331140317855.png",O="/images/image-20220629184650228.png",U="/images/image-20220629184807625.png",N="/images/image-20220331140541055.png",Y="/images/image-20220331141315410.png",Q="/images/image-20220331141415260.png",Z="/images/image-20220629222236941.png",$="/images/image-20220401152706755.png",V="/images/image-20220629215723034.png",K="/images/image-20230915201521643.png",X="/images/image-20220401155552375.png",ss="/images/image-20220629223750020.png",as="/images/image-20220401162539052.png",es="/images/image-20220401163251478.png",ns="/images/image-20220406164110044.png",ls="/images/image-20220630142049089.png",os="/images/image-20220630142231658.png",bs=JSON.parse('{"title":"Gitlab","description":"","frontmatter":{"typora-root-url":"./..\\\\..\\\\..\\\\..\\\\public"},"headers":[],"relativePath":"tools-vcs-gitlib.md","filePath":"docs/06_工具/02_版本控制/01_GIT/05_GitLib.md"}'),ts={name:"tools-vcs-gitlib.md"},ps=n('<h1 id="gitlab" tabindex="-1">Gitlab <a class="header-anchor" href="#gitlab" aria-label="Permalink to &quot;Gitlab&quot;">​</a></h1><p><img src="'+l+`" alt="image-20230915152518079"></p><h2 id="gitlab是什么" tabindex="-1">GitLab是什么 <a class="header-anchor" href="#gitlab是什么" aria-label="Permalink to &quot;GitLab是什么&quot;">​</a></h2><p>​ <strong>GitLab 是一个用于仓库管理系统的开源项目</strong>，使用Git作为代码管理工具，并在此基础上搭建起来的Web服务，可通过Web界面进行访问公开的或者私人项目，它拥有与<strong>Github</strong>类似的功能，能够浏览源代码，管理缺陷和注释。</p><p>维基百科：<a href="https://zh.m.wikipedia.org/zh-hans/GitLab" target="_blank" rel="noreferrer">https://zh.m.wikipedia.org/zh-hans/GitLab</a></p><p>about.gitLab：<a href="https://about.gitlab.com/" target="_blank" rel="noreferrer">https://about.gitlab.com/</a></p><h2 id="安装gitlab" tabindex="-1">安装GitLab <a class="header-anchor" href="#安装gitlab" aria-label="Permalink to &quot;安装GitLab&quot;">​</a></h2><h3 id="搭建gitlab" tabindex="-1">搭建GitLab <a class="header-anchor" href="#搭建gitlab" aria-label="Permalink to &quot;搭建GitLab&quot;">​</a></h3><blockquote><p>该安装使用的是centos7来进行安装的</p></blockquote><p>参看：<a href="https://about.gitlab.com/install/#centos-7" target="_blank" rel="noreferrer">https://about.gitlab.com/install/#centos-7</a> 在线安装</p><p>离线安装：<a href="https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/" target="_blank" rel="noreferrer">https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/</a></p><h3 id="环境确认" tabindex="-1">环境确认 <a class="header-anchor" href="#环境确认" aria-label="Permalink to &quot;环境确认&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">uname -a</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /etc/system-release</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">uname -a</span></span>
<span class="line"><span style="color:#24292e;">cat /etc/system-release</span></span></code></pre></div><p><img src="`+o+`" alt="image-20220330185656149"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">（1）CentOS 6或者7    （此处使用7）</span></span>
<span class="line"><span style="color:#e1e4e8;">（2）2G内存（实验）生产（至少4G），不然会很卡</span></span>
<span class="line"><span style="color:#e1e4e8;">（3）安装包：gitlab-ce-13.7.3-ce.0.el7.x86_64.rpm （或者按照下面的步骤在线安装）</span></span>
<span class="line"><span style="color:#e1e4e8;">（4）禁用防火墙，关闭selinux</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">（1）CentOS 6或者7    （此处使用7）</span></span>
<span class="line"><span style="color:#24292e;">（2）2G内存（实验）生产（至少4G），不然会很卡</span></span>
<span class="line"><span style="color:#24292e;">（3）安装包：gitlab-ce-13.7.3-ce.0.el7.x86_64.rpm （或者按照下面的步骤在线安装）</span></span>
<span class="line"><span style="color:#24292e;">（4）禁用防火墙，关闭selinux</span></span></code></pre></div><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><blockquote><p>安装GitLab需要一些依赖环境</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sudo yum install -y curl policycoreutils-python openssh-server postfix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sudo yum install -y curl policycoreutils-python openssh-server postfix</span></span></code></pre></div><h3 id="在线安装-外网" tabindex="-1">在线安装(外网) <a class="header-anchor" href="#在线安装-外网" aria-label="Permalink to &quot;在线安装(外网)&quot;">​</a></h3><blockquote><p>使用外网方式进行安装，需要到外网现在仓库，有一些镜像是在国内速度稍慢可能需要重试几次</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash</span></span></code></pre></div><p><img src="`+t+'" alt="image-20220330190055331"></p><blockquote><p>如果出现<code>The repository is setup! You can now install packages.</code>表示仓库已经安装成功</p></blockquote><p><img src="'+p+'" alt="image-20220330190245525"></p><blockquote><p>仓库下载成功后就可以通过yum进行安装了</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sudo yum install -y gitlab-ce</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sudo yum install -y gitlab-ce</span></span></code></pre></div><p><img src="'+c+'" alt="image-20220330190414632"></p><blockquote><p>因为网络原因可能会切换到不同的镜像进行多次尝试，如果出现如下界面表示已经安装成功</p></blockquote><p><img src="'+r+`" alt="image-20220330190520029"></p><h3 id="初始化配置" tabindex="-1">初始化配置 <a class="header-anchor" href="#初始化配置" aria-label="Permalink to &quot;初始化配置&quot;">​</a></h3><h4 id="配置目录介绍" tabindex="-1">配置目录介绍 <a class="header-anchor" href="#配置目录介绍" aria-label="Permalink to &quot;配置目录介绍&quot;">​</a></h4><blockquote><p>GitLab默认的配置文件路径：<code>/etc/gitlab/</code></p></blockquote><ul><li>/etc/gitlab/gitlab.rb：主配置文件，包含外部URL、仓库目录、备份目录等</li><li>/etc/gitlab/gitlab-secrets.json：（执行gitlab-ctl reconfigure命令行后生成），包含各类密钥的加密信息</li></ul><h4 id="初始化配置-1" tabindex="-1">初始化配置 <a class="header-anchor" href="#初始化配置-1" aria-label="Permalink to &quot;初始化配置&quot;">​</a></h4><blockquote><p>配置首页地址（需将设置的域名DNS解析到服务器IP，或者修改本地host将域名指向服务器IP）</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看external_url参数配置</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /etc/gitlab/gitlab.rb |grep -v &quot;#&quot; |grep -Ev &quot;^$&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">external_url &#39;http://gitlab.example.com&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 编辑将该gitlab.rb的该配置改为宿主机地址</span></span>
<span class="line"><span style="color:#e1e4e8;">vi /etc/gitlab/gitlab.rb</span></span>
<span class="line"><span style="color:#e1e4e8;"># 需要修改成自己的ip</span></span>
<span class="line"><span style="color:#e1e4e8;">external_url &#39;http://192.168.200.200:8888&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看external_url参数配置</span></span>
<span class="line"><span style="color:#24292e;">cat /etc/gitlab/gitlab.rb |grep -v &quot;#&quot; |grep -Ev &quot;^$&quot;</span></span>
<span class="line"><span style="color:#24292e;">external_url &#39;http://gitlab.example.com&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 编辑将该gitlab.rb的该配置改为宿主机地址</span></span>
<span class="line"><span style="color:#24292e;">vi /etc/gitlab/gitlab.rb</span></span>
<span class="line"><span style="color:#24292e;"># 需要修改成自己的ip</span></span>
<span class="line"><span style="color:#24292e;">external_url &#39;http://192.168.200.200:8888&#39;</span></span></code></pre></div><blockquote><p>tips：不改配置，需要通过 <a href="http://gitlab.example.com" target="_blank" rel="noreferrer">http://gitlab.example.com</a> 访问，为了快速学习，改成支持IP访问，生产建议域名访问</p></blockquote><h4 id="重新应用配置文件" tabindex="-1">重新应用配置文件 <a class="header-anchor" href="#重新应用配置文件" aria-label="Permalink to &quot;重新应用配置文件&quot;">​</a></h4><blockquote><p>在这一阶段花费时间会比较长</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">gitlab-ctl reconfigure</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">gitlab-ctl reconfigure</span></span></code></pre></div><p><img src="`+i+'" alt="image-20220330191017591"></p><blockquote><p>如果出现以下界面说明已经配置成功</p></blockquote><p><img src="'+d+'" alt="image-20220330191108053"></p><h4 id="查看gitlab运行状态" tabindex="-1">查看Gitlab运行状态 <a class="header-anchor" href="#查看gitlab运行状态" aria-label="Permalink to &quot;查看Gitlab运行状态&quot;">​</a></h4><blockquote><p>可以通过以下命令查看Gitlab的运行状态</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">gitlab-ctl status</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">gitlab-ctl status</span></span></code></pre></div><p><img src="'+g+'" alt="image-20220330191217596"></p><h3 id="登录测试" tabindex="-1">登录测试 <a class="header-anchor" href="#登录测试" aria-label="Permalink to &quot;登录测试&quot;">​</a></h3><blockquote><p>通过：<a href="http://192.168.200.200:8888/" target="_blank" rel="noreferrer">http://192.168.200.200:8888/</a> 地址访问Gitlab服务，查看服务是否正常启动，注意这个地址就是上面配置的<code>external_url</code></p></blockquote><p><img src="'+u+`" alt="image-20220331095631493"></p><h2 id="安装gitlab-docker" tabindex="-1">安装Gitlab(docker) <a class="header-anchor" href="#安装gitlab-docker" aria-label="Permalink to &quot;安装Gitlab(docker)&quot;">​</a></h2><p>我们使用 Docker 来安装和运行 GitLab 中文版，由于新版本问题较多，这里我们使用目前相对稳定的 10.5 版本，<code>docker-compose.yml</code> 配置如下：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#85E89D;">web</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;twang2218/gitlab-ce-zh:10.5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#85E89D;">hostname</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;192.168.75.145&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#85E89D;">TZ</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#85E89D;">GITLAB_OMNIBUS_CONFIG</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">         external_url &#39;http://192.168.75.145:8080&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">         gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222</span></span>
<span class="line"><span style="color:#9ECBFF;">         unicorn[&#39;port&#39;] = 8888</span></span>
<span class="line"><span style="color:#9ECBFF;">         nginx[&#39;listen_port&#39;] = 8080</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">       - </span><span style="color:#9ECBFF;">&#39;8080:8080&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">       - </span><span style="color:#9ECBFF;">&#39;8443:443&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">       - </span><span style="color:#9ECBFF;">&#39;2222:22&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">       - </span><span style="color:#9ECBFF;">/usr/local/docker/gitlab/config:/etc/gitlab</span></span>
<span class="line"><span style="color:#E1E4E8;">       - </span><span style="color:#9ECBFF;">/usr/local/docker/gitlab/data:/var/opt/gitlab</span></span>
<span class="line"><span style="color:#E1E4E8;">       - </span><span style="color:#9ECBFF;">/usr/local/docker/gitlab/logs:/var/log/gitlab</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#22863A;">web</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;twang2218/gitlab-ce-zh:10.5&#39;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#22863A;">hostname</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;192.168.75.145&#39;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#22863A;">TZ</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#22863A;">GITLAB_OMNIBUS_CONFIG</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">         external_url &#39;http://192.168.75.145:8080&#39;</span></span>
<span class="line"><span style="color:#032F62;">         gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222</span></span>
<span class="line"><span style="color:#032F62;">         unicorn[&#39;port&#39;] = 8888</span></span>
<span class="line"><span style="color:#032F62;">         nginx[&#39;listen_port&#39;] = 8080</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">       - </span><span style="color:#032F62;">&#39;8080:8080&#39;</span></span>
<span class="line"><span style="color:#24292E;">       - </span><span style="color:#032F62;">&#39;8443:443&#39;</span></span>
<span class="line"><span style="color:#24292E;">       - </span><span style="color:#032F62;">&#39;2222:22&#39;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">       - </span><span style="color:#032F62;">/usr/local/docker/gitlab/config:/etc/gitlab</span></span>
<span class="line"><span style="color:#24292E;">       - </span><span style="color:#032F62;">/usr/local/docker/gitlab/data:/var/opt/gitlab</span></span>
<span class="line"><span style="color:#24292E;">       - </span><span style="color:#032F62;">/usr/local/docker/gitlab/logs:/var/log/gitlab</span></span></code></pre></div><p>安装完成后的工作</p><ul><li>访问地址：<a href="http://ip:8080" target="_blank" rel="noreferrer">http://ip:8080</a></li><li>端口 8080 是因为我在配置中设置的外部访问地址为 8080，默认是 80</li><li>初始化安装完成后效果如下：</li></ul><p><img src="`+h+'" alt="image-20230915201203483"></p><ul><li>设置管理员初始密码，这里的密码最好是 字母 + 数字 组合，并且 大于等于 8 位</li><li>配置完成后登录，管理员账号是 root</li></ul><p><img src="'+y+'" alt="image-20230915201158446"></p><p><strong>注意：</strong> 如果服务器配置较低，启动运行可能需要较长时间，请耐心等待</p><h2 id="gitlab配置" tabindex="-1">Gitlab配置 <a class="header-anchor" href="#gitlab配置" aria-label="Permalink to &quot;Gitlab配置&quot;">​</a></h2><blockquote><p>安装完成Gitlab后就需要对Gitlab进行一系列的配置</p></blockquote><h3 id="修改管理员密码" tabindex="-1">修改管理员密码 <a class="header-anchor" href="#修改管理员密码" aria-label="Permalink to &quot;修改管理员密码&quot;">​</a></h3><blockquote><p>gitlab默认的管理员账号是：root</p></blockquote><h4 id="查看root密码" tabindex="-1">查看root密码 <a class="header-anchor" href="#查看root密码" aria-label="Permalink to &quot;查看root密码&quot;">​</a></h4><blockquote><p>gitlab-ce初装以后，把密码放在了一个临时文件中了，文件路径是<code>/etc/gitlab/initial_root_password</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cat /etc/gitlab/initial_root_password</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cat /etc/gitlab/initial_root_password</span></span></code></pre></div><p><img src="'+m+'" alt="image-20220331101909397"></p><blockquote><p>其中红框中的就是密码，注意：<strong>这个文件将在首次执行reconfigure后24小时自动删除</strong></p></blockquote><h4 id="登录后并修改密码" tabindex="-1">登录后并修改密码 <a class="header-anchor" href="#登录后并修改密码" aria-label="Permalink to &quot;登录后并修改密码&quot;">​</a></h4><blockquote><p>拿到这个密码后需要尽快登录web界面进行密码修改</p></blockquote><p><img src="'+b+'" alt="image-20220331102040784"></p><blockquote><p>将文件中的密码复制到密码框后进行登录</p></blockquote><p><img src="'+k+'" alt="image-20220331102152555"></p><blockquote><p>登录完成后就需要进行密码修改了，选择用户下的<code>Edit profile</code>进行属性设置</p></blockquote><p><img src="'+f+'" alt="image-20220331110502901"></p><blockquote><p>在弹出的页面选择<code>password</code>,在下面页面进行密码设置</p></blockquote><p><img src="'+v+'" alt="image-20220331110547966"></p><h3 id="偏好设置" tabindex="-1">偏好设置 <a class="header-anchor" href="#偏好设置" aria-label="Permalink to &quot;偏好设置&quot;">​</a></h3><blockquote><p>gitlab是我们国内非常好用的git工具，有很多偏好设置可以进行设置</p></blockquote><h4 id="操作步骤" tabindex="-1">操作步骤 <a class="header-anchor" href="#操作步骤" aria-label="Permalink to &quot;操作步骤&quot;">​</a></h4><blockquote><p>选择用户下的<code>Preferences</code>进入偏好设置</p></blockquote><p><img src="'+q+'" alt="image-20220331103238010"></p><h4 id="导航栏主题" tabindex="-1">导航栏主题 <a class="header-anchor" href="#导航栏主题" aria-label="Permalink to &quot;导航栏主题&quot;">​</a></h4><blockquote><p>者第一个<code>Navigation theme</code>选项可以选择对应的导航栏主题</p></blockquote><p><img src="'+w+'" alt="image-20220331103439498"></p><h4 id="代码主题设置" tabindex="-1">代码主题设置 <a class="header-anchor" href="#代码主题设置" aria-label="Permalink to &quot;代码主题设置&quot;">​</a></h4><blockquote><p>在Idea中可能习惯了一些代码的主题设置，而在gitlab中也可以设置代码预览的主题，这里可以进行设置</p></blockquote><p><img src="'+C+'" alt="image-20230915222932289"></p><h4 id="设置中文" tabindex="-1">设置中文 <a class="header-anchor" href="#设置中文" aria-label="Permalink to &quot;设置中文&quot;">​</a></h4><blockquote><p>Gitlab默认是英文的，很多小伙伴看起来比较麻烦，我们可以设置为简体中文模式</p></blockquote><p><img src="'+E+'" alt="image-20220331105233768"></p><blockquote><p>这里简体中文的翻译度达到了95%，基本上够日常使用了，注意<strong>需要重新登陆后才会生效</strong></p></blockquote><p><img src="'+x+'" alt="image-20220331105426234"></p><h3 id="添加账号" tabindex="-1">添加账号 <a class="header-anchor" href="#添加账号" aria-label="Permalink to &quot;添加账号&quot;">​</a></h3><blockquote><p>在Gitlab添加账号是需要管理员进行审核的</p></blockquote><h4 id="注册账号" tabindex="-1">注册账号 <a class="header-anchor" href="#注册账号" aria-label="Permalink to &quot;注册账号&quot;">​</a></h4><blockquote><p>可以点击<code>Register now</code>进行账号注册</p></blockquote><p><img src="'+_+'" alt="image-20220331100930872"></p><blockquote><p>点击后进入有账号注册页面，可以填写用户名密码进行账号的注册</p></blockquote><p><img src="'+J+'" alt="image-20220331101041179"></p><p>这里：需要注册两个账号：zs ， ls</p><h4 id="审核账号" tabindex="-1">审核账号 <a class="header-anchor" href="#审核账号" aria-label="Permalink to &quot;审核账号&quot;">​</a></h4><blockquote><p>新注册的账号是不可以直接进行登录的，需要管理员进行审核，通过<code>菜单-管理员</code>来进行设置</p></blockquote><p><img src="'+A+'" alt="image-20220331111030043"></p><blockquote><p>在新打开的页面选择用户，在打开的页面选择批准相关注册的账号</p></blockquote><p><img src="'+P+'" alt="image-20220331111136163"></p><blockquote><p>对于需要进行注册的账号选择批准即可</p></blockquote><p><img src="'+D+'" alt="image-20220331111237738"></p><p>审核通过的账号可以进行登录</p><h4 id="新增账号" tabindex="-1">新增账号 <a class="header-anchor" href="#新增账号" aria-label="Permalink to &quot;新增账号&quot;">​</a></h4><blockquote><p>除了可以进行手动注册，管理员还可以进行批量新增用户，在管理员的用户管理，管理员可以进行手动新增</p></blockquote><p><img src="'+F+'" alt="image-20220331111434906"></p><blockquote><p>点击新增用户后就可以进行手动新增了</p></blockquote><p><img src="'+G+`" alt="image-20220331111509830"></p><h2 id="连接gitlab" tabindex="-1">连接Gitlab <a class="header-anchor" href="#连接gitlab" aria-label="Permalink to &quot;连接Gitlab&quot;">​</a></h2><blockquote><p>一般情况下我们连接Gitlab都是使用的<code>ssh key</code>进行连接的，下面我们看下如何进行配置</p></blockquote><h5 id="配置用户信息" tabindex="-1">配置用户信息 <a class="header-anchor" href="#配置用户信息" aria-label="Permalink to &quot;配置用户信息&quot;">​</a></h5><blockquote><p>参考上文的配置Git</p></blockquote><h5 id="查看配置的用户信息" tabindex="-1">查看配置的用户信息 <a class="header-anchor" href="#查看配置的用户信息" aria-label="Permalink to &quot;查看配置的用户信息&quot;">​</a></h5><blockquote><p>可以通过一下命令查看配置的用户信息</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git config user.name</span></span>
<span class="line"><span style="color:#e1e4e8;">git config user.email</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git config user.name</span></span>
<span class="line"><span style="color:#24292e;">git config user.email</span></span></code></pre></div><p><img src="`+T+`" alt="image-20220331113142371"></p><h5 id="生成ssh-key" tabindex="-1">生成SSH key <a class="header-anchor" href="#生成ssh-key" aria-label="Permalink to &quot;生成SSH key&quot;">​</a></h5><blockquote><p>通过以下命令可以生成相应的<code>ssh key</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 注意这里的xxx@qq.com要替换为git配置的邮箱名称</span></span>
<span class="line"><span style="color:#e1e4e8;">ssh-keygen -t rsa -C &quot;zx@itcast.cn&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 注意这里的xxx@qq.com要替换为git配置的邮箱名称</span></span>
<span class="line"><span style="color:#24292e;">ssh-keygen -t rsa -C &quot;zx@itcast.cn&quot;</span></span></code></pre></div><blockquote><p>tips：在201机器上演示zs</p></blockquote><p>具体生成过程如下</p><p><img src="`+j+'" alt="image-20230915201243176"></p><h5 id="获取ssh-key" tabindex="-1">获取SSH key <a class="header-anchor" href="#获取ssh-key" aria-label="Permalink to &quot;获取SSH key&quot;">​</a></h5><blockquote><p>通过如下命令可以获取对应的<code>ssh key</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cat ~/.ssh/id_rsa.pub</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cat ~/.ssh/id_rsa.pub</span></span></code></pre></div><p><img src="'+M+'" alt="image-20220331113451880"></p><h6 id="gitlab的sshkey配置" tabindex="-1">Gitlab的sshkey配置 <a class="header-anchor" href="#gitlab的sshkey配置" aria-label="Permalink to &quot;Gitlab的sshkey配置&quot;">​</a></h6><blockquote><p>1，可以通过编辑用户资料来配置来进行配置<code>ssh key</code></p><p>2，每个用户需要自己单独配置一下个性化，比如中文</p></blockquote><p><img src="'+S+'" alt="image-20220630153515666"></p><blockquote><p>接下来打开ssh key配置页面将我们配置的<code>ssh key</code>配置到我们的gitlab中</p></blockquote><p><img src="'+W+'" alt="image-20230915223300122"></p><blockquote><p>点击完成就可以完成配置了</p></blockquote><p><img src="'+L+`" alt="image-20220331114119927"></p><h5 id="验证测试" tabindex="-1">验证测试 <a class="header-anchor" href="#验证测试" aria-label="Permalink to &quot;验证测试&quot;">​</a></h5><blockquote><p>我们配置完成后还需要进行验证测试</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># ssh -T git@192.168.200.200</span></span>
<span class="line"><span style="color:#e1e4e8;">The authenticity of host &#39;192.168.200.200 (192.168.200.200)&#39; can&#39;t be established.</span></span>
<span class="line"><span style="color:#e1e4e8;">ECDSA key fingerprint is SHA256:4Ze/q+QQ5942NjyhwQiGLZCceB9mcbC759CiyjWzHYU.</span></span>
<span class="line"><span style="color:#e1e4e8;">ECDSA key fingerprint is MD5:61:8b:1a:f7:db:19:a8:17:bb:70:e8:f7:62:f3:a1:2d.</span></span>
<span class="line"><span style="color:#e1e4e8;">Are you sure you want to continue connecting (yes/no)? yes</span></span>
<span class="line"><span style="color:#e1e4e8;">Warning: Permanently added &#39;192.168.200.200&#39; (ECDSA) to the list of known hosts.</span></span>
<span class="line"><span style="color:#e1e4e8;">Welcome to GitLab, @zs!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># ssh -T git@192.168.200.200</span></span>
<span class="line"><span style="color:#24292e;">The authenticity of host &#39;192.168.200.200 (192.168.200.200)&#39; can&#39;t be established.</span></span>
<span class="line"><span style="color:#24292e;">ECDSA key fingerprint is SHA256:4Ze/q+QQ5942NjyhwQiGLZCceB9mcbC759CiyjWzHYU.</span></span>
<span class="line"><span style="color:#24292e;">ECDSA key fingerprint is MD5:61:8b:1a:f7:db:19:a8:17:bb:70:e8:f7:62:f3:a1:2d.</span></span>
<span class="line"><span style="color:#24292e;">Are you sure you want to continue connecting (yes/no)? yes</span></span>
<span class="line"><span style="color:#24292e;">Warning: Permanently added &#39;192.168.200.200&#39; (ECDSA) to the list of known hosts.</span></span>
<span class="line"><span style="color:#24292e;">Welcome to GitLab, @zs!</span></span></code></pre></div><blockquote><p>出现如下界面就表示我们配置成功了</p></blockquote><p><img src="`+I+`" alt="image-20220331114601764"></p><h2 id="使用流程" tabindex="-1">使用流程 <a class="header-anchor" href="#使用流程" aria-label="Permalink to &quot;使用流程&quot;">​</a></h2><h3 id="最小配置" tabindex="-1">最小配置 <a class="header-anchor" href="#最小配置" aria-label="Permalink to &quot;最小配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git config --global user.name &#39;tans&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --global user.email &#39;tans@itcast.cn&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git config --global user.name &#39;tans&#39;</span></span>
<span class="line"><span style="color:#24292e;">git config --global user.email &#39;tans@itcast.cn&#39;</span></span>
<span class="line"><span style="color:#24292e;">git config --list</span></span></code></pre></div><p>config作用域</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git config --local #针对当前仓库有效 缺省值</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --global # 对当前用户所有仓库有效</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --system #对系统所有登录的用户有效</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git config --local #针对当前仓库有效 缺省值</span></span>
<span class="line"><span style="color:#24292e;">git config --global # 对当前用户所有仓库有效</span></span>
<span class="line"><span style="color:#24292e;">git config --system #对系统所有登录的用户有效</span></span></code></pre></div><p>展示 : --list</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git config --local --list</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --global --list </span></span>
<span class="line"><span style="color:#e1e4e8;">git config --system --list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git config --local --list</span></span>
<span class="line"><span style="color:#24292e;">git config --global --list </span></span>
<span class="line"><span style="color:#24292e;">git config --system --list</span></span></code></pre></div><h3 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h3><p>在201节点上操作，模拟不同用户在不同机器上的行为</p><p>1，已有项目纳入git管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# mkdir -p /root/git/demo</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git init</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# ll -a</span></span>
<span class="line"><span style="color:#e1e4e8;">total 0</span></span>
<span class="line"><span style="color:#e1e4e8;">drwxr-xr-x. 3 root root  18 Jun 28 23:23 .</span></span>
<span class="line"><span style="color:#e1e4e8;">drwxr-xr-x. 3 root root  19 Jun 28 23:04 ..</span></span>
<span class="line"><span style="color:#e1e4e8;">drwxr-xr-x. 7 root root 119 Jun 28 23:23 .git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller demo]# mkdir -p /root/git/demo</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git init</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller demo]# ll -a</span></span>
<span class="line"><span style="color:#24292e;">total 0</span></span>
<span class="line"><span style="color:#24292e;">drwxr-xr-x. 3 root root  18 Jun 28 23:23 .</span></span>
<span class="line"><span style="color:#24292e;">drwxr-xr-x. 3 root root  19 Jun 28 23:04 ..</span></span>
<span class="line"><span style="color:#24292e;">drwxr-xr-x. 7 root root 119 Jun 28 23:23 .git</span></span></code></pre></div><p>创建一个新项目并纳入git管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git init your_project</span></span>
<span class="line"><span style="color:#e1e4e8;">cd your_project</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git init your_project</span></span>
<span class="line"><span style="color:#24292e;">cd your_project</span></span></code></pre></div><p>2，创建local 用户</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git config --local user.name &#39;zs&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git config --local user.email &#39;zs@itcast.cn&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git config --local --list</span></span>
<span class="line"><span style="color:#e1e4e8;">core.repositoryformatversion=0</span></span>
<span class="line"><span style="color:#e1e4e8;">core.filemode=true</span></span>
<span class="line"><span style="color:#e1e4e8;">core.bare=false</span></span>
<span class="line"><span style="color:#e1e4e8;">core.logallrefupdates=true</span></span>
<span class="line"><span style="color:#e1e4e8;">user.name=ts</span></span>
<span class="line"><span style="color:#e1e4e8;">user.email=ts@itcast.cn</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git config --local user.name &#39;zs&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git config --local user.email &#39;zs@itcast.cn&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git config --local --list</span></span>
<span class="line"><span style="color:#24292e;">core.repositoryformatversion=0</span></span>
<span class="line"><span style="color:#24292e;">core.filemode=true</span></span>
<span class="line"><span style="color:#24292e;">core.bare=false</span></span>
<span class="line"><span style="color:#24292e;">core.logallrefupdates=true</span></span>
<span class="line"><span style="color:#24292e;">user.name=ts</span></span>
<span class="line"><span style="color:#24292e;">user.email=ts@itcast.cn</span></span></code></pre></div><p>3，创建readme</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# touch readme</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller demo]# touch readme</span></span></code></pre></div><p>4，提交</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git commit -m &#39;add reademe&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"># On branch master</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># Initial commit</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># Untracked files:</span></span>
<span class="line"><span style="color:#e1e4e8;">#   (use &quot;git add &lt;file&gt;...&quot; to include in what will be committed)</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">#       readme</span></span>
<span class="line"><span style="color:#e1e4e8;">nothing added to commit but untracked files present (use &quot;git add&quot; to track)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git commit -m &#39;add reademe&#39;</span></span>
<span class="line"><span style="color:#24292e;"># On branch master</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># Initial commit</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># Untracked files:</span></span>
<span class="line"><span style="color:#24292e;">#   (use &quot;git add &lt;file&gt;...&quot; to include in what will be committed)</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">#       readme</span></span>
<span class="line"><span style="color:#24292e;">nothing added to commit but untracked files present (use &quot;git add&quot; to track)</span></span></code></pre></div><p>5，添加到暂存区查看状态</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git add readme</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git status</span></span>
<span class="line"><span style="color:#e1e4e8;"># On branch master</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># Initial commit</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#e1e4e8;">#   (use &quot;git rm --cached &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">#       new file:   readme</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git add readme</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git status</span></span>
<span class="line"><span style="color:#24292e;"># On branch master</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># Initial commit</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#24292e;">#   (use &quot;git rm --cached &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">#       new file:   readme</span></span>
<span class="line"><span style="color:#24292e;">#</span></span></code></pre></div><p>6，提交</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git commit -m &#39;add reademe&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[master (root-commit) 0b75d17] add reademe</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1 file changed, 0 insertions(+), 0 deletions(-)</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 readme</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git commit -m &#39;add reademe&#39;</span></span>
<span class="line"><span style="color:#24292e;">[master (root-commit) 0b75d17] add reademe</span></span>
<span class="line"><span style="color:#24292e;"> 1 file changed, 0 insertions(+), 0 deletions(-)</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 readme</span></span></code></pre></div><p>7，查看日志</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller demo]# git log</span></span>
<span class="line"><span style="color:#e1e4e8;">commit 0b75d17d3692f96909f1b58605000dbde8c19e82</span></span>
<span class="line"><span style="color:#e1e4e8;">Author: zs &lt;zs@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">Date:   Tue Jun 28 23:28:31 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    add reademe</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller demo]# git log</span></span>
<span class="line"><span style="color:#24292e;">commit 0b75d17d3692f96909f1b58605000dbde8c19e82</span></span>
<span class="line"><span style="color:#24292e;">Author: zs &lt;zs@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">Date:   Tue Jun 28 23:28:31 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    add reademe</span></span></code></pre></div><p>结论：优先使用local级别的配置</p><h3 id="远程仓库创建项目" tabindex="-1">远程仓库创建项目 <a class="header-anchor" href="#远程仓库创建项目" aria-label="Permalink to &quot;远程仓库创建项目&quot;">​</a></h3><blockquote><p>一般我们不会在本地使用git创建项目，而是直接在远程仓库(gitlab,github)创建项目然后克隆到本地进行开发的</p></blockquote><h3 id="gitlab新建项目" tabindex="-1">GitLab新建项目 <a class="header-anchor" href="#gitlab新建项目" aria-label="Permalink to &quot;GitLab新建项目&quot;">​</a></h3><blockquote><p>我们可以通过选择<code>项目</code>--&gt;<code>新建项目</code>来创建一个新的项目</p></blockquote><p><img src="`+H+'" alt="image-20220331135451583"></p><blockquote><p>在这里选择一个空的项目</p></blockquote><p><img src="'+R+'" alt="image-20220331135702575"></p><h3 id="配置项目" tabindex="-1">配置项目 <a class="header-anchor" href="#配置项目" aria-label="Permalink to &quot;配置项目&quot;">​</a></h3><blockquote><p>我们还需要对项目做一些配置，比如项目名称等</p></blockquote><p><img src="'+z+'" alt="image-20220331140118192"></p><blockquote><p>然后点击<code>新建项目</code>就可以创建项目了</p></blockquote><p><img src="'+B+'" alt="image-20220331140317855"></p><h4 id="添加项目成员" tabindex="-1">添加项目成员 <a class="header-anchor" href="#添加项目成员" aria-label="Permalink to &quot;添加项目成员&quot;">​</a></h4><p><img src="'+O+'" alt="image-20220629184650228"></p><p>直接邀请成员，把 zs ，ls 添加进去</p><p><img src="'+U+'" alt="image-20220629184807625"></p><h4 id="找到项目地址" tabindex="-1">找到项目地址 <a class="header-anchor" href="#找到项目地址" aria-label="Permalink to &quot;找到项目地址&quot;">​</a></h4><blockquote><p>我们可以点击克隆复制项目的克隆地址</p></blockquote><p><img src="'+N+'" alt="image-20220331140541055"></p><h3 id="下载项目到本地" tabindex="-1">下载项目到本地 <a class="header-anchor" href="#下载项目到本地" aria-label="Permalink to &quot;下载项目到本地&quot;">​</a></h3><blockquote><p>一般开发需要将项目先克隆到本地然后进行修改等操作，通过如下命令就可以将项目克隆到本地</p></blockquote><h4 id="idea直接下载新项目" tabindex="-1">idea直接下载新项目 <a class="header-anchor" href="#idea直接下载新项目" aria-label="Permalink to &quot;idea直接下载新项目&quot;">​</a></h4><blockquote><p>Idea是可以直接拉取项目的，比较简单，通过新建项目就可以完成，选择通过版本控制新建项目</p></blockquote><p><img src="'+Y+'" alt="image-20220331141315410"></p><blockquote><p>然后输入刚刚复制的git地址即可</p></blockquote><p><img src="'+Q+`" alt="image-20220331141415260"></p><h4 id="git-clone-新项目" tabindex="-1">git clone 新项目 <a class="header-anchor" href="#git-clone-新项目" aria-label="Permalink to &quot;git clone 新项目&quot;">​</a></h4><p>在200节点上用ls用户进行操作，模拟不同用户在不同机器上的行为。</p><blockquote><p>有时候我们还是需要通过命令进行clone的</p></blockquote><p>​ 我们一般需要创建一个项目相关的文件夹将项目克隆到本地，windows我们可以在对应的文件夹中通过<code>右键</code>-<code>git bash here</code>来打开<code>git bash</code>进行操作，然后执行如下命令</p><p>首先ls用户需要生产ssh key</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git]# ssh-keygen -t rsa -C &quot;ls@itcast.cn&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git]# cat ~/.ssh/id_rsa.pub</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git]# ssh-keygen -t rsa -C &quot;ls@itcast.cn&quot;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git]# cat ~/.ssh/id_rsa.pub</span></span></code></pre></div><p>然后ls用户登录，添加SSH key，</p><p><img src="`+Z+`" alt="image-20220629222236941"></p><p>接下来执行如下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# cd /root/git</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git clone git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# cd git-test/</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git config --local user.name &#39;ls&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git config --local user.email &#39;ls@itcast.cn&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git config --list --local</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 demo]# cd /root/git</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git clone git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# cd git-test/</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git config --local user.name &#39;ls&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git config --local user.email &#39;ls@itcast.cn&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git config --list --local</span></span></code></pre></div><h4 id="和本地仓库关联" tabindex="-1">和本地仓库关联 <a class="header-anchor" href="#和本地仓库关联" aria-label="Permalink to &quot;和本地仓库关联&quot;">​</a></h4><p>用201节点上自己初始化的项目去关联远程项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# cd /root/git/demo/</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git remote add origin git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git remote -v</span></span>
<span class="line"><span style="color:#e1e4e8;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (fetch)</span></span>
<span class="line"><span style="color:#e1e4e8;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (push)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 demo]# cd /root/git/demo/</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git remote add origin git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git remote -v</span></span>
<span class="line"><span style="color:#24292e;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (fetch)</span></span>
<span class="line"><span style="color:#24292e;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (push)</span></span></code></pre></div><h2 id="常规操作" tabindex="-1">常规操作 <a class="header-anchor" href="#常规操作" aria-label="Permalink to &quot;常规操作&quot;">​</a></h2><blockquote><p>接下来就是Git的一些常规操作</p></blockquote><p>在200节点上使用ls账号操作</p><h3 id="本地文件修改" tabindex="-1">本地文件修改 <a class="header-anchor" href="#本地文件修改" aria-label="Permalink to &quot;本地文件修改&quot;">​</a></h3><p>在clone下来的项目中修改。</p><blockquote><p>克隆下来项目后，我们就可以对项目进行修改，这里我们简单创建几个文件</p></blockquote><p><img src="`+$+`" alt="image-20220401152706755"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 ~]# cd /root/git/git-test</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# echo &quot;hello world&quot; &gt; a</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# echo &quot;king of juan&quot; &gt; b</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 16</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 29 09:33 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 09:33 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 29 06:48 README.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 ~]# cd /root/git/git-test</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# echo &quot;hello world&quot; &gt; a</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# echo &quot;king of juan&quot; &gt; b</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 16</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 29 09:33 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 09:33 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 29 06:48 README.md</span></span></code></pre></div><h3 id="添加修改文件" tabindex="-1">添加修改文件 <a class="header-anchor" href="#添加修改文件" aria-label="Permalink to &quot;添加修改文件&quot;">​</a></h3><blockquote><p>我们接下来就需要将修改的文件添加到暂存区</p></blockquote><h4 id="添加命令" tabindex="-1">添加命令 <a class="header-anchor" href="#添加命令" aria-label="Permalink to &quot;添加命令&quot;">​</a></h4><blockquote><p>add有多种形式，可以add某个文件，某个文件夹，或直接add当前仓库下所有文件</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git add 单个文件</span></span>
<span class="line"><span style="color:#e1e4e8;">git add 文件夹1/ 文件夹2/ ……多个文件夹之间空格隔开</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git add 单个文件</span></span>
<span class="line"><span style="color:#24292e;">git add 文件夹1/ 文件夹2/ ……多个文件夹之间空格隔开</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span></code></pre></div><h4 id="执行添加并查看状态" tabindex="-1">执行添加并查看状态 <a class="header-anchor" href="#执行添加并查看状态" aria-label="Permalink to &quot;执行添加并查看状态&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# git add a b</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# git status</span></span>
<span class="line"><span style="color:#e1e4e8;"># On branch main</span></span>
<span class="line"><span style="color:#e1e4e8;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#e1e4e8;">#   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">#       new file:   a</span></span>
<span class="line"><span style="color:#e1e4e8;">#       new file:   b</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# git add a b</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# git status</span></span>
<span class="line"><span style="color:#24292e;"># On branch main</span></span>
<span class="line"><span style="color:#24292e;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#24292e;">#   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">#       new file:   a</span></span>
<span class="line"><span style="color:#24292e;">#       new file:   b</span></span>
<span class="line"><span style="color:#24292e;">#</span></span></code></pre></div><h3 id="拉取远程仓库" tabindex="-1">拉取远程仓库 <a class="header-anchor" href="#拉取远程仓库" aria-label="Permalink to &quot;拉取远程仓库&quot;">​</a></h3><blockquote><p>在每次提交之前需要先拉取远程仓库的内容，防止冲突</p></blockquote><h4 id="拉取命令" tabindex="-1">拉取命令 <a class="header-anchor" href="#拉取命令" aria-label="Permalink to &quot;拉取命令&quot;">​</a></h4><blockquote><p><strong>git fetch</strong> 命令用于从远程获取版本库。该命令执行完后需要执行 <strong>git merge</strong> 远程分支到你当前所在的分支。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git fetch [alias]</span></span>
<span class="line"><span style="color:#e1e4e8;">git merge [alias]/[branch]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git fetch [alias]</span></span>
<span class="line"><span style="color:#24292e;">git merge [alias]/[branch]</span></span></code></pre></div><blockquote><p>tips：示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# git fetch origin</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# git branch -v</span></span>
<span class="line"><span style="color:#e1e4e8;">* main 9f2a4f7 Initial commit</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# git merge origin/main</span></span>
<span class="line"><span style="color:#e1e4e8;">Already up-to-date.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# git fetch origin</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# git branch -v</span></span>
<span class="line"><span style="color:#24292e;">* main 9f2a4f7 Initial commit</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# git merge origin/main</span></span>
<span class="line"><span style="color:#24292e;">Already up-to-date.</span></span></code></pre></div></blockquote><p>另外；</p><p><strong>git pull</strong> 命令用于从远程获取代码并合并本地的版本。</p><p><strong>git pull</strong> 其实就是 <strong>git fetch</strong> 和 <strong>git merge FETCH_HEAD</strong> 的简写</p><blockquote><p><strong>git pull</strong> 命令用于从远程获取代码并合并本地的版本。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git pull &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git pull &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;</span></span></code></pre></div><blockquote><p>如果本地分支和远程分支一样的话<code>:</code>后面的内容可以忽略</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git pull &lt;远程主机名&gt; &lt;远程分支名&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git pull &lt;远程主机名&gt; &lt;远程分支名&gt;</span></span></code></pre></div><h4 id="拉取变更" tabindex="-1">拉取变更 <a class="header-anchor" href="#拉取变更" aria-label="Permalink to &quot;拉取变更&quot;">​</a></h4><p>1，首先在远端直接提交一个变更</p><p><img src="`+V+'" alt="image-20220629215723034"></p><p>然后提交：</p><p><img src="'+K+`" alt="image-20230915201521643"></p><p>然后我们在拉取变更</p><blockquote><p>下面我们就是用命令拉取以下远程变更，因为gitlab默认的主分支是<code>main</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# git pull origin main</span></span>
<span class="line"><span style="color:#e1e4e8;">remote: Enumerating objects: 4, done.</span></span>
<span class="line"><span style="color:#e1e4e8;">remote: Counting objects: 100% (4/4), done.</span></span>
<span class="line"><span style="color:#e1e4e8;">remote: Compressing objects: 100% (2/2), done.</span></span>
<span class="line"><span style="color:#e1e4e8;">remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0</span></span>
<span class="line"><span style="color:#e1e4e8;">Unpacking objects: 100% (3/3), done.</span></span>
<span class="line"><span style="color:#e1e4e8;">From 192.168.200.200:gitlab-instance-faefd22f/git-test</span></span>
<span class="line"><span style="color:#e1e4e8;"> * branch            main       -&gt; FETCH_HEAD</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating 9f2a4f7..1d14d36</span></span>
<span class="line"><span style="color:#e1e4e8;">Fast-forward</span></span>
<span class="line"><span style="color:#e1e4e8;"> test | 1 +</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 test</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 20</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 29 09:33 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 09:33 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 29 06:48 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   14 Jun 29 09:59 test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# git pull origin main</span></span>
<span class="line"><span style="color:#24292e;">remote: Enumerating objects: 4, done.</span></span>
<span class="line"><span style="color:#24292e;">remote: Counting objects: 100% (4/4), done.</span></span>
<span class="line"><span style="color:#24292e;">remote: Compressing objects: 100% (2/2), done.</span></span>
<span class="line"><span style="color:#24292e;">remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0</span></span>
<span class="line"><span style="color:#24292e;">Unpacking objects: 100% (3/3), done.</span></span>
<span class="line"><span style="color:#24292e;">From 192.168.200.200:gitlab-instance-faefd22f/git-test</span></span>
<span class="line"><span style="color:#24292e;"> * branch            main       -&gt; FETCH_HEAD</span></span>
<span class="line"><span style="color:#24292e;">Updating 9f2a4f7..1d14d36</span></span>
<span class="line"><span style="color:#24292e;">Fast-forward</span></span>
<span class="line"><span style="color:#24292e;"> test | 1 +</span></span>
<span class="line"><span style="color:#24292e;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 test</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 20</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 29 09:33 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 09:33 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 29 06:48 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   14 Jun 29 09:59 test</span></span></code></pre></div><h3 id="提交修改" tabindex="-1">提交修改 <a class="header-anchor" href="#提交修改" aria-label="Permalink to &quot;提交修改&quot;">​</a></h3><blockquote><p>完成操作后就可以进行提交修改了到仓库了，这样仓库就可以进行永久变更了</p></blockquote><h4 id="提交命令" tabindex="-1">提交命令 <a class="header-anchor" href="#提交命令" aria-label="Permalink to &quot;提交命令&quot;">​</a></h4><blockquote><p>可以通过如下的命令进行提交变更</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git commit -m &quot;注释&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git commit -m &quot;注释&quot;</span></span></code></pre></div><blockquote><p>具体注释的格式每一个公司都是不一样的，可以按照公司规范来做</p></blockquote><h4 id="提交修改-1" tabindex="-1">提交修改 <a class="header-anchor" href="#提交修改-1" aria-label="Permalink to &quot;提交修改&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 git-test]# git commit -m &#39;add a and b&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[main 300089b] add a and b</span></span>
<span class="line"><span style="color:#e1e4e8;"> 2 files changed, 2 insertions(+)</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 a</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 b</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 git-test]# git commit -m &#39;add a and b&#39;</span></span>
<span class="line"><span style="color:#24292e;">[main 300089b] add a and b</span></span>
<span class="line"><span style="color:#24292e;"> 2 files changed, 2 insertions(+)</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 a</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 b</span></span></code></pre></div><h3 id="推送远程仓库" tabindex="-1">推送远程仓库 <a class="header-anchor" href="#推送远程仓库" aria-label="Permalink to &quot;推送远程仓库&quot;">​</a></h3><blockquote><p>因为<code>git</code>是分布式的版本管理工具，我们要让变更让其他的同事看到就需要推送到远程仓库</p></blockquote><h4 id="推送命令" tabindex="-1">推送命令 <a class="header-anchor" href="#推送命令" aria-label="Permalink to &quot;推送命令&quot;">​</a></h4><blockquote><p>推送远程仓库的命令如下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;</span></span></code></pre></div><blockquote><p>如果本地分支名与远程分支名相同，则可以省略冒号</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git push &lt;远程主机名&gt; &lt;本地分支名&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git push &lt;远程主机名&gt; &lt;本地分支名&gt;</span></span></code></pre></div><h4 id="查看远程仓库" tabindex="-1">查看远程仓库 <a class="header-anchor" href="#查看远程仓库" aria-label="Permalink to &quot;查看远程仓库&quot;">​</a></h4><blockquote><p>有的时候如果忘记远程仓库地址可以使用如下命令查看远程仓库地址</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git remote -v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git remote -v</span></span></code></pre></div><p><img src="`+X+`" alt="image-20220401155552375"></p><blockquote><p>通过该命令可以打印出来我们远程仓库的地址，这里的<code>orgin</code>是默认的远程仓库地址，如果推送到这里的远程仓库，我们可以使用<code>orgin</code>来代替远程仓库</p></blockquote><h4 id="推送提交" tabindex="-1">推送提交 <a class="header-anchor" href="#推送提交" aria-label="Permalink to &quot;推送提交&quot;">​</a></h4><blockquote><p>下面我们就将修改推送到<code>gitlab</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git push origin main</span></span>
<span class="line"><span style="color:#e1e4e8;">Counting objects: 5, done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Delta compression using up to 6 threads.</span></span>
<span class="line"><span style="color:#e1e4e8;">Compressing objects: 100% (2/2), done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Writing objects: 100% (4/4), 340 bytes | 0 bytes/s, done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Total 4 (delta 0), reused 0 (delta 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">remote: GitLab: You are not allowed to push code to protected branches on this project.To git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#e1e4e8;"> ! [remote rejected] main -&gt; main (pre-receive hook declined)</span></span>
<span class="line"><span style="color:#e1e4e8;">error: failed to push some refs to &#39;git@192.168.200.200:gitlab-instance-faefd22f/git-test.git&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git push origin main</span></span>
<span class="line"><span style="color:#24292e;">Counting objects: 5, done.</span></span>
<span class="line"><span style="color:#24292e;">Delta compression using up to 6 threads.</span></span>
<span class="line"><span style="color:#24292e;">Compressing objects: 100% (2/2), done.</span></span>
<span class="line"><span style="color:#24292e;">Writing objects: 100% (4/4), 340 bytes | 0 bytes/s, done.</span></span>
<span class="line"><span style="color:#24292e;">Total 4 (delta 0), reused 0 (delta 0)</span></span>
<span class="line"><span style="color:#24292e;">remote: GitLab: You are not allowed to push code to protected branches on this project.To git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#24292e;"> ! [remote rejected] main -&gt; main (pre-receive hook declined)</span></span>
<span class="line"><span style="color:#24292e;">error: failed to push some refs to &#39;git@192.168.200.200:gitlab-instance-faefd22f/git-test.git&#39;</span></span></code></pre></div><p>gitlab的main分支（master分支）默认是处于被保护状态下的，develop 角色是没有权限提交到 master 分支的，有两种解决办法：</p><p>1，联系管理员分配Maintainer角色权限</p><p>2，临时解决的方式是 Setting中 =&gt; Protected branches 启用 master 分支可被 develop 角色提交即可</p><p>选择2，如下：</p><p><img src="`+ss+`" alt="image-20220629223750020"></p><p>然后再次尝试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git push origin main</span></span>
<span class="line"><span style="color:#e1e4e8;">Counting objects: 5, done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Delta compression using up to 6 threads.</span></span>
<span class="line"><span style="color:#e1e4e8;">Compressing objects: 100% (2/2), done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Writing objects: 100% (4/4), 340 bytes | 0 bytes/s, done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Total 4 (delta 0), reused 0 (delta 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">To git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#e1e4e8;">   e602b65..98bb81d  main -&gt; main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git push origin main</span></span>
<span class="line"><span style="color:#24292e;">Counting objects: 5, done.</span></span>
<span class="line"><span style="color:#24292e;">Delta compression using up to 6 threads.</span></span>
<span class="line"><span style="color:#24292e;">Compressing objects: 100% (2/2), done.</span></span>
<span class="line"><span style="color:#24292e;">Writing objects: 100% (4/4), 340 bytes | 0 bytes/s, done.</span></span>
<span class="line"><span style="color:#24292e;">Total 4 (delta 0), reused 0 (delta 0)</span></span>
<span class="line"><span style="color:#24292e;">To git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#24292e;">   e602b65..98bb81d  main -&gt; main</span></span></code></pre></div><h3 id="其他人拉取变更" tabindex="-1">其他人拉取变更 <a class="header-anchor" href="#其他人拉取变更" aria-label="Permalink to &quot;其他人拉取变更&quot;">​</a></h3><p>回到201节点，用zs用户从远程拉取变更</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git remote -v</span></span>
<span class="line"><span style="color:#e1e4e8;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (fetch)</span></span>
<span class="line"><span style="color:#e1e4e8;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (push)</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git pull origin  main:master</span></span>
<span class="line"><span style="color:#e1e4e8;">From 192.168.200.200:gitlab-instance-faefd22f/git-test</span></span>
<span class="line"><span style="color:#e1e4e8;"> ! [rejected]        main       -&gt; master  (non-fast-forward)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git remote -v</span></span>
<span class="line"><span style="color:#24292e;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (fetch)</span></span>
<span class="line"><span style="color:#24292e;">origin  git@192.168.200.200:gitlab-instance-faefd22f/git-test.git (push)</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git pull origin  main:master</span></span>
<span class="line"><span style="color:#24292e;">From 192.168.200.200:gitlab-instance-faefd22f/git-test</span></span>
<span class="line"><span style="color:#24292e;"> ! [rejected]        main       -&gt; master  (non-fast-forward)</span></span></code></pre></div><p>采用fetch + merge</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git fetch origin</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git branch -a</span></span>
<span class="line"><span style="color:#e1e4e8;">* master</span></span>
<span class="line"><span style="color:#e1e4e8;">  remotes/origin/main</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;"> # 将远程main分支内容合并到当前master分支 </span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git merge origin/main</span></span>
<span class="line"><span style="color:#e1e4e8;">Merge made by the &#39;recursive&#39; strategy.</span></span>
<span class="line"><span style="color:#e1e4e8;"> README.md | 92 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#e1e4e8;"> a         |  1 +</span></span>
<span class="line"><span style="color:#e1e4e8;"> b         |  1 +</span></span>
<span class="line"><span style="color:#e1e4e8;"> test      |  1 +</span></span>
<span class="line"><span style="color:#e1e4e8;"> 4 files changed, 95 insertions(+)</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 a</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 b</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 test</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 20</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 30 00:43 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 30 00:43 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    0 Jun 29 11:06 readme</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 30 00:43 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   18 Jun 30 00:43 test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git fetch origin</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git branch -a</span></span>
<span class="line"><span style="color:#24292e;">* master</span></span>
<span class="line"><span style="color:#24292e;">  remotes/origin/main</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;"> # 将远程main分支内容合并到当前master分支 </span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git merge origin/main</span></span>
<span class="line"><span style="color:#24292e;">Merge made by the &#39;recursive&#39; strategy.</span></span>
<span class="line"><span style="color:#24292e;"> README.md | 92 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</span></span>
<span class="line"><span style="color:#24292e;"> a         |  1 +</span></span>
<span class="line"><span style="color:#24292e;"> b         |  1 +</span></span>
<span class="line"><span style="color:#24292e;"> test      |  1 +</span></span>
<span class="line"><span style="color:#24292e;"> 4 files changed, 95 insertions(+)</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 README.md</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 a</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 b</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 test</span></span>
<span class="line"><span style="color:#24292e;">[root@work-node1 demo]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 20</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 30 00:43 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 30 00:43 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    0 Jun 29 11:06 readme</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 30 00:43 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   18 Jun 30 00:43 test</span></span></code></pre></div><p>同时将本地master分支上的变更推送到远程main分支</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@work-node1 demo]# git push origin master:main</span></span>
<span class="line"><span style="color:#e1e4e8;">Counting objects: 6, done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Delta compression using up to 6 threads.</span></span>
<span class="line"><span style="color:#e1e4e8;">Compressing objects: 100% (3/3), done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Writing objects: 100% (5/5), 480 bytes | 0 bytes/s, done.</span></span>
<span class="line"><span style="color:#e1e4e8;">Total 5 (delta 1), reused 0 (delta 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">To git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#e1e4e8;">   98bb81d..e8ef10e  master -&gt; main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@work-node1 demo]# git push origin master:main</span></span>
<span class="line"><span style="color:#24292e;">Counting objects: 6, done.</span></span>
<span class="line"><span style="color:#24292e;">Delta compression using up to 6 threads.</span></span>
<span class="line"><span style="color:#24292e;">Compressing objects: 100% (3/3), done.</span></span>
<span class="line"><span style="color:#24292e;">Writing objects: 100% (5/5), 480 bytes | 0 bytes/s, done.</span></span>
<span class="line"><span style="color:#24292e;">Total 5 (delta 1), reused 0 (delta 0)</span></span>
<span class="line"><span style="color:#24292e;">To git@192.168.200.200:gitlab-instance-faefd22f/git-test.git</span></span>
<span class="line"><span style="color:#24292e;">   98bb81d..e8ef10e  master -&gt; main</span></span></code></pre></div><h2 id="分支操作" tabindex="-1">分支操作 <a class="header-anchor" href="#分支操作" aria-label="Permalink to &quot;分支操作&quot;">​</a></h2><p><a href="https://www.runoob.com/git/git-branch.html" target="_blank" rel="noreferrer">https://www.runoob.com/git/git-branch.html</a></p><p>在200节点上使用ls</p><h3 id="创建分支" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支" aria-label="Permalink to &quot;创建分支&quot;">​</a></h3><blockquote><p>一般我们很少从头开始做一个项目，都是中途接手的，这个时候我们一般开发一个功能就需要新建分支了，并且分支也是我们最重要的一个功能</p></blockquote><h4 id="查看分支" tabindex="-1">查看分支 <a class="header-anchor" href="#查看分支" aria-label="Permalink to &quot;查看分支&quot;">​</a></h4><blockquote><p>我们要查看本地分支列表，可以通过如下命令进行查询</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#e1e4e8;">* main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#24292e;">* main</span></span></code></pre></div><blockquote><p>我们发现这里面现在只有一个main分支</p></blockquote><p><img src="`+as+`" alt="image-20220401162539052"></p><blockquote><p>这里<code>main</code>分支有一个<code>*</code>标识是当前活动分支</p></blockquote><h4 id="创建分支-1" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支-1" aria-label="Permalink to &quot;创建分支&quot;">​</a></h4><blockquote><p>我们一般开发一个功能是需要创建分支的，创建分支命令也非常简单，执行<code>git branch (branchname)</code>即可</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#e1e4e8;">* main</span></span>
<span class="line"><span style="color:#e1e4e8;">  master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#24292e;">* main</span></span>
<span class="line"><span style="color:#24292e;">  master</span></span></code></pre></div><blockquote><p>我们创建一个master分支，并查看当前分支列表</p></blockquote><p><img src="`+es+`" alt="image-20220401163251478"></p><h4 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h4><p>1，我们可以通过<code>git checkout (branch)</code>进行切换分支</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;">Switched to branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#e1e4e8;">  main</span></span>
<span class="line"><span style="color:#e1e4e8;">* master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#24292e;">Switched to branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#24292e;">  main</span></span>
<span class="line"><span style="color:#24292e;">* master</span></span></code></pre></div><blockquote><p>切换分支后我们发现活动分支已经变成了master</p></blockquote><p>2，我们在当前分支做一些变更，当我们还原回到原来的分支后就会被还原回去</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# echo &#39;hello master&#39; &gt; master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git commit -m &#39;add master&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[master acd81b3] add master</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 24</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 11:18 master</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# echo &#39;hello master&#39; &gt; master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git commit -m &#39;add master&#39;</span></span>
<span class="line"><span style="color:#24292e;">[master acd81b3] add master</span></span>
<span class="line"><span style="color:#24292e;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 24</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 11:18 master</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre></div><p>3，我们切换回到<code>main</code>分支查看下效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout main</span></span>
<span class="line"><span style="color:#e1e4e8;">Switched to branch &#39;main&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 20</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout main</span></span>
<span class="line"><span style="color:#24292e;">Switched to branch &#39;main&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 20</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre></div><blockquote><p>我们发现刚才创建的文件已经看不到了，已经被移除了</p></blockquote><h4 id="删除分支" tabindex="-1">删除分支 <a class="header-anchor" href="#删除分支" aria-label="Permalink to &quot;删除分支&quot;">​</a></h4><blockquote><p>当某个分支完成功能，一行不需要的时候可以选择删除分支，可以通过<code>git branch -D (branchname)</code>删除</p></blockquote><p><strong>注意不能够删除当前活动分支</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout main</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch -d master</span></span>
<span class="line"><span style="color:#e1e4e8;">error: The branch &#39;master&#39; is not fully merged.</span></span>
<span class="line"><span style="color:#e1e4e8;">If you are sure you want to delete it, run &#39;git branch -D master&#39;.</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch -D master</span></span>
<span class="line"><span style="color:#e1e4e8;">Deleted branch master (was acd81b3).</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#e1e4e8;">* main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout main</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch -d master</span></span>
<span class="line"><span style="color:#24292e;">error: The branch &#39;master&#39; is not fully merged.</span></span>
<span class="line"><span style="color:#24292e;">If you are sure you want to delete it, run &#39;git branch -D master&#39;.</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch -D master</span></span>
<span class="line"><span style="color:#24292e;">Deleted branch master (was acd81b3).</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#24292e;">* main</span></span></code></pre></div><h3 id="分支合并-merge" tabindex="-1">分支合并-merge <a class="header-anchor" href="#分支合并-merge" aria-label="Permalink to &quot;分支合并-merge&quot;">​</a></h3><blockquote><p>如果我们已经将一个功能分支开发完成后，一般需要将该分支合并到<code>master</code>主分支，下面我们说下分支合并</p></blockquote><p>继续在200节点上用ls操作</p><h4 id="创建分支-2" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支-2" aria-label="Permalink to &quot;创建分支&quot;">​</a></h4><blockquote><p>我们先创建几个用于合并的分支，然后再来合并</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout -b master</span></span>
<span class="line"><span style="color:#e1e4e8;">Switched to a new branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#e1e4e8;">  main</span></span>
<span class="line"><span style="color:#e1e4e8;">* master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout -b master</span></span>
<span class="line"><span style="color:#24292e;">Switched to a new branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#24292e;">  main</span></span>
<span class="line"><span style="color:#24292e;">* master</span></span></code></pre></div><h4 id="提交文件" tabindex="-1">提交文件 <a class="header-anchor" href="#提交文件" aria-label="Permalink to &quot;提交文件&quot;">​</a></h4><p>1，现我们在各个不同的分支提交文件，这里我们都是只创建文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">echo &quot;master&quot; &gt; master</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;add master&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">echo &quot;master&quot; &gt; master</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;add master&#39;</span></span></code></pre></div><blockquote><p>这里我们在master分支提交了文件</p></blockquote><p>2，基于master 创建一个feature分支，然后后继续提交文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git checkout -b feature</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;feature&quot; &gt; feature</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &quot;add feature&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git checkout -b feature</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;feature&quot; &gt; feature</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &quot;add feature&quot;</span></span></code></pre></div><p>3，现在已经有了两个不同的分支，并且两个不同的分支提交的文件也是不同的，但是并没有冲突，查看两个分支内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 28</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    8 Jun 29 12:02 feature</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    7 Jun 29 11:49 index</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;">Switched to branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 24</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    7 Jun 29 11:49 index</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 28</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    8 Jun 29 12:02 feature</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    7 Jun 29 11:49 index</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#24292e;">Switched to branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 24</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    7 Jun 29 11:49 index</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre></div><h4 id="分支合并" tabindex="-1">分支合并 <a class="header-anchor" href="#分支合并" aria-label="Permalink to &quot;分支合并&quot;">​</a></h4><blockquote><p>下面我们操作下无冲突情况下和分支合并，这种情况下合并可以使用如下命令进行合并</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git merge 分支名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git merge 分支名</span></span></code></pre></div><blockquote><p>该命令是将一个分支合并到当前分支，如果我们要将<code>feature</code>合并到<code>master</code>分支，需要执行以下命令</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git merge feature</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating e097f5b..a685b10</span></span>
<span class="line"><span style="color:#e1e4e8;">Fast-forward</span></span>
<span class="line"><span style="color:#e1e4e8;"> feature | 1 +</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#e1e4e8;"> create mode 100644 feature</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 28</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    8 Jun 29 12:04 feature</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    7 Jun 29 11:49 index</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git merge feature</span></span>
<span class="line"><span style="color:#24292e;">Updating e097f5b..a685b10</span></span>
<span class="line"><span style="color:#24292e;">Fast-forward</span></span>
<span class="line"><span style="color:#24292e;"> feature | 1 +</span></span>
<span class="line"><span style="color:#24292e;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#24292e;"> create mode 100644 feature</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 28</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 29 10:24 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 29 10:24 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    8 Jun 29 12:04 feature</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    7 Jun 29 11:49 index</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 29 10:23 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   18 Jun 29 10:23 test</span></span></code></pre></div><blockquote><p>可以看到feature分支上的文件已经过来了，目前来说没有冲突比较简单。</p></blockquote><h4 id="查看提交日志" tabindex="-1">查看提交日志 <a class="header-anchor" href="#查看提交日志" aria-label="Permalink to &quot;查看提交日志&quot;">​</a></h4><blockquote><p>我们可以通过日志来查看合并的信息</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git log -2</span></span>
<span class="line"><span style="color:#e1e4e8;">commit a685b10e90a8f44b50565500421e0bb75973d9e9</span></span>
<span class="line"><span style="color:#e1e4e8;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">Date:   Wed Jun 29 11:55:39 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    add feature</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">commit e097f5bb904914cc3b848b078799b020e4184ebd</span></span>
<span class="line"><span style="color:#e1e4e8;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">Date:   Wed Jun 29 11:49:27 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    add index</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git log -2</span></span>
<span class="line"><span style="color:#24292e;">commit a685b10e90a8f44b50565500421e0bb75973d9e9</span></span>
<span class="line"><span style="color:#24292e;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">Date:   Wed Jun 29 11:55:39 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    add feature</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">commit e097f5bb904914cc3b848b078799b020e4184ebd</span></span>
<span class="line"><span style="color:#24292e;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">Date:   Wed Jun 29 11:49:27 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    add index</span></span></code></pre></div><blockquote><p>这样看起来不是特别容易看懂，我们可以通过图形化工具来查看</p></blockquote><p><img src="`+ns+`" alt="image-20220406164110044"></p><h4 id="制造冲突并查看" tabindex="-1">制造冲突并查看 <a class="header-anchor" href="#制造冲突并查看" aria-label="Permalink to &quot;制造冲突并查看&quot;">​</a></h4><p>1，切换回feature分支，来制造一些冲突</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git checkout feature</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git checkout feature</span></span></code></pre></div><p>2，我们在该分支做一些变更，将<code>master.txt</code>的内容做一些变更并且提交</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">echo &quot;feature-append&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &quot;modify feature branch , add to master&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">cat master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">echo &quot;feature-append&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &quot;modify feature branch , add to master&quot;</span></span>
<span class="line"><span style="color:#24292e;">cat master</span></span></code></pre></div><p>3，切换回master分支对文件做一些变更并提交</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;master-append&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &quot;modify master branch , add to master&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">cat master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git checkout master</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;master-append&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &quot;modify master branch , add to master&quot;</span></span>
<span class="line"><span style="color:#24292e;">cat master</span></span></code></pre></div><h4 id="合并-产生冲突" tabindex="-1">合并-产生冲突 <a class="header-anchor" href="#合并-产生冲突" aria-label="Permalink to &quot;合并-产生冲突&quot;">​</a></h4><blockquote><p>现在我们可以切换到master分支，将<code>feature</code>分支合并到<code>master</code>分支</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git merge feature</span></span>
<span class="line"><span style="color:#e1e4e8;">Auto-merging master</span></span>
<span class="line"><span style="color:#e1e4e8;">CONFLICT (content): Merge conflict in master</span></span>
<span class="line"><span style="color:#e1e4e8;">Automatic merge failed; fix conflicts and then commit the result.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git merge feature</span></span>
<span class="line"><span style="color:#24292e;">Auto-merging master</span></span>
<span class="line"><span style="color:#24292e;">CONFLICT (content): Merge conflict in master</span></span>
<span class="line"><span style="color:#24292e;">Automatic merge failed; fix conflicts and then commit the result.</span></span></code></pre></div><h4 id="解决冲突并提交" tabindex="-1">解决冲突并提交 <a class="header-anchor" href="#解决冲突并提交" aria-label="Permalink to &quot;解决冲突并提交&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# cat master</span></span>
<span class="line"><span style="color:#e1e4e8;">master</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></span>
<span class="line"><span style="color:#e1e4e8;">master-append</span></span>
<span class="line"><span style="color:#e1e4e8;">=======</span></span>
<span class="line"><span style="color:#e1e4e8;">feature-append</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# cat master</span></span>
<span class="line"><span style="color:#24292e;">master</span></span>
<span class="line"><span style="color:#24292e;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></span>
<span class="line"><span style="color:#24292e;">master-append</span></span>
<span class="line"><span style="color:#24292e;">=======</span></span>
<span class="line"><span style="color:#24292e;">feature-append</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</span></span></code></pre></div><p>手动解决冲突，留下谁由自己来定</p><p>然后提交</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git status</span></span>
<span class="line"><span style="color:#e1e4e8;"># On branch master</span></span>
<span class="line"><span style="color:#e1e4e8;"># You have unmerged paths.</span></span>
<span class="line"><span style="color:#e1e4e8;">#   (fix conflicts and run &quot;git commit&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># Unmerged paths:</span></span>
<span class="line"><span style="color:#e1e4e8;">#   (use &quot;git add &lt;file&gt;...&quot; to mark resolution)</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">#       both modified:      master</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git status</span></span>
<span class="line"><span style="color:#e1e4e8;"># On branch master</span></span>
<span class="line"><span style="color:#e1e4e8;"># All conflicts fixed but you are still merging.</span></span>
<span class="line"><span style="color:#e1e4e8;">#   (use &quot;git commit&quot; to conclude merge)</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">#       modified:   master</span></span>
<span class="line"><span style="color:#e1e4e8;">#</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git commit -m &#39;fixed conflic&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[master e57d4d2] fixed conflic</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git status</span></span>
<span class="line"><span style="color:#e1e4e8;"># On branch master</span></span>
<span class="line"><span style="color:#e1e4e8;">nothing to commit, working directory clean</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git log -3</span></span>
<span class="line"><span style="color:#e1e4e8;">commit e57d4d2c531a2d0a7a03cd0c65a2dbcf976fcfeb</span></span>
<span class="line"><span style="color:#e1e4e8;">Merge: 64ae4e0 366e30f</span></span>
<span class="line"><span style="color:#e1e4e8;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">Date:   Wed Jun 29 23:22:47 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    fixed conflic</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">commit 64ae4e02d8f82e354cb9e72023c1e5c38d5a1eaf</span></span>
<span class="line"><span style="color:#e1e4e8;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">Date:   Wed Jun 29 23:14:50 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    modify master branch , add to master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">commit 366e30f54e825845235f8b33d8017097c7652fe3</span></span>
<span class="line"><span style="color:#e1e4e8;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">Date:   Wed Jun 29 23:12:14 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    modify feature branch , add to master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git status</span></span>
<span class="line"><span style="color:#24292e;"># On branch master</span></span>
<span class="line"><span style="color:#24292e;"># You have unmerged paths.</span></span>
<span class="line"><span style="color:#24292e;">#   (fix conflicts and run &quot;git commit&quot;)</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># Unmerged paths:</span></span>
<span class="line"><span style="color:#24292e;">#   (use &quot;git add &lt;file&gt;...&quot; to mark resolution)</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">#       both modified:      master</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git status</span></span>
<span class="line"><span style="color:#24292e;"># On branch master</span></span>
<span class="line"><span style="color:#24292e;"># All conflicts fixed but you are still merging.</span></span>
<span class="line"><span style="color:#24292e;">#   (use &quot;git commit&quot; to conclude merge)</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;"># Changes to be committed:</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">#       modified:   master</span></span>
<span class="line"><span style="color:#24292e;">#</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git commit -m &#39;fixed conflic&#39;</span></span>
<span class="line"><span style="color:#24292e;">[master e57d4d2] fixed conflic</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git status</span></span>
<span class="line"><span style="color:#24292e;"># On branch master</span></span>
<span class="line"><span style="color:#24292e;">nothing to commit, working directory clean</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git log -3</span></span>
<span class="line"><span style="color:#24292e;">commit e57d4d2c531a2d0a7a03cd0c65a2dbcf976fcfeb</span></span>
<span class="line"><span style="color:#24292e;">Merge: 64ae4e0 366e30f</span></span>
<span class="line"><span style="color:#24292e;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">Date:   Wed Jun 29 23:22:47 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    fixed conflic</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">commit 64ae4e02d8f82e354cb9e72023c1e5c38d5a1eaf</span></span>
<span class="line"><span style="color:#24292e;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">Date:   Wed Jun 29 23:14:50 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    modify master branch , add to master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">commit 366e30f54e825845235f8b33d8017097c7652fe3</span></span>
<span class="line"><span style="color:#24292e;">Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">Date:   Wed Jun 29 23:12:14 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    modify feature branch , add to master</span></span></code></pre></div><h4 id="查看log" tabindex="-1">查看log <a class="header-anchor" href="#查看log" aria-label="Permalink to &quot;查看log&quot;">​</a></h4><p>查看log</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git log --graph --decorate --all</span></span>
<span class="line"><span style="color:#e1e4e8;">*   commit e57d4d2c531a2d0a7a03cd0c65a2dbcf976fcfeb (HEAD, master)</span></span>
<span class="line"><span style="color:#e1e4e8;">|\\  Merge: 64ae4e0 366e30f</span></span>
<span class="line"><span style="color:#e1e4e8;">| | Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">| | Date:   Wed Jun 29 23:22:47 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;">| |</span></span>
<span class="line"><span style="color:#e1e4e8;">| |     fixed conflic</span></span>
<span class="line"><span style="color:#e1e4e8;">| |</span></span>
<span class="line"><span style="color:#e1e4e8;">| * commit 366e30f54e825845235f8b33d8017097c7652fe3 (feature)</span></span>
<span class="line"><span style="color:#e1e4e8;">| | Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">| | Date:   Wed Jun 29 23:12:14 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;">| |</span></span>
<span class="line"><span style="color:#e1e4e8;">| |     modify feature branch , add to master</span></span>
<span class="line"><span style="color:#e1e4e8;">| |</span></span>
<span class="line"><span style="color:#e1e4e8;">* | commit 64ae4e02d8f82e354cb9e72023c1e5c38d5a1eaf</span></span>
<span class="line"><span style="color:#e1e4e8;">|/  Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">|   Date:   Wed Jun 29 23:14:50 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">|       modify master branch , add to master</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">* commit 787d85bf2c81e7b3808eabaaf2a932d84da38249</span></span>
<span class="line"><span style="color:#e1e4e8;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">| Date:   Wed Jun 29 23:10:04 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">|     add feature</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">* commit 4851824c26ce34286bf9af8aab1ff09ea9e83ea3</span></span>
<span class="line"><span style="color:#e1e4e8;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">| Date:   Wed Jun 29 23:09:46 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">|     add master</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">* commit 98bb81d264185ca4b4998387229d817ff3877fcf (origin/main, origin/HEAD, main)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git log --graph --decorate --all</span></span>
<span class="line"><span style="color:#24292e;">*   commit e57d4d2c531a2d0a7a03cd0c65a2dbcf976fcfeb (HEAD, master)</span></span>
<span class="line"><span style="color:#24292e;">|\\  Merge: 64ae4e0 366e30f</span></span>
<span class="line"><span style="color:#24292e;">| | Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">| | Date:   Wed Jun 29 23:22:47 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;">| |</span></span>
<span class="line"><span style="color:#24292e;">| |     fixed conflic</span></span>
<span class="line"><span style="color:#24292e;">| |</span></span>
<span class="line"><span style="color:#24292e;">| * commit 366e30f54e825845235f8b33d8017097c7652fe3 (feature)</span></span>
<span class="line"><span style="color:#24292e;">| | Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">| | Date:   Wed Jun 29 23:12:14 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;">| |</span></span>
<span class="line"><span style="color:#24292e;">| |     modify feature branch , add to master</span></span>
<span class="line"><span style="color:#24292e;">| |</span></span>
<span class="line"><span style="color:#24292e;">* | commit 64ae4e02d8f82e354cb9e72023c1e5c38d5a1eaf</span></span>
<span class="line"><span style="color:#24292e;">|/  Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">|   Date:   Wed Jun 29 23:14:50 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">|       modify master branch , add to master</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">* commit 787d85bf2c81e7b3808eabaaf2a932d84da38249</span></span>
<span class="line"><span style="color:#24292e;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">| Date:   Wed Jun 29 23:10:04 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">|     add feature</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">* commit 4851824c26ce34286bf9af8aab1ff09ea9e83ea3</span></span>
<span class="line"><span style="color:#24292e;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">| Date:   Wed Jun 29 23:09:46 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">|     add master</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">* commit 98bb81d264185ca4b4998387229d817ff3877fcf (origin/main, origin/HEAD, main)</span></span></code></pre></div><p>--graph：图形展示</p><p>--decorate：让<em>git log</em>显示每个commit的引用(如:分支、tag等)</p><p>--all ：表示显示所有的branch</p><p>--oneline ：一行显示</p><h3 id="合并分支-rebase" tabindex="-1">合并分支-rebase <a class="header-anchor" href="#合并分支-rebase" aria-label="Permalink to &quot;合并分支-rebase&quot;">​</a></h3><blockquote><p>使用merge合并会产生很多交叉树，如果交叉很多的情况下很不容易看懂，如果想比较简单的方式合并可以选择rebase方式</p></blockquote><h4 id="创建fixbug分支" tabindex="-1">创建fixbug分支 <a class="header-anchor" href="#创建fixbug分支" aria-label="Permalink to &quot;创建fixbug分支&quot;">​</a></h4><p>继续在200节点上，先准备一些环境，创建一个新分支 fixbug</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch fixbug</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git checkout master</span></span>
<span class="line"><span style="color:#24292e;">git branch fixbug</span></span></code></pre></div><h4 id="fixbug上提交文件" tabindex="-1">fixbug上提交文件 <a class="header-anchor" href="#fixbug上提交文件" aria-label="Permalink to &quot;fixbug上提交文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout -b fixbug</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# echo &quot;fixbug branch ,fix1604bug&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git commit -m &#39;on fixbug branch ,fixed master &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[fixbug 3d6704c] on fixbug branch ,fixed master</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1 file changed, 1 insertion(+)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout -b fixbug</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# echo &quot;fixbug branch ,fix1604bug&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git commit -m &#39;on fixbug branch ,fixed master &#39;</span></span>
<span class="line"><span style="color:#24292e;">[fixbug 3d6704c] on fixbug branch ,fixed master</span></span>
<span class="line"><span style="color:#24292e;"> 1 file changed, 1 insertion(+)</span></span></code></pre></div><h4 id="master分支提交" tabindex="-1">master分支提交 <a class="header-anchor" href="#master分支提交" aria-label="Permalink to &quot;master分支提交&quot;">​</a></h4><p>回到master分支，同样做出改动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;">Switched to branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# echo &quot;master king&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git commit -m &#39;on master branch ,add master king&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">[master 24efd9a] on master branch ,add master king</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# cat master</span></span>
<span class="line"><span style="color:#e1e4e8;">master</span></span>
<span class="line"><span style="color:#e1e4e8;">master-append</span></span>
<span class="line"><span style="color:#e1e4e8;">feature-append</span></span>
<span class="line"><span style="color:#e1e4e8;">master king</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git checkout master</span></span>
<span class="line"><span style="color:#24292e;">Switched to branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# echo &quot;master king&quot; &gt;&gt; master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git commit -m &#39;on master branch ,add master king&#39;</span></span>
<span class="line"><span style="color:#24292e;">[master 24efd9a] on master branch ,add master king</span></span>
<span class="line"><span style="color:#24292e;"> 1 file changed, 1 insertion(+)</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# cat master</span></span>
<span class="line"><span style="color:#24292e;">master</span></span>
<span class="line"><span style="color:#24292e;">master-append</span></span>
<span class="line"><span style="color:#24292e;">feature-append</span></span>
<span class="line"><span style="color:#24292e;">master king</span></span></code></pre></div><h4 id="合并并解决冲突" tabindex="-1">合并并解决冲突 <a class="header-anchor" href="#合并并解决冲突" aria-label="Permalink to &quot;合并并解决冲突&quot;">​</a></h4><p>合并，使用rebase</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#e1e4e8;">  fixbug</span></span>
<span class="line"><span style="color:#e1e4e8;">  main</span></span>
<span class="line"><span style="color:#e1e4e8;">* master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git rebase fixbug</span></span>
<span class="line"><span style="color:#e1e4e8;">First, rewinding head to replay your work on top of it...</span></span>
<span class="line"><span style="color:#e1e4e8;">Applying: on master branch ,add master king</span></span>
<span class="line"><span style="color:#e1e4e8;">Using index info to reconstruct a base tree...</span></span>
<span class="line"><span style="color:#e1e4e8;">M       master</span></span>
<span class="line"><span style="color:#e1e4e8;">Falling back to patching base and 3-way merge...</span></span>
<span class="line"><span style="color:#e1e4e8;">Auto-merging master</span></span>
<span class="line"><span style="color:#e1e4e8;">CONFLICT (content): Merge conflict in master</span></span>
<span class="line"><span style="color:#e1e4e8;">Failed to merge in the changes.</span></span>
<span class="line"><span style="color:#e1e4e8;">Patch failed at 0001 on master branch ,add master king</span></span>
<span class="line"><span style="color:#e1e4e8;">The copy of the patch that failed is found in:</span></span>
<span class="line"><span style="color:#e1e4e8;">   /root/git/git-test/.git/rebase-apply/patch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">When you have resolved this problem, run &quot;git rebase --continue&quot;.</span></span>
<span class="line"><span style="color:#e1e4e8;">If you prefer to skip this patch, run &quot;git rebase --skip&quot; instead.</span></span>
<span class="line"><span style="color:#e1e4e8;">To check out the original branch and stop rebasing, run &quot;git rebase --abort&quot;.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#e1e4e8;">total 28</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   12 Jun 30 00:53 a</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   13 Jun 30 00:53 b</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    8 Jun 30 00:58 feature</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root  137 Jun 30 01:12 master</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root    0 Jun 30 00:52 readme</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root 6251 Jun 30 00:52 README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">-rw-r--r--. 1 root root   18 Jun 30 00:52 test</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# cat master</span></span>
<span class="line"><span style="color:#e1e4e8;">master</span></span>
<span class="line"><span style="color:#e1e4e8;">master-append</span></span>
<span class="line"><span style="color:#e1e4e8;">feature-append</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></span>
<span class="line"><span style="color:#e1e4e8;">fixbug branch ,fix1604bug</span></span>
<span class="line"><span style="color:#e1e4e8;">=======</span></span>
<span class="line"><span style="color:#e1e4e8;">master king</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; on master branch ,add master king</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# vi master</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git rebase --continue</span></span>
<span class="line"><span style="color:#e1e4e8;">master: needs merge</span></span>
<span class="line"><span style="color:#e1e4e8;">You must edit all merge conflicts and then</span></span>
<span class="line"><span style="color:#e1e4e8;">mark them as resolved using git add</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git branch</span></span>
<span class="line"><span style="color:#24292e;">  fixbug</span></span>
<span class="line"><span style="color:#24292e;">  main</span></span>
<span class="line"><span style="color:#24292e;">* master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git rebase fixbug</span></span>
<span class="line"><span style="color:#24292e;">First, rewinding head to replay your work on top of it...</span></span>
<span class="line"><span style="color:#24292e;">Applying: on master branch ,add master king</span></span>
<span class="line"><span style="color:#24292e;">Using index info to reconstruct a base tree...</span></span>
<span class="line"><span style="color:#24292e;">M       master</span></span>
<span class="line"><span style="color:#24292e;">Falling back to patching base and 3-way merge...</span></span>
<span class="line"><span style="color:#24292e;">Auto-merging master</span></span>
<span class="line"><span style="color:#24292e;">CONFLICT (content): Merge conflict in master</span></span>
<span class="line"><span style="color:#24292e;">Failed to merge in the changes.</span></span>
<span class="line"><span style="color:#24292e;">Patch failed at 0001 on master branch ,add master king</span></span>
<span class="line"><span style="color:#24292e;">The copy of the patch that failed is found in:</span></span>
<span class="line"><span style="color:#24292e;">   /root/git/git-test/.git/rebase-apply/patch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">When you have resolved this problem, run &quot;git rebase --continue&quot;.</span></span>
<span class="line"><span style="color:#24292e;">If you prefer to skip this patch, run &quot;git rebase --skip&quot; instead.</span></span>
<span class="line"><span style="color:#24292e;">To check out the original branch and stop rebasing, run &quot;git rebase --abort&quot;.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# ll</span></span>
<span class="line"><span style="color:#24292e;">total 28</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   12 Jun 30 00:53 a</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   13 Jun 30 00:53 b</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    8 Jun 30 00:58 feature</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root  137 Jun 30 01:12 master</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root    0 Jun 30 00:52 readme</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root 6251 Jun 30 00:52 README.md</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--. 1 root root   18 Jun 30 00:52 test</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# cat master</span></span>
<span class="line"><span style="color:#24292e;">master</span></span>
<span class="line"><span style="color:#24292e;">master-append</span></span>
<span class="line"><span style="color:#24292e;">feature-append</span></span>
<span class="line"><span style="color:#24292e;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></span>
<span class="line"><span style="color:#24292e;">fixbug branch ,fix1604bug</span></span>
<span class="line"><span style="color:#24292e;">=======</span></span>
<span class="line"><span style="color:#24292e;">master king</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; on master branch ,add master king</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# vi master</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git add .</span></span>
<span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git rebase --continue</span></span>
<span class="line"><span style="color:#24292e;">master: needs merge</span></span>
<span class="line"><span style="color:#24292e;">You must edit all merge conflicts and then</span></span>
<span class="line"><span style="color:#24292e;">mark them as resolved using git add</span></span></code></pre></div><h4 id="查看日志" tabindex="-1">查看日志 <a class="header-anchor" href="#查看日志" aria-label="Permalink to &quot;查看日志&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@k8-controller git-test]# git log --graph --decorate --all</span></span>
<span class="line"><span style="color:#e1e4e8;">* commit 2fbcfedb4bb7237eb71ebd07031832fb8ba0cc03 (HEAD, master)</span></span>
<span class="line"><span style="color:#e1e4e8;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">| Date:   Thu Jun 30 01:11:07 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">|     on master branch ,add master king</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">* commit 3d6704cf59d410963cad2ff6746dc2b50eb9ddf2 (fixbug)</span></span>
<span class="line"><span style="color:#e1e4e8;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">| Date:   Thu Jun 30 01:09:02 2022 -0400</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span>
<span class="line"><span style="color:#e1e4e8;">|     on fixbug branch ,fixed master</span></span>
<span class="line"><span style="color:#e1e4e8;">|</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@k8-controller git-test]# git log --graph --decorate --all</span></span>
<span class="line"><span style="color:#24292e;">* commit 2fbcfedb4bb7237eb71ebd07031832fb8ba0cc03 (HEAD, master)</span></span>
<span class="line"><span style="color:#24292e;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">| Date:   Thu Jun 30 01:11:07 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">|     on master branch ,add master king</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">* commit 3d6704cf59d410963cad2ff6746dc2b50eb9ddf2 (fixbug)</span></span>
<span class="line"><span style="color:#24292e;">| Author: ls &lt;ls@itcast.cn&gt;</span></span>
<span class="line"><span style="color:#24292e;">| Date:   Thu Jun 30 01:09:02 2022 -0400</span></span>
<span class="line"><span style="color:#24292e;">|</span></span>
<span class="line"><span style="color:#24292e;">|     on fixbug branch ,fixed master</span></span>
<span class="line"><span style="color:#24292e;">|</span></span></code></pre></div><p>不会产生新的提交，也没有多余的分叉</p><h3 id="merge-vs-rebase" tabindex="-1">Merge vs Rebase <a class="header-anchor" href="#merge-vs-rebase" aria-label="Permalink to &quot;Merge vs Rebase&quot;">​</a></h3><p><a href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing" target="_blank" rel="noreferrer">https://www.atlassian.com/git/tutorials/merging-vs-rebasing</a></p><h4 id="merge" tabindex="-1">Merge <a class="header-anchor" href="#merge" aria-label="Permalink to &quot;Merge&quot;">​</a></h4><p>通过命令将 <code>master</code> 分支合并到 <code>feature</code> 分支中：<code>git merge feature master</code>[简写形式]，会在 <code>feature</code> 分支中创建一个新的 <strong>merge commit</strong>，它将两个分支的历史联系在一起，请看如下所示</p><p><img src="`+ls+'" alt="image-20220630142049089"></p><p>使用 merge 是很好的方式，因为它是一种 <strong>非破坏性的</strong> 操作。现有分支不会以任何方式被更改，</p><p>另一方面，这也意味着 <code>feature</code> 分支每次需要合并上游更改时，它都将产生一个额外的合并提交。如果<code>master</code> 提交非常活跃，这可能会严重污染你的 feature 分支历史记录</p><h4 id="rebase" tabindex="-1">rebase <a class="header-anchor" href="#rebase" aria-label="Permalink to &quot;rebase&quot;">​</a></h4><p>用以下命令将 <code>master</code> 分支合并到 <code>feature</code>分支上，<code>git checkout feature; git rebase master</code>。</p><p>它会将整个 <code>feature</code> 分支移动到 <code>master</code> 分支的顶端，从而有效地整合了所有 <code>master</code> 分支上的提交。但是，与 merge 提交方式不同，rebase 通过为原始分支中的每个提交创建全新的 commits 来 <strong>重写</strong> 项目历史记录。</p><p><img src="'+os+'" alt="image-20220630142231658"></p><p>rebase 的主要好处是可以获得更清晰的项目历史。首先，它消除了 <code>git merge</code> 所需的不必要的合并提交；其次，正如你在上图中所看到的，rebase 会产生完美线性的项目历史记录，你可以在 <code>feature</code>分支上没有任何分叉的情况下一直追寻到项目的初始提交。</p><p>但是，针对这样的提交历史我们需要权衡其「安全性」和「可追溯性」。</p><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><ul><li>不要在公共分支使用rebase</li></ul><p>​ 因为往后放的这些 commit 都是新的,这样其他从这个公共分支拉出去的人，都需要再 rebase,相当于你 rebase 东西进来，就都是新的 commit 了</p><blockquote><p>举例说明</p></blockquote><ul><li>1-2-3 是现在的分支状态</li><li>这个时候从原来的master ,checkout出来一个prod分支</li><li>然后master提交了4.5，prod提交了6.7</li><li>这个时候master分支状态就是1-2-3-4-5，prod状态变成1-2-3-6-7</li><li>如果在prod上用rebase master ,prod分支状态就成了1-2-3-4-5-6-7</li><li>如果是merge则是 1-2-3-6-7--8 .............. |<em>4-5</em>|</li><li>会出来一个8，这个8的提交就是把4-5合进来的提交</li></ul><h4 id="rebase-和-merge-的基本原则" tabindex="-1"><code>rebase</code> 和 <code>merge</code> 的基本原则 <a class="header-anchor" href="#rebase-和-merge-的基本原则" aria-label="Permalink to &quot;`rebase` 和 `merge` 的基本原则&quot;">​</a></h4><p>1，下游分支更新上游分支内容的时候使用 <code>rebase</code></p><p>2，上游分支合并下游分支内容的时候使用 <code>merge</code></p><p>例如现有上游分支 master，基于 master 分支拉出来一个开发分支 dev，在 dev 上开发了一段时间后要把 master 分支提交的新内容更新到 dev 分支，此时切换到 dev 分支，使用 <code>git rebase master</code></p><p>等 dev 分支开发完成了之后，要合并到上游分支 master 上的时候，切换到 master 分支，使用 <code>git merge dev</code></p>',397),cs=[ps];function rs(is,ds,gs,us,hs,ys){return a(),e("div",null,cs)}const ks=s(ts,[["render",rs]]);export{bs as __pageData,ks as default};
