<template><h1 id="_2019-12-12"><a class="header-anchor" href="#_2019-12-12">#</a> 2019-12-12</h1>
<h2 id="chrome-devtools调试小技巧"><a class="header-anchor" href="#chrome-devtools调试小技巧">#</a> <a href="https://zhuanlan.zhihu.com/p/42059158" target="_blank" rel="noopener noreferrer">Chrome DevTools调试小技巧<OutboundLink/></a></h2>
<p>刚才看到了个不错的浏览器调试小技巧，主要包括以下几点：</p>
<ol>
<li>将选中元素滚动到视口内</li>
<li>将请求保存为一个fetch请求，可以copy到console面板打印</li>
<li>阻塞一个请求</li>
<li>DOM断点调试</li>
<li>截屏(cmd + shift + p）</li>
</ol>
<h2 id="_0-1-0-2-0-30000000000000004"><a class="header-anchor" href="#_0-1-0-2-0-30000000000000004">#</a> <a href="https://juejin.im/post/5cf667b6f265da1bc23f6536" target="_blank" rel="noopener noreferrer">0.1+0.2=0.30000000000000004?<OutboundLink/></a></h2>
<p>javascript的number类型在计算机上采用双精度格式存储，占用64个比特位，分别是1个符号位、11个指数为和52个尾数位。这里就存在一个越界问题，也就是说如果数字的二进制形式超过了52位，计算机就会采用一定的策略进行截取，以致数字丢失了精度。</p>
<p>这里，0.1与0.2的二进制表示都是无限的，所以计算机会进行截取，导致失真。</p>
<h2 id="json-stringify"><a class="header-anchor" href="#json-stringify">#</a> <a href="https://juejin.im/post/5decf09de51d45584d238319?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">JSON.stringify()<OutboundLink/></a></h2>
<p>平时用的<code>JSON.stringify()</code>其实有很多细节需要注意，比如当<code>undefined</code>、<code>Symbol</code>以及<code>function</code>为value值的情况下，序列化的结果如何表现，这个要是没接触过肯定不会知道。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token string">"aaa"</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  c<span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"dd"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  d<span class="token operator">:</span> <span class="token string">"ddd"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：？</span>
<span class="token comment">// "{"a":"aaa","d":"ddd"}"</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"aaa"</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'dd'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"eee"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 输出：？</span>

<span class="token comment">// "["aaa",null,null,null,"eee"]"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>通过上面的代码，可以看出端倪。</p>
<h1 id="_2019-12-13"><a class="header-anchor" href="#_2019-12-13">#</a> 2019-12-13</h1>
<h2 id="尝试系统中引入react-hot-loader-以失败告终😿"><a class="header-anchor" href="#尝试系统中引入react-hot-loader-以失败告终😿">#</a> 尝试系统中引入react-hot-loader，以失败告终😿</h2>
<p>本打算引入react-hot-loader，但是没有生效，试了很久，初步发现可能是引入顺序的问题，因为dll会先于react-hot-loader引入，而且react-hot-loader也快要被废弃了，索性就不引用了吧</p>
<h2 id="script-error-复现"><a class="header-anchor" href="#script-error-复现">#</a> <a href="https://juejin.im/post/5df3522751882512302db3ca?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">script error 复现<OutboundLink/></a></h2>
<ol>
<li>录制视频</li>
</ol>
<p>a) canvas 截取图片，该方法的实现思路是利用 canvas 将网页生成图片，然后缓存起来，为了使得生成的视频流畅，我们一秒中需要生成大约 25 帧，也就是需要 25 张截图，然后在出现 script error 时将缓存起来的页面图片进行上报，再在分析系统通过技术将页面浏览进行还原。</p>
<p>b) 该方法主要是记录用户页面 dom 的变化，然后在出现 script error 时将对应的记录进行上报，然后在分析系统里通过技术将页面还原。</p>
<blockquote>
<ol>
<li>进入页面，生成页面的虚拟dom全量快照；</li>
<li>运用 API：MutationObserver，记录用户变化的 dom，同时记录用户的一些行操作（click，select，input，scroll 等事件）；</li>
<li>当出现 script error 时将对应快照信息上报；</li>
<li>在分析系统中将快照与用用户的操作还原。</li>
</ol>
</blockquote>
<h1 id="_2019-12-17"><a class="header-anchor" href="#_2019-12-17">#</a> 2019-12-17</h1>
<h2 id="雨人"><a class="header-anchor" href="#雨人">#</a> 雨人</h2>
<p><img src="http://m.imeitou.com/uploads/allimg/2019071518/y4gvnjovviz.jpg" alt=""></p>
<p>我相信我爱你</p>
<p>蒙上眼手交给你</p>
<p>慢慢的安心在黑暗中</p>
<p>共有一双眼睛</p>
<p>我要不断地爱你</p>
<p>不断拼凑了自己</p>
<p>生命中所有好不好的过去</p>
<p>仿佛都在等我遇见你</p>
<h2 id="俄罗斯套娃"><a class="header-anchor" href="#俄罗斯套娃">#</a> 俄罗斯套娃</h2>
<p>刚才看Promise的实现原理，突然联想到俄罗斯套娃，这个Promise不就是一个俄罗斯套娃么，哈哈哈，一个套一个，最后还是那个娃，哎呀呀，哈哈哈。</p>
<p>俄罗斯套娃的实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> fn <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token string">'pending'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">FULFILLED</span> <span class="token operator">=</span> <span class="token string">'fulfilled'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token string">'rejected'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  that<span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  that<span class="token punctuation">.</span>err <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  that<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">PENDING</span><span class="token punctuation">;</span>
  that<span class="token punctuation">.</span>fulfilledCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存放then方法注册的回调函数</span>
  that<span class="token punctuation">.</span>rejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存放then方法注册的回调函数</span>

  <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>that<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 一旦状态改变，就不会再变</span>
      <span class="token comment">// 用异步的方式调用，确保晚于then函数执行，同时可以确保即便是在execotor中同步调用resolve，promise还是异步的</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        that<span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        that<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">FULFILLED</span><span class="token punctuation">;</span>
        that<span class="token punctuation">.</span>fulfilledCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fun</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">fun</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>that<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 一旦状态改变，就不会再变</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        that<span class="token punctuation">.</span>val <span class="token operator">=</span> err<span class="token punctuation">;</span>
        that<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">REJECTED</span><span class="token punctuation">;</span>
        that<span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fun</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">fun</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">onFulfilled<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> promise2<span class="token punctuation">;</span>

  onFulfilled <span class="token operator">=</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function-variable function">onFulfilled</span> <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  onRejected <span class="token operator">=</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function-variable function">onRejected</span> <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    that<span class="token punctuation">.</span>fulfilledCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    that<span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> promise2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h1 id="_2019-12-26"><a class="header-anchor" href="#_2019-12-26">#</a> 2019-12-26</h1>
<h2 id="家用路由器中间人劫持"><a class="header-anchor" href="#家用路由器中间人劫持">#</a> <a href="https://www.cert.pl/en/large-scale-dns-redirection-on-home-routers-for-financial-theft/" target="_blank" rel="noopener noreferrer">家用路由器中间人劫持<OutboundLink/></a></h2>
<p>刚才看了有关路由器DNS劫持中间人攻击相关原理，在此记录：</p>
<p><img src="https://www.cert.pl/wp-content/uploads/2014/02/2014-02-mitr-good.png" alt=""></p>
<p>正常：
(1). Router requests IP address of bank’s website. Gets bank’s server’s address in reponse.
(2). User connects to bank’s server.</p>
<p>被劫持：
(1). Router requests IP address of bank’s website. Gets malicious server’s address in response.
(2). User connects to malicious server.
(3). Malicious server connects to bank’s server.</p>
<h2 id="package-lock-json"><a class="header-anchor" href="#package-lock-json">#</a> <a href="https://www.zhihu.com/question/62331583" target="_blank" rel="noopener noreferrer">package-lock.json<OutboundLink/></a></h2>
<p><strong>查阅资料得知，自npm 5.0版本发布以来，npm i的规则发生了三次变化。</strong></p>
<p>1、npm 5.0.x 版本，不管package.json怎么变，npm i 时都会根据lock文件下载package-lock.json file not updated after package.json file is changed · Issue #16866 · npm/npm这个 issue 控诉了这个问题，明明手动改了package.json，为啥不给我升级包！然后就导致了5.1.0的问题...</p>
<p>2、5.1.0版本后 npm install 会无视lock文件 去下载最新的npm 然后有人提了这个issue why is package-lock being ignored? · Issue #17979 · npm/npm控诉这个问题，最后演变成5.4.2版本后的规则。</p>
<p>3、5.4.2版本后  why is package-lock being ignored? · Issue #17979 · npm/npm大致意思是，如果改了package.json，且package.json和lock文件不同，那么执行<code>npm i</code>时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock。如果两者是同一状态，那么执行<code>npm i </code>都会根据lock下载，不会理会package实际包的版本是否有新。</p>
<h1 id="_2019-12-27"><a class="header-anchor" href="#_2019-12-27">#</a> 2019-12-27</h1>
<h2 id="package-json中-与"><a class="header-anchor" href="#package-json中-与">#</a> <a href="https://yarn.bootcss.com/docs/dependency-versions/" target="_blank" rel="noopener noreferrer">package.json中 ~ 与 ^<OutboundLink/></a></h2>
<p>语义版本控制（Semantic Versioning）</p>
<p>版本可以表示为<code>major.minor.patch</code>这样的形式，用数字表示形如<code>1.2.3</code>这种，<code>major.minor.patch</code>都有哪些含义呢？</p>
<p>major：当对包的API进行重大更改或不兼容更改时，递增major
minor: 增加了新功能同时保持向后兼容的能力时，递增mior
patch: 修改了bug同时保持向后兼容能力时，递增patch</p>
<ul>
<li>波浪符（~）范围</li>
</ul>
<p>在指定的minor版本中使用〜可以更改补丁
仅在指定主要版本的情况下使用〜，将允许进行minor的更改。</p>
<p>~3.1.4 --&gt; &gt;=3.1.4 ❤️.2.0</p>
<p>~3.1	 --&gt; 3.1.x or &gt;=3.1.0 ❤️.2.0</p>
<p>~3     --&gt; 3.x or &gt;=3.0.0 &lt;4.0.0</p>
<ul>
<li>脱字符（^）范围</li>
</ul>
<p>版本的第一个非零数字不可修改</p>
<p>^3.1.4 --&gt; &gt;=3.1.4 &lt;4.0.0</p>
<p>^0.4.2 --&gt; &gt;=0.4.2 &lt;0.5.0</p>
<p>^0.0.2 --&gt; &gt;=0.0.2 &lt;0.0.3</p>
</template>