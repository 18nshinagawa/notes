(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(4),a=n.n(c),d=(n(15),n(5)),l=n(6),r=n(8),s=n(7),m=n(9),u=(n(16),n(17)),y=(n(18),function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).heading=0,n.math=0,n.objects={math:["math"],code:["code","language"],image:["url","text"],link:["url","text"]},n.object="",n.display=!1,n.key="",n.html=localStorage.getItem("html")?localStorage.getItem("html"):"<br>",n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("iframe").contentWindow.document;t.open();var n='\n        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css" integrity="sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ" crossorigin="anonymous">\n        <style>\n\n        body {\n            margin: 0;\n            background-color: #333333;\n        }\n\n        #editor {\n            width: 16cm;\n            padding: 2.5cm;\n            margin: 0.3125cm auto;\n            background-color: white;\n            color: #333333;\n            outline: none;\n            font-family: -apple-system, sans-serif;\n            line-height: 1.5;\n            word-break: break-word;\n            overflow: hidden;\n        }\n        \n        ::-moz-selection {\n            background-color: rgba(68, 136, 255, 0.25);\n        }\n        \n        #editor > :first-child {\n            margin-top: 0;\n        }\n        \n        #editor > :last-child {\n            margin-bottom: 0;\n        }\n        \n        img {\n            width: 10.5cm;\n            display: block;\n            margin: auto;\n        }\n\n        .caption {\n            text-align: center;\n            margin-top: 0.5em;\n        }\n\n        .object[data-object="math"] {\n            max-width: 16cm;\n            overflow: hidden;\n            display: inline-flex;\n        }\n        \n        .object[data-object="math"].display {\n            display: block;\n        }\n\n        a {\n            color: #4488FF;\n        }\n        \n        hr {\n            border: 1px solid #333333;\n        }\n        \n        blockquote {\n            margin: 1em 0;\n            padding: 1em;\n            border-left: 2px solid #333333;\n        }\n\n        blockquote > :first-child {\n            margin-top: 0;\n        }\n        \n        blockquote > :last-child {\n            margin-bottom: 0;\n        }\n        \n        ul, ol {\n            color: inherit;\n        }\n\n        [data-object="code"] {\n            background-color: #EEEEEE;\n            font-family: \'monaco\';\n            max-width: 16cm;\n            overflow: hidden;\n            display: inline-flex;\n            color: #0088FF;\n        }\n\n        [data-object="code"].display {\n            white-space: pre-wrap;\n            display: block;\n            padding: 8px;\n            margin: 1em 0;\n        }\n\n        .token.string {\n            color: #DD4433;\n        }\n\n        .token.keyword {\n            color: #4488FF;\n        }\n\n        .token.function {\n            color: #FF8800;\n        }\n\n        .token.class-name {\n            color: #119955;\n        }\n\n        .token.punctuation {\n            color: #999999;\n        }\n\n        .token.comment {\n            color: #9977BB;\n        }\n\n        .token.operator {\n            color: #888888;\n        }\n\n        table {\n            border-collapse: collapse;\n            margin: auto;\n        }\n\n        td, th {\n            border: 2px solid black;\n            padding: 8px;\n        }\n        \n        @media print {\n            #editor {\n                margin: 0;\n                padding: 0;\n                color-adjust: exact;\n            }\n        }\n\n        @page {\n            margin: 2.5cm;\n        }\n\n        </style>\n        ';t.write(n+'<div id="editor" contentEditable="true">'+this.html+"</div>"),t.close(),document.getElementById("iframe").contentWindow.addEventListener("scroll",function(e){document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)"}),t.getElementById("editor").addEventListener("click",function(t){e.selection(t)}),t.getElementById("editor").addEventListener("keyup",function(t){e.selection(t)}),t.getElementById("editor").addEventListener("mousedown",function(t){e.handleMouseDown(t)}),t.execCommand("defaultParagraphSeparator",!1,"p"),t.getElementById("editor").addEventListener("keydown",function(t){e.handleKeyDown(t)}),window.addEventListener("beforeunload",function(e){localStorage.setItem("html",t.getElementById("editor").innerHTML)}),window.addEventListener("keydown",function(e){if(e.metaKey&&"p"===e.key)e.preventDefault(),document.getElementById("iframe").contentWindow.print();else if(e.metaKey&&"s"===e.key){e.preventDefault();var o=new Blob(["<html><head>"+n+'</head><body><div id="editor">'+t.getElementById("editor").innerHTML+"</body></div>"],{type:"text/html"}),i=window.document.createElement("a");i.href=window.URL.createObjectURL(o),i.download="document.html",document.body.appendChild(i),i.click(),document.body.removeChild(i)}})}},{key:"handleKeyDown",value:function(e){var t=document.getElementById("iframe").contentWindow.document;e.metaKey?-1!=="123456".indexOf(e.key)?(e.preventDefault(),t.execCommand("heading",!1,"h"+e.key)):"l"===e.key?(e.preventDefault(),t.execCommand(e.shiftKey?"insertOrderedList":"insertUnorderedList")):"r"===e.key?(e.preventDefault(),t.execCommand("insertHorizontalRule")):"s"===e.key?(e.preventDefault(),t.execCommand("strikethrough")):"b"===e.key?(e.preventDefault(),t.execCommand("bold")):"i"===e.key?(e.preventDefault(),t.execCommand("italic")):"j"===e.key||"g"===e.key||"h"===e.key||"m"===e.key?(e.preventDefault(),e.shiftKey&&(this.display=!0),this.object={j:"code",m:"math",h:"link",g:"image"}[e.key],t.execCommand("insertHTML",!1,'<span class="selection"></div>'),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1],document.getElementById("options").style.top=t.querySelector(".selection").getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",e.preventDefault(),document.getElementById("options").classList.add("focus"),document.getElementById("first").innerText="",document.getElementById("first").focus()):"p"===e.key&&(e.preventDefault(),t.execCommand("formatBlock",!1,"p")):"Tab"===e.key?(e.preventDefault(),e.shiftKey?t.execCommand("outdent"):t.execCommand("indent")):"Escape"===e.key?(e.preventDefault(),t.getElementById("editor").blur()):"Backspace"===e.key&&(this.key="backspace"),"Backspace"!==e.key&&(this.key="")}},{key:"selection",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=document.getElementById("iframe").contentWindow.getSelection(),o=n.getRangeAt(0);if(o.commonAncestorContainer.parentElement.closest(".object")){if("backspace"===this.key&&t.execCommand("undo"),n.removeAllRanges(),t.querySelector(".selection")&&t.querySelector(".selection").classList.remove("selection"),o.commonAncestorContainer.parentElement.closest(".object").classList.add("selection"),document.getElementById("first").innerText=o.commonAncestorContainer.parentElement.closest(".object").dataset.first,document.getElementById("second").innerText=o.commonAncestorContainer.parentElement.closest(".object").dataset.second||"null",document.getElementById("options").classList.add("focus"),document.getElementById("options").style.top=t.querySelector(".selection").getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",t.querySelector(".selection")){var i=t.createRange(),c=document.getElementById("iframe").contentWindow.getSelection();i.selectNode(t.querySelector(".selection")),c.removeAllRanges(),c.addRange(i)}document.getElementById("first").focus(),this.object=o.commonAncestorContainer.parentElement.closest(".object").dataset.object,o.commonAncestorContainer.parentElement.closest(".object").classList.contains("display")?(this.display=!0,document.getElementById("display").classList.add("display")):(this.display=!1,document.getElementById("display").classList.remove("display")),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1]}}},{key:"handleInput",value:function(e){var t=document.getElementById("iframe").contentWindow.document;if(e&&(t.querySelector(".selection").classList.contains("display")?this.display=!0:this.display=!1),t.getElementById("editor").focus(),"image"===this.object?t.execCommand("insertHTML",!1,'<div class="selection object" data-object="image" data-first="'+document.getElementById("first").innerText+'"><div class="image"><img src="'+document.getElementById("first").innerText+'"/></div><div class="caption">'+document.getElementById("second").innerText+"</div></div>"):"link"===this.object?t.execCommand("insertHTML",!1,'<span class="selection object" data-object="link" data-first="'+document.getElementById("first").innerText+'" data-second="'+document.getElementById("second").innerText+'"><a href="'+document.getElementById("first").innerText+'">'+document.getElementById("second").innerText+"</a></span>"):"math"===this.object?t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" spellcheck="false" data-object="math" data-first="'+document.getElementById("first").innerText+'">'+window.katex.renderToString(document.getElementById("first").innerText,{displayMode:this.display,throwOnError:!1,errorColor:"#DD4433"})+"</span>"):"code"===this.object&&t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" spellcheck="false" data-object="code" data-first="'+document.getElementById("first").innerText.replace(/\"/g,"&quot;")+'" data-second="'+document.getElementById("second").innerText+'">'+u.highlight(document.getElementById("first").innerText,u.languages.javascript,"javascript")+"</span>"),document.getElementById("options").style.top=t.querySelector(".selection").getBoundingClientRect().top+t.body.scrollTop+"px",document.getElementById("options").style.transform="translateY(-"+t.body.scrollTop+"px)",e?e.target.focus():t.getElementById("editor").blur(),t.querySelector(".selection")){var n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.selectNode(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n)}}},{key:"handleEscapeKey",value:function(e){if("Escape"===e.key)if(e.preventDefault(),document.getElementById("first").innerText.length>1&&("math"===this.object||document.getElementById("second").innerText.length>1)){var t=document.getElementById("iframe").contentWindow.document,n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.selectNode(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n),t.getElementById("editor").focus(),document.getElementById("options").classList.remove("focus"),t.querySelector(".selection").classList.remove("selection")}else this.delete(),document.getElementById("options").classList.remove("focus")}},{key:"delete",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.selectNode(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n),t.execCommand("delete")}},{key:"handleMouseDown",value:function(e){if(document.getElementById("options").classList.contains("focus")&&!document.getElementById("first").innerText.length)this.delete();else{var t=document.getElementById("iframe").contentWindow.document;document.getElementById("options").classList.remove("focus"),t.querySelector(".selection")&&t.querySelector(".selection").classList.remove("selection")}}},{key:"toggleDisplay",value:function(e){e.target.classList.toggle("display"),this.display=!this.display,this.handleInput()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"container"},i.a.createElement("div",{id:"options"},i.a.createElement("div",{id:"first",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleEscapeKey(t)}}),i.a.createElement("div",{id:"second",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleEscapeKey(t)}}),i.a.createElement("div",{id:"display",onClick:function(t){return e.toggleDisplay(t)}},i.a.createElement("div",{id:"check"}),"\xa0display")),i.a.createElement("iframe",{id:"iframe",title:"iframe"}))}}]),t}(i.a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(i.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/notes","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(t,e)})}}()},3:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=3}},[[10,1,2]]]);
//# sourceMappingURL=main.b2263503.chunk.js.map