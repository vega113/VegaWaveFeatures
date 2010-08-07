(function(){var $gwt_version = "2.0.4";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $strongName = '3EB2D51EDDF56D733F36871EAD389082';var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});function m(){}
function w(){}
function v(){}
function u(){}
function t(){}
function Q(){}
function bd(){}
function ab(){}
function mb(){}
function qb(){}
function Cb(){}
function Ob(){}
function Kc(){}
function Nc(){}
function Rc(){}
function Uc(){}
function Hb(a){return Bb(a)}
function ib(a){return a.g()}
function Pc(a){Gb();return a}
function Tc(a){Gb();return a}
function ob(a,b){a.a=b;return a}
function sb(a,b){a.a=b;return a}
function Wc(a,b,c,d,e){return a}
function dc(a,b){return a&&!!bc[a][b]}
function gc(a,b){return a!=null&&dc(a.tI,b)}
function C(a,b){Gb();a.a=b;Fb(a);return a}
function hb(a){return a.a.length>0||a.e.length>0}
function fb(a){var b;b=a.b;a.b=[];kb(b,a.b)}
function cb(){cb=bd;bb=eb(new ab)}
function Yb(){Yb=bd;Wb=[];Xb=[];Zb(new Ob,Wb,Xb)}
function gb(a){var b;b=a.a;a.a=[];kb(b,a.e);a.e=jb(a.e)}
function hc(a){return a!=null&&a.tM!=bd&&a.tI!=2}
function tc(a){if(a!=null&&dc(a.tI,3)){return a}return C(new t,a)}
function tb(){this.a.c&&lb(this.a.d,1);return this.a.f}
function pb(){this.a.c=true;gb(this.a);this.a.c=false;return this.a.f=hb(this.a)}
function X(a){return function(){return Y(a,this,arguments)}}
function ec(a){if(a!=null&&(a.tM==bd||a.tI==2)){throw Pc(new Nc)}return a}
function eb(a){cb();a.d=ob(new mb,a);sb(new qb,a);a.a=[];a.e=[];a.b=[];return a}
function _b(a,b,c){Yb();for(var d=0,e=b.length;d<e;++d){a[b[d]]=c[d]}}
function Zb(a,b,c){var d=0,e;for(var f in a){if(e=a[f]){b[d]=f;c[d]=e;++d}}}
function Tb(a,b,c,d,e){var f;f=Sb(e,d);Yb();_b(f,Wb,Xb);f.tI=b;return f}
function Sb(a,b){var c=new Array(b);if(a>0){var d=[null,0,false,[0,0]][a];for(var e=0;e<b;++e){c[e]=d}}return c}
function Y(a,b,c){var d;d=U++==0;try{return a.apply(b,c)}finally{d&&fb((cb(),bb));--U}}
function Fb(a){var b,c,d,e;d=(hc(a.a)?ec(a.a):null,[]);e=Tb(mc,0,0,d.length,0);for(b=0,c=e.length;b<c;++b){e[b]=Wc(new Uc,Ad,d[b],Bd,0)}y(e)}
function y(a){var b,c,d;c=Tb(mc,0,0,a.length,0);for(d=0,b=a.length;d<b;++d){if(!a[d]){throw Tc(new Rc)}c[d]=a[d]}}
function kb(b,c){var a,e,f,g;for(e=0,f=b.length;e<f;++e){g=b[e];try{g[1]?g[0].g()&&(c[c.length]=g,undefined):g[0].i()}catch(a){a=tc(a);if(!gc(a,2))throw a}}}
function Gb(){var a,b,c,d;c=Eb(new Cb);d=Tb(mc,0,0,c.length,0);for(a=0,b=d.length;a<b;++a){d[a]=Wc(new Uc,Ad,c[a],Bd,0)}y(d)}
function qc(){!!$stats&&xc(Cd);!!$stats&&xc(Dd)}
function lb(b,c){cb();$wnd.setTimeout(function(){var a=$entry(ib)(b);a&&$wnd.setTimeout(arguments.callee,c)},c)}
function gwtOnLoad(b,c,d){$moduleName=c;$moduleBase=d;if(b)try{$entry(qc)()}catch(a){b(c)}else{$entry(qc)()}}
function xc(a){return $stats({moduleName:$moduleName,sessionId:$sessionId,subSystem:Ed,evtGroup:Fd,millis:(new Date).getTime(),type:Gd,className:a})}
function jb(a){var b,c,d,e,f,g;b=false;d=a.length;f=(new Date).getTime();while((new Date).getTime()-f<100){for(c=0;c<d;++c){g=a[c];if(!g){continue}if(!g[0].g()){a[c]=null;b=true}}}if(b){e=[];for(c=0;c<d;++c){if(!a[c]){continue}e[e.length]=a[c]}return e}else{return a}}
function Bb(a){var b,c,d;d=vd;a=ad(a);b=a.indexOf(wd);if(b!=-1){c=a.indexOf(xd)==0?8:0;d=ad(a.substr(c,b-c))}return d.length>0?d:yd}
function Eb(i){var a={};var b=[];var c=arguments.callee.caller.caller;while(c){var d=i.h(c.toString());b.push(d);var e=zd+d;var f=a[e];if(f){var g,h;for(g=0,h=f.length;g<h;g++){if(f[g]===c){return b}}}(f||(a[e]=[])).push(c);c=c.caller}return b}
function ad(c){if(c.length==0||c[0]>Hd&&c[c.length-1]>Hd){return c}var a=c.replace(/^(\s*)/,vd);var b=a.replace(/\s*$/,vd);return b}
var vd='',Hd=' ',wd='(',zd=':',Ad='Unknown',Bd='Unknown source',yd='anonymous',Dd='com.vegalabs.features.client.VegaWaveFeatures',Cd='com.vegalabs.general.client.VegaGeneral',xd='function',Fd='moduleStartup',Gd='onModuleLoadStart',Ed='startup';var _;_=m.prototype={};_.tM=bd;_.tI=1;_=w.prototype=new m;_.tI=3;_=v.prototype=new w;_.tI=4;_=u.prototype=new v;_.tI=5;_=t.prototype=new u;_.tI=6;_.a=null;_=Q.prototype=new m;_.tI=0;var U=0;_=ab.prototype=new Q;_.tI=0;_.c=false;_.f=false;var bb;_=mb.prototype=new m;_.g=pb;_.tI=0;_.a=null;_=qb.prototype=new m;_.g=tb;_.tI=0;_.a=null;_=Cb.prototype=new m;_.h=Hb;_.tI=0;_=Ob.prototype=new m;_.tI=0;_.length=0;var Wb,Xb;var bc=[{},{},{1:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{2:1,3:1},{3:1},{3:1},{2:1,3:1},{2:1,3:1}];_=Kc.prototype=new m;_.tI=0;_=Nc.prototype=new u;_.tI=11;_=Rc.prototype=new u;_.tI=12;_=Uc.prototype=new m;_.tI=0;_=String.prototype;_.tI=2;var $entry=X;var mc=new Kc;$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (vegawavefeatures) vegawavefeatures.onScriptLoad(gwtOnLoad);})();