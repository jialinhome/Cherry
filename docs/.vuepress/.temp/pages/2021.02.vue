<template><h1 id="_2021年02月"><a class="header-anchor" href="#_2021年02月">#</a> 2021年02月</h1>
<h2 id="_1-chrome去掉inline-block元素空格的一种方法"><a class="header-anchor" href="#_1-chrome去掉inline-block元素空格的一种方法">#</a> 1. Chrome去掉<code>inline-block</code>元素空格的一种方法</h2>
<p>将父元素设置为<code>display: table</code>，具体什么原因没有查到，但问题可以解决。</p>
<h2 id="按钮防重点击方案-给按钮增加loading状态"><a class="header-anchor" href="#按钮防重点击方案-给按钮增加loading状态">#</a> 按钮防重点击方案（给按钮增加loading状态）</h2>
<p>最近解决了一个比较恼人的问题，即按钮防重点击，也可以描述成请求的loading态处理。本来想着做比较通用的方案，但是发现通用的方案需要依赖条件，即：需要一致的api接口请求方式。所以这种方案可能只适合我们自己组内的项目，但是如果希望采用我这样的方案，也不妨采用同样处理api的思路。</p>
<p>目前开发的Vue项目中，接口的处理方式是这样的：</p>
<p>首先，有一个定义接口配置的地方，代码类似于这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> apiConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    api1<span class="token operator">:</span> <span class="token punctuation">{</span>
        method<span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span>
        url<span class="token operator">:</span> <span class="token string">'url/api1'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    api2<span class="token operator">:</span> <span class="token punctuation">{</span>
        method<span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
        url<span class="token operator">:</span> <span class="token string">'url/api2'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>然后，取出这些配置，进行一系处理，最后会封装成一个<code>api</code>对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">api1</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* 发请求逻辑 */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">api2</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* 发请求逻辑 */</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>最后，我们就可以在项目中引入<code>api</code>对象，通过下面的形式调用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> api <span class="token keyword">from</span> <span class="token string">'@/api'</span><span class="token punctuation">;</span>

loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">api1</span><span class="token punctuation">(</span><span class="token punctuation">{</span> query1<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> query2<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>上述就是一套<code>api</code>处理请求的流程，不难发现，不论是按钮还是页面的<code>loading</code>状态，它们都是与单个<code>api</code>请求一一对应的，所以如果希望减少<code>api</code>请求的处理，就要将<code>api</code>与请求状态关联起来，所以就要实现以下功能：</p>
<ol>
<li>
<p>需要有一个地方去维护一个状态，默认值为<code>false</code></p>
</li>
<li>
<p>这个状态跟请求绑定</p>
</li>
<li>
<p>当请求开始的时候，将状态值置为<code>true</code></p>
</li>
<li>
<p>当请求结束的时候，将状态值置为<code>false</code></p>
</li>
</ol>
<p>我一开始设想的功能是这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>mtd<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"handleClick1"</span> loading<span class="token operator">=</span><span class="token string">"loading1"</span><span class="token operator">></span>按钮<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>mtd<span class="token operator">-</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>mtd<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"handleClick1"</span> loading<span class="token operator">=</span><span class="token string">"loading2"</span><span class="token operator">></span>按钮<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>mtd<span class="token operator">-</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">...</span>

<span class="token keyword">import</span> api<span class="token punctuation">,</span> <span class="token punctuation">{</span>loading1<span class="token punctuation">,</span> loading2<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@api'</span><span class="token punctuation">;</span>

<span class="token function">handleClick1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理异步流程</span>
<span class="token punctuation">}</span>

<span class="token function">handleClick2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理异步流程</span>
<span class="token punctuation">}</span>  

<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>现在把要实现的功能列出，就像有了产品文档一样，接下来就是开发了。</p>
<p>第一步，找到一个存状态值的地方，在<code>Vue</code>中，一旦提起状态这两个字，不免就会使人想到<code>Vuex</code>，所以我们可以先创建一个<code>store</code>，然后通过<code>Vue.set</code>方法遍历<code>api</code>对象，使每个<code>api</code>与<code>store</code>里的值一一对应。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">apiName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">,</span> apiName<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>一切看似很完美，但是在进行到第二步的时候就卡主了，主要是没有办法实现<code>store</code>与<code>api</code>一一对应，我们要实现<code>import api, {loading1, loading2} from '@api';</code>这样的能力，就需要把<code>loading</code>状态挂在<code>api</code>对象下导出，这样入口才统一，不可能在项目中即引入<code>api</code>，又引入<code>store</code>，那样一是难以理解，不容易维护，二是代码又要多引入一行，不优雅。所以得重新考虑其他方式。</p>
<p>回到第一步，我们将<code>loading</code>态放在<code>store</code>里的目的只有一个，就是希望它具有响应式，这样状态变更之后，组件的状态也会自动更新，那有没有其他方式也能够使一个对象变成响应式呢？有，使用<code>Vue.observable</code>即可。</p>
<p>既然这样，我们就可以抛掉<code>store</code>了，专注于<code>api</code>，我们把每一个<code>api</code>变成响应式，里面维护一个<code>loading</code>状态，不就可以了么，这么简单，一开始怎么想不到，还是对<code>Vue</code>理解的不够深啊。</p>
<p>所以我们来做以下处理：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">apiName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    api<span class="token punctuation">[</span>apiName<span class="token punctuation">]</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>只要这简单的三行代码，我们就把每一个<code>api</code>下面的<code>loading</code>对象变成响应式的了，神奇不神奇。这里您可能有疑问，为什么要用<code>{ status: false }</code>这样一个对象呢？因为<code>api[apiName]</code>的类型是<code>function</code>，经过试验，不能直接把<code>function</code>的<code>loading</code>属性变成响应式的，所以得多嵌套一层。</p>
<p>瞬间我们就完成了需求的前两步，接下只需要在发起请求之前将<code>api[apiName].loading</code>的值置为<code>true</code>，请求之后置为<code>false</code>就可以了。</p>
<p>这样就完成了想要的功能，进一步完善一下，将<code>api</code>对象挂载在<code>Vue</code>全局，这样就不用每次都<code>import</code>了，最后我们可以通过以下方式来愉快地获取请求状态了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>mtd<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"handleClick1"</span> loading<span class="token operator">=</span><span class="token string">"$api.api1.loading.status"</span><span class="token operator">></span>按钮<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>mtd<span class="token operator">-</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>mtd<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"handleClick1"</span> loading<span class="token operator">=</span><span class="token string">"$api.api2.loading.status"</span><span class="token operator">></span>按钮<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>mtd<span class="token operator">-</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">...</span>

<span class="token keyword">async</span> <span class="token function">handleClick1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理异步流程</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">api1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">handleClick2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理异步流程</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">api2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>  

<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>