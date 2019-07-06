(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(4),r=n.n(i),s=(n(15),n(5)),l=n(6),c=n(8),d=n(7),m=n(9),g=(n(16),n(17)),u=(n(18),function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).heading=0,n.math=0,n.objects={math:["math"],code:["code","language"],image:["url","text"],link:["url","text"]},n.object="",n.display=!1,n.html=localStorage.getItem("html")?localStorage.getItem("html"):"<br>",n.style='\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css" integrity="sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ" crossorigin="anonymous">\n    <style>\n\n    body {\n        margin: 0;\n        background-color: #333333;\n    }\n\n    #editor {\n        width: 16cm;\n        padding: 2.5cm;\n        margin: 0.3125cm auto;\n        background-color: white;\n        color: #333333;\n        outline: none;\n        font-family: \'georgia\', serif;\n        line-height: 1.5;\n        word-break: break-word;\n        overflow: hidden;\n        caret-color: #4488FF;\n    }\n    \n    ::-moz-selection {\n        background-color: rgba(68, 136, 255, 0.25);\n    }\n    \n    #editor > :first-child {\n        margin-top: 0;\n    }\n    \n    #editor > :last-child {\n        margin-bottom: 0;\n    }\n    \n    img {\n        width: 10.5cm;\n        display: block;\n        margin: auto;\n    }\n\n    .caption {\n        text-align: center;\n        margin-top: 0.5em;\n    }\n\n    .object {\n        -moz-user-select: all;\n    }\n\n    .object[data-object="math"] {\n        max-width: 16cm;\n        overflow: hidden;\n        display: inline-flex;\n    }\n    \n    .object[data-object="math"].display {\n        display: block;\n    }\n\n    a {\n        color: #4488FF;\n    }\n    \n    blockquote {\n        margin: 1em 0;\n        padding: 1em;\n        border-left: 2px solid #333333;\n    }\n\n    blockquote > :first-child {\n        margin-top: 0;\n    }\n    \n    blockquote > :last-child {\n        margin-bottom: 0;\n    }\n    \n    ul, ol {\n        color: inherit;\n    }\n\n    [data-object="code"] {\n        background-color: #EEEEEE;\n        font-family: \'monaco\';\n        max-width: 16cm;\n        overflow: hidden;\n        display: inline;\n        color: #0088FF;\n    }\n\n    [data-object="code"].display {\n        white-space: pre-wrap;\n        display: block;\n        padding: 8px;\n        margin: 1em 0;\n    }\n\n    .token.string {\n        color: #DD4433;\n    }\n\n    .token.keyword {\n        color: #4488FF;\n    }\n\n    .token.function {\n        color: #FF8800;\n    }\n\n    .token.class-name {\n        color: #119955;\n    }\n\n    .token.punctuation {\n        color: #999999;\n    }\n\n    .token.comment {\n        color: #9977BB;\n    }\n\n    .token.operator {\n        color: #888888;\n    }\n\n    table {\n        border-collapse: collapse;\n        margin: auto;\n    }\n\n    td, th {\n        border: 2px solid black;\n        padding: 8px;\n    }\n    \n    .page-break {\n        display: block;\n        height: 0.3125cm;\n        width: calc(100% + 5cm);\n        background-color: #333333;\n        left: -2.5cm;\n        position: relative;\n        margin: 2.5cm 0;\n        -moz-user-select: none;\n    }\n    \n    @media print {\n        #editor {\n            margin: 0;\n            padding: 0;\n            color-adjust: exact;\n        }\n\n        .page-break {\n            page-break-after: always;\n            visibility: hidden;\n        }\n    }\n\n    @page {\n        margin: 2.5cm;\n    }\n\n    </style>\n    ',n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("iframe").contentWindow.document;t.open(),t.write(this.style+'<div id="editor" spellcheck="false" contentEditable="true">'+this.html+"</div>"),t.close(),document.getElementById("iframe").contentWindow.addEventListener("scroll",function(e){document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)"}),t.getElementById("editor").addEventListener("click",function(t){e.handleClickIframe(t)}),t.execCommand("defaultParagraphSeparator",!1,"p"),t.getElementById("editor").addEventListener("keydown",function(t){e.handleKeyDownIframe(t)}),t.getElementById("editor").addEventListener("keyup",function(t){e.handleKeyUpIframe(t)}),t.getElementById("editor").addEventListener("input",function(t){e.handleInputIframe(t)}),window.addEventListener("beforeunload",function(e){localStorage.setItem("html",t.getElementById("editor").innerHTML)}),document.getElementById("iframe").contentWindow.addEventListener("drop",function(e){e.preventDefault();var n=e.dataTransfer.files[0],o=new FileReader;o.onload=function(e){t.getElementById("editor").focus(),t.execCommand("selectAll"),t.execCommand("insertHTML",!1,e.target.result.match(/<div id="editor">([\0-\uFFFF]*)<\/div>/)[1])},o.readAsText(n)})}},{key:"handleKeyDownIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.document;if(t.getElementById("editor").innerText.match(/\S+/g)||t.execCommand("formatBlock",!1,"p"),"MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey){if("x"===e.key&&e.shiftKey)e.preventDefault();else if(-1!=="123".indexOf(e.key))e.preventDefault(),t.execCommand("heading",!1,"h"+e.key);else if("0"===e.key)e.preventDefault(),t.execCommand("formatBlock",!1,"p");else if("l"===e.key.toLowerCase())e.preventDefault(),t.execCommand(e.shiftKey?"insertOrderedList":"insertUnorderedList");else if("b"===e.key)e.preventDefault(),t.execCommand("bold");else if("i"===e.key)e.preventDefault(),t.execCommand("italic");else if(-1!=="jghm".indexOf(e.key.toLowerCase()))e.preventDefault(),e.shiftKey?(this.display=!0,document.getElementById("display").classList.add("display")):(this.display=!1,document.getElementById("display").classList.remove("display")),this.object={j:"code",m:"math",h:"link",g:"image"}[e.key.toLowerCase()],t.execCommand("insertHTML",!1,'<span class="selection '+(this.display?"display":"")+'"></span>'),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1],document.getElementById("options").style.top=t.querySelector(".selection").getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",e.preventDefault(),document.getElementById("options").classList.add("focus"),document.getElementById("first").innerText="",document.getElementById("second").innerText="",document.getElementById("first").focus();else if("p"===e.key)e.preventDefault(),document.getElementById("iframe").contentWindow.print();else if("s"===e.key){e.preventDefault();var n=new Blob([this.style+'<div id="editor">'+t.getElementById("editor").innerHTML+"</div>"],{type:"text/html"}),o=window.document.createElement("a");o.href=window.URL.createObjectURL(n),o.download="document.html",document.body.appendChild(o),o.click(),document.body.removeChild(o)}else if("Enter"===e.key){e.preventDefault();var a=document.getElementById("iframe").contentWindow.getSelection(),i=a.getRangeAt(0),r=!1,s=!1;if(3===i.commonAncestorContainer.nodeType&&t.execCommand("formatBlock",!1,"p"),console.log(i.nextSibling),3!==i.commonAncestorContainer.nodeType&&(!i.nextSibling||i.nextSibling.classList&&i.nextSibling.classList.contains("page-break"))&&(r=!0),3!==i.commonAncestorContainer.nodeType&&i.Offset===i.commonAncestorContainer.childNodes.length&&(r=!0),i.commonAncestorContainer.nextSibling&&"BR"!==i.commonAncestorContainer.nextSibling.nodeName||!i.commonAncestorContainer.nodeValue||i.commonAncestorContainer.nodeValue.length!==i.endOffset||(s=!0,(!i.commonAncestorContainer.parentElement.nextSibling||i.commonAncestorContainer.parentElement.nextSibling.classList&&i.commonAncestorContainer.parentElement.nextSibling.classList.contains("page-break"))&&(r=!0)),0===i.startOffset&&i.startContainer.parentElement.firstChild===i.startContainer&&(!i.startContainer.parentElement.previousSibling||i.startContainer.parentElement.previousSibling.classList&&i.startContainer.parentElement.previousSibling.classList.contains("page-break")))return;if(3!==i.startContainer.nodeType&&0===i.startOffset&&!i.startContainer.previousSibling)return void console.log(1);if(0===i.startOffset&&i.commonAncestorContainer.parentElement===t.getElementById("editor").firstChild)return;if("editor"===i.commonAncestorContainer.parentElement.id&&i.commonAncestorContainer.previousSibling&&i.commonAncestorContainer.previousSibling.classList.contains("page-break")&&(!i.commonAncestorContainer.previousSibling||i.commonAncestorContainer.previousSibling.classList.contains("page-break")))return;if(r)t.execCommand("insertHTML",!1,'<div class="page-break"><br></div><p><br></p>');else if(t.execCommand("insertHTML",!1,'<div class="page-break"><br></div>'),s){var l=t.createRange();l.setStart(i.commonAncestorContainer.parentElement.nextSibling.nextSibling,0),l.setEnd(i.commonAncestorContainer.parentElement.nextSibling.nextSibling,0),a.removeAllRanges(),a.addRange(l)}else{var c=t.createRange();3===i.commonAncestorContainer.nodeType?(c.setStart(i.commonAncestorContainer.parentElement,0),c.setEnd(i.commonAncestorContainer.parentElement,0)):(c.setStart(i.commonAncestorContainer,0),c.setEnd(i.commonAncestorContainer,0)),a.removeAllRanges(),a.addRange(c)}}else if("Backspace"===e.key){var d=document.getElementById("iframe").contentWindow.getSelection().getRangeAt(0);0===d.startOffset&&d.startContainer.parentElement.previousSibling&&d.startContainer.parentElement.previousSibling.classList.contains("page-break")?e.preventDefault():d.commonAncestorContainer.previousSibling&&d.commonAncestorContainer.previousSibling.classList.contains("page-break")&&e.preventDefault()}}else if("Tab"===e.key)e.preventDefault(),e.shiftKey?t.execCommand("outdent"):t.execCommand("indent");else if("Backspace"===e.key){var m=document.getElementById("iframe").contentWindow.getSelection(),g=m.getRangeAt(0);if(g.startContainer===g.endContainer&&g.startOffset===g.endOffset)if(g.startContainer.previousSibling&&0===g.startOffset&&g.startContainer.previousSibling.classList.contains("object"))e.preventDefault(),m.removeAllRanges(),g.selectNode(g.startContainer.previousSibling),m.addRange(g);else if(g.startContainer.children&&g.startContainer.children[g.startOffset-1]&&g.startContainer.children[g.startOffset-1].classList.contains("object"))e.preventDefault(),m.removeAllRanges(),g.selectNode(g.startContainer.children[g.startOffset-1]),m.addRange(g);else if(g.startContainer.children&&g.startContainer.children[g.startOffset-2]&&g.startContainer.children[g.startOffset-2].classList.contains("object"))e.preventDefault(),m.removeAllRanges(),g.selectNode(g.startContainer.children[g.startOffset-2]),m.addRange(g);else if(0===g.startOffset&&g.startContainer.parentElement.previousSibling&&g.startContainer.parentElement.previousSibling.classList.contains("page-break")){e.preventDefault();var u=t.createRange();u.setStartAfter(g.startContainer.parentElement.previousSibling.previousSibling.firstChild),u.setEndBefore(g.startContainer.parentElement),m.removeAllRanges(),m.addRange(u),t.execCommand("delete");var p=t.createRange();p.setStart(u.startContainer.nextSibling,0),p.setEnd(u.startContainer.nextSibling,0),m.removeAllRanges(),m.addRange(p)}else if(g.commonAncestorContainer.previousSibling&&g.commonAncestorContainer.previousSibling.classList.contains("page-break")){e.preventDefault();var f=t.createRange();f.setStartAfter(g.startContainer.previousSibling.previousSibling.firstChild),f.setEndBefore(g.startContainer),m.removeAllRanges(),m.addRange(f),t.execCommand("delete");var y=t.createRange();y.setStart(f.startContainer.nextSibling,0),y.setEnd(f.startContainer.nextSibling,0),m.removeAllRanges(),m.addRange(y)}}this.handleKeyUpIframe(e)}},{key:"handleKeyUpIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.getSelection(),n=t.getRangeAt(0);n.startContainer.parentElement&&n.startContainer.parentElement.closest(".object")&&(n.setStartBefore(n.startContainer.parentElement.closest(".object")),t.removeAllRanges(),t.addRange(n)),n.endContainer.parentElement&&n.endContainer.parentElement.closest(".object")&&(n.setEndAfter(n.endContainer.parentElement.closest(".object")),t.removeAllRanges(),t.addRange(n))}},{key:"handleClickIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=e.target.closest(".object");(t.querySelector(".selection")&&t.querySelector(".selection").classList.remove("selection"),n)?(document.getElementById("iframe").contentWindow.getSelection().removeAllRanges(),n.classList.add("selection"),document.getElementById("first").innerText=n.dataset.first,document.getElementById("second").innerText=n.dataset.second,document.getElementById("options").classList.add("focus"),document.getElementById("options").style.top=n.getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",this.object=n.dataset.object,n.classList.contains("display")?(this.display=!0,document.getElementById("display").classList.add("display")):(this.display=!1,document.getElementById("display").classList.remove("display")),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1],document.getElementById("first").focus()):document.getElementById("options").classList.remove("focus")}},{key:"handleInputIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=document.getElementById("iframe").contentWindow.getSelection(),o=n.getRangeAt(0);if(console.log(o),"editor"!==o.startContainer.id&&"editor"===o.endContainer.id){var a=t.createRange();a.setStart(o.startContainer.nextSibling.nextSibling,0),n.removeAllRanges(),n.addRange(a)}}},{key:"handleInput",value:function(e){var t=document.getElementById("iframe").contentWindow.document;if(t.querySelector(".selection")){var n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.selectNode(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n)}e&&(t.querySelector(".selection").classList.contains("display")?(this.display=!0,document.getElementById("display").classList.add("display")):(this.display=!1,document.getElementById("display").classList.remove("display"))),t.getElementById("editor").focus(),"image"===this.object?t.execCommand("insertHTML",!1,'<div class="selection object" data-object="image" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'" data-second="'+document.getElementById("second").innerText.replace(/"/g,"&quot;").innerText+'"><div class="image"><img src="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'"/></div><div class="caption">'+document.getElementById("second").innerText.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</div></div>"):"link"===this.object?t.execCommand("insertHTML",!1,'<span class="selection object" data-object="link" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'" data-second="'+document.getElementById("second").innerText.replace(/"/g,"&quot;").innerText+'"><a href="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'">'+document.getElementById("second").innerText.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</a></span>"):"math"===this.object?t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" data-object="math" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'">'+window.katex.renderToString(document.getElementById("first").innerText,{displayMode:this.display,throwOnError:!1,errorColor:"#DD4433"})+"</span>"):"code"===this.object&&t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" data-object="code" data-first="'+document.getElementById("first").innerText.replace(/"/g,"&quot;")+'" data-second="'+document.getElementById("second").innerText+'">'+g.highlight(document.getElementById("first").innerText,g.languages.javascript,"javascript")+"</span>"),document.getElementById("options").style.top=t.querySelector(".selection").getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",e?e.target.focus():t.getElementById("editor").blur()}},{key:"handleKeyDown",value:function(e){if("Escape"===e.key)if(document.getElementById("first").innerText.match(/\S+/g)){var t=document.getElementById("iframe").contentWindow.document,n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.setStartAfter(t.querySelector(".selection")),n.setEndAfter(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n),t.getElementById("editor").focus(),document.getElementById("options").classList.remove("focus"),t.querySelector(".selection").classList.remove("selection")}else this.delete(),document.getElementById("options").classList.remove("focus");else("MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey)&&-1!=="jghm".indexOf(e.key.toLowerCase())&&e.preventDefault()}},{key:"delete",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.selectNode(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n),t.execCommand("delete")}},{key:"handleMouseDown",value:function(e){if(document.getElementById("options").classList.contains("focus")&&!document.getElementById("first").innerText.length)this.delete();else{var t=document.getElementById("iframe").contentWindow.document;document.getElementById("options").classList.remove("focus"),t.querySelector(".selection")&&t.querySelector(".selection").classList.remove("selection")}}},{key:"toggleDisplay",value:function(e){e.target.classList.toggle("display"),this.display=!this.display,this.handleInput()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"container"},a.a.createElement("div",{id:"options"},a.a.createElement("div",{id:"first",spellCheck:"false",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleKeyDown(t)}}),a.a.createElement("div",{id:"second",spellCheck:"false",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleKeyDown(t)}}),a.a.createElement("div",{id:"display",onClick:function(t){return e.toggleDisplay(t)}},a.a.createElement("div",{id:"check"}),"\xa0display")),a.a.createElement("iframe",{id:"iframe",title:"iframe"}))}}]),t}(a.a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/notes","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):f(t,e)})}}()},3:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=3}},[[10,1,2]]]);
//# sourceMappingURL=main.46f03dd9.chunk.js.map