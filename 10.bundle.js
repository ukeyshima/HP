(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{130:function(e,o,n){"use strict";n.r(o),n.d(o,"default",function(){return I});n(8),n(9),n(91),n(10);var a=n(0),l=n.n(a),_=n(444),d=n(447),f=n.n(d);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function v(e,o){for(var n=0;n<o.length;n++){var a=o[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,o,n){return o&&v(e.prototype,o),n&&v(e,n),e}function w(e,o){return!o||"object"!==h(o)&&"function"!=typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&P(e,o)}function P(e,o){return(P=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}var m=function(e){function o(){return u(this,o),w(this,O(o).apply(this,arguments))}return y(o,l.a.Component),E(o,[{key:"render",value:function(){return l.a.createElement("p",x({},this.props,{style:{height:.2*window.innerHeight,width:window.innerWidth,margin:0,padding:0,fontSize:100,backgroundColor:"rgb(41,41,49)",color:"#fff",textAlign:"right",fontFamily:"MS Sans Serif"}}),this.props.result)}}]),o}(),M=function(e){function o(e){var n;return u(this,o),(n=w(this,O(o).call(this,e))).state={result:""},n}return y(o,l.a.Component),E(o,[{key:"updateState",value:function(e){this.setState({result:e})}},{key:"handleResize",value:function(e,o){this.refs.createCanvas.handleResize(e,.8*o)}},{key:"render",value:function(){return l.a.createElement("div",this.props,l.a.createElement(m,{result:this.state.result}),l.a.createElement(_.a,{ref:"createCanvas",style:{width:this.props.style.width,height:.8*this.props.style.height},updatestate:this.updateState.bind(this),resultstyle:{width:window.innerWidth,height:.2*window.innerHeight}}))}}]),o}(),I=function(e){function o(e){var n;return u(this,o),(n=w(this,O(o).call(this,e))).state={width:window.innerWidth,height:window.innerHeight},n}return y(o,l.a.Component),E(o,[{key:"componentDidMount",value:function(){f.a.use(),this.tempHandleResize=this.handleResize.bind(this),window.addEventListener("resize",this.tempHandleResize)}},{key:"componentWillUnmount",value:function(){f.a.unuse(),window.removeEventListener("resize",this.tempHandleResize)}},{key:"handleResize",value:function(e){var o=e.target.innerWidth,n=e.target.innerHeight;this.refs.calculator.handleResize(o,n),this.setState({width:o,height:n})}},{key:"render",value:function(){return l.a.createElement(M,{ref:"calculator",style:{width:this.state.width,height:this.state.height}})}}]),o}()},444:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_typed_int16_array__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(89),core_js_modules_es6_typed_int16_array__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_typed_int16_array__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(90),core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(445),_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_7__),_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(446),_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_8__);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var n=0;n<o.length;n++){var a=o[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,o,n){return o&&_defineProperties(e.prototype,o),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,o){return!o||"object"!==_typeof(o)&&"function"!=typeof o?_assertThisInitialized(e):o}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&_setPrototypeOf(e,o)}function _setPrototypeOf(e,o){return(_setPrototypeOf=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}var render=function(e,o,n,a,l){o.useProgram(n),o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,3,o.FLOAT,!1,0,0),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.uniform2fv(a[0],[e.width,e.height]),o.drawElements(o.TRIANGLES,6,o.UNSIGNED_SHORT,0),o.flush()},webGLStart=function(e,o,n,a,l){var _=function(e,n){var a=o.createShader(n);if(o.shaderSource(a,e),o.compileShader(a),o.getShaderParameter(a,o.COMPILE_STATUS))return a;alert(o.getShaderInfoLog(a)),console.log(o.getShaderInfoLog(a))},d=function(e,n){var a=o.createProgram();return o.attachShader(a,e),o.attachShader(a,n),o.linkProgram(a),o.getProgramParameter(a,o.LINK_STATUS)?(o.useProgram(a),a):null}(_(n,o.VERTEX_SHADER),_(a,o.FRAGMENT_SHADER));l[0]=o.getUniformLocation(d,"resolution"),l[1]=o.getUniformLocation(d,"mouse"),l[2]=o.getUniformLocation(d,"click"),l[3]=o.getUniformLocation(d,"usegpu");var f,h,x=(f=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],h=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,h),o.bufferData(o.ARRAY_BUFFER,new Float32Array(f),o.DYNAMIC_COPY),o.bindBuffer(o.ARRAY_BUFFER,null),h),u=function(e){var n=o.createBuffer();return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n),o.bufferData(o.ELEMENT_ARRAY_BUFFER,new Int16Array(e),o.STATIC_DRAW),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,null),n}([0,2,1,1,2,3]);return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,u),render(e,o,d,l,x),{prg:d,vPosition:x}},calculate=function(e,o){var n=function(o,n){var a=e.createShader(n);if(e.shaderSource(a,o),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))return a;alert(e.getShaderInfoLog(a)),console.log(e.getShaderInfoLog(a))},a=(function(o,n){var a=e.createProgram();e.attachShader(a,o),e.attachShader(a,n),e.transformFeedbackVaryings(a,["result"],e.SEPARATE_ATTRIBS),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)&&e.useProgram(a)}(n("#version 300 es \n out float result; void main(void){result=".concat(o,";}"),e.VERTEX_SHADER),n("#version 300 es \n void main(void){}",e.FRAGMENT_SHADER)),e.createBuffer()),l=e.createTransformFeedback();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,Float32Array.BYTES_PER_ELEMENT,e.DYNAMIC_COPY),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,l),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,0,a),e.beginTransformFeedback(e.POINTS),e.drawArrays(e.POINTS,0,1),e.endTransformFeedback();var _=new Float32Array(1);return e.getBufferSubData(e.TRANSFORM_FEEDBACK_BUFFER,0,_),_[0]},calculate2=function calculate2(script){return eval(script)},createFormula=function(e,o,n,a,l,_,d,f,h,x){o.uniform2fv(n[1],[a.clientX,a.clientY-f.height]),o.uniform1i(n[2],!0),o.clear(o.COLOR_BUFFER_BIT),o.uniform2fv(n[0],[e.width,e.height]),o.drawElements(o.TRIANGLES,6,o.UNSIGNED_SHORT,0),o.flush();var u=4*Math.floor((e.height-(a.clientY-f.height))/(e.height/5))+Math.floor(a.clientX/(e.width/4)),v="undifined";switch(u){case 0:case 1:u="0";break;case 2:v=".";break;case 3:v="=";break;case 4:u="1";break;case 5:u="2";break;case 6:u="3";break;case 7:v="+";break;case 8:u="4";break;case 9:u="5";break;case 10:u="6";break;case 11:v="-";break;case 12:u="7";break;case 13:u="8";break;case 14:u="9";break;case 15:v="*";break;case 16:d=new Array,l="";break;case 17:_=!_,o.uniform1i(n[3],_),render(e,o,h,n,x),o.flush();break;case 18:break;case 19:v="/"}if(16!=u&&17!=u&&18!=u)if(d.length>0)if("number"==d[d.length-1].type)if("undifined"==v)d.push({type:"number",key:u}),"0"==l?l=u:l+=u;else if(d.push({type:"operator",key:v}),"."==v)-1!=Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))?-1==l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))).indexOf(".")&&(l+=v):-1==l.indexOf(".")&&(l+=v);else if("="==v){-1!=Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))?-1==l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))).indexOf(".")&&(l+=".0"):-1==l.indexOf(".")&&(l+=".0");var E=_?""+calculate(o,l):""+calculate2(l);(d=new Array).push({type:"number",key:E}),l=E}else-1!=Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))?-1==l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))).indexOf(".")?l+=".0"+v:l+=v:-1==l.indexOf(".")?l+=".0"+v:l+=v;else"undifined"==v&&(d.push({type:"number",key:u}),l+=u);else"."==v?l="0.":"undifined"!=v||(d.push({type:"number",key:u}),l+=u);var w=l;return-1!=Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))?-1==l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/"))).indexOf(".")&&"+"!=l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/")))&&"-"!=l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/")))&&"*"!=l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/")))&&"/"!=l.slice(Math.max(l.lastIndexOf("+"),l.lastIndexOf("-"),l.lastIndexOf("*"),l.lastIndexOf("/")))&&(w+=".0"):-1==l.indexOf(".")&&""!=l&&(w+=".0"),{script:l,result:w,usegpu:_,keyBuffer:d}},formulaEnd=function(e,o,n){e.useProgram(o),e.uniform1i(n[2],!1)},CreateCanvas=function(e){function o(e){var n;return _classCallCheck(this,o),(n=_possibleConstructorReturn(this,_getPrototypeOf(o).call(this,e))).uniLocation=[],n.calculaterPrg=null,n.calculaterVbo=null,n.state={usegpu:!1,script:"",keyBuffer:[]},n}return _inherits(o,react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_createClass(o,[{key:"componentDidMount",value:function(){this.canvas.width=this.props.style.width,this.canvas.height=this.props.style.height,this.gl=this.canvas.getContext("webgl2");var e=webGLStart(this.canvas,this.gl,_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_7___default()(),_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_8___default()(),this.uniLocation);this.calculaterPrg=e.prg,this.calculaterVbo=e.vPosition}},{key:"handleResize",value:function(e,o){this.canvas.width=e,this.canvas.height=o,this.gl.viewport(0,0,e,o),render(this.canvas,this.gl,this.calculaterPrg,this.uniLocation,this.calculaterVbo)}},{key:"onMousedown",value:function(e){var o=createFormula(this.canvas,this.gl,this.uniLocation,e.nativeEvent,this.state.script,this.state.usegpu,this.state.keyBuffer,this.props.resultstyle,this.calculaterPrg,this.calculaterVbo);this.props.updatestate(o.result),this.setState({usegpu:o.usegpu,script:o.script,result:o.result,keyBuffer:o.keyBuffer})}},{key:"onMouseup",value:function(e){formulaEnd(this.gl,this.calculaterPrg,this.uniLocation),render(this.canvas,this.gl,this.calculaterPrg,this.uniLocation,this.calculaterVbo)}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas",{style:this.props.style,ref:function(o){e.canvas=o},onMouseDown:this.onMousedown.bind(this),onMouseUp:this.onMouseup.bind(this)})}}]),o}();CreateCanvas.propTypes={updatestate:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired},__webpack_exports__.a=CreateCanvas},445:function(e,o){e.exports=function(){return["#version 300 es","    layout (location=0) in vec3 position;","    void main(void){","        gl_Position = vec4(position, 1.0);","    }"].join("\n")}},446:function(e,o){e.exports=function(){return["#version 300 es","    precision highp float;","    uniform vec2 resolution;","    uniform vec2 mouse;","    uniform int click;","    uniform int usegpu;","    out vec4 outColor;    ","    #define PI 3.14","    mat2 rotate2d(float angle){","        return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));","    }","    float zero(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        color*=step(19.0,sqrt(pow((p.x)*1.5,2.0)+pow(p.y,2.0)))+step(sqrt(pow((p.x)*1.5,2.0)+pow(p.y,2.0)),14.0);","        return color;","    }","    float one(vec2 p,vec2 c){","        p-=c;","        p.y+=3.0;","        float color=1.0;","        color*=clamp(step(p.y,-15.0)+step(20.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        p-=vec2(1.0,20.0);","        p*=rotate2d( sin(PI/2.0) );","        color*=clamp(step(p.y,-15.0)+step(0.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        return color;","    }","    float two(vec2 p,vec2 c){","        p-=c;","        p.y-=7.0;","        float color=1.0;","        color*=clamp(step(p.y,0.0)+step(11.0,sqrt(pow((p.x),2.0)+pow((p.y),2.0)))+step(sqrt(pow((p.x),2.0)+pow((p.y),2.0)),7.0),0.0,1.0);","        color*=clamp(step(p.x,6.0)+step(11.0,sqrt(pow((p.x),2.0)+pow((p.y)*1.3,2.0)))+step(sqrt(pow((p.x),2.0)+pow((p.y)*1.3,2.0)),7.0),0.0,1.0);","        color*=clamp(step(p.x,-10.0)+step(12.0,p.x)+step(-20.0,p.y)+step(p.y,-24.0),0.0,1.0);","        p-=-vec2(3.0,15.0);","        p*=rotate2d( sin(PI/4.0) );","        color*=clamp(step(p.y,-11.0)+step(15.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        return color;","    }","    float three(vec2 p,vec2 c){","        p-=c;","        p.y-=10.0;","        float color=1.0;","        color*=clamp(step(p.y,0.0)*step(p.x,-3.0)+step(10.0,sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)))+step(sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)),6.0),0.0,1.0);","        p.y+=17.0;","        color*=clamp(step(0.0,p.y)*step(p.x,-3.0)+step(12.0,sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)))+step(sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)),8.0),0.0,1.0);","        return color;","    }","    float four(vec2 p,vec2 c){","        p-=c;","        p.y+=4.0;","        float color=1.0;","        color*=clamp(step(p.y,-15.0)+step(20.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        color*=clamp(step(p.x,-18.0)+step(8.0,p.x)+step(-3.0,p.y)+step(p.y,-7.0),0.0,1.0);","        p-=vec2(-1.0,19.0);","        p*=rotate2d( sin(PI/5.0) );","        color*=clamp(step(p.y,-28.0)+step(0.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        return color;","    }","    float five(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        p.y+=8.0;","        color*=clamp(step(0.0,p.y)*step(p.x,-7.0)+step(12.0,sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)))+step(sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)),8.0),0.0,1.0);","        color*=clamp(step(p.x,-8.0)+step(11.0,p.x)+step(23.0,p.y)+step(p.y,19.0),0.0,1.0);","        p-=vec2(-7.0,18.0);","        p*=rotate2d( sin(PI/25.0) );","        color*=clamp(step(p.y,-14.0)+step(4.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        return color;","    }","    float six(vec2 p,vec2 c){","        p-=c;","        p.y+=2.0;","        float color=1.0;","        color*=clamp(step(p.y,9.0)*step(-8.0,p.x)+step(19.0,sqrt(pow((p.x)*1.5,2.0)+pow(p.y,2.0)))+step(sqrt(pow((p.x)*1.5,2.0)+pow(p.y,2.0)),14.0),0.0,1.0);","        color*=step(11.0,sqrt(pow((p.x+0.3)/1.05,2.0)+pow(p.y+5.5,2.0)))+step(sqrt(pow((p.x+0.3)/1.05,2.0)+pow(p.y+5.5,2.0)),7.0);","        return color;","    }","    float seven(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        color*=clamp(step(p.x,-16.0)+step(8.0,p.x)+step(14.0,p.y)+step(p.y,10.0),0.0,1.0);","        p-=vec2(7.0,15.0);","        p*=rotate2d( sin(PI/7.0) );","        color*=clamp(step(p.y,-39.0)+step(-2.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        return color;","    }","    float eight(vec2 p,vec2 c){","        p-=c;","        p.y-=6.0;","        float color=1.0;","        color*=clamp(step(10.0,sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)))+step(sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)),6.0),0.0,1.0);","        p.y+=17.0;","        color*=clamp(step(12.0,sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)))+step(sqrt(pow((p.x),2.0)+pow((p.y)*1.1,2.0)),8.0),0.0,1.0);","        return color;","    }","    float nine(vec2 p,vec2 c){","        p-=c;","        p.y+=2.0;","        float color=1.0;","        color*=clamp(step(-9.0,p.y)*step(p.x,8.0)+step(19.0,sqrt(pow((p.x)*1.5,2.0)+pow(p.y,2.0)))+step(sqrt(pow((p.x)*1.5,2.0)+pow(p.y,2.0)),14.0),0.0,1.0);","        color*=step(11.0,sqrt(pow((p.x+0.3)/1.05,2.0)+pow(p.y-5.5,2.0)))+step(sqrt(pow((p.x+0.3)/1.05,2.0)+pow(p.y-5.5,2.0)),7.0);","        return color;","    }","    float period(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        p.y+=17.0;","        color*=step(3.0,length(p));","        return color;","    }","    float clearMark(vec2 p,vec2 c){","        p-=c;","        p.y+=2.0;","        p.x+=2.0;","        float color=1.0;","        color*=clamp(step(p.y,8.0)*step(-8.0,p.y)*step(0.0,p.x)+step(17.0,sqrt(pow((p.x)*1.2,2.0)+pow(p.y,2.0)))+step(sqrt(pow((p.x)*1.2,2.0)+pow(p.y,2.0)),12.0),0.0,1.0);","        return color;","    }","    float cpuMark(vec2 p,vec2 c){","        p-=c;","        p.y+=2.0;","        p.x+=31.0;","        float color=1.0;","        color*=clamp(step(p.y,8.0)*step(-8.0,p.y)*step(0.0,p.x)+step(17.0,sqrt(pow((p.x)*1.2,2.0)+pow(p.y,2.0)))+step(sqrt(pow((p.x)*1.2,2.0)+pow(p.y,2.0)),12.0),0.0,1.0);","        p.x-=26.0;","        color*=clamp(step(p.y,-18.0)+step(17.0,p.y)+step(-1.0,p.x)+step(p.x,-6.0),0.0,1.0);","        p.y-=6.0;","        p.x+=2.0;","        color*=clamp(step(p.x,-3.0)+step(19.0,sqrt(pow(p.x,2.0)+pow(p.y*2.0,2.0)))+step(sqrt(pow(p.x,2.0)+pow(p.y*2.3,2.0)),14.0),0.0,1.0);","        p.y+=1.0;","        p.x-=36.0;","        color*=clamp(step(10.0,p.y)+step(19.0,sqrt(pow((p.x)*1.5,2.0)+pow(p.y/1.2,2.0)))+step(sqrt(pow((p.x)*1.8,2.0)+pow(p.y/1.2,2.0)),15.0),0.0,1.0);","        return color;","    }","    float gpuMark(vec2 p,vec2 c){","        p-=c;","        p.y+=2.0;","        p.x+=31.0;","        float color=1.0;","        color*=clamp(step(p.y,8.0)*step(-2.0,p.y)*step(0.0,p.x)+step(17.0,sqrt(pow((p.x)*1.2,2.0)+pow(p.y,2.0)))+step(sqrt(pow((p.x)*1.2,2.0)+pow(p.y,2.0)),12.0),0.0,1.0);","        color*=clamp(step(p.x,-5.0)+step(14.0,p.x)+step(0.0,p.y)+step(p.y,-4.0),0.0,1.0);","        p.x-=26.0;","        color*=clamp(step(p.y,-18.0)+step(17.0,p.y)+step(-1.0,p.x)+step(p.x,-6.0),0.0,1.0);","        p.y-=6.0;","        p.x+=2.0;","        color*=clamp(step(p.x,-3.0)+step(19.0,sqrt(pow(p.x,2.0)+pow(p.y*2.0,2.0)))+step(sqrt(pow(p.x,2.0)+pow(p.y*2.3,2.0)),14.0),0.0,1.0);","        p.y+=1.0;","        p.x-=36.0;","        color*=clamp(step(10.0,p.y)+step(19.0,sqrt(pow((p.x)*1.5,2.0)+pow(p.y/1.2,2.0)))+step(sqrt(pow((p.x)*1.8,2.0)+pow(p.y/1.2,2.0)),15.0),0.0,1.0);","        return color;","    }","    float equalMark(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        color*=clamp(step(p.x,-20.0)+step(20.0,p.x)+step(12.0,p.y)+step(p.y,8.0),0.0,1.0);","        color*=clamp(step(p.x,-20.0)+step(20.0,p.x)+step(-8.0,p.y)+step(p.y,-12.0),0.0,1.0);","        return color;","    }","    float plusMark(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        color*=clamp(step(p.y,-20.0)+step(20.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        color*=clamp(step(p.x,-20.0)+step(20.0,p.x)+step(2.0,p.y)+step(p.y,-2.0),0.0,1.0);","        return color;","    }","    float minusMark(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        color*=clamp(step(p.x,-20.0)+step(20.0,p.x)+step(2.0,p.y)+step(p.y,-2.0),0.0,1.0);","        return color;","    }","    float multiMark(vec2 p,vec2 c){","        p-=c;","        p*=rotate2d((PI/4.0));","        float color=1.0;","        color*=clamp(step(p.y,-20.0)+step(20.0,p.y)+step(2.0,p.x)+step(p.x,-2.0),0.0,1.0);","        color*=clamp(step(p.x,-20.0)+step(20.0,p.x)+step(2.0,p.y)+step(p.y,-2.0),0.0,1.0);","        return color;","    }","    float divisionMark(vec2 p,vec2 c){","        p-=c;","        float color=1.0;","        color*=clamp(step(p.x,-20.0)+step(20.0,p.x)+step(2.0,p.y)+step(p.y,-2.0),0.0,1.0);","        p.y-=17.0;","        color*=step(3.0,length(p));","        p.y+=34.0;","        color*=step(3.0,length(p));","        return color;","    }","    void main(void){","        vec2 p=gl_FragCoord.xy;","        vec3 color=vec3(224.0/255.0);","        color-=step(floor(resolution.y/5.0)*4.0,p.y)*(10.0/225.0);","        color*=step(p.x,floor(resolution.x/4.0)*3.0);","        color+=step(length(color),0.1)*vec3(255.0,142.0,0.0)/255.0;","        color*=clamp(step(floor(resolution.y/5.0)*4.0,p.y)+step(mod(p.y,floor(resolution.y/5.0)),floor(resolution.y/5.0)-1.0),0.0,1.0);","        color*=clamp(step(p.y,floor(resolution.y/5.0))*step(p.x,floor(resolution.x/4.0))+step(floor(resolution.x/4.0)*3.0,p.x)+step(mod(p.x,floor(resolution.x/4.0)),floor(resolution.x/4.0)-1.0),0.0,1.0);","        color+=step(length(color),0.1)*vec3(142.0)/255.0;","        color*=zero(p,vec2(resolution.x*0.125,resolution.y*0.1));","        color*=one(p,vec2(resolution.x*0.125,resolution.y*0.3));","        color*=two(p,vec2(resolution.x*0.375,resolution.y*0.3));","        color*=three(p,vec2(resolution.x*0.625,resolution.y*0.3));","        color*=four(p,vec2(resolution.x*0.125,resolution.y*0.5));","        color*=five(p,vec2(resolution.x*0.375,resolution.y*0.5));","        color*=six(p,vec2(resolution.x*0.625,resolution.y*0.5));","        color*=seven(p,vec2(resolution.x*0.125,resolution.y*0.7));","        color*=eight(p,vec2(resolution.x*0.375,resolution.y*0.7));","        color*=nine(p,vec2(resolution.x*0.625,resolution.y*0.7));","        color*=period(p,vec2(resolution.x*0.625,resolution.y*0.1));","        color*=clearMark(p,vec2(resolution.x*0.125,resolution.y*0.9));","        color*=float(1-usegpu)*gpuMark(p,vec2(resolution.x*0.375,resolution.y*0.9))+float(usegpu)*cpuMark(p,vec2(resolution.x*0.375,resolution.y*0.9));","        color+=1.0-equalMark(p,vec2(resolution.x*0.875,resolution.y*0.1));","        color+=1.0-plusMark(p,vec2(resolution.x*0.875,resolution.y*0.3));","        color+=1.0-minusMark(p,vec2(resolution.x*0.875,resolution.y*0.5));","        color+=1.0-multiMark(p,vec2(resolution.x*0.875,resolution.y*0.7));","        color+=1.0-divisionMark(p,vec2(resolution.x*0.875,resolution.y*0.9));","        vec2 m=mouse;","        m.y=resolution.y-mouse.y;","        color*=clamp(0.8+(1.0-float(click))+ (m.x <resolution.x/2.0 && m.y<resolution.y/5.0?step(floor(resolution.x/2.0),p.x)+step(floor(resolution.y/5.0),p.y):(step(m.x-mod(m.x,floor(resolution.x/4.0))+floor(resolution.x/4.0),p.x)+step(p.x,m.x-mod(m.x,floor(resolution.x/4.0))))+(step(m.y-mod(m.y,floor(resolution.y/5.0))+floor(resolution.y/5.0),p.y)+step(p.y,m.y-mod(m.y,floor(resolution.y/5.0))))),0.0,1.0);","        outColor=vec4(color,1.0);","    }"].join("\n")}},447:function(e,o,n){var a,l=0,_=n(448),d={hmr:!0};d.insertInto=void 0,"string"==typeof _&&(_=[[e.i,_,""]]),_.locals&&(o.locals=_.locals),o.use=o.ref=function(){return l++||(a=n(59)(_,d)),o},o.unuse=o.unref=function(){l>0&&!--l&&(a(),a=null)}},448:function(e,o,n){(e.exports=n(58)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  font-size: 0; }\n",""])}}]);