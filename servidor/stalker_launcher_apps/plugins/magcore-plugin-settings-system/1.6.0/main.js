module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var o=n(2),r=n(3),i=new o;function s(t){var e=new r(t);i._=i.gettext=e.gettext,i.pgettext=e.pgettext,i.ngettext=e.ngettext}i.defaultLanguage="en",i.load=function(t,e){var n;e=e||null,t.ext=t.ext||"json",t.path=t.path||"lang",t.name===i.defaultLanguage?(s(),null!==e&&e(null)):((n=new XMLHttpRequest).onload=function(){var t,o;try{o=JSON.parse(n.responseText)}catch(e){t=e}t?n.onerror(t):(s(o),null!==e&&e(null),i.events["load"]&&i.emit("load"))},n.ontimeout=n.onerror=function(t){s(),null!==e&&e(null),i.events["error"]&&i.emit("error",t)},n.open("GET",t.path+"/"+t.name+"."+t.ext,!0),n.send(null))},t.exports=i},function(t,e,n){"use strict";t.exports={onSettingsInit:function(t,e){n(0).load({name:core.environment.language,path:t.path+"lang"},function(){var t=n(0).gettext,o=[{id:"system",icon:"theme-icon-settings",name:t("System"),description:t("System Settings"),saveImmediate:!0},{id:"network",name:t("Network"),description:t("Configuring network connection settings"),icon:"theme-icon-lan"}];"emulator"!==window.core.device.model&&o.push({id:"video",name:t("Video"),description:t("Adjust video display settings"),icon:"theme-icon-monitor"}),e(null,{id:"system",name:"system section",description:"system section general description",sections:o})})}}},function(t,e,n){"use strict";function o(){this.events={}}o.prototype={addListener:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},once:function(t,e){var n=this;this.events[t]=this.events[t]||[],this.events[t].push(function o(){n.removeListener(t,o),e.apply(n,arguments)})},addListeners:function(t){var e;for(e in t)t.hasOwnProperty(e)&&this.addListener(e,t[e])},removeListener:function(t,e){this.events[t]&&(this.events[t]=this.events[t].filter(function(t){return t!==e}),0===this.events[t].length&&(this.events[t]=void 0))},emit:function(t){var e,n=this.events[t];if(n)for(e=0;e<n.length;e++)n[e].apply(this,Array.prototype.slice.call(arguments,1))}},o.prototype.constructor=o,t.exports=o},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(t){return data[""][t]||t},this.pgettext=function(t,e){return data[t]&&data[t][e]||e},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext}]);
//# sourceMappingURL=main.js.map