module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function o(){this.events={}}o.prototype={addListener:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},once:function(e,t){var n=this;this.events[e]=this.events[e]||[],this.events[e].push(function o(){n.removeListener(e,o),t.apply(n,arguments)})},addListeners:function(e){var t;for(t in e)e.hasOwnProperty(t)&&this.addListener(t,e[t])},removeListener:function(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(function(e){return e!==t}),0===this.events[e].length&&(this.events[e]=void 0))},emit:function(e){var t,n=this.events[e];if(n)for(t=0;t<n.length;t++)n[t].apply(this,Array.prototype.slice.call(arguments,1))}},o.prototype.constructor=o,e.exports=o},function(e,t,n){"use strict";var o,r,a,i,u=n(0),s=n(2),l=new u,c=[],d=core.environment.availableLanguages;function f(){var e,t,n,o=!0;for(a=r.getItem("layouts")||[],t=d.map(function(e){return e.code}),n=a.map(function(e){return e.code}),e=0;e<d.length;e++)-1!==n.indexOf(d[e].code)?a[e].enable&&(o=!1,c.push(a[e].code)):a.push({code:d[e].code,name:d[e].name,enable:!1});for(o&&("en"!==core.environment.language&&c.push(core.environment.language),c.push("en")),e=0;e<a.length;e++)-1!==t.indexOf(a[e].code)?o&&-1!==c.indexOf(a[e].code)&&(a[e].enable=!0):(a.splice(e,1),e--)}l.get=function(){return c},e.exports={onInit:function(e,t){r=e.storage,f(),t&&t()},onSettingsInit:function(e,t){o=e.api,r=e.storage,a||f(),s.load({name:core.environment.language,path:e.path+"lang"},function(){var e;i=s.gettext,e=function(){var e,t={id:"keyboardLayouts",name:i("Keyboard layouts"),description:i("Set the default keyboard layout language."),icon:"theme-icon-rc-vk",sections:[{id:"keyboardLayouts",name:i("Keyboard layouts"),description:i("Set the default keyboard layout language."),icon:"theme-icon-rc-vk",parent:"system"}],options:[],content:[]};function n(e,t){t(a[this.index].enable)}function u(e,t){var n=c.indexOf(a[this.index].code);if(e)a[this.index].enable=e,-1===n&&c.push(a[this.index].code);else if(-1!==n){if(1===c.length)return core.notify({title:i("None of the proposed layouts has been selected. Action has been canceled."),icon:"alert",type:"warning",timeout:1e4}),void t(!0);a[this.index].enable=e,c.splice(n,1)}r.setItem("layouts",a),l.emit("update",c),t()}for(e=0;e<a.length;e++)t.options.push({id:"layout"+a[e].code,name:a[e].name,description:"",icon:"theme-icon-rc-vk",render:o.renders.toggle,saveImmediate:!0,data:{},index:e,prepareForRender:n,prepareForSave:u,parent:"keyboardLayouts"});return t}(),t(null,e)})},onAppInit:function(e,t){t(null,l)}}},function(e,t,n){"use strict";var o=n(0),r=n(3),a=new o;function i(e){var t=new r(e);a._=a.gettext=t.gettext,a.pgettext=t.pgettext,a.ngettext=t.ngettext}a.defaultLanguage="en",a.load=function(e,t){var n;t=t||null,e.ext=e.ext||"json",e.path=e.path||"lang",e.name===a.defaultLanguage?(i(),null!==t&&t(null)):((n=new XMLHttpRequest).onload=function(){var e,o;try{o=JSON.parse(n.responseText)}catch(t){e=t}e?n.onerror(e):(i(o),null!==t&&t(null),a.events["load"]&&a.emit("load"))},n.ontimeout=n.onerror=function(e){i(),null!==t&&t(null),a.events["error"]&&a.emit("error",e)},n.open("GET",e.path+"/"+e.name+"."+e.ext,!0),n.send(null))},e.exports=a},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(e){return data[""][e]||e},this.pgettext=function(e,t){return data[e]&&data[e][t]||t},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext}]);
//# sourceMappingURL=main.js.map