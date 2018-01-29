window.addEventListener("load", function () {
    let windowWidth = window.innerWidth;
    let run = false;
    let option = [];
    let iframe = null;
    let autoReflesh = false;
    let obj = [];
    let id = 0;
    let htmlEditor = id;
    let unbraEvent = new Array();
    let lastUnbraPoint = [];
    let unbraId = [];
    let branchId = [];
    let tabEvent = false;
    let beforeRemoveTime = new Date().getTime();
    let beforeAction = null;
    let active = {
        id: id,
        type: "html",
        fileName: "index.html",
        mode: "html",
        removed: false
    };
    obj.push(active);
    let Range = function (startRow, startColumn, endRow, endColumn) {
        return {
            start: { row: startRow, column: startColumn },
            end: { row: endRow, column: endColumn }
        };
    }
    option.push({
        type: "editor",
        element: document.getElementById("editor"),
        frontElement: null,
        frontFrame: null,
        sizeChange: false
    });
    sessionStorage.clear();
    const editor = ace.edit("editor");
    document.onclick = function () {
        console.log(editor.session.getUndoManager().$undoStack[active.id]);
    }
    //rewrite ace.js undoManager
    let undoStackObj = function (delta, branchPointId, isBranchPoint, branchStack) {
        this.delta = delta;
        this.branchPointId = branchPointId;
        this.isBranchPoint = isBranchPoint;
        this.branchStack = branchStack;
    }
    let branchStack = [];
    let lastUnbraNum = [];
    editor.session.getUndoManager().execute = (function (options) {
        if (!tabEvent) {
            if (this.hasRedo()) {
                try {
                    if (this.$undoStack[active.id][this.$undoStack[active.id].length - 1].branchStack.length == 0) {
                        if (!this.$redoStack[active.id].some(function (e, i, a) { return e.isBranchPoint })) {
                            lastUnbraPoint[active.id].branchStack[unbraId[active.id]].shift();
                        }
                    }
                } catch (e) { console.log(e); }
                lastUnbraNum[active.id] = this.$undoStack[active.id].length - 1;
                lastUnbraPoint[active.id] = this.$undoStack[active.id][lastUnbraNum[active.id]];
                lastUnbraPoint[active.id].isBranchPoint = true;
                if (lastUnbraPoint[active.id].branchStack.length == 0) {
                    let num = this.$redoStack[active.id].indexOf([].concat(this.$redoStack[active.id]).reverse(false).find(function (e, i, a) {
                        return e.isBranchPoint;
                    }));
                    if (num < 0) {
                        lastUnbraPoint[active.id].branchStack[0] = [].concat(this.$redoStack[active.id]);
                    } else {
                        lastUnbraPoint[active.id].branchStack[0] = this.$redoStack[active.id].slice(num, this.$redoStack[active.id].length);
                    }
                    lastUnbraPoint[active.id].branchStack[0].forEach(function (e, i, a) {
                        e.branchPointId = 0;
                    });
                }
                lastUnbraPoint[active.id].branchStack.push([]);
                unbraId[active.id] = lastUnbraPoint[active.id].branchStack.length - 1;
            }
            let deltaSets = options.args[0];
            this.$doc = options.args[1];
            if (options.merge && this.hasUndo()) {
                this.dirtyCounter[active.id]--;
                deltaSets = this.$undoStack[active.id].pop().delta.concat(deltaSets);
            }
            this.$undoStack[active.id].push(new undoStackObj(deltaSets, unbraId[active.id], false, []));
            this.$redoStack[active.id] = [];
            if (this.dirtyCounter[active.id] < 0) {
                this.dirtyCounter[active.id] = NaN;
            }
            try {
                lastUnbraPoint[active.id].branchStack[unbraId[active.id]] = this.$undoStack[active.id].slice(lastUnbraNum[active.id] + 1, this.$undoStack[active.id].length).reverse(false);
            } catch (e) {
                console.log(e);
            };
            this.dirtyCounter[active.id]++;
            if (undoBranchGUI) {
                let stack = this.$undoStack[active.id];
                let context = undoBranchGUIContext;
                context.fillStyle = "#222";
                context.fillRect(0, 0, undoBranchGUI.element.width, undoBranchGUI.element.height);
                createUndoBranchGUI(stack, 50, 50, 0);
            }
        } else {
            tabEvent = false;
        }
    });
    editor.session.getUndoManager().undo = (function (dontSelect) {
        if (this.$undoStack[active.id].length > 1) {
            let stack = this.$undoStack[active.id].pop();
            let deltaSets = stack.delta;
            let undoSelectionRange = null;
            if (deltaSets) {
                undoSelectionRange = this.$doc.undoChanges(deltaSets, dontSelect);
                this.$redoStack[active.id].push(new undoStackObj(deltaSets, stack.branchPointId, stack.isBranchPoint, stack.branchStack));
                this.dirtyCounter[active.id]--;
            }
            return undoSelectionRange;
        }
    });
    editor.session.getUndoManager().redo = (function (dontSelect) {
        let stack = this.$redoStack[active.id].pop();
        let deltaSets = stack.delta;
        let redoSelectionRange = null;
        if (deltaSets) {
            redoSelectionRange = this.$doc.redoChanges(this.$deserializeDeltas(deltaSets), dontSelect);
            this.$undoStack[active.id].push(new undoStackObj(deltaSets, stack.branchPointId, stack.isBranchPoint, stack.branchStack));
            this.dirtyCounter[active.id]++;
        }
        return redoSelectionRange;
    });
    editor.session.getUndoManager().reset = (function () {
        this.$undoStack = [];
        this.$redoStack = [];
        this.dirtyCounter = [];
    });
    editor.session.getUndoManager().init = (function () {
        unbraId[active.id] = 0;
        this.$undoStack[active.id] = [new undoStackObj([], 0, false, [])];
        this.$redoStack[active.id] = [];
        lastUnbraPoint[active.id] = null;
        lastUnbraNum[active.id] = 0;
        this.dirtyCounter[active.id] = 0;
    });
    editor.session.getUndoManager().hasUndo = (function () {
        return this.$undoStack[active.id].length > 0;
    });
    editor.session.getUndoManager().hasRedo = (function () {
        return this.$redoStack[active.id].length > 0;
    });
    editor.session.getUndoManager().markClean = (function () {
        this.dirtyCounter[active.id] = 0;
    });
    editor.session.getUndoManager().isClean = (function () {
        return this.dirtyCounter[active.id] === 0;
    });
    editor.session.getUndoManager().unbra = (function () {
        let branchPointStack = [].concat(this.$undoStack[active.id]).filter(function (e, i, a) {
            e.indexNum = i;
            return e.isBranchPoint;
        });
        let currentId = branchPointStack.map(function (e, i, a) {
            return e.branchPointId;
        });
        if (!this.$undoStack[active.id][this.$undoStack[active.id].length - 1].isBranchPoint) {
            currentId.push(this.$undoStack[active.id][this.$undoStack[active.id].length - 1].branchPointId);
        }
        let lastNumber = [].concat(currentId).reverse(false).find(function (e, i, a) {
            return e > 0;
        });
        let nextBranchPointNum = currentId.lastIndexOf(lastNumber) - 1;
        let nextBranchPoint = branchPointStack[nextBranchPointNum];
        let targetBranchId = lastNumber - 1;

        let nextBranchPointIndex = nextBranchPoint.indexNum;
        let j = this.$undoStack[active.id].length - (nextBranchPointIndex + 1);
        for (let i = 0; i < j; i++) {
            let stack = this.$undoStack[active.id].pop();
            let deltaSets = stack.delta;
            this.$doc.undoChanges(deltaSets, null);
            this.dirtyCounter[active.id]--;
        }
        (function (stack) {
            j = stack.length;
            for (let i = 0; i < j; i++) {
                let s = stack[stack.length - 1 - i];
                let deltaSets = s.delta;
                this.$doc.redoChanges(this.$deserializeDeltas(deltaSets), null);
                this.$undoStack[active.id].push(new undoStackObj(deltaSets, s.branchPointId, s.isBranchPoint, s.branchStack));
                this.dirtyCounter[active.id]++;
            }
            if (stack[0].isBranchPoint) {
                arguments.callee.bind(this)([].concat(stack[0].branchStack[stack[0].branchStack.length - 1]));
            }
        }.bind(this))(nextBranchPoint.branchStack[targetBranchId]);
        this.$redoStack[active.id] = [];
        lastUnbraNum[active.id] = this.$undoStack[active.id].indexOf([].concat(this.$undoStack[active.id]).reverse(false).find(function (e, i, a) {
            return e.isBranchPoint;
        }));
        lastUnbraPoint[active.id] = this.$undoStack[active.id][lastUnbraNum[active.id]];
        unbraId[active.id] = this.$undoStack[active.id][this.$undoStack[active.id].length - 1].branchPointId;
    });
    editor.session.getUndoManager().rebra = (function () {
        let branchPointStack = [].concat(this.$undoStack[active.id]).filter(function (e, i, a) {
            e.indexNum = i;
            return e.isBranchPoint;
        });
        let currentId = branchPointStack.map(function (e, i, a) {
            return e.branchPointId;
        });
        if (!this.$undoStack[active.id][this.$undoStack[active.id].length - 1].isBranchPoint) {
            currentId.push(this.$undoStack[active.id][this.$undoStack[active.id].length - 1].branchPointId);
        }
        let targetBranchId = 0;
        let nextBranchPoint = [].concat(branchPointStack).reverse(false).find(function (e, i, a) {
            targetBranchId = [].concat(currentId).reverse(false)[i] + 1;
            return e.branchStack.length > [].concat(currentId).reverse(false)[i] + 1;
        });

        console.log(nextBranchPoint);
        let nextBranchPointIndex = nextBranchPoint.indexNum;
        let j = this.$undoStack[active.id].length - (nextBranchPointIndex + 1);
        for (let i = 0; i < j; i++) {
            let stack = this.$undoStack[active.id].pop();
            let deltaSets = stack.delta;
            this.$doc.undoChanges(deltaSets, null);
            this.dirtyCounter[active.id]--;
        }

        (function (stack) {
            j = stack.length;
            for (let i = 0; i < j; i++) {
                let s = stack[stack.length - 1 - i];
                let deltaSets = s.delta;
                this.$doc.redoChanges(this.$deserializeDeltas(deltaSets), null);
                this.$undoStack[active.id].push(new undoStackObj(deltaSets, s.branchPointId, s.isBranchPoint, s.branchStack));
                this.dirtyCounter[active.id]++;
            }
            if (stack[0].isBranchPoint) {
                arguments.callee.bind(this)(stack[0].branchStack[0]);
            }
        }.bind(this))(nextBranchPoint.branchStack[targetBranchId]);
        this.$redoStack[active.id] = [];
        lastUnbraNum[active.id] = this.$undoStack[active.id].indexOf([].concat(this.$undoStack[active.id]).reverse(false).find(function (e, i, a) {
            return e.isBranchPoint;
        }));
        lastUnbraPoint[active.id] = this.$undoStack[active.id][lastUnbraNum[active.id]];
        unbraId[active.id] = this.$undoStack[active.id][this.$undoStack[active.id].length - 1].branchPointId;
    });
    //            
    editor.session.getUndoManager().reset();
    editor.session.getUndoManager().init();
    editor.setTheme("ace/theme/dawn");
    editor.setFontSize(23);
    editor.getSession().setMode("ace/mode/html");
    const { HashHandler } = require('ace/keyboard/hash_handler');
    const keyboardHandler = new HashHandler();
    keyboardHandler.addCommand({
        name: "run-event",
        bindKey: { win: 'Ctrl+g', mac: 'Command+g' },
        exec: () => {
            const e = document.createEvent("MouseEvents");
            e.initEvent("mousedown", false, true);
            run ? document.getElementById("stop").dispatchEvent(e) : document.getElementById("run").dispatchEvent(e);
        },
        readOnly: true
    });
    keyboardHandler.addCommand({
        name: "save-event",
        bindKey: { win: 'Ctrl+s', mac: 'Command+s' },
        exec: () => {
            const e = document.createEvent("MouseEvents");
            e.initEvent("mousedown", false, true);
            document.getElementById("save").dispatchEvent(e);
        },
        readOnly: true
    });
    keyboardHandler.addCommand({
        name: "undo-event",
        bindKey: { mac: 'Command+z' },
        exec: () => {
            try {
                editor.undo();
            } catch (e) {

            }
        },
        readOnly: true
    });
    keyboardHandler.addCommand({
        name: "redo-event",
        bindKey: { mac: 'Command+Shift+z' },
        exec: () => {
            try {
                editor.redo();
            } catch (e) {

            }
        },
        readOnly: true
    });
    keyboardHandler.addCommand({
        name: "unbra-event",
        bindKey: { mac: 'Ctrl+z' },
        exec: () => {
            try {
                editor.session.getUndoManager().unbra();
            } catch (e) {

            }
        }
    })
    keyboardHandler.addCommand({
        name: "rebra-event",
        bindKey: { mac: 'Ctrl+Shift+z' },
        exec: () => {
            try {
                editor.session.getUndoManager().rebra();
            } catch (e) {

            }
        }
    })
    editor.keyBinding.addKeyboardHandler(keyboardHandler);

    document.addEventListener("mousedown", function (e) {
        document.getElementById("filemenu").style.visibility = e.target == document.getElementById("file") ? "visible" : "hidden";
        document.getElementById("modemenu").style.visibility = e.target == document.getElementById("mode") ? "visible" : "hidden";
        document.getElementById("addmenu").style.visibility = e.target == document.getElementById("add") || e.target == document.getElementById("fileName") || e.target == document.getElementById("extension") ? "visible" : "hidden";
    });
    document.getElementById("html").addEventListener("mousedown", function () {
        tabEvent = true;
        let tab = document.getElementById("tab").getElementsByTagName("button");
        for (let i = 0; i < tab.length; i++) {
            tab[i].style.backgroundColor = "#ccc";
            let p = tab[i].getElementsByTagName("p");
            for (let j = 0; j < p.length; j++) {
                p[j].style.color = "#000";
            }
        }
        this.style.backgroundColor = "#e38";
        this.style.color = "#eee";
        editor.getSession().setMode("ace/mode/html");
        sessionStorage.setItem(active.id, editor.getValue());
        let autoRefleshEvent = false;
        if (autoReflesh) autoRefleshEvent = true;
        autoReflesh = false;
        editor.setValue(sessionStorage.getItem(htmlEditor));
        if (autoRefleshEvent) autoReflesh = true;
        active = {
            id: 0,
            type: "html",
            fileName: "index.html",
            mode: extension.className,
            removed: false
        }
    });
    document.getElementById("html").addEventListener("mouseover", function () {
        this.getElementsByTagName("p")[0].style.color = active.id == 0 ? "#000" : "#e38";
    });
    document.getElementById("html").addEventListener("mouseout", function () {
        this.getElementsByTagName("p")[0].style.color = active.id == 0 ? "#fff" : "#000";
    });
    document.getElementById("create").addEventListener("mousedown", function () {
        tabEvent = true;
        let fileName = document.getElementById("fileName").value;
        let num = document.getElementById("extension").selectedIndex;
        let extension = document.getElementById("extension").getElementsByTagName("option")[num];
        id++;
        let tab = document.getElementById("tab").getElementsByTagName("button");
        for (let i = 0; i < tab.length; i++) {
            tab[i].style.backgroundColor = "#ccc";
            let p = tab[i].getElementsByTagName("p");
            for (let j = 0; j < p.length; j++) {
                p[j].style.color = "#000";
            }
        }
        let button = document.createElement("button");
        button.id = id;
        document.getElementById("tab").appendChild(button);
        button.style.backgroundColor = "#e38";
        button.style.color = "#eee";
        let close = document.createElement("p");
        button.appendChild(close);
        close.innerHTML = "×";
        let name = document.createElement("p");
        button.appendChild(name);
        name.innerHTML = fileName + "." + extension.value;
        sessionStorage.setItem(active.id, editor.getValue());
        let autoRefleshEvent = false;
        if (autoReflesh) autoRefleshEvent = true;
        autoReflesh = false;
        editor.setValue("");
        if (autoRefleshEvent) autoReflesh = true;
        editor.getSession().setMode("ace/mode/" + extension.className);
        obj.push({
            id: id,
            type: extension.innerHTML,
            fileName: fileName + "." + extension.value,
            mode: extension.className,
            removed: false
        });
        let object = obj[obj.length - 1];
        button.addEventListener("mousedown", function () {
            tabEvent = true;
            let tab = document.getElementById("tab").getElementsByTagName("button");
            for (let i = 0; i < tab.length; i++) {
                tab[i].style.backgroundColor = "#ccc";
                if (tab[i] == document.getElementById("view")) tab[i].style.color = "#000";
                let p = tab[i].getElementsByTagName("p");
                for (let j = 0; j < p.length; j++) {
                    p[j].style.color = "#000";
                }
            }
            this.style.backgroundColor = "#e38";
            name.style.color = "#eee";
            sessionStorage.setItem(active.id, editor.getValue());
            let autoRefleshEvent = false;
            if (autoReflesh) autoRefleshEvent = true;
            autoReflesh = false;
            editor.setValue(sessionStorage.getItem(this.id));
            editor.getSession().setMode("ace/mode/" + object.mode);
            editor.setReadOnly(false);
            active = object;
            if (autoRefleshEvent) autoReflesh = true;
        });
        close.addEventListener("mousedown", function () {
            document.getElementById("tab").removeChild(button);
            object.removed = true;
        });
        button.addEventListener("mouseover", function () {
            name.style.color = active.id == this.id ? "#000" : "#e38";
            close.style.color = active.id == this.id ? event.target.innerHTML == "×" ? "#fff" : "#000" : event.target.innerHTML == "×" ? "#000" : "#e38";
        });
        button.addEventListener("mouseout", function () {
            name.style.color = active.id == this.id ? "#fff" : "#000";
            close.style.color = active.id == this.id ? event.target.innerHTML == "×" ? "#000" : "#fff" : event.target.innerHTML == "×" ? "#fff" : "#000";
        });
        active = object;
        editor.session.getUndoManager().init();
    });
    editor.session.on("change", function (e) {
        try {
            if (autoReflesh) {
                sessionStorage.setItem(active.id, editor.getValue());
                codeExecution();
            }
        } catch (e) {
            console.log(e);
        }
    });

    function undoBranchLength(stack){
        let length=0;
        (function(s,l){


            aruguments.callee();
        })(stack,length);
        return length;
    }

    function createUndoBranchGUI(stack, x, y, i) {
        let context = undoBranchGUIContext;        
        context.font = "18px 'ＭＳ Ｐゴシック'";
        context.textAlign = "center";
        for (let i = 0; i < stack.length; i++) {
            context.fillStyle = "#e38";
            context.beginPath();
            context.arc(x + i * 50, y, 20, 0, Math.PI * 2, false);
            context.fill();
            let text = stack[i].branchPointId;
            for (let t = 0; t < stack[i].delta.length; t++) {
                for (let k = 0; k < stack[i].delta[t].deltas.length; k++) {
                    for (let h = 0; h < stack[i].delta[t].deltas[k].lines.length; h++) {
                        text += stack[i].delta[t].deltas[k].lines[h];
                    }
                }
            }
            context.fillStyle = "#fff";
            context.fillText(text, x + i * 50, y, 40);
            if (stack[i].isBranchPoint) {
                for (let j = 0; j < stack[i].branchStack.length; j++) {
                    createUndoBranchGUI([].concat(stack[i].branchStack[j]).reverse(false), x + (i + 1) * 50, y + 50 * j, i+j);
                }
                break;
            }
        }        
    }

    document.getElementById("run").addEventListener("mousedown", function () {
        run = true;
        this.style.backgroundColor = "#e38";
        this.style.color = "#eee";
        sessionStorage.setItem(active.id, editor.getValue());
        if (!iframe) {
            let frontElement = option[option.length - 1].element;
            option.push({
                type: "iframe",
                element: document.createElement("iframe"),
                frontElement: frontElement,
                frontFrame: document.createElement("div"),
                sizeChange: false
            });
            iframe = option[option.length - 1];
            iframe.frontElement.style.width = Math.floor(iframe.frontElement.clientWidth * 7 / 10) + "px";
            document.body.appendChild(iframe.frontFrame);
            iframe.frontFrame.className = "frame";
            iframe.frontFrame.addEventListener("mousedown", mousedown(iframe));
            document.body.appendChild(iframe.element);
            iframe.element.style.width = windowWidth - (iframe.frontElement.getBoundingClientRect().right) - 7 + "px";
            iframe.element.addEventListener("load", function () {
                iframe.element.contentDocument.addEventListener("mousemove", thisElementMousemove(iframe));
                iframe.element.contentDocument.addEventListener("mouseup", mouseup(iframe));
            });
            iframe.frontElement.addEventListener("mousemove", frontElementMousemove(iframe));
            iframe.frontElement.addEventListener("mouseup", mouseup(iframe));
            document.addEventListener("mouseup", mouseup(iframe));
        }
        codeExecution();
    });
    function codeExecution() {
        let domParser = new DOMParser();
        let document_obj = null;
        try {
            document_obj = domParser.parseFromString(sessionStorage.getItem(htmlEditor), "text/html");
            if (document_obj.getElementsByTagName("parsererror").length) {
                document_obj = null;
            }
        } catch (e) {
            console.log(e);
        }
        if (document_obj) {
            let script = document_obj.getElementsByTagName("script");
            let link = document_obj.getElementsByTagName("link");
            for (let i = 0; i < script.length; i++) {
                for (let j = 0; j < obj.length; j++) {
                    if (obj[j].type != "html" && obj[j].type != "css" && !obj[j].removed) {
                        if (script[i].src) {
                            if (script[i].src.split("/")[script[i].src.split("/").length - 1] == obj[j].fileName) {
                                let blob = new Blob([sessionStorage.getItem(j)], { type: 'application/javascript' });
                                script[i].src = URL.createObjectURL(blob);
                            }
                        } else {
                            if (script[i].type == obj[j].fileName) {
                                script[i].text = sessionStorage.getItem(j);
                            }
                        }
                    }
                }
            }
            for (let i = 0; i < link.length; i++) {
                for (let j = 0; j < obj.length; j++) {
                    if (obj[j].type == "css" && !obj[j].removed) {
                        if (link[i].href.split("/")[link[i].href.split("/").length - 1] == obj[j].fileName) {
                            if (link[i].rel == "stylesheet") {
                                let blob = new Blob([sessionStorage.getItem(j)], { type: 'text/css' });
                                link[i].href = URL.createObjectURL(blob);
                            }
                        }
                    }
                }
            }
            blob = new Blob([document_obj.documentElement.outerHTML], { type: 'text/html' });
            iframe.element.contentWindow.location.replace(URL.createObjectURL(blob));
        }
    }
    document.getElementById("run").addEventListener("mouseover", function () {
        this.style.backgroundColor = "#e38";
        this.style.color = "#eee";
    });
    document.getElementById("run").addEventListener("mouseout", function () {
        this.style.backgroundColor = run ? "#e38" : "#eee";
        this.style.color = run ? "#eee" : "#e38";
    });
    document.getElementById("stop").addEventListener("mousedown", function () {
        if (iframe) {
            let iframeWidth = iframe.element.clientWidth;
            document.body.removeChild(iframe.element);
            document.body.removeChild(iframe.frontFrame);
            for (let i = 0; i < option.length; i++) {
                if (option[i].type == "iframe") {
                    option[i - 1].element.style.width = option[i - 1].element.clientWidth + iframeWidth + 6 + "px";
                    if (option.length > i + 1) {
                        option[i + 1].frontElement = option[i - 1].element;
                        option[i + 1].element.removeEventListener("mousemove", thisElementMousemove(option[i + 1]));
                        option[i + 1].frontElement.removeEventListener("mousemove", frontElementMousemove(option[i + 1]));
                        option[i + 1].element.addEventListener("mousemove", thisElementMousemove(option[i + 1]));
                        option[i + 1].frontElement.addEventListener("mousemove", frontElementMousemove(option[i + 1]));
                    }
                    option.splice(i, 1);
                    break;
                }
            }
            iframe = null;
        }
        run = false;
        autoReflesh = false;
        document.getElementById("autoReflesh").style.backgroundColor = "#fff";
        document.getElementById("autoReflesh").style.color = "#000";
        document.getElementById("run").style.backgroundColor = "#eee";
        document.getElementById("run").style.color = "#e38";
    });
    document.getElementById("stop").addEventListener("mouseout", function () {
        this.style.backgroundColor = "#eee";
        this.style.color = "#e38";
    });
    document.getElementById("stop").addEventListener("mouseover", function () {
        this.style.backgroundColor = "#e38";
        this.style.color = "#eee";
    });
    document.getElementById("add").addEventListener("mouseover", function () {
        this.style.color = "#e38";
    });
    document.getElementById("add").addEventListener("mouseout", function () {
        this.style.color = "#000";
    });
    document.getElementById("autoReflesh").addEventListener("mousedown", function () {
        autoReflesh = !autoReflesh;
        run = true;
        this.style.backgroundColor = !autoReflesh ? "#fff" : "#e38";
        this.style.color = !autoReflesh ? "#000" : "#fff";
        const e = document.createEvent("MouseEvents");
        e.initEvent("mousedown", false, true);
        document.getElementById("run").dispatchEvent(e);
        if (!autoReflesh) {
            const e = document.createEvent("MouseEvents");
            e.initEvent("mousedown", false, true);
            document.getElementById("stop").dispatchEvent(e);
            run = false;
        }
    });
    document.getElementById("autoReflesh").addEventListener("mouseover", function () {
        this.style.color = autoReflesh ? "#000" : "#e38";
    });
    document.getElementById("autoReflesh").addEventListener("mouseout", function () {
        this.style.color = autoReflesh ? "#fff" : "#000";
    });
    let undoBranchGUI = false;
    let undoBranchGUICanvas=null;
    let undoBranchGUIContext = null;
    
    document.getElementById("undoBranchGUI").addEventListener("mousedown", function () {
        this.style.backgroundColor = undoBranchGUI ? "#fff" : "#e38";
        this.style.color = undoBranchGUI ? "#000" : "#fff";
        if (!undoBranchGUI) {
            let frontElement = option[option.length - 1].element;
            option.push({
                type: "undoBranchGUI",
                element: document.createElement("div"),
                frontElement: frontElement,
                frontFrame: document.createElement("div"),
                sizeChange: false
            });
            undoBranchGUI = option[option.length - 1];
            undoBranchGUI.frontElement.style.width = Math.floor(undoBranchGUI.frontElement.clientWidth * 7 / 10) + "px";
            document.body.appendChild(undoBranchGUI.frontFrame);
            undoBranchGUI.frontFrame.className = "frame";
            undoBranchGUI.frontFrame.addEventListener("mousedown", mousedown(undoBranchGUI));
            document.body.appendChild(undoBranchGUI.element);
            undoBranchGUICanvas=document.createElement("canvas");
            undoBranchGUI.element.appendChild(undoBranchGUICanvas);
            undoBranchGUICanvas.width=10000;
            undoBranchGUICanvas.height= Math.floor(undoBranchGUI.element.clientHeight);
            undoBranchGUIContext = undoBranchGUICanvas.getContext("2d");            
            undoBranchGUI.element.style.overflow = "auto";
            undoBranchGUI.element.className = "option";
            undoBranchGUI.element.style.backgroundColor = "#222";
            undoBranchGUI.element.style.width = windowWidth - (undoBranchGUI.frontElement.getBoundingClientRect().right) - 3 + "px";
            undoBranchGUI.element.width = Math.floor(undoBranchGUI.element.clientWidth);
            undoBranchGUI.element.height = Math.floor(undoBranchGUI.element.clientHeight);
            undoBranchGUI.element.addEventListener("mousemove", thisElementMousemove(undoBranchGUI));
            undoBranchGUI.element.addEventListener("mouseup", mouseup(undoBranchGUI));
            if (undoBranchGUI.frontElement.tagName == "IFRAME") {
                undoBranchGUI.frontElement.contentDocument.addEventListener("mousemove", frontElementMousemove(undoBranchGUI));
                undoBranchGUI.frontElement.contentDocument.addEventListener("mouseup", mouseup(undoBranchGUI));
            } else {
                undoBranchGUI.frontElement.addEventListener("mousemove", frontElementMousemove(undoBranchGUI));
                undoBranchGUI.frontElement.addEventListener("mouseup", mouseup(undoBranchGUI));
            }
            document.addEventListener("mouseup", mouseup(undoBranchGUI));
        } else {
            let undoBranchGUIWidth = undoBranchGUI.element.clientWidth;
            document.body.removeChild(undoBranchGUI.element);
            document.body.removeChild(undoBranchGUICanvas);
            document.body.removeChild(undoBranchGUI.frontFrame);
            for (let i = 0; i < option.length; i++) {
                if (option[i].type == "undoBranchGUI") {
                    option[i - 1].element.style.width = option[i - 1].element.clientWidth + undoBranchGUIWidth + 10 + "px";
                    if (option.length > i + 1) {
                        option[i + 1].frontElement = option[i - 1].element;
                        option[i + 1].element.removeEventListener("mousemove", thisElementMousemove(option[i + 1]));
                        option[i + 1].frontElement.removeEventListener("mousemove", frontElementMousemove(option[i + 1]));
                        option[i + 1].element.addEventListener("mousemove", thisElementMousemove(option[i + 1]));
                        option[i + 1].frontElement.addEventListener("mousemove", frontElementMousemove(option[i + 1]));
                    }
                    option.splice(i, 1);
                    break;
                }
            }
            undoBranchGUI = null;
        }
    });

    document.getElementById("undoBranchGUI").addEventListener("mouseover", function () {
        this.style.color = undoBranchGUI ? "#000" : "#e38";
    });
    document.getElementById("undoBranchGUI").addEventListener("mouseout", function () {
        this.style.color = undoBranchGUI ? "#fff" : "#000";
    });

    const mousedown = function (option) {
        return function (e) {
            option.sizeChange = true;
        }
    }
    const thisElementMousemove = function (option) {
        return function (e) {
            if (option) {
                if (option.sizeChange) {
                    let x = option.element.tagName == "IFRAME" ? e.clientX : e.clientX - option.element.getBoundingClientRect().left;
                    option.element.style.width = Math.floor(option.element.clientWidth - x) + "px";
                    option.frontElement.style.width = Math.floor(option.frontElement.clientWidth + x) + "px";
                }
            }
        }
    }
    const frontElementMousemove = function (option) {
        return function (e) {
            if (option) {
                if (option.sizeChange) {
                    let x = option.element.tagname == "IFRAME" ? e.clientX - option.frontElement.getBoundingClientRect().left : option.frontElement.tagName == "IFRAME" ? e.clientX : e.clientX - option.frontElement.getBoundingClientRect().left;
                    option.element.style.width = Math.floor(option.element.clientWidth + (option.frontElement.clientWidth - x)) + "px";
                    option.frontElement.style.width = Math.floor(x) + "px";
                }
            }
        }
    }
    const mouseup = function (option) {
        return function () {
            if (option) {
                if (option.sizeChange) {
                    option.sizeChange = false;
                }
            }
        }
    }
    document.getElementById("save").addEventListener("mousedown", function () {
        let data = editor.getValue();
        if (active.id == htmlEditor) {
            let domParser = new DOMParser();
            let document_obj = null;
            try {
                document_obj = domParser.parseFromString(sessionStorage.getItem(htmlEditor), "text/html");
                if (document_obj.getElementsByTagName("parsererror").length) {
                    document_obj = null;
                }
            } catch (e) {
                console.log(e);
            }
            if (document_obj) {
                let script = document_obj.getElementsByTagName("script");
                for (let i = 0; i < script.length; i++) {
                    for (let j = 0; j < obj.length; j++) {
                        if (obj[j].type != "html" && obj[j].type != "css" && !obj[j].removed) {
                            if (script[i]) {
                                if (!script[i].src) {
                                    if (script[i].type == obj[j].fileName) {
                                        script[i].text = sessionStorage.getItem(j);
                                    }
                                }
                            }
                        }
                    }
                }
                data = document_obj.documentElement.outerHTML;
            }
        }
        const e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        const a = document.createElement("a");
        a.textContent = "save";
        a.download = active.fileName;
        a.href = window.URL.createObjectURL(new Blob([data], { type: 'text/plain' }));
        a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
        a.dispatchEvent(e);
    });
    document.addEventListener("keydown", function (e) {
        if (document.getElementById("addmenu").style.visibility == "visible") {
            if (e.key == "Enter") {
                const e = document.createEvent("MouseEvents");
                e.initEvent("mousedown", false, true);
                document.getElementById("create").dispatchEvent(e);
                document.getElementById("addmenu").style.visibility = "hidden";
            }
        }
    });
    document.getElementById("load").addEventListener("mousedown", function () {
        const e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        document.getElementById("selfile").dispatchEvent(e);
    });
    document.getElementById("selfile").addEventListener("change", function () {
        const file = event.target.files;
        let reader = new FileReader();
        reader.readAsText(file[0]);
        reader.onload = function () {
            editor.setValue(reader.result);
        }
    });
    window.addEventListener("resize", function (e) {
        let parWidth = window.innerWidth / windowWidth;
        if (option.length > 0) {
            let width = 0;
            let iframeExist = false;
            for (let i = 0; i < option.length - 1; i++) {
                option[i].element.style.width = Math.floor(option[i].element.clientWidth * parWidth) + "px";
                if (option[i].element.tagName == "IFRAME") iframeExist = true;
                width += option[i].element.clientWidth + 3;
            }
            if (option[option.length - 1].element.tagName == "IFRAME") iframeExist = true;
            option[option.length - 1].element.style.width = iframeExist ? window.innerWidth - width - 4 + "px" : window.innerWidth - width + "px";
        }
        windowWidth = window.innerWidth;
    });

    document.getElementById("extension").addEventListener("change", function () {
        document.getElementById("centerSelect").innerHTML = this.getElementsByTagName("option")[this.selectedIndex].innerHTML + "  ▽";
    });
    document.getElementById("extension").addEventListener("mouseover", function () {
        document.getElementById("centerSelect").style.color = "#e38";
    });
    document.getElementById("extension").addEventListener("mouseout", function () {
        document.getElementById("centerSelect").style.color = "#000";
    });
});
