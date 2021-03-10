<template><h2 id="_0801"><a class="header-anchor" href="#_0801">#</a> 0801</h2>
<h3 id="hash、chunkhash、contenthash"><a class="header-anchor" href="#hash、chunkhash、contenthash">#</a> hash、chunkhash、contenthash</h3>
<p><strong>hash</strong>： 跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的hash值都会更改，并且全部文件都共用相同的hash值。</p>
<p><strong>chunkhash</strong>： 和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值，相同入口的生成相同的hash。</p>
<p><strong>Contenthash</strong>：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变。</p>
<h3 id="_303、307"><a class="header-anchor" href="#_303、307">#</a> 303、307</h3>
<p><a href="https://juejin.im/post/6844904129760870414" target="_blank" rel="noopener noreferrer">参考<OutboundLink/></a></p>
<p>永久重定向有两个： 301和308。</p>
<p>两者都默认缓存，但是308不允许将请求方法从POST修改到GET, 301允许。</p>
<p>临时重定向三个：302，303，307</p>
<p>303强制浏览器可以将请求方法从POST修改到GET</p>
<p>307不允许浏览器修改请求方法。</p>
<p>302一开始的标准是不允许修改POST方法，但是浏览器的实现不遵循标准，标准就向现实妥协而做了修改。</p>
<h2 id="数组与链表的区别"><a class="header-anchor" href="#数组与链表的区别">#</a> 数组与链表的区别</h2>
<p><a href="https://zhuanlan.zhihu.com/p/52440208" target="_blank" rel="noopener noreferrer">数组与链表的不同<OutboundLink/></a>
<a href="https://blog.csdn.net/Donspeng/article/details/83444861" target="_blank" rel="noopener noreferrer">javascript中的内存<OutboundLink/></a></p>
<p>想说正常形态下数组与链表的区别吧。</p>
<p>从逻辑结构上来说，这两种数据结构都属于线性表。所谓线性表，就是所有数据都排列在只有一个维度的“线”上，就像羊肉串一样，把数据串成一串。对其中任意一个节点来说，除了头尾，只有一个前趋，也只有一个后继。</p>
<p>从物理结构来说，数组占用一整块连续的内存，链表在内存上是分散的，需要通过指针进行连接，所以对于链表来说，存储一个节点所需要消耗额资源就多了，</p>
<p>正因为是物理结构上的差异，他们在<strong>访问</strong>，<strong>增加</strong>，<strong>删除</strong>这三种操作上所带来的时间复杂度不同。</p>
<p>访问上，数组时间复杂度为O(1)，链表时间复杂度为O(n)</p>
<p>增加或删除，数组的时间复杂度为O(n)，链表时间复杂度为O(1)</p>
<h2 id="二分查找"><a class="header-anchor" href="#二分查找">#</a> 二分查找</h2>
<p>二分查找，肯定是基于一个有序数组，这是二分查找的前提，比如有一个有序数组nums，一个目标值target，我们要在数组中找到这个目标值，实现如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      start <span class="token operator">=</span> <span class="token operator">++</span>middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      end <span class="token operator">=</span> <span class="token operator">--</span>middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="二叉树啊二叉树"><a class="header-anchor" href="#二叉树啊二叉树">#</a> 二叉树啊二叉树</h2>
<p>二叉树，用<code>javascript</code>表示形如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span>
  left<span class="token operator">:</span> <span class="token punctuation">{</span>
    val<span class="token operator">:</span> <span class="token string">"B"</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
      val<span class="token operator">:</span> <span class="token string">"D"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      val<span class="token operator">:</span> <span class="token string">"E"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  right<span class="token operator">:</span> <span class="token punctuation">{</span>
    val<span class="token operator">:</span> <span class="token string">"C"</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      val<span class="token operator">:</span> <span class="token string">"F"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="promise-prototype-catch"><a class="header-anchor" href="#promise-prototype-catch">#</a> Promise.prototype.catch</h2>
<blockquote>
<p>catch 方法是 then 方法的语法糖，只接受 rejected 态的数据。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token parameter">reason</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="promise-prototype-finally"><a class="header-anchor" href="#promise-prototype-finally">#</a> Promise.prototype.finally</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">finally</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">reason</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="调用object-prototype-tostring-发生了什么"><a class="header-anchor" href="#调用object-prototype-tostring-发生了什么">#</a> 调用<code>Object.prototype.toString()</code>发生了什么？</h2>
<p><a href="https://medium.com/better-programming/what-is-object-object-in-javascript-object-prototype-tostring-1db888c695a4" target="_blank" rel="noopener noreferrer">参考<OutboundLink/></a></p>
<p><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-toobject" target="_blank" rel="noopener noreferrer">参考<OutboundLink/></a></p>
<p>判断一个变量的类型，我们都知道最稳妥的方式就是采用<code>Object.prototype.toString.call(args)</code>，但是其原理是什么呢？在面试中就被闻到过，记录于此吧。</p>
<p>Object.prototype.toString ( )</p>
<p>When the toString method is called, the following steps are taken:</p>
<p>If the this value is undefined, return &quot;[object Undefined]&quot;.</p>
<p>If the this value is null, return &quot;[object Null]&quot;.</p>
<p>Let O be ToObject(this value).</p>
<p>Let isArray be IsArray(O).</p>
<p>ReturnIfAbrupt(isArray).</p>
<p>If isArray is true, let builtinTag be &quot;Array&quot;.</p>
<p>Else, if O is an exotic String object, let builtinTag be &quot;String&quot;.</p>
<p>Else, if O has an [[ParameterMap]] internal slot, let builtinTag be &quot;Arguments&quot;.</p>
<p>Else, if O has a [[Call]] internal method, let builtinTag be &quot;Function&quot;.</p>
<p>Else, if O has an [[ErrorData]] internal slot, let builtinTag be &quot;Error&quot;.</p>
<p>Else, if O has a [[BooleanData]] internal slot, let builtinTag be &quot;Boolean&quot;.</p>
<p>Else, if O has a [[NumberData]] internal slot, let builtinTag be &quot;Number&quot;.</p>
<p>Else, if O has a [[DateValue]] internal slot, let builtinTag be &quot;Date&quot;.</p>
<p>Else, if O has a [[RegExpMatcher]] internal slot, let builtinTag be &quot;RegExp&quot;.</p>
<p>Else, let builtinTag be &quot;Object&quot;.</p>
<p>Let tag be Get (O, @@toStringTag).</p>
<p>ReturnIfAbrupt(tag).</p>
<p>If Type(tag) is not String, let tag be builtinTag.</p>
<p>Return the String that is the result of concatenating &quot;[object &quot;, tag, and &quot;]&quot;.</p>
<p>This function is the %ObjProto_toString% intrinsic object.</p>
<blockquote>
<p>Historically, this function was occasionally used to access the String value of the [[Class]] internal slot that was used in previous editions of this specification as a nominal type tag for various built-in objects. The above definition of toString preserves compatibility for legacy code that uses toString as a test for those specific kinds of built-in objects. It does not provide a reliable type testing mechanism for other kinds of built-in or program defined objects. In addition, programs can use @@toStringTag in ways that will invalidate the reliability of such legacy type tests.</p>
</blockquote>
<h2 id="《深入浅出nodejs》-第6章-理解buffer"><a class="header-anchor" href="#《深入浅出nodejs》-第6章-理解buffer">#</a> 《深入浅出NodeJs》-第6章 理解Buffer</h2>
<h3 id="buffer是什么"><a class="header-anchor" href="#buffer是什么">#</a> Buffer是什么？</h3>
<p>Buffer对象类似于数组，它的元素为16进制两位数，即0到255的数值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'深入浅出node.js'</span>
<span class="token keyword">var</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => &lt;Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 2e 6a 73></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="buffer-内存分配"><a class="header-anchor" href="#buffer-内存分配">#</a> Buffer 内存分配</h3>
<p>Buffer对象的内存不是分配在V8的堆内存中，而是在Node的C++层面实现的内存申请。因为处理大量的字节数据不能采用需要一点内存就向操作系统申请一点内存的方式，这可能造成大量的内存申请的系统调用，对操作系统又一定有压力。</p>
<p>Node采用Slab机制分配内存，slab有以下三种状态：</p>
<ul>
<li>full: 完全分配</li>
<li>partial: 部分分配</li>
<li>empty: 没有分配</li>
</ul>
<p>Node以8kb为界限来区分是大对象还是小对象。</p>
<h3 id="buffer的拼接"><a class="header-anchor" href="#buffer的拼接">#</a> Buffer的拼接</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * 有 test.md 文件
 * 里面有如下内容
 * 床前明月光，疑是地上霜；举头望明月，低头思故乡。
 */</span>

<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">'rest.md'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>highWaterMark<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  data <span class="token operator">+=</span> chunk<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印出来的结果</span>
<span class="token comment">// 床前明��光，疑���地上霜；举头��明月，���头思故乡。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>上面打印出来的东西乱码了，因为我们把文件可读流的长度限制成每次只可以读取11个，而采用<code>+</code>会将<code>Buffer</code>转为字符串，即会调用<code>chunk.toString()</code>，这里的<code>chunk</code>是<code>Buffer</code>类型，调用<code>toString</code>会默认以<code>UTF-8</code>的格式编码，中文在<code>URF-8</code>中占3个字节。所以我们每次以11个字节的长度读取buffer的时候，只能显示前3个字，剩下的2个字节会以乱码的形式展示。</p>
<p>如何解决乱码问题呢？</p>
<p>我们可以采用可读流的<code>setEncoding()</code>方法进行转换：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">'rest.md'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>highWaterMark<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rs<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是通过<code>setEncoding()</code>这种方式，只能转换3种类型的字符，所以有一些局限性。</p>
<p>那么通用的方式是什么呢？</p>
<p>书中交代，可以按照如下的方式书写：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token number">1</span> <span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
  <span class="token number">2</span> <span class="token keyword">var</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">'rest.md'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>highWaterMark<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token number">3</span>
  <span class="token number">4</span> <span class="token keyword">var</span> chunks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token number">5</span> <span class="token keyword">var</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token number">6</span>
  <span class="token number">7</span>
  <span class="token number">8</span> rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token number">9</span>   chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token number">10</span>   size <span class="token operator">+=</span> chunk<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
 <span class="token number">11</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token number">12</span>
 <span class="token number">13</span> rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token number">14</span>   <span class="token keyword">var</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>chunks<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token number">15</span>   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>但是分析这段代码，感觉有瑕疵，如果可读流加载的是一个非常巨大文件，可能造成内存溢出。</p>
<h3 id="buffer影响网络i-o的性能"><a class="header-anchor" href="#buffer影响网络i-o的性能">#</a> Buffer影响网络I/O的性能</h3>
<p>字符串如果希望在网络中传输，需要提前转换成Buffer，以进行二进制传输，这样的转换是时刻发生的，如何提高字符串到Buffer的转换效率，可以很大的提高网络吞吐率。</p>
<p>书中进行了一次性能测试，假设一次请求要返回字符<code>Hello World</code>，提前转换成Buffer合直接传输字符串之间存在很大的性能差别，提前转换成Buffer，性能提高近一倍左右。</p>
<p>web应用中，可以将静态内容与动态内容分离，静态内容预先转换成Buffer，使性能得到提升。</p>
<p>在使用可读流读取文件时，如<code>fs.createReadStream(path, opts)</code>，我们可以往opts里传入一些参数，其中有一项配置<code>highWaterMark</code>，这个参数的大小可以影响性能，</p>
</template>