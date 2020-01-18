module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o,r,a,i,c=n(1);function s(e){var t=[],n=function(){gSTB.ConfigNetRc(r,a),gSTB.SetNetRcStatus(o),e.storage.setItem("rcEnable",o),e.storage.setItem("rcDeviceName",r),e.storage.setItem("rcPassword",a)};o?(r||t.push(i("Device name")),a||t.push(i("Password")),t.length?core.notify({title:i("The following fields have been completed incorrectly.")+": "+t.join(", "),icon:"alert",type:"error"}):n()):n()}e.exports={onInit:function(e,t){o=void 0!==e.storage.getItem("rcEnable")&&e.storage.getItem("rcEnable"),r=void 0===e.storage.getItem("rcDeviceName")?"":e.storage.getItem("rcDeviceName"),a=void 0===e.storage.getItem("rcPassword")?"":e.storage.getItem("rcPassword"),o&&(gSTB.ConfigNetRc(r,a),gSTB.SetNetRcStatus(o)),t()},onSettingsInit:function(e,t){var n=e.api;c.load({name:core.environment.language,path:e.path+"lang"},function(){i=c.gettext,t(null,{id:"remoteControl",name:i("Remote control"),description:i("The Remote control function allows you to connect devices to the set-top box remotely (for example, a mobile phone with installed MAGic Remote App)"),icon:"theme-icon theme-icon-rc",sections:[{id:"remoteControl",name:i("Remote control"),description:i("The Remote control function allows you to connect devices to the set-top box remotely (for example, a mobile phone with installed MAGic Remote App)"),icon:"theme-icon theme-icon-rc",parent:"system"}],options:[{id:"rcEnable",name:i("Enable remote control"),description:i("Enable remote control function"),icon:"theme-icon theme-icon-rc",render:n.renders.toggle,saveImmediate:!0,data:{rcEnable:o},prepareForRender:function(e,t){t(!!e.rcEnable)},prepareForSave:function(t,n){this.data.rcEnable=o=t,s(e),n()},parent:"remoteControl"},{id:"rcDeviceName",name:i("Device name"),description:i("Enter the device name (for example, when you start the MAGic Remote application on your mobile device, you will need to select a device with the given name from the list)"),icon:"theme-icon theme-icon-edit",render:n.renders.input,config:{type:"qwerty"},saveImmediate:!0,data:{rcDeviceName:r},prepareForRender:function(e,t){t(e.rcDeviceName)},prepareForSave:function(t,n){this.data.rcDeviceName=r=t,s(e),n()},parent:"remoteControl"},{id:"rcPassword",name:i("Password"),description:i("Enter the password (for example, this password will be requested by the MAGic Remote application after selecting the device from the list)"),icon:"theme-icon theme-icon-lock",render:n.renders.input,config:{type:"password"},saveImmediate:!0,data:{rcPassword:a},prepareForRender:function(e,t){t(e.rcPassword)},prepareForSave:function(t,n){this.data.rcPassword=a=t,s(e),n()},parent:"remoteControl"}]})})}}},function(e,t,n){"use strict";var o=n(2),r=n(3),a=new o;function i(e){var t=new r(e);a._=a.gettext=t.gettext,a.pgettext=t.pgettext,a.ngettext=t.ngettext}a.defaultLanguage="en",a.load=function(e,t){var n;t=t||null,e.ext=e.ext||"json",e.path=e.path||"lang",e.name===a.defaultLanguage?(i(),null!==t&&t(null)):((n=new XMLHttpRequest).onload=function(){var e,o;try{o=JSON.parse(n.responseText)}catch(t){e=t}e?n.onerror(e):(i(o),null!==t&&t(null),a.events["load"]&&a.emit("load"))},n.ontimeout=n.onerror=function(e){i(),null!==t&&t(null),a.events["error"]&&a.emit("error",e)},n.open("GET",e.path+"/"+e.name+"."+e.ext,!0),n.send(null))},e.exports=a},function(e,t,n){"use strict";function o(){this.events={}}o.prototype={addListener:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},once:function(e,t){var n=this;this.events[e]=this.events[e]||[],this.events[e].push(function o(){n.removeListener(e,o),t.apply(n,arguments)})},addListeners:function(e){var t;for(t in e)e.hasOwnProperty(t)&&this.addListener(t,e[t])},removeListener:function(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(function(e){return e!==t}),0===this.events[e].length&&(this.events[e]=void 0))},emit:function(e){var t,n=this.events[e];if(n)for(t=0;t<n.length;t++)n[t].apply(this,Array.prototype.slice.call(arguments,1))}},o.prototype.constructor=o,e.exports=o},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(e){return data[""][e]||e},this.pgettext=function(e,t){return data[e]&&data[e][t]||t},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext}]);
//# sourceMappingURL=main.js.map