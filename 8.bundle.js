(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1047:function(e,t){e.exports=function(){return["#version 300 es","layout(location=0)in vec3 position;","layout(location=1)in vec2 textureCoord;","out vec2 vTextureCoord;","void main(void){","    gl_Position=vec4(position, 1.0);","    vTextureCoord=textureCoord;","}"].join("\n")}},1048:function(e,t){e.exports=function(){return["#version 300 es","    precision highp float;  ","    uniform sampler2D tex;  ","    uniform vec2 resolution;","    uniform float frameCount;","    in vec2 vTextureCoord;","    out vec4 outColor;","    #define PI 3.141592","    const float wallReflectRatio=0.2;    ","    const float floorReflectRatio=0.5;    ","    const float sphereReflectRatio=0.9;","    const float boxReflectRatio=0.3;","    const vec3 backColor=vec3(0.5,0.5,0.9);","    const vec3 backCenter=vec3(0.0,3.0,3.0);","    const vec3 backSize=vec3(6.0,3.0,0.01);","    ","    const vec3 floorCenter=vec3(0.0);","    const vec3 floorSize=vec3(6.0,0.01,3.0);    ","    const vec3 sideColor=vec3(0.5,0.5,0.9);","    const vec3 rightCenter=vec3(6.0,3.0,0.0);","    const vec3 rightSize=vec3(0.01,3.0,3.0);","    const vec3 leftCenter=vec3(-6.0,3.0,0.0);","    const vec3 leftSize=vec3(0.01,3.0,3.0);    ","    const vec3 topColor=vec3(0.5,0.5,0.9);","    const vec3 topCenter=vec3(0.0,6.0,0.0);","    const vec3 topSize=vec3(6.0,0.01,3.0);    ","    const vec3 sphereColor=vec3(0.9,0.1,0.1);","    const vec3 sphereCenter=vec3(-2.0,2.0,1.0);","    const float sphereSize=2.0;    ","    const vec3 boxColor=vec3(0.1,0.9,0.9);","    const vec3 boxCenter=vec3(3.0,1.0,-1.0);","    const vec3 boxSize=vec3(1.0);    ","    const vec3 lightPos=vec3(0.0,3.0,-3.0);","    const vec3 cPos=vec3(0.0,3.5,-5.0);","    const vec3 cDir=vec3(0.0,-0.1,1.0);    ","    float boxDistFunc(vec3 p,vec3 b){","        return length(max(abs(p)-b,0.0))-0.01;","    }            ","    float sphereDistFunc(vec3 p,float s){","        return length(p)-s;","    } ","    float distFunc(vec3 p){                ","        float boxd=boxDistFunc(p-boxCenter,boxSize);","        float backd=boxDistFunc(p-backCenter,backSize);","        float floord=boxDistFunc(p-floorCenter,floorSize);","        float rightd=boxDistFunc(p-rightCenter,rightSize);","        float leftd=boxDistFunc(p-leftCenter,leftSize);","        float topd=boxDistFunc(p-topCenter,topSize);","        float sphere=sphereDistFunc(p-sphereCenter,sphereSize);","        return min(min(min(min(min(min(boxd,backd),floord),rightd),leftd),topd),sphere);","    }","    vec3 genNormal(vec3 p){","        float d=0.001;","        return normalize(vec3(","            distFunc(p+vec3(d,0.0,0.0))-distFunc(p+vec3(-d,0.0,0.0)),","            distFunc(p+vec3(0.0,d,0.0))-distFunc(p+vec3(0.0,-d,0.0)),","            distFunc(p+vec3(0.0,0.0,d))-distFunc(p+vec3(0.0,0.0,-d))","        ));","    }        ","    float random (vec3 p) {","        return fract(sin(dot(p,vec3(12.9898,78.233,135.1241)))* 43758.5453123);","    }","    ","    vec3 random3(vec3 p){","        return fract(vec3(sin(dot(p,vec3(82.9471,67.4192,74.1231)))*48101.3838718,sin(dot(p,vec3(73.1245,93.4719,47.4910)))*86019.1284912,sin(dot(p,vec3(63.1938,48.3951,97.4131)))*84193.192481))*2.0-1.0;","    }","    ","    vec3 getReflectRayColor(inout vec3 ray,inout vec3 origin,float t,inout bool hit){                ","        vec3 color=vec3(1.0);        ","        float distance=0.0;        ","        vec3 rPos=origin;","        float maxDist=20.0;","        for(int i=0;i<100;i++){","            distance=distFunc(rPos);","            if(abs(distance)<0.01){","                vec3 normal=genNormal(rPos);                ","                if(distance==boxDistFunc(rPos-boxCenter,boxSize)){","                    color=boxColor;","                    ray=random(rPos*frameCount)<boxReflectRatio?normalize(reflect(ray,normal)):normalize(random3(rPos*frameCount));","                }else if(distance==boxDistFunc(rPos-backCenter,backSize)){","                    color=backColor;","                    ray=random(rPos*frameCount)<wallReflectRatio?normalize(reflect(ray,normal)):normalize(random3(rPos*frameCount));","                }else if(distance==boxDistFunc(rPos-floorCenter,floorSize)){","                    vec3 floorColor=(mod(rPos.x,1.0)-0.5)*(mod(rPos.z,1.0)-0.5)<0.0?vec3(0.0):vec3(1.0);                                                           ","                    color=floorColor;","                    ray=random(rPos*frameCount)<floorReflectRatio?normalize(reflect(ray,normal)):normalize(random3(rPos*frameCount));                                        ","                }else if(distance==boxDistFunc(rPos-rightCenter,rightSize)){                    ","                    color=sideColor;","                    ray=random(rPos*frameCount)<wallReflectRatio?normalize(reflect(ray,normal)):normalize(random3(rPos*frameCount));                                        ","                }else if(distance==boxDistFunc(rPos-leftCenter,leftSize)){                                        ","                    color=sideColor;","                    ray=random(rPos*frameCount)<wallReflectRatio?normalize(reflect(ray,normal)):normalize(random3(rPos*frameCount));                                        ","                }else if(distance==boxDistFunc(rPos-topCenter,topSize)){                    ","                    color=topColor;","                    ray=random(rPos*frameCount)<wallReflectRatio?normalize(reflect(ray,normal)):normalize(random3(rPos*frameCount));                                        ","                }else if(distance==sphereDistFunc(rPos-sphereCenter,sphereSize)){                    ","                    color=sphereColor;","                    ray=random(rPos*frameCount)<sphereReflectRatio?normalize(reflect(ray,normal)):normalize(random3(rPos*frameCount));                                        ","                }                              ","                origin=rPos+normal*0.011;                ","                hit=true;","                break;","            }            ","            rPos+=distance*ray;","            if(length(rPos-origin)>maxDist){","                hit=false;","                break;","            } ","        }","        return color;","    }","    ","    void main(void){","        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);        ","        vec3 color=vec3(0.0);                ","            vec3 cUp=mat3(1.0,0.0,0.0,","                        0.0,0.0,-1.0,","                        0.0,1.0,0.0)*cDir;","            vec3 cSide=cross(cDir,cUp);","            float depth=1.0;","            vec3 ray=normalize(cSide*p.x+cUp*p.y+cDir*depth);","            float distance=0.0;","            float rLen=0.0;","            vec3 rPos=cPos;                ","            float maxDist=10.0;","            float alpha=0.2;","            bool hit=false;","            for(int i=0;i<7;i++){","                color+=alpha*getReflectRayColor(ray,rPos,frameCount,hit);","                alpha*0.3;","                if(!hit)break;","            }           ","        color=(color+texture(tex,vec2(vTextureCoord.x,-vTextureCoord.y)).rgb*(frameCount-1.0))/frameCount;                ","        outColor=vec4(color,1.0);","    }"].join("\n")}},1049:function(e,t){e.exports=function(){return["#version 300 es","layout(location=0)in vec3 position;","layout(location=1)in vec2 textureCoord;","out vec2 vTextureCoord;","void main(void){","    gl_Position=vec4(position, 1.0);","    vTextureCoord=textureCoord;","}"].join("\n")}},1050:function(e,t){e.exports=function(){return["#version 300 es","precision highp float; ","uniform sampler2D tex; ","in vec2 vTextureCoord;","out vec4 outColor;","    ","void main(void){                 ","    vec3 color=texture(tex,vec2(vTextureCoord.x,-vTextureCoord.y)).rgb;                    ","    outColor=vec4(color,1.0);","}"].join("\n")}},1051:function(e,t,o){var r,n=0,i=o(1052),a={hmr:!0};a.insertInto=void 0,"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return n++||(r=o(61)(i,a)),t},t.unuse=t.unref=function(){n>0&&!--n&&(r(),r=null)}},1052:function(e,t,o){(e.exports=o(60)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#root {\n  font-size: 0; }\n",""])},175:function(e,t,o){"use strict";o.r(t);o(8),o(9),o(10);var r=o(0),n=o.n(r),i=(o(95),o(37),o(93),o(94),o(1047)),a=o.n(i),c=o(1048),u=o.n(c),l=o(1049),f=o.n(l),s=o(1050),v=o.n(s);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function p(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=h(this,b(t).call(this,e))).timeoutId=0,o}var o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,n.a.Component),o=t,(r=[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"updateCanvas",value:function(){var e=this;this.canvas.width=this.props.style.width,this.canvas.height=this.props.style.height,this.gl=this.canvas.getContext("webgl2");var t=function(e,t,o,r,n,i){var a=function(e,o){var r=t.createProgram();return t.attachShader(r,e),t.attachShader(r,o),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)?(t.useProgram(r),r):null},c=function(e,o){var r=t.createShader(o);if(t.shaderSource(r,e),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))return r;alert(t.getShaderInfoLog(r)),console.log(t.getShaderInfoLog(r))},u=function(e){var o=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),o},l=function(e,o,r){e.forEach(function(e,n,i){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(o[n]),t.vertexAttribPointer(o[n],r[n],t.FLOAT,!1,0,0)})},f=function(e,o){var r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r);var n=t.createRenderbuffer();t.bindRenderbuffer(t.RENDERBUFFER,n),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,n);var i=t.createTexture();return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,o,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),{f:r,d:n,t:i}},s=a(c(o,t.VERTEX_SHADER),c(r,t.FRAGMENT_SHADER)),v=a(c(n,t.VERTEX_SHADER),c(i,t.FRAGMENT_SHADER)),d=[];d[0]=t.getUniformLocation(s,"resolution"),d[1]=t.getUniformLocation(s,"tex"),d[2]=t.getUniformLocation(s,"frameCount");var m=[];m[0]=t.getUniformLocation(v,"tex");var p=[0,2,1,1,2,3],h=[],b=[],R=[],E=[],y=u([-1,1,0,1,1,0,-1,-1,0,1,-1,0]);h[0]=t.getAttribLocation(s,"position"),b[0]=3,R[0]=t.getAttribLocation(v,"position"),E[0]=3;var C=u([0,0,1,0,0,1,1,1]);h[1]=t.getAttribLocation(s,"textureCoord"),b[1]=2,R[1]=t.getAttribLocation(v,"textureCoord"),E[1]=2;var F,T,g=(F=p,T=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(F),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),T);t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,g);var x=[];x[0]=f(e.width,e.height),x[1]=f(e.width,e.height);(new Date).getTime();t.clearColor(1,0,0,1);var P=0,_=0;return t.useProgram(s),t.bindFramebuffer(t.FRAMEBUFFER,x[0].f),t.clear(t.COLOR_BUFFER_BIT),t.uniform2fv(d[0],[e.width,e.height]),t.uniform1i(d[1],0),t.uniform1f(d[2],0),l([y,C],h,b),t.drawElements(t.TRIANGLES,p.length,t.UNSIGNED_SHORT,0),t.bindFramebuffer(t.FRAMEBUFFER,null),P++,function(){t.useProgram(s),t.bindFramebuffer(t.FRAMEBUFFER,x[_].f),t.clear(t.COLOR_BUFFER_BIT),t.bindTexture(t.TEXTURE_2D,x[1-_].t),t.uniform2fv(d[0],[e.width,e.height]),t.uniform1i(d[1],0),t.uniform1f(d[2],P),l([y,C],h,b),t.drawElements(t.TRIANGLES,p.length,t.UNSIGNED_SHORT,0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.useProgram(v),t.clear(t.COLOR_BUFFER_BIT),t.bindTexture(t.TEXTURE_2D,x[_].t),t.uniform1i(m[0],0),l([y,C],R,E),t.drawElements(t.TRIANGLES,p.length,t.UNSIGNED_SHORT,0),_=1-_,t.flush(),P++}}(this.canvas,this.gl,a()(),u()(),f()(),v()());!function o(){t(),e.timeoutId=setTimeout(o,500)}()}},{key:"handleResize",value:function(e,t){}},{key:"render",value:function(){var e=this;return n.a.createElement("canvas",m({},this.props,{ref:function(t){e.canvas=t}}))}}])&&p(o.prototype,r),i&&p(o,i),t}(),y=o(1051),C=o.n(y);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.d(t,"default",function(){return _});var _=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=g(this,x(t).call(this,e))).state={width:window.innerWidth,height:window.innerHeight},o}var o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,n.a.Component),o=t,(r=[{key:"componentDidMount",value:function(){C.a.use(),this.tempHandleResize=this.handleResize.bind(this),window.addEventListener("resize",this.tempHandleResize)}},{key:"componentWillUnmount",value:function(){C.a.unuse(),window.removeEventListener("resize",this.tempHandleResize)}},{key:"handleResize",value:function(e){var t=e.target.innerWidth,o=e.target.innerHeight;this.refs.createCanvas.handleResize(t,o),this.setState({width:t,height:o})}},{key:"render",value:function(){return n.a.createElement(E,{ref:"createCanvas",style:{width:this.state.width,height:this.state.height}})}}])&&T(o.prototype,r),i&&T(o,i),t}()}}]);