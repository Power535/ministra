module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r,o,i=n(1);t.exports={onInit:function(t,e){e()},onAppInit:function(t,e){e(null,{})},onSettingsInit:function(t,e){i.load({name:window.core.environment.language,path:t.path+"lang"},function(){o=i.gettext,e(null,function(t){var e={content:[{id:"ntp",parent:"system",type:"option",name:o("NTP server"),description:[{label:o("URL")+":",value:window.core.environment.ntpurl},{label:"",value:o("Setting up the NTP server as a time source to synchronize time on a set-top box via a local or Internet network.")}],icon:"theme-icon-ntp-server",config:{type:"qwerty"},render:t.api.renders.input,getter:t.api.getters.environment,environment:{ntpurl:"pool.ntp.org"},prepareForRender:function(t,e){this.config.value=t["ntpurl"],e()},prepareForSave:function(n,i){this.environment["ntpurl"]=n,clearTimeout(r),r=setTimeout(function(){gSTB.ServiceControl("ntp","restart")},100),i(null,function(){t.api.actions.setInfo({description:[{label:o("URL")+":",value:n},{label:"",value:o("Setting up the NTP server as a time source to synchronize time on a set-top box via a local or Internet network.")}]}),e&&e.content&&e.content[0]&&e.content[0].description&&(e.content[0].description[0].value=n)})},saver:t.api.savers.environment}]};return e}(t))})}}},function(t,e,n){"use strict";var r=n(2),o=n(3),i=new r;function a(t){var e=new o(t);i._=i.gettext=e.gettext,i.pgettext=e.pgettext,i.ngettext=e.ngettext}i.defaultLanguage="en",i.load=function(t,e){var n;e=e||null,t.ext=t.ext||"json",t.path=t.path||"lang",t.name===i.defaultLanguage?(a(),null!==e&&e(null)):((n=new XMLHttpRequest).onload=function(){var t,r;try{r=JSON.parse(n.responseText)}catch(e){t=e}t?n.onerror(t):(a(r),null!==e&&e(null),i.events["load"]&&i.emit("load"))},n.ontimeout=n.onerror=function(t){a(),null!==e&&e(null),i.events["error"]&&i.emit("error",t)},n.open("GET",t.path+"/"+t.name+"."+t.ext,!0),n.send(null))},t.exports=i},function(t,e,n){"use strict";function r(){this.events={}}r.prototype={addListener:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},once:function(t,e){var n=this;this.events[t]=this.events[t]||[],this.events[t].push(function r(){n.removeListener(t,r),e.apply(n,arguments)})},addListeners:function(t){var e;for(e in t)t.hasOwnProperty(e)&&this.addListener(e,t[e])},removeListener:function(t,e){this.events[t]&&(this.events[t]=this.events[t].filter(function(t){return t!==e}),0===this.events[t].length&&(this.events[t]=void 0))},emit:function(t){var e,n=this.events[t];if(n)for(e=0;e<n.length;e++)n[e].apply(this,Array.prototype.slice.call(arguments,1))}},r.prototype.constructor=r,t.exports=r},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(t){return data[""][t]||t},this.pgettext=function(t,e){return data[t]&&data[t][e]||e},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext}]);
//# sourceMappingURL=main.js.map