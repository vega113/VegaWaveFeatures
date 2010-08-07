(function(){var $gwt_version = "2.0.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $strongName = 'D0CEF2BFFFF6C49F9AA44ECD78C2A97A';var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});function m(){}
function w(){}
function v(){}
function u(){}
function t(){}
function R(){}
function kd(){}
function bb(){}
function nb(){}
function rb(){}
function Xb(){}
function Tc(){}
function Wc(){}
function $c(){}
function bd(){}
function Yc(a){Gb();return a}
function jb(a){return a.h()}
function ad(a){Gb();return a}
function pb(a,b){a.b=b;return a}
function tb(a,b){a.b=b;return a}
function dd(a,b,c,d,e){return a}
function mc(a,b){return a&&!!kc[a][b]}
function pc(a,b){return a!=null&&mc(a.tI,b)}
function C(a,b){Gb();a.b=b;Fb(a);return a}
function ib(a){return a.b.length>0||a.f.length>0}
function Hb(){try{null.a()}catch(a){return a}}
function qc(a){return a!=null&&a.tM!=kd&&a.tI!=2}
function gb(a){var b;b=a.c;a.c=[];lb(b,a.c)}
function hb(a){var b;b=a.b;a.b=[];lb(b,a.f);a.f=kb(a.f)}
function db(){db=kd;cb=fb(new bb)}
function fc(){fc=kd;dc=[];ec=[];gc(new Xb,dc,ec)}
function fb(a){db();a.e=pb(new nb,a);tb(new rb,a);a.b=[];a.f=[];a.c=[];return a}
function ub(){this.b.d&&mb(this.b.e,1);return this.b.g}
function qb(){this.b.d=true;hb(this.b);this.b.d=false;return this.b.g=ib(this.b)}
function Y(a){return function(){return Z(a,this,arguments)}}
function Cb(a,b){a.length>=b&&a.splice(0,b);return a}
function Cc(a){if(a!=null&&mc(a.tI,3)){return a}return C(new t,a)}
function nc(a){if(a!=null&&(a.tM==kd||a.tI==2)){throw Yc(new Wc)}return a}
function ic(a,b,c){fc();for(var d=0,e=b.length;d<e;++d){a[b[d]]=c[d]}}
function gc(a,b,c){var d=0,e;for(var f in a){if(e=a[f]){b[d]=f;c[d]=e;++d}}}
function ac(a,b,c,d,e){var f;f=_b(e,d);fc();ic(f,dc,ec);f.tI=b;return f}
function y(a){var b,c,d;c=ac(vc,0,0,a.length,0);for(d=0,b=a.length;d<b;++d){if(!a[d]){throw ad(new $c)}c[d]=a[d]}}
function Kb(a){var b,c,d;d=Pb(a);for(b=0,c=d.length;b<c;++b){d[b]=d[b].length==0?Gd:d[b]}return d}
function lb(b,c){var a,e,f,g;for(e=0,f=b.length;e<f;++e){g=b[e];try{g[1]?g[0].h()&&(c[c.length]=g,undefined):g[0].i()}catch(a){a=Cc(a);if(!pc(a,2))throw a}}}
function Z(a,b,c){var d;d=V++==0;try{return a.apply(b,c)}finally{d&&gb((db(),cb));--V}}
function _b(a,b){var c=new Array(b);if(a>0){var d=[null,0,false,[0,0]][a];for(var e=0;e<b;++e){c[e]=d}}return c}
function Gb(){var a,b,c,d;c=Cb(Kb(Hb()),3);d=ac(vc,0,0,c.length,0);for(a=0,b=d.length;a<b;++a){d[a]=dd(new bd,Ed,c[a],Fd,0)}y(d)}
function zc(){!!$stats&&Gc(Kd);!!$stats&&Gc(Ld)}
function mb(b,c){db();$wnd.setTimeout(function(){var a=$entry(jb)(b);a&&$wnd.setTimeout(arguments.callee,c)},c)}
function gwtOnLoad(b,c,d){$moduleName=c;$moduleBase=d;if(b)try{$entry(zc)()}catch(a){b(c)}else{$entry(zc)()}}
function Gc(a){return $stats({moduleName:$moduleName,sessionId:$sessionId,subSystem:Md,evtGroup:Nd,millis:(new Date).getTime(),type:Od,className:a})}
function kb(a){var b,c,d,e,f,g;b=false;d=a.length;f=(new Date).getTime();while((new Date).getTime()-f<100){for(c=0;c<d;++c){g=a[c];if(!g){continue}if(!g[0].h()){a[c]=null;b=true}}}if(b){e=[];for(c=0;c<d;++c){if(!a[c]){continue}e[e.length]=a[c]}return e}else{return a}}
function jd(c){if(c.length==0||c[0]>Pd&&c[c.length-1]>Pd){return c}var a=c.replace(/^(\s*)/,Jd);var b=a.replace(/\s*$/,Jd);return b}
function Fb(a){var b,c,d,e;d=Kb(qc(a.b)?nc(a.b):null);e=ac(vc,0,0,d.length,0);for(b=0,c=e.length;b<c;++b){e[b]=dd(new bd,Ed,d[b],Fd,0)}y(e)}
function Pb(a){var b,c,d,e,f;f=a&&a.message?a.message.split(Hd):[];for(b=0,c=0,e=f.length;c<e;++b,c+=2){d=f[c].lastIndexOf(Id);d==-1?(f[b]=Jd,undefined):(f[b]=jd(f[c].substr(d+9,f[c].length-(d+9))),undefined)}f.length=b;return f}
var Jd='',Hd='\n',Pd=' ',Ed='Unknown',Fd='Unknown source',Gd='anonymous',Ld='com.vegalabs.features.client.VegaWaveFeatures',Kd='com.vegalabs.general.client.VegaGeneral',Id='function ',Nd='moduleStartup',Od='onModuleLoadStart',Md='startup';var _;_=m.prototype={};_.tM=kd;_.tI=1;_=w.prototype=new m;_.tI=3;_=v.prototype=new w;_.tI=4;_=u.prototype=new v;_.tI=5;_=t.prototype=new u;_.tI=6;_.b=null;_=R.prototype=new m;_.tI=0;var V=0;_=bb.prototype=new R;_.tI=0;_.d=false;_.g=false;var cb;_=nb.prototype=new m;_.h=qb;_.tI=0;_.b=null;_=rb.prototype=new m;_.h=ub;_.tI=0;_.b=null;_=Xb.prototype=new m;_.tI=0;_.length=0;var dc,ec;var kc=[{},{},{1:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1}];_=Tc.prototype=new m;_.tI=0;_=Wc.prototype=new u;_.tI=11;_=$c.prototype=new u;_.tI=12;_=bd.prototype=new m;_.tI=0;_=String.prototype;_.tI=2;var $entry=Y;var vc=new Tc;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (vegawavefeatures) vegawavefeatures.onScriptLoad(gwtOnLoad);})();