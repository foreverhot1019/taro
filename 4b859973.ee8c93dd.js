(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1631:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return n?o.a.createElement(d,b({ref:t},p,{components:n})):o.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},613:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(1631)),c={title:"WebView",sidebar_label:"WebView"},b={id:"version-3.0.0-beta.5/components/open/web-view",title:"WebView",description:"##### WebView \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528",source:"@site/versioned_docs/version-3.0.0-beta.5/components/open/web-view.md",permalink:"/taro/docs/3.0.0-beta.5/components/open/web-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/components/open/web-view.md",version:"3.0.0-beta.5",sidebar_label:"WebView",sidebar:"version-3.0.0-beta.5/components",previous:{title:"OpenData",permalink:"/taro/docs/3.0.0-beta.5/components/open/open-data"},next:{title:"\u5176\u4ed6",permalink:"/taro/docs/3.0.0-beta.5/components/open/others"}},i=[],p={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"webview-\u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528"},"WebView \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7ec4\u4ef6 \u652f\u6301\u5ea6")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"ReactNative"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f WebView"),"\u3002"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/open/#web-view"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f WebView"),"\u3002"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/component/web-view"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f WebView"),"\u3002"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.toutiao.com/docs/comp/web-view.html"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f WebView"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 WebView \u7ec4\u4ef6\nimport { WebView } from '@tarojs/components'\n\nclass App extends Component {\n  handleMessage () {}\n  \n  render () {\n    return (\n      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />\n    )\n  }\n}\n")))}l.isMDXComponent=!0}}]);