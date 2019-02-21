(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1057:function(e,n){e.exports=function(){return["attribute vec3 position;","void main(void){","    gl_Position = vec4(position, 1.0);","}"].join("\n")}},1058:function(e,n){e.exports=function(){return["precision mediump float;","uniform float iTime;","uniform vec2 iResolution;","#define PI 3.141592","float random(vec2 p){","  return fract(sin(dot(p.xy,vec2(12.9898,78.233)))*43758.5453123)*2.-1.;","}","float boxDistFunc(vec3 p,vec3 b,vec3 c){","  return length(max(abs(p-c)-b,0.));","}","float distFunc(vec3 p){","  vec3 q=p;","  q.xz=mod(p.xz,1.)-.5;","  return boxDistFunc(q,vec3(.4,2.*sin(1.3*iTime*abs(random(floor(p.xz))))*abs(random(floor(p.xz))),.4),vec3(0.,0.,0.));","}","vec3 getNormal(vec3 p){","  float d=.001;","  return normalize(vec3(","      distFunc(p+vec3(d,0.,0.))-distFunc(p+vec3(-d,0.,0.)),","      distFunc(p+vec3(0.,d,0.))-distFunc(p+vec3(0.,-d,0.)),","      distFunc(p+vec3(0.,0.,d))-distFunc(p+vec3(0.,0.,-d))","    ));","  }","  vec3 getRayColor(float signX,vec3 color,inout vec3 ray,inout vec3 origin){","    float distance=0.;","    float rLen=0.;","    vec3 rPos=origin;","    float marchCount=0.;","    for(int i=0;i<100;i++){","      distance=distFunc(rPos);","      if(abs(distance)<.01){","        color=vec3(.3,.3,.7);","        color+=marchCount/100./pow(rLen,2.);","        vec3 normal=getNormal(rPos);","        origin=rPos+normal*.02;","        ray=normalize(reflect(ray,normal));","        break;","      }","      rLen+=signX<0.?distance:min(min((step(0.,ray.x)-fract(rPos.x))/ray.x,(step(0.,ray.z)-fract(rPos.z))/ray.z)+.01,distance);","      rPos=origin+rLen*ray;","      marchCount++;","    }","    return color;","  }","  void mainImage(out vec4 fragColor,in vec2 fragCoord){","    vec2 p=(fragCoord*2.-iResolution.xy)/min(iResolution.x,iResolution.y);","    float signX=sign(p.x);","    vec2 pMax=iResolution.xy/min(iResolution.x,iResolution.y);","    p.x=p.x/pMax.x+step(p.x/pMax.x,0.);","    vec3 cPos=vec3(5.*sin(iTime/2.),1.5,5.*cos(iTime/2.));","    vec3 cDir=vec3(-cPos.x,0.,-cPos.z);","    vec3 cUp=vec3(0.,1.,0.);","    vec3 cSide=-cross(cDir,cUp);","    float depth=1.;","    vec3 ray=normalize(cSide*p.x+cUp*p.y+cDir*depth);","    vec3 color=vec3(0.);","    float alpha=.7;","    for(int i=0;i<3;i++){","      color+=alpha*getRayColor(signX,color,ray,cPos);","      alpha*=.6;","    }","    fragColor=vec4(color,1.);","  }"].join("\n")}},1059:function(e,n,t){var r,o=0,i=t(1060),a={hmr:!0};a.insertInto=void 0,"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(n.locals=i.locals),n.use=n.ref=function(){return o++||(r=t(61)(i,a)),n},n.unuse=n.unref=function(){o>0&&!--o&&(r(),r=null)}},1060:function(e,n,t){(e.exports=t(60)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0; }\n\n#root {\n  font-size: 0; }\n",""])},161:function(e,n,t){"use strict";t.r(n);t(8),t(9),t(10);var r,o=t(0),i=t.n(o),a=(t(93),t(94),t(16)),c=t(1057),u=t.n(c),l=t(1058),s=t.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b,h,m,g,w,R,x,S,E=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],O=[0,2,1,1,2,3],_="\nvoid main( void ){\n  vec4 color = vec4(0.0,0.0,0.0,1.0);\n  mainImage( color, gl_FragCoord.xy );\n  color.w = 1.0;\n  gl_FragColor = color;\n}",P=function(e,n,t){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;alert(e.getShaderInfoLog(r)),console.log(e.getShaderInfoLog(r))},C=function(e,n,t,r){var o=t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object");o||alert("vertex array object not supported");var i=function(e,n,t,r){var o=function(e,n,t){var r=e.createProgram();return e.attachShader(r,n),e.attachShader(r,t),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?(e.useProgram(r),r):null}(e,P(e,t,e.VERTEX_SHADER),P(e,r,e.FRAGMENT_SHADER)),i=[];i[0]=e.getUniformLocation(o,"iTime"),i[1]=e.getUniformLocation(o,"iResolution");var a=e.getAttribLocation(o,"position"),c=n.createVertexArrayOES();return n.bindVertexArrayOES(c),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array(E),e.STATIC_DRAW),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Int16Array(O),e.STATIC_DRAW),n.bindVertexArrayOES(null),{mainPrg:o,mainUniLocation:i,mainVao:c}}(t,o,e,r),a=i.mainPrg,c=i.mainUniLocation,u=i.mainVao;t.clearColor(0,0,0,1);var l=(new Date).getTime();return{render:function(){t.clear(t.COLOR_BUFFER_BIT);var e=.001*((new Date).getTime()-l);t.useProgram(a),o.bindVertexArrayOES(u),t.uniform1f(c[0],e),t.uniform2fv(c[1],[n.width,n.height]),t.drawElements(t.TRIANGLES,O.length,t.UNSIGNED_SHORT,0),t.flush()}}},z=Object(a.b)(function(e){var n=e.state;return{windowWidth:n.windowWidth,windowHeight:n.windowHeight,updateWindowSize:n.updateWindowSize,renderCanvas:n.renderCanvas,renderGl:n.renderGl,updateRenderCanvas:n.updateRenderCanvas,updateRenderGl:n.updateRenderGl}})(r=Object(a.c)(r=function(e){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=d(this,(e=v(n)).call.apply(e,[this].concat(o)))).handleResize=function(e){var n=e.target.innerWidth,r=e.target.innerHeight;t.props.updateWindowSize(n,r)},t.updateGl=function(e,n){var r=C(u()(),e,n,s()()+_).render;!function e(){r(),t.requestId=requestAnimationFrame(e)}()},t}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,i.a.Component),t=n,(r=[{key:"componentDidMount",value:function(){var e=this.renderCanvas;e.width=this.props.windowWidth,e.height=this.props.windowHeight;var n=e.getContext("webgl");this.props.updateRenderCanvas(e),this.props.updateRenderGl(n),this.updateGl(e,n),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestId),window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this;return i.a.createElement("canvas",{style:{width:this.props.windowWidth,height:this.props.windowHeight},ref:function(n){e.renderCanvas=n}})}}])&&p(t.prototype,r),o&&p(t,o),n}())||r)||r,A=t(1059),j=t.n(A),T=(t(38),t(97),t(37),t(2));function F(e,n,t,r){t&&Object.defineProperty(e,n,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})}function L(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,n,t,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=t.slice().reverse().reduce(function(t,r){return r(e,n,t)||t},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,n,i),i=null),i}var D=(b=T.d.bound,h=T.d.bound,m=T.d.bound,w=W((g=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"windowWidth",w,this),F(this,"windowHeight",R,this),F(this,"renderCanvas",x,this),F(this,"renderGl",S,this)}var n,t,r;return n=e,(t=[{key:"updateWindowSize",value:function(e,n){this.windowWidth=e,this.renderCanvas.width=e,this.windowHeight=n,this.renderCanvas.height=n,this.renderGl.viewport(0,0,e,n)}},{key:"updateRenderCanvas",value:function(e){this.renderCanvas=e}},{key:"updateRenderGl",value:function(e){this.renderGl=e}}])&&L(n.prototype,t),r&&L(n,r),e}()).prototype,"windowWidth",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.innerWidth}}),R=W(g.prototype,"windowHeight",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.innerHeight}}),W(g.prototype,"updateWindowSize",[b],Object.getOwnPropertyDescriptor(g.prototype,"updateWindowSize"),g.prototype),x=W(g.prototype,"renderCanvas",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W(g.prototype,"updateRenderCanvas",[h],Object.getOwnPropertyDescriptor(g.prototype,"updateRenderCanvas"),g.prototype),S=W(g.prototype,"renderGl",[T.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W(g.prototype,"updateRenderGl",[m],Object.getOwnPropertyDescriptor(g.prototype,"updateRenderGl"),g.prototype),g);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,n){return(H=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return M});var B={state:new D},M=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),I(this,U(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&H(e,n)}(n,i.a.Component),t=n,(r=[{key:"componentDidMount",value:function(){j.a.use()}},{key:"componentWillUnmount",value:function(){j.a.unuse()}},{key:"render",value:function(){return i.a.createElement(a.a,B,i.a.createElement(i.a.Fragment,null,i.a.createElement(z,null)))}}])&&G(t.prototype,r),o&&G(t,o),n}()}}]);