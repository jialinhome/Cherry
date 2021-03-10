<template><h1 id="_1-9"><a class="header-anchor" href="#_1-9">#</a> 1.9</h1>
<h2 id="typeof-的坑"><a class="header-anchor" href="#typeof-的坑">#</a> typeof 的坑</h2>
<p>在 ECMAScript 2015 之前，typeof 总能保证对任何所给的操作数返回一个字符串。即便是没有声明的标识符，typeof 也能返回 'undefined'。使用 typeof 永远不会抛出错误。</p>
<p>但在加入了块级作用域的 let 和 const 之后，在其被声明之前对块中的 let 和 const 变量使用 typeof 会抛出一个 ReferenceError。块作用域变量在块的头部处于“暂存死区”，直至其被初始化，在这期间，访问变量将会引发错误。</p>
<h2 id="typeof-null-object"><a class="header-anchor" href="#typeof-null-object">#</a> typeof null = 'object'</h2>
<p>在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 &quot;object&quot;。</p>
<h1 id="_1-14"><a class="header-anchor" href="#_1-14">#</a> 1.14</h1>
<h2 id="公司日历之我见"><a class="header-anchor" href="#公司日历之我见">#</a> 公司日历之我见</h2>
<p>早上来到公司，吃买包之际，偶然发现了一个有意思的现象--大家每个人桌上基本都有一本公司的周历。按照常理，这没什么好说的，因为公司每年新年年初都会发，去年的这个时候也发了，只不过发的是月历，那时并没有人把那个东西摆到桌上，是什么原因导致了这种差异呢？</p>
<p>经过我的分析，原因应该很简单，虽然公司这次设计的周历也有瑕疵，不过好处是它属于细长的形状，立在那里占用的空间非常小，即便本身就很狭小的办公桌，也有其立足之地。</p>
<p>还有一个因素，由于是从月历变成了周历，所以每一天所占有纸张的面积也就变大了，可以用来当便签使用。</p>
<p>生活，从不缺少趣味，只是缺少一双发现趣味的眼睛。</p>
</template>