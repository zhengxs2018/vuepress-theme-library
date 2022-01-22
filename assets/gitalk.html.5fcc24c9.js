import{r as e,o as l,c as r,a as n,b as s,w as i,F as u,d as a,e as p}from"./app.6f3fbe7a.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=n("h1",{id:"gitalk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitalk","aria-hidden":"true"},"#"),a(" Gitalk")],-1),g=n("blockquote",null,[n("p",null,"\u5C1A\u672A\u53D1\u5E03\uFF0C\u6B63\u5728\u79EF\u6781\u5F00\u53D1\u4E2D")],-1),m=n("a",{class:"npm-badge",href:"http://npmjs.com/package/@zhengxs/vuepress-plugin-gitalk",title:"@zhengxs/vuepress-plugin-gitalk",target:"_blank",rel:"noopener noreferrer"},[n("img",{src:"https://badgen.net/npm/v/@zhengxs/vuepress-plugin-gitalk/latest?label=@zhengxs/vuepress-plugin-gitalk",alt:"@zhengxs/vuepress-plugin-gitalk@latest"})],-1),_={href:"https://gitalk.github.io/",target:"_blank",rel:"noopener noreferrer"},b=a("Gitalk"),f=a(" \u4E00\u4E2A\u57FA\u4E8E Github Issue \u548C Preact \u5F00\u53D1\u7684\u8BC4\u8BBA\u63D2\u4EF6\u3002"),x=p(`<p><code>@zhengxs/vuepress-plugin-gitalk</code> \u662F\u5BF9 Gitalk \u7684 vuepress \u529F\u80FD\u96C6\u6210\u63D2\u4EF6\u3002</p><p>\u8BE5\u63D2\u4EF6\u5DF2\u7ECF\u96C6\u6210\u5230\u4E3B\u9898\u4E2D\uFF0C\u4F46\u652F\u6301\u72EC\u7ACB\u4F7F\u7528\u3002</p><h2 id="\u672A\u6765\u8BA1\u5212" tabindex="-1"><a class="header-anchor" href="#\u672A\u6765\u8BA1\u5212" aria-hidden="true">#</a> \u672A\u6765\u8BA1\u5212</h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> \u652F\u6301 markdown \u8BED\u6CD5\u7684\u65B9\u5F0F\u4F7F\u7528\uFF0C\u5982 <code>[[gitalk]]</code></li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># With NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @zhengxs/vuepress-plugin-gitalk --save-dev

<span class="token comment"># With Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @zhengxs/vuepress-plugin-gitalk --dev

<span class="token comment"># With PNPM</span>
$ <span class="token function">pnpm</span> <span class="token function">add</span> @zhengxs/vuepress-plugin-gitalk --dev
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2>`,7),v=a("\u5982\u679C\u662F\u4F7F\u7528\u4E3B\u9898\uFF0C\u8BF7\u5728\u4E3B\u9898\u4E2D "),y=a("\u542F\u7528\u8BC4\u8BBA\u529F\u80FD"),z=a("\u3002"),G=n("h3",{id:"\u521D\u59CB\u5316",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521D\u59CB\u5316","aria-hidden":"true"},"#"),a(" \u521D\u59CB\u5316")],-1),w=n("p",null,"\u9996\u5148\uFF0C\u60A8\u9700\u8981\u9009\u62E9\u4E00\u4E2A\u516C\u5171 github \u5B58\u50A8\u5E93\uFF08\u5DF2\u5B58\u5728\u6216\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 github \u5B58\u50A8\u5E93\uFF09\u7528\u4E8E\u5B58\u50A8\u8BC4\u8BBA\uFF0C",-1),q=a("\u7136\u540E\u9700\u8981\u521B\u5EFA GitHub Application\uFF0C\u5982\u679C\u6CA1\u6709 "),E={href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},j=a("\u70B9\u51FB\u8FD9\u91CC\u7533\u8BF7"),A=a("\uFF0CAuthorization callback URL \u586B\u5199\u5F53\u524D\u4F7F\u7528\u63D2\u4EF6\u9875\u9762\u7684\u57DF\u540D\u3002"),I=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;@zhengxs/vuepress-plugin-gitalk&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">clientID</span><span class="token operator">:</span> <span class="token string">&#39;3f2d8a4eeea9aed094c1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub Application Client ID</span>
      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> <span class="token string">&#39;9fd36....8716055&#39;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub Application Client Secret</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;vuepress-theme-library&#39;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub repository</span>
      <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token string">&#39;zhengxs2018&#39;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub repository \u6240\u6709\u8005\uFF0C\u53EF\u4EE5\u662F\u4E2A\u4EBA\u6216\u8005\u7EC4\u7EC7\u3002</span>
      <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;zhengxs2018&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u5BF9\u8FD9\u4E2A repository \u6709\u5199\u6743\u9650\u7684\u7528\u6237</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3" aria-hidden="true">#</a> \u6E32\u67D3</h3><p>\u6682\u53EA\u652F\u6301\u7EC4\u4EF6\u7684\u65B9\u5F0F\u4F7F\u7528</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> \u6807\u9898</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Twikoo</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2>`,5),N=a("\u652F\u6301 "),P={href:"https://github.com/gitalk/gitalk/blob/master/readme-cn.md#%E8%AE%BE%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},B=a("Gitalk"),F=a(" \u6240\u6709\u7684\u914D\u7F6E\u9879."),H=p(`<p>\u9875\u9762\u7684\u552F\u4E00\u6027\u6807\u8BC6\u9ED8\u8BA4\u4E3A <code>formatter.permalink || route.path</code></p><p><strong>\u914D\u7F6E\u7684\u4F18\u5148\u7EA7</strong></p><div class="language-markdown ext-md"><pre class="language-markdown"><code>formatter &gt; props &gt; \u63D2\u4EF6\u914D\u7F6E
</code></pre></div><p>Formatter \u5B9A\u4E49\u7684\u4F18\u5148\u7EA7\u6700\u9AD8\u3002</p><h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h3><p>\u5141\u8BB8\u4F7F\u7528 Frontmatter \u914D\u7F6E</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">gitalk</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> formatter.permalink <span class="token punctuation">|</span><span class="token punctuation">|</span> route.path <span class="token comment"># \u9875\u9762\u7684\u552F\u4E00\u6807\u8BC6</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> \u6807\u9898
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Gitalk<span class="token punctuation">]</span>
  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">-1</span> <span class="token comment"># \u9875\u9762\u7684 issue ID \u6807\u8BC6</span>
<span class="token punctuation">---</span>
</code></pre></div><h3 id="\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u7EC4\u4EF6 Props</h3><p>\u53EF\u4EE5\u901A\u8FC7 Props \u6765\u8FDB\u884C\u81EA\u5B9A\u4E49</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Twikoo</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxxx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6807\u9898<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,10);function L(C,D){const t=e("ExternalLinkIcon"),o=e("RouterLink"),c=e("Gitalk");return l(),r(u,null,[h,g,m,n("p",null,[n("a",_,[b,s(t)]),f]),x,n("p",null,[v,s(o,{to:"/reference/theme-config.html#gitalk"},{default:i(()=>[y]),_:1}),z]),G,w,n("p",null,[q,n("a",E,[j,s(t)]),A]),I,n("p",null,[N,n("a",P,[B,s(t)]),F]),H,s(c,{number:1})],64)}var S=k(d,[["render",L]]);export{S as default};
