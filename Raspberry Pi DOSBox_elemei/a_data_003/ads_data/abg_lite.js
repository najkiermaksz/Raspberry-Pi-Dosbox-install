(function(){var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;function ja(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ca=b.prototype}var l=this;function m(a){return"string"==typeof a}var ka=/^[\w+/_-]+[=]{0,2}$/,la=null;function ma(){}function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function na(a){return"function"==q(a)}function oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function pa(a,b,c){return a.call.apply(a.bind,arguments)}function qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=pa:t=qa;return t.apply(null,arguments)}var ra=Date.now||function(){return+new Date};function sa(a,b){function c(){}c.prototype=b.prototype;a.ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.da=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function ta(){this.g=null;this.h=[];ua(this)}ta.prototype.height=function(){return this.j};ta.prototype.width=function(){return this.l};function va(a){null===a.g&&(a.g=new wa);return a.g}function ua(a){a.j=0;a.l=0;a.g=null;a.h.length=0}function xa(){}function ya(a){for(var b in a);}function za(){this.g="";this.h=this.l=this.j=null}za.prototype.text=function(){return this.g};function Aa(){this.g=[];this.g.length=0}function Ba(){this.g="";this.h=null}Ba.prototype.text=function(){return this.g};function Ca(){this.m=[];this.g=null;this.w=!1;this.j="";this.u=!1;this.h=this.l="";this.o=!1;this.v=null;this.m.length=0;this.g=null}Ca.prototype.is_mutable_impression=function(){return this.w};function Da(){}function wa(){this.g=null}function Ea(a){null===a.g&&(a.g=new Ca);return a.g}function Fa(){this.h=this.g=""}Fa.prototype.name=function(){return this.g};Fa.prototype.value=function(){return this.h};function y(a){if(Error.captureStackTrace)Error.captureStackTrace(this,y);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}sa(y,Error);y.prototype.name="CustomError";var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var A;a:{var Ia=l.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){A=Ja;break a}}A=""};function Ka(a){Ka[" "](a);return a}Ka[" "]=ma;var Ma=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE");function Na(){}var Oa="function"==typeof Uint8Array;function Pa(a,b,c){a.h=null;b||(b=[]);a.u=void 0;a.l=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(null!==d&&"object"==typeof d&&"array"!=q(d)&&!(Oa&&d instanceof Uint8Array)){a.m=b-a.l;a.j=d;break a}}a.m=Number.MAX_VALUE}a.o={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.m)d+=a.l,a.g[d]=a.g[d]||Qa;else{var e=a.m+a.l;a.g[e]||(a.j=a.g[e]={});a.j[d]=a.j[d]||Qa}}var Qa=[];function C(a,b){if(b<a.m){b+=a.l;var c=a.g[b];return c===Qa?a.g[b]=[]:c}if(a.j)return c=a.j[b],c===Qa?a.j[b]=[]:c}function F(a,b,c){a=C(a,b);return null==a?c:a}function Ra(a){var b=Sa;a.h||(a.h={});if(!a.h[1]){var c=C(a,1);c&&(a.h[1]=new b(c))}return a.h[1]}function Ta(a){if(a.h)for(var b in a.h){var c=a.h[b];if("array"==q(c))for(var d=0;d<c.length;d++)c[d]&&Ta(c[d]);else c&&Ta(c)}}Na.prototype.toString=function(){Ta(this);return this.g.toString()};function Ua(a){Pa(this,a,Va)}sa(Ua,Na);function Sa(a){Pa(this,a,Wa)}sa(Sa,Na);var Va=[21],Wa=[28];function Xa(){this.g="";this.h=Ya}var Ya={};function G(a){var b=document;return m(a)?b.getElementById(a):a}function Za(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):$a(b,a)[0]||null);return a||null}function $a(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=Ga(g.split(/\s+/),b);h&&(f[d++]=a)}f.length=d;return f}return e}function ab(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function bb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ka(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function cb(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function H(a){a.preventDefault?a.preventDefault():a.returnValue=!1};var db=/^true$/.test("false"),eb=/^true$/.test("true");var fb=document,I=window;function J(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function gb(a,b){a.removeEventListener&&a.removeEventListener("message",b,!1)};function hb(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};function ib(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var jb=!!window.google_async_iframe_id,K=jb&&window.parent||window;function kb(a){try{var b=I;a=a||I;for(var c=0;20>c;c++){if(b==a)return!0;if(b==a.top)break;b=b.parent}}catch(d){}return!1}function L(a,b){a&&ib(b,function(b,d){a.style[d]=b})};function lb(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var mb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function nb(a,b){this.g=a;this.h=b}function ob(a,b){this.url=a;this.O=!!b;this.depth=null};function pb(){this.j="&";this.l=!1;this.h={};this.m=0;this.g=[]}function qb(a,b){var c={};c[a]=b;return[c]}function rb(a,b,c,d,e){var f=[];cb(a,function(a,h){(a=sb(a,b,c,d,e))&&f.push(h+"="+a)});return f.join(b)}function sb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(sb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(rb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function N(a,b,c,d){a.g.push(b);a.h[b]=qb(c,d)}function tb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=ub(a)-c.length;if(0>d)return"";a.g.sort(function(a,b){return a-b});c=null;for(var e="",f=0;f<a.g.length;f++)for(var g=a.g[f],h=a.h[g],n=0;n<h.length;n++){if(!d){c=null==c?g:c;break}var k=rb(h[n],a.j,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;b+=k;e=a.j;break}else a.l&&(e=d,k[e-1]==a.j&&--e,b+=k.substr(0,e),e=a.j,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a}function ub(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.j.length-1};function vb(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof pb)var e=c;else e=new pb,cb(c,function(a,b){var c=e,d=c.m++;a=qb(b,a);c.g.push(d);c.h[d]=a});var f=tb(e,a.g,"/pagead/gen_204?id="+b+"&");f&&hb(l,f)}catch(g){}};var wb=null;function xb(){var a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ra()}function yb(){var a=void 0===a?l:a;return(a=a.performance)&&a.now?a.now():null};function zb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};var O=l.performance,Ab=!!(O&&O.mark&&O.measure&&O.clearMarks),P=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Ab){var b;if(null===wb){wb="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(wb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=wb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Bb(){var a=Cb;this.h=[];this.j=a||l;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=P()||(null!=b?b:1>Math.random())}function Db(a){a&&O&&P()&&(O.clearMarks("goog_"+a.uniqueId+"_start"),O.clearMarks("goog_"+a.uniqueId+"_end"))}Bb.prototype.start=function(a,b){if(!this.g)return null;var c=yb()||xb();a=new zb(a,b,c);b="goog_"+a.uniqueId+"_start";O&&P()&&O.mark(b);return a};function Eb(){var a=Fb;this.j=Gb;this.l=this.h;this.g=void 0===a?null:a}function Ib(a,b,c,d){try{if(a.g&&a.g.g){var e=a.g.start(b.toString(),3);var f=c();var g=a.g;c=e;if(g.g&&"number"==typeof c.value){var h=yb()||xb();c.duration=h-c.value;var n="goog_"+c.uniqueId+"_end";O&&P()&&O.mark(n);g.g&&g.h.push(c)}}else f=c()}catch(k){g=!0;try{Db(e),g=(d||a.l).call(a,b,new Jb(Kb(k),k.fileName,k.lineNumber),void 0,void 0)}catch(p){a.h(217,p)}if(!g)throw k;}return f}function Lb(a,b){var c=Mb;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return Ib(c,a,function(){return b.apply(void 0,e)},void 0)}}Eb.prototype.h=function(a,b,c,d,e){e=e||"jserror";try{var f=new pb;f.l=!0;N(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Jb(Kb(b),b.fileName,b.lineNumber));b.msg&&N(f,2,"msg",b.msg.substring(0,512));b.file&&N(f,3,"file",b.file);0<b.line&&N(f,4,"line",b.line);var g=b.meta||{};if(d)try{d(g)}catch(D){}b=[g];f.g.push(5);f.h[5]=b;d=l;b=[];g=null;do{var h=d;if(bb(h)){var n=h.location.href;g=h.document&&h.document.referrer||null}else n=g,g=null;b.push(new ob(n||""));try{d=h.parent}catch(D){d=null}}while(d&&h!=d);n=0;for(var k=b.length-1;n<=k;++n)b[n].depth=k-n;h=l;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(k=1;k<b.length;++k){var p=b[k];p.url||(p.url=h.location.ancestorOrigins[k-1]||"",p.O=!0)}var u=new ob(l.location.href,!1);h=null;var v=b.length-1;for(p=v;0<=p;--p){var r=b[p];!h&&mb.test(r.url)&&(h=r);if(r.url&&!r.O){u=r;break}}r=null;var B=b.length&&b[v].url;0!=u.depth&&B&&(r=b[v]);var x=new nb(u,r);x.h&&N(f,6,"top",x.h.url||"");N(f,7,"url",x.g.url||"");vb(this.j,e,f,c)}catch(D){try{vb(this.j,e,{context:"ecmserr",rctx:a,msg:Kb(D),url:x&&x.g.url},c)}catch(E){}}return!0};function Kb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}function Jb(a,b,c){lb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})}ja(Jb,lb);var Gb,Mb;if(jb&&!bb(K)){var Nb="."+fb.domain;try{for(;2<Nb.split(".").length&&!bb(K);)fb.domain=Nb=Nb.substr(Nb.indexOf(".")+1),K=window.parent}catch(a){}bb(K)||(K=window)}var Cb=K,Fb=new Bb;function Ob(){if(!Cb.google_measure_js_timing){var a=Fb;a.g=!1;a.h!=a.j.google_js_reporting_queue&&(P()&&Ha(a.h,Db),a.h.length=0)}}Gb=new function(){var a=void 0===a?I:a;this.g="http:"===a.location.protocol?"http:":"https:"};Mb=new Eb;"complete"==Cb.document.readyState?Ob():Fb.g&&J(Cb,"load",function(){Ob()});function Q(a,b){return Lb(a,b)}var Pb=Mb.h;function Qb(a,b,c,d){this.xOffset=a;this.yOffset=b;this.height=d;this.width=c;this.g=null}function Rb(){this.referenceFrameArray=[]}function Sb(a){return{referenceFrameArray:a.referenceFrameArray.map(function(a){return{xOffset:a.xOffset,yOffset:a.yOffset,height:a.height,width:a.width}})}}function Tb(a){var b=void 0===b?new Rb:b;for(var c=0,d=0,e=0;20>e;++e){var f=a.document.body;var g=f.parentElement;var h=a===l.top?f.scrollHeight||g.scrollHeight:a.innerHeight;g=a===l.top?f.scrollWidth||g.scrollWidth:a.innerWidth;f=b;c=new Qb(c,d,g,h);c.g=f;f.referenceFrameArray.push(c);if(!(c=!a.frameElement)){c=!1;try{a.parent.document.body&&(c=!1)}catch(n){c=!0}}if(c)break;else d=a.frameElement.getBoundingClientRect(),c=d.left+a.parent.pageXOffset,d=d.top+a.parent.pageYOffset,a=a.parent}return b};function Ub(a){if(!a)throw Error("bad ufdj");this.j=a;a=this.g=new ta;var b=this.j;ua(a);for(var c in b){var d=b[c],e=c.toLowerCase();"height"==e&&(a.j=d);"width"==e&&(a.l=d);if("attribution"==e){var f=void 0,g=va(a),h=d;for(f in h){var n=h[f];if("user_feedback_data"==f.toLowerCase()){var k=void 0,p=Ea(g);for(k in n){var u=n[k],v=k.toLowerCase();"is_mutable_impression"==v&&(p.w=u);"conversion_url"==v&&(p.j=u,p.u=!0);"encoded_cookie"==v&&(p.l=u);"close_button_token"==v&&(p.h=u,p.o=!0);if("interaction_conversion"==v){var r=p;null===r.v&&(r.v=new xa);ya(u)}if("feedback_options"==v)for(r=0;r<u.length;++r){var B=new za;p.m.push(B);var x=void 0,D=u[r];for(x in D){var E=D[x],z=x.toLowerCase();"text"==z&&(B.g=E);if("conversion"==z){var w=B;null===w.j&&(w.j=new xa);ya(E)}"undo_conversion"==z&&(w=B,null===w.l&&(w.l=new xa),ya(E));if("survey"==z)for(z in w=B,null===w.h&&(w.h=new Aa),z=void 0,w=w.h,E){var aa=E[z];if("options"==z.toLowerCase())for(var S=0;S<aa.length;++S){var T=new Ba;w.g.push(T);var M=void 0,La=aa[S];for(M in La){var Hb=La[M],ba=M.toLowerCase();"text"==ba&&(T.g=Hb);"conversion"==ba&&(ba=T,null===ba.h&&(ba.h=new xa),ya(Hb))}}}}}"mute_panel_data"==v&&null===p.g&&(p.g=new Da)}}}}if("flags"==e)for(e=0;e<d.length;++e)for(f in g=new Fa,a.h.push(g),f=void 0,h=d[e],h)k=h[f],p=f.toLowerCase(),"name"==p&&(g.g=k),"value"==p&&(g.h=k)}this.h=Ea(va(this.g))}function Vb(a,b){this.m=a;this.o=b;this.h=!!this.o;this.l=this.o;this.j=(this.g=!!this.m&&null!=C(this.m,1))?Ra(this.m):null}Vb.prototype.is_mutable_impression=function(){return this.g?F(this.j,33,!1):this.h?this.l.is_mutable_impression():!1};function Wb(a){return a.g?F(a.j,5,""):a.h?a.l.j:""}function Xb(a){return a.g?null!=C(a.j,5):a.h?a.l.u:!1}function Yb(a){return a.g?F(a.j,19,""):a.h?a.l.l:""}function Zb(a){return a.g?F(a.j,6,""):a.h?a.l.h:""}function $b(a){return a.g?null!=C(a.j,6):a.h?a.l.o:!1};function ac(a,b){a.classList?b=a.classList.contains(b):(a.classList?a=a.classList:(a=a.className,a=m(a)&&a.match(/\S+/g)||[]),b=0<=Ga(a,b));return b}function R(a,b){a.classList?a.classList.add(b):ac(a,b)||(a.className+=0<a.className.length?" "+b:b)};function bc(a,b,c,d,e,f,g,h,n,k,p,u,v,r,B,x,D,E,z,w,aa,S,T){if(this.g=(this.serializedAttributionData=a)?new Ua(a):null)F(this.g,2,!1),c=F(this.g,30,""),null!=C(this.g,1)&&(b=F(Ra(this.g),33,!1)),d=F(this.g,4,!1),F(this.g,5,!1),e=F(this.g,6,!1),g=F(this.g,8,0),f=1<F(this.g,8,0)?F(this.g,7,0).toString():"",n=F(this.g,9,!1),k=F(this.g,10,!1),p=F(this.g,11,!1),u=F(this.g,12,!1),v=F(this.g,13,!1),r=F(this.g,14,!1),B=F(this.g,15,!1),x=F(this.g,17,!1),D=F(this.g,18,!1),E=F(this.g,19,!1),z=F(this.g,24,!1),w=F(this.g,25,!1),F(this.g,26,!1),aa=F(this.g,27,!1),S=F(this.g,28,!1),T=F(this.g,29,!1);this.isMutableImpression=!!b;this.U=c||"";this.ba=!!p;this.userFeedbackDataJson=h||null;this.hasJspbUserFeedbackData=!!this.g&&null!=C(this.g,1);this.hasLegacyUserFeedbackData=!!this.userFeedbackDataJson;this.hasUserFeedbackData=this.hasJspbUserFeedbackData||this.hasLegacyUserFeedbackData;a=this.userFeedbackDataJson;this.m=this.hasJspbUserFeedbackData?new Vb(this.g,null):this.hasLegacyUserFeedbackData?new Vb(null,(new Ub(a)).h):null;this.T=!!d;this.X=!!e;this.H=!!v;this.Y=g||1;this.creativeIndexSuffix=1<this.Y?f.toString():"";this.P=!!x;this.aa=!!D;this.S=!!r;this.I=!!B;this.Z=!0===n;this.openAttributionInline=!0===k;this.isMobileDevice=!!u;this.M=null;try{var M=fb.querySelector("[data-slide]")}catch(La){M=null}this.W=M?"true"===M.getAttribute("data-slide"):!1;(this.K=""!==this.creativeIndexSuffix)&&void 0===I.goog_multislot_cache&&(I.goog_multislot_cache={});this.K&&!this.W?(d=I.goog_multislot_cache.hd,void 0===d&&(d=!1,(e=fb.querySelector("[data-dim]"))?(e=e.getBoundingClientRect(),150<=e.right-e.left&&150<=e.bottom-e.top?d=!1:(f=document.body.getBoundingClientRect(),150>(1>=Math.abs(f.left-e.left)&&1>=Math.abs(f.right-e.right)?e.bottom-e.top:e.right-e.left)&&(d=!0))):d=!1,window.goog_multislot_cache.hd=d)):d=!1;this.J=d;this.A=G("abgcp"+this.creativeIndexSuffix);this.D=G("abgc"+this.creativeIndexSuffix);this.h=G("abgs"+this.creativeIndexSuffix);this.C=G("abgl"+this.creativeIndexSuffix);this.v=G("abgb"+this.creativeIndexSuffix);this.G=G("abgac"+this.creativeIndexSuffix);G("mute_panel"+this.creativeIndexSuffix);this.F=Za("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.F&&!!this.S&&!Za("goog_delegate_disabled")&&!this.I;if(this.h)a:for(d=this.h,e="A",f=d.childNodes,g=0;g<f.length;g++){if(n=f.item(g),"undefined"!=typeof n.tagName&&n.tagName.toUpperCase()==e){d=n;break a}}else d=null;this.l=d;this.$="left"==this.U;this.o=this.isDelegateAttributionActive?this.F:G("cbb"+this.creativeIndexSuffix);this.V=this.J?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.o&&ac(this.o,"goog_dismissable_menu");this.u=null;this.L=0;this.j=this.isDelegateAttributionActive?this.F:this.X&&this.A?this.A:this.D;this.B=null;this.w=I;this.R=!!E;this.adbadgeEnabled=!!z;this.enableNativeSurveyLoadIndicator=!!w;this.enableAltNativeJakeUi=(this.enableNativeJakeUi=!!aa)&&!!S;this.isPoliticalAd=!!T};function cc(a,b){this.j=a;this.l=b;this.h=0;this.g=null}cc.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};function dc(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};function ec(a){l.setTimeout(function(){throw a;},0)}var fc;function gc(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==A.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==A.indexOf("Trident")&&-1==A.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.N;c.N=null;a()}};return function(a){d.next={N:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};function hc(){this.h=this.g=null}var jc=new cc(function(){return new ic},function(a){a.reset()});hc.prototype.add=function(a,b){var c=jc.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};function kc(){var a=lc,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}function ic(){this.next=this.h=this.g=null}ic.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};ic.prototype.reset=function(){this.next=this.h=this.g=null};function mc(a,b){nc||oc();pc||(nc(),pc=!0);lc.add(a,b)}var nc;function oc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);nc=function(){a.then(qc)}}else nc=function(){var a=qc,c;!(c=!na(l.setImmediate))&&(c=l.Window&&l.Window.prototype)&&(c=-1==A.indexOf("Edge")&&l.Window.prototype.setImmediate==l.setImmediate);c?(fc||(fc=gc()),fc(a)):l.setImmediate(a)}}var pc=!1,lc=new hc;function qc(){for(var a;a=kc();){try{a.g.call(a.h)}catch(b){ec(b)}dc(jc,a)}pc=!1};function U(a){this.g=0;this.u=void 0;this.l=this.h=this.j=null;this.m=this.o=!1;if(a!=ma)try{var b=this;a.call(void 0,function(a){V(b,2,a)},function(a){V(b,3,a)})}catch(c){V(this,3,c)}}function rc(){this.next=this.context=this.h=this.j=this.g=null;this.l=!1}rc.prototype.reset=function(){this.context=this.h=this.j=this.g=null;this.l=!1};var sc=new cc(function(){return new rc},function(a){a.reset()});function tc(a,b,c){var d=sc.get();d.j=a;d.h=b;d.context=c;return d}function uc(){var a,b=new U(function(b){a=b});return new vc(b,a)}U.prototype.then=function(a,b,c){return wc(this,na(a)?a:null,na(b)?b:null,c)};U.prototype.$goog_Thenable=!0;U.prototype.cancel=function(a){0==this.g&&mc(function(){var b=new xc(a);yc(this,b)},this)};function yc(a,b){if(0==a.g)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?yc(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):zc(c),Ac(c,e,3,b)))}a.j=null}else V(a,3,b)}function Bc(a,b){a.h||2!=a.g&&3!=a.g||Cc(a);a.l?a.l.next=b:a.h=b;a.l=b}function wc(a,b,c,d){var e=tc(null,null,null);e.g=new U(function(a,g){e.j=b?function(c){try{var e=b.call(d,c);a(e)}catch(k){g(k)}}:a;e.h=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof xc?g(b):a(e)}catch(k){g(k)}}:g});e.g.j=a;Bc(a,e);return e.g}U.prototype.w=function(a){this.g=0;V(this,2,a)};U.prototype.A=function(a){this.g=0;V(this,3,a)};function V(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof U){Bc(d,tc(e||ma,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(oa(d))try{var n=d.then;if(na(n)){Dc(d,n,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.j=null,Cc(a),3!=b||c instanceof xc||Ec(a,c))}}function Dc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}function g(a){h||(h=!0,c.call(e,a))}var h=!1;try{b.call(a,g,f)}catch(n){f(n)}}function Cc(a){a.o||(a.o=!0,mc(a.v,a))}function zc(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}U.prototype.v=function(){for(var a;a=zc(this);)Ac(this,a,this.g,this.u);this.o=!1};function Ac(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.g)b.g.j=null,Fc(b,c,d);else try{b.l?b.j.call(b.context):Fc(b,c,d)}catch(e){Gc.call(null,e)}dc(sc,b)}function Fc(a,b,c){2==b?a.j.call(a.context,c):a.h&&a.h.call(a.context,c)}function Ec(a,b){a.m=!0;mc(function(){a.m&&Gc.call(null,b)})}var Gc=ec;function xc(a){y.call(this,a)}sa(xc,y);xc.prototype.name="cancel";function vc(a,b){this.h=a;this.g=b};function W(){this.h=this.h;this.w=this.w}W.prototype.h=!1;W.prototype.g=function(){if(this.w)for(;this.w.length;)this.w.shift()()};function Hc(a){var b=[];Ic(new Jc,a,b);return b.join("")}function Jc(){}function Ic(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==q(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ic(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Kc(d,c),c.push(":"),Ic(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Kc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Lc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Mc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Kc(a,b){b.push('"',a.replace(Mc,function(a){var b=Lc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Lc[a]=b);return b}),'"')};function X(a,b,c,d,e,f){W.call(this);this.o=a;this.status=1;this.j=b;this.m=c;this.I=d;this.G=!!e;this.v=Math.random();this.B={};this.u=null;this.A=t(this.H,this);this.F=f}ja(X,W);X.prototype.H=function(a){if(a.origin===this.m&&(this.G||a.source==this.j)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(oa(b)&&(a=b.i,b.c===this.o&&a!=this.v)){if(2!==this.status)try{this.status=2,Nc(this),this.u&&(this.u(),this.u=null)}catch(c){}a=b.s;b=b.p;if(m(a)&&(m(b)||oa(b))&&this.B.hasOwnProperty(a))this.B[a](b)}}};function Nc(a){var b={};b.c=a.o;b.i=a.v;a.F&&(b.e=a.F);a.j.postMessage(Hc(b),a.m)}X.prototype.D=function(){if(1===this.status){try{this.j.postMessage&&Nc(this)}catch(a){}window.setTimeout(t(this.D,this),50)}};X.prototype.connect=function(a){a&&(this.u=a);J(window,"message",this.A);this.I&&this.D()};function Oc(a,b,c){a.B[b]=c}X.prototype.l=function(a,b){var c={};c.c=this.o;c.i=this.v;c.s=a;c.p=b;try{this.j.postMessage(Hc(c),this.m)}catch(d){}};X.prototype.g=function(){this.status=3;gb(window,this.A);W.prototype.g.call(this)};function Pc(a,b,c,d,e){X.call(this,a,b,c,d);this.C=e}ja(Pc,X);Pc.prototype.l=function(a,b){Qc(this,a,b)};function Rc(a,b){var c=new U(function(b,c){l.setTimeout(function(){return c(Error("apmc:nocon"))},4E3);Ma?l.setTimeout(function(){return a.connect(b)},0):a.connect(b)});c.then(function(){return a.A(b)},function(){});return c}function Qc(a,b,c){c=void 0===c?{}:c;var d={},e=(d.c=a.o,d.i=a.v,d.s=b,d.p=c,d);a.C&&(e.msg_type=a.C);Ma?l.setTimeout(function(){a.j.postMessage(JSON.stringify(e),a.m)},0):a.j.postMessage(JSON.stringify(e),a.m)}function Sc(a,b){return new U(function(c,d){l.setTimeout(function(){return d(Error("apmc:timeout"))},4E3);try{var e=JSON.parse(a.data),f=e.c;if("apmc:bc:cr"===e.s&&f===b&&null!=a.source&&"string"==typeof a.origin){var g=new Pc(f,a.source,a.origin,!0);Rc(g,a).then(function(){return c(g)},function(){g.h||(g.h=!0,g.g())})}else throw Error("Invalid connection event");}catch(h){d(Error("apmc:error"))}})};function Tc(a,b){W.call(this);var c=this;this.v=a;this.o=null;this.m=uc();this.l=!1;this.u=b;this.j=Q(276,function(a){return Uc(c,a)})}ja(Tc,W);function Vc(a){var b={};b=(b.msg_type=a.v,b);J(I,"message",a.j);a=I.top;b.googMsgType="sth";a.postMessage(Hc(b),"*")}function Uc(a,b){kb(b.source)&&!a.l&&(a.l=!0,Sc(b,a.u).then(function(b){gb(I,a.j);a.o=b;a.m.g&&a.m.g(b)},function(){a.l=!1}))}Tc.prototype.g=function(){gb(I,this.j);if(this.o){var a=this.o;a.h||(a.h=!0,a.g())}W.prototype.g.call(this)};function Wc(a,b,c){if(!a||!b)throw Error("bad conv util ctor args");this.h=a;this.g=c};function Xc(a,b){var c=this;this.g=a;this.h=b;this.g.P||(this.o=!1,this.l=this.m=this.j=null,!this.g.J||this.g.adbadgeEnabled||this.g.V?Yc(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(L(this.g.v,a),L(this.g.h,a),L(this.g.A,b),L(this.g.D,b)):L(this.g.D,a)),Zc(this),this.g.enableNativeJakeUi&&this.g.enableNativeSurveyLoadIndicator&&R(this.g.G,"abgnac"),this.g.isDelegateAttributionActive?(R(document.body,"goog_delegate_active"),R(document.body,"jaa")):(this.g.adbadgeEnabled||this.g.isMutableImpression||!this.g.o||ab(this.g.o),this.m=setTimeout(function(){R(document.body,"jar")},this.g.H?750:100)),this.g.I&&R(document.body,"goog_delegate_disabled"),this.g.R&&I.addEventListener("load",function(){return c.h()}),$c(this))}function Zc(a){if(a.g.ba)J(a.g.j,"click",Q(365,function(a){var b=I.goog_interstitial_display;b&&(b(a),a&&(a.stopPropagation(),a.preventDefault()))}));else if(a.g.hasUserFeedbackData&&a.g.isMobileDevice)J(a.g.j,"click",function(){return a.h()});else if(a.g.hasUserFeedbackData&&!a.g.isMobileDevice&&a.g.o&&J(a.g.o,"click",function(){return a.h()}),a.g.T)ad(a);else{J(a.g.j,"mouseover",Q(367,function(){return ad(a)}));J(a.g.j,"mouseout",Q(369,function(){return bd(a,500)}));J(a.g.j,"touchstart",Q(368,function(){return ad(a)}));var b=Q(370,function(){return bd(a,4E3)});J(a.g.j,"mouseup",b);J(a.g.j,"touchend",b);J(a.g.j,"touchcancel",b);a.g.l&&J(a.g.l,"click",function(){return Q(371,function(b){return a.preventDefault(b)})})}}function Yc(a){a.g.l&&a.g.aa&&(a.g.m&&Xb(a.g.m)&&$b(a.g.m)&&(a.j=new Wc(Wb(a.g.m),Zb(a.g.m),Yb(a.g.m))),J(a.g.l,"click",Q(452,function(){if(!a.o&&(a.o=!0,a.j)){var b=a.j,c=b.h+"&label=closebutton_whythisad_click";c+="&label_instance=1";b.g&&(c+="&cid="+b.g);hb(window,c)}})))}function $c(a){a.g.H&&(a.l=new Tc("xcat","xca-ch"),a.l.m.h.then(function(b){Oc(b,"xca-rdy",function(){a.g.B=Tb(a.g.w);var c={abgp:a.g.w.abgp,name:a.g.w.name,abg_href:a.g.C.getAttribute("href"),abg_target:a.g.C.getAttribute("target"),is_mutable_impression:a.g.isMutableImpression,is_mobile:!!a.g.A,is_rtl:a.g.$,has_aria_hidden:"true"===a.g.C.getAttribute("aria-hidden"),serializable_reference_frame_set:Sb(a.g.B)};b.l("render-xca",c)});Oc(b,"req-pos-xca",function(){a.g.B=Tb(a.g.w);var c={serializable_reference_frame_set:Sb(a.g.B)};b.l("pos-xca",c)});Oc(b,"xca-dis",function(){clearTimeout(a.m);a.m=null;R(document.body,"jaa")});Oc(b,"xca-clk",function(){a.g.M.expandAttributionCard();b.l("hide-xca",{})});b.l("chk-xca",{})}),Vc(a.l))}function cd(a){var b=a.g.G;b.style.display="block";a.g.enableNativeJakeUi&&a.g.enableNativeSurveyLoadIndicator&&window.requestAnimationFrame(function(){R(b,"abgacfo")})}function ad(a){window.clearTimeout(a.g.u);a.g.u=null;a.g.h&&"block"==a.g.h.style.display||(a.g.L=ra(),a.g.v&&a.g.h&&(a.g.v.style.display="none",a.g.h.style.display="block",window.goog_extracreative_attribution&&window.postMessage("xca_exp","*")))}function bd(a,b){window.clearTimeout(a.g.u);a.g.u=window.setTimeout(function(){return dd(a)},b)}function dd(a){window.clearTimeout(a.g.u);a.g.u=null;a.g.v&&a.g.h&&(a.g.v.style.display="block",a.g.h.style.display="none");window.goog_extracreative_attribution&&window.postMessage("xca_col","*")}Xc.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>ra()-this.g.L)H(a);else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&H(a):window.openAttribution&&(window.openAttribution(b),H(a))}else this.g.Z&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&H(a):window.openSystemBrowser&&(window.openSystemBrowser(b),H(a)))};function ed(a,b){var c=fd,d=this;if(!c)throw Error("bad ctor");this.g=c;this.h=a;this.l=b;this.j=!1;Za("goog_delegate_deferred")?void 0!==I.goog_delegate_deferred_token?gd(this):(a=function(){gd(d)},I.goog_delegate_deferred_token=a,setTimeout(a,5E3)):gd(this)}function gd(a){if(!a.j)if(a.j=!0,I.goog_delegate_deferred_token=void 0,a.h){var b=a.g;a=a.h;a=new bc(null,a.imi,a.halign,a.fe,a.lttp,a.ci,a.nc,a.ufdj,a.opi,a.opai,a.ti,a.mob,a.eaca,a.eda,a.fdda,a.ulf,a.swc,a.aeol,a.abe,a.nsli,a.nju,a.anju,a.poli);new b(a)}else if(a.l){b=a.g;a=a.l;if(!a)throw Error("bad attrdata");a=new bc(a);new b(a)}};function hd(){a:{if(db)try{var a=I.google_cafe_host||I.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=eb?"https":"http";l.location&&"https:"==l.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20190114/r20110914/abg_survey.js"].join("")};function id(){var a=uc();this.promise=a.h;this.resolve=a.g}function jd(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new id,b&&b());return a[5]}function kd(){var a=window,b=hd();return jd(a,function(){var c=a.document,d=c.createElement("script"),e=new Xa;e.g=b;e instanceof Xa&&e.constructor===Xa&&e.h===Ya?e=e.g:(q(e),e="type_error:TrustedResourceUrl");d.src=e;if(null===la)b:{e=l.document;if((e=e.querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&ka.test(e)){la=e;break b}la=""}(e=la)&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function fd(a){var b=this;this.g=a;this.h=new Xc(this.g,Q(359,function(){return ld(b)}))}function ld(a){Ib(Mb,373,function(){dd(a.h);cd(a.h)},Pb);window.goog_extracreative_attribution||kd().then(function(b){b.createAttributionCard(a.g);a.g.M=b;b.expandAttributionCard()})}function md(a){new ed(null,a)}var nd=["buildAttribution"],Y=l;nd[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+nd[0]);for(var Z;nd.length&&(Z=nd.shift());)nd.length||void 0===md?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=md;"undefined"!=typeof window.abgp&&new ed(window.abgp,null);}).call(this);
