module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function a(){this.events={}}a.prototype={addListener:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},once:function(e,t){var n=this;this.events[e]=this.events[e]||[],this.events[e].push(function a(){n.removeListener(e,a),t.apply(n,arguments)})},addListeners:function(e){var t;for(t in e)e.hasOwnProperty(t)&&this.addListener(t,e[t])},removeListener:function(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(function(e){return e!==t}),0===this.events[e].length&&(this.events[e]=void 0))},emit:function(e){var t,n=this.events[e];if(n)for(t=0;t<n.length;t++)n[t].apply(this,Array.prototype.slice.call(arguments,1))}},a.prototype.constructor=a,e.exports=a},function(e,t,n){"use strict";var a,o,r=n(0),s=n(2),i=new r,l=[],u={},d=2e3,c={wrongUrl:{code:"-1",message:""},wrongFileName:{code:"-2",message:""},fileAlreadyExist:{code:"-3",message:""},failedToCreateTask:{code:"-4",message:""},wrongDownloadItem:{code:"-5",message:""},wrongPathToStorage:{code:"-6",message:""}};function f(){var e,t,n,a;try{e=JSON.parse(stbDownloadManager.GetQueueInfo())}catch(t){e=[]}for(t=0;t<e.length;t++)e[t].state=Number(e[t].state),u[e[t].id]?(n=u[e[t].id],e[t].state!==i.states.PERMANENT_ERROR&&e[t].state!==i.states.TEMPORARY_ERROR||(e[t].progressPct=0),a=Math.ceil(e[t].progressPct),e[t].state===i.states.RUNNING&&a!==n.data.progress&&(n.data.progress=a,l[l.indexOf(n)].data.progress=a,i.events["progress"]&&i.emit("progress",{item:n,time:Date.now()})),e[t].state!==n.data.state&&(n.data.state=e[t].state,a!==n.data.progress&&(n.data.progress=a,l[l.indexOf(n)].data.progress=a),l[l.indexOf(n)].data.state=n.data.state,i.events["state"]&&i.emit("state",{item:n,time:Date.now()}))):((n=new r).data={name:e[t].filePath,id:e[t].id,path:e[t].mountPoint,priority:e[t].prio,progress:Math.ceil(e[t].progressPct>=0?e[t].progressPct:0),size:e[t].sizeTotal,state:e[t].state,url:e[t].url,attempt:e[t].attempt,priorityLevel:e[t].prioLevel,sizeDone:e[t].sizeDone,tempFile:e[t].tempFile,timeWasted:e[t].timeWasted},n.data.state!==i.states.PERMANENT_ERROR&&n.data.state!==i.states.TEMPORARY_ERROR||(n.data.progress=0),n.pause=function(){stbDownloadManager.StopJob(this.data.id)},n.resume=function(){stbDownloadManager.StartJob(this.data.id)},u[n.data.id]=n,l.push(n),i.events["add"]&&i.emit("add",{item:n,time:Date.now()}))}i.states={STOPPED:0,WAITING:1,RUNNING:2,FINISHED:3,TEMPORARY_ERROR:4,PERMANENT_ERROR:5},i.add=function(e,t){"function"==typeof t&&(e.url?e.name?gSTB.IsFileExist(e.name)?t(c.fileAlreadyExist):stbDownloadManager.AddJob(e.url,e.name)?t(null,!0):t(c.failedToCreateTask):t(c.wrongFileName):t(c.wrongUrl))},i.remove=function(e,t,n){"function"==typeof n&&(e&&e instanceof r?(stbDownloadManager.DeleteJob(e.data.id,!!t),delete u[e.data.id],l.splice(l.indexOf(e),1),n(null,!0),i.events["remove"]&&i.emit("remove",{item:e,time:Date.now()})):n(c.wrongDownloadItem))},i.restore=function(e,t){"function"==typeof t&&(e?(stbDownloadManager.RestoreJobs(e),t(null,!0),i.events["restore"]&&i.emit("restore",{time:Date.now()})):t(c.wrongPathToStorage))},i.validate=function(){var e,t,n,a=[],o=[],r=[];try{e=(e=JSON.parse(gSTB.GetStorageInfo("{}"))).result}catch(t){e=[]}for(t=0;t<e.length;t++)o.push(e[t].mountPath);for(t=0;t<l.length;t++)n=l[t].data.path,-1===o.indexOf(n)&&r.push(l[t]),-1===o.indexOf(n)&&-1===a.indexOf(n)&&a.push(n);r.forEach(function(e){i.events["remove"]&&i.emit("remove",{item:e,time:Date.now()}),delete u[e.data.id],l.splice(l.indexOf(e),1)}),a.forEach(function(e){stbDownloadManager.InvalidateCatalog(e)})},Object.defineProperties(i,{list:{get:function(){return l}},updateInterval:{get:function(){return d},set:function(e){d=e,clearInterval(a),a=setInterval(f,d)}}}),i.reset=function(){l=[],u={}},f(),a=setInterval(f,d),e.exports={onInit:function(e,t){s.load({name:window.core.environment.language,path:e.path+"lang"},function(){o=s.gettext,c.wrongUrl.message=o("Wrong url."),c.wrongFileName.message=o("Wrong fileName."),c.fileAlreadyExist.message=o("File already exist."),c.failedToCreateTask.message=o("Failed to create download."),c.wrongDownloadItem.message=o("Wrong download item."),c.wrongPathToStorage.message=o("Wrong path to storage."),t()})},onAppInit:function(e,t){t(null,i)}}},function(e,t,n){"use strict";var a=n(0),o=n(3),r=new a;function s(e){var t=new o(e);r._=r.gettext=t.gettext,r.pgettext=t.pgettext,r.ngettext=t.ngettext}r.defaultLanguage="en",r.load=function(e,t){var n;t=t||null,e.ext=e.ext||"json",e.path=e.path||"lang",e.name===r.defaultLanguage?(s(),null!==t&&t(null)):((n=new XMLHttpRequest).onload=function(){var e,a;try{a=JSON.parse(n.responseText)}catch(t){e=t}e?n.onerror(e):(s(a),null!==t&&t(null),r.events["load"]&&r.emit("load"))},n.ontimeout=n.onerror=function(e){s(),null!==t&&t(null),r.events["error"]&&r.emit("error",e)},n.open("GET",e.path+"/"+e.name+"."+e.ext,!0),n.send(null))},e.exports=r},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(e){return data[""][e]||e},this.pgettext=function(e,t){return data[e]&&data[e][t]||t},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext}]);
//# sourceMappingURL=main.js.map