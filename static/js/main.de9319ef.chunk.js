(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=18},24:function(e,t,n){e.exports=n(38)},29:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(20),r=n.n(i),l=(n(29),n(8)),c=n(9),s=n(11),d=n(10),m=n(12),u=(n(30),n(21)),g=n(5),f=n(31),p=(n(32),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(u.a,null,a.a.createElement(g.a,{path:"/notes/*",component:function(e){var t=e.match;return"/notes/"===t.url?a.a.createElement(y,null):a.a.createElement(h,{file:t.url.replace("/notes/","")})}}))}}]),t}(a.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("pageshow",function(e){document.getElementById("files").innerHTML="";var t={};caches.open("files").then(function(e){e.keys().then(function(e){e.forEach(function(e){e.url.replace("https://18nshinagawa.github.io/notes/","").split("/").forEach(function(e,n){0===n&&(t[e]||(t[e]={}))})}),console.log(t)})})})}},{key:"render",value:function(){return a.a.createElement("div",{id:"container"},a.a.createElement("div",{id:"files"}))}}]),t}(a.a.Component),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).heading=0,n.math=0,n.objects={math:["math"],code:["code","language"],image:["url","text"],link:["url","text"]},n.object="",n.display=!1,n.style='\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css" integrity="sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ" crossorigin="anonymous">\n    <style>\n\n    body {\n        margin: 0;\n        background-color: #333333;\n        overflow: hidden;\n    }\n\n    #editor {\n        width: 16cm;\n        padding: 2.5cm;\n        background-color: white;\n        color: #333333;\n        outline: none;\n        font-family: \'georgia\', serif;\n        line-height: 1.5;\n        word-break: break-word;\n        caret-color: #4488FF;\n    }\n    \n    ::-moz-selection {\n        background-color: rgba(68, 136, 255, 0.25);\n    }\n    \n    #editor > :first-child {\n        margin-top: 0;\n    }\n    \n    #editor > :last-child {\n        margin-bottom: 0;\n    }\n\n    h1, h2, h3 {\n        text-align: center;\n        font-weight: normal;\n    }\n    \n    img {\n        width: 10.5cm;\n        display: block;\n        margin: auto;\n    }\n\n    .caption {\n        text-align: center;\n        margin-top: 0.5em;\n    }\n\n    .object {\n        -moz-user-select: all;\n    }\n\n    .object[data-object="math"] {\n        max-width: 16cm;\n        overflow: hidden;\n        display: inline-flex;\n    }\n    \n    .object[data-object="math"].display {\n        display: block;\n    }\n\n    a {\n        color: #4488FF;\n    }\n    \n    blockquote {\n        margin: 1em 0;\n        padding: 1em;\n        border-left: 2px solid #333333;\n    }\n\n    blockquote > :first-child {\n        margin-top: 0;\n    }\n    \n    blockquote > :last-child {\n        margin-bottom: 0;\n    }\n    \n    ul, ol {\n        color: inherit;\n    }\n\n    [data-object="code"] {\n        background-color: #EEEEEE;\n        font-family: \'monaco\';\n        max-width: 16cm;\n        overflow: hidden;\n        display: inline;\n        color: #0088FF;\n    }\n\n    [data-object="code"].display {\n        white-space: pre-wrap;\n        display: block;\n        padding: 8px;\n        margin: 1em 0;\n    }\n\n    .token.string {\n        color: #DD4433;\n    }\n\n    .token.keyword {\n        color: #4488FF;\n    }\n\n    .token.function {\n        color: #FF8800;\n    }\n\n    .token.class-name {\n        color: #119955;\n    }\n\n    .token.punctuation {\n        color: #999999;\n    }\n\n    .token.comment {\n        color: #9977BB;\n    }\n\n    .token.operator {\n        color: #888888;\n    }\n\n    table {\n        border-collapse: collapse;\n        margin: auto;\n    }\n\n    td, th {\n        border: 2px solid black;\n        padding: 8px;\n    }\n    \n    .page-break {\n        display: block;\n        height: 0.3125cm;\n        width: calc(100% + 5cm);\n        background-color: #333333;\n        left: -2.5cm;\n        position: relative;\n        margin: 2.5cm 0;\n        -moz-user-select: none;\n    }\n    \n    @media print {\n        #editor {\n            margin: 0;\n            padding: 0;\n            color-adjust: exact;\n        }\n\n        .page-break {\n            page-break-after: always;\n            visibility: hidden;\n        }\n    }\n\n    @page {\n        margin: 2.5cm;\n    }\n\n    </style>\n    ',n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("iframe").contentWindow.document;caches.open("files").then(function(n){n.match("/notes/"+e.props.file).then(function(e){return e.text()}).then(function(e){t.getElementById("editor").innerHTML=e,document.getElementById("iframe").style.height=t.getElementById("editor").clientHeight+"px"}).catch(function(e){console.warn(e),document.getElementById("iframe").style.height=t.getElementById("editor").clientHeight+"px"})}),t.open(),t.write(this.style+'<div id="editor" spellcheck="false" contentEditable="true"></div>'),t.close(),document.querySelector("title").innerText=this.props.file.replace(/.*\//,""),Array.from(t.getElementsByTagName("h1")).forEach(function(e,t){e.id=e.innerText.replace(/\s/g,""),0===t&&(document.querySelector("title").innerText=e.innerText)}),Array.from(t.querySelectorAll("h2, h3")).forEach(function(e){e.id=e.innerText.replace(/\s/g,"")}),document.getElementById("iframe").contentWindow.addEventListener("scroll",function(e){document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)"}),t.getElementById("editor").addEventListener("click",function(t){e.handleClickIframe(t)}),t.execCommand("defaultParagraphSeparator",!1,"p"),document.addEventListener("keydown",function(t){("MacIntel"===navigator.platform&&t.metaKey||"MacIntel"!==navigator.platform&&t.ctrlKey)&&-1!=="sop".indexOf(t.key.toLowerCase())&&e.handleKeyDownIframe(t)}),t.getElementById("editor").addEventListener("keydown",function(t){e.handleKeyDownIframe(t)}),t.getElementById("editor").addEventListener("keyup",function(t){e.handleKeyUpIframe(t)}),t.getElementById("editor").addEventListener("input",function(t){e.handleInputIframe(t)})}},{key:"handleKeyDownIframe",value:function(e){var t=this,n=document.getElementById("iframe").contentWindow.document,o=document.getElementById("iframe").contentWindow.getSelection().getRangeAt(0);if(3===o.commonAncestorContainer.nodeType&&"editor"===o.commonAncestorContainer.parentElement.id&&n.execCommand("formatBlock",!1,"p"),"MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey){if("x"===e.key.toLowerCase()&&e.shiftKey)e.preventDefault();else if(-1!=="123".indexOf(e.key))e.preventDefault(),n.execCommand("heading",!1,"h"+e.key);else if("0"===e.key)e.preventDefault(),n.execCommand("formatBlock",!1,"p");else if("l"===e.key.toLowerCase())e.preventDefault(),n.execCommand(e.shiftKey?"insertOrderedList":"insertUnorderedList");else if("b"===e.key)e.preventDefault(),n.execCommand("bold");else if("i"===e.key)e.preventDefault(),n.execCommand("italic");else if(-1!=="jghm".indexOf(e.key.toLowerCase()))e.preventDefault(),e.shiftKey?(this.display=!0,document.getElementById("display").checked=!0):(this.display=!1,document.getElementById("display").checked=!1),this.object={j:"code",m:"math",h:"link",g:"image"}[e.key.toLowerCase()],n.execCommand("insertHTML",!1,'<span class="selection '+(this.display?"display":"")+'"></span>'),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1],document.getElementById("options").style.top=n.querySelector(".selection").getBoundingClientRect().top+n.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+n.body.scrollTop+"px)",e.preventDefault(),document.getElementById("options").classList.add("focus"),document.getElementById("first").innerHTML="<br>",document.getElementById("second").innerHTML="<br>",document.getElementById("first").focus();else if("p"===e.key)e.preventDefault(),document.getElementById("iframe").contentWindow.print();else if("s"===e.key.toLowerCase())if(e.preventDefault(),e.shiftKey){var a=new Blob([this.style+'<div id="editor">'+n.getElementById("editor").innerHTML+"</div>"],{type:"text/html"}),i=window.document.createElement("a");i.href=window.URL.createObjectURL(a),i.download=(document.querySelector("title").innerText||"untitled")+".html",document.body.appendChild(i),i.click(),document.body.removeChild(i)}else caches.open("files").then(function(e){e.put("/notes/"+t.props.file,new Response(n.getElementById("editor").innerHTML))});else if("o"===e.key)e.preventDefault(),document.getElementById("open").click();else if("Enter"===e.key){e.preventDefault();var r=document.getElementById("iframe").contentWindow.getSelection(),l=r.getRangeAt(0),c=!1,s=!1;if(3===l.commonAncestorContainer.nodeType&&"editor"===l.commonAncestorContainer.parentElement.id&&n.execCommand("formatBlock",!1,"p"),3!==l.commonAncestorContainer.nodeType&&(!l.nextSibling||l.nextSibling.classList&&l.nextSibling.classList.contains("page-break"))&&(c=!0),3!==l.commonAncestorContainer.nodeType&&l.Offset===l.commonAncestorContainer.childNodes.length&&(c=!0),l.commonAncestorContainer.nextSibling&&"BR"!==l.commonAncestorContainer.nextSibling.nodeName||!l.commonAncestorContainer.nodeValue||l.commonAncestorContainer.nodeValue.length!==l.endOffset||(s=!0,(!l.commonAncestorContainer.parentElement.nextSibling||l.commonAncestorContainer.parentElement.nextSibling.classList&&l.commonAncestorContainer.parentElement.nextSibling.classList.contains("page-break"))&&(c=!0)),0===l.startOffset&&l.startContainer.parentElement.firstChild===l.startContainer&&(!l.startContainer.parentElement.previousSibling||l.startContainer.parentElement.previousSibling.classList&&l.startContainer.parentElement.previousSibling.classList.contains("page-break")))return;if(3!==l.startContainer.nodeType&&0===l.startOffset&&!l.startContainer.previousSibling)return;if(0===l.startOffset&&l.commonAncestorContainer.parentElement===n.getElementById("editor").firstChild)return;if("editor"===l.commonAncestorContainer.parentElement.id&&l.commonAncestorContainer.previousSibling&&l.commonAncestorContainer.previousSibling.classList.contains("page-break")&&(!l.commonAncestorContainer.previousSibling||l.commonAncestorContainer.previousSibling.classList.contains("page-break")))return;if(c)n.execCommand("insertHTML",!1,'<div class="page-break"><br></div><p><br></p>');else if(n.execCommand("insertHTML",!1,'<div class="page-break"><br></div>'),s){var d=n.createRange();d.setStart(l.commonAncestorContainer.parentElement.nextSibling.nextSibling,0),d.setEnd(l.commonAncestorContainer.parentElement.nextSibling.nextSibling,0),r.removeAllRanges(),r.addRange(d)}else{var m=n.createRange();3===l.commonAncestorContainer.nodeType?(m.setStart(l.commonAncestorContainer.parentElement,0),m.setEnd(l.commonAncestorContainer.parentElement,0)):(m.setStart(l.commonAncestorContainer,0),m.setEnd(l.commonAncestorContainer,0)),r.removeAllRanges(),r.addRange(m)}}else if("Backspace"===e.key){var u=document.getElementById("iframe").contentWindow.getSelection().getRangeAt(0);0===u.startOffset&&u.startContainer.parentElement.previousSibling&&u.startContainer.parentElement.previousSibling.classList.contains("page-break")?e.preventDefault():u.commonAncestorContainer.previousSibling&&u.commonAncestorContainer.previousSibling.classList.contains("page-break")&&e.preventDefault()}}else if("Tab"===e.key)e.preventDefault(),e.shiftKey?n.execCommand("outdent"):n.execCommand("indent");else if("Backspace"===e.key){var g=document.getElementById("iframe").contentWindow.getSelection(),f=g.getRangeAt(0);if(f.startContainer===f.endContainer&&f.startOffset===f.endOffset)if(f.startContainer.previousSibling&&0===f.startOffset&&f.startContainer.previousSibling.classList.contains("object"))e.preventDefault(),g.removeAllRanges(),f.selectNode(f.startContainer.previousSibling),g.addRange(f);else if(f.startContainer.children&&f.startContainer.children[f.startOffset-1]&&f.startContainer.children[f.startOffset-1].classList.contains("object"))e.preventDefault(),g.removeAllRanges(),f.selectNode(f.startContainer.children[f.startOffset-1]),g.addRange(f);else if(f.startContainer.children&&f.startContainer.children[f.startOffset-2]&&f.startContainer.children[f.startOffset-2].classList.contains("object"))e.preventDefault(),g.removeAllRanges(),f.selectNode(f.startContainer.children[f.startOffset-2]),g.addRange(f);else if(0===f.startOffset&&f.startContainer.parentElement.previousSibling&&f.startContainer.parentElement.previousSibling.classList.contains("page-break")){e.preventDefault();var p=n.createRange();p.setStartAfter(f.startContainer.parentElement.previousSibling.previousSibling.firstChild),p.setEndBefore(f.startContainer.parentElement),g.removeAllRanges(),g.addRange(p),n.execCommand("delete");var y=n.createRange();y.setStart(p.startContainer.nextSibling,0),y.setEnd(p.startContainer.nextSibling,0),g.removeAllRanges(),g.addRange(y)}else if(f.commonAncestorContainer.previousSibling&&f.commonAncestorContainer.previousSibling.classList.contains("page-break")){e.preventDefault();var h=n.createRange();h.setStartAfter(f.startContainer.previousSibling.previousSibling.firstChild),h.setEndBefore(f.startContainer),g.removeAllRanges(),g.addRange(h),n.execCommand("delete");var v=n.createRange();v.setStart(h.startContainer.nextSibling,0),v.setEnd(h.startContainer.nextSibling,0),g.removeAllRanges(),g.addRange(v)}}this.handleKeyUpIframe(e)}},{key:"handleKeyUpIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.getSelection(),n=t.getRangeAt(0);n.startContainer.parentElement&&n.startContainer.parentElement.closest(".object")&&(n.setStartBefore(n.startContainer.parentElement.closest(".object")),t.removeAllRanges(),t.addRange(n)),n.endContainer.parentElement&&n.endContainer.parentElement.closest(".object")&&(n.setEndAfter(n.endContainer.parentElement.closest(".object")),t.removeAllRanges(),t.addRange(n))}},{key:"handleClickIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=e.target.closest(".object");if(t.querySelector(".selection")&&t.querySelector(".selection").classList.remove("selection"),n){var o=document.getElementById("iframe").contentWindow.getSelection();o.removeAllRanges(),n.classList.add("selection"),document.getElementById("first").innerText=n.dataset.first,document.getElementById("second").innerText=n.dataset.second,document.getElementById("options").classList.add("focus"),document.getElementById("options").style.top=n.getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",this.object=n.dataset.object,n.classList.contains("display")?(this.display=!0,document.getElementById("display").checked=!0):(this.display=!1,document.getElementById("display").checked=!1),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1],document.getElementById("first").focus(),o=window.getSelection();var a=document.createRange();a.setStartAfter(document.getElementById("first").firstChild),o.removeAllRanges(),o.addRange(a)}else document.getElementById("options").classList.remove("focus")}},{key:"handleInputIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=document.getElementById("iframe").contentWindow.getSelection(),o=n.getRangeAt(0);if(document.querySelector("title").innerText=this.props.file.replace(/.*\//,""),Array.from(t.getElementsByTagName("h1")).forEach(function(e,t){e.id=e.innerText.replace(/\s/g,""),0===t&&(document.querySelector("title").innerText=e.innerText)}),Array.from(t.querySelectorAll("h2, h3")).forEach(function(e){e.id=e.innerText.replace(/\s/g,"")}),"editor"!==o.startContainer.id&&"editor"===o.endContainer.id){var a=t.createRange();a.setStart(o.startContainer.nextSibling.nextSibling,0),n.removeAllRanges(),n.addRange(a)}document.getElementById("iframe").style.height=t.getElementById("editor").clientHeight+"px"}},{key:"handleInput",value:function(e){var t=document.getElementById("iframe").contentWindow.document;if(t.querySelector(".selection")){var n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.selectNode(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n)}e&&(t.querySelector(".selection").classList.contains("display")?(this.display=!0,document.getElementById("display").classList.add("display")):(this.display=!1,document.getElementById("display").classList.remove("display"))),t.getElementById("editor").focus(),"image"===this.object?t.execCommand("insertHTML",!1,'<div class="selection object" data-object="image" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'" data-second="'+document.getElementById("second").innerText.replace(/"/g,"&quot;")+'"><div class="image"><img src="'+(this.images[document.getElementById("first").innerText]||document.getElementById("first").innerText.replace(/"/g,"&quot;"))+'"/></div><div class="caption">'+document.getElementById("second").innerText.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</div></div>"):"link"===this.object?t.execCommand("insertHTML",!1,'<span class="selection object" data-object="link" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'" data-second="'+document.getElementById("second").innerText.replace(/"/g,"&quot;")+'"><a href="'+document.getElementById("first").innerText.replace(/"/g,"&quot;").replace(/\s/,"")+'">'+document.getElementById("second").innerText.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</a></span>"):"math"===this.object?t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" data-object="math" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'">'+window.katex.renderToString(document.getElementById("first").innerText,{displayMode:this.display,throwOnError:!1,errorColor:"#DD4433"}).replace(/<span class="katex\x2Dmathml">[\0-\uFFFF]*<\/span><span class="katex\x2Dhtml"/,'<span class="katex-html"')+"</span>"):"code"===this.object&&t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" data-object="code" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'" data-second="'+document.getElementById("second").innerText+'">'+f.highlight(document.getElementById("first").innerText,f.languages.javascript,"javascript")+"</span>"),document.getElementById("options").style.top=t.querySelector(".selection").getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",e?e.target.focus():t.getElementById("editor").blur()}},{key:"handleKeyDown",value:function(e){if("Escape"===e.key)if(document.getElementById("first").innerText.match(/\S+/g)){var t=document.getElementById("iframe").contentWindow.document,n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.setStartAfter(t.querySelector(".selection")),n.setEndAfter(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n),t.getElementById("editor").focus(),document.getElementById("options").classList.remove("focus"),t.querySelector(".selection").classList.remove("selection")}else{var a=document.getElementById("iframe").contentWindow.document;this.delete(),document.getElementById("options").classList.remove("focus"),a.getElementById("editor").focus()}else("MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey)&&-1!=="jghm".indexOf(e.key.toLowerCase())&&e.preventDefault()}},{key:"delete",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=(t.createRange(),document.getElementById("iframe").contentWindow.getSelection()),o=t.createRange();o.selectNode(t.querySelector(".selection")),n.removeAllRanges(),n.addRange(o),t.execCommand("delete")}},{key:"handleMouseDown",value:function(e){if(document.getElementById("options").classList.contains("focus")&&!document.getElementById("first").innerText.length)this.delete();else{var t=document.getElementById("iframe").contentWindow.document;document.getElementById("options").classList.remove("focus"),t.querySelector(".selection")&&t.querySelector(".selection").classList.remove("selection")}}},{key:"handleChange",value:function(e){if("open"===e.target.id){var t=document.getElementById("iframe").contentWindow.document,n=e.target.files[0],o=new FileReader;o.onload=function(e){t.getElementById("editor").focus(),t.execCommand("selectAll"),t.execCommand("insertHTML",!1,e.target.result.match(/<div id="editor">([\0-\uFFFF]*)<\/div>/)[1])},o.readAsText(n)}else"display"===e.target.id&&(this.display=!this.display,this.handleInput())}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"editor"},a.a.createElement("div",{id:"options"},a.a.createElement("pre",{id:"first",spellCheck:"false",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleKeyDown(t)},onDrop:function(t){return e.handleDrop(t)}}),a.a.createElement("pre",{id:"second",spellCheck:"false",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleKeyDown(t)}}),a.a.createElement("label",{for:"display"},a.a.createElement("input",{type:"checkbox",id:"display",onChange:function(t){return e.handleChange(t)}}),a.a.createElement("span",null))),a.a.createElement("input",{id:"open",type:"file",onChange:function(t){return e.handleChange(t)}}),a.a.createElement("iframe",{id:"iframe",title:"iframe"}))}}]),t}(a.a.Component),v=p,E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/notes","/service-worker.js");E?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(t,e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.de9319ef.chunk.js.map