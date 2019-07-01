!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){var n=r(1);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(3)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"body {\r\n    height: 100%;\r\n    background-color: rgb(0, 0, 0);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\nh1 {\r\n    background-color: rgb(90, 90, 90);\r\n    border: 3px solid rgb(55, 55, 55);\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.tools {\r\n    display: flex;\r\n    width: 100px;\r\n    flex-direction: column;\r\n}\r\n\r\n.instruments {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(90, 90, 90);\r\n    border: 3px solid rgb(55, 55, 55);\r\n    border-radius: 5px;\r\n}\r\n\r\n#width {\r\n    width: 80px;\r\n}\r\n\r\n.pen,\r\n.line, \r\n.eraser,\r\n.bucket-full,\r\n.bucket,\r\n.pipette,\r\n.move,\r\n.rectngle,\r\n.stroke-rectngle,\r\n.circle,\r\n.stroke-circle {\r\n    height: 40px;\r\n    width: 40px;\r\n    margin: 3px 3px;\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.colors {\r\n    display: grid;\r\n    width: 300px;\r\n    margin: 20px auto;\r\n    font-size: 20px;\r\n}\r\n\r\n.frames {\r\n    margin: 0 40px;\r\n    max-height: 500px;\r\n    overflow-y: scroll;\r\n    background-color: rgb(90, 90, 90);\r\n    border: 3px solid rgb(55, 55, 55);\r\n    border-radius: 5px;\r\n}\r\n\r\n.frames::-webkit-scrollbar {\r\n    width: 1px;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.frames::-webkit-scrollbar-thumb {\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.frame-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.frame {\r\n    position: relative;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 5px auto;\r\n    border: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n.frame-image, \r\n#prevCanvas_img {\r\n    width: 100%;\r\n    height: 100% ;\r\n}\r\n\r\n.button-delete {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.button-copy {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\n.add,\r\n.save {\r\n    border-radius: 5px;\r\n    margin: 5px 5px;\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.canvas {\r\n    flex-grow: 5;\r\n    position: relative;\r\n}\r\n\r\n#myColor {\r\n    z-index: 1;\r\n    width: 650px;\r\n    height: 460px;\r\n    position: absolute;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n#myCanvas {\r\n    z-index: 3;\r\n    position: absolute;\r\n    border-radius: 5px;\r\n}\r\n\r\n#prevCanvas {\r\n    width: 300px;\r\n    height: 215px;\r\n    border: 3px solid rgb(55, 55, 55);\r\n    border-radius: 5px;\r\n}\r\n\r\n#myGrid{\r\n    z-index: 2;\r\n    position: absolute;\r\n    border: 3px solid rgb(55, 55, 55);\r\n    border-radius: 5px;\r\n}\r\n\r\n.preview {\r\n    margin: 10px 10px;\r\n}\r\n\r\n.play-wrapper {\r\n    align-content: center;\r\n    background-color: rgb(90, 90, 90);\r\n    border: 3px solid rgb(55, 55, 55);\r\n}\r\n\r\n.transform-tool {\r\n    background-color: rgb(90, 90, 90);\r\n    border: 3px solid rgb(55, 55, 55);\r\n}\r\n\r\n.play,\r\n.stop,\r\n.full,\r\n.turn,\r\n.clone,\r\n.mirror,\r\n.centering  {\r\n    margin: 5px 5px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n#range-wrapper {\r\n    display: none;\r\n    font-size: 15px;\r\n}\r\n\r\n.coordinates_data {\r\n    border: 1px solid rgb(255, 255, 255);\r\n}",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var i=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}var s;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){var n,i,o={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),a=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,h=0,l=[],d=r(4);function u(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=o[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(b(n.parts[s],e))}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(b(n.parts[s],e));o[n.id]={id:n.id,refs:1,parts:a}}}}function p(t,e){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function f(t,e){var r=a(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,r);r.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),f(t,e),e}function v(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function b(t,e){var r,n,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=h++;r=c||(c=g(e)),n=y.bind(null,r,s,!1),i=y.bind(null,r,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),f(t,e),e}(e),n=function(t,e,r){var n=r.css,i=r.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(n=d(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,r,e),i=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){m(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=p(t,e);return u(r,e),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i];(a=o[s.id]).refs--,n.push(a)}t&&u(p(t,e),e);for(i=0;i<n.length;i++){var a;if(0===(a=n[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function y(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,r){"use strict";r.r(e);class n{constructor(){this.frames=[],this.framesTwo=[],this.framesWrapper=document.querySelector(".frames-wrapper"),this.frameTemplate=document.querySelector("#frame-template")}frameDraw(t=1e3,e,r,n){let i,o,s;return 1e3===t?(o=e,s=r,i=n):(o=this.framesTwo[t].img,s=this.framesTwo[t].background,i=this.frames[t].data),this.framesTwo.push({img:o,background:s}),this.frames.push({data:i,background:s}),{url:i,id:this.frames.length-1}}frameDeleteHandler(t){const e=t,r=e.classList.contains("button-delete")?e.parentElement.id:e.parentElement.parentElement.id;this.framesTwo.splice(r,1),this.frames.splice(r,1)}frameCopyHandler(t){const e=t;return e.classList.contains("button-copy")?e.parentElement.id:e.parentElement.parentElement.id}saveFrame(t,e,r,n){this.framesTwo[t]={img:e,background:r},this.frames[t]={data:n,background:r}}cloneFram(t){const e=this.framesTwo[t].img,{background:r}=this.framesTwo[t],n=this.frames[t].data;this.framesTwo.fill({img:e,background:r},0),this.frames.fill({data:n,background:r},0)}}class i{constructor(){this.canvas_cont=document.querySelector(".canvas"),this.prevCanvasImg=document.getElementById("prevCanvas_img"),this.prevCanvas=document.getElementById("prevCanvas"),this.canvas=document.getElementById("myCanvas"),this.gridCanvas=document.getElementById("myGrid"),this.backgroundColor=document.getElementById("myColor"),this.context=this.canvas.getContext("2d"),this.paint=!1,this.model=new n,this.color="black",this.backroundcolor="white",this.width=10,this.speed=1,this.active_num=null,this.img={img:null,posX:0,poxY:0},this.myAnimation,this.circle={x1:0,y1:0,y2:0,x2:0},this.rect={startX:0,startY:0,w:0,h:0},this.grid={cellsNumberX:64,cellsNumberY:64,lineX:this.canvas.width/64,lineY:this.canvas.height/64},this.Grid()}Grid(){const t=this.gridCanvas.getContext("2d");t.strokeStyle="#808080";let e=0;for(let r=0;r<=this.grid.cellsNumberX;r+=1)t.beginPath(),t.moveTo(e,0),t.lineTo(e,this.canvas.height),t.stroke(),e+=this.grid.lineX;e=0;for(let r=0;r<=this.grid.cellsNumberY;r+=1)t.beginPath(),t.moveTo(0,e),t.lineTo(this.canvas.width,e),t.stroke(),e+=this.grid.lineY}down(t){this.paint=!0,this.context.beginPath();const e=t.pageX-this.canvas_cont.offsetLeft,r=t.pageY-this.canvas_cont.offsetTop;this.context.moveTo(e,r)}move(t,e="pen"){if(!0===this.paint){const r=t.pageX-this.canvas_cont.offsetLeft,n=t.pageY-this.canvas_cont.offsetTop;this.context.lineTo(r,n),this.context.lineWidth=this.width,"pen"===e?this.context.strokeStyle=this.color:this.context.globalCompositeOperation="destination-out",this.context.stroke()}}up(){this.paint=!1,this.context.globalCompositeOperation="source-over"}clear(){this.backroundcolor="white",this.backgroundColor.style.backgroundColor=this.backroundcolor,this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}frameDraw(t=1e3){const e=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),r=this.canvas.toDataURL(),n=this.model.frameDraw(t,e,this.backroundcolor,r);this.createFrame(n),this.clear()}createFrame(t={}){const e=document.importNode(this.model.frameTemplate.content,!0),r=e.querySelector(".frame-image"),n=e.querySelector(".frame");n.id=`${t.id}`,r.src=this.model.frames[t.id].data,n.style.backgroundColor=this.model.frames[t.id].background;const i=document.createDocumentFragment();e.querySelector(".button-delete").addEventListener("click",t=>this.frameDeleteHandler(t)),e.querySelector(".button-copy").addEventListener("click",t=>this.frameCopyHandler(t)),i.appendChild(e),this.model.framesWrapper.appendChild(i),this.active_num=this.model.framesTwo.length-1}refactior(){this.model.framesWrapper.innerHTML="",this.model.frames.forEach((t,e)=>{this.createFrame({url:t,id:e})})}frameDeleteHandler(t){const e=t.target;this.model.frameDeleteHandler(e),this.refactior()}frameCopyHandler(t){const e=t.target,r=this.model.frameCopyHandler(e);this.frameDraw(r)}saveFrame(){if(0!==this.model.framesTwo.length){const t=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),e=this.canvas.toDataURL();this.model.saveFrame(this.active_num,t,this.backroundcolor,e),this.refactior()}}goToTheFram(t){this.active_num=t,this.drawing(t)}changeColor(t){this.color=t.target.value}selectColor(t){const e=t.pageX-this.canvas_cont.offsetLeft,r=t.pageY-this.canvas_cont.offsetTop;return this.color=`rgba(${this.context.getImageData(e,r,1,1).data.join(", ")})`,this.context.getImageData(e,r,1,1).data}changeWidth(t){this.width=t.target.value}changeSpeed(t){this.speed=1e3/t.target.value}bucketFull(){this.backgroundColor.style.backgroundColor=this.color,this.backroundcolor=this.backgroundColor.style.backgroundColor}bucket(t,e={b:0,g:0,r:0}){const r=t.pageX-this.canvas_cont.offsetLeft,n=t.pageY-this.canvas_cont.offsetTop,i=this.context.getImageData(r,n,1,1).data,o=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),{data:s}=o;for(let t=0;t<s.length;t+=4)s[t]===i[0]&&s[t+1]===i[1]&&s[t+2]===i[2]&&(s[t]=e.r,s[t+1]=e.g,s[t+2]=e.b);this.context.putImageData(o,0,0)}upLine(t){this.paint=!1;const e=t.pageX-this.canvas_cont.offsetLeft,r=t.pageY-this.canvas_cont.offsetTop;this.context.lineTo(e,r),this.context.lineWidth=this.width,this.context.stroke()}rectangle(t){this.context.fillStyle=this.color,this.context.lineWidth=this.width,"stroke"===t?this.context.strokeRect(this.rect.startX,this.rect.startY,this.rect.w,this.rect.h):this.context.fillRect(this.rect.startX,this.rect.startY,this.rect.w,this.rect.h)}downRectangle(t){this.rect.startX=t.pageX-this.canvas_cont.offsetLeft,this.rect.startY=t.pageY-this.canvas_cont.offsetTop,this.paint=!0}moveRectangle(t){this.paint&&(this.rect.w=t.pageX-this.canvas_cont.offsetLeft-this.rect.startX,this.rect.h=t.pageY-this.canvas_cont.offsetTop-this.rect.startY)}upRectangle(t="none"){this.rectangle(t),this.paint=!1}paintCircle(t){const e=.5*(this.x2-this.x1),r=.5*(this.y2-this.y1),n=this.x1+e,i=this.y1+r;this.context.beginPath(),this.context.lineWidth=this.width,this.context.moveTo(n+e*Math.cos(0),i+r*Math.sin(0));for(let t=.01;t<2*Math.PI-.01;t+=.01)this.context.lineTo(n+e*Math.cos(t),i+r*Math.sin(t));this.context.closePath(),"stroke"===t?(this.context.strokeStyle=this.color,this.context.stroke()):(this.context.fillStyle=this.color,this.context.fill())}downCircle(t){const e=this.canvas.getBoundingClientRect();this.x1=t.clientX-e.left,this.y1=t.clientY-e.top,this.paint=!0}moveCircle(t){if(!this.paint)return;const e=this.canvas.getBoundingClientRect();this.x2=t.clientX-e.left,this.y2=t.clientY-e.top}upCircle(t="none"){this.paintCircle(t),this.paint=!1}drawing(t){this.clear(),this.context.putImageData(this.model.framesTwo[t].img,0,0),this.backgroundColor.style.backgroundColor=this.model.framesTwo[t].background,this.backroundcolor=this.model.framesTwo[t].background}drawingMin(t){this.prevCanvasImg.src=this.model.frames[t].data,this.prevCanvasImg.style.backgroundColor=this.model.frames[t].background}playFrams(){let t=0;0!==this.model.framesTwo.length&&(this.myAnimation=setInterval(()=>{this.drawingMin(t),t>=this.model.framesTwo.length-1?t=0:t+=1},this.speed))}stopPlay(){clearInterval(this.myAnimation)}fullScreen(){document.fullscreenElement?document.exitFullscreen():this.prevCanvas.requestFullscreen().catch(t=>{alert(`Error attempting to enable full-screen mode: ${t.message} (${t.name})`)})}turn(){this.clear();const t=new Image;t.src=this.model.frames[this.active_num].data,this.context.save(),this.context.translate(this.context.canvas.width/2,this.context.canvas.height/2),this.context.rotate(Math.PI/2),this.context.drawImage(t,-t.width/2,-t.height/2),this.context.restore(),this.context.resetTransform(),this.saveFrame()}clone(){this.model.cloneFram(this.active_num),this.refactior()}mirror(){this.clear();const t=new Image;t.src=this.model.frames[this.active_num].data,this.context.drawImage(t,t.width,0),this.context.save(),this.context.translate(t.width,0),this.context.scale(-1,1),this.context.drawImage(t,0,0),this.context.restore(),this.context.setTransform(1,0,0,1,0,0),this.context.resetTransform(),this.saveFrame()}showCoordinates(t){document.querySelector(".coordinates").innerHTML="",document.querySelector(".coordinates").innerHTML=`<p class="coordinates_data">${(t.pageX-this.canvas_cont.offsetLeft)/64}/${(t.pageX-this.canvas_cont.offsetLeft)/64}</p>`}downCanvas(t){this.paint=!0,this.img.img=new Image;const e=this.canvas.toDataURL();this.img.img.src=e,this.img.posX=t.pageX-this.canvas_cont.offsetLeft,this.img.posY=t.pageY-this.canvas_cont.offsetTop}moveCanvas(t){if(!0===this.paint){this.clear();const e=t.pageX-this.canvas_cont.offsetLeft-this.img.posX,r=t.pageY-this.canvas_cont.offsetTop-this.img.posY;this.context.drawImage(this.img.img,e,r)}}upCanvas(){this.paint=!1}}r(0);r.d(e,"default",function(){return o});class o{constructor(){this.view=new i,this.dones=["turn","clone","mirror","centering","bucket-full","bucket","pipette","pen","line","eraser","rectngle","stroke-rectngle","circle","stroke-circle","play","stop","full","save","add","move"],this.do="pen",this.was="pen",this.tools=document.querySelector(".tools"),this.player=document.querySelector(".play-wrapper"),this.framsControl=document.querySelector(".button-wrapper"),this.transformControl=document.querySelector(".transform-tool"),document.getElementById("get_color").addEventListener("change",t=>this.view.changeColor(t)),document.getElementById("speed").addEventListener("change",t=>this.view.changeSpeed(t)),this.tools.addEventListener("click",t=>{this.done(t),"pen"===this.do||"eraser"===this.do||"line"===this.do||"circle"===this.do||"stroke-circle"===this.do||"stroke-rectngle"===this.do||"rectngle"===this.do?(document.getElementById("range-wrapper").style.display="block",document.getElementById("width").addEventListener("change",t=>this.view.changeWidth(t))):document.getElementById("range-wrapper").style.display="none"}),this.framsControl.addEventListener("click",t=>{this.done(t),"add"===this.do&&(this.do=this.was,this.view.frameDraw()),"save"===this.do&&(this.do=this.was,this.view.saveFrame())}),this.player.addEventListener("click",t=>{this.done(t),"play"===this.do&&(this.view.playFrams(),this.do=this.was,document.querySelector(".play").disabled=!0),"stop"===this.do&&(document.querySelector(".play").disabled=!1,this.do=this.was,this.view.stopPlay()),"full"===this.do&&(this.do=this.was,this.view.fullScreen())}),this.transformControl.addEventListener("click",t=>{this.done(t),"turn"===this.do&&this.view.turn(),"clone"===this.do&&this.view.clone(),"mirror"===this.do&&this.view.mirror(),"centering"===this.do&&this.view.centering(),this.do=this.was}),this.view.canvas.addEventListener("click",t=>{"bucket-full"===this.do&&this.view.bucketFull(this.hexToRgb(this.view.color)),"bucket"===this.do&&this.view.bucket(t,this.hexToRgb(this.view.color)),"pipette"===this.do&&(document.getElementById("get_color").value=this.rgb2hex(this.view.selectColor(t)))}),this.view.canvas.addEventListener("mousemove",t=>{this.view.showCoordinates(t)}),this.view.canvas.addEventListener("mouseout",()=>{document.querySelector(".coordinates").innerHTML=""}),this.view.canvas.addEventListener("mousedown",t=>{"pen"===this.do&&this.view.down(t),"line"===this.do&&this.view.down(t),"eraser"===this.do&&this.view.down(t),"circle"!==this.do&&"stroke-circle"!==this.do||this.view.downCircle(t),"rectngle"!==this.do&&"stroke-rectngle"!==this.do||this.view.downRectangle(t),"move"===this.do&&this.view.downCanvas(t)}),this.view.canvas.addEventListener("mousemove",t=>{"pen"===this.do&&this.view.move(t),"eraser"===this.do&&this.view.move(t,"eraser"),"circle"!==this.do&&"stroke-circle"!==this.do||this.view.moveCircle(t),"rectngle"!==this.do&&"stroke-rectngle"!==this.do||this.view.moveRectangle(t),"move"===this.do&&this.view.moveCanvas(t)}),this.view.canvas.addEventListener("mouseup",t=>{"pen"===this.do&&this.view.up(),"line"===this.do&&this.view.upLine(t),"eraser"===this.do&&this.view.up(),"circle"===this.do&&this.view.upCircle(),"stroke-circle"===this.do&&this.view.upCircle("stroke"),"rectngle"===this.do&&this.view.upRectangle(),"stroke-rectngle"===this.do&&this.view.upRectangle("stroke"),"move"===this.do&&this.view.upCanvas()}),this.view.model.framesWrapper.addEventListener("click",t=>{const e=("IMG"===t.target.nodeName?t.target.parentElement:t.target).id;null!==e&&this.view.goToTheFram(e)})}done(t){const e=t.target.classList.contains("material-icons")||"IMG"===t.target.nodeName?t.target.parentElement.className:t.target.className;this.was="add"!==this.do||"save"!==this.do||"play"!==this.do||"stop"!==this.do||"full"!==this.do||"clone"!==this.do||"turn"!==this.do?this.do:this.was,this.do=-1!=this.dones.indexOf(e)?e:"pen"}componentToHex(t){const e=t.toString(16);return 1==e.length?`0${e}`:e}rgb2hex(t=[0,0,0,0]){return`#${this.componentToHex(t[0])}${this.componentToHex(t[1])}${this.componentToHex(t[2])}`}hexToRgb(t){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}}const s=new o;document.addEventListener("DOMContentLoaded",s.init)}]);