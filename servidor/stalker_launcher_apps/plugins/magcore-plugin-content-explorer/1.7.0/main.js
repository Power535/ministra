module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function o(){this.events={}}o.prototype={addListener:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},once:function(t,e){var n=this;this.events[t]=this.events[t]||[],this.events[t].push(function o(){n.removeListener(t,o),e.apply(n,arguments)})},addListeners:function(t){var e;for(e in t)t.hasOwnProperty(e)&&this.addListener(e,t[e])},removeListener:function(t,e){this.events[t]&&(this.events[t]=this.events[t].filter(function(t){return t!==e}),0===this.events[t].length&&(this.events[t]=void 0))},emit:function(t){var e,n=this.events[t];if(n)for(e=0;e<n.length;e++)n[e].apply(this,Array.prototype.slice.call(arguments,1))}},o.prototype.constructor=o,t.exports=o},function(t,e,n){"use strict";t.exports={onContentBoardInit:n(2)}},function(t,e,n){"use strict";var o=screen.height,a=core.plugins.fs,r=1,i=1,u=20,s=30,l=40;function c(t,e){var n,o={action:"explorer:openResource",data:{resource:t},events:{}};if(e)for(n in e)o.data[n]=e[n];core.intent(o,function(t){})}t.exports=function(t,e){var p=n(3);p.load({name:core.environment.language,path:t.path+"lang"},function(){var f=n(0),d=n(5),m=p.gettext,g=new f,v=t.api,h=v.layouts.static,y=v.geometry.horizontal,x={storageItemsAmount:6,shortcuts:[{id:++r,layout:h,geometry:y,data:{name:m("Favorites"),icon:{normal:t.path+"img/"+o+"/favorites.normal.png",active:t.path+"img/"+o+"/favorites.active.png"}},onClick:function(){c(i)}},{id:++r,layout:h,geometry:y,data:{name:"SAMBA",icon:{normal:t.path+"img/"+o+"/smb.nfs.normal.png",active:t.path+"img/"+o+"/smb.nfs.active.png"}},onClick:function(){c(u)}},{id:++r,layout:h,geometry:y,data:{name:"NFS",icon:{normal:t.path+"img/"+o+"/smb.nfs.normal.png",active:t.path+"img/"+o+"/smb.nfs.active.png"}},onClick:function(){c(s)}},{id:++r,layout:h,geometry:y,data:{name:"UPnP",icon:{normal:t.path+"img/"+o+"/upnp.normal.png",active:t.path+"img/"+o+"/upnp.active.png"}},onClick:function(){c(l)}}]};a.onAppInit({},function(n,a){var i,u,s;a?(u=[],s={},i=function(e){var n,i,l,p=a.getMountPoints();for(n=0;n<[Object.keys(s),p][+e].length;n+=1)if(i=[Object.keys(s),p][+e][n],e){if(!s[i.sn])return s[i.sn]={id:++r,index:u.length,layout:h,geometry:y,data:{name:i.label||i.vendor||i.model,isReadOnly:i.isReadOnly,capacity:d(i.freeSize)+" / "+d(i.size),icon:{normal:t.path+"img/"+o+"/usb.normal.png",active:t.path+"img/"+o+"/usb.active.png"}},onClick:function(){c(null,{serialNumber:i.sn})}},u.push(s[i.sn]),s[i.sn]}else if(!p.some(function(t){return t[i]}))return l=s[i],u.splice(u.indexOf(l),1),delete s[i],l},a.onMount=function(t){t&&u.length+1===x.storageItemsAmount||g.emit(["remove","add"][+t],i(t))},a.getMountPoints().slice(0,x.storageItemsAmount).forEach(function(e){s[e.sn]={id:++r,layout:h,geometry:y,data:{name:e.label||e.vendor||e.model,isReadOnly:e.isReadOnly,capacity:d(e.freeSize)+" / "+d(e.size),icon:{normal:t.path+"img/"+o+"/usb.normal.png",active:t.path+"img/"+o+"/usb.active.png"}},onClick:function(){c(null,{serialNumber:e.sn})}},u.push(s[e.sn])}),e(null,{provider:g,data:u.concat(x.shortcuts)})):e(null,{provider:g,data:x.shortcuts})})})}},function(t,e,n){"use strict";var o=n(0),a=n(4),r=new o;function i(t){var e=new a(t);r._=r.gettext=e.gettext,r.pgettext=e.pgettext,r.ngettext=e.ngettext}r.defaultLanguage="en",r.load=function(t,e){var n;e=e||null,t.ext=t.ext||"json",t.path=t.path||"lang",t.name===r.defaultLanguage?(i(),null!==e&&e(null)):((n=new XMLHttpRequest).onload=function(){var t,o;try{o=JSON.parse(n.responseText)}catch(e){t=e}t?n.onerror(t):(i(o),null!==e&&e(null),r.events["load"]&&r.emit("load"))},n.ontimeout=n.onerror=function(t){i(),null!==e&&e(null),r.events["error"]&&r.emit("error",t)},n.open("GET",t.path+"/"+t.name+"."+t.ext,!0),n.send(null))},t.exports=r},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(t){return data[""][t]||t},this.pgettext=function(t,e){return data[t]&&data[t][e]||e},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e=1),t>=0&&t<1024?t+" B":t>=1024&&t<1048576?(t/1024).toFixed(e)+" KB":t>=1048576&&t<1073741824?(t/1048576).toFixed(e)+" MB":t>=1073741824&&t<1099511627776?(t/1073741824).toFixed(e)+" GB":t>=1099511627776?(t/1099511627776).toFixed(e)+" TB":t+" B"}}]);
//# sourceMappingURL=main.js.map