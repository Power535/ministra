!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=7)}([function(e,t,i){"use strict";var n=i(1),a=i(9).parse,o=new n;o.query=a(document.location.search.substring(1)),o.config=i(10),o.activePage=null,o.route=function(e,t){var i,n=o.activePage;return!(!e||e.active)&&(e.name,e.id,e.name,e.id,(i=o.activePage)&&i.active&&(i.$node.classList.remove("active"),i.active=!1,o.activePage=null,i.name,i.id,i.name,i.id,i.events["hide"]&&i.emit("hide")),function(e,t){!e||e.active||(e.$node.classList.add("active"),e.active=!0,o.activePage=e,e.name,e.id,e.name,e.id,e.events["show"]&&e.emit("show",{data:t}))}(e,t),this.events["route"]&&this.emit("route",{from:n,to:e}),!0)},e.exports=o},function(e,t,i){"use strict";function n(){this.events={}}n.prototype={addListener:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},once:function(e,t){var i=this;this.events[e]=this.events[e]||[],this.events[e].push(function n(){i.removeListener(e,n),t.apply(i,arguments)})},addListeners:function(e){var t;for(t in e)e.hasOwnProperty(t)&&this.addListener(t,e[t])},removeListener:function(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(function(e){return e!==t}),0===this.events[e].length&&(this.events[e]=void 0))},emit:function(e){var t,i=this.events[e];if(i)for(t=0;t<i.length;t++)i[t].apply(this,Array.prototype.slice.call(arguments,1))}},n.prototype.constructor=n,e.exports=n},function(e,t,i){"use strict";e.exports={480:{height:480,width:720,availTop:24,availBottom:24,availRight:62,availLeft:62,listSize:4,listSmallSize:2},576:{height:576,width:720,availTop:24,availBottom:24,availRight:62,availLeft:62,listSize:4,listSmallSize:2},720:{height:720,width:1280,availTop:28,availBottom:28,availRight:66,availLeft:66,listSize:6,listSmallSize:5},1080:{height:1080,width:1920,availTop:42,availBottom:42,availRight:75,availLeft:75,listSize:6,listSmallSize:4}}},function(e,t,i){"use strict";var n=i(18);n.back=n.backspace,n.channelNext=n.tab,n.channelPrev=n.tab+"s",n.ok=n.enter,n.exit=n.escape,n.volumeUp=107,n.volumeDown=109,n.f1="112c",n.f2="113c",n.f3="114c",n.f4="115c",n.refresh="116c",n.frame="117c",n.phone="119c",n.set="120c",n.tv="121c",n.menu="122c",n.app="123c",n.rewind="66a",n.forward="70a",n.audio="71a",n.standby="74a",n.keyboard="76a",n.usbMounted="80a",n.usbUnmounted="81a",n.playPause="82a",n.play=-1,n.pause=-1,n.stop="83a",n.power="85a",n.record="87a",n.info="89a",n.mute="192a",n.digit0=48,n.digit1=49,n.digit2=50,n.digit3=51,n.digit4=52,n.digit5=53,n.digit6=54,n.digit7=55,n.digit8=56,n.digit9=57,e.exports=n},function(e,t,i){"use strict";var n=i(8);e.exports=n},function(e,t,i){"use strict";var n=i(0);e.exports=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href="css/"+e+"."+n.metrics.height+".css",document.head.appendChild(t)}},function(e,t,i){"use strict";var n=i(0),a=i(1),o=0;function s(e){var t,i=this;if(e=e||{},this.visible=!0,this.focusable=!0,this.$node=null,this.$body=null,this.parent=null,this.children=[],this.propagate=!!e.propagate,a.call(this),this.$node=e.$node||document.createElement("div"),this.$body=e.$body||this.$node,this.$node.className=this.name+" "+(e.className||""),this.id=e.id||this.$node.id||"cid"+o++,e.parent&&e.parent.add(this),!1===e.visible&&this.hide(),!1===e.focusable&&(this.focusable=!1),this.defaultEvents)for(t in e.events=e.events||{},this.defaultEvents)e.events[t]=e.events[t]||this.defaultEvents[t];e.events&&Object.keys(e.events).forEach(function(t){i.addListener(t,e.events[t])}),e.children&&this.add.apply(this,e.children),this.$node.addEventListener("click",function(e){i.focus(),i.events["click"]&&i.emit("click",e),e.stopPropagation()}),this.name,this.id,this.name,this.id}s.prototype=Object.create(a.prototype),s.prototype.constructor=s,s.prototype.defaultEvents=null,s.prototype.add=function(e){var t;for(t=0;t<arguments.length;t++)e=arguments[t],this.children.push(e),e.parent=this,e.$node&&null===e.$node.parentNode&&this.$body.appendChild(e.$node),e.name,e.id,this.name,this.id,this.name,this.id,e.name,e.id,this.events["add"]&&this.emit("add",{item:e})},s.prototype.remove=function(){this.parent&&(n.activePage.activeComponent===this&&(this.blur(),this.parent.focus()),this.parent.children.splice(this.parent.children.indexOf(this),1)),this.children.forEach(function(e){e.remove()}),this.$node.parentNode.removeChild(this.$node),this.events["remove"]&&this.emit("remove"),this.events={},this.name,this.id,this.name,this.id},s.prototype.focus=function(e){var t=n.activePage,i=t.activeComponent;return!(!this.focusable||this===i)&&(i&&i.blur(),t.activeComponent=i=this,i.$node.classList.add("focus"),this.name,this.id,this.name,this.id,i.events["focus"]&&i.emit("focus",e),!0)},s.prototype.blur=function(){var e=n.activePage,t=e.activeComponent;return this.$node.classList.remove("focus"),this===t?(e.activeComponent=null,this.name,this.id,this.name,this.id,this.events["blur"]&&this.emit("blur"),!0):(this.name,this.id,this.name,this.id,!1)},s.prototype.show=function(e,t){return!this.visible&&(this.$node.classList.remove("hidden"),this.visible=!0,this.name,this.id,this.name,this.id,this.events["show"]&&this.emit("show",e),"function"==typeof t&&setTimeout(t),!0)},s.prototype.hide=function(e){return!!this.visible&&(this.$node.classList.add("hidden"),this.visible=!1,this.name,this.id,this.name,this.id,this.events["hide"]&&this.emit("hide"),"function"==typeof e&&setTimeout(e),!0)},e.exports=s},function(e,t,i){"use strict";var n=i(4);n.once("load",function(){i(15).load({name:core.environment.language},function(){n.pages={main:i(17)},n.route(n.pages.main)})})},function(e,t,i){"use strict";var n=i(0),a=i(11);window.core=window.parent.getCoreInstance(window,n),i(12),i(13),i(5)("sdk"),i(14),i(5)("app"),n.platform="mag",n.ready=function(){window.core.call("app:ready")},n.exit=function(){n.events["exit"]&&n.emit("exit"),core.call("exit")},a.load=function(e){document.body.setAttribute("platform",n.platform),core.ready?n.events["load"]&&n.emit("load",{}):core.once("load",function(){n.events[e.type]&&n.emit(e.type,e)})},a.contextmenu=function(e){e.preventDefault()},Object.keys(a).forEach(function(e){window.addEventListener(e,a[e])}),e.exports=n},function(e,t,i){"use strict";e.exports={parse:function(e){var t={};return e.split("&").forEach(function(e){2===(e=e.split("=")).length&&(t[e[0]]=decodeURIComponent(e[1]))}),t},stringify:function(e){var t=[];return Object.keys(e).forEach(function(i){t.push(i+"="+encodeURIComponent(e[i]))}),t.join("&")}}},function(e,t,i){"use strict";e.exports={}},function(e,t,i){"use strict";var n=i(0);e.exports={DOMContentLoaded:function(e){n.events["dom"]&&n.emit("dom",e)},load:function(e){n.events[e.type]&&n.emit(e.type,e)},unload:function(e){n.events[e.type]&&n.emit(e.type,e)},error:function(e){},keydown:function(e){var t,i=n.activePage,a={code:e.keyCode,stop:!1};e.ctrlKey&&(a.code+="c"),e.altKey&&(a.code+="a"),e.shiftKey&&(a.code+="s"),(t=i.activeComponent)&&t!==i&&(t.events[e.type]&&t.emit(e.type,a,e),!a.stop&&t.propagate&&t.parent&&t.parent.events[e.type]&&t.parent.emit(e.type,a,e)),a.stop||(i.events[e.type]&&i.emit(e.type,a,e),e.stop||n.events[e.type]&&n.emit(e.type,a,e))},keypress:function(e){var t=n.activePage;t.activeComponent&&t.activeComponent!==t&&t.activeComponent.events[e.type]&&t.activeComponent.emit(e.type,e)},mousewheel:function(e){var t=n.activePage;t.activeComponent&&t.activeComponent!==t&&t.activeComponent.events[e.type]&&t.activeComponent.emit(e.type,e),e.stop||t.events[e.type]&&t.emit(e.type,e)}}},function(e,t,i){"use strict";if(!document.documentElement.classList){var n=Array.prototype,a=n.indexOf,o=n.slice,s=n.push,c=n.splice,r=n.join;window.DOMTokenList=function(e){if(this._element=e,e.className!==this._classCache){if(this._classCache=e.className,!this._classCache)return;var t,i=this._classCache.replace(/^\s+|\s+$/g,"").split(/\s+/);for(t=0;t<i.length;t++)s.call(this,i[t])}},window.DOMTokenList.prototype={add:function(e){this.contains(e)||(s.call(this,e),this._element.className=o.call(this,0).join(" "))},contains:function(e){return-1!==a.call(this,e)},item:function(e){return this[e]||null},remove:function(e){var t=a.call(this,e);-1!==t&&(c.call(this,t,1),this._element.className=o.call(this,0).join(" "))},toString:function(){return r.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},Object.defineProperty(Element.prototype,"classList",{get:function(){return new window.DOMTokenList(this)}})}},function(e,t,i){"use strict";var n=i(0),a=i(2);n.metrics=a[n.query.screenHeight]||a[screen.height]||a[720],n.metrics.availHeight=n.metrics.height-(n.metrics.availTop+n.metrics.availBottom),n.metrics.availWidth=n.metrics.width-(n.metrics.availLeft+n.metrics.availRight)},function(e,t,i){"use strict";var n,a=i(0);(n=document.createElement("link")).rel="stylesheet",n.href=window.core.theme.path+a.metrics.height+".css",document.head.appendChild(n),e.exports=n},function(e,t,i){"use strict";var n=i(1),a=i(16),o=new n;function s(e){var t=new a(e);return window.gettext=window._=t.gettext,window.pgettext=t.pgettext,window.ngettext=t.ngettext,t}o.defaultLanguage="en",o.load=function(e,t){var i;return e.ext=e.ext||"json",e.path=e.path||"lang",e.name===o.defaultLanguage?(s(),t(null),!1):((i=new XMLHttpRequest).onload=function(){try{s(JSON.parse(i.responseText)),t(null),o.events["load"]&&o.emit("load")}catch(e){i.onerror(e)}},i.ontimeout=i.onerror=function(e){s(),t(e),o.events["error"]&&o.emit("error",e)},i.open("GET",e.path+"/"+e.name+"."+e.ext,!0),i.send(null),!0)},e.exports=o},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(e){return data[""][e]||e},this.pgettext=function(e,t){return data[e]&&data[e][t]||t},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext},function(e,t,i){"use strict";var n,a=i(3),o=i(4),s=i(19),c=i(21),r=i(2),l=r[screen.height]?r[screen.height].listSize:r[720].listSize,d=new s({$node:document.getElementById("pageMain")}),p=document.getElementById("pageMainFooter"),u=document.getElementById("pageMainArrowLeft"),h=document.getElementById("pageMainArrowRight"),m=null,f=!1;function v(){u.style.visibility="",h.style.visibility="",p.style.display=""}function y(){n.$body.innerHTML="<span>"+gettext("No apps")+"</span>",u.style.visibility="hidden",h.style.visibility="hidden",p.style.display="none"}function g(){var e=!1;n.provider.pageSize!==l&&(e=!0,n.provider.pageSize=l,n.sizeX=l),e?(n.init({sizeX:n.sizeX,sizeY:n.sizeY,provider:n.provider}),v(),n.focus()):core.taskManager.runHistory.length>0?(n.focus(),n.$body.innerHTML="",v(),n.$body.appendChild(n.$table),n.provider.get(null,function(e,t){var i,a;if(e)n.events["data:error"]&&n.emit("data:error",e);else if(t){for(n.data=n.translate(t),i=0;i<n.sizeY;i++)for(a=0;a<n.sizeX;a++)n.map[i][a].data=n.data[i][a],n.renderItem(n.map[i][a],n.data[i][a]);n.events["data:ready"]&&n.emit("data:ready")}})):(n.blur(),y())}n=new c({$node:document.getElementById("pageMainAppList"),className:"app-list",cycleX:!1,cycleY:!1,sizeX:l,sizeY:1,provider:i(22),render:function(e,t){e.ready||(e.$body=document.createElement("div"),e.$normal=document.createElement("div"),e.$active=document.createElement("div"),e.$activeCloseIcon=document.createElement("div"),e.$activeContent=document.createElement("div"),e.$normalContent=document.createElement("div"),e.$activeContent=document.createElement("div"),e.$normalIcon=document.createElement("div"),e.$activeIcon=document.createElement("div"),e.$normalName=document.createElement("div"),e.$activeName=document.createElement("div"),e.$normalLock=document.createElement("div"),e.$activeLock=document.createElement("div"),e.$normalGradientOverlay=document.createElement("div"),e.$activeGradientOverlay=document.createElement("div"),e.className="app",e.$body.className="app__body",e.$normal.className="app__normal",e.$active.className="app__active",e.$activeCloseIcon.className="app__icon close",e.$normalContent.className="app__content",e.$activeContent.className="app__content",e.$normalLock.className="app__locked",e.$activeLock.className="app__locked",e.$normalName.className="app__name",e.$activeName.className="app__name",e.$normalIcon.className="app__icon",e.$activeIcon.className="app__icon",e.$normalGradientOverlay.className="app__overlay",e.$activeGradientOverlay.className="app__overlay",e.$normalContent.appendChild(e.$normalIcon),e.$normalContent.appendChild(e.$normalName),e.$normalContent.appendChild(e.$normalLock),e.$activeContent.appendChild(e.$activeIcon),e.$activeContent.appendChild(e.$activeName),e.$activeContent.appendChild(e.$activeLock),e.$normal.appendChild(e.$normalContent),e.$normal.appendChild(e.$normalGradientOverlay),e.$active.appendChild(e.$activeCloseIcon),e.$active.appendChild(e.$activeContent),e.$active.appendChild(e.$activeGradientOverlay),e.$body.appendChild(e.$normal),e.$body.appendChild(e.$active),e.appendChild(e.$body),e.ready=!0),t.config.locked?e.$normalLock.style.visibility=e.$activeLock.style.visibility="inherit":e.$normalLock.style.visibility=e.$activeLock.style.visibility="hidden",t.disable?(e.classList.add("disable"),e.$activeCloseIcon.style.backgroundImage=e.$activeIcon.style.backgroundImage=e.$normalIcon.style.backgroundImage="none",e.$normalName.innerText=e.$activeName.innerText="",e.$normalContent.style.backgroundColor=e.$activeContent.style.backgroundColor="transparent"):(e.$normalName.innerText=e.$activeName.innerText=t.config.name,e.$normalName.style.color=e.$activeName.style.color=t.config.colors.splashFont,e.$normalContent.style.backgroundColor=e.$activeContent.style.backgroundColor=t.config.colors.splashBackground,e.$normalIcon.style.backgroundImage='url("'+t.config.uris.icons.logoNormal+'")',e.$activeIcon.style.backgroundImage='url("'+t.config.uris.icons.logoActive+'")',e.$activeCloseIcon.style.backgroundImage="",e.classList.remove("disable"))},events:{"data:ready":function(e){d.active&&(this.focus(),e&&e===a.right?this.focusItem(this.map[0][5]):this.focusItem(this.map[0][0]))},"click:item":function(e){e.$item.data.disable||(core.taskManager.osdStack.forEach(function(e){e.$iframe.src!==location.href&&e.core.emit("hide",{source:core.sources.system})}),core.taskManager.runApp({config:e.$item.data.config,visible:!0,onload:function(){core.call("hide"),core.call("blur"),m&&m.emit("block",!1)}}))}}}),core.addListener("keydown:"+a.app,function(){core.applicationState.visible?(core.call("hide"),core.call("blur"),m&&(m.emit("close"),m=null)):((m=null)&&(m=null),g(),core.call("show"),core.call("focus"))}),core.addListener("hide",function(){core.call("hide"),m&&(m.emit("close"),m=null)}),core.addListener("intent",function(e){"taskmanager:show"===e.action&&(m&&(m=null),g(),core.call("show"),core.call("focus"),m=e,e.once("close",function(){m=null}))}),n.addListener("keydown",function(e){var t;f||e.code===a.up&&(f=!0,1===core.taskManager.runHistory.length?(t=n.$focusItem.data.config.pid,core.call("hide"),core.call("blur"),core.taskManager.close(core.taskManager.apps[t]),t=core.taskManager.runHistory.indexOf(n.$focusItem.data.config),core.taskManager.runHistory.splice(t,1),m&&m.emit("block",!1)):core.taskManager.topApp?core.taskManager.runHistory.length>0&&(t=n.$focusItem.data.config.pid,core.taskManager.close(core.taskManager.apps[t]),t=core.taskManager.runHistory.indexOf(n.$focusItem.data.config),core.taskManager.runHistory.splice(t,1),core.taskManager.runApp({config:core.taskManager.runHistory.pop(),visible:!0,onready:function(){setTimeout(function(){core.call("show"),core.call("focus")},0)}})):(t=n.$focusItem.data.config.pid,core.taskManager.close(core.taskManager.apps[t],!0),t=core.taskManager.runHistory.indexOf(n.$focusItem.data.config),core.taskManager.runHistory.splice(t,1),core.call("show"),core.call("focus")),g(),f=!1)}),o.addListener("keydown",function(e){e.code===a.back&&(core.call("hide"),core.call("blur"),m.emit("close"),m=null)}),d.addListener("keydown",function(e,t){if(0!==e.code&&null===d.activeComponent){switch(e.code){case a.app:case a.exit:case a.volumeUp:case a.volumeDown:return}if(t.ctrlKey||t.altKey||t.shiftKey)return;core.call("hide"),core.call("blur")}}),y(),document.getElementById("pageMainFooterLabel").innerText=gettext("Press OK to open or Up to close application"),d.add(n),d.once("show",function(){g()}),e.exports=d},function(e,t,i){"use strict";e.exports={backspace:8,tab:9,enter:13,escape:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,del:46}},function(e,t,i){"use strict";e.exports=i(20),e.exports.prototype.name="stb-component-page"},function(e,t,i){"use strict";var n=i(6);function a(e){e=e||{},this.active=!1,this.activeComponent=null,n.call(this,e),this.active=this.$node.classList.contains("active"),null===this.$node.parentNode&&document.body.appendChild(this.$node),this.page=this}a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.prototype.name="spa-component-page",e.exports=a},function(e,t,i){"use strict";var n=i(6),a=i(3);function o(e){e=e||{},this.map=[],this.$focusItem=null,this.data=[],this.cycleX=!0,this.cycleY=!0,this.focusX=0,this.focusY=0,e.className="grid "+(e.className||""),n.call(this,e),this.init(e)}function s(e,t,i,n,a,o){var s,c;for(s=i;s<i+a;s++){for(e.length<s+1&&e.push([]);void 0!==e[s][t];)t++;for(c=t;c<t+n;c++)e[s].length<c+1&&e[s].push(),e[s][c]=o,void 0===o.xPos&&(o.xPos=c),void 0===o.yPos&&(o.yPos=s)}}o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.prototype.renderItemDefault=function(e,t){e.innerText=t.value},o.prototype.renderItem=o.prototype.renderItemDefault,o.prototype.defaultEvents={mousewheel:function(e){e.wheelDeltaY&&this.move(e.wheelDeltaY>0?a.up:a.down),e.wheelDeltaX&&this.move(e.wheelDeltaX>0?a.left:a.right)},keydown:function(e){switch(e.code){case a.up:case a.down:case a.right:case a.left:this.move(e.code);break;case a.ok:this.events["click:item"]&&this.emit("click:item",{$item:this.$focusItem,event:e})}}},o.prototype.init=function(e){var t,i,n,a,o,c,r,l,d=this,p=!1,u=function(e){!0!==this.data.disable&&(d.focusItem(this),d.events["click:item"]&&d.emit("click:item",{$item:this,event:e}))},h=function(l){if(l&&d.data!==l&&(d.data=l,p=!0),e.render&&d.renderItem!==e.render&&(d.renderItem=e.render,p=!0),p){for(d.$table=document.createElement("table"),o=document.createElement("tbody"),d.data=function(e){var t,i,n;for(t=0;t<e.length;t++)for(i=0;i<e[t].length;i++)"object"==typeof(n=e[t][i])?(n.colSpan=n.colSpan||1,n.rowSpan=n.rowSpan||1):n=e[t][i]={value:e[t][i],colSpan:1,rowSpan:1};return e}(d.data),t=0;t<d.data.length;t++){for(n=o.insertRow(),i=0;i<d.data[t].length;i++)(a=n.insertCell(-1)).className="item",(r=d.data[t][i]).$item=a,a.colSpan=r.colSpan,a.rowSpan=r.rowSpan,r.focus&&(c=a),r.disable&&a.classList.add("disable"),r.mark&&a.classList.add("mark"),d.renderItem(a,r),a.data=r,a.addEventListener("click",u);o.appendChild(n)}d.map=function(e){var t,i,n,a=[];for(t=0;t<e.length;t++)for(i=0;i<e[t].length;i++)s(a,i,t,(n=e[t][i]).colSpan,n.rowSpan,n.$item),delete n.$item;return a}(d.data),d.$body.innerText=null,d.$table.appendChild(o),d.$body.appendChild(d.$table),c?d.focusItem(c):d.focusItem(d.map[0][0])}};void 0!==e.cycleX&&(this.cycleX=e.cycleX),void 0!==e.cycleY&&(this.cycleY=e.cycleY),e.provider&&(this.provider=e.provider,this.sizeX=e.sizeX,this.sizeY=e.sizeY),e.translate&&(this.translate=e.translate),e.provider?(l=this.provider.get(null,function(e,t){e&&d.events["data:error"]&&d.emit("data:error",e),h(d.translate(t)),d.events["data:ready"]&&d.emit("data:ready")}),this.events["data:get"]&&this.emit("data:get",{fresh:l})):h(e.data)},o.prototype.defaultTranslate=function(e){var t,i,n,a=[];for(t=0;t<this.sizeY;t++){for(n=[],i=0;i<this.sizeX;i++)n[i]=e[t*this.sizeX+i];a[t]=n}return a},o.prototype.translate=o.prototype.defaultTranslate,o.prototype.move=function(e){var t,i,n,o=this,s=this.focusX,c=this.focusY,r=!0,l=!1,d=!1;for(0;r;){switch(e){case a.up:c>0?c--:(this.cycleY&&(c=this.map.length-1,d=!0),l=!0);break;case a.down:c<this.map.length-1?c++:(this.cycleY&&(c=0,d=!0),l=!0);break;case a.right:s<this.map[c].length-1?s++:(this.cycleX&&(s=0,d=!0),l=!0);break;case a.left:s>0?s--:(this.cycleX&&(s=this.map[c].length-1,d=!0),l=!0)}s===this.focusX&&c===this.focusY&&(r=!1),this.map[c][s]!==this.map[this.focusY][this.focusX]&&!0!==this.map[c][s].data.disable&&(r=!1),l&&(r=!1,!0===this.map[c][s].data.disable&&(s=this.focusX,c=this.focusY))}this.focusItem(this.map[c][s]),this.focusX=s,this.focusY=c,l&&(this.provider&&(t=this.provider.get(e,function(t,a){if(t&&o.events["data:error"])o.emit("data:error",t);else if(a){for(o.data=o.translate(a),i=0;i<o.sizeY;i++)for(n=0;n<o.sizeX;n++)o.map[i][n].data=o.data[i][n],o.renderItem(o.map[i][n],o.data[i][n]);o.events["data:ready"]&&o.emit("data:ready",e)}}),this.events["data:get"]&&this.emit("data:get",{fresh:t})),this.events["overflow"]&&this.emit("overflow",{direction:e,cycle:d})),this.focusX,this.focusY},o.prototype.focusItem=function(e){var t=this.$focusItem;return!(!e||t===e||!0===e.data.disable)&&(null!==t&&(t.classList.remove("focus"),this.events["blur:item"]&&this.emit("blur:item",{$item:t})),this.focusX=e.xPos,this.focusY=e.yPos,this.$focusItem=e,e.classList.add("focus"),this.events["focus:item"]&&this.emit("focus:item",{$prev:t,$curr:e}),!0)},o.prototype.markItem=function(e,t){t?e.classList.add("mark"):e.classList.remove("mark"),e.data.mark=t},e.exports=o},function(e,t,i){"use strict";var n=i(1),a=i(3),o=i(2),s=o[screen.height]?o[screen.height].listSize:o[720].listSize,c=-1;function r(){n.call(this)}r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.pageSize=s,r.prototype.get=function(e,t){var i,n,o=[],s=window.core.taskManager.runHistory.length;if(e===a.right)c<s-this.pageSize&&++c;else if(e===a.left&&c>0)--c;else{if(null!==e)return;s>0&&(c=0)}for(i=s<=this.pageSize?0:(s-=c)-this.pageSize,n=s-1;n>=i;--n)o.push({config:window.core.taskManager.runHistory[n]});if(o.length>0){for(;o.length<this.pageSize;)o.push({config:{name:""},disable:!0});t(!1,o)}else t(!1,[{config:{name:""},disable:!0},{config:{name:""},disable:!0},{config:{name:""},disable:!0},{config:{name:""},disable:!0},{config:{name:""},disable:!0},{config:{name:""},disable:!0}])},e.exports=new r}]);
//# sourceMappingURL=main.js.map