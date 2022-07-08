(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{284:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2019年12月"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019年12月"}},[t._v("#")]),t._v(" 2019年12月")]),t._v(" "),s("h2",{attrs:{id:"chrome-devtools调试小技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-devtools调试小技巧"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/42059158",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome DevTools调试小技巧"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("刚才看到了个不错的浏览器调试小技巧，主要包括以下几点：")]),t._v(" "),s("ol",[s("li",[t._v("将选中元素滚动到视口内")]),t._v(" "),s("li",[t._v("将请求保存为一个fetch请求，可以copy到console面板打印")]),t._v(" "),s("li",[t._v("阻塞一个请求")]),t._v(" "),s("li",[t._v("DOM断点调试")]),t._v(" "),s("li",[t._v("截屏(cmd + shift + p）")])]),t._v(" "),s("h2",{attrs:{id:"_0-1-0-2-0-30000000000000004"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-0-2-0-30000000000000004"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://juejin.im/post/5cf667b6f265da1bc23f6536",target:"_blank",rel:"noopener noreferrer"}},[t._v("0.1+0.2=0.30000000000000004?"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("javascript的number类型在计算机上采用双精度格式存储，占用64个比特位，分别是1个符号位、11个指数为和52个尾数位。这里就存在一个越界问题，也就是说如果数字的二进制形式超过了52位，计算机就会采用一定的策略进行截取，以致数字丢失了精度。")]),t._v(" "),s("p",[t._v("这里，0.1与0.2的二进制表示都是无限的，所以计算机会进行截取，导致失真。")]),t._v(" "),s("h2",{attrs:{id:"json-stringify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-stringify"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://juejin.im/post/5decf09de51d45584d238319?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON.stringify()"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("平时用的"),s("code",[t._v("JSON.stringify()")]),t._v("其实有很多细节需要注意，比如当"),s("code",[t._v("undefined")]),t._v("、"),s("code",[t._v("Symbol")]),t._v("以及"),s("code",[t._v("function")]),t._v("为value值的情况下，序列化的结果如何表现，这个要是没接触过肯定不会知道。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("d")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ddd"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出：？")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "{"a":"aaa","d":"ddd"}"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eee"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出：？")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "["aaa",null,null,null,"eee"]"')]),t._v("\n")])])]),s("p",[t._v("通过上面的代码，可以看出端倪。")]),t._v(" "),s("h1",{attrs:{id:"_2019-12-13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-12-13"}},[t._v("#")]),t._v(" 2019-12-13")]),t._v(" "),s("h2",{attrs:{id:"尝试系统中引入react-hot-loader-以失败告终😿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尝试系统中引入react-hot-loader-以失败告终😿"}},[t._v("#")]),t._v(" 尝试系统中引入react-hot-loader，以失败告终😿")]),t._v(" "),s("p",[t._v("本打算引入react-hot-loader，但是没有生效，试了很久，初步发现可能是引入顺序的问题，因为dll会先于react-hot-loader引入，而且react-hot-loader也快要被废弃了，索性就不引用了吧")]),t._v(" "),s("h2",{attrs:{id:"script-error-复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-error-复现"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://juejin.im/post/5df3522751882512302db3ca?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("script error 复现"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[t._v("录制视频")])]),t._v(" "),s("p",[t._v("a) canvas 截取图片，该方法的实现思路是利用 canvas 将网页生成图片，然后缓存起来，为了使得生成的视频流畅，我们一秒中需要生成大约 25 帧，也就是需要 25 张截图，然后在出现 script error 时将缓存起来的页面图片进行上报，再在分析系统通过技术将页面浏览进行还原。")]),t._v(" "),s("p",[t._v("b) 该方法主要是记录用户页面 dom 的变化，然后在出现 script error 时将对应的记录进行上报，然后在分析系统里通过技术将页面还原。")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("进入页面，生成页面的虚拟dom全量快照；")]),t._v(" "),s("li",[t._v("运用 API：MutationObserver，记录用户变化的 dom，同时记录用户的一些行操作（click，select，input，scroll 等事件）；")]),t._v(" "),s("li",[t._v("当出现 script error 时将对应快照信息上报；")]),t._v(" "),s("li",[t._v("在分析系统中将快照与用用户的操作还原。")])])]),t._v(" "),s("h1",{attrs:{id:"_2019-12-17"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-12-17"}},[t._v("#")]),t._v(" 2019-12-17")]),t._v(" "),s("h2",{attrs:{id:"雨人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雨人"}},[t._v("#")]),t._v(" 雨人")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://m.imeitou.com/uploads/allimg/2019071518/y4gvnjovviz.jpg",alt:""}})]),t._v(" "),s("p",[t._v("我相信我爱你")]),t._v(" "),s("p",[t._v("蒙上眼手交给你")]),t._v(" "),s("p",[t._v("慢慢的安心在黑暗中")]),t._v(" "),s("p",[t._v("共有一双眼睛")]),t._v(" "),s("p",[t._v("我要不断地爱你")]),t._v(" "),s("p",[t._v("不断拼凑了自己")]),t._v(" "),s("p",[t._v("生命中所有好不好的过去")]),t._v(" "),s("p",[t._v("仿佛都在等我遇见你")]),t._v(" "),s("h2",{attrs:{id:"俄罗斯套娃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#俄罗斯套娃"}},[t._v("#")]),t._v(" 俄罗斯套娃")]),t._v(" "),s("p",[t._v("刚才看Promise的实现原理，突然联想到俄罗斯套娃，这个Promise不就是一个俄罗斯套娃么，哈哈哈，一个套一个，最后还是那个娃，哎呀呀，哈哈哈。")]),t._v(" "),s("p",[t._v("俄罗斯套娃的实现：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PENDING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pending'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FULFILLED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fulfilled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REJECTED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rejected'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("executor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" that "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PENDING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fulfilledCallbacks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放then方法注册的回调函数")]),t._v("\n  that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rejectedCallbacks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放then方法注册的回调函数")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PENDING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一旦状态改变，就不会再变")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用异步的方式调用，确保晚于then函数执行，同时可以确保即便是在execotor中同步调用resolve，promise还是异步的")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FULFILLED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fulfilledCallbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PENDING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一旦状态改变，就不会再变")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REJECTED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rejectedCallbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("then")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("onFulfilled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onRejected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" that "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" promise2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  onFulfilled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onFulfilled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onFulfilled")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  onRejected "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onRejected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onRejected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  promise2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fulfilledCallbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFulfilled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rejectedCallbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRejected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" promise2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h1",{attrs:{id:"_2019-12-26"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-12-26"}},[t._v("#")]),t._v(" 2019-12-26")]),t._v(" "),s("h2",{attrs:{id:"家用路由器中间人劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#家用路由器中间人劫持"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.cert.pl/en/large-scale-dns-redirection-on-home-routers-for-financial-theft/",target:"_blank",rel:"noopener noreferrer"}},[t._v("家用路由器中间人劫持"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("刚才看了有关路由器DNS劫持中间人攻击相关原理，在此记录：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.cert.pl/wp-content/uploads/2014/02/2014-02-mitr-good.png",alt:""}})]),t._v(" "),s("p",[t._v("正常：\n(1). Router requests IP address of bank’s website. Gets bank’s server’s address in reponse.\n(2). User connects to bank’s server.")]),t._v(" "),s("p",[t._v("被劫持：\n(1). Router requests IP address of bank’s website. Gets malicious server’s address in response.\n(2). User connects to malicious server.\n(3). Malicious server connects to bank’s server.")]),t._v(" "),s("h2",{attrs:{id:"package-lock-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.zhihu.com/question/62331583",target:"_blank",rel:"noopener noreferrer"}},[t._v("package-lock.json"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("查阅资料得知，自npm 5.0版本发布以来，npm i的规则发生了三次变化。")])]),t._v(" "),s("p",[t._v("1、npm 5.0.x 版本，不管package.json怎么变，npm i 时都会根据lock文件下载package-lock.json file not updated after package.json file is changed · Issue #16866 · npm/npm这个 issue 控诉了这个问题，明明手动改了package.json，为啥不给我升级包！然后就导致了5.1.0的问题...")]),t._v(" "),s("p",[t._v("2、5.1.0版本后 npm install 会无视lock文件 去下载最新的npm 然后有人提了这个issue why is package-lock being ignored? · Issue #17979 · npm/npm控诉这个问题，最后演变成5.4.2版本后的规则。")]),t._v(" "),s("p",[t._v("3、5.4.2版本后  why is package-lock being ignored? · Issue #17979 · npm/npm大致意思是，如果改了package.json，且package.json和lock文件不同，那么执行"),s("code",[t._v("npm i")]),t._v("时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock。如果两者是同一状态，那么执行"),s("code",[t._v("npm i")]),t._v("都会根据lock下载，不会理会package实际包的版本是否有新。")]),t._v(" "),s("h1",{attrs:{id:"_2019-12-27"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-12-27"}},[t._v("#")]),t._v(" 2019-12-27")]),t._v(" "),s("h2",{attrs:{id:"package-json中-与"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json中-与"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://yarn.bootcss.com/docs/dependency-versions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("package.json中 ~ 与 ^"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("语义版本控制（Semantic Versioning）")]),t._v(" "),s("p",[t._v("版本可以表示为"),s("code",[t._v("major.minor.patch")]),t._v("这样的形式，用数字表示形如"),s("code",[t._v("1.2.3")]),t._v("这种，"),s("code",[t._v("major.minor.patch")]),t._v("都有哪些含义呢？")]),t._v(" "),s("p",[t._v("major：当对包的API进行重大更改或不兼容更改时，递增major\nminor: 增加了新功能同时保持向后兼容的能力时，递增mior\npatch: 修改了bug同时保持向后兼容能力时，递增patch")]),t._v(" "),s("ul",[s("li",[t._v("波浪符（~）范围")])]),t._v(" "),s("p",[t._v("在指定的minor版本中使用〜可以更改补丁\n仅在指定主要版本的情况下使用〜，将允许进行minor的更改。")]),t._v(" "),s("p",[t._v("~3.1.4 --\x3e >=3.1.4 ❤️.2.0")]),t._v(" "),s("p",[t._v("~3.1\t --\x3e 3.1.x or >=3.1.0 ❤️.2.0")]),t._v(" "),s("p",[t._v("~3     --\x3e 3.x or >=3.0.0 <4.0.0")]),t._v(" "),s("ul",[s("li",[t._v("脱字符（^）范围")])]),t._v(" "),s("p",[t._v("版本的第一个非零数字不可修改")]),t._v(" "),s("p",[t._v("^3.1.4 --\x3e >=3.1.4 <4.0.0")]),t._v(" "),s("p",[t._v("^0.4.2 --\x3e >=0.4.2 <0.5.0")]),t._v(" "),s("p",[t._v("^0.0.2 --\x3e >=0.0.2 <0.0.3")])])}),[],!1,null,null,null);s.default=e.exports}}]);