(function(){var $gwt_version = "2.0.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $strongName = '756DAFB32D95B4F911F7471D491920D5';var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});function m(){}
function w(){}
function v(){}
function u(){}
function t(){}
function R(){}
function Ad(){}
function bb(){}
function nb(){}
function rb(){}
function Eb(){}
function Nb(){}
function Mb(){}
function hc(){}
function ed(){}
function hd(){}
function ld(){}
function od(){}
function ac(){return 3}
function Ub(){return 2}
function Lb(a){return []}
function jb(a){return a.h()}
function Kb(a){return Cb(a)}
function jd(a){Hb();return a}
function nd(a){Hb();return a}
function Zb(){return Wb(this)}
function Tb(a){return Rb(this,a)}
function tb(a,b){a.b=b;return a}
function pb(a,b){a.b=b;return a}
function qd(a,b,c,d,e){return a}
function yc(a,b){return a&&!!wc[a][b]}
function _b(a){return Xb(this,a)}
function Sb(){return Db(this.k(Ib()),this.l())}
function Bc(a,b){return a!=null&&yc(a.tI,b)}
function ib(a){return a.b.length>0||a.f.length>0}
function Ib(){try{null.a()}catch(a){return a}}
function Cc(a){return a!=null&&a.tM!=Ad&&a.tI!=2}
function gb(a){var b;b=a.c;a.c=[];lb(b,a.c)}
function hb(a){var b;b=a.b;a.b=[];lb(b,a.f);a.f=kb(a.f)}
function C(a,b){Hb();a.b=b;Gb(new Mb,a);return a}
function db(){db=Ad;cb=fb(new bb)}
function rc(){rc=Ad;pc=[];qc=[];sc(new hc,pc,qc)}
function Mc(){!!$stats&&Tc(ce);!!$stats&&Tc(de)}
function ub(){this.b.d&&mb(this.b.e,1);return this.b.g}
function qb(){this.b.d=true;hb(this.b);this.b.d=false;return this.b.g=ib(this.b)}
function Y(a){return function(){return Z(a,this,arguments)}}
function Pc(a){if(a!=null&&yc(a.tI,3)){return a}return C(new t,a)}
function zc(a){if(a!=null&&(a.tM==Ad||a.tI==2)){throw jd(new hd)}return a}
function Db(a,b){a.length>=b&&a.splice(0,b);return a}
function mc(a,b,c,d,e){var f;f=lc(e,d);rc();uc(f,pc,qc);f.tI=b;return f}
function Z(a,b,c){var d;d=V++==0;try{return a.apply(b,c)}finally{d&&gb((db(),cb));--V}}
function sc(a,b,c){var d=0,e;for(var f in a){if(e=a[f]){b[d]=f;c[d]=e;++d}}}
function uc(a,b,c){rc();for(var d=0,e=b.length;d<e;++d){a[b[d]]=c[d]}}
function Xb(a,b){var c;c=Rb(a,b);if(c.length==0){return (new Eb).k(b)}else{return c.length>=1&&c.splice(0,1),c}}
function Wb(a){var b;b=Db(Xb(a,Ib()),3);b.length==0&&(b=Db((new Eb).i(),1));return b}
function fb(a){db();a.e=pb(new nb,a);tb(new rb,a);a.b=[];a.f=[];a.c=[];return a}
function Hb(){var a,b,c,d;c=Wb(new Mb);d=mc(Ic,0,0,c.length,0);for(a=0,b=d.length;a<b;++a){d[a]=qd(new od,Yd,c[a],Zd,0)}y(d)}
function y(a){var b,c,d;c=mc(Ic,0,0,a.length,0);for(d=0,b=a.length;d<b;++d){if(!a[d]){throw nd(new ld)}c[d]=a[d]}}
function Rb(a,b){var c,d,e;e=b&&b.stack?b.stack.split(_d):[];for(c=0,d=e.length;c<d;++c){e[c]=a.j(e[c])}return e}
function lb(b,c){var a,e,f,g;for(e=0,f=b.length;e<f;++e){g=b[e];try{g[1]?g[0].h()&&(c[c.length]=g,undefined):g[0].m()}catch(a){a=Pc(a);if(!Bc(a,2))throw a}}}
function lc(a,b){var c=new Array(b);if(a>0){var d=[null,0,false,[0,0]][a];for(var e=0;e<b;++e){c[e]=d}}return c}
function Gb(a,b){var c,d,e,f;e=Xb(a,Cc(b.b)?zc(b.b):null);f=mc(Ic,0,0,e.length,0);for(c=0,d=f.length;c<d;++c){f[c]=qd(new od,Yd,e[c],Zd,0)}y(f)}
function mb(b,c){db();$wnd.setTimeout(function(){var a=$entry(jb)(b);a&&$wnd.setTimeout(arguments.callee,c)},c)}
function gwtOnLoad(b,c,d){$moduleName=c;$moduleBase=d;if(b)try{$entry(Mc)()}catch(a){b(c)}else{$entry(Mc)()}}
function Tc(a){return $stats({moduleName:$moduleName,sessionId:$sessionId,subSystem:ee,evtGroup:fe,millis:(new Date).getTime(),type:ge,className:a})}
function kb(a){var b,c,d,e,f,g;b=false;d=a.length;f=(new Date).getTime();while((new Date).getTime()-f<100){for(c=0;c<d;++c){g=a[c];if(!g){continue}if(!g[0].h()){a[c]=null;b=true}}}if(b){e=[];for(c=0;c<d;++c){if(!a[c]){continue}e[e.length]=a[c]}return e}else{return a}}
function Cb(a){var b,c,d;d=Ud;a=xd(a);b=a.indexOf(Vd);if(b!=-1){c=a.indexOf(Wd)==0?8:0;d=xd(a.substr(c,b-c))}return d.length>0?d:Xd}
function Jb(){var a={};var b=[];var c=arguments.callee.caller.caller;while(c){var d=this.j(c.toString());b.push(d);var e=$d+d;var f=a[e];if(f){var g,h;for(g=0,h=f.length;g<h;g++){if(f[g]===c){return b}}}(f||(a[e]=[])).push(c);c=c.caller}return b}
function xd(c){if(c.length==0||c[0]>he&&c[c.length-1]>he){return c}var a=c.replace(/^(\s*)/,Ud);var b=a.replace(/\s*$/,Ud);return b}
function $b(a){var b,c;if(a.length==0){return Xd}c=xd(a);c.indexOf(ae)==0&&(c=c.substr(3,c.length-3));b=c.indexOf(be);b==-1&&(b=c.indexOf(Vd));if(b==-1){return Xd}else{c=xd(c.substr(0,b-0))}b=c.indexOf(zd(46));b!=-1&&(c=c.substr(b+1,c.length-(b+1)));return c.length>0?c:Xd}
function zd(a){var b,c;if(a>=65536){b=55296+(~~(a-65536)>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
var Ud='',_d='\n',he=' ',Vd='(',$d=':',Yd='Unknown',Zd='Unknown source',be='[',Xd='anonymous',ae='at ',de='com.vegalabs.features.client.VegaWaveFeatures',ce='com.vegalabs.general.client.VegaGeneral',Wd='function',fe='moduleStartup',ge='onModuleLoadStart',ee='startup';var _;_=m.prototype={};_.tM=Ad;_.tI=1;_=w.prototype=new m;_.tI=3;_=v.prototype=new w;_.tI=4;_=u.prototype=new v;_.tI=5;_=t.prototype=new u;_.tI=6;_.b=null;_=R.prototype=new m;_.tI=0;var V=0;_=bb.prototype=new R;_.tI=0;_.d=false;_.g=false;var cb;_=nb.prototype=new m;_.h=qb;_.tI=0;_.b=null;_=rb.prototype=new m;_.h=ub;_.tI=0;_.b=null;_=Eb.prototype=new m;_.i=Jb;_.j=Kb;_.k=Lb;_.tI=0;_=Nb.prototype=new Eb;_.i=Sb;_.k=Tb;_.l=Ub;_.tI=0;_=Mb.prototype=new Nb;_.i=Zb;_.j=$b;_.k=_b;_.l=ac;_.tI=0;_=hc.prototype=new m;_.tI=0;_.length=0;var pc,qc;var wc=[{},{},{1:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1}];_=ed.prototype=new m;_.tI=0;_=hd.prototype=new u;_.tI=11;_=ld.prototype=new u;_.tI=12;_=od.prototype=new m;_.tI=0;_=String.prototype;_.tI=2;var $entry=Y;var Ic=new ed;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (vegawavefeatures) vegawavefeatures.onScriptLoad(gwtOnLoad);})();