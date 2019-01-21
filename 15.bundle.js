(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1052:function(e,t){e.exports=function(){return["attribute vec3 position;","void main(void){","    gl_Position = vec4(position, 1.0);","}"].join("\n")}},1053:function(e,t){e.exports=function(){return["precision mediump float;","uniform float time;","uniform vec2 resolution;","#define PI 3.141592","float random1(vec3 p){","    return fract(sin(dot(p.xyz,vec3(12.9898,46.2346,78.233)))*43758.5453123)*2.0-1.0;","}","float random2(vec3 p){","    return fract(sin(dot(p.xyz,vec3(73.6134,21.6712,51.5781)))*51941.3781931)*2.0-1.0;","}","float random3(vec3 p){","    return fract(sin(dot(p.xyz,vec3(39.1831,85.3813,16.2981)))*39183.4971731)*2.0-1.0;","}","float perlinNoise(vec3 p){","    vec3 i1=floor(p);    ","    vec3 i2=i1+vec3(1.0,0.0,0.0);","    vec3 i3=i1+vec3(0.0,1.0,0.0);","    vec3 i4=i1+vec3(1.0,1.0,0.0);","    vec3 i5=i1+vec3(0.0,0.0,1.0);","    vec3 i6=i1+vec3(1.0,0.0,1.0);","    vec3 i7=i1+vec3(0.0,1.0,1.0);","    vec3 i8=i1+vec3(1.0,1.0,1.0);","    vec3 f1=vec3(random1(i1),random2(i1),random3(i1));","    vec3 f2=vec3(random1(i2),random2(i2),random3(i2));","    vec3 f3=vec3(random1(i3),random2(i3),random3(i3));","    vec3 f4=vec3(random1(i4),random2(i4),random3(i4));","    vec3 f5=vec3(random1(i5),random2(i5),random3(i5));","    vec3 f6=vec3(random1(i6),random2(i6),random3(i6));","    vec3 f7=vec3(random1(i7),random2(i7),random3(i7));","    vec3 f8=vec3(random1(i8),random2(i8),random3(i8));","    vec3 k1=p-i1;","    vec3 k2=p-i2;","    vec3 k3=p-i3;","    vec3 k4=p-i4;","    vec3 k5=p-i5;","    vec3 k6=p-i6;","    vec3 k7=p-i7;","    vec3 k8=p-i8;","    vec3 j=fract(p);","    j=j*j*(3.0-2.0*j);","\treturn mix(mix(mix(dot(f1,k1),dot(f2,k2),j.x),mix(dot(f3,k3),dot(f4,k4),j.x),j.y),mix(mix(dot(f5,k5),dot(f6,k6),j.x),mix(dot(f7,k7),dot(f8,k8),j.x),j.y),j.z)*0.88+0.12;","}","float octavePerlinNoise(vec3 p){","float value=0.0;","float maxValue=0.0;","for(float i=0.0;i<5.0;i++){","    value+=pow(0.5,i)*perlinNoise(vec3(p.x*pow(2.0,i),p.y*pow(2.0,i),p.z*pow(2.0,i)));","    maxValue+=pow(0.5,i);","}","return value/maxValue;","}","float dist(vec2 p){","    float a=2.0;","    return sqrt(pow(p.x,a)+pow(p.y,a));","}","void main(void){    ","    vec2 p = 5.0*(gl_FragCoord.xy*2.0 - resolution.xy) / min(resolution.x,resolution.y);   ","    vec3 cDir=normalize(vec3(0.0,0.0,1.0));","    vec3 cUp=normalize(vec3(0.0,1.0,0.0));","    float dipth=1.0;","    vec3 cSide=normalize(cross(cDir,cUp));","    vec3 ray=normalize(cSide*p.x+cUp*p.y+cDir*dipth);     ","    vec3 color=vec3(0.0);","    vec3 c=vec3(0.0,0.0,0.0+time);","    for(float i=0.0;i<5.0;i++){          ","        color+=octavePerlinNoise(c)*vec3(0.8,0.2,0.001)*(50.0/pow(length(p),5.0));","        c+=ray;","    }    ","    gl_FragColor=vec4(color,1.0);","}"].join("\n")}},1054:function(e,t,n){var o,r=0,i=n(1055);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return r++||(o=n(62)(i,{hmr:!0})),t},t.unuse=t.unref=function(){r>0&&!--r&&(o(),o=null)}},1055:function(e,t,n){(e.exports=n(61)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  font-size: 0; }\n",""])},167:function(e,t,n){"use strict";n.r(t);n(8),n(9),n(10);var o=n(0),r=n.n(o),i=(n(94),n(37),n(92),n(93),n(1052)),a=n.n(i),c=n(1053),u=n.n(c);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e,t,n,o){var r=function(e,n){var o=t.createShader(n);if(t.shaderSource(o,e),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS))return o;alert(t.getShaderInfoLog(o)),console.log(t.getShaderInfoLog(o))},i=function(e,n){var o=t.createProgram();return t.attachShader(o,e),t.attachShader(o,n),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?(t.useProgram(o),o):null}(r(n,t.VERTEX_SHADER),r(o,t.FRAGMENT_SHADER)),a=[];a[0]=t.getUniformLocation(i,"time"),a[1]=t.getUniformLocation(i,"resolution");var c,u,f=[0,2,1,1,2,3],l=[],s=[],p=(c=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],u=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array(c),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),u);l[0]=t.getAttribLocation(i,"position"),s[0]=3;var v=function(e){var n=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(e),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),n}(f);t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,v),t.clearColor(1,0,0,1);var d=(new Date).getTime();return function(){var n,o,r=.001*((new Date).getTime()-d);t.clear(t.COLOR_BUFFER_BIT),t.uniform1f(a[0],r),t.uniform2fv(a[1],[e.width,e.height]),n=l,o=s,[p].forEach(function(e,r,i){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(n[r]),t.vertexAttribPointer(n[r],o[r],t.FLOAT,!1,0,0)}),t.drawElements(t.TRIANGLES,f.length,t.UNSIGNED_SHORT,0),t.flush()}},h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,v(t).call(this,e))).requestId=0,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestId)}},{key:"updateCanvas",value:function(){var e=this;this.canvas.width=this.props.style.width,this.canvas.height=this.props.style.height,this.gl=this.canvas.getContext("webgl");var t=m(this.canvas,this.gl,a()(),u()());!function n(){t(),e.requestId=requestAnimationFrame(n)}()}},{key:"handleResize",value:function(e,t){this.canvas.width=e,this.canvas.height=t,this.gl.viewport(0,0,e,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("canvas",l({},this.props,{ref:function(t){e.canvas=t}}))}}])&&s(n.prototype,o),i&&s(n,i),t}(),y=n(1054),b=n.n(y);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return A});var A=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=R(this,E(t).call(this,e))).state={width:window.innerWidth,height:window.innerHeight},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){b.a.use(),this.tempHandleResize=this.handleResize.bind(this),window.addEventListener("resize",this.tempHandleResize)}},{key:"componentWillUnmount",value:function(){b.a.unuse(),window.removeEventListener("resize",this.tempHandleResize)}},{key:"handleResize",value:function(e){var t=e.target.innerWidth,n=e.target.innerHeight;this.refs.createCanvas.handleResize(t,n),this.setState({width:t,height:n})}},{key:"render",value:function(){return r.a.createElement(h,{ref:"createCanvas",style:{width:this.state.width,height:this.state.height}})}}])&&w(n.prototype,o),i&&w(n,i),t}()}}]);