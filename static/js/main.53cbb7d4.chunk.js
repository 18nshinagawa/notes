(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(20),i=n.n(r),c=(n(29),n(8)),l=n(9),s=n(11),d=n(10),m=n(12),u=(n(30),n(21)),g=n(5),f=n(15),p=n.n(f),y=(n(31),n(32),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(u.a,null,a.a.createElement(g.a,{path:"/notes/*",component:function(e){var t=e.match;return"/notes/"===t.url?a.a.createElement(h,null):a.a.createElement(v,{file:t.url.replace("/notes/","")})}}))}}]),t}(a.a.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("pageshow",function(e){document.getElementById("files").innerHTML="";var t={};caches.open("files").then(function(e){e.keys().then(function(e){e.forEach(function(e){var n=e.url.replace("https://18nshinagawa.github.io/notes/","").split("/"),o=t;n.forEach(function(t,a){if(!o[t])if(a===n.length-1)try{o[t]=e.url.replace("https://18nshinagawa.github.io/notes/","")}catch(r){console.error(r)}else o[t]={};o=o[t]})}),function e(t,n){"object"===typeof t?Object.keys(t).forEach(function(o){var a=document.createElement("div");a.innerText=o,n.append(a),e(t[o],a)}):n.innerHTML='<a href="'+t+'">'+t.replace(/.*\//,"")+"</a>"}(t,document.getElementById("files"))})})})}},{key:"render",value:function(){return a.a.createElement("div",{id:"container"},a.a.createElement("div",{id:"files"}))}}]),t}(a.a.Component),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).heading=0,n.math=0,n.objects={math:["math"],code:["code","language"],image:["url","text"],link:["url","text"]},n.object="",n.display=!1,n.languages=["python","java","html","css","javascript"],n.keyboard=!1,n.keys={Space:" ",Backspace:"delete",Enter:"return",Tab:"tab"," ":" ",CapsLock:"caps lock",ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down",Backquote:"`",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Backslash:"\\",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",ShiftLeft:"shift-left",ShiftRight:"shift-right",ControlLeft:"control-left",ControlRight:"control-right",AltLeft:"option-left",AltRight:"option-right",OSLeft:"command-left",OSRight:"command-right"},n.previous="",n.rows=[[["esc"],["empty"],["empty"],["empty"],["empty"],["empty"],["k","K"],["e","E"],["y","Y"],["b","B"],["o","O"],["a","A"],["r","R"],["d","D"]],[["`","~"],["1","!","heading 1"],["2","@","heading 2"],["3","#","heading 3"],["4","$"],["5","%"],["6","^"],["7","&"],["8","*"],["9","("],["0",")","paragraph"],["-","_"],["=","+"],["delete"]],[["tab"],["q","Q"],["w","W"],["e","E"],["r","R"],["t","T"],["y","Y"],["u","U"],["i","I","italicize"],["o","O","open","open"],["p","P","print"],["[","{"],["]","}"],["\\","|"]],[["caps lock"],["a","A","select all"],["s","S","save","download"],["d","D"],["f","F","find"],["g","G","image"],["h","H","link"],["j","J","inline code","display code"],["k","K","keyboard"],["l","L","unordered list","ordered list"],[";",":"],["'",'"'],["return","return","page break"]],[["shift-left"],["z","Z","undo","redo"],["x","X","cut"],["c","C","copy"],["v","V","paste"],["b","B","bold"],["n","N"],["m","M","inline math","display math"],[",","<"],[".",">"],["/","?"],["shift-right"]],[["control-left"],["option-left"],["command-left"],[" "],["command-right"],["option-right"],["control-right"],["left"],["up"],["down"],["right"]]],n.style='\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css" integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j" crossorigin="anonymous">\n    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans|IBM+Plex+Serif&display=swap" rel="stylesheet">\n    <style>\n\n    body {\n        margin: 0;\n        background-color: #333333;\n        overflow-x: hidden;\n    }\n\n    #editor {\n        width: 16cm;\n        padding: 2.5cm;\n        background-color: white;\n        color: #333333;\n        outline: none;\n        font-family: \'KaTeX_Main\', serif;\n        line-height: 1.5;\n        word-break: break-word;\n        caret-color: #4488FF;\n        margin: 1.25cm auto;\n    }\n    \n    ::-moz-selection {\n        background-color: rgba(68, 136, 255, 0.25);\n    }\n    \n    #editor > :first-child {\n        margin-top: 0;\n    }\n    \n    #editor > :last-child {\n        margin-bottom: 0;\n    }\n\n    h1, h2, h3 {\n        font-weight: normal;\n        text-align: center;\n    }\n    \n    img {\n        width: 10.5cm;\n        display: block;\n        margin: auto;\n    }\n\n    .caption {\n        text-align: center;\n        margin-top: 0.5em;\n    }\n\n    .object {\n        -moz-user-select: all;\n    }\n\n    .object[data-object="math"] {\n        max-width: 16cm;\n        overflow: hidden;\n        display: inline-flex;\n    }\n    \n    .object[data-object="math"].display {\n        display: block;\n    }\n\n    a {\n        color: #4488FF;\n    }\n    \n    blockquote {\n        margin: 1em 0;\n        padding: 1em;\n        border-left: 2px solid #333333;\n    }\n\n    blockquote > :first-child {\n        margin-top: 0;\n    }\n    \n    blockquote > :last-child {\n        margin-bottom: 0;\n    }\n    \n    ul, ol {\n        color: inherit;\n    }\n\n    [data-object="code"] {\n        background-color: #EEEEEE;\n        font-family: \'IBM Plex Mono\', monospace;\n        max-width: 16cm;\n        overflow: hidden;\n        display: inline;\n        color: #333333;\n    }\n\n    [data-object="code"].display {\n        white-space: pre-wrap;\n        display: block;\n        padding: 8px;\n        margin: 1em 0;\n    }\n\n    .token.string, .token.attr-value {\n        color: #FF8844;\n    }\n\n    .token.keyword, .token.boolean, .token.attr-name, .token.selector {\n        color: #AA44FF;\n    }\n\n    .token.function, .token.tag, .token.rule, .token.builtin {\n        color: #4488FF;\n    }\n\n    .token.class-name, .token.number, .token.doctype, .token.property {\n        color: #00BB66;\n    }\n\n    .token.punctuation {\n        color: #888888;\n    }\n\n    .token.regex, .token.parameter, .token.url {\n        color: #FF4444;\n    }\n\n    .token.comment {\n        color: #888888;\n    }\n\n    .token.operator {\n        color: #888888;\n    }\n\n    table {\n        border-collapse: collapse;\n        margin: auto;\n    }\n\n    td, th {\n        border: 2px solid black;\n        padding: 8px;\n    }\n    \n    .page-break {\n        display: block;\n        height: 0.3125cm;\n        width: calc(100% + 5cm);\n        background-color: #333333;\n        left: -2.5cm;\n        position: relative;\n        margin: 2.5cm 0;\n        -moz-user-select: none;\n    }\n    \n    @media print {\n        #editor {\n            margin: 0;\n            padding: 0;\n            color-adjust: exact;\n        }\n\n        .page-break {\n            page-break-after: always;\n            visibility: hidden;\n        }\n    }\n\n    @page {\n        margin: 2.5cm;\n    }\n\n    </style>\n    ',n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("iframe").contentWindow.document;caches.open("files").then(function(n){n.match("/notes/"+e.props.file).then(function(e){return e.text()}).then(function(e){t.getElementById("editor").innerHTML=e,document.getElementById("iframe").style.height=t.getElementById("editor").clientHeight+94.488+"px"}).catch(function(e){console.warn(e),document.getElementById("iframe").style.height=t.getElementById("editor").clientHeight+94.488+"px"})}),t.open(),t.write(this.style+'<div id="editor" spellcheck="false" contentEditable="true"></div>'),t.close(),document.querySelector("title").innerText=this.props.file.replace(/.*\//,""),Array.from(t.getElementsByTagName("h1")).forEach(function(e,t){e.id=e.innerText.replace(/\s/g,""),0===t&&(document.querySelector("title").innerText=e.innerText)}),Array.from(t.querySelectorAll("h2, h3")).forEach(function(e){e.id=e.innerText.replace(/\s/g,"")}),t.getElementById("editor").addEventListener("click",function(t){e.handleClickIframe(t)}),t.execCommand("defaultParagraphSeparator",!1,"p"),document.addEventListener("keydown",function(t){"MacIntel"===navigator.platform&&t.metaKey||"MacIntel"!==navigator.platform&&t.ctrlKey?e.keyboard||-1==="sop".indexOf(t.key.toLowerCase())?"k"===t.key.toLowerCase()?(t.preventDefault(),e.keyboard=!e.keyboard,document.getElementById("keyboard").classList.toggle("keyboard"),e.keyboard&&document.querySelector("#keyboard > input").focus()):e.handleKeyDown(t):e.handleKeyDownIframe(t):e.keyboard&&e.handleKeyDown(t)}),document.addEventListener("keyup",function(t){e.handleKeyUp(t)}),window.addEventListener("blur",function(e){document.getElementById("keyboard").classList.remove("command"),document.getElementById("keyboard").classList.remove("shift"),Array.from(document.querySelectorAll(".down")).forEach(function(e){e.classList.remove("down")})}),t.getElementById("editor").addEventListener("copy",function(e){e.preventDefault();var t=document.getElementById("iframe").contentWindow.getSelection().getRangeAt(0).cloneContents(),n=document.createElement("div");n.id="clipboard-data",n.appendChild(t),e.clipboardData.setData("text/plain",n.outerHTML)}),document.addEventListener("paste",function(e){e.preventDefault(),document.execCommand("insertHTML",!1,e.clipboardData.getData("text/plain"))}),t.getElementById("editor").addEventListener("paste",function(e){e.preventDefault(),e.clipboardData.getData("text/plain").match(/<div id="clipboard-data">(.*)<\/div>/)?t.execCommand("insertHTML",!1,e.clipboardData.getData("text/plain").match(/<div id="clipboard-data">(.*)<\/div>/)[1]):t.execCommand("insertText",!1,e.clipboardData.getData("text/plain"))}),t.getElementById("editor").addEventListener("keydown",function(t){e.handleKeyDownIframe(t)}),t.getElementById("editor").addEventListener("keyup",function(t){e.handleKeyUpIframe(t)}),t.getElementById("editor").addEventListener("input",function(t){e.handleInputIframe(t)})}},{key:"handleKeyDownIframe",value:function(e){var t=this,n=document.getElementById("iframe").contentWindow.document,o=document.getElementById("iframe").contentWindow.getSelection().getRangeAt(0);if(3===o.commonAncestorContainer.nodeType&&"editor"===o.commonAncestorContainer.parentElement.id&&n.execCommand("formatBlock",!1,"p"),"MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey)if("k"===e.key.toLowerCase())e.preventDefault(),this.keyboard=!this.keyboard,document.getElementById("keyboard").classList.toggle("keyboard"),document.querySelector("#keyboard > input").focus();else if("x"===e.key.toLowerCase()&&e.shiftKey)e.preventDefault();else if(-1!=="123".indexOf(e.key))e.preventDefault(),n.execCommand("heading",!1,"h"+e.key);else if("0"===e.key)e.preventDefault(),n.execCommand("formatBlock",!1,"p");else if("l"===e.key.toLowerCase())e.preventDefault(),n.execCommand(e.shiftKey?"insertOrderedList":"insertUnorderedList");else if("b"===e.key)e.preventDefault(),n.execCommand("bold");else if("i"===e.key)e.preventDefault(),n.execCommand("italic");else if(-1!=="jghm".indexOf(e.key.toLowerCase()))e.preventDefault(),e.shiftKey?(this.display=!0,document.getElementById("display").checked=!0):(this.display=!1,document.getElementById("display").checked=!1),this.object={j:"code",m:"math",h:"link",g:"image"}[e.key.toLowerCase()],n.execCommand("insertHTML",!1,'<span class="selection '+(this.display?"display":"")+'"></span>'),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1],document.getElementById("options").style.top=n.querySelector(".selection").getBoundingClientRect().top+n.body.scrollTop+"px",e.preventDefault(),document.getElementById("options").classList.add("focus"),document.getElementById("first").innerHTML="<br>",document.getElementById("second").innerHTML="<br>",document.getElementById("first").focus(),"code"===this.object?document.getElementById("second").classList.add("error"):document.getElementById("second").classList.remove("error");else if("p"===e.key)e.preventDefault(),document.getElementById("iframe").contentWindow.print();else if("s"===e.key.toLowerCase())if(e.preventDefault(),e.shiftKey){var a=new Blob([this.style+'<div id="editor">'+n.getElementById("editor").innerHTML+"</div>"],{type:"text/html"}),r=window.document.createElement("a");r.href=window.URL.createObjectURL(a),r.download=(document.querySelector("title").innerText||"untitled")+".html",document.body.appendChild(r),r.click(),document.body.removeChild(r)}else caches.open("files").then(function(e){e.put("/notes/"+t.props.file,new Response(n.getElementById("editor").innerHTML))});else if("o"===e.key)e.preventDefault(),document.getElementById("open").click();else if("e"===e.key)e.preventDefault(),o.endOffset===o.startOffset+1&&o.commonAncestorContainer.childNodes[o.startOffset].classList.contains("object")&&(o.commonAncestorContainer.childNodes[o.startOffset].classList.add("selection"),this.handleClickIframe());else if("Enter"===e.key){e.preventDefault();var i=document.getElementById("iframe").contentWindow.getSelection(),c=i.getRangeAt(0),l=!1,s=!1;if(3===c.commonAncestorContainer.nodeType&&"editor"===c.commonAncestorContainer.parentElement.id&&n.execCommand("formatBlock",!1,"p"),3!==c.commonAncestorContainer.nodeType&&(!c.nextSibling||c.nextSibling.classList&&c.nextSibling.classList.contains("page-break"))&&(l=!0),3!==c.commonAncestorContainer.nodeType&&c.Offset===c.commonAncestorContainer.childNodes.length&&(l=!0),c.commonAncestorContainer.nextSibling&&"BR"!==c.commonAncestorContainer.nextSibling.nodeName||!c.commonAncestorContainer.nodeValue||c.commonAncestorContainer.nodeValue.length!==c.endOffset||(s=!0,(!c.commonAncestorContainer.parentElement.nextSibling||c.commonAncestorContainer.parentElement.nextSibling.classList&&c.commonAncestorContainer.parentElement.nextSibling.classList.contains("page-break"))&&(l=!0)),0===c.startOffset&&c.startContainer.parentElement.firstChild===c.startContainer&&(!c.startContainer.parentElement.previousSibling||c.startContainer.parentElement.previousSibling.classList&&c.startContainer.parentElement.previousSibling.classList.contains("page-break")))return;if(3!==c.startContainer.nodeType&&0===c.startOffset&&!c.startContainer.previousSibling)return;if(0===c.startOffset&&c.commonAncestorContainer.parentElement===n.getElementById("editor").firstChild)return;if("editor"===c.commonAncestorContainer.parentElement.id&&c.commonAncestorContainer.previousSibling&&c.commonAncestorContainer.previousSibling.classList.contains("page-break")&&(!c.commonAncestorContainer.previousSibling||c.commonAncestorContainer.previousSibling.classList.contains("page-break")))return;if(l)n.execCommand("insertHTML",!1,'<div class="page-break"><br></div><p><br></p>');else if(n.execCommand("insertHTML",!1,'<div class="page-break"><br></div>'),s){var d=n.createRange();d.setStart(c.commonAncestorContainer.parentElement.nextSibling.nextSibling,0),d.setEnd(c.commonAncestorContainer.parentElement.nextSibling.nextSibling,0),i.removeAllRanges(),i.addRange(d)}else{var m=n.createRange();3===c.commonAncestorContainer.nodeType?(m.setStart(c.commonAncestorContainer.parentElement,0),m.setEnd(c.commonAncestorContainer.parentElement,0)):(m.setStart(c.commonAncestorContainer,0),m.setEnd(c.commonAncestorContainer,0)),i.removeAllRanges(),i.addRange(m)}}else if("Backspace"===e.key){var u=document.getElementById("iframe").contentWindow.getSelection().getRangeAt(0);0===u.startOffset&&u.startContainer.parentElement.previousSibling&&u.startContainer.parentElement.previousSibling.classList.contains("page-break")?e.preventDefault():u.commonAncestorContainer.previousSibling&&u.commonAncestorContainer.previousSibling.classList.contains("page-break")&&e.preventDefault()}else(-1!=="afxcbghjmrd".indexOf(e.key.toLowerCase())&&e.shiftKey||-1!=="ibujghmrld".indexOf(e.key.toLowerCase())&&!e.shiftKey)&&e.preventDefault();else if("Tab"===e.key)e.preventDefault(),e.shiftKey?n.execCommand("outdent"):n.execCommand("indent");else if("Backspace"===e.key){var g=document.getElementById("iframe").contentWindow.getSelection(),f=g.getRangeAt(0);if(f.startContainer===f.endContainer&&f.startOffset===f.endOffset)if(f.startContainer.previousSibling&&0===f.startOffset&&f.startContainer.previousSibling.classList.contains("object"))e.preventDefault(),g.removeAllRanges(),f.selectNode(f.startContainer.previousSibling),g.addRange(f);else if(f.startContainer.children&&f.startContainer.children[f.startOffset-1]&&f.startContainer.children[f.startOffset-1].classList.contains("object"))e.preventDefault(),g.removeAllRanges(),f.selectNode(f.startContainer.children[f.startOffset-1]),g.addRange(f);else if(f.startContainer.children&&f.startContainer.children[f.startOffset-2]&&f.startContainer.children[f.startOffset-2].classList.contains("object"))e.preventDefault(),g.removeAllRanges(),f.selectNode(f.startContainer.children[f.startOffset-2]),g.addRange(f);else if(0===f.startOffset&&f.startContainer.parentElement.previousSibling&&f.startContainer.parentElement.previousSibling.classList.contains("page-break")){e.preventDefault();var p=n.createRange();p.setStartAfter(f.startContainer.parentElement.previousSibling.previousSibling.firstChild),p.setEndBefore(f.startContainer.parentElement),g.removeAllRanges(),g.addRange(p),n.execCommand("delete");var y=n.createRange();y.setStart(p.startContainer.nextSibling,0),y.setEnd(p.startContainer.nextSibling,0),g.removeAllRanges(),g.addRange(y)}else if(f.commonAncestorContainer.previousSibling&&f.commonAncestorContainer.previousSibling.classList.contains("page-break")){e.preventDefault();var h=n.createRange();h.setStartAfter(f.startContainer.previousSibling.previousSibling.firstChild),h.setEndBefore(f.startContainer),g.removeAllRanges(),g.addRange(h),n.execCommand("delete");var v=n.createRange();v.setStart(h.startContainer.nextSibling,0),v.setEnd(h.startContainer.nextSibling,0),g.removeAllRanges(),g.addRange(v)}}this.handleKeyUpIframe(e)}},{key:"handleKeyUpIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.getSelection(),n=t.getRangeAt(0);n.startContainer.parentElement&&n.startContainer.parentElement.closest(".object")&&(n.setStartBefore(n.startContainer.parentElement.closest(".object")),t.removeAllRanges(),t.addRange(n)),n.endContainer.parentElement&&n.endContainer.parentElement.closest(".object")&&(n.setEndAfter(n.endContainer.parentElement.closest(".object")),t.removeAllRanges(),t.addRange(n))}},{key:"handleClickIframe",value:function(e){var t,n=document.getElementById("iframe").contentWindow.document;if(e?(t=e.target.closest(".object"),n.querySelector(".selection")&&n.querySelector(".selection").classList.remove("selection")):t=n.querySelector(".selection"),t){var o=document.getElementById("iframe").contentWindow.getSelection();o.removeAllRanges(),t.classList.add("selection"),document.getElementById("first").innerText=t.dataset.first,document.getElementById("second").innerText=t.dataset.second,"code"!==e.target.closest(".object").dataset.object||this.languages.includes(document.getElementById("second").innerText)?document.getElementById("second").classList.remove("error"):document.getElementById("second").classList.add("error"),document.getElementById("options").classList.add("focus"),document.getElementById("options").style.top=t.getBoundingClientRect().top+n.body.scrollTop+"px",this.object=t.dataset.object,t.classList.contains("display")?(this.display=!0,document.getElementById("display").checked=!0):(this.display=!1,document.getElementById("display").checked=!1),document.getElementById("first").dataset.placeholder=this.objects[this.object][0],document.getElementById("second").dataset.placeholder=this.objects[this.object][1],document.getElementById("first").focus(),o=window.getSelection();var a=document.createRange();a.setStartAfter(document.getElementById("first").firstChild),o.removeAllRanges(),o.addRange(a)}else document.getElementById("options").classList.remove("focus")}},{key:"handleInputIframe",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=document.getElementById("iframe").contentWindow.getSelection(),o=n.getRangeAt(0);if(document.querySelector("title").innerText=this.props.file.replace(/.*\//,""),Array.from(t.getElementsByTagName("h1")).forEach(function(e,t){e.id=e.innerText.replace(/\s/g,""),0===t&&(document.querySelector("title").innerText=e.innerText)}),Array.from(t.querySelectorAll("h2, h3")).forEach(function(e){e.id=e.innerText.replace(/\s/g,"")}),"editor"!==o.startContainer.id&&"editor"===o.endContainer.id){var a=t.createRange();a.setStart(o.startContainer.nextSibling.nextSibling,0),n.removeAllRanges(),n.addRange(a)}document.getElementById("iframe").style.height=t.getElementById("editor").clientHeight+94.488+"px"}},{key:"handleInput",value:function(e){var t=document.getElementById("iframe").contentWindow.document;if(t.querySelector(".selection")){var n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.selectNode(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n)}t.getElementById("editor").focus();var a=document.getElementById("first").innerText.replace(/\n$/g,""),r=document.getElementById("second").innerText.replace(/\n$/g,"");"image"===this.object?a.match(/\S+/g)?t.execCommand("insertHTML",!1,'<div class="selection object" data-object="image" data-first="'+a.replace(/"/g,"&quot;")+'" data-second="'+r.replace(/"/g,"&quot;")+'"><div class="image"><img src="'+a.replace(/"/g,"&quot;")+'"/></div><div class="caption">'+r.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</div></div>"):t.execCommand("delete"):"link"===this.object?r.match(/\S+/g)?t.execCommand("insertHTML",!1,'<span class="selection object" data-object="link" data-first="'+a.replace(/"/g,"&quot;")+'" data-second="'+r.replace(/"/g,"&quot;")+'"><a href="'+a.replace(/"/g,"&quot;").replace(/\s/,"")+'">'+r.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</a></span>"):t.execCommand("delete"):"math"===this.object?a.match(/\S+/g)?t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" data-object="math" data-first="'+a.replace(/"/g,"&quot;")+'">'+window.katex.renderToString(a,{displayMode:this.display,throwOnError:!1,errorColor:"#DD4433"})+"</span>"):t.execCommand("delete"):"code"===this.object&&(a.match(/\S+/g)?this.languages.includes(r)?(document.getElementById("second").classList.remove("error"),t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" data-object="code" data-first="'+a.replace(/"/g,"&quot;")+'" data-second="'+r+'">'+p.a.highlight(a,p.a.languages[r],r)+"</span>")):(document.getElementById("second").classList.add("error"),t.execCommand("insertHTML",!1,'<span class="selection object '+(this.display?"display":"")+'" data-object="code" data-first="'+a.replace(/"/g,"&quot;")+'" data-second="'+r+'">'+a.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</span>")):t.execCommand("delete")),t.querySelector(".selection")&&(document.getElementById("options").style.top=t.querySelector(".selection").getBoundingClientRect().top+t.body.scrollTop+"px"),e&&e.target&&e.target.focus()}},{key:"handleKeyDown",value:function(e){if(this.keyboard){if("Escape"===e.code)return this.keyboard=!1,void document.getElementById("keyboard").classList.remove("keyboard");e.preventDefault(),e.code.match("Digit")?document.getElementById(e.code.replace("Digit","")).classList.add("down"):e.code.match("Key")?document.querySelector(".row:not(:first-child) #"+e.code.replace("Key","").toLowerCase()).classList.add("down"):Object.keys(this.keys).includes(e.code)&&document.getElementById(this.keys[e.code]).classList.add("down"),e.shiftKey&&document.getElementById("keyboard").classList.add("shift"),("MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey)&&document.getElementById("keyboard").classList.add("command")}else if(" "===e.key)document.querySelector(":focus")&&"display"===document.querySelector(":focus").id&&(document.getElementById("display").checked=!document.getElementById("display").checked,this.handleClick({target:document.getElementById("display")}));else if("Escape"===e.key||("MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey)&&{math:"m",code:"j",link:"h",image:"g"}[this.object]===e.key.toLowerCase())if(e.preventDefault(),document.getElementById("first").innerText.match(/\S+/g)){var t=document.getElementById("iframe").contentWindow.document,n=t.createRange(),o=document.getElementById("iframe").contentWindow.getSelection();n.setStartAfter(t.querySelector(".selection")),n.setEndAfter(t.querySelector(".selection")),o.removeAllRanges(),o.addRange(n),t.getElementById("editor").focus(),document.getElementById("options").classList.remove("focus"),t.querySelector(".selection").classList.remove("selection")}else{var a=document.getElementById("iframe").contentWindow.document;document.getElementById("options").classList.remove("focus"),a.getElementById("editor").focus()}else if("MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey)(-1!=="afxcbghjmrd".indexOf(e.key.toLowerCase())&&e.shiftKey||-1!=="ibujghmrld".indexOf(e.key.toLowerCase())&&!e.shiftKey)&&e.preventDefault();else if("Tab"===e.key)if("display"===e.target.id)if(e.shiftKey&&"undefined"!==document.getElementById("second").dataset.placeholder){e.preventDefault();var r=window.getSelection(),i=document.createRange();i.setStartBefore(document.getElementById("second").lastChild),r.removeAllRanges(),r.addRange(i)}else{e.preventDefault();var c=window.getSelection(),l=document.createRange();l.setStartBefore(document.getElementById("first").lastChild),c.removeAllRanges(),c.addRange(l)}else if("first"===e.target.id)if(e.shiftKey||"undefined"===document.getElementById("second").dataset.placeholder)e.preventDefault(),document.getElementById("display").focus();else{e.preventDefault();var s=window.getSelection(),d=document.createRange();d.setStartBefore(document.getElementById("second").lastChild),s.removeAllRanges(),s.addRange(d)}}},{key:"delete",value:function(e){var t=document.getElementById("iframe").contentWindow.document,n=(t.createRange(),document.getElementById("iframe").contentWindow.getSelection()),o=t.createRange();o.selectNode(t.querySelector(".selection")),n.removeAllRanges(),n.addRange(o),t.execCommand("delete")}},{key:"handleMouseDown",value:function(e){if(document.getElementById("options").classList.contains("focus")&&!document.getElementById("first").innerText.length)this.delete();else{var t=document.getElementById("iframe").contentWindow.document;e.target.classList.contains("object")||document.getElementById("options").classList.remove("focus"),t.querySelector(".selection")&&t.querySelector(".selection").classList.remove("selection")}}},{key:"handleChange",value:function(e){if("open"===e.target.id){var t=document.getElementById("iframe").contentWindow.document,n=e.target.files[0],o=new FileReader;o.onload=function(e){t.getElementById("editor").focus(),t.execCommand("selectAll"),t.execCommand("insertHTML",!1,e.target.result.match(/<div id="editor">([\0-\uFFFF]*)<\/div>/)[1])},o.readAsText(n)}}},{key:"handleClick",value:function(e){if(this.display=!this.display,"display"===e.target.id)this.handleInput(e);else{e.preventDefault(),document.getElementById("display").checked=!document.getElementById("display").checked,this.handleInput();var t=window.getSelection(),n=t.getRangeAt(0);t.removeAllRanges(),t.addRange(n)}}},{key:"handleKeyUp",value:function(e){e.preventDefault(),e.code.match("Digit")?document.getElementById(e.code.replace("Digit","")).classList.remove("down"):e.code.match("Key")?document.querySelector(".row:not(:first-child) #"+e.code.replace("Key","").toLowerCase()).classList.remove("down"):Object.keys(this.keys).includes(e.code)&&document.getElementById(this.keys[e.code]).classList.remove("down"),e.shiftKey||document.getElementById("keyboard").classList.contains("shift")&&(document.getElementById("keyboard").classList.remove("shift"),document.querySelectorAll(".down")&&Array.from(document.querySelectorAll(".down")).forEach(function(e){e.classList.remove("down")})),"MacIntel"===navigator.platform&&e.metaKey||"MacIntel"!==navigator.platform&&e.ctrlKey||document.getElementById("keyboard").classList.contains("command")&&(document.getElementById("keyboard").classList.remove("command"),document.querySelectorAll(".down")&&Array.from(document.querySelectorAll(".down")).forEach(function(e){e.classList.remove("down")}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"editor"},a.a.createElement("div",{id:"keyboard"},this.rows.map(function(e,t){return a.a.createElement("div",{key:t,className:"row"},e.map(function(e,t){return a.a.createElement("div",{key:t,className:"key",id:e[0],"data-shift":e[1]||e[0],"data-command":e[2]||e[0],"data-both":e[3]||e[1]||e[0]})}))}),a.a.createElement("input",{type:"text"})),a.a.createElement("div",{id:"options"},a.a.createElement("pre",{id:"first",spellCheck:"false",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleKeyDown(t)},onDrop:function(t){return e.handleDrop(t)}}),a.a.createElement("pre",{id:"second",spellCheck:"false",contentEditable:"true",onInput:function(t){return e.handleInput(t)},onKeyDown:function(t){return e.handleKeyDown(t)}}),a.a.createElement("label",{id:"label",onClick:function(t){return e.handleClick(t)}},a.a.createElement("input",{type:"checkbox",id:"display",onKeyDown:function(t){e.handleKeyDown(t)}}),a.a.createElement("span",null),a.a.createElement("div",null))),a.a.createElement("input",{id:"open",type:"file",onChange:function(t){return e.handleChange(t)}}),a.a.createElement("iframe",{id:"iframe",title:"iframe"}))}}]),t}(a.a.Component),b=y,E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/notes","/service-worker.js");E?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.53cbb7d4.chunk.js.map