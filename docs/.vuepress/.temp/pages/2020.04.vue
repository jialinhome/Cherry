<template><h1 id="_20200409"><a class="header-anchor" href="#_20200409">#</a> 20200409</h1>
<h2 id="requestanimationframe-的使用"><a class="header-anchor" href="#requestanimationframe-的使用">#</a> requestAnimationFrame 的使用</h2>
<h3 id="参考链接"><a class="header-anchor" href="#参考链接">#</a> 参考链接</h3>
<p><a href="https://juejin.im/post/5a82f0626fb9a06358657c9c" target="_blank" rel="noopener noreferrer">你需要知道的requestAnimationFrame<OutboundLink/></a></p>
<h3 id="要点"><a class="header-anchor" href="#要点">#</a> 要点</h3>
<p>顾名思义，这是针对动画的一个API，这个API所解决的问题主要是避免JS操作动画时执行的不连贯。</p>
<p>比如将一个div从0宽度增加到500的宽度，我们可以用setInterval来实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>myDiv2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        myDiv2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>myDiv2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span>
        myDiv2<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>myDiv2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token string">'%'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>我们希望每16毫秒执行一次宽度的运算操作，但是由于js是单线程的，其特殊的事件循环并不能保证setInterval能够在16毫秒内执行，所以就会造成动画运行起来的卡顿。</p>
<p>为了保证该函数可以在16毫秒内执行，我们可以使用requestAnimationFrame进行替换setInterval，实现如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
timer <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>myDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        myDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>myDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span>  <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span>
        myDiv<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>myDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token string">'%'</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="深度优先搜索"><a class="header-anchor" href="#深度优先搜索">#</a> 深度优先搜索</h2>
<p><img src="@source/data/bfs_dfs.gif" alt="DFS BFS"></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TreeItem</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    children<span class="token operator">:</span> TreeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">depthFirstSearchWithRecursive</span><span class="token punctuation">(</span>source<span class="token operator">:</span> TreeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span>data<span class="token operator">:</span> TreeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">depthFirstSearchWithNoRecursive</span><span class="token punctuation">(</span>source<span class="token operator">:</span> TreeItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>source<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>i <span class="token operator">=></span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><a href="https://segmentfault.com/a/1190000004620352" target="_blank" rel="noopener noreferrer">参考<OutboundLink/></a></p>
<p>对于二叉树来说，假设有如下二叉树：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  left<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">1.1</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">1.1</span><span class="token number">.1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">1.1</span><span class="token number">.2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  right<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
      vlaue<span class="token operator">:</span> <span class="token number">1.2</span><span class="token number">.1</span>
    <span class="token punctuation">}</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">1.2</span><span class="token number">.2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>对于二叉树，前序优先遍历，中序优先遍历与后序优先遍历都属于深度优先遍历。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// 前序优先遍历</span>
<span class="token keyword">function</span> <span class="token constant">DLR</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    reutrn <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">DLR</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">DLR</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中序遍历</span>
<span class="token keyword">function</span> <span class="token constant">LDR</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    reutrn <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">DLR</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">DLR</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 后序遍历</span>
<span class="token keyword">function</span> <span class="token constant">LRD</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    reutrn <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">DLR</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">DLR</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="广度优先搜索-广度优先搜索"><a class="header-anchor" href="#广度优先搜索-广度优先搜索">#</a> 广度优先搜索/广度优先搜索</h2>
<p><strong>它是什么？</strong></p>
<p>对于一颗树来说，广度优先搜索是指从数的第一层（根节点）开始，自上至下逐层遍历，在同一层上，按照自左到右逐层遍历。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TreeItem</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    children<span class="token operator">:</span> TreeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-variable function">bfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>source<span class="token operator">:</span> TreeItem<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>source<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> item <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>i <span class="token operator">=></span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="盒模型"><a class="header-anchor" href="#盒模型">#</a> 盒模型</h2>
<p>W3C标准盒模型与IE盒模型</p>
<p>box-sizing:</p>
<p>标准盒模型 -- 宽度 = content的宽度
IE盒模型 -- 宽度 = content的宽度 + padding的宽度 + border的宽度</p>
<p>content-box -- width为content的宽度</p>
<p>padding-box -- width为content的宽度 + 左右padding</p>
<p>border-box -- width为content的宽度 + 左右padding + 左右border</p>
<h2 id="bfc-块级格式化上下文"><a class="header-anchor" href="#bfc-块级格式化上下文">#</a> BFC--块级格式化上下文</h2>
<p>BFC的创建方法</p>
<ol>
<li>根元素</li>
<li>浮动元素</li>
<li>绝对定位元素(position：absolute或fixed)</li>
<li>行内块级元素(display: inline-block)</li>
<li>表格单元格(display: table-cell)</li>
<li>overflow的值不为visible的元素</li>
<li>弹性盒 flex boxes(元素的display: flex)</li>
</ol>
<p>BFC特性</p>
<ol>
<li>内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）；</li>
<li>处于同一个BFC中的元素相互影响，可能会发生margin collapse；</li>
<li>每个元素的margin box的左边，与容器块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此；</li>
<li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然；</li>
<li>计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算；</li>
<li>浮动盒区域不叠加到BFC上；</li>
</ol>
<p>BFC作用</p>
<ol>
<li>清除浮动</li>
<li>左右两栏布局</li>
</ol>
<p><a href="https://zhuanlan.zhihu.com/p/25321647" target="_blank" rel="noopener noreferrer">参考<OutboundLink/></a></p>
<h2 id="_20200412"><a class="header-anchor" href="#_20200412">#</a> 20200412</h2>
<h3 id="typescript-i操作符-非空断言标志符"><a class="header-anchor" href="#typescript-i操作符-非空断言标志符">#</a> typescript i操作符--非空断言标志符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  port<span class="token operator">:</span> <span class="token number">8000</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 如果没有非空断言，需要对config进行判断</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这样用就可以了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token operator">!</span><span class="token punctuation">.</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="webpack-构建流程"><a class="header-anchor" href="#webpack-构建流程">#</a> webpack 构建流程</h3>
<ul>
<li>解析配置参数--解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。</li>
<li>注册插件--注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。</li>
<li>构建抽象语法树AST--从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。</li>
<li>对不同文件用不同的loader转换--在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。</li>
<li>生成代码块--递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。</li>
<li>输出到文件系统--输出所有chunk到文件系统。</li>
</ul>
<h3 id="编写babel插件"><a class="header-anchor" href="#编写babel插件">#</a> 编写babel插件</h3>
<p>babel运行原理</p>
<ol>
<li>babel将js代码转换为AST</li>
<li>babel的各种plugin对AST进行转换</li>
<li>输出新的代码字符串</li>
</ol>
<p>编写babel插件，就是处理babel在对AST进行转换时的钩子函数，对相应的节点进行操作。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 将 bad 转为 good</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> types<span class="token operator">:</span> babelTypes <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'deadly-simple-plugin-example'</span><span class="token punctuation">,</span>
    visitor<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'bad'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'good'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// index.js </span>
<span class="token keyword">let</span> bad <span class="token operator">=</span> <span class="token string">'oh'</span><span class="token punctuation">;</span>
<span class="token operator">></span> <span class="token keyword">let</span> goog <span class="token operator">=</span> <span class="token string">'oh'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 给async函数包裹try-catch</span>

<span class="token keyword">function</span> <span class="token function">alreadyWrapped</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span>t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> body <span class="token operator">=</span> node<span class="token punctuation">.</span>body<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">return</span> body <span class="token operator">&amp;&amp;</span> body<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> t<span class="token punctuation">.</span><span class="token function">isTryStatement</span><span class="token punctuation">(</span>body<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">wrap</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> callback <span class="token operator">=</span> <span class="token string">'asyncError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token string">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
              <span class="token string">"block"</span><span class="token operator">:</span> node<span class="token punctuation">,</span>
              <span class="token string">"finalizer"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
              <span class="token string">"handler"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token string">"body"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token string">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                          <span class="token punctuation">{</span>
                              <span class="token string">"expression"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                  <span class="token string">"arguments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                      <span class="token punctuation">{</span>
                                          <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"ThisExpression"</span>
                                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                      <span class="token punctuation">{</span>
                                          <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
                                          <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span>
                                      <span class="token punctuation">}</span>
                                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                                  <span class="token string">"callee"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                      <span class="token string">"computed"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                                      <span class="token string">"object"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                          <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">'console'</span><span class="token punctuation">,</span>
                                          <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span>
                                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                      <span class="token string">"property"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                          <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
                                          <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span>
                                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                      <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"MemberExpression"</span>
                                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                  <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"CallExpression"</span>
                              <span class="token punctuation">}</span><span class="token punctuation">,</span>
                              <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"ExpressionStatement"</span>
                          <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"BlockStatement"</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token string">"param"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
                      <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"CatchClause"</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"TryStatement"</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"BlockStatement"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">babel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> t <span class="token operator">=</span> babel<span class="token punctuation">.</span>types<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'async-wrap'</span><span class="token punctuation">,</span>
    visitor<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">Function</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span>state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>opts <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>opts<span class="token punctuation">[</span><span class="token string">'addAsyncTry'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span>  node<span class="token operator">=</span> path<span class="token punctuation">.</span>node
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>async <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">alreadyWrapped</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token function">wrap</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 输入</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">printFile</span> <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> contents <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readFileAsync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">printFile</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> contents <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readFileAsync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h2 id="_20200414"><a class="header-anchor" href="#_20200414">#</a> 20200414</h2>
<h3 id="面向对象变成solid原则"><a class="header-anchor" href="#面向对象变成solid原则">#</a> 面向对象变成SOLID原则</h3>
<p>S(单一功能原则): 认为对象应该仅具有一种单一功能的概念。
O(开闭原则): 认为“软件体应该是对于扩展开放的，但是对于修改封闭的”的概念。
L(里氏替换原则): 认为“程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换的”的概念。
参考契约式设计。
I(接口隔离原则): 认为“多个特定客户端接口要好于一个宽泛用途的接口”[5] 的概念。
D(依赖反转原则): 认为一个方法应该遵从“依赖于抽象而不是一个实例”[5] 的概念。
依赖注入是该原则的一种实现方式。</p>
<h2 id="_20200416"><a class="header-anchor" href="#_20200416">#</a> 20200416</h2>
<h3 id="xss-跨站脚本攻击"><a class="header-anchor" href="#xss-跨站脚本攻击">#</a> XSS(跨站脚本攻击)</h3>
<p>类型</p>
<p>1.反射型XSS</p>
<p>反射型XSS只是简单的把用户输入的数据“反射”给浏览器，一种理解是有恶意代码放在url上，然后url的代码被插入到HTML中执行。</p>
<p>2.储存型XSS</p>
<p>储存型XSS会把用户输入的数据“储存”在服务器端。</p>
<p>防御</p>
<p>就是在输入的时候没有做严格的过滤，而在输出的时候，也没有进行检查，转义，替换等</p>
<h2 id="_20200420"><a class="header-anchor" href="#_20200420">#</a> 20200420</h2>
<h3 id="控制反转-ioc-与依赖注入-di"><a class="header-anchor" href="#控制反转-ioc-与依赖注入-di">#</a> 控制反转(IOC)与依赖注入(DI)</h3>
<p>大多数面向对象编程语言，在调用一个类的时候，先要实例化这个类，生成一个对象。如果你在写一个类，过程中要调用到很多其它类，甚至这里的其它类，也要“依赖”于更多其它的类，那么可以想象，你要进行多少次实例化。这就是“依赖”的意思。依赖注入，全称是“依赖注入到容器”， 容器（IOC容器）是一个设计模式，它也是个对象，你把某个类（不管有多少依赖关系）放入这个容器中，可以“解析”出这个类的实例。所以依赖注入就是把有依赖关系的类放入容器（IOC容器）中，然后解析出这个类的实例。仅此而已。</p>
<p>作者：唐思
链接：https://www.zhihu.com/question/32108444/answer/54773302
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
<h3 id="_2020-04-21"><a class="header-anchor" href="#_2020-04-21">#</a> 2020.04.21</h3>
<h3 id="jwt-json-web-token"><a class="header-anchor" href="#jwt-json-web-token">#</a> JWT(JSON Web Token)</h3>
<p>JWT是最流行的跨域认证解决方案，用于用户认证。</p>
<p>JWT原理：</p>
<p>服务器认证之后，会生成一个JSON对象，返回给用户，用户再次访问的时候，都要发回这个对象，服务器只靠这个对象来验证用户身份。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 就类似于这样的一个JSON</span>
<span class="token punctuation">{</span>
  <span class="token string">"姓名"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token string">"角色"</span><span class="token operator">:</span> <span class="token string">"管理员"</span><span class="token punctuation">,</span>
  <span class="token string">"到期时间"</span><span class="token operator">:</span> <span class="token string">"2018年7月1日0点0分"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>用户会收到这样一个字符串，分为三部分：<code>Header(头部).Payload(负载).Signature(签名)</code></p>
<p>为了防止数据篡改，签名部分会用只有服务器才有的秘钥进行加密处理。</p>
<h2 id="_2020-04-22"><a class="header-anchor" href="#_2020-04-22">#</a> 2020.04.22</h2>
<h3 id="orm-object-relational-mapping-对象关系映射"><a class="header-anchor" href="#orm-object-relational-mapping-对象关系映射">#</a> <a href="http://www.ruanyifeng.com/blog/2019/02/orm-tutorial.html" target="_blank" rel="noopener noreferrer">ORM(Object Relational Mapping 对象关系映射)<OutboundLink/></a></h3>
<p>简单说，ORM 就是通过实例对象的语法，完成关系型数据库的操作的技术，是&quot;对象-关系映射&quot;（Object/Relational Mapping） 的缩写。</p>
<p>映射关系：</p>
<p>数据库的表（table） --&gt; 类（class）</p>
<p>记录（record，行数据）--&gt; 对象（object）</p>
<p>字段（field）--&gt; 对象的属性（attribute）</p>
<h3 id="拉取-pull-推送-push"><a class="header-anchor" href="#拉取-pull-推送-push">#</a> 拉取（pull） &amp; 推送（push）</h3>
<p>学习RxJS的过程中，接触到了拉取与推送协议，用来描述生产者（Producer）与消费者（Consumer）如何通信</p>
<p>什么是拉取？ - 在拉取体系中，由消费者来决定何时从生产者那里接收数据。生产者本身不知道数据是何时交付到消费者手中的。
每个 JavaScript 函数都是拉取体系。函数是数据的生产者，调用该函数的代码通过从函数调用中“取出”一个单个返回值来对该函数进行消费。</p>
<p>什么是推送？ - 在推送体系中，由生产者来决定何时把数据发送给消费者。消费者本身不知道何时会接收到数据。
Promise(生产者) 将一个解析过的值传递给已注册的回调函数(消费者)，但不同于函数的是，由 Promise 来决定何时把值“推送”给回调函数。</p>
<h3 id="observable与函数的区别"><a class="header-anchor" href="#observable与函数的区别">#</a> Observable与函数的区别</h3>
<p>Observables 传递值可以是同步的，也可以是异步的。
Observable 可以随着时间的推移“返回”多个值。</p>
<h2 id="_20200424"><a class="header-anchor" href="#_20200424">#</a> 20200424</h2>
<h3 id="对-dirname-filename-process-cwd-的总结"><a class="header-anchor" href="#对-dirname-filename-process-cwd-的总结">#</a> 对__dirname，__filename，process.cwd()，./的总结</h3>
<p>__dirname： 获得当前执行文件所在目录的完整目录名
__filename： 获得当前执行文件的带有完整绝对路径的文件名
process.cwd()：获得当前执行node命令时候的文件夹目录名
./： 不使用require时候，./与process.cwd()一样，使用require时候，与__dirname一样</p>
<h3 id="path-resolve-path-join"><a class="header-anchor" href="#path-resolve-path-join">#</a> <a href="https://juejin.im/post/5cfc96c5f265da1b8333805a" target="_blank" rel="noopener noreferrer">path.resolve path.join<OutboundLink/></a></h3>
<p>1、join是把各个path片段连接在一起， resolve把‘／’当成根目录</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/a'</span><span class="token punctuation">,</span> <span class="token string">'/b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// /a/b</span>
path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'/a'</span><span class="token punctuation">,</span> <span class="token string">'/b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// /b</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>2、resolve在传入非/路径时，会自动加上当前目录形成一个绝对路径，而join仅仅用于路径拼接</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 当前路径为</span>
<span class="token operator">/</span>Users<span class="token operator">/</span>xiao<span class="token operator">/</span>work<span class="token operator">/</span>test
path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'..'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a/d</span>
path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'..'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// /Users/xiao/work/test/a/d</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_20200426"><a class="header-anchor" href="#_20200426">#</a> 20200426</h2>
<h3 id="array-prototype-indexof-vs-array-prototype-include"><a class="header-anchor" href="#array-prototype-indexof-vs-array-prototype-include">#</a> Array.prototype.indexof() vs Array.prototype.include()</h3>
<p>include()于ES7新增</p>
<p>语法：<code>arr.includes(element, fromIndex = 0)</code></p>
<p><code>element</code> 为需要查找的元素。</p>
<p><code>fromIndex</code> 表示从该索引位置开始查找 element，缺省为0，它是正向查找，即从索引处往数组末尾查找。</p>
<p>indexOf() 方法用于查找元素在数组中第一次出现时的索引，如果没有，则返回-1</p>
<p>语法：arr.indexOf(element, fromIndex=0)</p>
<p>element 为需要查找的元素。</p>
<p>fromIndex 为开始查找的位置，缺省默认为0。</p>
<p>区别：</p>
<p>二者除了返回值有区别外，还有一点需要注意的是，include方法可以查找NaN，但是include不行，由此可以引申来看，javascript中比较特殊的东西就是NaN，需要时刻注意。</p>
<p>如何判断是否是NaN？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">!==</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="哈希算法"><a class="header-anchor" href="#哈希算法">#</a> <a href="https://zhuanlan.zhihu.com/p/37165658" target="_blank" rel="noopener noreferrer">哈希算法<OutboundLink/></a></h3>
<p>哈希算法(Hash Algorithm)又称散列算法、散列函数、哈希函数，是一种从任何一种数据中创建小的数字“指纹”的方法。</p>
<p>哈希算法通常有以下几个特点：</p>
<ol>
<li>正像快速：原始数据可以快速计算出哈希值</li>
<li>逆向困难：通过哈希值基本不可能推导出原始数据</li>
<li>输入敏感：原始数据只要有一点变动，得到的哈希值差别很大</li>
<li>冲突避免：很难找到不同的原始数据得到相同的哈希值</li>
</ol>
<p>哈希算法主要有MD4、MD5、SHA。</p>
<h2 id="_20200428"><a class="header-anchor" href="#_20200428">#</a> 20200428</h2>
<h3 id="react-生命周期"><a class="header-anchor" href="#react-生命周期">#</a> React 生命周期</h3>
<p>常用生命周期：</p>
<p><img src="@source/data/react_common_lifecycles.png" alt="常用生命周期"></p>
<p>不常用生命周期：</p>
<p><img src="@source/data/react_less_common_lifecycles.png" alt="不常用生命周期"></p>
<p><em>挂载时执行顺序：</em></p>
<p><code>constructor()</code></p>
<p><code>static getDerivedStateFromProps()</code></p>
<p><code>render()</code></p>
<p><code>componentDidMount()</code></p>
<p><em>更新时执行顺序：</em></p>
<p><code>static getDerivedStateFromProps()</code></p>
<p><code>shouldComponentUpdate()</code></p>
<p><code>render()</code></p>
<p><code>getSnapshotBeforeUpdate()</code></p>
<p><code>componentDidUpdate()</code></p>
<p><em>卸载时执行顺序：</em></p>
<p><code>componentWillUnmount()</code></p>
<p><em>错误处理:</em></p>
<p>当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：</p>
<p><code>static getDerivedStateFromError()</code></p>
<p><code>componentDidCatch()</code></p>
<h3 id="react-purecomponent-vs-react-component"><a class="header-anchor" href="#react-purecomponent-vs-react-component">#</a> React.PureComponent  vs React.Component</h3>
<p>React.PureComponent实现了<code>shouldComponentUpdate()</code>方法，而后者没有实现</p>
<p>React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。</p>
<h3 id="react-memo"><a class="header-anchor" href="#react-memo">#</a> React.memo</h3>
<p>它与 React.PureComponent 非常相似，但只适用于函数组件，而不适用 class 组件。</p>
<p>如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。</p>
<h3 id="es6-扩展操作符"><a class="header-anchor" href="#es6-扩展操作符">#</a> ES6 扩展操作符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  userId<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  username<span class="token operator">:</span> <span class="token string">'maria'</span><span class="token punctuation">,</span>
  password<span class="token operator">:</span> <span class="token string">'guess'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>password<span class="token punctuation">,</span> <span class="token operator">...</span>result<span class="token punctuation">}</span> <span class="token operator">=</span> a

<span class="token comment">// 这里，result的值为</span>
<span class="token punctuation">{</span>userId<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> username<span class="token operator">:</span> <span class="token string">"maria"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_20200429"><a class="header-anchor" href="#_20200429">#</a> 20200429</h2>
<h3 id="symbol-hasinstance"><a class="header-anchor" href="#symbol-hasinstance">#</a> <code>Symbol.hasInstance</code></h3>
<p>刚刚看babel编译class为ES5，看到了一个方法，用来判断一个<code>对象</code>是不是属于某个<code>构造函数</code>，有一个<code>_instanceof</code>函数实现如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">_instanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    right <span class="token operator">!=</span> <span class="token keyword">null</span>
    <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Symbol <span class="token operator">!==</span> <span class="token string">"undefined"</span> 
    <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>right<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> left <span class="token keyword">instanceof</span> <span class="token class-name">right</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其中我们发现，有一个很怪异的关键字<code>Symbol.hasInstance</code>，不是非常常用，经过调研，Symbol.hasInstance属性指向一个内部方法，当使用<code>instanceof</code>操作符的时候，会调用这个方法。所以，我们可以通过重写这个方法，来改变instanceof操作符的行为。</p>
<p>看如下示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Even</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Even</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">instanceof</span> <span class="token class-name">Even</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token keyword">instanceof</span> <span class="token class-name">Even</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name">Even</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true 原本判断x是否为Even的实例的方法，被改成了传入的数字%2===0。所以此刻是false。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="constructor中调用super到底发生了什么"><a class="header-anchor" href="#constructor中调用super到底发生了什么">#</a> <code>constructor</code>中调用<code>super</code>到底发生了什么？</h3>
<p>比如有如下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span>age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  name <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  age <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello Word'</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Xiaohong</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">'xiaohong'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
  
  <span class="token function">apeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I am xiaohong'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>上面的代码中，Xiaohong类的构造函数里调用了super()，要想理解super，就需要知道这段代码执行的流程，好在我们可以把ES6的代码翻译成ES5，这就可以方便看出这段代码是如何执行的了。</p>
<p>经过babel编译后的代码，可以看<a href="./data/study.super.js">这里</a></p>
<p>以上的代码，还是有一些复杂了，来自己写一个吧！</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">speak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">speak</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello Word'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Xiaohong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Xiaohong</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>所以，由此来看，super()所做的事情无非就是将当前对象的this指向父构造函数，从而将父类构造函数中的属性据为己有。</p>
</template>