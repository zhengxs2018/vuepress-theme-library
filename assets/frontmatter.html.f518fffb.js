import{r as t,o as l,c as o,a as s,b as e,F as c,d as n,e as p}from"./app.551d3866.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s("h1",{id:"frontmatter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),n(" Frontmatter")],-1),k=n("\u672C\u4E3B\u9898\u7EE7\u627F\u4E8E\u9ED8\u8BA4\u4E3B\u9898\uFF0C\u652F\u6301\u9ED8\u8BA4\u4E3B\u9898\u7684\u6240\u6709 "),b={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},m=n("Frontmatter"),d=n(" \u914D\u7F6E\u3002"),g=p(`<h2 id="\u6240\u6709\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u9875\u9762" aria-hidden="true">#</a> \u6240\u6709\u9875\u9762</h2><h3 id="sidetoc" tabindex="-1"><a class="header-anchor" href="#sidetoc" aria-hidden="true">#</a> sideToc</h3><p>\u662F\u5426\u542F\u7528\u4FA7\u8FB9\u680F\u76EE\u5F55</p><ul><li>\u7C7B\u578B: <code>boolean</code></li></ul><p><strong>\u793A\u4F8B</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">sideToc</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># \u5173\u95ED\u672C\u9875\u9762\u7684\u4FA7\u8FB9\u680F\u76EE\u5F55</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u53C2\u8003</strong></p><ul><li><a href="../guide/config#sideToc">\u914D\u7F6E &gt; sideToc</a></li></ul><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3><p>\u662F\u5426\u542F\u7528\u8BC4\u8BBA\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code></p><p><strong>\u7C7B\u578B</strong>: <code>boolean</code></p><p><strong>\u793A\u4F8B</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">comment</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># \u5173\u95ED\u672C\u9875\u9762\u7684\u8BC4\u8BBA\u529F\u80FD</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u53C2\u8003</strong></p><ul><li><a href="../guide/config#%E5%90%AF%E7%94%A8%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD">\u542F\u7528\u8BC4\u8BBA\u529F\u80FD</a></li></ul><h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h2>`,16),h=n("\u4E3B\u9898\u652F\u6301\u6240\u6709\u9ED8\u8BA4\u4E3B\u9898\u7684 "),y={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},f=n("\u9996\u9875\u914D\u7F6E"),_=n("\u3002"),v=p(`<h3 id="sections" tabindex="-1"><a class="header-anchor" href="#sections" aria-hidden="true">#</a> sections</h3><p>\u62D3\u5C55\u7684\u9996\u9875\u5B57\u6BB5</p><p><strong>\u7C7B\u578B</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Section</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  tagline<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  surface<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// \u663E\u793A\u6D45\u767D\u7070\u80CC\u666F</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u529F\u80FD\u7279\u6027</span>
<span class="token keyword">interface</span> <span class="token class-name">FeaturesSection</span> <span class="token keyword">extends</span> <span class="token class-name">Section</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;feature&#39;</span>
  items<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span>
    details<span class="token operator">:</span> <span class="token builtin">string</span>
    link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u89E3\u51B3\u65B9\u6848</span>
<span class="token keyword">interface</span> <span class="token class-name">SolutionsSection</span> <span class="token keyword">extends</span> <span class="token class-name">Section</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;solutions&#39;</span>
  items<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span>
    details<span class="token operator">:</span> <span class="token builtin">string</span>
    image<span class="token operator">:</span> <span class="token builtin">string</span>
    link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528\u6237\u6848\u4F8B</span>
<span class="token keyword">interface</span> <span class="token class-name">UserCasesSection</span> <span class="token keyword">extends</span> <span class="token class-name">Section</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;userCases&#39;</span>
  items<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token builtin">string</span>
    alt<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76EE\u524D\u4EC5\u652F\u6301\u8FD9\u4E09\u79CD</span>
<span class="token keyword">type</span> <span class="token class-name">Sections</span> <span class="token operator">=</span> <span class="token punctuation">(</span>FeaturesSection <span class="token operator">|</span> SolutionsSection <span class="token operator">|</span> UserCasesSection<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p><strong>\u793A\u4F8B</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">sections</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> features
    <span class="token key atrule">title</span><span class="token punctuation">:</span> \u529F\u80FD\u8BF4\u660E
    <span class="token key atrule">tagline</span><span class="token punctuation">:</span> \u529F\u80FD\u4EAE\u70B9
    <span class="token key atrule">surface</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u5DE5\u7A0B\u89C4\u8303
        <span class="token key atrule">details</span><span class="token punctuation">:</span> \u4ECE\u76EE\u5F55\u7EC4\u7EC7\u89C4\u8303\u5230\u4EE3\u7801\u98CE\u683C\uFF0C\u96C6\u6210\u4E86\u5927\u91CF\u9879\u76EE\u5B9E\u8DF5\u7684\u7814\u53D1\u89C4\u8303
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u5F00\u7BB1\u5373\u7528
        <span class="token key atrule">details</span><span class="token punctuation">:</span> \u652F\u6301 TypeScript/PostCSS/<span class="token punctuation">...</span> \u7B49\u5DE5\u7A0B\u80FD\u529B\uFF0C\u5177\u5907\u826F\u597D\u7684\u7C7B\u578B\u63D0\u793A
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u66F4\u591A
        <span class="token key atrule">details</span><span class="token punctuation">:</span> \u5C3D\u60C5\u671F\u5F85
        <span class="token key atrule">disabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> solutions
    <span class="token key atrule">title</span><span class="token punctuation">:</span> \u9886\u57DF\u89E3\u51B3\u65B9\u6848
    <span class="token key atrule">tagline</span><span class="token punctuation">:</span> \u7B80\u77ED\u63CF\u8FF0\u4E0B\u4F18\u52BF
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u65B9\u6848\u4E00
        <span class="token key atrule">details</span><span class="token punctuation">:</span> \u65B9\u6848\u8BF4\u660E
        <span class="token key atrule">image</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//ice.work/img/solution_03.png
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u65B9\u6848\u4E8C
        <span class="token key atrule">details</span><span class="token punctuation">:</span> \u65B9\u6848\u8BF4\u660E
        <span class="token key atrule">image</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//ice.work/img/solution_03.png
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> userCases
    <span class="token key atrule">title</span><span class="token punctuation">:</span> \u8C01\u5728\u4F7F\u7528
    <span class="token key atrule">tagline</span><span class="token punctuation">:</span> \u7B80\u77ED\u63CF\u8FF0\u4E0B\u670D\u52A1\u8303\u56F4
    <span class="token key atrule">surface</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">logo</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png
        <span class="token key atrule">alt</span><span class="token punctuation">:</span> Vue.js <span class="token punctuation">-</span> The Progressive JavaScript Framework
      <span class="token punctuation">-</span> <span class="token key atrule">logo</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png
        <span class="token key atrule">alt</span><span class="token punctuation">:</span> Vue.js <span class="token punctuation">-</span> The Progressive JavaScript Framework
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,6);function x(S,w){const a=t("ExternalLinkIcon");return l(),o(c,null,[u,s("p",null,[k,s("a",b,[m,e(a)]),d]),g,s("p",null,[h,s("a",y,[f,e(a)]),_]),v],64)}var F=r(i,[["render",x]]);export{F as default};
