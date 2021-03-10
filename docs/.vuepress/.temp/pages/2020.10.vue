<template><h1 id="_2020年10月"><a class="header-anchor" href="#_2020年10月">#</a> 2020年10月</h1>
<h2 id="_2020-10-9"><a class="header-anchor" href="#_2020-10-9">#</a> 2020.10.9</h2>
<p>国庆后第一天上班，虽然是8天长假，但还是觉得有点短暂，转眼即逝。</p>
<p>回来好好休整，努力加油吧！</p>
<h3 id="vue-use"><a class="header-anchor" href="#vue-use">#</a> Vue.use</h3>
<p><code>Vue.use(plugin)</code>的作用是用来注册插件的，譬如我们可以注册<code>vue-router</code>,<code>vuex</code>等，注册完之后，就可以在组件调用<code>this.$route</code>、<code>this.$store</code>等方法。</p>
<p>这里我们给<code>ues</code>方法传入一个叫<code>plugin</code>的参数，这里对<code>plugin</code>有两点要求，要么<code>plugin</code>是一个对象，该对象需要实现一个叫做<code>install</code>的方法，要么<code>plugin</code>是一个函数，会被当做<code>install</code>方法调用。</p>
<p><code>install</code>方法会接收到一个参数，这个参数即<code>Vue</code>构造函数，从而我们可以在里面操作<code>Vue</code>的各种方法。</p>
<h3 id="vue单向数据流"><a class="header-anchor" href="#vue单向数据流">#</a> Vue单向数据流</h3>
<p>规则：</p>
<blockquote>
<p>只能从父组件传递到子组件，不可以在子组件内部改变<code>props</code>。</p>
</blockquote>
<p>如果希望在子组件中变更<code>props</code>，分为以下两种情况：</p>
<ol>
<li>这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'initialCounter'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        counter<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initialCounter
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li>这个 prop 以一种原始的值传入且需要进行转换 --- 用这个 prop 定义一个计算属性。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">normalizedSize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="有关ref"><a class="header-anchor" href="#有关ref">#</a> 有关ref</h3>
<p>react与vue都不推荐直接使用ref，但是当希望获得组件实例的时候，还不得不用，react文档中明确写道ref可以指向组件的实例或者dom元素本身，区别就是ref作用在自定义组件上还是dom元素上，但是vue文档中没有明确写到。</p>
<p>在用法上，感觉vue中的一些特殊用法特别类似于jquery，定义一些插件，可以全局使用。</p>
<p>可以通过<code>this.$refs</code>引用组件内声明的ref，从而获取其实例</p>
<p><a href="https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0" target="_blank" rel="noopener noreferrer">ref参考链接<OutboundLink/></a></p>
<h2 id="_2020-10-10"><a class="header-anchor" href="#_2020-10-10">#</a> 2020.10.10</h2>
<h3 id="安装完oh-my-zsh-以前的node、mvn等命令都找不到了"><a class="header-anchor" href="#安装完oh-my-zsh-以前的node、mvn等命令都找不到了">#</a> 安装完oh my zsh， 以前的node、mvn等命令都找不到了</h3>
<p>解决方案：
打开<code>~/.zshrc</code></p>
<pre><code>```sh
    vim ~/.zshrc
```

在`.zshrc`中添加一行脚本

```sh
    source ~/.bash_profile
```

执行以下`.zshrc`

```sh
    source ~/.zshrc
```
</code></pre>
<h3 id="vue-class-component"><a class="header-anchor" href="#vue-class-component">#</a> Vue-Class-Component</h3>
<p>Vue Class Component 是一个可以让人使用class风格语法编写Vue组件的库。</p>
<p>使用class风格编写组件，自然会与正常方式编写代码相对应。</p>
<p>其中：</p>
<h4 id="data的替代写法"><a class="header-anchor" href="#data的替代写法">#</a> <strong>data的替代写法</strong></h4>
<p>class的属性用来初始化Vue的<code>data</code>，如果初始化的时候显式设置属性值为<code>undefined</code>，则该属性值讲不是响应式的，为了防止这样的情况发生，可以给该属性赋值<code>null</code>，或者使用<code>data</code>钩子代替。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span>

@Component
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>

    <span class="token comment">// `negative` 将是非响应式的</span>
    negative <span class="token operator">=</span> <span class="token keyword">undefined</span>

    <span class="token comment">// `message` 将是响应式</span>
    message <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// `hello` 将是响应式的, 因为在data钩子里</span>
        hello<span class="token operator">:</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="methods的替代写法"><a class="header-anchor" href="#methods的替代写法">#</a> <strong>methods的替代写法</strong></h4>
<p>直接在class中定义方法即可，注意不要定义与生命周期重名的函数，因为生命周期也是这么定义</p>
<h4 id="计算属性的替代写法"><a class="header-anchor" href="#计算属性的替代写法">#</a> <strong>计算属性的替代写法</strong></h4>
<p>计算属性可以通过类属性的getter/setter定义</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span>

@Component
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  firstName <span class="token operator">=</span> <span class="token string">'John'</span>
  lastName <span class="token operator">=</span> <span class="token string">'Doe'</span>

  <span class="token comment">// 定义计算属性的 getter</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
  <span class="token punctuation">}</span>

  <span class="token comment">// 定义计算属性的 setter</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> splitted <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> splitted<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> splitted<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">''</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="自定义装饰器"><a class="header-anchor" href="#自定义装饰器">#</a> <strong>自定义装饰器</strong></h4>
<p>可以自定义装饰器，其实这也是类写法的一点点好处吧，可以采用装饰器模式</p>
<h3 id="extends和mixins"><a class="header-anchor" href="#extends和mixins">#</a> <strong>extends和mixins</strong></h3>
<ol>
<li>一个类组件可以extends一个类组件，其实就是类似于类的继承，但是需要两个类都是组件的形式，即被Component修饰</li>
<li>也可以通过mixins实现继承</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// mixins.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span>

<span class="token comment">// 你可以定义和组件风格一样的 mixins .</span>
@Component
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  hello <span class="token operator">=</span> <span class="token string">'Hello'</span>
<span class="token punctuation">}</span>

@Component
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">World</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  world <span class="token operator">=</span> <span class="token string">'World'</span>
<span class="token punctuation">}</span>


<span class="token comment">// 一个组件</span>
<span class="token keyword">import</span> Component<span class="token punctuation">,</span> <span class="token punctuation">{</span> mixins <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Hello<span class="token punctuation">,</span> World <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./mixins'</span>

<span class="token comment">// 使用 `mixins` 助手函数代替 `Vue`.</span>
<span class="token comment">// `mixins` 可以接收任何数量的参数.</span>
@Component
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">mixins</span><span class="token punctuation">(</span>Hello<span class="token punctuation">,</span> World<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>hello <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>world <span class="token operator">+</span> <span class="token string">'!'</span><span class="token punctuation">)</span> <span class="token comment">// -> Hello World!</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>