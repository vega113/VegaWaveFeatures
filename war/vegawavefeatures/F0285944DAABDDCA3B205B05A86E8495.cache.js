(function(){var $gwt_version = "2.0.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $strongName = 'F0285944DAABDDCA3B205B05A86E8495';var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});function m(){}
function w(){}
function v(){}
function u(){}
function t(){}
function R(){}
function gd(){}
function bb(){}
function nb(){}
function rb(){}
function Tb(){}
function Pc(){}
function Sc(){}
function Wc(){}
function Zc(){}
function Uc(a){Hb();return a}
function jb(a){return a.h()}
function Yc(a){Hb();return a}
function pb(a,b){a.b=b;return a}
function tb(a,b){a.b=b;return a}
function _c(a,b,c,d,e){return a}
function ic(a,b){return a&&!!gc[a][b]}
function lc(a,b){return a!=null&&ic(a.tI,b)}
function C(a,b){Hb();a.b=b;Gb(a);return a}
function ib(a){return a.b.length>0||a.f.length>0}
function Ib(){try{null.a()}catch(a){return a}}
function mc(a){return a!=null&&a.tM!=gd&&a.tI!=2}
function gb(a){var b;b=a.c;a.c=[];lb(b,a.c)}
function hb(a){var b;b=a.b;a.b=[];lb(b,a.f);a.f=kb(a.f)}
function db(){db=gd;cb=fb(new bb)}
function bc(){bc=gd;_b=[];ac=[];cc(new Tb,_b,ac)}
function fb(a){db();a.e=pb(new nb,a);tb(new rb,a);a.b=[];a.f=[];a.c=[];return a}
function ub(){this.b.d&&mb(this.b.e,1);return this.b.g}
function qb(){this.b.d=true;hb(this.b);this.b.d=false;return this.b.g=ib(this.b)}
function Y(a){return function(){return Z(a,this,arguments)}}
function Db(a,b){a.length>=b&&a.splice(0,b);return a}
function yc(a){if(a!=null&&ic(a.tI,3)){return a}return C(new t,a)}
function jc(a){if(a!=null&&(a.tM==gd||a.tI==2)){throw Uc(new Sc)}return a}
function ec(a,b,c){bc();for(var d=0,e=b.length;d<e;++d){a[b[d]]=c[d]}}
function cc(a,b,c){var d=0,e;for(var f in a){if(e=a[f]){b[d]=f;c[d]=e;++d}}}
function Yb(a,b,c,d,e){var f;f=Xb(e,d);bc();ec(f,_b,ac);f.tI=b;return f}
function Z(a,b,c){var d;d=V++==0;try{return a.apply(b,c)}finally{d&&gb((db(),cb));--V}}
function Xb(a,b){var c=new Array(b);if(a>0){var d=[null,0,false,[0,0]][a];for(var e=0;e<b;++e){c[e]=d}}return c}
function Hb(){var a,b,c,d;c=Db(Mb(Ib()),2);d=Yb(rc,0,0,c.length,0);for(a=0,b=d.length;a<b;++a){d[a]=_c(new Zc,Ed,c[a],Fd,0)}y(d)}
function Mb(a){var b,c,d;d=a&&a.stack?a.stack.split(Gd):[];for(b=0,c=d.length;b<c;++b){d[b]=Cb(d[b])}return d}
function y(a){var b,c,d;c=Yb(rc,0,0,a.length,0);for(d=0,b=a.length;d<b;++d){if(!a[d]){throw Yc(new Wc)}c[d]=a[d]}}
function lb(b,c){var a,e,f,g;for(e=0,f=b.length;e<f;++e){g=b[e];try{g[1]?g[0].h()&&(c[c.length]=g,undefined):g[0].i()}catch(a){a=yc(a);if(!lc(a,2))throw a}}}
function gwtOnLoad(b,c,d){$moduleName=c;$moduleBase=d;if(b)try{$entry(vc)()}catch(a){b(c)}else{$entry(vc)()}}
function vc(){!!$stats&&Cc(Hd);!!$stats&&Cc(Id)}
function mb(b,c){db();$wnd.setTimeout(function(){var a=$entry(jb)(b);a&&$wnd.setTimeout(arguments.callee,c)},c)}
function fd(c){if(c.length==0||c[0]>Md&&c[c.length-1]>Md){return c}var a=c.replace(/^(\s*)/,Ad);var b=a.replace(/\s*$/,Ad);return b}
function kb(a){var b,c,d,e,f,g;b=false;d=a.length;f=(new Date).getTime();while((new Date).getTime()-f<100){for(c=0;c<d;++c){g=a[c];if(!g){continue}if(!g[0].h()){a[c]=null;b=true}}}if(b){e=[];for(c=0;c<d;++c){if(!a[c]){continue}e[e.length]=a[c]}return e}else{return a}}
function Cb(a){var b,c,d;d=Ad;a=fd(a);b=a.indexOf(Bd);if(b!=-1){c=a.indexOf(Cd)==0?8:0;d=fd(a.substr(c,b-c))}return d.length>0?d:Dd}
function Gb(a){var b,c,d,e;d=Mb(mc(a.b)?jc(a.b):null);e=Yb(rc,0,0,d.length,0);for(b=0,c=e.length;b<c;++b){e[b]=_c(new Zc,Ed,d[b],Fd,0)}y(e)}
function Cc(a){return $stats({moduleName:$moduleName,sessionId:$sessionId,subSystem:Jd,evtGroup:Kd,millis:(new Date).getTime(),type:Ld,className:a})}
var Ad='',Gd='\n',Md=' ',Bd='(',Ed='Unknown',Fd='Unknown source',Dd='anonymous',Id='com.vegalabs.features.client.VegaWaveFeatures',Hd='com.vegalabs.general.client.VegaGeneral',Cd='function',Kd='moduleStartup',Ld='onModuleLoadStart',Jd='startup';var _;_=m.prototype={};_.tM=gd;_.tI=1;_=w.prototype=new m;_.tI=3;_=v.prototype=new w;_.tI=4;_=u.prototype=new v;_.tI=5;_=t.prototype=new u;_.tI=6;_.b=null;_=R.prototype=new m;_.tI=0;var V=0;_=bb.prototype=new R;_.tI=0;_.d=false;_.g=false;var cb;_=nb.prototype=new m;_.h=qb;_.tI=0;_.b=null;_=rb.prototype=new m;_.h=ub;_.tI=0;_.b=null;_=Tb.prototype=new m;_.tI=0;_.length=0;var _b,ac;var gc=[{},{},{1:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1}];_=Pc.prototype=new m;_.tI=0;_=Sc.prototype=new u;_.tI=11;_=Wc.prototype=new u;_.tI=12;_=Zc.prototype=new m;_.tI=0;_=String.prototype;_.tI=2;var $entry=Y;var rc=new Pc;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (vegawavefeatures) vegawavefeatures.onScriptLoad(gwtOnLoad);})();