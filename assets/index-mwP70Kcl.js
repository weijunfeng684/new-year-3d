(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ws="161",Ru=0,To=1,Cu=2,xc=1,Lu=2,gn=3,Sn=0,Ut=1,Wt=2,In=0,Ci=1,Ui=2,bo=3,Ao=4,Pu=5,jn=100,Uu=101,Du=102,wo=103,Ro=104,Iu=200,Fu=201,Nu=202,Ou=203,Ts=204,bs=205,Bu=206,Gu=207,zu=208,ku=209,Hu=210,Vu=211,Wu=212,Xu=213,Yu=214,qu=0,ju=1,Ku=2,ua=3,Zu=4,Ju=5,Qu=6,$u=7,Sc=0,ef=1,tf=2,Fn=0,nf=1,rf=2,af=3,sf=4,of=5,lf=6,Mc=300,Di=301,Ii=302,As=303,ws=304,va=306,Rs=1e3,rn=1001,Cs=1002,Lt=1003,Co=1004,er=1005,Tt=1006,Ba=1007,Zn=1008,Nn=1009,cf=1010,uf=1011,Xs=1012,yc=1013,Dn=1014,_n=1015,gr=1016,Ec=1017,Tc=1018,Jn=1020,ff=1021,an=1023,hf=1024,df=1025,Qn=1026,Fi=1027,pf=1028,bc=1029,mf=1030,Ac=1031,wc=1033,Ga=33776,za=33777,ka=33778,Ha=33779,Lo=35840,Po=35841,Uo=35842,Do=35843,Rc=36196,Io=37492,Fo=37496,No=37808,Oo=37809,Bo=37810,Go=37811,zo=37812,ko=37813,Ho=37814,Vo=37815,Wo=37816,Xo=37817,Yo=37818,qo=37819,jo=37820,Ko=37821,Va=36492,Zo=36494,Jo=36495,gf=36283,Qo=36284,$o=36285,el=36286,Cc=3e3,$n=3001,_f=3200,Lc=3201,vf=0,xf=1,Xt="",gt="srgb",Mn="srgb-linear",Ys="display-p3",xa="display-p3-linear",fa="linear",at="srgb",ha="rec709",da="p3",si=7680,tl=519,Sf=512,Mf=513,yf=514,Pc=515,Ef=516,Tf=517,bf=518,Af=519,Ls=35044,nl="300 es",Ps=1035,vn=2e3,pa=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,o=n.length;i<o;i++)n[i].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const hr=Math.PI/180,_r=180/Math.PI;function xn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yt[a&255]+yt[a>>8&255]+yt[a>>16&255]+yt[a>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toLowerCase()}function xt(a,e,t){return Math.max(e,Math.min(t,a))}function qs(a,e){return(a%e+e)%e}function wf(a,e,t,r,n){return r+(a-e)*(n-r)/(t-e)}function Rf(a,e,t){return a!==e?(t-a)/(e-a):0}function dr(a,e,t){return(1-t)*a+t*e}function Cf(a,e,t,r){return dr(a,e,1-Math.exp(-t*r))}function Lf(a,e=1){return e-Math.abs(qs(a,e*2)-e)}function Pf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Uf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Df(a,e){return a+Math.floor(Math.random()*(e-a+1))}function If(a,e){return a+Math.random()*(e-a)}function Ff(a){return a*(.5-Math.random())}function Nf(a){a!==void 0&&(il=a);let e=il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Of(a){return a*hr}function Bf(a){return a*_r}function Us(a){return(a&a-1)===0&&a!==0}function Gf(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ma(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function zf(a,e,t,r,n){const i=Math.cos,o=Math.sin,s=i(t/2),l=o(t/2),c=i((e+r)/2),u=o((e+r)/2),f=i((e-r)/2),h=o((e-r)/2),d=i((r-e)/2),g=o((r-e)/2);switch(n){case"XYX":a.set(s*u,l*f,l*h,s*c);break;case"YZY":a.set(l*h,s*u,l*f,s*c);break;case"ZXZ":a.set(l*f,l*h,s*u,s*c);break;case"XZX":a.set(s*u,l*g,l*d,s*c);break;case"YXY":a.set(l*d,s*u,l*g,s*c);break;case"ZYZ":a.set(l*g,l*d,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function sn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Qe(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Wa={DEG2RAD:hr,RAD2DEG:_r,generateUUID:xn,clamp:xt,euclideanModulo:qs,mapLinear:wf,inverseLerp:Rf,lerp:dr,damp:Cf,pingpong:Lf,smoothstep:Pf,smootherstep:Uf,randInt:Df,randFloat:If,randFloatSpread:Ff,seededRandom:Nf,degToRad:Of,radToDeg:Bf,isPowerOfTwo:Us,ceilPowerOfTwo:Gf,floorPowerOfTwo:ma,setQuaternionFromProperEuler:zf,normalize:Qe,denormalize:sn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*r-o*n+e.x,this.y=i*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,r,n,i,o,s,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,o,s,l,c)}set(e,t,r,n,i,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],d=r[5],g=r[8],_=n[0],p=n[3],m=n[6],y=n[1],x=n[4],M=n[7],C=n[2],w=n[5],E=n[8];return i[0]=o*_+s*y+l*C,i[3]=o*p+s*x+l*w,i[6]=o*m+s*M+l*E,i[1]=c*_+u*y+f*C,i[4]=c*p+u*x+f*w,i[7]=c*m+u*M+f*E,i[2]=h*_+d*y+g*C,i[5]=h*p+d*x+g*w,i[8]=h*m+d*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-r*i*u+r*s*l+n*i*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,h=s*l-u*i,d=c*i-o*l,g=t*f+r*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(n*c-u*r)*_,e[2]=(s*r-n*o)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-s*t)*_,e[6]=d*_,e[7]=(r*l-c*t)*_,e[8]=(o*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,o,s){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Ke;function Uc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ga(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function kf(){const a=ga("canvas");return a.style.display="block",a}const rl={};function ei(a){a in rl||(rl[a]=!0,console.warn(a))}const al=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sl=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Mn]:{transfer:fa,primaries:ha,toReference:a=>a,fromReference:a=>a},[gt]:{transfer:at,primaries:ha,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[xa]:{transfer:fa,primaries:da,toReference:a=>a.applyMatrix3(sl),fromReference:a=>a.applyMatrix3(al)},[Ys]:{transfer:at,primaries:da,toReference:a=>a.convertSRGBToLinear().applyMatrix3(sl),fromReference:a=>a.applyMatrix3(al).convertLinearToSRGB()}},Hf=new Set([Mn,xa]),tt={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Hf.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const r=wr[e].toReference,n=wr[t].fromReference;return n(r(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return wr[a].primaries},getTransfer:function(a){return a===Xt?fa:wr[a].transfer}};function Li(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ya(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let oi;class Dc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=ga("canvas")),oi.width=e.width,oi.height=e.height;const r=oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let o=0;o<i.length;o++)i[o]=Li(i[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Li(t[r]/255)*255):t[r]=Li(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vf=0;class Ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?i.push(qa(n[o].image)):i.push(qa(n[o]))}else i=qa(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function qa(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Dc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;class bt extends Oi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,r=rn,n=rn,i=Tt,o=Zn,s=an,l=Nn,c=bt.DEFAULT_ANISOTROPY,u=Xt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=xn(),this.name="",this.source=new Ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$n?gt:Xt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?$n:Cc}set encoding(e){ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$n?gt:Xt}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Mc;bt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,r=0,n=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*i,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*i,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*i,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,C=(m+1)/2,w=(u+h)/4,E=(f+_)/4,N=(g+p)/4;return x>M&&x>C?x<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(x),n=w/r,i=E/r):M>C?M<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(M),r=w/n,i=N/n):C<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(C),r=E/i,n=N/i),this.set(r,n,i,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends Oi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(ei("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===$n?gt:Xt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new bt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Xf{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fc extends bt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yf extends bt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,o,s){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const h=i[o+0],d=i[o+1],g=i[o+2],_=i[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-s;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,m*y);p=Math.sin(p*w)/C,s=Math.sin(s*w)/C}const M=s*y;if(l=l*p+h*M,c=c*p+d*M,u=u*p+g*M,f=f*p+_*M,p===1-s){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,o){const s=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=i[o],h=i[o+1],d=i[o+2],g=i[o+3];return e[t]=s*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-s*d,e[t+2]=c*g+u*d+s*h-l*f,e[t+3]=u*g-s*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(n/2),f=s(i/2),h=l(r/2),d=l(n/2),g=l(i/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=r+s+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(o-n)*d}else if(r>s&&r>f){const d=2*Math.sqrt(1+r-s-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(i+c)/d}else if(s>f){const d=2*Math.sqrt(1+s-r-f);this._w=(i-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-r-s);this._w=(o-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+o*s+n*c-i*l,this._y=n*u+o*l+i*s-r*c,this._z=i*u+o*c+r*l-n*s,this._w=o*u-r*s-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+i*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=i,this;const l=1-s*s;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,o=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*o,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*o,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),u=2*(s*t-i*n),f=2*(i*r-o*t);return this.x=t+l*c+o*f-s*u,this.y=r+l*u+s*c-i*f,this.z=n+l*f+i*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-i*s,this.y=i*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new W,ol=new vr;class Bi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=i.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(i,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rr.copy(r.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const n=e.children;for(let i=0,o=n.length;i<o;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Cr.subVectors(this.max,tr),li.subVectors(e.a,tr),ci.subVectors(e.b,tr),ui.subVectors(e.c,tr),An.subVectors(ci,li),wn.subVectors(ui,ci),kn.subVectors(li,ui);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-kn.z,kn.y,An.z,0,-An.x,wn.z,0,-wn.x,kn.z,0,-kn.x,-An.y,An.x,0,-wn.y,wn.x,0,-kn.y,kn.x,0];return!Ka(t,li,ci,ui,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,li,ci,ui,Cr))?!1:(Lr.crossVectors(An,wn),t=[Lr.x,Lr.y,Lr.z],Ka(t,li,ci,ui,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new W,new W,new W,new W,new W,new W,new W,new W],en=new W,Rr=new Bi,li=new W,ci=new W,ui=new W,An=new W,wn=new W,kn=new W,tr=new W,Cr=new W,Lr=new W,Hn=new W;function Ka(a,e,t,r,n){for(let i=0,o=a.length-3;i<=o;i+=3){Hn.fromArray(a,i);const s=n.x*Math.abs(Hn.x)+n.y*Math.abs(Hn.y)+n.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),u=r.dot(Hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const qf=new Bi,nr=new W,Za=new W;class Gi{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):qf.setFromPoints(e).getCenter(r);let n=0;for(let i=0,o=e.length;i<o;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(nr,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Za)),this.expandByPoint(nr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new W,Ja=new W,Pr=new W,Rn=new W,Qa=new W,Ur=new W,$a=new W;class js{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Ja.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Ja);const i=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),s=Rn.dot(this.direction),l=-Rn.dot(Pr),c=Rn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-s,h=o*s-l,g=i*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=i,f=Math.max(0,-(o*h+s)),d=-f*f+h*(h+2*l)+c;else h=-i,f=Math.max(0,-(o*h+s)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*i+s)),h=f>0?-i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-l),i),d=h*(h+2*l)+c):(f=Math.max(0,-(o*i+s)),h=f>0?i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c);else h=o>0?-i:i,f=Math.max(0,-(o*h+s)),d=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Ja).addScaledVector(Pr,h),d}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const r=hn.dot(this.direction),n=hn.dot(hn)-r*r,i=e.radius*e.radius;if(n>i)return null;const o=Math.sqrt(i-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),r>o||i>n||((i>r||isNaN(r))&&(r=i),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,r,n,i){Qa.subVectors(t,e),Ur.subVectors(r,e),$a.crossVectors(Qa,Ur);let o=this.direction.dot($a),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Rn.subVectors(this.origin,e);const l=s*this.direction.dot(Ur.crossVectors(Rn,Ur));if(l<0)return null;const c=s*this.direction.dot(Qa.cross(Rn));if(c<0||l+c>o)return null;const u=-s*Rn.dot($a);return u<0?null:this.at(u/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,r,n,i,o,s,l,c,u,f,h,d,g,_,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,o,s,l,c,u,f,h,d,g,_,p)}set(e,t,r,n,i,o,s,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=o,m[9]=s,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/fi.setFromMatrixColumn(e,0).length(),i=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=o*u,d=o*f,g=s*u,_=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-s*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*s,t[4]=g*s-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=d*s-g,t[6]=_+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*s,t[4]=-o*f,t[8]=g+d*s,t[1]=d+g*s,t[5]=o*u,t[9]=_-h*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=s*u,_=s*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=s*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,Kf)}lookAt(e,t,r){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Cn.crossVectors(r,zt),Cn.lengthSq()===0&&(Math.abs(r.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Cn.crossVectors(r,zt)),Cn.normalize(),Dr.crossVectors(zt,Cn),n[0]=Cn.x,n[4]=Dr.x,n[8]=zt.x,n[1]=Cn.y,n[5]=Dr.y,n[9]=zt.y,n[2]=Cn.z,n[6]=Dr.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],d=r[13],g=r[2],_=r[6],p=r[10],m=r[14],y=r[3],x=r[7],M=r[11],C=r[15],w=n[0],E=n[4],N=n[8],q=n[12],v=n[1],R=n[5],U=n[9],k=n[13],b=n[2],H=n[6],B=n[10],Z=n[14],K=n[3],V=n[7],z=n[11],L=n[15];return i[0]=o*w+s*v+l*b+c*K,i[4]=o*E+s*R+l*H+c*V,i[8]=o*N+s*U+l*B+c*z,i[12]=o*q+s*k+l*Z+c*L,i[1]=u*w+f*v+h*b+d*K,i[5]=u*E+f*R+h*H+d*V,i[9]=u*N+f*U+h*B+d*z,i[13]=u*q+f*k+h*Z+d*L,i[2]=g*w+_*v+p*b+m*K,i[6]=g*E+_*R+p*H+m*V,i[10]=g*N+_*U+p*B+m*z,i[14]=g*q+_*k+p*Z+m*L,i[3]=y*w+x*v+M*b+C*K,i[7]=y*E+x*R+M*H+C*V,i[11]=y*N+x*U+M*B+C*z,i[15]=y*q+x*k+M*Z+C*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+i*l*f-n*c*f-i*s*h+r*c*h+n*s*d-r*l*d)+_*(+t*l*d-t*c*h+i*o*h-n*o*d+n*c*u-i*l*u)+p*(+t*c*f-t*s*d-i*o*f+r*o*d+i*s*u-r*c*u)+m*(-n*s*u-t*l*f+t*s*h+n*o*f-r*o*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=f*p*c-_*h*c+_*l*d-s*p*d-f*l*m+s*h*m,x=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,M=u*_*c-g*f*c+g*s*d-o*_*d-u*s*m+o*f*m,C=g*f*l-u*_*l-g*s*h+o*_*h+u*s*p-o*f*p,w=t*y+r*x+n*M+i*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(_*h*i-f*p*i-_*n*d+r*p*d+f*n*m-r*h*m)*E,e[2]=(s*p*i-_*l*i+_*n*c-r*p*c-s*n*m+r*l*m)*E,e[3]=(f*l*i-s*h*i-f*n*c+r*h*c+s*n*d-r*l*d)*E,e[4]=x*E,e[5]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*m+t*h*m)*E,e[6]=(g*l*i-o*p*i-g*n*c+t*p*c+o*n*m-t*l*m)*E,e[7]=(o*h*i-u*l*i+u*n*c-t*h*c-o*n*d+t*l*d)*E,e[8]=M*E,e[9]=(g*f*i-u*_*i-g*r*d+t*_*d+u*r*m-t*f*m)*E,e[10]=(o*_*i-g*s*i+g*r*c-t*_*c-o*r*m+t*s*m)*E,e[11]=(u*s*i-o*f*i-u*r*c+t*f*c+o*r*d-t*s*d)*E,e[12]=C*E,e[13]=(u*_*n-g*f*n+g*r*h-t*_*h-u*r*p+t*f*p)*E,e[14]=(g*s*n-o*_*n-g*r*l+t*_*l+o*r*p-t*s*p)*E,e[15]=(o*f*n-u*s*n+u*r*l-t*f*l-o*r*h+t*s*h)*E,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,o=e.x,s=e.y,l=e.z,c=i*o,u=i*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+r,u*l-n*o,0,c*l-n*s,u*l+n*o,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,o){return this.set(1,r,i,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,o=t._y,s=t._z,l=t._w,c=i+i,u=o+o,f=s+s,h=i*c,d=i*u,g=i*f,_=o*u,p=o*f,m=s*f,y=l*c,x=l*u,M=l*f,C=r.x,w=r.y,E=r.z;return n[0]=(1-(_+m))*C,n[1]=(d+M)*C,n[2]=(g-x)*C,n[3]=0,n[4]=(d-M)*w,n[5]=(1-(h+m))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(g+x)*E,n[9]=(p-y)*E,n[10]=(1-(h+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=fi.set(n[0],n[1],n[2]).length();const o=fi.set(n[4],n[5],n[6]).length(),s=fi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],tn.copy(this);const c=1/i,u=1/o,f=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),r.x=i,r.y=o,r.z=s,this}makePerspective(e,t,r,n,i,o,s=vn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),f=(t+e)/(t-e),h=(r+n)/(r-n);let d,g;if(s===vn)d=-(o+i)/(o-i),g=-2*o*i/(o-i);else if(s===pa)d=-o/(o-i),g=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,o,s=vn){const l=this.elements,c=1/(t-e),u=1/(r-n),f=1/(o-i),h=(t+e)*c,d=(r+n)*u;let g,_;if(s===vn)g=(o+i)*f,_=-2*f;else if(s===pa)g=i*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const fi=new W,tn=new st,jf=new W(0,0,0),Kf=new W(1,1,1),Cn=new W,Dr=new W,zt=new W,ll=new st,cl=new vr;class Sa{constructor(e=0,t=0,r=0,n=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zf=0;const ul=new W,hi=new vr,dn=new st,Ir=new W,ir=new W,Jf=new W,Qf=new vr,fl=new W(1,0,0),hl=new W(0,1,0),dl=new W(0,0,1),$f={type:"added"},eh={type:"removed"};class ft extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new W,t=new Sa,r=new vr,n=new W(1,1,1);function i(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new st},normalMatrix:{value:new Ke}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ir.copy(e):Ir.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(ir,Ir,this.up):dn.lookAt(Ir,ir,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),hi.setFromRotationMatrix(dn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,o=n.length;i<o;i++){const s=n[i];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(i(e.materials,this.material[l]));n.material=s}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(i(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}ft.DEFAULT_UP=new W(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new W,pn=new W,es=new W,mn=new W,di=new W,pi=new W,pl=new W,ts=new W,ns=new W,is=new W;class on{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),nn.subVectors(e,t),n.cross(nn);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){nn.subVectors(n,t),pn.subVectors(r,t),es.subVectors(e,t);const o=nn.dot(nn),s=nn.dot(pn),l=nn.dot(es),c=pn.dot(pn),u=pn.dot(es),f=o*c-s*s;if(f===0)return i.set(0,0,0),null;const h=1/f,d=(c*l-s*u)*h,g=(o*u-s*l)*h;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,r,n,i,o,s,l){return this.getBarycoord(e,t,r,n,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(s,mn.z),l)}static isFrontFacing(e,t,r,n){return nn.subVectors(r,t),pn.subVectors(e,t),nn.cross(pn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),nn.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return on.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let o,s;di.subVectors(n,r),pi.subVectors(i,r),ts.subVectors(e,r);const l=di.dot(ts),c=pi.dot(ts);if(l<=0&&c<=0)return t.copy(r);ns.subVectors(e,n);const u=di.dot(ns),f=pi.dot(ns);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(r).addScaledVector(di,o);is.subVectors(e,i);const d=di.dot(is),g=pi.dot(is);if(g>=0&&d<=g)return t.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(r).addScaledVector(pi,s);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return pl.subVectors(i,n),s=(f-u)/(f-u+(d-g)),t.copy(n).addScaledVector(pl,s);const m=1/(p+_+h);return o=_*m,s=h*m,t.copy(r).addScaledVector(di,o).addScaledVector(pi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function rs(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ze{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=tt.workingColorSpace){if(e=qs(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,o=2*r-i;this.r=rs(o,i,e+1/3),this.g=rs(o,i,e),this.b=rs(o,i,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=gt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const r=Oc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return tt.fromWorkingColorSpace(Et.copy(this),e),Math.round(xt(Et.r*255,0,255))*65536+Math.round(xt(Et.g*255,0,255))*256+Math.round(xt(Et.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Et.copy(this),t);const r=Et.r,n=Et.g,i=Et.b,o=Math.max(r,n,i),s=Math.min(r,n,i);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case r:l=(n-i)/f+(n<i?6:0);break;case n:l=(i-r)/f+2;break;case i:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=gt){tt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,r=Et.g,n=Et.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Fr);const r=dr(Ln.h,Fr.h,t),n=dr(Ln.s,Fr.s,t),i=dr(Ln.l,Fr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ze;Ze.NAMES=Oc;let th=0;class ii extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Ci,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ts,this.blendDst=bs,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(r.blending=this.blending),this.side!==Sn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ts&&(r.blendSrc=this.blendSrc),this.blendDst!==bs&&(r.blendDst=this.blendDst),this.blendEquation!==jn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(r.stencilFail=this.stencilFail),this.stencilZFail!==si&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const o=[];for(const s in i){const l=i[s];delete l.metadata,o.push(l)}return o}if(t){const i=n(e.textures),o=n(e.images);i.length>0&&(r.textures=i),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zi extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new W,Nr=new ke;class At{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ls,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ei("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=sn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qe(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),r=Qe(r,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),r=Qe(r,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ls&&(e.usage=this.usage),e}}class Bc extends At{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gc extends At{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yt extends At{constructor(e,t,r){super(new Float32Array(e),t,r)}}let nh=0;const Vt=new st,as=new ft,mi=new W,kt=new Bi,rr=new Bi,mt=new W;class wt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uc(e)?Gc:Bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Ke().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,r){return Vt.makeTranslation(e,t,r),this.applyMatrix4(Vt),this}scale(e,t,r){return Vt.makeScale(e,t,r),this.applyMatrix4(Vt),this}lookAt(e){return as.lookAt(e),as.updateMatrix(),this.applyMatrix4(as.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];kt.setFromBufferAttribute(i),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];rr.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(kt.min,rr.min),kt.expandByPoint(mt),mt.addVectors(kt.max,rr.max),kt.expandByPoint(mt)):(kt.expandByPoint(rr.min),kt.expandByPoint(rr.max))}kt.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)mt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(mt));if(t)for(let i=0,o=t.length;i<o;i++){const s=t[i],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)mt.fromBufferAttribute(s,c),l&&(mi.fromBufferAttribute(e,c),mt.add(mi)),n=Math.max(n,r.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let v=0;v<s;v++)c[v]=new W,u[v]=new W;const f=new W,h=new W,d=new W,g=new ke,_=new ke,p=new ke,m=new W,y=new W;function x(v,R,U){f.fromArray(n,v*3),h.fromArray(n,R*3),d.fromArray(n,U*3),g.fromArray(o,v*2),_.fromArray(o,R*2),p.fromArray(o,U*2),h.sub(f),d.sub(f),_.sub(g),p.sub(g);const k=1/(_.x*p.y-p.x*_.y);isFinite(k)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(k),y.copy(d).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(k),c[v].add(m),c[R].add(m),c[U].add(m),u[v].add(y),u[R].add(y),u[U].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:r.length}]);for(let v=0,R=M.length;v<R;++v){const U=M[v],k=U.start,b=U.count;for(let H=k,B=k+b;H<B;H+=3)x(r[H+0],r[H+1],r[H+2])}const C=new W,w=new W,E=new W,N=new W;function q(v){E.fromArray(i,v*3),N.copy(E);const R=c[v];C.copy(R),C.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(N,R);const k=w.dot(u[v])<0?-1:1;l[v*4]=C.x,l[v*4+1]=C.y,l[v*4+2]=C.z,l[v*4+3]=k}for(let v=0,R=M.length;v<R;++v){const U=M[v],k=U.start,b=U.count;for(let H=k,B=k+b;H<B;H+=3)q(r[H+0]),q(r[H+1]),q(r[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,d=r.count;h<d;h++)r.setXYZ(h,0,0,0);const n=new W,i=new W,o=new W,s=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),s.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,p),s.add(u),l.add(u),c.add(u),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){s.isInterleavedBufferAttribute?d=l[_]*s.data.stride+s.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new At(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const i=this.morphAttributes;for(const s in i){const l=[],c=i[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,r);l.push(d)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new st,Vn=new js,Or=new Gi,gl=new W,gi=new W,_i=new W,vi=new W,ss=new W,Br=new W,Gr=new ke,zr=new ke,kr=new ke,_l=new W,vl=new W,xl=new W,Hr=new W,Vr=new W;class Pt extends ft{constructor(e=new wt,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(i&&s){Br.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=s[l],f=i[l];u!==0&&(ss.fromBufferAttribute(f,e),o?Br.addScaledVector(ss,u):Br.addScaledVector(ss.sub(t),u))}t.add(Br)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Or.copy(r.boundingSphere),Or.applyMatrix4(i),Vn.copy(e.ray).recast(e.near),!(Or.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Or,gl)===null||Vn.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(i).invert(),Vn.copy(e.ray).applyMatrix4(ml),!(r.boundingBox!==null&&Vn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,o=this.material,s=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,d=i.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(s.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,C=x;M<C;M+=3){const w=s.getX(M),E=s.getX(M+1),N=s.getX(M+2);n=Wr(this,m,e,r,c,u,f,w,E,N),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=s.getX(p),x=s.getX(p+1),M=s.getX(p+2);n=Wr(this,o,e,r,c,u,f,y,x,M),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,C=x;M<C;M+=3){const w=M,E=M+1,N=M+2;n=Wr(this,m,e,r,c,u,f,w,E,N),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,x=p+1,M=p+2;n=Wr(this,o,e,r,c,u,f,y,x,M),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function ih(a,e,t,r,n,i,o,s){let l;if(e.side===Ut?l=r.intersectTriangle(o,i,n,!0,s):l=r.intersectTriangle(n,i,o,e.side===Sn,s),l===null)return null;Vr.copy(s),Vr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:a}}function Wr(a,e,t,r,n,i,o,s,l,c){a.getVertexPosition(s,gi),a.getVertexPosition(l,_i),a.getVertexPosition(c,vi);const u=ih(a,e,t,r,gi,_i,vi,Hr);if(u){n&&(Gr.fromBufferAttribute(n,s),zr.fromBufferAttribute(n,l),kr.fromBufferAttribute(n,c),u.uv=on.getInterpolation(Hr,gi,_i,vi,Gr,zr,kr,new ke)),i&&(Gr.fromBufferAttribute(i,s),zr.fromBufferAttribute(i,l),kr.fromBufferAttribute(i,c),u.uv1=on.getInterpolation(Hr,gi,_i,vi,Gr,zr,kr,new ke),u.uv2=u.uv1),o&&(_l.fromBufferAttribute(o,s),vl.fromBufferAttribute(o,l),xl.fromBufferAttribute(o,c),u.normal=on.getInterpolation(Hr,gi,_i,vi,_l,vl,xl,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new W,materialIndex:0};on.getNormal(gi,_i,vi,f.normal),u.face=f}return u}class xr extends wt{constructor(e=1,t=1,r=1,n=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:o};const s=this;n=Math.floor(n),i=Math.floor(i),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,r,t,e,o,i,0),g("z","y","x",1,-1,r,t,-e,o,i,1),g("x","z","y",1,1,e,r,t,n,o,2),g("x","z","y",1,-1,e,r,-t,n,o,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function g(_,p,m,y,x,M,C,w,E,N,q){const v=M/E,R=C/N,U=M/2,k=C/2,b=w/2,H=E+1,B=N+1;let Z=0,K=0;const V=new W;for(let z=0;z<B;z++){const L=z*R-k;for(let G=0;G<H;G++){const X=G*v-U;V[_]=X*y,V[p]=L*x,V[m]=b,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[m]=w>0?1:-1,u.push(V.x,V.y,V.z),f.push(G/E),f.push(1-z/N),Z+=1}}for(let z=0;z<N;z++)for(let L=0;L<E;L++){const G=h+L+H*z,X=h+L+H*(z+1),F=h+(L+1)+H*(z+1),O=h+(L+1)+H*z;l.push(G,X,O),l.push(X,F,O),K+=6}s.addGroup(d,K,q),d+=K,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Ct(a){const e={};for(let t=0;t<a.length;t++){const r=Ni(a[t]);for(const n in r)e[n]=r[n]}return e}function rh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function zc(a){return a.getRenderTarget()===null?a.outputColorSpace:tt.workingColorSpace}const kc={clone:Ni,merge:Ct};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Hc extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new W,Sl=new ke,Ml=new ke;class Ht extends Hc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,Ml),t.subVectors(Ml,Sl)}setViewOffset(e,t,r,n,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;i+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(i+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,Si=1;class oh extends ft{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ht(xi,Si,e,t);n.layers=this.layers,this.add(n);const i=new Ht(xi,Si,e,t);i.layers=this.layers,this.add(i);const o=new Ht(xi,Si,e,t);o.layers=this.layers,this.add(o);const s=new Ht(xi,Si,e,t);s.layers=this.layers,this.add(s);const l=new Ht(xi,Si,e,t);l.layers=this.layers,this.add(l);const c=new Ht(xi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,o,s,l]=t;for(const c of t)this.remove(c);if(e===vn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,o,s,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Vc extends bt{constructor(e,t,r,n,i,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,r,n,i,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lh extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(ei("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$n?gt:Xt),this.texture=new Vc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new xr(5,5,5),i=new On({name:"CubemapFromEquirect",uniforms:Ni(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ut,blending:In});i.uniforms.tEquirect.value=t;const o=new Pt(n,i),s=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Tt),new oh(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(i)}}const os=new W,ch=new W,uh=new Ke;class Yn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=os.subVectors(r,t).cross(ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(os),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||uh.getNormalMatrix(e),n=this.coplanarPoint(os).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Gi,Xr=new W;class Ks{constructor(e=new Yn,t=new Yn,r=new Yn,n=new Yn,i=new Yn,o=new Yn){this.planes=[e,t,r,n,i,o]}set(e,t,r,n,i,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(i),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=vn){const r=this.planes,n=e.elements,i=n[0],o=n[1],s=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],y=n[13],x=n[14],M=n[15];if(r[0].setComponents(l-i,h-c,p-d,M-m).normalize(),r[1].setComponents(l+i,h+c,p+d,M+m).normalize(),r[2].setComponents(l+o,h+u,p+g,M+y).normalize(),r[3].setComponents(l-o,h-u,p-g,M-y).normalize(),r[4].setComponents(l-s,h-f,p-_,M-x).normalize(),t===vn)r[5].setComponents(l+s,h+f,p+_,M+x).normalize();else if(t===pa)r[5].setComponents(s,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Xr.x=n.normal.x>0?e.max.x:e.min.x,Xr.y=n.normal.y>0?e.max.y:e.min.y,Xr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wc(){let a=null,e=!1,t=null,r=null;function n(i,o){t(i,o),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function fh(a,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=a.createBuffer();a.bindBuffer(u,g),a.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=a.SHORT;else if(f instanceof Uint32Array)_=a.UNSIGNED_INT;else if(f instanceof Int32Array)_=a.INT;else if(f instanceof Int8Array)_=a.BYTE;else if(f instanceof Uint8Array)_=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function i(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(a.bindBuffer(f,c),d.count===-1&&g.length===0&&a.bufferSubData(f,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?a.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):a.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?a.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):a.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(a.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=r.get(c);(!h||h.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);if(f===void 0)r.set(c,n(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,c,u),f.version=c.version}}return{get:o,remove:s,update:l}}class yn extends wt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,u=l+1,f=e/s,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let x=0;x<c;x++){const M=x*f-i;g.push(M,-y,0),_.push(0,0,1),p.push(x/s),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<s;y++){const x=y+c*m,M=y+c*(m+1),C=y+1+c*(m+1),w=y+1+c*m;d.push(x,M,w),d.push(M,C,w)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.widthSegments,e.heightSegments)}}var hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ah=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Oh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$h=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ed=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:hh,alphahash_pars_fragment:dh,alphamap_fragment:ph,alphamap_pars_fragment:mh,alphatest_fragment:gh,alphatest_pars_fragment:_h,aomap_fragment:vh,aomap_pars_fragment:xh,batching_pars_vertex:Sh,batching_vertex:Mh,begin_vertex:yh,beginnormal_vertex:Eh,bsdfs:Th,iridescence_fragment:bh,bumpmap_pars_fragment:Ah,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ch,clipping_planes_vertex:Lh,color_fragment:Ph,color_pars_fragment:Uh,color_pars_vertex:Dh,color_vertex:Ih,common:Fh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Oh,displacementmap_pars_vertex:Bh,displacementmap_vertex:Gh,emissivemap_fragment:zh,emissivemap_pars_fragment:kh,colorspace_fragment:Hh,colorspace_pars_fragment:Vh,envmap_fragment:Wh,envmap_common_pars_fragment:Xh,envmap_pars_fragment:Yh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:ad,envmap_vertex:jh,fog_vertex:Kh,fog_pars_vertex:Zh,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:$h,lightmap_fragment:ed,lightmap_pars_fragment:td,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:rd,lights_toon_fragment:sd,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:ud,lights_physical_pars_fragment:fd,lights_fragment_begin:hd,lights_fragment_maps:dd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:vd,map_fragment:xd,map_pars_fragment:Sd,map_particle_fragment:Md,map_particle_pars_fragment:yd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Td,morphcolor_vertex:bd,morphnormal_vertex:Ad,morphtarget_pars_vertex:wd,morphtarget_vertex:Rd,normal_fragment_begin:Cd,normal_fragment_maps:Ld,normal_pars_fragment:Pd,normal_pars_vertex:Ud,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:Gd,packing:zd,premultiplied_alpha_fragment:kd,project_vertex:Hd,dithering_fragment:Vd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:jd,shadowmap_vertex:Kd,shadowmask_pars_fragment:Zd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:$d,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:ap,transmission_pars_fragment:sp,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:up,background_vert:fp,background_frag:hp,backgroundCube_vert:dp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:vp,distanceRGBA_vert:xp,distanceRGBA_frag:Sp,equirect_vert:Mp,equirect_frag:yp,linedashed_vert:Ep,linedashed_frag:Tp,meshbasic_vert:bp,meshbasic_frag:Ap,meshlambert_vert:wp,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Lp,meshnormal_vert:Pp,meshnormal_frag:Up,meshphong_vert:Dp,meshphong_frag:Ip,meshphysical_vert:Fp,meshphysical_frag:Np,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:Gp,points_frag:zp,shadow_vert:kp,shadow_frag:Hp,sprite_vert:Vp,sprite_frag:Wp},be={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},un={basic:{uniforms:Ct([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ct([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ct([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ct([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ct([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ct([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ct([be.points,be.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ct([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ct([be.common,be.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ct([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ct([be.sprite,be.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ct([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ct([be.lights,be.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};un.physical={uniforms:Ct([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Yr={r:0,b:0,g:0};function Xp(a,e,t,r,n,i,o){const s=new Ze(0);let l=i===!0?0:1,c,u,f=null,h=0,d=null;function g(p,m){let y=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(s,l):x&&x.isColor&&(_(x,1),y=!0);const M=a.xr.getEnvironmentBlendMode();M==="additive"?r.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===va)?(u===void 0&&(u=new Pt(new xr(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ni(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=tt.getTransfer(x.colorSpace)!==at,(f!==x||h!==x.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Pt(new yn(2,2),new On({name:"BackgroundMaterial",uniforms:Ni(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Yr,zc(a)),r.buffers.color.setClear(Yr.r,Yr.g,Yr.b,m,o)}return{getClearColor:function(){return s},setClearColor:function(p,m=1){s.set(p),l=m,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(s,l)},render:g}}function Yp(a,e,t,r){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||i!==null,s={},l=p(null);let c=l,u=!1;function f(b,H,B,Z,K){let V=!1;if(o){const z=_(Z,B,H);c!==z&&(c=z,d(c.object)),V=m(b,Z,B,K),V&&y(b,Z,B,K)}else{const z=H.wireframe===!0;(c.geometry!==Z.id||c.program!==B.id||c.wireframe!==z)&&(c.geometry=Z.id,c.program=B.id,c.wireframe=z,V=!0)}K!==null&&t.update(K,a.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,N(b,H,B,Z),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return r.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function d(b){return r.isWebGL2?a.bindVertexArray(b):i.bindVertexArrayOES(b)}function g(b){return r.isWebGL2?a.deleteVertexArray(b):i.deleteVertexArrayOES(b)}function _(b,H,B){const Z=B.wireframe===!0;let K=s[b.id];K===void 0&&(K={},s[b.id]=K);let V=K[H.id];V===void 0&&(V={},K[H.id]=V);let z=V[Z];return z===void 0&&(z=p(h()),V[Z]=z),z}function p(b){const H=[],B=[],Z=[];for(let K=0;K<n;K++)H[K]=0,B[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:Z,object:b,attributes:{},index:null}}function m(b,H,B,Z){const K=c.attributes,V=H.attributes;let z=0;const L=B.getAttributes();for(const G in L)if(L[G].location>=0){const F=K[G];let O=V[G];if(O===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),F===void 0||F.attribute!==O||O&&F.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==Z}function y(b,H,B,Z){const K={},V=H.attributes;let z=0;const L=B.getAttributes();for(const G in L)if(L[G].location>=0){let F=V[G];F===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(F=b.instanceColor));const O={};O.attribute=F,F&&F.data&&(O.data=F.data),K[G]=O,z++}c.attributes=K,c.attributesNum=z,c.index=Z}function x(){const b=c.newAttributes;for(let H=0,B=b.length;H<B;H++)b[H]=0}function M(b){C(b,0)}function C(b,H){const B=c.newAttributes,Z=c.enabledAttributes,K=c.attributeDivisors;B[b]=1,Z[b]===0&&(a.enableVertexAttribArray(b),Z[b]=1),K[b]!==H&&((r.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,H),K[b]=H)}function w(){const b=c.newAttributes,H=c.enabledAttributes;for(let B=0,Z=H.length;B<Z;B++)H[B]!==b[B]&&(a.disableVertexAttribArray(B),H[B]=0)}function E(b,H,B,Z,K,V,z){z===!0?a.vertexAttribIPointer(b,H,B,K,V):a.vertexAttribPointer(b,H,B,Z,K,V)}function N(b,H,B,Z){if(r.isWebGL2===!1&&(b.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=Z.attributes,V=B.getAttributes(),z=H.defaultAttributeValues;for(const L in V){const G=V[L];if(G.location>=0){let X=K[L];if(X===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){const F=X.normalized,O=X.itemSize,Q=t.get(X);if(Q===void 0)continue;const J=Q.buffer,ee=Q.type,se=Q.bytesPerElement,ye=r.isWebGL2===!0&&(ee===a.INT||ee===a.UNSIGNED_INT||X.gpuType===yc);if(X.isInterleavedBufferAttribute){const le=X.data,I=le.stride,Ne=X.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<G.locationSize;ge++)C(G.location+ge,le.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<G.locationSize;ge++)M(G.location+ge);a.bindBuffer(a.ARRAY_BUFFER,J);for(let ge=0;ge<G.locationSize;ge++)E(G.location+ge,O/G.locationSize,ee,F,I*se,(Ne+O/G.locationSize*ge)*se,ye)}else{if(X.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)C(G.location+le,X.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<G.locationSize;le++)M(G.location+le);a.bindBuffer(a.ARRAY_BUFFER,J);for(let le=0;le<G.locationSize;le++)E(G.location+le,O/G.locationSize,ee,F,O*se,O/G.locationSize*le*se,ye)}}else if(z!==void 0){const F=z[L];if(F!==void 0)switch(F.length){case 2:a.vertexAttrib2fv(G.location,F);break;case 3:a.vertexAttrib3fv(G.location,F);break;case 4:a.vertexAttrib4fv(G.location,F);break;default:a.vertexAttrib1fv(G.location,F)}}}}w()}function q(){U();for(const b in s){const H=s[b];for(const B in H){const Z=H[B];for(const K in Z)g(Z[K].object),delete Z[K];delete H[B]}delete s[b]}}function v(b){if(s[b.id]===void 0)return;const H=s[b.id];for(const B in H){const Z=H[B];for(const K in Z)g(Z[K].object),delete Z[K];delete H[B]}delete s[b.id]}function R(b){for(const H in s){const B=s[H];if(B[b.id]===void 0)continue;const Z=B[b.id];for(const K in Z)g(Z[K].object),delete Z[K];delete B[b.id]}}function U(){k(),u=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:k,dispose:q,releaseStatesOfGeometry:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function qp(a,e,t,r){const n=r.isWebGL2;let i;function o(u){i=u}function s(u,f){a.drawArrays(i,u,f),t.update(f,i,1)}function l(u,f,h){if(h===0)return;let d,g;if(n)d=a,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](i,u,f,h),t.update(f,i,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(i,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,i,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function jp(a,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=i(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),p=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),m=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),C=x&&M,w=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:w}}function Kp(a){const e=this;let t=null,r=0,n=!1,i=!1;const o=new Yn,s=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=a.get(f);if(!n||g===null||g.length===0||i&&!p)i?u(null):c();else{const y=i?0:r,x=y*4;let M=m.clippingState||null;l.value=M,M=u(g,h,x,d);for(let C=0;C!==x;++C)M[C]=t[C];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(y,s),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Zp(a){let e=new WeakMap;function t(o,s){return s===As?o.mapping=Di:s===ws&&(o.mapping=Ii),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===As||s===ws)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lh(l.height);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class Xc extends Hc{constructor(e=-1,t=1,r=1,n=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,o=i+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(i,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,yl=[.125,.215,.35,.446,.526,.582],Kn=20,ls=new Xc,El=new Ze;let cs=null,us=0,fs=0;const qn=(1+Math.sqrt(5))/2,Mi=1/qn,Tl=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,qn,Mi),new W(0,qn,-Mi),new W(Mi,0,qn),new W(-Mi,0,qn),new W(qn,Mi,0),new W(-qn,Mi,0)];class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){cs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cs,us,fs),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:gr,format:an,colorSpace:Mn,depthBuffer:!1},n=Al(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(i)),this._blurMaterial=Qp(i,e,t)}return n}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,r,n){const s=new Ht(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(El),u.toneMapping=Fn,u.autoClear=!1;const d=new zi({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new Pt(new xr,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(El),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(s.up.set(0,l[m],0),s.lookAt(c[m],0,0)):y===1?(s.up.set(0,0,l[m]),s.lookAt(0,c[m],0)):(s.up.set(0,l[m],0),s.lookAt(0,0,c[m]));const x=this._cubeSize;qr(n,y*x,m>2?x:0,x,x),u.setRenderTarget(n),_&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Di||e.mapping===Ii;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const i=n?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],i),s=i.uniforms;s.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,ls)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Tl[(n-1)%Tl.length];this._blur(e,n-1,n,i,o)}t.autoClear=r}_blur(e,t,r,n,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",i),this._halfBlur(o,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pt(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Kn-1),_=i/g,p=isFinite(i)?1+Math.floor(u*_):Kn;p>Kn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const m=[];let y=0;for(let E=0;E<Kn;++E){const N=E/_,q=Math.exp(-N*N/2);m.push(q),E===0?y+=q:E<p&&(y+=2*q)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-r;const M=this._sizeLods[n],C=3*M*(n>x-wi?n-x+wi:0),w=4*(this._cubeSize-M);qr(t,C,w,3*M,2*M),l.setRenderTarget(t),l.render(f,ls)}}function Jp(a){const e=[],t=[],r=[];let n=a;const i=a-wi+1+yl.length;for(let o=0;o<i;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>a-wi?l=yl[o-a+wi-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),x=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,N=w>2?0:-1,q=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];y.set(q,_*g*w),x.set(h,p*g*w);const v=[w,w,w,w,w,w];M.set(v,m*g*w)}const C=new wt;C.setAttribute("position",new At(y,_)),C.setAttribute("uv",new At(x,p)),C.setAttribute("faceIndex",new At(M,m)),e.push(C),n>wi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Al(a,e,t){const r=new ni(a,e,t);return r.texture.mapping=va,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Qp(a,e,t){const r=new Float32Array(Kn),n=new W(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function wl(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Rl(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Zs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(a){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===As||l===ws,u=l===Di||l===Ii;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new bl(a)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new bl(a));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",i),h.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function em(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function tm(a,e,t,r){const n={},i=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete n[h.id];const d=i.get(h);d&&(e.remove(d),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],a.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],a.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){const C=y[x+0],w=y[x+1],E=y[x+2];h.push(C,w,w,E,E,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const C=x+0,w=x+1,E=x+2;h.push(C,w,w,E,E,C)}}else return;const p=new(Uc(h)?Gc:Bc)(h,1);p.version=_;const m=i.get(f);m&&e.remove(m),i.set(f,p)}function u(f){const h=i.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return i.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function nm(a,e,t,r){const n=r.isWebGL2;let i;function o(d){i=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,g){a.drawElements(i,g,s,d*l),t.update(g,i,1)}function f(d,g,_){if(_===0)return;let p,m;if(n)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](i,g,s,d*l,_),t.update(g,i,_)}function h(d,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(i,g,0,s,d,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,i,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function im(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(i/3);break;case a.LINES:t.lines+=s*(i/2);break;case a.LINE_STRIP:t.lines+=s*(i-1);break;case a.LINE_LOOP:t.lines+=s*i;break;case a.POINTS:t.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function rm(a,e){return a[0]-e[0]}function am(a,e){return Math.abs(e[1])-Math.abs(a[1])}function sm(a,e,t){const r={},n=new Float32Array(8),i=new WeakMap,o=new it,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=i.get(u);if(p===void 0||p.count!==_){let H=function(){k.dispose(),i.delete(u),u.removeEventListener("dispose",H)};var d=H;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let q=0;x===!0&&(q=1),M===!0&&(q=2),C===!0&&(q=3);let v=u.attributes.position.count*q,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const U=new Float32Array(v*R*4*_),k=new Fc(U,v,R,_);k.type=_n,k.needsUpdate=!0;const b=q*4;for(let B=0;B<_;B++){const Z=w[B],K=E[B],V=N[B],z=v*R*4*B;for(let L=0;L<Z.count;L++){const G=L*b;x===!0&&(o.fromBufferAttribute(Z,L),U[z+G+0]=o.x,U[z+G+1]=o.y,U[z+G+2]=o.z,U[z+G+3]=0),M===!0&&(o.fromBufferAttribute(K,L),U[z+G+4]=o.x,U[z+G+5]=o.y,U[z+G+6]=o.z,U[z+G+7]=0),C===!0&&(o.fromBufferAttribute(V,L),U[z+G+8]=o.x,U[z+G+9]=o.y,U[z+G+10]=o.z,U[z+G+11]=V.itemSize===4?o.w:1)}}p={count:_,texture:k,size:new ke(v,R)},i.set(u,p),u.addEventListener("dispose",H)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const y=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=r[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];r[u.id]=_}for(let M=0;M<g;M++){const C=_[M];C[0]=M,C[1]=h[M]}_.sort(am);for(let M=0;M<8;M++)M<g&&_[M][1]?(s[M][0]=_[M][0],s[M][1]=_[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(rm);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const C=s[M],w=C[0],E=C[1];w!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+M)!==p[w]&&u.setAttribute("morphTarget"+M,p[w]),m&&u.getAttribute("morphNormal"+M)!==m[w]&&u.setAttribute("morphNormal"+M,m[w]),n[M]=E,y+=E):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),n[M]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(a,"morphTargetBaseInfluence",x),f.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:l}}function om(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:o}}class Yc extends bt{constructor(e,t,r,n,i,o,s,l,c,u){if(u=u!==void 0?u:Qn,u!==Qn&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Qn&&(r=Dn),r===void 0&&u===Fi&&(r=Jn),super(null,n,i,o,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qc=new bt,jc=new Yc(1,1);jc.compareFunction=Pc;const Kc=new Fc,Zc=new Yf,Jc=new Vc,Cl=[],Ll=[],Pl=new Float32Array(16),Ul=new Float32Array(9),Dl=new Float32Array(4);function ki(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=Cl[n];if(i===void 0&&(i=new Float32Array(n),Cl[n]=i),e!==0){r.toArray(i,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(i,s)}return i}function ht(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function dt(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function Ma(a,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function lm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function cm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2fv(this.addr,e),dt(t,e)}}function um(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;a.uniform3fv(this.addr,e),dt(t,e)}}function fm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4fv(this.addr,e),dt(t,e)}}function hm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ht(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,r))return;Dl.set(r),a.uniformMatrix2fv(this.addr,!1,Dl),dt(t,r)}}function dm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ht(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,r))return;Ul.set(r),a.uniformMatrix3fv(this.addr,!1,Ul),dt(t,r)}}function pm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ht(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,r))return;Pl.set(r),a.uniformMatrix4fv(this.addr,!1,Pl),dt(t,r)}}function mm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function gm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2iv(this.addr,e),dt(t,e)}}function _m(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3iv(this.addr,e),dt(t,e)}}function vm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4iv(this.addr,e),dt(t,e)}}function xm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Sm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2uiv(this.addr,e),dt(t,e)}}function Mm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3uiv(this.addr,e),dt(t,e)}}function ym(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4uiv(this.addr,e),dt(t,e)}}function Em(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);const i=this.type===a.SAMPLER_2D_SHADOW?jc:qc;t.setTexture2D(e||i,n)}function Tm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Zc,n)}function bm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Jc,n)}function Am(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Kc,n)}function wm(a){switch(a){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return fm;case 35674:return hm;case 35675:return dm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return Sm;case 36295:return Mm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Am}}function Rm(a,e){a.uniform1fv(this.addr,e)}function Cm(a,e){const t=ki(e,this.size,2);a.uniform2fv(this.addr,t)}function Lm(a,e){const t=ki(e,this.size,3);a.uniform3fv(this.addr,t)}function Pm(a,e){const t=ki(e,this.size,4);a.uniform4fv(this.addr,t)}function Um(a,e){const t=ki(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Dm(a,e){const t=ki(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Im(a,e){const t=ki(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Fm(a,e){a.uniform1iv(this.addr,e)}function Nm(a,e){a.uniform2iv(this.addr,e)}function Om(a,e){a.uniform3iv(this.addr,e)}function Bm(a,e){a.uniform4iv(this.addr,e)}function Gm(a,e){a.uniform1uiv(this.addr,e)}function zm(a,e){a.uniform2uiv(this.addr,e)}function km(a,e){a.uniform3uiv(this.addr,e)}function Hm(a,e){a.uniform4uiv(this.addr,e)}function Vm(a,e,t){const r=this.cache,n=e.length,i=Ma(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||qc,i[o])}function Wm(a,e,t){const r=this.cache,n=e.length,i=Ma(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Zc,i[o])}function Xm(a,e,t){const r=this.cache,n=e.length,i=Ma(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Jc,i[o])}function Ym(a,e,t){const r=this.cache,n=e.length,i=Ma(t,n);ht(r,i)||(a.uniform1iv(this.addr,i),dt(r,i));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Kc,i[o])}function qm(a){switch(a){case 5126:return Rm;case 35664:return Cm;case 35665:return Lm;case 35666:return Pm;case 35674:return Um;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Fm;case 35667:case 35671:return Nm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return Gm;case 36294:return zm;case 36295:return km;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return Ym}}class jm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=wm(t.type)}}class Km{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,o=n.length;i!==o;++i){const s=n[i];s.setValue(e,t[s.id],r)}}}const hs=/(\w+)(\])?(\[|\.)?/g;function Il(a,e){a.seq.push(e),a.map[e.id]=e}function Jm(a,e,t){const r=a.name,n=r.length;for(hs.lastIndex=0;;){const i=hs.exec(r),o=hs.lastIndex;let s=i[1];const l=i[2]==="]",c=i[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Il(t,c===void 0?new jm(s,a,e):new Km(s,a,e));break}else{let f=t.map[s];f===void 0&&(f=new Zm(s),Il(t,f)),t=f}}}class aa{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),o=e.getUniformLocation(t,i.name);Jm(i,o,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,o=t.length;i!==o;++i){const s=t[i],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function Fl(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Qm=37297;let $m=0;function eg(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=n;o<i;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function tg(a){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(a);let r;switch(e===t?r="":e===da&&t===ha?r="LinearDisplayP3ToLinearSRGB":e===ha&&t===da&&(r="LinearSRGBToLinearDisplayP3"),a){case Mn:case xa:return[r,"LinearTransferOETF"];case gt:case Ys:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[r,"LinearTransferOETF"]}}function Nl(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+eg(a.getShaderSource(e),o)}else return n}function ng(a,e){const t=tg(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ig(a,e){let t;switch(e){case nf:t="Linear";break;case rf:t="Reinhard";break;case af:t="OptimizedCineon";break;case sf:t="ACESFilmic";break;case lf:t="AgX";break;case of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rg(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.alphaToCoverage||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ri).join(`
`)}function ag(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function sg(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function og(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),o=i.name;let s=1;i.type===a.FLOAT_MAT2&&(s=2),i.type===a.FLOAT_MAT3&&(s=3),i.type===a.FLOAT_MAT4&&(s=4),t[o]={type:i.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Ri(a){return a!==""}function Ol(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ds(a){return a.replace(lg,ug)}const cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(a,e){let t=qe[e];if(t===void 0){const r=cg.get(e);if(r!==void 0)t=qe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ds(t)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(a){return a.replace(fg,hg)}function hg(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function zl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	`;return a.isWebGL2&&(e+=`precision ${a.precision} sampler3D;
		precision ${a.precision} sampler2DArray;
		precision ${a.precision} sampler2DShadow;
		precision ${a.precision} samplerCubeShadow;
		precision ${a.precision} sampler2DArrayShadow;
		precision ${a.precision} isampler2D;
		precision ${a.precision} isampler3D;
		precision ${a.precision} isamplerCube;
		precision ${a.precision} isampler2DArray;
		precision ${a.precision} usampler2D;
		precision ${a.precision} usampler3D;
		precision ${a.precision} usamplerCube;
		precision ${a.precision} usampler2DArray;
		`),a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dg(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Di:case Ii:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function gg(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case ef:e="ENVMAP_BLENDING_MIX";break;case tf:e="ENVMAP_BLENDING_ADD";break}return e}function _g(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function vg(a,e,t,r){const n=a.getContext(),i=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=dg(t),c=pg(t),u=mg(t),f=gg(t),h=_g(t),d=t.isWebGL2?"":rg(t),g=ag(t),_=sg(i),p=n.createProgram();let m,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ri).join(`
`),m.length>0&&(m+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ri).join(`
`),y.length>0&&(y+=`
`)):(m=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),y=[d,zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),o=Ds(o),o=Ol(o,t),o=Bl(o,t),s=Ds(s),s=Ol(s,t),s=Bl(s,t),o=Gl(o),s=Gl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=x+m+o,C=x+y+s,w=Fl(n,n.VERTEX_SHADER,M),E=Fl(n,n.FRAGMENT_SHADER,C);n.attachShader(p,w),n.attachShader(p,E),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function N(U){if(a.debug.checkShaderErrors){const k=n.getProgramInfoLog(p).trim(),b=n.getShaderInfoLog(w).trim(),H=n.getShaderInfoLog(E).trim();let B=!0,Z=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(B=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,p,w,E);else{const K=Nl(n,w,"vertex"),V=Nl(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+K+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(b===""||H==="")&&(Z=!1);Z&&(U.diagnostics={runnable:B,programLog:k,vertexShader:{log:b,prefix:m},fragmentShader:{log:H,prefix:y}})}n.deleteShader(w),n.deleteShader(E),q=new aa(n,p),v=og(n,p)}let q;this.getUniforms=function(){return q===void 0&&N(this),q};let v;this.getAttributes=function(){return v===void 0&&N(this),v};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(p,Qm)),R},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=E,this}let xg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Mg(e),t.set(e,r)),r}}class Mg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function yg(a,e,t,r,n,i,o){const s=new Nc,l=new Sg,c=new Set,u=[],f=n.isWebGL2,h=n.logarithmicDepthBuffer,d=n.vertexTextures;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,R,U,k,b){const H=k.fog,B=b.geometry,Z=v.isMeshStandardMaterial?k.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),V=K&&K.mapping===va?K.image.height:null,z=_[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const L=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=L!==void 0?L.length:0;let X=0;B.morphAttributes.position!==void 0&&(X=1),B.morphAttributes.normal!==void 0&&(X=2),B.morphAttributes.color!==void 0&&(X=3);let F,O,Q,J;if(z){const Le=un[z];F=Le.vertexShader,O=Le.fragmentShader}else F=v.vertexShader,O=v.fragmentShader,l.update(v),Q=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);const ee=a.getRenderTarget(),se=b.isInstancedMesh===!0,ye=b.isBatchedMesh===!0,le=!!v.map,I=!!v.matcap,Ne=!!K,ge=!!v.aoMap,Se=!!v.lightMap,de=!!v.bumpMap,Ue=!!v.normalMap,ue=!!v.displacementMap,T=!!v.emissiveMap,S=!!v.metalnessMap,D=!!v.roughnessMap,te=v.anisotropy>0,Y=v.clearcoat>0,$=v.iridescence>0,oe=v.sheen>0,me=v.transmission>0,ce=te&&!!v.anisotropyMap,_e=Y&&!!v.clearcoatMap,Ee=Y&&!!v.clearcoatNormalMap,ae=Y&&!!v.clearcoatRoughnessMap,Ie=$&&!!v.iridescenceMap,Pe=$&&!!v.iridescenceThicknessMap,Te=oe&&!!v.sheenColorMap,ve=oe&&!!v.sheenRoughnessMap,fe=!!v.specularMap,we=!!v.specularColorMap,Oe=!!v.specularIntensityMap,je=me&&!!v.transmissionMap,De=me&&!!v.thicknessMap,Ae=!!v.gradientMap,P=!!v.alphaMap,Me=v.alphaTest>0,he=!!v.alphaHash,xe=!!v.extensions;let Ce=Fn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ce=a.toneMapping);const Be={isWebGL2:f,shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:F,fragmentShader:O,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ye,instancing:se,instancingColor:se&&b.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ee===null?a.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Mn,alphaToCoverage:!!v.alphaToCoverage,map:le,matcap:I,envMap:Ne,envMapMode:Ne&&K.mapping,envMapCubeUVHeight:V,aoMap:ge,lightMap:Se,bumpMap:de,normalMap:Ue,displacementMap:d&&ue,emissiveMap:T,normalMapObjectSpace:Ue&&v.normalMapType===xf,normalMapTangentSpace:Ue&&v.normalMapType===vf,metalnessMap:S,roughnessMap:D,anisotropy:te,anisotropyMap:ce,clearcoat:Y,clearcoatMap:_e,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ae,iridescence:$,iridescenceMap:Ie,iridescenceThicknessMap:Pe,sheen:oe,sheenColorMap:Te,sheenRoughnessMap:ve,specularMap:fe,specularColorMap:we,specularIntensityMap:Oe,transmission:me,transmissionMap:je,thicknessMap:De,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===Ci&&v.alphaToCoverage===!1,alphaMap:P,alphaTest:Me,alphaHash:he,combine:v.combine,mapUv:le&&p(v.map.channel),aoMapUv:ge&&p(v.aoMap.channel),lightMapUv:Se&&p(v.lightMap.channel),bumpMapUv:de&&p(v.bumpMap.channel),normalMapUv:Ue&&p(v.normalMap.channel),displacementMapUv:ue&&p(v.displacementMap.channel),emissiveMapUv:T&&p(v.emissiveMap.channel),metalnessMapUv:S&&p(v.metalnessMap.channel),roughnessMapUv:D&&p(v.roughnessMap.channel),anisotropyMapUv:ce&&p(v.anisotropyMap.channel),clearcoatMapUv:_e&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(v.sheenRoughnessMap.channel),specularMapUv:fe&&p(v.specularMap.channel),specularColorMapUv:we&&p(v.specularColorMap.channel),specularIntensityMapUv:Oe&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:De&&p(v.thicknessMap.channel),alphaMapUv:P&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ue||te),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!B.attributes.uv&&(le||P),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:b.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&U.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ce,useLegacyLights:a._useLegacyLights,decodeVideoTexture:le&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wt,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:xe&&v.extensions.derivatives===!0,extensionFragDepth:xe&&v.extensions.fragDepth===!0,extensionDrawBuffers:xe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xe&&v.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function y(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)R.push(U),R.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(R,v),M(R,v),R.push(a.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function x(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function M(v,R){s.disableAll(),R.isWebGL2&&s.enable(0),R.supportsVertexTextures&&s.enable(1),R.instancing&&s.enable(2),R.instancingColor&&s.enable(3),R.matcap&&s.enable(4),R.envMap&&s.enable(5),R.normalMapObjectSpace&&s.enable(6),R.normalMapTangentSpace&&s.enable(7),R.clearcoat&&s.enable(8),R.iridescence&&s.enable(9),R.alphaTest&&s.enable(10),R.vertexColors&&s.enable(11),R.vertexAlphas&&s.enable(12),R.vertexUv1s&&s.enable(13),R.vertexUv2s&&s.enable(14),R.vertexUv3s&&s.enable(15),R.vertexTangents&&s.enable(16),R.anisotropy&&s.enable(17),R.alphaHash&&s.enable(18),R.batching&&s.enable(19),v.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.skinning&&s.enable(4),R.morphTargets&&s.enable(5),R.morphNormals&&s.enable(6),R.morphColors&&s.enable(7),R.premultipliedAlpha&&s.enable(8),R.shadowMapEnabled&&s.enable(9),R.useLegacyLights&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.alphaToCoverage&&s.enable(20),v.push(s.mask)}function C(v){const R=_[v.type];let U;if(R){const k=un[R];U=kc.clone(k.uniforms)}else U=v.uniforms;return U}function w(v,R){let U;for(let k=0,b=u.length;k<b;k++){const H=u[k];if(H.cacheKey===R){U=H,++U.usedTimes;break}}return U===void 0&&(U=new vg(a,R,v,i),u.push(U)),U}function E(v){if(--v.usedTimes===0){const R=u.indexOf(v);u[R]=u[u.length-1],u.pop(),v.destroy()}}function N(v){l.remove(v)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:w,releaseProgram:E,releaseShaderCache:N,programs:u,dispose:q}}function Eg(){let a=new WeakMap;function e(i){let o=a.get(i);return o===void 0&&(o={},a.set(i,o)),o}function t(i){a.delete(i)}function r(i,o,s){a.get(i)[o]=s}function n(){a=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Tg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function kl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Hl(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function o(f,h,d,g,_,p){let m=a[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},a[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function s(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?r.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?r.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Tg),r.length>1&&r.sort(h||kl),n.length>1&&n.sort(h||kl)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:s,unshift:l,finish:u,sort:c}}function bg(){let a=new WeakMap;function e(r,n){const i=a.get(r);let o;return i===void 0?(o=new Hl,a.set(r,[o])):n>=i.length?(o=new Hl,i.push(o)):o=i[n],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ag(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ze};break;case"SpotLight":t={position:new W,direction:new W,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new W,halfWidth:new W,halfHeight:new W};break}return a[e.id]=t,t}}}function wg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Rg=0;function Cg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Lg(a,e){const t=new Ag,r=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const i=new W,o=new st,s=new st;function l(u,f){let h=0,d=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let _=0,p=0,m=0,y=0,x=0,M=0,C=0,w=0,E=0,N=0,q=0;u.sort(Cg);const v=f===!0?Math.PI:1;for(let U=0,k=u.length;U<k;U++){const b=u[U],H=b.color,B=b.intensity,Z=b.distance,K=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=H.r*B*v,d+=H.g*B*v,g+=H.b*B*v;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],B);q++}else if(b.isDirectionalLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity*v),b.castShadow){const z=b.shadow,L=r.get(b);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,n.directionalShadow[_]=L,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=b.shadow.matrix,M++}n.directional[_]=V,_++}else if(b.isSpotLight){const V=t.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(H).multiplyScalar(B*v),V.distance=Z,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[m]=V;const z=b.shadow;if(b.map&&(n.spotLightMap[E]=b.map,E++,z.updateMatrices(b),b.castShadow&&N++),n.spotLightMatrix[m]=z.matrix,b.castShadow){const L=r.get(b);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,n.spotShadow[m]=L,n.spotShadowMap[m]=K,w++}m++}else if(b.isRectAreaLight){const V=t.get(b);V.color.copy(H).multiplyScalar(B),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[y]=V,y++}else if(b.isPointLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity*v),V.distance=b.distance,V.decay=b.decay,b.castShadow){const z=b.shadow,L=r.get(b);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,L.shadowCameraNear=z.camera.near,L.shadowCameraFar=z.camera.far,n.pointShadow[p]=L,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=b.shadow.matrix,C++}n.point[p]=V,p++}else if(b.isHemisphereLight){const V=t.get(b);V.skyColor.copy(b.color).multiplyScalar(B*v),V.groundColor.copy(b.groundColor).multiplyScalar(B*v),n.hemi[x]=V,x++}}y>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=g;const R=n.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==y||R.hemiLength!==x||R.numDirectionalShadows!==M||R.numPointShadows!==C||R.numSpotShadows!==w||R.numSpotMaps!==E||R.numLightProbes!==q)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=y,n.point.length=p,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=w+E-N,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=q,R.directionalLength=_,R.pointLength=p,R.spotLength=m,R.rectAreaLength=y,R.hemiLength=x,R.numDirectionalShadows=M,R.numPointShadows=C,R.numSpotShadows=w,R.numSpotMaps=E,R.numLightProbes=q,n.version=Rg++)}function c(u,f){let h=0,d=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const M=u[y];if(M.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(m),h++}else if(M.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),s.identity(),o.copy(M.matrixWorld),o.premultiply(m),s.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),_++}else if(M.isPointLight){const C=n.point[d];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const C=n.hemi[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:n}}function Vl(a,e){const t=new Lg(a,e),r=[],n=[];function i(){r.length=0,n.length=0}function o(f){r.push(f)}function s(f){n.push(f)}function l(f){t.setup(r,f)}function c(f){t.setupView(r,f)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Pg(a,e){let t=new WeakMap;function r(i,o=0){const s=t.get(i);let l;return s===void 0?(l=new Vl(a,e),t.set(i,[l])):o>=s.length?(l=new Vl(a,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class Qc extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $c extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ig(a,e,t){let r=new Ks;const n=new ke,i=new ke,o=new it,s=new Qc({depthPacking:Lc}),l=new $c,c={},u=t.maxTextureSize,f={[Sn]:Ut,[Ut]:Sn,[Wt]:Wt},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ug,fragmentShader:Dg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let m=this.type;this.render=function(w,E,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const q=a.getRenderTarget(),v=a.getActiveCubeFace(),R=a.getActiveMipmapLevel(),U=a.state;U.setBlending(In),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=m!==gn&&this.type===gn,b=m===gn&&this.type!==gn;for(let H=0,B=w.length;H<B;H++){const Z=w[H],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const V=K.getFrameExtents();if(n.multiply(V),i.copy(K.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/V.x),n.x=i.x*V.x,K.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/V.y),n.y=i.y*V.y,K.mapSize.y=i.y)),K.map===null||k===!0||b===!0){const L=this.type!==gn?{minFilter:Lt,magFilter:Lt}:{};K.map!==null&&K.map.dispose(),K.map=new ni(n.x,n.y,L),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}a.setRenderTarget(K.map),a.clear();const z=K.getViewportCount();for(let L=0;L<z;L++){const G=K.getViewport(L);o.set(i.x*G.x,i.y*G.y,i.x*G.z,i.y*G.w),U.viewport(o),K.updateMatrices(Z,L),r=K.getFrustum(),M(E,N,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===gn&&y(K,N),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(q,v,R)};function y(w,E){const N=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(n.x,n.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(E,null,N,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(E,null,N,d,_,null)}function x(w,E,N,q){let v=null;const R=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=N.isPointLight===!0?l:s,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=v.uuid,k=E.uuid;let b=c[U];b===void 0&&(b={},c[U]=b);let H=b[k];H===void 0&&(H=v.clone(),b[k]=H,E.addEventListener("dispose",C)),v=H}if(v.visible=E.visible,v.wireframe=E.wireframe,q===gn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=a.properties.get(v);U.light=N}return v}function M(w,E,N,q,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===gn)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const k=e.update(w),b=w.material;if(Array.isArray(b)){const H=k.groups;for(let B=0,Z=H.length;B<Z;B++){const K=H[B],V=b[K.materialIndex];if(V&&V.visible){const z=x(w,V,q,v);w.onBeforeShadow(a,w,E,N,k,z,K),a.renderBufferDirect(N,null,k,z,w,K),w.onAfterShadow(a,w,E,N,k,z,K)}}}else if(b.visible){const H=x(w,b,q,v);w.onBeforeShadow(a,w,E,N,k,H,null),a.renderBufferDirect(N,null,k,H,w,null),w.onAfterShadow(a,w,E,N,k,H,null)}}const U=w.children;for(let k=0,b=U.length;k<b;k++)M(U[k],E,N,q,v)}function C(w){w.target.removeEventListener("dispose",C);for(const N in c){const q=c[N],v=w.target.uuid;v in q&&(q[v].dispose(),delete q[v])}}}function Fg(a,e,t){const r=t.isWebGL2;function n(){let P=!1;const Me=new it;let he=null;const xe=new it(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!P&&(a.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){P=Ce},setClear:function(Ce,Be,Le,Xe,$e){$e===!0&&(Ce*=Xe,Be*=Xe,Le*=Xe),Me.set(Ce,Be,Le,Xe),xe.equals(Me)===!1&&(a.clearColor(Ce,Be,Le,Xe),xe.copy(Me))},reset:function(){P=!1,he=null,xe.set(-1,0,0,0)}}}function i(){let P=!1,Me=null,he=null,xe=null;return{setTest:function(Ce){Ce?se(a.DEPTH_TEST):ye(a.DEPTH_TEST)},setMask:function(Ce){Me!==Ce&&!P&&(a.depthMask(Ce),Me=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case qu:a.depthFunc(a.NEVER);break;case ju:a.depthFunc(a.ALWAYS);break;case Ku:a.depthFunc(a.LESS);break;case ua:a.depthFunc(a.LEQUAL);break;case Zu:a.depthFunc(a.EQUAL);break;case Ju:a.depthFunc(a.GEQUAL);break;case Qu:a.depthFunc(a.GREATER);break;case $u:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=Ce}},setLocked:function(Ce){P=Ce},setClear:function(Ce){xe!==Ce&&(a.clearDepth(Ce),xe=Ce)},reset:function(){P=!1,Me=null,he=null,xe=null}}}function o(){let P=!1,Me=null,he=null,xe=null,Ce=null,Be=null,Le=null,Xe=null,$e=null;return{setTest:function(We){P||(We?se(a.STENCIL_TEST):ye(a.STENCIL_TEST))},setMask:function(We){Me!==We&&!P&&(a.stencilMask(We),Me=We)},setFunc:function(We,Je,lt){(he!==We||xe!==Je||Ce!==lt)&&(a.stencilFunc(We,Je,lt),he=We,xe=Je,Ce=lt)},setOp:function(We,Je,lt){(Be!==We||Le!==Je||Xe!==lt)&&(a.stencilOp(We,Je,lt),Be=We,Le=Je,Xe=lt)},setLocked:function(We){P=We},setClear:function(We){$e!==We&&(a.clearStencil(We),$e=We)},reset:function(){P=!1,Me=null,he=null,xe=null,Ce=null,Be=null,Le=null,Xe=null,$e=null}}}const s=new n,l=new i,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,M=null,C=null,w=null,E=null,N=null,q=new Ze(0,0,0),v=0,R=!1,U=null,k=null,b=null,H=null,B=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const z=a.getParameter(a.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=V>=2);let L=null,G={};const X=a.getParameter(a.SCISSOR_BOX),F=a.getParameter(a.VIEWPORT),O=new it().fromArray(X),Q=new it().fromArray(F);function J(P,Me,he,xe){const Ce=new Uint8Array(4),Be=a.createTexture();a.bindTexture(P,Be),a.texParameteri(P,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(P,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Le=0;Le<he;Le++)r&&(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)?a.texImage3D(Me,0,a.RGBA,1,1,xe,0,a.RGBA,a.UNSIGNED_BYTE,Ce):a.texImage2D(Me+Le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ce);return Be}const ee={};ee[a.TEXTURE_2D]=J(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=J(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ee[a.TEXTURE_2D_ARRAY]=J(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=J(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(a.DEPTH_TEST),l.setFunc(ua),ue(!1),T(To),se(a.CULL_FACE),de(In);function se(P){h[P]!==!0&&(a.enable(P),h[P]=!0)}function ye(P){h[P]!==!1&&(a.disable(P),h[P]=!1)}function le(P,Me){return d[P]!==Me?(a.bindFramebuffer(P,Me),d[P]=Me,r&&(P===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=Me),P===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=Me)),!0):!1}function I(P,Me){let he=_,xe=!1;if(P)if(he=g.get(Me),he===void 0&&(he=[],g.set(Me,he)),P.isWebGLMultipleRenderTargets){const Ce=P.texture;if(he.length!==Ce.length||he[0]!==a.COLOR_ATTACHMENT0){for(let Be=0,Le=Ce.length;Be<Le;Be++)he[Be]=a.COLOR_ATTACHMENT0+Be;he.length=Ce.length,xe=!0}}else he[0]!==a.COLOR_ATTACHMENT0&&(he[0]=a.COLOR_ATTACHMENT0,xe=!0);else he[0]!==a.BACK&&(he[0]=a.BACK,xe=!0);xe&&(t.isWebGL2?a.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ne(P){return p!==P?(a.useProgram(P),p=P,!0):!1}const ge={[jn]:a.FUNC_ADD,[Uu]:a.FUNC_SUBTRACT,[Du]:a.FUNC_REVERSE_SUBTRACT};if(r)ge[wo]=a.MIN,ge[Ro]=a.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ge[wo]=P.MIN_EXT,ge[Ro]=P.MAX_EXT)}const Se={[Iu]:a.ZERO,[Fu]:a.ONE,[Nu]:a.SRC_COLOR,[Ts]:a.SRC_ALPHA,[Hu]:a.SRC_ALPHA_SATURATE,[zu]:a.DST_COLOR,[Bu]:a.DST_ALPHA,[Ou]:a.ONE_MINUS_SRC_COLOR,[bs]:a.ONE_MINUS_SRC_ALPHA,[ku]:a.ONE_MINUS_DST_COLOR,[Gu]:a.ONE_MINUS_DST_ALPHA,[Vu]:a.CONSTANT_COLOR,[Wu]:a.ONE_MINUS_CONSTANT_COLOR,[Xu]:a.CONSTANT_ALPHA,[Yu]:a.ONE_MINUS_CONSTANT_ALPHA};function de(P,Me,he,xe,Ce,Be,Le,Xe,$e,We){if(P===In){m===!0&&(ye(a.BLEND),m=!1);return}if(m===!1&&(se(a.BLEND),m=!0),P!==Pu){if(P!==y||We!==R){if((x!==jn||w!==jn)&&(a.blendEquation(a.FUNC_ADD),x=jn,w=jn),We)switch(P){case Ci:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ui:a.blendFunc(a.ONE,a.ONE);break;case bo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ao:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ci:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ui:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case bo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ao:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,C=null,E=null,N=null,q.set(0,0,0),v=0,y=P,R=We}return}Ce=Ce||Me,Be=Be||he,Le=Le||xe,(Me!==x||Ce!==w)&&(a.blendEquationSeparate(ge[Me],ge[Ce]),x=Me,w=Ce),(he!==M||xe!==C||Be!==E||Le!==N)&&(a.blendFuncSeparate(Se[he],Se[xe],Se[Be],Se[Le]),M=he,C=xe,E=Be,N=Le),(Xe.equals(q)===!1||$e!==v)&&(a.blendColor(Xe.r,Xe.g,Xe.b,$e),q.copy(Xe),v=$e),y=P,R=!1}function Ue(P,Me){P.side===Wt?ye(a.CULL_FACE):se(a.CULL_FACE);let he=P.side===Ut;Me&&(he=!he),ue(he),P.blending===Ci&&P.transparent===!1?de(In):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const xe=P.stencilWrite;c.setTest(xe),xe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(a.SAMPLE_ALPHA_TO_COVERAGE):ye(a.SAMPLE_ALPHA_TO_COVERAGE)}function ue(P){U!==P&&(P?a.frontFace(a.CW):a.frontFace(a.CCW),U=P)}function T(P){P!==Ru?(se(a.CULL_FACE),P!==k&&(P===To?a.cullFace(a.BACK):P===Cu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ye(a.CULL_FACE),k=P}function S(P){P!==b&&(K&&a.lineWidth(P),b=P)}function D(P,Me,he){P?(se(a.POLYGON_OFFSET_FILL),(H!==Me||B!==he)&&(a.polygonOffset(Me,he),H=Me,B=he)):ye(a.POLYGON_OFFSET_FILL)}function te(P){P?se(a.SCISSOR_TEST):ye(a.SCISSOR_TEST)}function Y(P){P===void 0&&(P=a.TEXTURE0+Z-1),L!==P&&(a.activeTexture(P),L=P)}function $(P,Me,he){he===void 0&&(L===null?he=a.TEXTURE0+Z-1:he=L);let xe=G[he];xe===void 0&&(xe={type:void 0,texture:void 0},G[he]=xe),(xe.type!==P||xe.texture!==Me)&&(L!==he&&(a.activeTexture(he),L=he),a.bindTexture(P,Me||ee[P]),xe.type=P,xe.texture=Me)}function oe(){const P=G[L];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function me(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){O.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),O.copy(P))}function Oe(P){Q.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),Q.copy(P))}function je(P,Me){let he=f.get(Me);he===void 0&&(he=new WeakMap,f.set(Me,he));let xe=he.get(P);xe===void 0&&(xe=a.getUniformBlockIndex(Me,P.name),he.set(P,xe))}function De(P,Me){const xe=f.get(Me).get(P);u.get(Me)!==xe&&(a.uniformBlockBinding(Me,xe,P.__bindingPointIndex),u.set(Me,xe))}function Ae(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),r===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},L=null,G={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,M=null,C=null,w=null,E=null,N=null,q=new Ze(0,0,0),v=0,R=!1,U=null,k=null,b=null,H=null,B=null,O.set(0,0,a.canvas.width,a.canvas.height),Q.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:se,disable:ye,bindFramebuffer:le,drawBuffers:I,useProgram:Ne,setBlending:de,setMaterial:Ue,setFlipSided:ue,setCullFace:T,setLineWidth:S,setPolygonOffset:D,setScissorTest:te,activeTexture:Y,bindTexture:$,unbindTexture:oe,compressedTexImage2D:me,compressedTexImage3D:ce,texImage2D:ve,texImage3D:fe,updateUBOMapping:je,uniformBlockBinding:De,texStorage2D:Pe,texStorage3D:Te,texSubImage2D:_e,texSubImage3D:Ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ie,scissor:we,viewport:Oe,reset:Ae}}function Ng(a,e,t,r,n,i,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return d?new OffscreenCanvas(T,S):ga("canvas")}function _(T,S,D,te){let Y=1;if((T.width>te||T.height>te)&&(Y=te/Math.max(T.width,T.height)),Y<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const $=S?ma:Math.floor,oe=$(Y*T.width),me=$(Y*T.height);f===void 0&&(f=g(oe,me));const ce=D?g(oe,me):f;return ce.width=oe,ce.height=me,ce.getContext("2d").drawImage(T,0,0,oe,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+oe+"x"+me+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Us(T.width)&&Us(T.height)}function m(T){return s?!1:T.wrapS!==rn||T.wrapT!==rn||T.minFilter!==Lt&&T.minFilter!==Tt}function y(T,S){return T.generateMipmaps&&S&&T.minFilter!==Lt&&T.minFilter!==Tt}function x(T){a.generateMipmap(T)}function M(T,S,D,te,Y=!1){if(s===!1)return S;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=S;if(S===a.RED&&(D===a.FLOAT&&($=a.R32F),D===a.HALF_FLOAT&&($=a.R16F),D===a.UNSIGNED_BYTE&&($=a.R8)),S===a.RED_INTEGER&&(D===a.UNSIGNED_BYTE&&($=a.R8UI),D===a.UNSIGNED_SHORT&&($=a.R16UI),D===a.UNSIGNED_INT&&($=a.R32UI),D===a.BYTE&&($=a.R8I),D===a.SHORT&&($=a.R16I),D===a.INT&&($=a.R32I)),S===a.RG&&(D===a.FLOAT&&($=a.RG32F),D===a.HALF_FLOAT&&($=a.RG16F),D===a.UNSIGNED_BYTE&&($=a.RG8)),S===a.RGBA){const oe=Y?fa:tt.getTransfer(te);D===a.FLOAT&&($=a.RGBA32F),D===a.HALF_FLOAT&&($=a.RGBA16F),D===a.UNSIGNED_BYTE&&($=oe===at?a.SRGB8_ALPHA8:a.RGBA8),D===a.UNSIGNED_SHORT_4_4_4_4&&($=a.RGBA4),D===a.UNSIGNED_SHORT_5_5_5_1&&($=a.RGB5_A1)}return($===a.R16F||$===a.R32F||$===a.RG16F||$===a.RG32F||$===a.RGBA16F||$===a.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function C(T,S,D){return y(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==Lt&&T.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){return T===Lt||T===Co||T===er?a.NEAREST:a.LINEAR}function E(T){const S=T.target;S.removeEventListener("dispose",E),q(S),S.isVideoTexture&&u.delete(S)}function N(T){const S=T.target;S.removeEventListener("dispose",N),R(S)}function q(T){const S=r.get(T);if(S.__webglInit===void 0)return;const D=T.source,te=h.get(D);if(te){const Y=te[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(T),Object.keys(te).length===0&&h.delete(D)}r.remove(T)}function v(T){const S=r.get(T);a.deleteTexture(S.__webglTexture);const D=T.source,te=h.get(D);delete te[S.__cacheKey],o.memory.textures--}function R(T){const S=T.texture,D=r.get(T),te=r.get(S);if(te.__webglTexture!==void 0&&(a.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(D.__webglFramebuffer[Y]))for(let $=0;$<D.__webglFramebuffer[Y].length;$++)a.deleteFramebuffer(D.__webglFramebuffer[Y][$]);else a.deleteFramebuffer(D.__webglFramebuffer[Y]);D.__webglDepthbuffer&&a.deleteRenderbuffer(D.__webglDepthbuffer[Y])}else{if(Array.isArray(D.__webglFramebuffer))for(let Y=0;Y<D.__webglFramebuffer.length;Y++)a.deleteFramebuffer(D.__webglFramebuffer[Y]);else a.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&a.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&a.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Y=0;Y<D.__webglColorRenderbuffer.length;Y++)D.__webglColorRenderbuffer[Y]&&a.deleteRenderbuffer(D.__webglColorRenderbuffer[Y]);D.__webglDepthRenderbuffer&&a.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Y=0,$=S.length;Y<$;Y++){const oe=r.get(S[Y]);oe.__webglTexture&&(a.deleteTexture(oe.__webglTexture),o.memory.textures--),r.remove(S[Y])}r.remove(S),r.remove(T)}let U=0;function k(){U=0}function b(){const T=U;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),U+=1,T}function H(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function B(T,S){const D=r.get(T);if(T.isVideoTexture&&Ue(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(D,T,S);return}}t.bindTexture(a.TEXTURE_2D,D.__webglTexture,a.TEXTURE0+S)}function Z(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){O(D,T,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,D.__webglTexture,a.TEXTURE0+S)}function K(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){O(D,T,S);return}t.bindTexture(a.TEXTURE_3D,D.__webglTexture,a.TEXTURE0+S)}function V(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){Q(D,T,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+S)}const z={[Rs]:a.REPEAT,[rn]:a.CLAMP_TO_EDGE,[Cs]:a.MIRRORED_REPEAT},L={[Lt]:a.NEAREST,[Co]:a.NEAREST_MIPMAP_NEAREST,[er]:a.NEAREST_MIPMAP_LINEAR,[Tt]:a.LINEAR,[Ba]:a.LINEAR_MIPMAP_NEAREST,[Zn]:a.LINEAR_MIPMAP_LINEAR},G={[Sf]:a.NEVER,[Af]:a.ALWAYS,[Mf]:a.LESS,[Pc]:a.LEQUAL,[yf]:a.EQUAL,[bf]:a.GEQUAL,[Ef]:a.GREATER,[Tf]:a.NOTEQUAL};function X(T,S,D){if(S.type===_n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tt||S.magFilter===Ba||S.magFilter===er||S.magFilter===Zn||S.minFilter===Tt||S.minFilter===Ba||S.minFilter===er||S.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D?(a.texParameteri(T,a.TEXTURE_WRAP_S,z[S.wrapS]),a.texParameteri(T,a.TEXTURE_WRAP_T,z[S.wrapT]),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,z[S.wrapR]),a.texParameteri(T,a.TEXTURE_MAG_FILTER,L[S.magFilter]),a.texParameteri(T,a.TEXTURE_MIN_FILTER,L[S.minFilter])):(a.texParameteri(T,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(T,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(S.wrapS!==rn||S.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,a.TEXTURE_MAG_FILTER,w(S.magFilter)),a.texParameteri(T,a.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Lt&&S.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(a.texParameteri(T,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(T,a.TEXTURE_COMPARE_FUNC,G[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Lt||S.minFilter!==er&&S.minFilter!==Zn||S.type===_n&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||r.get(S).__currentAnisotropy)&&(a.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy)}}function F(T,S){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));const te=S.source;let Y=h.get(te);Y===void 0&&(Y={},h.set(te,Y));const $=H(S);if($!==T.__cacheKey){Y[$]===void 0&&(Y[$]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Y[$].usedTimes++;const oe=Y[T.__cacheKey];oe!==void 0&&(Y[T.__cacheKey].usedTimes--,oe.usedTimes===0&&v(S)),T.__cacheKey=$,T.__webglTexture=Y[$].texture}return D}function O(T,S,D){let te=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=a.TEXTURE_3D);const Y=F(T,S),$=S.source;t.bindTexture(te,T.__webglTexture,a.TEXTURE0+D);const oe=r.get($);if($.version!==oe.__version||Y===!0){t.activeTexture(a.TEXTURE0+D);const me=tt.getPrimaries(tt.workingColorSpace),ce=S.colorSpace===Xt?null:tt.getPrimaries(S.colorSpace),_e=S.colorSpace===Xt||me===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ee=m(S)&&p(S.image)===!1;let ae=_(S.image,Ee,!1,n.maxTextureSize);ae=ue(S,ae);const Ie=p(ae)||s,Pe=i.convert(S.format,S.colorSpace);let Te=i.convert(S.type),ve=M(S.internalFormat,Pe,Te,S.colorSpace,S.isVideoTexture);X(te,S,Ie);let fe;const we=S.mipmaps,Oe=s&&S.isVideoTexture!==!0&&ve!==Rc,je=oe.__version===void 0||Y===!0,De=$.dataReady,Ae=C(S,ae,Ie);if(S.isDepthTexture)ve=a.DEPTH_COMPONENT,s?S.type===_n?ve=a.DEPTH_COMPONENT32F:S.type===Dn?ve=a.DEPTH_COMPONENT24:S.type===Jn?ve=a.DEPTH24_STENCIL8:ve=a.DEPTH_COMPONENT16:S.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Qn&&ve===a.DEPTH_COMPONENT&&S.type!==Xs&&S.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Dn,Te=i.convert(S.type)),S.format===Fi&&ve===a.DEPTH_COMPONENT&&(ve=a.DEPTH_STENCIL,S.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Jn,Te=i.convert(S.type))),je&&(Oe?t.texStorage2D(a.TEXTURE_2D,1,ve,ae.width,ae.height):t.texImage2D(a.TEXTURE_2D,0,ve,ae.width,ae.height,0,Pe,Te,null));else if(S.isDataTexture)if(we.length>0&&Ie){Oe&&je&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let P=0,Me=we.length;P<Me;P++)fe=we[P],Oe?De&&t.texSubImage2D(a.TEXTURE_2D,P,0,0,fe.width,fe.height,Pe,Te,fe.data):t.texImage2D(a.TEXTURE_2D,P,ve,fe.width,fe.height,0,Pe,Te,fe.data);S.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,ae.width,ae.height),De&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ae.width,ae.height,Pe,Te,ae.data)):t.texImage2D(a.TEXTURE_2D,0,ve,ae.width,ae.height,0,Pe,Te,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,ve,we[0].width,we[0].height,ae.depth);for(let P=0,Me=we.length;P<Me;P++)fe=we[P],S.format!==an?Pe!==null?Oe?De&&t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,P,0,0,0,fe.width,fe.height,ae.depth,Pe,fe.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,P,ve,fe.width,fe.height,ae.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?De&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,P,0,0,0,fe.width,fe.height,ae.depth,Pe,Te,fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,P,ve,fe.width,fe.height,ae.depth,0,Pe,Te,fe.data)}else{Oe&&je&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let P=0,Me=we.length;P<Me;P++)fe=we[P],S.format!==an?Pe!==null?Oe?De&&t.compressedTexSubImage2D(a.TEXTURE_2D,P,0,0,fe.width,fe.height,Pe,fe.data):t.compressedTexImage2D(a.TEXTURE_2D,P,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?De&&t.texSubImage2D(a.TEXTURE_2D,P,0,0,fe.width,fe.height,Pe,Te,fe.data):t.texImage2D(a.TEXTURE_2D,P,ve,fe.width,fe.height,0,Pe,Te,fe.data)}else if(S.isDataArrayTexture)Oe?(je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,ve,ae.width,ae.height,ae.depth),De&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Pe,Te,ae.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,ve,ae.width,ae.height,ae.depth,0,Pe,Te,ae.data);else if(S.isData3DTexture)Oe?(je&&t.texStorage3D(a.TEXTURE_3D,Ae,ve,ae.width,ae.height,ae.depth),De&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Pe,Te,ae.data)):t.texImage3D(a.TEXTURE_3D,0,ve,ae.width,ae.height,ae.depth,0,Pe,Te,ae.data);else if(S.isFramebufferTexture){if(je)if(Oe)t.texStorage2D(a.TEXTURE_2D,Ae,ve,ae.width,ae.height);else{let P=ae.width,Me=ae.height;for(let he=0;he<Ae;he++)t.texImage2D(a.TEXTURE_2D,he,ve,P,Me,0,Pe,Te,null),P>>=1,Me>>=1}}else if(we.length>0&&Ie){Oe&&je&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let P=0,Me=we.length;P<Me;P++)fe=we[P],Oe?De&&t.texSubImage2D(a.TEXTURE_2D,P,0,0,Pe,Te,fe):t.texImage2D(a.TEXTURE_2D,P,ve,Pe,Te,fe);S.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,ae.width,ae.height),De&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Pe,Te,ae)):t.texImage2D(a.TEXTURE_2D,0,ve,Pe,Te,ae);y(S,Ie)&&x(te),oe.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Q(T,S,D){if(S.image.length!==6)return;const te=F(T,S),Y=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,T.__webglTexture,a.TEXTURE0+D);const $=r.get(Y);if(Y.version!==$.__version||te===!0){t.activeTexture(a.TEXTURE0+D);const oe=tt.getPrimaries(tt.workingColorSpace),me=S.colorSpace===Xt?null:tt.getPrimaries(S.colorSpace),ce=S.colorSpace===Xt||oe===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let P=0;P<6;P++)!_e&&!Ee?ae[P]=_(S.image[P],!1,!0,n.maxCubemapSize):ae[P]=Ee?S.image[P].image:S.image[P],ae[P]=ue(S,ae[P]);const Ie=ae[0],Pe=p(Ie)||s,Te=i.convert(S.format,S.colorSpace),ve=i.convert(S.type),fe=M(S.internalFormat,Te,ve,S.colorSpace),we=s&&S.isVideoTexture!==!0,Oe=$.__version===void 0||te===!0,je=Y.dataReady;let De=C(S,Ie,Pe);X(a.TEXTURE_CUBE_MAP,S,Pe);let Ae;if(_e){we&&Oe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,De,fe,Ie.width,Ie.height);for(let P=0;P<6;P++){Ae=ae[P].mipmaps;for(let Me=0;Me<Ae.length;Me++){const he=Ae[Me];S.format!==an?Te!==null?we?je&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me,0,0,he.width,he.height,Te,he.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?je&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me,0,0,he.width,he.height,Te,ve,he.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me,fe,he.width,he.height,0,Te,ve,he.data)}}}else{Ae=S.mipmaps,we&&Oe&&(Ae.length>0&&De++,t.texStorage2D(a.TEXTURE_CUBE_MAP,De,fe,ae[0].width,ae[0].height));for(let P=0;P<6;P++)if(Ee){we?je&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ae[P].width,ae[P].height,Te,ve,ae[P].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,fe,ae[P].width,ae[P].height,0,Te,ve,ae[P].data);for(let Me=0;Me<Ae.length;Me++){const xe=Ae[Me].image[P].image;we?je&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me+1,0,0,xe.width,xe.height,Te,ve,xe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me+1,fe,xe.width,xe.height,0,Te,ve,xe.data)}}else{we?je&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Te,ve,ae[P]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,fe,Te,ve,ae[P]);for(let Me=0;Me<Ae.length;Me++){const he=Ae[Me];we?je&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me+1,0,0,Te,ve,he.image[P]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me+1,fe,Te,ve,he.image[P])}}}y(S,Pe)&&x(a.TEXTURE_CUBE_MAP),$.__version=Y.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function J(T,S,D,te,Y,$){const oe=i.convert(D.format,D.colorSpace),me=i.convert(D.type),ce=M(D.internalFormat,oe,me,D.colorSpace);if(!r.get(S).__hasExternalTextures){const Ee=Math.max(1,S.width>>$),ae=Math.max(1,S.height>>$);Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?t.texImage3D(Y,$,ce,Ee,ae,S.depth,0,oe,me,null):t.texImage2D(Y,$,ce,Ee,ae,0,oe,me,null)}t.bindFramebuffer(a.FRAMEBUFFER,T),de(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,te,Y,r.get(D).__webglTexture,0,Se(S)):(Y===a.TEXTURE_2D||Y>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,te,Y,r.get(D).__webglTexture,$),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ee(T,S,D){if(a.bindRenderbuffer(a.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let te=s===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(D||de(S)){const Y=S.depthTexture;Y&&Y.isDepthTexture&&(Y.type===_n?te=a.DEPTH_COMPONENT32F:Y.type===Dn&&(te=a.DEPTH_COMPONENT24));const $=Se(S);de(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$,te,S.width,S.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,$,te,S.width,S.height)}else a.renderbufferStorage(a.RENDERBUFFER,te,S.width,S.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const te=Se(S);D&&de(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,te,a.DEPTH24_STENCIL8,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,te,a.DEPTH24_STENCIL8,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,T)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Y=0;Y<te.length;Y++){const $=te[Y],oe=i.convert($.format,$.colorSpace),me=i.convert($.type),ce=M($.internalFormat,oe,me,$.colorSpace),_e=Se(S);D&&de(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,_e,ce,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,_e,ce,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ce,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function se(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const te=r.get(S.depthTexture).__webglTexture,Y=Se(S);if(S.depthTexture.format===Qn)de(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0);else if(S.depthTexture.format===Fi)de(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(T){const S=r.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,T)}else if(D){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=a.createRenderbuffer(),ee(S.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),ee(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function le(T,S,D){const te=r.get(T);S!==void 0&&J(te.__webglFramebuffer,T,T.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),D!==void 0&&ye(T)}function I(T){const S=T.texture,D=r.get(T),te=r.get(S);T.addEventListener("dispose",N),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=S.version,o.memory.textures++);const Y=T.isWebGLCubeRenderTarget===!0,$=T.isWebGLMultipleRenderTargets===!0,oe=p(T)||s;if(Y){D.__webglFramebuffer=[];for(let me=0;me<6;me++)if(s&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[me]=[];for(let ce=0;ce<S.mipmaps.length;ce++)D.__webglFramebuffer[me][ce]=a.createFramebuffer()}else D.__webglFramebuffer[me]=a.createFramebuffer()}else{if(s&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)D.__webglFramebuffer[me]=a.createFramebuffer()}else D.__webglFramebuffer=a.createFramebuffer();if($)if(n.drawBuffers){const me=T.texture;for(let ce=0,_e=me.length;ce<_e;ce++){const Ee=r.get(me[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&de(T)===!1){const me=$?S:[S];D.__webglMultisampledFramebuffer=a.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ce=0;ce<me.length;ce++){const _e=me[ce];D.__webglColorRenderbuffer[ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,D.__webglColorRenderbuffer[ce]);const Ee=i.convert(_e.format,_e.colorSpace),ae=i.convert(_e.type),Ie=M(_e.internalFormat,Ee,ae,_e.colorSpace,T.isXRRenderTarget===!0),Pe=Se(T);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,Ie,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,D.__webglColorRenderbuffer[ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=a.createRenderbuffer(),ee(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Y){t.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture),X(a.TEXTURE_CUBE_MAP,S,oe);for(let me=0;me<6;me++)if(s&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)J(D.__webglFramebuffer[me][ce],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,ce);else J(D.__webglFramebuffer[me],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(S,oe)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const me=T.texture;for(let ce=0,_e=me.length;ce<_e;ce++){const Ee=me[ce],ae=r.get(Ee);t.bindTexture(a.TEXTURE_2D,ae.__webglTexture),X(a.TEXTURE_2D,Ee,oe),J(D.__webglFramebuffer,T,Ee,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,0),y(Ee,oe)&&x(a.TEXTURE_2D)}t.unbindTexture()}else{let me=a.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?me=T.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,te.__webglTexture),X(me,S,oe),s&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)J(D.__webglFramebuffer[ce],T,S,a.COLOR_ATTACHMENT0,me,ce);else J(D.__webglFramebuffer,T,S,a.COLOR_ATTACHMENT0,me,0);y(S,oe)&&x(me),t.unbindTexture()}T.depthBuffer&&ye(T)}function Ne(T){const S=p(T)||s,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,Y=D.length;te<Y;te++){const $=D[te];if(y($,S)){const oe=T.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,me=r.get($).__webglTexture;t.bindTexture(oe,me),x(oe),t.unbindTexture()}}}function ge(T){if(s&&T.samples>0&&de(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,te=T.height;let Y=a.COLOR_BUFFER_BIT;const $=[],oe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=r.get(T),ce=T.isWebGLMultipleRenderTargets===!0;if(ce)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(a.FRAMEBUFFER,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){$.push(a.COLOR_ATTACHMENT0+_e),T.depthBuffer&&$.push(oe);const Ee=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(Y|=a.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Y|=a.STENCIL_BUFFER_BIT)),ce&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,me.__webglColorRenderbuffer[_e]),Ee===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[oe]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[oe])),ce){const ae=r.get(S[_e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ae,0)}a.blitFramebuffer(0,0,D,te,0,0,D,te,Y,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(a.FRAMEBUFFER,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ee=r.get(S[_e]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,Ee,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Se(T){return Math.min(n.maxSamples,T.samples)}function de(T){const S=r.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ue(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function ue(T,S){const D=T.colorSpace,te=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ps||D!==Mn&&D!==Xt&&(tt.getTransfer(D)===at?s===!1?e.has("EXT_sRGB")===!0&&te===an?(T.format=Ps,T.minFilter=Tt,T.generateMipmaps=!1):S=Dc.sRGBToLinear(S):(te!==an||Y!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),S}this.allocateTextureUnit=b,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=J,this.useMultisampledRTT=de}function Og(a,e,t){const r=t.isWebGL2;function n(i,o=Xt){let s;const l=tt.getTransfer(o);if(i===Nn)return a.UNSIGNED_BYTE;if(i===Ec)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return a.UNSIGNED_SHORT_5_5_5_1;if(i===cf)return a.BYTE;if(i===uf)return a.SHORT;if(i===Xs)return a.UNSIGNED_SHORT;if(i===yc)return a.INT;if(i===Dn)return a.UNSIGNED_INT;if(i===_n)return a.FLOAT;if(i===gr)return r?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===ff)return a.ALPHA;if(i===an)return a.RGBA;if(i===hf)return a.LUMINANCE;if(i===df)return a.LUMINANCE_ALPHA;if(i===Qn)return a.DEPTH_COMPONENT;if(i===Fi)return a.DEPTH_STENCIL;if(i===Ps)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===pf)return a.RED;if(i===bc)return a.RED_INTEGER;if(i===mf)return a.RG;if(i===Ac)return a.RG_INTEGER;if(i===wc)return a.RGBA_INTEGER;if(i===Ga||i===za||i===ka||i===Ha)if(l===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lo||i===Po||i===Uo||i===Do)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Io||i===Fo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Io)return l===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===No||i===Oo||i===Bo||i===Go||i===zo||i===ko||i===Ho||i===Vo||i===Wo||i===Xo||i===Yo||i===qo||i===jo||i===Ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===No)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Go)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ko)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ho)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jo)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ko)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Zo||i===Jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Va)return l===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gf||i===Qo||i===$o||i===el)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Va)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===el)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?r?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:n}}class Bg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,r),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new jr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new bt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,n=new On({extensions:{fragDepth:!0},vertexShader:zg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Pt(new yn(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Vg extends Oi{constructor(e,t){super();const r=this;let n=null,i=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new Hg,p=t.getContextAttributes();let m=null,y=null;const x=[],M=[],C=new ke;let w=null;const E=new Ht;E.layers.enable(1),E.viewport=new it;const N=new Ht;N.layers.enable(2),N.viewport=new it;const q=[E,N],v=new Bg;v.layers.enable(1),v.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=x[F];return O===void 0&&(O=new ds,x[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=x[F];return O===void 0&&(O=new ds,x[F]=O),O.getGripSpace()},this.getHand=function(F){let O=x[F];return O===void 0&&(O=new ds,x[F]=O),O.getHandSpace()};function k(F){const O=M.indexOf(F.inputSource);if(O===-1)return;const Q=x[O];Q!==void 0&&(Q.update(F.inputSource,F.frame,c||o),Q.dispatchEvent({type:F.type,data:F.inputSource}))}function b(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",b),n.removeEventListener("inputsourceschange",H);for(let F=0;F<x.length;F++){const O=M[F];O!==null&&(M[F]=null,x[F].disconnect(O))}R=null,U=null,_.reset(),e.setRenderTarget(m),d=null,h=null,f=null,n=null,y=null,X.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){i=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",b),n.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:n.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,O),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ni(d.framebufferWidth,d.framebufferHeight,{format:an,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,Q=null,J=null;p.depth&&(J=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=p.stencil?Fi:Qn,Q=p.stencil?Jn:Dn);const ee={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:i};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer(ee),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ni(h.textureWidth,h.textureHeight,{format:an,type:Nn,depthTexture:new Yc(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const se=e.properties.get(y);se.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),X.setContext(n),X.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function H(F){for(let O=0;O<F.removed.length;O++){const Q=F.removed[O],J=M.indexOf(Q);J>=0&&(M[J]=null,x[J].disconnect(Q))}for(let O=0;O<F.added.length;O++){const Q=F.added[O];let J=M.indexOf(Q);if(J===-1){for(let se=0;se<x.length;se++)if(se>=M.length){M.push(Q),J=se;break}else if(M[se]===null){M[se]=Q,J=se;break}if(J===-1)break}const ee=x[J];ee&&ee.connect(Q)}}const B=new W,Z=new W;function K(F,O,Q){B.setFromMatrixPosition(O.matrixWorld),Z.setFromMatrixPosition(Q.matrixWorld);const J=B.distanceTo(Z),ee=O.projectionMatrix.elements,se=Q.projectionMatrix.elements,ye=ee[14]/(ee[10]-1),le=ee[14]/(ee[10]+1),I=(ee[9]+1)/ee[5],Ne=(ee[9]-1)/ee[5],ge=(ee[8]-1)/ee[0],Se=(se[8]+1)/se[0],de=ye*ge,Ue=ye*Se,ue=J/(-ge+Se),T=ue*-ge;O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(T),F.translateZ(ue),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const S=ye+ue,D=le+ue,te=de-T,Y=Ue+(J-T),$=I*le/D*S,oe=Ne*le/D*S;F.projectionMatrix.makePerspective(te,Y,$,oe,S,D),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function V(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),v.near=N.near=E.near=F.near,v.far=N.far=E.far=F.far,(R!==v.near||U!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far,E.near=R,E.far=U,N.near=R,N.far=U,E.updateProjectionMatrix(),N.updateProjectionMatrix(),F.updateProjectionMatrix());const O=F.parent,Q=v.cameras;V(v,O);for(let J=0;J<Q.length;J++)V(Q[J],O);Q.length===2?K(v,E,N):v.projectionMatrix.copy(E.projectionMatrix),z(F,v,O)};function z(F,O,Q){Q===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy(Q.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=_r*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null};let L=null;function G(F,O){if(u=O.getViewerPose(c||o),g=O,u!==null){const Q=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let J=!1;Q.length!==v.cameras.length&&(v.cameras.length=0,J=!0);for(let se=0;se<Q.length;se++){const ye=Q[se];let le=null;if(d!==null)le=d.getViewport(ye);else{const Ne=f.getViewSubImage(h,ye);le=Ne.viewport,se===0&&(e.setRenderTargetTextures(y,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(y))}let I=q[se];I===void 0&&(I=new Ht,I.layers.enable(se),I.viewport=new it,q[se]=I),I.matrix.fromArray(ye.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ye.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(le.x,le.y,le.width,le.height),se===0&&(v.matrix.copy(I.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),J===!0&&v.cameras.push(I)}const ee=n.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const se=f.getDepthInformation(Q[0]);se&&se.isValid&&se.texture&&_.init(e,se,n.renderState)}}for(let Q=0;Q<x.length;Q++){const J=M[Q],ee=x[Q];J!==null&&ee!==void 0&&ee.update(J,O,c||o)}_.render(e,v),L&&L(F,O),O.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:O}),g=null}const X=new Wc;X.setAnimationLoop(G),this.setAnimationLoop=function(F){L=F},this.dispose=function(){}}}function Wg(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function r(p,m){m.color.getRGB(p.fogColor.value,zc(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),f(p,m)):m.isMeshPhongMaterial?(i(p,m),u(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(i(p,m),g(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),_(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ut&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ut&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=a._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ut&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Xg(a,e,t,r){let n={},i={},o=[];const s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const M=x.program;r.uniformBlockBinding(y,M)}function c(y,x){let M=n[y.id];M===void 0&&(g(y),M=u(y),n[y.id]=M,y.addEventListener("dispose",p));const C=x.program;r.updateUBOMapping(y,C);const w=e.render.frame;i[y.id]!==w&&(h(y),i[y.id]=w)}function u(y){const x=f();y.__bindingPointIndex=x;const M=a.createBuffer(),C=y.__size,w=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,C,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=n[y.id],M=y.uniforms,C=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let w=0,E=M.length;w<E;w++){const N=Array.isArray(M[w])?M[w]:[M[w]];for(let q=0,v=N.length;q<v;q++){const R=N[q];if(d(R,w,q,C)===!0){const U=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let b=0;for(let H=0;H<k.length;H++){const B=k[H],Z=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,U+b,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,b),b+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,U,R.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,x,M,C){const w=y.value,E=x+"_"+M;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const N=C[E];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return C[E]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(y){const x=y.uniforms;let M=0;const C=16;for(let E=0,N=x.length;E<N;E++){const q=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,R=q.length;v<R;v++){const U=q[v],k=Array.isArray(U.value)?U.value:[U.value];for(let b=0,H=k.length;b<H;b++){const B=k[b],Z=_(B),K=M%C;K!==0&&C-K<Z.boundary&&(M+=C-K),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Z.storage}}}const w=M%C;return w>0&&(M+=C-w),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),a.deleteBuffer(n[x.id]),delete n[x.id],delete i[x.id]}function m(){for(const y in n)a.deleteBuffer(n[y]);o=[],n={},i={}}return{bind:l,update:c,dispose:m}}class eu{constructor(e={}){const{canvas:t=kf(),context:r=null,depth:n=!0,stencil:i=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let M=!1,C=0,w=0,E=null,N=-1,q=null;const v=new it,R=new it;let U=null;const k=new Ze(0);let b=0,H=t.width,B=t.height,Z=1,K=null,V=null;const z=new it(0,0,H,B),L=new it(0,0,H,B);let G=!1;const X=new Ks;let F=!1,O=!1,Q=null;const J=new st,ee=new ke,se=new W,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return E===null?Z:1}let I=r;function Ne(A,j){for(let ie=0;ie<A.length;ie++){const re=A[ie],ne=t.getContext(re,j);if(ne!==null)return ne}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ws}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",Me,!1),I===null){const j=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&j.shift(),I=Ne(j,A),I===null)throw Ne(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,Se,de,Ue,ue,T,S,D,te,Y,$,oe,me,ce,_e,Ee,ae,Ie,Pe,Te,ve,fe,we,Oe;function je(){ge=new em(I),Se=new jp(I,ge,e),ge.init(Se),fe=new Og(I,ge,Se),de=new Fg(I,ge,Se),Ue=new im(I),ue=new Eg,T=new Ng(I,ge,de,ue,Se,fe,Ue),S=new Zp(x),D=new $p(x),te=new fh(I,Se),we=new Yp(I,ge,te,Se),Y=new tm(I,te,Ue,we),$=new om(I,Y,te,Ue),Pe=new sm(I,Se,T),Ee=new Kp(ue),oe=new yg(x,S,D,ge,Se,we,Ee),me=new Wg(x,ue),ce=new bg,_e=new Pg(ge,Se),Ie=new Xp(x,S,D,de,$,h,l),ae=new Ig(x,$,Se),Oe=new Xg(I,Ue,Se,de),Te=new qp(I,ge,Ue,Se),ve=new nm(I,ge,Ue,Se),Ue.programs=oe.programs,x.capabilities=Se,x.extensions=ge,x.properties=ue,x.renderLists=ce,x.shadowMap=ae,x.state=de,x.info=Ue}je();const De=new Vg(x,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(H,B,!1))},this.getSize=function(A){return A.set(H,B)},this.setSize=function(A,j,ie=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,B=j,t.width=Math.floor(A*Z),t.height=Math.floor(j*Z),ie===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(H*Z,B*Z).floor()},this.setDrawingBufferSize=function(A,j,ie){H=A,B=j,Z=ie,t.width=Math.floor(A*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,j,ie,re){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,j,ie,re),de.viewport(v.copy(z).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(L)},this.setScissor=function(A,j,ie,re){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,j,ie,re),de.scissor(R.copy(L).multiplyScalar(Z).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){de.setScissorTest(G=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(A=!0,j=!0,ie=!0){let re=0;if(A){let ne=!1;if(E!==null){const Re=E.texture.format;ne=Re===wc||Re===Ac||Re===bc}if(ne){const Re=E.texture.type,Fe=Re===Nn||Re===Dn||Re===Xs||Re===Jn||Re===Ec||Re===Tc,Ge=Ie.getClearColor(),pe=Ie.getClearAlpha(),He=Ge.r,Ve=Ge.g,ze=Ge.b;Fe?(d[0]=He,d[1]=Ve,d[2]=ze,d[3]=pe,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=He,g[1]=Ve,g[2]=ze,g[3]=pe,I.clearBufferiv(I.COLOR,0,g))}else re|=I.COLOR_BUFFER_BIT}j&&(re|=I.DEPTH_BUFFER_BIT),ie&&(re|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ce.dispose(),_e.dispose(),ue.dispose(),S.dispose(),D.dispose(),$.dispose(),we.dispose(),Oe.dispose(),oe.dispose(),De.dispose(),De.removeEventListener("sessionstart",$e),De.removeEventListener("sessionend",We),Q&&(Q.dispose(),Q=null),Je.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Ue.autoReset,j=ae.enabled,ie=ae.autoUpdate,re=ae.needsUpdate,ne=ae.type;je(),Ue.autoReset=A,ae.enabled=j,ae.autoUpdate=ie,ae.needsUpdate=re,ae.type=ne}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const j=A.target;j.removeEventListener("dispose",he),xe(j)}function xe(A){Ce(A),ue.remove(A)}function Ce(A){const j=ue.get(A).programs;j!==void 0&&(j.forEach(function(ie){oe.releaseProgram(ie)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ie,re,ne,Re){j===null&&(j=ye);const Fe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ge=Sr(A,j,ie,re,ne);de.setMaterial(re,Fe);let pe=ie.index,He=1;if(re.wireframe===!0){if(pe=Y.getWireframeAttribute(ie),pe===void 0)return;He=2}const Ve=ie.drawRange,ze=ie.attributes.position;let nt=Ve.start*He,St=(Ve.start+Ve.count)*He;Re!==null&&(nt=Math.max(nt,Re.start*He),St=Math.min(St,(Re.start+Re.count)*He)),pe!==null?(nt=Math.max(nt,0),St=Math.min(St,pe.count)):ze!=null&&(nt=Math.max(nt,0),St=Math.min(St,ze.count));const ct=St-nt;if(ct<0||ct===1/0)return;we.setup(ne,re,Ge,ie,pe);let It,et=Te;if(pe!==null&&(It=te.get(pe),et=ve,et.setIndex(It)),ne.isMesh)re.wireframe===!0?(de.setLineWidth(re.wireframeLinewidth*le()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(ne.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),de.setLineWidth(Ye*le()),ne.isLineSegments?et.setMode(I.LINES):ne.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else ne.isPoints?et.setMode(I.POINTS):ne.isSprite&&et.setMode(I.TRIANGLES);if(ne.isBatchedMesh)et.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)et.renderInstances(nt,ct,ne.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,En=Math.min(ie.instanceCount,Ye);et.renderInstances(nt,ct,En)}else et.render(nt,ct)};function Be(A,j,ie){A.transparent===!0&&A.side===Wt&&A.forceSinglePass===!1?(A.side=Ut,A.needsUpdate=!0,Dt(A,j,ie),A.side=Sn,A.needsUpdate=!0,Dt(A,j,ie),A.side=Wt):Dt(A,j,ie)}this.compile=function(A,j,ie=null){ie===null&&(ie=A),p=_e.get(ie),p.init(),y.push(p),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),A!==ie&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(x._useLegacyLights);const re=new Set;return A.traverse(function(ne){const Re=ne.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){const Ge=Re[Fe];Be(Ge,ie,ne),re.add(Ge)}else Be(Re,ie,ne),re.add(Re)}),y.pop(),p=null,re},this.compileAsync=function(A,j,ie=null){const re=this.compile(A,j,ie);return new Promise(ne=>{function Re(){if(re.forEach(function(Fe){ue.get(Fe).currentProgram.isReady()&&re.delete(Fe)}),re.size===0){ne(A);return}setTimeout(Re,10)}ge.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Le=null;function Xe(A){Le&&Le(A)}function $e(){Je.stop()}function We(){Je.start()}const Je=new Wc;Je.setAnimationLoop(Xe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(A){Le=A,De.setAnimationLoop(A),A===null?Je.stop():Je.start()},De.addEventListener("sessionstart",$e),De.addEventListener("sessionend",We),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(j),j=De.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,j,E),p=_e.get(A,y.length),p.init(),y.push(p),J.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X.setFromProjectionMatrix(J),O=this.localClippingEnabled,F=Ee.init(this.clippingPlanes,O),_=ce.get(A,m.length),_.init(),m.push(_),lt(A,j,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,V),this.info.render.frame++,F===!0&&Ee.beginShadows();const ie=p.state.shadowsArray;if(ae.render(ie,A,j),F===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1)&&Ie.render(_,A),p.setupLights(x._useLegacyLights),j.isArrayCamera){const re=j.cameras;for(let ne=0,Re=re.length;ne<Re;ne++){const Fe=re[ne];qt(_,A,Fe,Fe.viewport)}}else qt(_,A,j);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,j),we.resetDefaultState(),N=-1,q=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function lt(A,j,ie,re){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){re&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const Fe=$.update(A),Ge=A.material;Ge.visible&&_.push(A,Fe,Ge,ie,se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const Fe=$.update(A),Ge=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),se.copy(Fe.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Ge)){const pe=Fe.groups;for(let He=0,Ve=pe.length;He<Ve;He++){const ze=pe[He],nt=Ge[ze.materialIndex];nt&&nt.visible&&_.push(A,Fe,nt,ie,se.z,ze)}}else Ge.visible&&_.push(A,Fe,Ge,ie,se.z,null)}}const Re=A.children;for(let Fe=0,Ge=Re.length;Fe<Ge;Fe++)lt(Re[Fe],j,ie,re)}function qt(A,j,ie,re){const ne=A.opaque,Re=A.transmissive,Fe=A.transparent;p.setupLightsView(ie),F===!0&&Ee.setGlobalState(x.clippingPlanes,ie),Re.length>0&&jt(ne,Re,j,ie),re&&de.viewport(v.copy(re)),ne.length>0&&Bt(ne,j,ie),Re.length>0&&Bt(Re,j,ie),Fe.length>0&&Bt(Fe,j,ie),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function jt(A,j,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const Re=Se.isWebGL2;Q===null&&(Q=new ni(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?gr:Nn,minFilter:Zn,samples:Re?4:0})),x.getDrawingBufferSize(ee),Re?Q.setSize(ee.x,ee.y):Q.setSize(ma(ee.x),ma(ee.y));const Fe=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(k),b=x.getClearAlpha(),b<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=Fn,Bt(A,ie,re),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q);let pe=!1;for(let He=0,Ve=j.length;He<Ve;He++){const ze=j[He],nt=ze.object,St=ze.geometry,ct=ze.material,It=ze.group;if(ct.side===Wt&&nt.layers.test(re.layers)){const et=ct.side;ct.side=Ut,ct.needsUpdate=!0,ln(nt,ie,re,St,ct,It),ct.side=et,ct.needsUpdate=!0,pe=!0}}pe===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q)),x.setRenderTarget(Fe),x.setClearColor(k,b),x.toneMapping=Ge}function Bt(A,j,ie){const re=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,Re=A.length;ne<Re;ne++){const Fe=A[ne],Ge=Fe.object,pe=Fe.geometry,He=re===null?Fe.material:re,Ve=Fe.group;Ge.layers.test(ie.layers)&&ln(Ge,j,ie,pe,He,Ve)}}function ln(A,j,ie,re,ne,Re){A.onBeforeRender(x,j,ie,re,ne,Re),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(x,j,ie,re,A,Re),ne.transparent===!0&&ne.side===Wt&&ne.forceSinglePass===!1?(ne.side=Ut,ne.needsUpdate=!0,x.renderBufferDirect(ie,j,re,ne,A,Re),ne.side=Sn,ne.needsUpdate=!0,x.renderBufferDirect(ie,j,re,ne,A,Re),ne.side=Wt):x.renderBufferDirect(ie,j,re,ne,A,Re),A.onAfterRender(x,j,ie,re,ne,Re)}function Dt(A,j,ie){j.isScene!==!0&&(j=ye);const re=ue.get(A),ne=p.state.lights,Re=p.state.shadowsArray,Fe=ne.state.version,Ge=oe.getParameters(A,ne.state,Re,j,ie),pe=oe.getProgramCacheKey(Ge);let He=re.programs;re.environment=A.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(A.isMeshStandardMaterial?D:S).get(A.envMap||re.environment),He===void 0&&(A.addEventListener("dispose",he),He=new Map,re.programs=He);let Ve=He.get(pe);if(Ve!==void 0){if(re.currentProgram===Ve&&re.lightsStateVersion===Fe)return cn(A,Ge),Ve}else Ge.uniforms=oe.getUniforms(A),A.onBuild(ie,Ge,x),A.onBeforeCompile(Ge,x),Ve=oe.acquireProgram(Ge,pe),He.set(pe,Ve),re.uniforms=Ge.uniforms;const ze=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Ee.uniform),cn(A,Ge),re.needsLights=Aa(A),re.lightsStateVersion=Fe,re.needsLights&&(ze.ambientLightColor.value=ne.state.ambient,ze.lightProbe.value=ne.state.probe,ze.directionalLights.value=ne.state.directional,ze.directionalLightShadows.value=ne.state.directionalShadow,ze.spotLights.value=ne.state.spot,ze.spotLightShadows.value=ne.state.spotShadow,ze.rectAreaLights.value=ne.state.rectArea,ze.ltc_1.value=ne.state.rectAreaLTC1,ze.ltc_2.value=ne.state.rectAreaLTC2,ze.pointLights.value=ne.state.point,ze.pointLightShadows.value=ne.state.pointShadow,ze.hemisphereLights.value=ne.state.hemi,ze.directionalShadowMap.value=ne.state.directionalShadowMap,ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ze.spotShadowMap.value=ne.state.spotShadowMap,ze.spotLightMatrix.value=ne.state.spotLightMatrix,ze.spotLightMap.value=ne.state.spotLightMap,ze.pointShadowMap.value=ne.state.pointShadowMap,ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=Ve,re.uniformsList=null,Ve}function pt(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=aa.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function cn(A,j){const ie=ue.get(A);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Sr(A,j,ie,re,ne){j.isScene!==!0&&(j=ye),T.resetTextureUnits();const Re=j.fog,Fe=re.isMeshStandardMaterial?j.environment:null,Ge=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Mn,pe=(re.isMeshStandardMaterial?D:S).get(re.envMap||Fe),He=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ve=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),ze=!!ie.morphAttributes.position,nt=!!ie.morphAttributes.normal,St=!!ie.morphAttributes.color;let ct=Fn;re.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ct=x.toneMapping);const It=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,et=It!==void 0?It.length:0,Ye=ue.get(re),En=p.state.lights;if(F===!0&&(O===!0||A!==q)){const Mt=A===q&&re.id===N;Ee.setState(re,A,Mt)}let rt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==En.state.version||Ye.outputColorSpace!==Ge||ne.isBatchedMesh&&Ye.batching===!1||!ne.isBatchedMesh&&Ye.batching===!0||ne.isInstancedMesh&&Ye.instancing===!1||!ne.isInstancedMesh&&Ye.instancing===!0||ne.isSkinnedMesh&&Ye.skinning===!1||!ne.isSkinnedMesh&&Ye.skinning===!0||ne.isInstancedMesh&&Ye.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ye.instancingColor===!1&&ne.instanceColor!==null||Ye.envMap!==pe||re.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==He||Ye.vertexTangents!==Ve||Ye.morphTargets!==ze||Ye.morphNormals!==nt||Ye.morphColors!==St||Ye.toneMapping!==ct||Se.isWebGL2===!0&&Ye.morphTargetsCount!==et)&&(rt=!0):(rt=!0,Ye.__version=re.version);let Kt=Ye.currentProgram;rt===!0&&(Kt=Dt(re,j,ne));let Xi=!1,Zt=!1,Bn=!1;const ot=Kt.getUniforms(),Jt=Ye.uniforms;if(de.useProgram(Kt.program)&&(Xi=!0,Zt=!0,Bn=!0),re.id!==N&&(N=re.id,Zt=!0),Xi||q!==A){ot.setValue(I,"projectionMatrix",A.projectionMatrix),ot.setValue(I,"viewMatrix",A.matrixWorldInverse);const Mt=ot.map.cameraPosition;Mt!==void 0&&Mt.setValue(I,se.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&ot.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,Zt=!0,Bn=!0)}if(ne.isSkinnedMesh){ot.setOptional(I,ne,"bindMatrix"),ot.setOptional(I,ne,"bindMatrixInverse");const Mt=ne.skeleton;Mt&&(Se.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),ot.setValue(I,"boneTexture",Mt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(ot.setOptional(I,ne,"batchingTexture"),ot.setValue(I,"batchingTexture",ne._matricesTexture,T));const Gn=ie.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0&&Se.isWebGL2===!0)&&Pe.update(ne,ie,Kt),(Zt||Ye.receiveShadow!==ne.receiveShadow)&&(Ye.receiveShadow=ne.receiveShadow,ot.setValue(I,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Jt.envMap.value=pe,Jt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),Zt&&(ot.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Wi(Jt,Bn),Re&&re.fog===!0&&me.refreshFogUniforms(Jt,Re),me.refreshMaterialUniforms(Jt,re,Z,B,Q),aa.upload(I,pt(Ye),Jt,T)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(aa.upload(I,pt(Ye),Jt,T),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&ot.setValue(I,"center",ne.center),ot.setValue(I,"modelViewMatrix",ne.modelViewMatrix),ot.setValue(I,"normalMatrix",ne.normalMatrix),ot.setValue(I,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Mt=re.uniformsGroups;for(let Ft=0,wa=Mt.length;Ft<wa;Ft++)if(Se.isWebGL2){const zn=Mt[Ft];Oe.update(zn,Kt),Oe.bind(zn,Kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kt}function Wi(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Aa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,j,ie){ue.get(A.texture).__webglTexture=j,ue.get(A.depthTexture).__webglTexture=ie;const re=ue.get(A);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,j){const ie=ue.get(A);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,ie=0){E=A,C=j,w=ie;let re=!0,ne=null,Re=!1,Fe=!1;if(A){const pe=ue.get(A);pe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(I.FRAMEBUFFER,null),re=!1):pe.__webglFramebuffer===void 0?T.setupRenderTarget(A):pe.__hasExternalTextures&&T.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Fe=!0);const Ve=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[j])?ne=Ve[j][ie]:ne=Ve[j],Re=!0):Se.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?ne=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?ne=Ve[ie]:ne=Ve,v.copy(A.viewport),R.copy(A.scissor),U=A.scissorTest}else v.copy(z).multiplyScalar(Z).floor(),R.copy(L).multiplyScalar(Z).floor(),U=G;if(de.bindFramebuffer(I.FRAMEBUFFER,ne)&&Se.drawBuffers&&re&&de.drawBuffers(A,ne),de.viewport(v),de.scissor(R),de.setScissorTest(U),Re){const pe=ue.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe.__webglTexture,ie)}else if(Fe){const pe=ue.get(A.texture),He=j||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.__webglTexture,ie||0,He)}N=-1},this.readRenderTargetPixels=function(A,j,ie,re,ne,Re,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){de.bindFramebuffer(I.FRAMEBUFFER,Ge);try{const pe=A.texture,He=pe.format,Ve=pe.type;if(He!==an&&fe.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ve===gr&&(ge.has("EXT_color_buffer_half_float")||Se.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ve!==Nn&&fe.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===_n&&(Se.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-re&&ie>=0&&ie<=A.height-ne&&I.readPixels(j,ie,re,ne,fe.convert(He),fe.convert(Ve),Re)}finally{const pe=E!==null?ue.get(E).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(A,j,ie=0){const re=Math.pow(2,-ie),ne=Math.floor(j.image.width*re),Re=Math.floor(j.image.height*re);T.setTexture2D(j,0),I.copyTexSubImage2D(I.TEXTURE_2D,ie,0,0,A.x,A.y,ne,Re),de.unbindTexture()},this.copyTextureToTexture=function(A,j,ie,re=0){const ne=j.image.width,Re=j.image.height,Fe=fe.convert(ie.format),Ge=fe.convert(ie.type);T.setTexture2D(ie,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ie.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ie.unpackAlignment),j.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,re,A.x,A.y,ne,Re,Fe,Ge,j.image.data):j.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,re,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,Fe,j.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,re,A.x,A.y,Fe,Ge,j.image),re===0&&ie.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ie,re,ne=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,Fe=A.max.y-A.min.y+1,Ge=A.max.z-A.min.z+1,pe=fe.convert(re.format),He=fe.convert(re.type);let Ve;if(re.isData3DTexture)T.setTexture3D(re,0),Ve=I.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)T.setTexture2DArray(re,0),Ve=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,re.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,re.unpackAlignment);const ze=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),St=I.getParameter(I.UNPACK_SKIP_PIXELS),ct=I.getParameter(I.UNPACK_SKIP_ROWS),It=I.getParameter(I.UNPACK_SKIP_IMAGES),et=ie.isCompressedTexture?ie.mipmaps[ne]:ie.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),ie.isDataTexture||ie.isData3DTexture?I.texSubImage3D(Ve,ne,j.x,j.y,j.z,Re,Fe,Ge,pe,He,et.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ve,ne,j.x,j.y,j.z,Re,Fe,Ge,pe,et.data)):I.texSubImage3D(Ve,ne,j.x,j.y,j.z,Re,Fe,Ge,pe,He,et),I.pixelStorei(I.UNPACK_ROW_LENGTH,ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,St),I.pixelStorei(I.UNPACK_SKIP_ROWS,ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,It),ne===0&&re.generateMipmaps&&I.generateMipmap(Ve),de.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){C=0,w=0,E=null,de.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ys?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?$n:Cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$n?gt:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Yg extends eu{}Yg.prototype.isWebGL1Renderer=!0;class Js{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=r}clone(){return new Js(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qg extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ls,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ei("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,i=this.stride;n<i;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rt=new W;class _a{constructor(e,t,r,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=sn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qe(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),r=Qe(r,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),r=Qe(r,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qs extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yi;const ar=new W,Ei=new W,Ti=new W,bi=new ke,sr=new ke,tu=new st,Kr=new W,or=new W,Zr=new W,Wl=new ke,ps=new ke,Xl=new ke;class nu extends ft{constructor(e=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new jg(t,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new _a(r,3,0,!1)),yi.setAttribute("uv",new _a(r,2,3,!1))}this.geometry=yi,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Ti.z);const r=this.material.rotation;let n,i;r!==0&&(i=Math.cos(r),n=Math.sin(r));const o=this.center;Jr(Kr.set(-.5,-.5,0),Ti,o,Ei,n,i),Jr(or.set(.5,-.5,0),Ti,o,Ei,n,i),Jr(Zr.set(.5,.5,0),Ti,o,Ei,n,i),Wl.set(0,0),ps.set(1,0),Xl.set(1,1);let s=e.ray.intersectTriangle(Kr,or,Zr,!1,ar);if(s===null&&(Jr(or.set(-.5,.5,0),Ti,o,Ei,n,i),ps.set(0,1),s=e.ray.intersectTriangle(Kr,Zr,or,!1,ar),s===null))return;const l=e.ray.origin.distanceTo(ar);l<e.near||l>e.far||t.push({distance:l,point:ar.clone(),uv:on.getInterpolation(ar,Kr,or,Zr,Wl,ps,Xl,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jr(a,e,t,r,n,i){bi.subVectors(a,t).addScalar(.5).multiply(r),n!==void 0?(sr.x=i*bi.x-n*bi.y,sr.y=n*bi.x+i*bi.y):sr.copy(bi),a.copy(e),a.x+=sr.x,a.y+=sr.y,a.applyMatrix4(tu)}class Kg extends At{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class iu extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new W,ql=new W,jl=new st,ms=new js,Qr=new Gi;class Zg extends ft{constructor(e=new wt,t=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)Yl.fromBufferAttribute(t,n-1),ql.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=Yl.distanceTo(ql);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Qr.copy(r.boundingSphere),Qr.applyMatrix4(n),Qr.radius+=i,e.ray.intersectsSphere(Qr)===!1)return;jl.copy(n).invert(),ms.copy(e.ray).applyMatrix4(jl);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new W,u=new W,f=new W,h=new W,d=this.isLineSegments?2:1,g=r.index,p=r.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=m,M=y-1;x<M;x+=d){const C=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,w),ms.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||t.push({distance:N,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let x=m,M=y-1;x<M;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),ms.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}class $s extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kl=new st,Is=new js,$r=new Gi,ea=new W;class ru extends ft{constructor(e=new wt,t=new $s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$r.copy(r.boundingSphere),$r.applyMatrix4(n),$r.radius+=i,e.ray.intersectsSphere($r)===!1)return;Kl.copy(n).invert(),Is.copy(e.ray).applyMatrix4(Kl);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=r.index,f=r.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const p=c.getX(g);ea.fromBufferAttribute(f,p),Zl(ea,p,l,n,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)ea.fromBufferAttribute(f,g),Zl(ea,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function Zl(a,e,t,r,n,i,o){const s=Is.distanceSqToPoint(a);if(s<t){const l=new W;Is.closestPointToPoint(a,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;i.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class eo extends bt{constructor(e,t,r,n,i,o,s,l,c){super(e,t,r,n,i,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,n=this.getPoint(0),i=0;t.push(0);for(let o=1;o<=e;o++)r=this.getPoint(o/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let n=0;const i=r.length;let o;t?o=t:o=e*r[i-1];let s=0,l=i-1,c;for(;s<=l;)if(n=Math.floor(s+(l-s)/2),c=r[n]-o,c<0)s=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,r[n]===o)return n/(i-1);const u=r[n],h=r[n+1]-u,d=(o-u)/h;return(n+d)/(i-1)}getTangent(e,t){let n=e-1e-4,i=e+1e-4;n<0&&(n=0),i>1&&(i=1);const o=this.getPoint(n),s=this.getPoint(i),l=t||(o.isVector2?new ke:new W);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new W,n=[],i=[],o=[],s=new W,l=new st;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new W)}i[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),f=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=c&&(c=u,r.set(1,0,0)),f<=c&&(c=f,r.set(0,1,0)),h<=c&&r.set(0,0,1),s.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],s),o[0].crossVectors(n[0],i[0]);for(let d=1;d<=e;d++){if(i[d]=i[d-1].clone(),o[d]=o[d-1].clone(),s.crossVectors(n[d-1],n[d]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(xt(n[d-1].dot(n[d]),-1,1));i[d].applyMatrix4(l.makeRotationAxis(s,g))}o[d].crossVectors(n[d],i[d])}if(t===!0){let d=Math.acos(xt(i[0].dot(i[e]),-1,1));d/=e,n[0].dot(s.crossVectors(i[0],i[e]))>0&&(d=-d);for(let g=1;g<=e;g++)i[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],i[g])}return{tangents:n,normals:i,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Qg(a,e){const t=1-a;return t*t*t*e}function $g(a,e){const t=1-a;return 3*t*t*a*e}function e_(a,e){return 3*(1-a)*a*a*e}function t_(a,e){return a*a*a*e}function gs(a,e,t,r,n){return Qg(a,e)+$g(a,t)+e_(a,r)+t_(a,n)}class n_ extends Jg{constructor(e=new W,t=new W,r=new W,n=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new W){const r=t,n=this.v0,i=this.v1,o=this.v2,s=this.v3;return r.set(gs(e,n.x,i.x,o.x,s.x),gs(e,n.y,i.y,o.y,s.y),gs(e,n.z,i.z,o.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class to extends wt{constructor(e=.5,t=1,r=32,n=1,i=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:n,thetaStart:i,thetaLength:o},r=Math.max(3,r),n=Math.max(1,n);const s=[],l=[],c=[],u=[];let f=e;const h=(t-e)/n,d=new W,g=new ke;for(let _=0;_<=n;_++){for(let p=0;p<=r;p++){const m=i+p/r*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<n;_++){const p=_*(r+1);for(let m=0;m<r;m++){const y=m+p,x=y,M=y+r+1,C=y+r+2,w=y+1;s.push(x,M,w),s.push(M,C,w)}}this.setIndex(s),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class no extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _s=new st,Jl=new W,Ql=new W;class au{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jl),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),_s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_s),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(_s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $l=new st,lr=new W,vs=new W;class i_ extends au{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),r.position.copy(lr),vs.copy(r.position),vs.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(vs),r.updateMatrixWorld(),n.makeTranslation(-lr.x,-lr.y,-lr.z),$l.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l)}}class r_ extends no{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new i_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class a_ extends au{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class su extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new a_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class s_ extends no{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class o_ extends wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class l_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ec();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ec(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ws}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ws);function c_(){var a=Object.create(null);function e(n,i){var o=n.id,s=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=r("<"+s+">.init",c),u&&(u=r("<"+s+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[o]={id:o,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var o,s=n.id,l=n.args;(!a[s]||typeof a[s].value!="function")&&i(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var c=(o=a[s]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=a[s].getTransferables&&a[s].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(d){console.error(d),i(d)}}}function r(n,i){var o=void 0;self.troikaDefine=function(l){return o=l};var s=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(l){console.error(l)}return URL.revokeObjectURL(s),delete self.troikaDefine,o}self.addEventListener("message",function(n){var i=n.data,o=i.messageId,s=i.action,l=i.data;try{s==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),s==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function u_(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var ou=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return ou=function(){return a},a},f_=0,h_=0,xs=!1,pr=Object.create(null),mr=Object.create(null),Fs=Object.create(null);function Hi(a){if((!a||typeof a.init!="function")&&!xs)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId;if(!ou())return u_(a);n==null&&(n="#default");var i="workerModule"+ ++f_,o=a.name||i,s=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(xs=!0,c=Hi({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+sa(c)+`
)}`}),xs=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!s){s=tc(n,"registerModule",l.workerModuleData);var f=function(){s=null,mr[n].delete(f)};(mr[n]||(mr[n]=new Set)).add(f)}return s.then(function(h){var d=h.isCallable;if(d)return tc(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:o,dependencies:e,init:sa(t),getTransferables:r&&sa(r)},l}function d_(a){mr[a]&&mr[a].forEach(function(e){e()}),pr[a]&&(pr[a].terminate(),delete pr[a])}function sa(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function p_(a){var e=pr[a];if(!e){var t=sa(c_);e=pr[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,o=Fs[i];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Fs[i],o(n)}}return e}function tc(a,e,t){return new Promise(function(r,n){var i=++h_;Fs[i]=function(o){o.success?r(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},p_(a).postMessage({messageId:i,action:e,data:t})})}function lu(){var a=function(e){function t(V,z,L,G,X,F,O,Q){var J=1-O;Q.x=J*J*V+2*J*O*L+O*O*X,Q.y=J*J*z+2*J*O*G+O*O*F}function r(V,z,L,G,X,F,O,Q,J,ee){var se=1-J;ee.x=se*se*se*V+3*se*se*J*L+3*se*J*J*X+J*J*J*O,ee.y=se*se*se*z+3*se*se*J*G+3*se*J*J*F+J*J*J*Q}function n(V,z){for(var L=/([MLQCZ])([^MLQCZ]*)/g,G,X,F,O,Q;G=L.exec(V);){var J=G[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ee){return parseFloat(ee)});switch(G[1]){case"M":O=X=J[0],Q=F=J[1];break;case"L":(J[0]!==O||J[1]!==Q)&&z("L",O,Q,O=J[0],Q=J[1]);break;case"Q":{z("Q",O,Q,O=J[2],Q=J[3],J[0],J[1]);break}case"C":{z("C",O,Q,O=J[4],Q=J[5],J[0],J[1],J[2],J[3]);break}case"Z":(O!==X||Q!==F)&&z("L",O,Q,X,F);break}}}function i(V,z,L){L===void 0&&(L=16);var G={x:0,y:0};n(V,function(X,F,O,Q,J,ee,se,ye,le){switch(X){case"L":z(F,O,Q,J);break;case"Q":{for(var I=F,Ne=O,ge=1;ge<L;ge++)t(F,O,ee,se,Q,J,ge/(L-1),G),z(I,Ne,G.x,G.y),I=G.x,Ne=G.y;break}case"C":{for(var Se=F,de=O,Ue=1;Ue<L;Ue++)r(F,O,ee,se,ye,le,Q,J,Ue/(L-1),G),z(Se,de,G.x,G.y),Se=G.x,de=G.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,z){var L=V.getContext?V.getContext("webgl",c):V,G=l.get(L);if(!G){let Se=function(D){var te=F[D];if(!te&&(te=F[D]=L.getExtension(D),!te))throw new Error(D+" not supported");return te},de=function(D,te){var Y=L.createShader(te);return L.shaderSource(Y,D),L.compileShader(Y),Y},Ue=function(D,te,Y,$){if(!O[D]){var oe={},me={},ce=L.createProgram();L.attachShader(ce,de(te,L.VERTEX_SHADER)),L.attachShader(ce,de(Y,L.FRAGMENT_SHADER)),L.linkProgram(ce),O[D]={program:ce,transaction:function(Ee){L.useProgram(ce),Ee({setUniform:function(Ie,Pe){for(var Te=[],ve=arguments.length-2;ve-- >0;)Te[ve]=arguments[ve+2];var fe=me[Pe]||(me[Pe]=L.getUniformLocation(ce,Pe));L["uniform"+Ie].apply(L,[fe].concat(Te))},setAttribute:function(Ie,Pe,Te,ve,fe){var we=oe[Ie];we||(we=oe[Ie]={buf:L.createBuffer(),loc:L.getAttribLocation(ce,Ie),data:null}),L.bindBuffer(L.ARRAY_BUFFER,we.buf),L.vertexAttribPointer(we.loc,Pe,L.FLOAT,!1,0,0),L.enableVertexAttribArray(we.loc),X?L.vertexAttribDivisor(we.loc,ve):Se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(we.loc,ve),fe!==we.data&&(L.bufferData(L.ARRAY_BUFFER,fe,Te),we.data=fe)}})}}}O[D].transaction($)},ue=function(D,te){J++;try{L.activeTexture(L.TEXTURE0+J);var Y=Q[D];Y||(Y=Q[D]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,Y),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,Y),te(Y,J)}finally{J--}},T=function(D,te,Y){var $=L.createFramebuffer();ee.push($),L.bindFramebuffer(L.FRAMEBUFFER,$),L.activeTexture(L.TEXTURE0+te),L.bindTexture(L.TEXTURE_2D,D),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,D,0);try{Y($)}finally{L.deleteFramebuffer($),L.bindFramebuffer(L.FRAMEBUFFER,ee[--ee.length-1]||null)}},S=function(){F={},O={},Q={},J=-1,ee.length=0};var se=Se,ye=de,le=Ue,I=ue,Ne=T,ge=S,X=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,F={},O={},Q={},J=-1,ee=[];L.canvas.addEventListener("webglcontextlost",function(D){S(),D.preventDefault()},!1),l.set(L,G={gl:L,isWebGL2:X,getExtension:Se,withProgram:Ue,withTexture:ue,withTextureFramebuffer:T,handleContextLoss:S})}z(G)}function f(V,z,L,G,X,F,O,Q){O===void 0&&(O=15),Q===void 0&&(Q=null),u(V,function(J){var ee=J.gl,se=J.withProgram,ye=J.withTexture;ye("copy",function(le,I){ee.texImage2D(ee.TEXTURE_2D,0,ee.RGBA,X,F,0,ee.RGBA,ee.UNSIGNED_BYTE,z),se("copy",o,s,function(Ne){var ge=Ne.setUniform,Se=Ne.setAttribute;Se("aUV",2,ee.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),ge("1i","image",I),ee.bindFramebuffer(ee.FRAMEBUFFER,Q||null),ee.disable(ee.BLEND),ee.colorMask(O&8,O&4,O&2,O&1),ee.viewport(L,G,X,F),ee.scissor(L,G,X,F),ee.drawArrays(ee.TRIANGLES,0,3)})})})}function h(V,z,L){var G=V.width,X=V.height;u(V,function(F){var O=F.gl,Q=new Uint8Array(G*X*4);O.readPixels(0,0,G,X,O.RGBA,O.UNSIGNED_BYTE,Q),V.width=z,V.height=L,f(O,Q,0,0,G,X)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(V,z,L,G,X,F){F===void 0&&(F=1);var O=new Uint8Array(V*z),Q=G[2]-G[0],J=G[3]-G[1],ee=[];i(L,function(Se,de,Ue,ue){ee.push({x1:Se,y1:de,x2:Ue,y2:ue,minX:Math.min(Se,Ue),minY:Math.min(de,ue),maxX:Math.max(Se,Ue),maxY:Math.max(de,ue)})}),ee.sort(function(Se,de){return Se.maxX-de.maxX});for(var se=0;se<V;se++)for(var ye=0;ye<z;ye++){var le=Ne(G[0]+Q*(se+.5)/V,G[1]+J*(ye+.5)/z),I=Math.pow(1-Math.abs(le)/X,F)/2;le<0&&(I=1-I),I=Math.max(0,Math.min(255,Math.round(I*255))),O[ye*V+se]=I}return O;function Ne(Se,de){for(var Ue=1/0,ue=1/0,T=ee.length;T--;){var S=ee[T];if(S.maxX+ue<=Se)break;if(Se+ue>S.minX&&de-ue<S.maxY&&de+ue>S.minY){var D=m(Se,de,S.x1,S.y1,S.x2,S.y2);D<Ue&&(Ue=D,ue=Math.sqrt(Ue))}}return ge(Se,de)&&(ue=-ue),ue}function ge(Se,de){for(var Ue=0,ue=ee.length;ue--;){var T=ee[ue];if(T.maxX<=Se)break;var S=T.y1>de!=T.y2>de&&Se<(T.x2-T.x1)*(de-T.y1)/(T.y2-T.y1)+T.x1;S&&(Ue+=T.y1<T.y2?1:-1)}return Ue!==0}}function _(V,z,L,G,X,F,O,Q,J,ee){F===void 0&&(F=1),Q===void 0&&(Q=0),J===void 0&&(J=0),ee===void 0&&(ee=0),p(V,z,L,G,X,F,O,null,Q,J,ee)}function p(V,z,L,G,X,F,O,Q,J,ee,se){F===void 0&&(F=1),J===void 0&&(J=0),ee===void 0&&(ee=0),se===void 0&&(se=0);for(var ye=g(V,z,L,G,X,F),le=new Uint8Array(ye.length*4),I=0;I<ye.length;I++)le[I*4+se]=ye[I];f(O,le,J,ee,V,z,1<<3-se,Q)}function m(V,z,L,G,X,F){var O=X-L,Q=F-G,J=O*O+Q*Q,ee=J?Math.max(0,Math.min(1,((V-L)*O+(z-G)*Q)/J)):0,se=V-(L+ee*O),ye=z-(G+ee*Q);return se*se+ye*ye}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",C="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),E=null,N=!1,q={},v=new WeakMap;function R(V){if(!N&&!H(V))throw new Error("WebGL generation not supported")}function U(V,z,L,G,X,F,O){if(F===void 0&&(F=1),O===void 0&&(O=null),!O&&(O=E,!O)){var Q=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!Q)throw new Error("OffscreenCanvas or DOM canvas not supported");O=E=Q.getContext("webgl",{depth:!1})}R(O);var J=new Uint8Array(V*z*4);u(O,function(le){var I=le.gl,Ne=le.withTexture,ge=le.withTextureFramebuffer;Ne("readable",function(Se,de){I.texImage2D(I.TEXTURE_2D,0,I.RGBA,V,z,0,I.RGBA,I.UNSIGNED_BYTE,null),ge(Se,de,function(Ue){b(V,z,L,G,X,F,I,Ue,0,0,0),I.readPixels(0,0,V,z,I.RGBA,I.UNSIGNED_BYTE,J)})})});for(var ee=new Uint8Array(V*z),se=0,ye=0;se<J.length;se+=4)ee[ye++]=J[se];return ee}function k(V,z,L,G,X,F,O,Q,J,ee){F===void 0&&(F=1),Q===void 0&&(Q=0),J===void 0&&(J=0),ee===void 0&&(ee=0),b(V,z,L,G,X,F,O,null,Q,J,ee)}function b(V,z,L,G,X,F,O,Q,J,ee,se){F===void 0&&(F=1),J===void 0&&(J=0),ee===void 0&&(ee=0),se===void 0&&(se=0),R(O);var ye=[];i(L,function(le,I,Ne,ge){ye.push(le,I,Ne,ge)}),ye=new Float32Array(ye),u(O,function(le){var I=le.gl,Ne=le.isWebGL2,ge=le.getExtension,Se=le.withProgram,de=le.withTexture,Ue=le.withTextureFramebuffer,ue=le.handleContextLoss;if(de("rawDistances",function(T,S){(V!==T._lastWidth||z!==T._lastHeight)&&I.texImage2D(I.TEXTURE_2D,0,I.RGBA,T._lastWidth=V,T._lastHeight=z,0,I.RGBA,I.UNSIGNED_BYTE,null),Se("main",x,M,function(D){var te=D.setAttribute,Y=D.setUniform,$=!Ne&&ge("ANGLE_instanced_arrays"),oe=!Ne&&ge("EXT_blend_minmax");te("aUV",2,I.STATIC_DRAW,0,w),te("aLineSegment",4,I.DYNAMIC_DRAW,1,ye),Y.apply(void 0,["4f","uGlyphBounds"].concat(G)),Y("1f","uMaxDistance",X),Y("1f","uExponent",F),Ue(T,S,function(me){I.enable(I.BLEND),I.colorMask(!0,!0,!0,!0),I.viewport(0,0,V,z),I.scissor(0,0,V,z),I.blendFunc(I.ONE,I.ONE),I.blendEquationSeparate(I.FUNC_ADD,Ne?I.MAX:oe.MAX_EXT),I.clear(I.COLOR_BUFFER_BIT),Ne?I.drawArraysInstanced(I.TRIANGLES,0,3,ye.length/4):$.drawArraysInstancedANGLE(I.TRIANGLES,0,3,ye.length/4)})}),Se("post",o,C,function(D){D.setAttribute("aUV",2,I.STATIC_DRAW,0,w),D.setUniform("1i","tex",S),I.bindFramebuffer(I.FRAMEBUFFER,Q),I.disable(I.BLEND),I.colorMask(se===0,se===1,se===2,se===3),I.viewport(J,ee,V,z),I.scissor(J,ee,V,z),I.drawArrays(I.TRIANGLES,0,3)})}),I.isContextLost())throw ue(),new Error("webgl context lost")})}function H(V){var z=!V||V===E?q:V.canvas||V,L=v.get(z);if(L===void 0){N=!0;var G=null;try{var X=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);L=F&&X.length===F.length&&F.every(function(O,Q){return O===X[Q]}),L||(G="bad trial run results",console.info(X,F))}catch(O){L=!1,G=O.message}G&&console.warn("WebGL SDF generation not supported:",G),N=!1,v.set(z,L)}return L}var B=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:k,generateIntoFramebuffer:b,isSupported:H});function Z(V,z,L,G,X,F){X===void 0&&(X=Math.max(G[2]-G[0],G[3]-G[1])/2),F===void 0&&(F=1);try{return U.apply(B,arguments)}catch(O){return console.info("WebGL SDF generation failed, falling back to JS",O),g.apply(y,arguments)}}function K(V,z,L,G,X,F,O,Q,J,ee){X===void 0&&(X=Math.max(G[2]-G[0],G[3]-G[1])/2),F===void 0&&(F=1),Q===void 0&&(Q=0),J===void 0&&(J=0),ee===void 0&&(ee=0);try{return k.apply(B,arguments)}catch(se){return console.info("WebGL SDF generation failed, falling back to JS",se),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=Z,e.generateIntoCanvas=K,e.javascript=y,e.pathToLineSegments=i,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function m_(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(ue,T){r[ue]=1<<T+1,n[r[ue]]=ue}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,o=r.L|r.R|r.AL,s=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function f(){if(!u){u=new Map;var ue=function(S){if(t.hasOwnProperty(S)){var D=0;t[S].split(",").forEach(function(te){var Y=te.split("+"),$=Y[0],oe=Y[1];$=parseInt($,36),oe=oe?parseInt(oe,36):0,u.set(D+=$,r[S]);for(var me=0;me<oe;me++)u.set(++D,r[S])})}};for(var T in t)ue(T)}}function h(ue){return f(),u.get(ue.codePointAt(0))||r.L}function d(ue){return n[h(ue)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ue,T){var S=36,D=0,te=new Map,Y=T&&new Map,$;return ue.split(",").forEach(function oe(me){if(me.indexOf("+")!==-1)for(var ce=+me;ce--;)oe($);else{$=me;var _e=me.split(">"),Ee=_e[0],ae=_e[1];Ee=String.fromCodePoint(D+=parseInt(Ee,S)),ae=String.fromCodePoint(D+=parseInt(ae,S)),te.set(Ee,ae),T&&Y.set(ae,Ee)}}),{map:te,reverseMap:Y}}var p,m,y;function x(){if(!p){var ue=_(g.pairs,!0),T=ue.map,S=ue.reverseMap;p=T,m=S,y=_(g.canonical,!1).map}}function M(ue){return x(),p.get(ue)||null}function C(ue){return x(),m.get(ue)||null}function w(ue){return x(),y.get(ue)||null}var E=r.L,N=r.R,q=r.EN,v=r.ES,R=r.ET,U=r.AN,k=r.CS,b=r.B,H=r.S,B=r.ON,Z=r.BN,K=r.NSM,V=r.AL,z=r.LRO,L=r.RLO,G=r.LRE,X=r.RLE,F=r.PDF,O=r.LRI,Q=r.RLI,J=r.FSI,ee=r.PDI;function se(ue,T){for(var S=125,D=new Uint32Array(ue.length),te=0;te<ue.length;te++)D[te]=h(ue[te]);var Y=new Map;function $(Nt,$t){var Ot=D[Nt];D[Nt]=$t,Y.set(Ot,Y.get(Ot)-1),Ot&s&&Y.set(s,Y.get(s)-1),Y.set($t,(Y.get($t)||0)+1),$t&s&&Y.set(s,(Y.get(s)||0)+1)}for(var oe=new Uint8Array(ue.length),me=new Map,ce=[],_e=null,Ee=0;Ee<ue.length;Ee++)_e||ce.push(_e={start:Ee,end:ue.length-1,level:T==="rtl"?1:T==="ltr"?0:yo(Ee,!1)}),D[Ee]&b&&(_e.end=Ee,_e=null);for(var ae=X|G|L|z|i|ee|F|b,Ie=function(Nt){return Nt+(Nt&1?1:2)},Pe=function(Nt){return Nt+(Nt&1?2:1)},Te=0;Te<ce.length;Te++){_e=ce[Te];var ve=[{_level:_e.level,_override:0,_isolate:0}],fe=void 0,we=0,Oe=0,je=0;Y.clear();for(var De=_e.start;De<=_e.end;De++){var Ae=D[De];if(fe=ve[ve.length-1],Y.set(Ae,(Y.get(Ae)||0)+1),Ae&s&&Y.set(s,(Y.get(s)||0)+1),Ae&ae)if(Ae&(X|G)){oe[De]=fe._level;var P=(Ae===X?Pe:Ie)(fe._level);P<=S&&!we&&!Oe?ve.push({_level:P,_override:0,_isolate:0}):we||Oe++}else if(Ae&(L|z)){oe[De]=fe._level;var Me=(Ae===L?Pe:Ie)(fe._level);Me<=S&&!we&&!Oe?ve.push({_level:Me,_override:Ae&L?N:E,_isolate:0}):we||Oe++}else if(Ae&i){Ae&J&&(Ae=yo(De+1,!0)===1?Q:O),oe[De]=fe._level,fe._override&&$(De,fe._override);var he=(Ae===Q?Pe:Ie)(fe._level);he<=S&&we===0&&Oe===0?(je++,ve.push({_level:he,_override:0,_isolate:1,_isolInitIndex:De})):we++}else if(Ae&ee){if(we>0)we--;else if(je>0){for(Oe=0;!ve[ve.length-1]._isolate;)ve.pop();var xe=ve[ve.length-1]._isolInitIndex;xe!=null&&(me.set(xe,De),me.set(De,xe)),ve.pop(),je--}fe=ve[ve.length-1],oe[De]=fe._level,fe._override&&$(De,fe._override)}else Ae&F?(we===0&&(Oe>0?Oe--:!fe._isolate&&ve.length>1&&(ve.pop(),fe=ve[ve.length-1])),oe[De]=fe._level):Ae&b&&(oe[De]=_e.level);else oe[De]=fe._level,fe._override&&Ae!==Z&&$(De,fe._override)}for(var Ce=[],Be=null,Le=_e.start;Le<=_e.end;Le++){var Xe=D[Le];if(!(Xe&l)){var $e=oe[Le],We=Xe&i,Je=Xe===ee;Be&&$e===Be._level?(Be._end=Le,Be._endsWithIsolInit=We):Ce.push(Be={_start:Le,_end:Le,_level:$e,_startsWithPDI:Je,_endsWithIsolInit:We})}}for(var lt=[],qt=0;qt<Ce.length;qt++){var jt=Ce[qt];if(!jt._startsWithPDI||jt._startsWithPDI&&!me.has(jt._start)){for(var Bt=[Be=jt],ln=void 0;Be&&Be._endsWithIsolInit&&(ln=me.get(Be._end))!=null;)for(var Dt=qt+1;Dt<Ce.length;Dt++)if(Ce[Dt]._start===ln){Bt.push(Be=Ce[Dt]);break}for(var pt=[],cn=0;cn<Bt.length;cn++)for(var Sr=Bt[cn],Wi=Sr._start;Wi<=Sr._end;Wi++)pt.push(Wi);for(var Aa=oe[pt[0]],A=_e.level,j=pt[0]-1;j>=0;j--)if(!(D[j]&l)){A=oe[j];break}var ie=pt[pt.length-1],re=oe[ie],ne=_e.level;if(!(D[ie]&i)){for(var Re=ie+1;Re<=_e.end;Re++)if(!(D[Re]&l)){ne=oe[Re];break}}lt.push({_seqIndices:pt,_sosType:Math.max(A,Aa)%2?N:E,_eosType:Math.max(ne,re)%2?N:E})}}for(var Fe=0;Fe<lt.length;Fe++){var Ge=lt[Fe],pe=Ge._seqIndices,He=Ge._sosType,Ve=Ge._eosType,ze=oe[pe[0]]&1?N:E;if(Y.get(K))for(var nt=0;nt<pe.length;nt++){var St=pe[nt];if(D[St]&K){for(var ct=He,It=nt-1;It>=0;It--)if(!(D[pe[It]]&l)){ct=D[pe[It]];break}$(St,ct&(i|ee)?B:ct)}}if(Y.get(q))for(var et=0;et<pe.length;et++){var Ye=pe[et];if(D[Ye]&q)for(var En=et-1;En>=-1;En--){var rt=En===-1?He:D[pe[En]];if(rt&o){rt===V&&$(Ye,U);break}}}if(Y.get(V))for(var Kt=0;Kt<pe.length;Kt++){var Xi=pe[Kt];D[Xi]&V&&$(Xi,N)}if(Y.get(v)||Y.get(k))for(var Zt=1;Zt<pe.length-1;Zt++){var Bn=pe[Zt];if(D[Bn]&(v|k)){for(var ot=0,Jt=0,Gn=Zt-1;Gn>=0&&(ot=D[pe[Gn]],!!(ot&l));Gn--);for(var Mt=Zt+1;Mt<pe.length&&(Jt=D[pe[Mt]],!!(Jt&l));Mt++);ot===Jt&&(D[Bn]===v?ot===q:ot&(q|U))&&$(Bn,ot)}}if(Y.get(q))for(var Ft=0;Ft<pe.length;Ft++){var wa=pe[Ft];if(D[wa]&q){for(var zn=Ft-1;zn>=0&&D[pe[zn]]&(R|l);zn--)$(pe[zn],q);for(Ft++;Ft<pe.length&&D[pe[Ft]]&(R|l|q);Ft++)D[pe[Ft]]!==q&&$(pe[Ft],q)}}if(Y.get(R)||Y.get(v)||Y.get(k))for(var Yi=0;Yi<pe.length;Yi++){var lo=pe[Yi];if(D[lo]&(R|v|k)){$(lo,B);for(var Mr=Yi-1;Mr>=0&&D[pe[Mr]]&l;Mr--)$(pe[Mr],B);for(var yr=Yi+1;yr<pe.length&&D[pe[yr]]&l;yr++)$(pe[yr],B)}}if(Y.get(q))for(var Ra=0,co=He;Ra<pe.length;Ra++){var uo=pe[Ra],Ca=D[uo];Ca&q?co===E&&$(uo,E):Ca&o&&(co=Ca)}if(Y.get(s)){var qi=N|q|U,fo=qi|E,Er=[];{for(var ri=[],ai=0;ai<pe.length;ai++)if(D[pe[ai]]&s){var ji=ue[pe[ai]],ho=void 0;if(M(ji)!==null)if(ri.length<63)ri.push({char:ji,seqIndex:ai});else break;else if((ho=C(ji))!==null)for(var Ki=ri.length-1;Ki>=0;Ki--){var La=ri[Ki].char;if(La===ho||La===C(w(ji))||M(w(La))===ji){Er.push([ri[Ki].seqIndex,ai]),ri.length=Ki;break}}}Er.sort(function(Nt,$t){return Nt[0]-$t[0]})}for(var Pa=0;Pa<Er.length;Pa++){for(var po=Er[Pa],Tr=po[0],Ua=po[1],mo=!1,Qt=0,Da=Tr+1;Da<Ua;Da++){var go=pe[Da];if(D[go]&fo){mo=!0;var _o=D[go]&qi?N:E;if(_o===ze){Qt=_o;break}}}if(mo&&!Qt){Qt=He;for(var Ia=Tr-1;Ia>=0;Ia--){var vo=pe[Ia];if(D[vo]&fo){var xo=D[vo]&qi?N:E;xo!==ze?Qt=xo:Qt=ze;break}}}if(Qt){if(D[pe[Tr]]=D[pe[Ua]]=Qt,Qt!==ze){for(var Zi=Tr+1;Zi<pe.length;Zi++)if(!(D[pe[Zi]]&l)){h(ue[pe[Zi]])&K&&(D[pe[Zi]]=Qt);break}}if(Qt!==ze){for(var Ji=Ua+1;Ji<pe.length;Ji++)if(!(D[pe[Ji]]&l)){h(ue[pe[Ji]])&K&&(D[pe[Ji]]=Qt);break}}}}for(var Tn=0;Tn<pe.length;Tn++)if(D[pe[Tn]]&s){for(var So=Tn,Fa=Tn,Na=He,Qi=Tn-1;Qi>=0;Qi--)if(D[pe[Qi]]&l)So=Qi;else{Na=D[pe[Qi]]&qi?N:E;break}for(var Mo=Ve,$i=Tn+1;$i<pe.length;$i++)if(D[pe[$i]]&(s|l))Fa=$i;else{Mo=D[pe[$i]]&qi?N:E;break}for(var Oa=So;Oa<=Fa;Oa++)D[pe[Oa]]=Na===Mo?Na:ze;Tn=Fa}}}for(var Gt=_e.start;Gt<=_e.end;Gt++){var Au=oe[Gt],br=D[Gt];if(Au&1?br&(E|q|U)&&oe[Gt]++:br&N?oe[Gt]++:br&(U|q)&&(oe[Gt]+=2),br&l&&(oe[Gt]=Gt===0?_e.level:oe[Gt-1]),Gt===_e.end||h(ue[Gt])&(H|b))for(var Ar=Gt;Ar>=0&&h(ue[Ar])&c;Ar--)oe[Ar]=_e.level}}return{levels:oe,paragraphs:ce};function yo(Nt,$t){for(var Ot=Nt;Ot<ue.length;Ot++){var bn=D[Ot];if(bn&(N|V))return 1;if(bn&(b|E)||$t&&bn===ee)return 0;if(bn&i){var Eo=wu(Ot);Ot=Eo===-1?ue.length:Eo}}return 0}function wu(Nt){for(var $t=1,Ot=Nt+1;Ot<ue.length;Ot++){var bn=D[Ot];if(bn&b)break;if(bn&ee){if(--$t===0)return Ot}else bn&i&&$t++}return-1}}var ye="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",le;function I(){if(!le){var ue=_(ye,!0),T=ue.map,S=ue.reverseMap;S.forEach(function(D,te){T.set(te,D)}),le=T}}function Ne(ue){return I(),le.get(ue)||null}function ge(ue,T,S,D){var te=ue.length;S=Math.max(0,S==null?0:+S),D=Math.min(te-1,D==null?te-1:+D);for(var Y=new Map,$=S;$<=D;$++)if(T[$]&1){var oe=Ne(ue[$]);oe!==null&&Y.set($,oe)}return Y}function Se(ue,T,S,D){var te=ue.length;S=Math.max(0,S==null?0:+S),D=Math.min(te-1,D==null?te-1:+D);var Y=[];return T.paragraphs.forEach(function($){var oe=Math.max(S,$.start),me=Math.min(D,$.end);if(oe<me){for(var ce=T.levels.slice(oe,me+1),_e=me;_e>=oe&&h(ue[_e])&c;_e--)ce[_e]=$.level;for(var Ee=$.level,ae=1/0,Ie=0;Ie<ce.length;Ie++){var Pe=ce[Ie];Pe>Ee&&(Ee=Pe),Pe<ae&&(ae=Pe|1)}for(var Te=Ee;Te>=ae;Te--)for(var ve=0;ve<ce.length;ve++)if(ce[ve]>=Te){for(var fe=ve;ve+1<ce.length&&ce[ve+1]>=Te;)ve++;ve>fe&&Y.push([fe+oe,ve+oe])}}}),Y}function de(ue,T,S,D){var te=Ue(ue,T,S,D),Y=[].concat(ue);return te.forEach(function($,oe){Y[oe]=(T.levels[$]&1?Ne(ue[$]):null)||ue[$]}),Y.join("")}function Ue(ue,T,S,D){for(var te=Se(ue,T,S,D),Y=[],$=0;$<ue.length;$++)Y[$]=$;return te.forEach(function(oe){for(var me=oe[0],ce=oe[1],_e=Y.slice(me,ce+1),Ee=_e.length;Ee--;)Y[ce-Ee]=_e[Ee]}),Y}return e.closingToOpeningBracket=C,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=se,e.getMirroredCharacter=Ne,e.getMirroredCharactersMap=ge,e.getReorderSegments=Se,e.getReorderedIndices=Ue,e.getReorderedString=de,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const cu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ns(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=qe[n];return i?Ns(i):r}return a.replace(e,t)}const vt=[];for(let a=0;a<256;a++)vt[a]=(a<16?"0":"")+a.toString(16);function g_(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vt[a&255]+vt[a>>8&255]+vt[a>>16&255]+vt[a>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]).toUpperCase()}const Xn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},__=Date.now(),nc=new WeakMap,ic=new Map;let v_=1e10;function Os(a,e){const t=y_(e);let r=nc.get(a);if(r||nc.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=ic[f];if(!h){const d=x_(this,c,e,t);h=ic[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Xn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-__}}),this[n]&&this[n](c)},o=function(){return s(e.chained?a:a.clone())},s=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:v_++}),u.uuid=g_(),u.uniforms=Xn({},c.uniforms,e.uniforms),u.defines=Xn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Xn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Xn(this.extensions,c.extensions),Xn(this.defines,c.defines),Xn(this.uniforms,kc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return s(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Os(a.isDerivedMaterial?a.getDepthMaterial():new Qc({depthPacking:Lc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Os(a.isDerivedMaterial?a.getDistanceMaterial():new $c,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=o,new o}function x_(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=r;if(i=i||"",o=o||"",s=s||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Ns(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ns(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),f=`${h}
${_.join(`
`)}
${f}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,m))?p:`troika_${p}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=rc(e,n,i,o,s),t=rc(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function rc(a,e,t,r,n){return(r||n||t)&&(a=a.replace(cu,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function S_(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let M_=0;const ac=new Map;function y_(a){const e=JSON.stringify(a,S_);let t=ac.get(e);return t==null&&ac.set(e,t=++M_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function E_(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,o=new Uint8Array(n);if(i.readASCII(o,0,4)=="ttcf"){var s=4;i.readUshort(o,s),s+=2,i.readUshort(o,s),s+=2;var l=i.readUint(o,s);s+=4;for(var c=[],u=0;u<l;u++){var f=i.readUint(o,s);s+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(n,i){var o=e._bin,s=i;o.readFixed(n,i),i+=4;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:s},f={},h=0;h<l;h++){var d=o.readASCII(n,i,4);i+=4,o.readUint(n,i),i+=4;var g=o.readUint(n,i);i+=4;var _=o.readUint(n,i);i+=4,f[d]={offset:g,length:_}}for(h=0;h<c.length;h++){var p=c[h];f[p]&&(u[p.trim()]=e[p.trim()].parse(n,f[p].offset,f[p].length,u))}return u},_tabOffset:function(n,i,o){for(var s=e._bin,l=s.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var f=s.readASCII(n,c,4);c+=4,s.readUint(n,c),c+=4;var h=s.readUint(n,c);if(c+=4,s.readUint(n,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(e._bin.readUshort(n,i+2*l));return s},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,o){for(var s="",l=0;l<o;l++)s+=String.fromCharCode(n[i+l]);return s},readUnicode:function(n,i,o){for(var s="",l=0;l<o;l++){var c=n[i++]<<8|n[i++];s+=String.fromCharCode(c)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,o){var s=e._bin._tdec;return s&&i==0&&o==n.length?s.decode(n):e._bin.readASCII(n,i,o)},readBytes:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(n[i+l]);return s},readASCIIArray:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(String.fromCharCode(n[i+l]));return s},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,o,s,l){var c=e._bin,u={},f=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+g,l),u},e._lctf.readLookupList=function(n,i,o){var s=e._bin,l=i,c=[],u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=s.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+h,o);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,o){var s=e._bin,l=i,c={tabs:[]};c.ltype=s.readUshort(n,i),i+=2,c.flag=s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var d=s.readUshort(n,i);i+=2;var g=o(n,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,o=0;o<32;o++)n>>>o&1&&i++;return i},e._lctf.readClassDef=function(n,i){var o=e._bin,s=[],l=o.readUshort(n,i);if(i+=2,l==1){var c=o.readUshort(n,i);i+=2;var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++)s.push(c+f),s.push(c+f),s.push(o.readUshort(n,i)),i+=2}if(l==2){var h=o.readUshort(n,i);for(i+=2,f=0;f<h;f++)s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2}return s},e._lctf.getInterval=function(n,i){for(var o=0;o<n.length;o+=3){var s=n[o],l=n[o+1];if(n[o+2],s<=i&&i<=l)return o}return-1},e._lctf.readCoverage=function(n,i){var o=e._bin,s={};s.fmt=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);return i+=2,s.fmt==1&&(s.tab=o.readUshorts(n,i,l)),s.fmt==2&&(s.tab=o.readUshorts(n,i,3*l)),s},e._lctf.coverageIndex=function(n,i){var o=n.tab;if(n.fmt==1)return o.indexOf(i);if(n.fmt==2){var s=e._lctf.getInterval(o,i);if(s!=-1)return o[s+2]+(i-o[s])}return-1},e._lctf.readFeatureList=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,s+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2,c>0&&(l.featureParams=s+c);var u=o.readUshort(n,i);i+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(n,i+2*f));return l},e._lctf.readScriptList=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readScriptTable(n,s+h)}return l},e._lctf.readScriptTable=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,s+c));var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readASCII(n,i,4);i+=4;var d=o.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,s+d)}return l},e._lctf.readLangSysTable=function(n,i){var o=e._bin,s={};o.readUshort(n,i),i+=2,s.reqFeature=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);return i+=2,s.features=o.readUshorts(n,i,l),s},e.CFF={},e.CFF.parse=function(n,i,o){var s=e._bin;(n=new Uint8Array(n.buffer,i,o))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(s.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var d=h[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(s.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var p=[];for(u=0;u<g.length-1;u++)p.push(s.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){i=d.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),d.FDArray=[],u=0;u<m.length-1;u++){var y=e.CFF.readDict(n,i+m[u],i+m[u+1]);e.CFF._readFDict(n,y,_),d.FDArray.push(y)}i+=m[m.length-1],i=d.FDSelect,d.FDSelect=[];var x=n[i];if(i++,x!=3)throw x;var M=s.readUshort(n,i);for(i+=2,u=0;u<M+1;u++)d.FDSelect.push(s.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,o){var s;for(var l in i.Private&&(s=i.Private[1],i.Private=e.CFF.readDict(n,s,s+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,s+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=o[i[l]-426+35])},e.CFF.readSubrs=function(n,i,o){var s=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(s.readBytes(n,i+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==i)return o;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,o){e._bin;var s=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)s.push(n[i+u]);return s},e.CFF.readCharset=function(n,i,o){var s=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<o;u++){var f=s.readUshort(n,i);i+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=s.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=s.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,i,o){var s=e._bin,l=s.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)o.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)o.push(s.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&s.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,o){var s=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=s.readShort(n,i+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=s.readInt(n,i+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(n,i,o){for(var s=i+o,l=e._bin,c=[];i<s;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g??"o"+d),i+=h}return c},e.CFF.readDict=function(n,i,o){for(var s=e._bin,l={},c=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;if(u==28&&(g=s.readShort(n,i+1),h=3),u==29&&(g=s.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=s.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var p=n[i+h];h++;var m=p>>4,y=15&p;if(m!=15&&_.push(m),y!=15&&_.push(y),y==15)break}for(var x="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],C=0;C<_.length;C++)x+=M[_[C]];g=parseFloat(x)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,o){n=new Uint8Array(n.buffer,i,o),i=0;var s=e._bin,l={};s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=s.readUshort(n,i);i+=2;var d=s.readUshort(n,i);i+=2;var g=s.readUint(n,i);i+=4;var _="p"+h+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var y=s.readUshort(n,g);y==0?m=e.cmap.parse0(n,g):y==4?m=e.cmap.parse4(n,g):y==6?m=e.cmap.parse6(n,g):y==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+y,h,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,s.map=[];for(var c=0;c<l-6;c++)s.map.push(n[i+c]);return s},e.cmap.parse4=function(n,i){var o=e._bin,s=i,l={};l.format=o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;var f=u/2;l.searchRange=o.readUshort(n,i),i+=2,l.entrySelector=o.readUshort(n,i),i+=2,l.rangeShift=o.readUshort(n,i),i+=2,l.endCount=o.readUshorts(n,i,f),i+=2*f,i+=2,l.startCount=o.readUshorts(n,i,f),i+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(n,i)),i+=2;for(l.idRangeOffset=o.readUshorts(n,i,f),i+=2*f,l.glyphIdArray=[];i<s+c;)l.glyphIdArray.push(o.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,s.firstCode=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,s.glyphIdArray=[];for(var c=0;c<l;c++)s.glyphIdArray.push(o.readUshort(n,i)),i+=2;return s},e.cmap.parse12=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2,i+=2,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4;var l=o.readUint(n,i);i+=4,s.groups=[];for(var c=0;c<l;c++){var u=i+12*c,f=o.readUint(n,u+0),h=o.readUint(n,u+4),d=o.readUint(n,u+8);s.groups.push([f,h,d])}return s},e.glyf={},e.glyf.parse=function(n,i,o,s){for(var l=[],c=0;c<s.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var o=e._bin,s=n._data,l=e._tabOffset(s,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=o.readShort(s,l),l+=2,c.xMin=o.readShort(s,l),l+=2,c.yMin=o.readShort(s,l),l+=2,c.xMax=o.readShort(s,l),l+=2,c.yMax=o.readShort(s,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(s,l)),l+=2;var f=o.readUshort(s,l);if(l+=2,s.length-l<f)return null;c.instructions=o.readBytes(s,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=s[l];if(l++,c.flags.push(d),(8&d)!=0){var g=s[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?s[l]:-s[l]),l++):m?c.xs.push(0):(c.xs.push(o.readShort(s,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?s[l]:-s[l]),l++):m?c.ys.push(0):(c.ys.push(o.readShort(s,l)),l+=2);var y=0,x=0;for(u=0;u<h;u++)y+=c.xs[u],x+=c.ys[u],c.xs[u]=y,c.ys[u]=x}else{var M;c.parts=[];do{M=o.readUshort(s,l),l+=2;var C={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(C),C.glyphIndex=o.readUshort(s,l),l+=2,1&M){var w=o.readShort(s,l);l+=2;var E=o.readShort(s,l);l+=2}else w=o.readInt8(s,l),l++,E=o.readInt8(s,l),l++;2&M?(C.m.tx=w,C.m.ty=E):(C.p1=w,C.p2=E),8&M?(C.m.a=C.m.d=o.readF2dot14(s,l),l+=2):64&M?(C.m.a=o.readF2dot14(s,l),l+=2,C.m.d=o.readF2dot14(s,l),l+=2):128&M&&(C.m.a=o.readF2dot14(s,l),l+=2,C.m.b=o.readF2dot14(s,l),l+=2,C.m.c=o.readF2dot14(s,l),l+=2,C.m.d=o.readF2dot14(s,l),l+=2)}while(32&M);if(256&M){var N=o.readUshort(s,l);for(l+=2,c.instr=[],u=0;u<N;u++)c.instr.push(s[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,o,s){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,o,s){return e._lctf.parse(n,i,o,s,e.GPOS.subt)},e.GPOS.subt=function(n,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,o);o+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,o,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,o),o+=2;var d=l.readUshort(n,o);o+=2;var g=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,o);o+=2;for(var m=0;m<p;m++){var y=c+l.readUshort(n,o);o+=2;var x=l.readUshort(n,y);y+=2;for(var M=[],C=0;C<x;C++){var w=l.readUshort(n,y);y+=2,h!=0&&(U=e.GPOS.readValueRecord(n,y,h),y+=2*g),d!=0&&(k=e.GPOS.readValueRecord(n,y,d),y+=2*_),M.push({gid2:w,val1:U,val2:k})}u.pairsets.push(M)}}if(u.fmt==2){var E=l.readUshort(n,o);o+=2;var N=l.readUshort(n,o);o+=2;var q=l.readUshort(n,o);o+=2;var v=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+E),u.classDef2=e._lctf.readClassDef(n,c+N),u.matrix=[],m=0;m<q;m++){var R=[];for(C=0;C<v;C++){var U=null,k=null;h!=0&&(U=e.GPOS.readValueRecord(n,o,h),o+=2*g),d!=0&&(k=e.GPOS.readValueRecord(n,o,d),o+=2*_),R.push({val1:U,val2:k})}u.matrix.push(R)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var b=l.readUshort(n,o);o+=2;var H=l.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=b;else if(s.ltype!=b)throw"invalid extension substitution";return e.GPOS.subt(n,s.ltype,c+H)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,o){var s=e._bin,l=[];return l.push(1&o?s.readShort(n,i):0),i+=1&o?2:0,l.push(2&o?s.readShort(n,i):0),i+=2&o?2:0,l.push(4&o?s.readShort(n,i):0),i+=4&o?2:0,l.push(8&o?s.readShort(n,i):0),i+=8&o?2:0,l},e.GPOS.readBaseArray=function(n,i,o){var s=e._bin,l=[],c=i,u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<o;d++)h.push(e.GPOS.readAnchorRecord(n,c+s.readUshort(n,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,i){var o=e._bin,s=[],l=i,c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,o.readUshort(n,i+2)+l);f.markClass=o.readUshort(n,i),s.push(f),i+=4}return s},e.GPOS.readAnchorRecord=function(n,i){var o=e._bin,s={};return s.fmt=o.readUshort(n,i),s.x=o.readShort(n,i+2),s.y=o.readShort(n,i+4),s},e.GSUB={},e.GSUB.parse=function(n,i,o,s){return e._lctf.parse(n,i,o,s,e.GSUB.subt)},e.GSUB.subt=function(n,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var h=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,h),o+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(n,o),o+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(n,o)+c;o+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],h=l.readUshort(n,o),o+=2,d=0;d<h;d++){var p=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(i==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var y=l.readUshort(n,o);for(o+=2,d=0;d<y;d++){var x=l.readUshort(n,o);o+=2,u.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,o),o+=2;for(var M=[],C=0;C<h;C++)M.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*C)));o+=2*h,d==0&&(u.backCvg=M),d==1&&(u.inptCvg=M),d==2&&(u.ahedCvg=M)}h=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,h)}}else{if(i==7&&u.fmt==1){var w=l.readUshort(n,o);o+=2;var E=l.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=w;else if(s.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,s.ltype,c+E)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var o=e._bin.readUshort,s=i,l=[],c=o(n,i);i+=2;for(var u=0;u<c;u++){var f=o(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,s+f))}return l},e.GSUB.readSubClassRule=function(n,i){var o=e._bin.readUshort,s={},l=o(n,i),c=o(n,i+=2);i+=2,s.input=[];for(var u=0;u<l-1;u++)s.input.push(o(n,i)),i+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),s},e.GSUB.readSubstLookupRecords=function(n,i,o){for(var s=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(s(n,i),s(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,s+f))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var o=e._bin,s={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,i);i+=2,c==1&&u--,s[l[c]]=o.readUshorts(n,i,u),i+=2*s[l[c]].length}return u=o.readUshort(n,i),i+=2,s.subst=o.readUshorts(n,i,2*u),i+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,s+f))}return l},e.GSUB.readLigature=function(n,i){var o=e._bin,s={chain:[]};s.nglyph=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)s.chain.push(o.readUshort(n,i)),i+=2;return s},e.head={},e.head.parse=function(n,i,o){var s=e._bin,l={};return s.readFixed(n,i),i+=4,l.fontRevision=s.readFixed(n,i),i+=4,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4,l.flags=s.readUshort(n,i),i+=2,l.unitsPerEm=s.readUshort(n,i),i+=2,l.created=s.readUint64(n,i),i+=8,l.modified=s.readUint64(n,i),i+=8,l.xMin=s.readShort(n,i),i+=2,l.yMin=s.readShort(n,i),i+=2,l.xMax=s.readShort(n,i),i+=2,l.yMax=s.readShort(n,i),i+=2,l.macStyle=s.readUshort(n,i),i+=2,l.lowestRecPPEM=s.readUshort(n,i),i+=2,l.fontDirectionHint=s.readShort(n,i),i+=2,l.indexToLocFormat=s.readShort(n,i),i+=2,l.glyphDataFormat=s.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,o){var s=e._bin,l={};return s.readFixed(n,i),i+=4,l.ascender=s.readShort(n,i),i+=2,l.descender=s.readShort(n,i),i+=2,l.lineGap=s.readShort(n,i),i+=2,l.advanceWidthMax=s.readUshort(n,i),i+=2,l.minLeftSideBearing=s.readShort(n,i),i+=2,l.minRightSideBearing=s.readShort(n,i),i+=2,l.xMaxExtent=s.readShort(n,i),i+=2,l.caretSlopeRise=s.readShort(n,i),i+=2,l.caretSlopeRun=s.readShort(n,i),i+=2,l.caretOffset=s.readShort(n,i),i+=2,i+=8,l.metricDataFormat=s.readShort(n,i),i+=2,l.numberOfHMetrics=s.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,o,s){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<s.maxp.numGlyphs;h++)h<s.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,f=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,i,o,s){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,o,s);var u=l.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,o=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,o,s){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,o){var s=e._bin,l=-1,c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2;var h=s.readUshort(n,i);i+=2;var d=s.readShort(n,i);i+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return i},e.loca={},e.loca.parse=function(n,i,o,s){var l=e._bin,c=[],u=s.head.indexToLocFormat,f=s.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,o){var s=e._bin,l={},c=s.readUint(n,i);return i+=4,l.numGlyphs=s.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=s.readUshort(n,i),i+=2,l.maxContours=s.readUshort(n,i),i+=2,l.maxCompositePoints=s.readUshort(n,i),i+=2,l.maxCompositeContours=s.readUshort(n,i),i+=2,l.maxZones=s.readUshort(n,i),i+=2,l.maxTwilightPoints=s.readUshort(n,i),i+=2,l.maxStorage=s.readUshort(n,i),i+=2,l.maxFunctionDefs=s.readUshort(n,i),i+=2,l.maxInstructionDefs=s.readUshort(n,i),i+=2,l.maxStackElements=s.readUshort(n,i),i+=2,l.maxSizeOfInstructions=s.readUshort(n,i),i+=2,l.maxComponentElements=s.readUshort(n,i),i+=2,l.maxComponentDepth=s.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,o){var s=e._bin,l={};s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,d=0;d<c;d++){var g=s.readUshort(n,i);i+=2;var _=s.readUshort(n,i);i+=2;var p=s.readUshort(n,i);i+=2;var m=s.readUshort(n,i);i+=2;var y=s.readUshort(n,i);i+=2;var x=s.readUshort(n,i);i+=2;var M,C=f[m],w=h+12*c+x;if(g==0)M=s.readUnicode(n,w,y/2);else if(g==3&&_==0)M=s.readUnicode(n,w,y/2);else if(_==0)M=s.readASCII(n,w,y);else if(_==1)M=s.readUnicode(n,w,y/2);else if(_==3)M=s.readUnicode(n,w,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;M=s.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var E="p"+g+","+p.toString(16);l[E]==null&&(l[E]={}),l[E][C!==void 0?C:m]=M,l[E]._lang=p}for(var N in l)if(l[N].postScriptName!=null&&l[N]._lang==1033)return l[N];for(var N in l)if(l[N].postScriptName!=null&&l[N]._lang==0)return l[N];for(var N in l)if(l[N].postScriptName!=null&&l[N]._lang==3084)return l[N];for(var N in l)if(l[N].postScriptName!=null)return l[N];for(var N in l){u=N;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,o){var s=e._bin.readUshort(n,i);i+=2;var l={};if(s==0)e["OS/2"].version0(n,i,l);else if(s==1)e["OS/2"].version1(n,i,l);else if(s==2||s==3||s==4)e["OS/2"].version2(n,i,l);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,o){var s=e._bin;return o.xAvgCharWidth=s.readShort(n,i),i+=2,o.usWeightClass=s.readUshort(n,i),i+=2,o.usWidthClass=s.readUshort(n,i),i+=2,o.fsType=s.readUshort(n,i),i+=2,o.ySubscriptXSize=s.readShort(n,i),i+=2,o.ySubscriptYSize=s.readShort(n,i),i+=2,o.ySubscriptXOffset=s.readShort(n,i),i+=2,o.ySubscriptYOffset=s.readShort(n,i),i+=2,o.ySuperscriptXSize=s.readShort(n,i),i+=2,o.ySuperscriptYSize=s.readShort(n,i),i+=2,o.ySuperscriptXOffset=s.readShort(n,i),i+=2,o.ySuperscriptYOffset=s.readShort(n,i),i+=2,o.yStrikeoutSize=s.readShort(n,i),i+=2,o.yStrikeoutPosition=s.readShort(n,i),i+=2,o.sFamilyClass=s.readShort(n,i),i+=2,o.panose=s.readBytes(n,i,10),i+=10,o.ulUnicodeRange1=s.readUint(n,i),i+=4,o.ulUnicodeRange2=s.readUint(n,i),i+=4,o.ulUnicodeRange3=s.readUint(n,i),i+=4,o.ulUnicodeRange4=s.readUint(n,i),i+=4,o.achVendID=[s.readInt8(n,i),s.readInt8(n,i+1),s.readInt8(n,i+2),s.readInt8(n,i+3)],i+=4,o.fsSelection=s.readUshort(n,i),i+=2,o.usFirstCharIndex=s.readUshort(n,i),i+=2,o.usLastCharIndex=s.readUshort(n,i),i+=2,o.sTypoAscender=s.readShort(n,i),i+=2,o.sTypoDescender=s.readShort(n,i),i+=2,o.sTypoLineGap=s.readShort(n,i),i+=2,o.usWinAscent=s.readUshort(n,i),i+=2,o.usWinDescent=s.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,o){var s=e._bin;return i=e["OS/2"].version0(n,i,o),o.ulCodePageRange1=s.readUint(n,i),i+=4,o.ulCodePageRange2=s.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,o){var s=e._bin;return i=e["OS/2"].version1(n,i,o),o.sxHeight=s.readShort(n,i),i+=2,o.sCapHeight=s.readShort(n,i),i+=2,o.usDefault=s.readUshort(n,i),i+=2,o.usBreak=s.readUshort(n,i),i+=2,o.usMaxContext=s.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,o){var s=e._bin;return i=e["OS/2"].version2(n,i,o),o.usLowerOpticalPointSize=s.readUshort(n,i),i+=2,o.usUpperOpticalPointSize=s.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,o){var s=e._bin,l={};return l.version=s.readFixed(n,i),i+=4,l.italicAngle=s.readFixed(n,i),i+=4,l.underlinePosition=s.readShort(n,i),i+=2,l.underlineThickness=s.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var o=n.cmap,s=-1;if(o.p0e4!=null?s=o.p0e4:o.p3e1!=null?s=o.p3e1:o.p1e0!=null?s=o.p1e0:o.p0e3!=null&&(s=o.p0e3),s==-1)throw"no familiar platform and encoding!";var l=o.tables[s];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var s=n.SVG.entries[i];return s==null?o:(typeof s=="string"&&(s=e.SVG.toPath(s),n.SVG.entries[i]=s),s)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,o)}else n.glyf&&e.U._drawGlyf(i,n,o);return o},e.U._drawGlyf=function(n,i,o){var s=i.glyf[n];s==null&&(s=i.glyf[n]=e.glyf._parseGlyf(i,n)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,o):e.U._compoGlyph(s,i,o))},e.U._simpleGlyph=function(n,i){for(var o=0;o<n.noc;o++){for(var s=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=s;c<=l;c++){var u=c==s?l:c-1,f=c==l?s:c+1,h=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],p=n.ys[c];if(c==s)if(h){if(!d){e.U.P.moveTo(i,_,p);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+p)/2);h?d&&e.U.P.lineTo(i,_,p):g?e.U.P.qcurveTo(i,_,p,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,_,p,(_+n.xs[f])/2,(p+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,o){for(var s=0;s<n.parts.length;s++){var l={cmds:[],crds:[]},c=n.parts[s];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];o.crds.push(h*u.a+d*u.b+u.tx),o.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,i){var o=e._lctf.getInterval(i,n);return o==-1?0:i[o+2]},e.U._applySubs=function(n,i,o,s){for(var l=n.length-i-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(o.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,y=0;y<_;y++){for(;n[i+m+(1+y)]==-1;)m++;g.chain[y]!=n[i+m+(1+y)]&&(p=!1)}if(p){for(n[i]=g.nglyph,y=0;y<_+m;y++)n[i+y+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var x=e._lctf.getInterval(f.cDef,n[i]),M=f.cDef[x+2],C=f.scset[M],w=0;w<C.length;w++){var E=C[w],N=E.input;if(!(N.length>l)){for(p=!0,y=0;y<N.length;y++){var q=e._lctf.getInterval(f.cDef,n[i+1+y]);if(x==-1&&f.cDef[q+2]!=N[y]){p=!1;break}}if(p){var v=E.substLookupRecords;for(d=0;d<v.length;d+=2)v[d],v[d+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var R=f.lookupRec;for(w=0;w<R.length;w+=2){x=R[w];var U=s[R[w+1]];e.U._applySubs(n,i+x,U,s)}}}}},e.U._glsCovered=function(n,i,o){for(var s=0;s<i.length;s++)if(e._lctf.coverageIndex(i[s],n[o+s])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,o){for(var s={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)s.crds.push(h.crds[d]+l),s.crds.push(h.crds[d+1]);for(o&&s.cmds.push(o),d=0;d<h.cmds.length;d++)s.cmds.push(h.cmds[d]);o&&s.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return s},e.U.P={},e.U.P.moveTo=function(n,i,o){n.cmds.push("M"),n.crds.push(i,o)},e.U.P.lineTo=function(n,i,o){n.cmds.push("L"),n.crds.push(i,o)},e.U.P.curveTo=function(n,i,o,s,l,c,u){n.cmds.push("C"),n.crds.push(i,o,s,l,c,u)},e.U.P.qcurveTo=function(n,i,o,s,l){n.cmds.push("Q"),n.crds.push(i,o,s,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,o,s,l){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open,g=0,_=i.x,p=i.y,m=0,y=0,x=0,M=0,C=0,w=0,E=0,N=0,q=0,v=0,R={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,R);var U=R.val;if(g+=R.size,U=="o1"||U=="o18")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o4")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(U=="o6"||U=="o7")for(var k=c.length,b=U=="o6",H=0;H<k;H++){var B=c.shift();b?_+=B:p+=B,b=!b,e.U.P.lineTo(l,_,p)}else if(U=="o8"||U=="o24"){k=c.length;for(var Z=0;Z+6<=k;)m=_+c.shift(),y=p+c.shift(),x=m+c.shift(),M=y+c.shift(),_=x+c.shift(),p=M+c.shift(),e.U.P.curveTo(l,m,y,x,M,_,p),Z+=6;U=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(y=p,x=(m=_+c.shift())+c.shift(),v=M=y+c.shift(),w=M,N=p,_=(E=(C=(q=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,x,M,q,v),e.U.P.curveTo(l,C,w,E,N,_,p)),U=="o1235"&&(m=_+c.shift(),y=p+c.shift(),x=m+c.shift(),M=y+c.shift(),q=x+c.shift(),v=M+c.shift(),C=q+c.shift(),w=v+c.shift(),E=C+c.shift(),N=w+c.shift(),_=E+c.shift(),p=N+c.shift(),c.shift(),e.U.P.curveTo(l,m,y,x,M,q,v),e.U.P.curveTo(l,C,w,E,N,_,p)),U=="o1236"&&(m=_+c.shift(),y=p+c.shift(),x=m+c.shift(),v=M=y+c.shift(),w=M,E=(C=(q=x+c.shift())+c.shift())+c.shift(),N=w+c.shift(),_=E+c.shift(),e.U.P.curveTo(l,m,y,x,M,q,v),e.U.P.curveTo(l,C,w,E,N,_,p)),U=="o1237"&&(m=_+c.shift(),y=p+c.shift(),x=m+c.shift(),M=y+c.shift(),q=x+c.shift(),v=M+c.shift(),C=q+c.shift(),w=v+c.shift(),E=C+c.shift(),N=w+c.shift(),Math.abs(E-_)>Math.abs(N-p)?_=E+c.shift():p=N+c.shift(),e.U.P.curveTo(l,m,y,x,M,q,v),e.U.P.curveTo(l,C,w,E,N,_,p));else if(U=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var K=c.shift(),V=c.shift(),z=c.shift(),L=c.shift(),G=e.CFF.glyphBySE(o,z),X=e.CFF.glyphBySE(o,L);e.U._drawCFF(o.CharStrings[G],i,o,s,l),i.x=K,i.y=V,e.U._drawCFF(o.CharStrings[X],i,o,s,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o22")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),y=p+c.shift(),x=m+c.shift(),M=y+c.shift(),_=x+c.shift(),p=M+c.shift(),e.U.P.curveTo(l,m,y,x,M,_,p)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,y=p+c.shift(),_=x=m+c.shift(),p=(M=y+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,x,M,_,p);else if(U=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)y=p,x=(m=_+c.shift())+c.shift(),M=y+c.shift(),_=x+c.shift(),p=M,e.U.P.curveTo(l,m,y,x,M,_,p);else if(U=="o10"||U=="o29"){var F=U=="o10"?s:o;if(c.length==0)console.debug("error: empty stack");else{var O=c.pop(),Q=F.Subrs[O+F.Bias];i.x=_,i.y=p,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d,e.U._drawCFF(Q,i,o,s,l),_=i.x,p=i.y,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open}}else if(U=="o30"||U=="o31"){var J=c.length,ee=(Z=0,U=="o31");for(Z+=J-(k=-3&J);Z<k;)ee?(y=p,x=(m=_+c.shift())+c.shift(),p=(M=y+c.shift())+c.shift(),k-Z==5?(_=x+c.shift(),Z++):_=x,ee=!1):(m=_,y=p+c.shift(),x=m+c.shift(),M=y+c.shift(),_=x+c.shift(),k-Z==5?(p=M+c.shift(),Z++):p=M,ee=!0),e.U.P.curveTo(l,m,y,x,M,_,p),Z+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}i.x=_,i.y=p,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function T_(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(U,k){for(var b=new t(31),H=0;H<31;++H)b[H]=k+=1<<U[H-1];var B=new r(b[30]);for(H=1;H<30;++H)for(var Z=b[H];Z<b[H+1];++Z)B[Z]=Z-b[H]<<5|H;return[b,B]},l=s(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=s(i,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,k,b){for(var H=U.length,B=0,Z=new t(k);B<H;++B)++Z[U[B]-1];var K,V=new t(k);for(B=0;B<k;++B)V[B]=V[B-1]+Z[B-1]<<1;{K=new t(1<<k);var z=15-k;for(B=0;B<H;++B)if(U[B])for(var L=B<<4|U[B],G=k-U[B],X=V[U[B]-1]++<<G,F=X|(1<<G)-1;X<=F;++X)K[h[X]>>>z]=L}return K},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var y=_(p,9),x=_(m,5),M=function(U){for(var k=U[0],b=1;b<U.length;++b)U[b]>k&&(k=U[b]);return k},C=function(U,k,b){var H=k/8|0;return(U[H]|U[H+1]<<8)>>(7&k)&b},w=function(U,k){var b=k/8|0;return(U[b]|U[b+1]<<8|U[b+2]<<16)>>(7&k)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N=function(U,k,b){var H=new Error(k||E[U]);if(H.code=U,Error.captureStackTrace&&Error.captureStackTrace(H,N),!b)throw H;return H},q=function(U,k,b){var H=U.length;if(!H||b&&!b.l&&H<5)return k||new e(0);var B=!k||b,Z=!b||b.i;b||(b={}),k||(k=new e(3*H));var K,V=function(fe){var we=k.length;if(fe>we){var Oe=new e(Math.max(2*we,fe));Oe.set(k),k=Oe}},z=b.f||0,L=b.p||0,G=b.b||0,X=b.l,F=b.d,O=b.m,Q=b.n,J=8*H;do{if(!X){b.f=z=C(U,L,1);var ee=C(U,L+1,3);if(L+=3,!ee){var se=U[(S=((K=L)/8|0)+(7&K&&1)+4)-4]|U[S-3]<<8,ye=S+se;if(ye>H){Z&&N(0);break}B&&V(G+se),k.set(U.subarray(S,ye),G),b.b=G+=se,b.p=L=8*ye;continue}if(ee==1)X=y,F=x,O=9,Q=5;else if(ee==2){var le=C(U,L,31)+257,I=C(U,L+10,15)+4,Ne=le+C(U,L+5,31)+1;L+=14;for(var ge=new e(Ne),Se=new e(19),de=0;de<I;++de)Se[o[de]]=C(U,L+3*de,7);L+=3*I;var Ue=M(Se),ue=(1<<Ue)-1,T=_(Se,Ue);for(de=0;de<Ne;){var S,D=T[C(U,L,ue)];if(L+=15&D,(S=D>>>4)<16)ge[de++]=S;else{var te=0,Y=0;for(S==16?(Y=3+C(U,L,3),L+=2,te=ge[de-1]):S==17?(Y=3+C(U,L,7),L+=3):S==18&&(Y=11+C(U,L,127),L+=7);Y--;)ge[de++]=te}}var $=ge.subarray(0,le),oe=ge.subarray(le);O=M($),Q=M(oe),X=_($,O),F=_(oe,Q)}else N(1);if(L>J){Z&&N(0);break}}B&&V(G+131072);for(var me=(1<<O)-1,ce=(1<<Q)-1,_e=L;;_e=L){var Ee=(te=X[w(U,L)&me])>>>4;if((L+=15&te)>J){Z&&N(0);break}if(te||N(2),Ee<256)k[G++]=Ee;else{if(Ee==256){_e=L,X=null;break}var ae=Ee-254;if(Ee>264){var Ie=n[de=Ee-257];ae=C(U,L,(1<<Ie)-1)+c[de],L+=Ie}var Pe=F[w(U,L)&ce],Te=Pe>>>4;if(Pe||N(3),L+=15&Pe,oe=f[Te],Te>3&&(Ie=i[Te],oe+=w(U,L)&(1<<Ie)-1,L+=Ie),L>J){Z&&N(0);break}B&&V(G+131072);for(var ve=G+ae;G<ve;G+=4)k[G]=k[G-oe],k[G+1]=k[G+1-oe],k[G+2]=k[G+2-oe],k[G+3]=k[G+3-oe];G=ve}}b.l=X,b.p=_e,b.b=G,X&&(z=1,b.m=O,b.d=F,b.n=Q)}while(!z);return G==k.length?k:function(fe,we,Oe){(Oe==null||Oe>fe.length)&&(Oe=fe.length);var je=new(fe instanceof t?t:fe instanceof r?r:e)(Oe-we);return je.set(fe.subarray(we,Oe)),je}(k,0,G)},v=new e(0),R=typeof TextDecoder<"u"&&new TextDecoder;try{R.decode(v,{stream:!0})}catch{}return a.convert_streams=function(U){var k=new DataView(U),b=0;function H(){var le=k.getUint16(b);return b+=2,le}function B(){var le=k.getUint32(b);return b+=4,le}function Z(le){se.setUint16(ye,le),ye+=2}function K(le){se.setUint32(ye,le),ye+=4}for(var V={signature:B(),flavor:B(),length:B(),numTables:H(),reserved:H(),totalSfntSize:B(),majorVersion:H(),minorVersion:H(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},z=0;Math.pow(2,z)<=V.numTables;)z++;z--;for(var L=16*Math.pow(2,z),G=16*V.numTables-L,X=12,F=[],O=0;O<V.numTables;O++)F.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),X+=16;var Q,J=new Uint8Array(12+16*F.length+F.reduce(function(le,I){return le+I.origLength+4},0)),ee=J.buffer,se=new DataView(ee),ye=0;return K(V.flavor),Z(V.numTables),Z(L),Z(z),Z(G),F.forEach(function(le){K(le.tag),K(le.origChecksum),K(X),K(le.origLength),le.outOffset=X,(X+=le.origLength)%4!=0&&(X+=4-X%4)}),F.forEach(function(le){var I,Ne=U.slice(le.offset,le.offset+le.compLength);if(le.compLength!=le.origLength){var ge=new Uint8Array(le.origLength);I=new Uint8Array(Ne,2),q(I,ge)}else ge=new Uint8Array(Ne);J.set(ge,le.outOffset);var Se=0;(X=le.outOffset+le.origLength)%4!=0&&(Se=4-X%4),J.set(new Uint8Array(Se).buffer,le.outOffset+le.origLength),Q=X+Se}),ee.slice(0,Q)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function b_(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,o=4,s=8,l=16,c=32;let u;function f(E){if(!u){const N={R:i,L:n,D:o,C:l,U:c,T:s};u=new Map;for(let q in r){let v=0;r[q].split(",").forEach(R=>{let[U,k]=R.split("+");U=parseInt(U,36),k=k?parseInt(k,36):0,u.set(v+=U,N[q]);for(let b=k;b--;)u.set(++v,N[q])})}}return u.get(E)||c}const h=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(E){const N=new Uint8Array(E.length);let q=c,v=h,R=-1;for(let U=0;U<E.length;U++){const k=E.codePointAt(U);let b=f(k)|0,H=h;b&s||(q&(n|o|l)?b&(i|o|l)?(H=g,(v===h||v===g)&&N[R]++):b&(n|c)&&(v===d||v===_)&&N[R]--:q&(i|c)&&(v===d||v===_)&&N[R]--,v=N[U]=H,q=b,R=U,k>65535&&U++)}return N}function y(E,N){const q=[];for(let R=0;R<N.length;R++){const U=N.codePointAt(R);U>65535&&R++,q.push(a.U.codeToGlyph(E,U))}const v=E.GSUB;if(v){const{lookupList:R,featureList:U}=v;let k;const b=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,H=[];U.forEach(B=>{if(b.test(B.tag))for(let Z=0;Z<B.tab.length;Z++){if(H[B.tab[Z]])continue;H[B.tab[Z]]=!0;const K=R[B.tab[Z]],V=/^(isol|init|fina|medi)$/.test(B.tag);V&&!k&&(k=m(N));for(let z=0;z<q.length;z++)(!k||!V||p[k[z]]===B.tag)&&a.U._applySubs(q,z,K,R)}})}return q}function x(E,N){const q=new Int16Array(N.length*3);let v=0;for(;v<N.length;v++){const b=N[v];if(b===-1)continue;q[v*3+2]=E.hmtx.aWidth[b];const H=E.GPOS;if(H){const B=H.lookupList;for(let Z=0;Z<B.length;Z++){const K=B[Z];for(let V=0;V<K.tabs.length;V++){const z=K.tabs[V];if(K.ltype===1){if(a._lctf.coverageIndex(z.coverage,b)!==-1&&z.pos){k(z.pos,v);break}}else if(K.ltype===2){let L=null,G=R();if(G!==-1){const X=a._lctf.coverageIndex(z.coverage,N[G]);if(X!==-1){if(z.fmt===1){const F=z.pairsets[X];for(let O=0;O<F.length;O++)F[O].gid2===b&&(L=F[O])}else if(z.fmt===2){const F=a.U._getGlyphClass(N[G],z.classDef1),O=a.U._getGlyphClass(b,z.classDef2);L=z.matrix[F][O]}if(L){L.val1&&k(L.val1,G),L.val2&&k(L.val2,v);break}}}}else if(K.ltype===4){const L=a._lctf.coverageIndex(z.markCoverage,b);if(L!==-1){const G=R(U),X=G===-1?-1:a._lctf.coverageIndex(z.baseCoverage,N[G]);if(X!==-1){const F=z.markArray[L],O=z.baseArray[X][F.markClass];q[v*3]=O.x-F.x+q[G*3]-q[G*3+2],q[v*3+1]=O.y-F.y+q[G*3+1];break}}}else if(K.ltype===6){const L=a._lctf.coverageIndex(z.mark1Coverage,b);if(L!==-1){const G=R();if(G!==-1){const X=N[G];if(M(E,X)===3){const F=a._lctf.coverageIndex(z.mark2Coverage,X);if(F!==-1){const O=z.mark1Array[L],Q=z.mark2Array[F][O.markClass];q[v*3]=Q.x-O.x+q[G*3]-q[G*3+2],q[v*3+1]=Q.y-O.y+q[G*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const B=R();if(B!==-1){const Z=E.kern.glyph1.indexOf(N[B]);if(Z!==-1){const K=E.kern.rval[Z].glyph2.indexOf(b);K!==-1&&(q[B*3+2]+=E.kern.rval[Z].vals[K])}}}}return q;function R(b){for(let H=v-1;H>=0;H--)if(N[H]!==-1&&(!b||b(N[H])))return H;return-1}function U(b){return M(E,b)===1}function k(b,H){for(let B=0;B<3;B++)q[H*3+B]+=b[B]||0}}function M(E,N){const q=E.GDEF&&E.GDEF.glyphClassDef;return q?a.U._getGlyphClass(N,q):0}function C(...E){for(let N=0;N<E.length;N++)if(typeof E[N]=="number")return E[N]}function w(E){const N=Object.create(null),q=E["OS/2"],v=E.hhea,R=E.head.unitsPerEm,U=C(q&&q.sTypoAscender,v&&v.ascender,R),k={unitsPerEm:R,ascender:U,descender:C(q&&q.sTypoDescender,v&&v.descender,0),capHeight:C(q&&q.sCapHeight,U),xHeight:C(q&&q.sxHeight,U),lineGap:C(q&&q.sTypoLineGap,v&&v.lineGap),supportsCodePoint(b){return a.U.codeToGlyph(E,b)>0},forEachGlyph(b,H,B,Z){let K=0;const V=1/k.unitsPerEm*H,z=y(E,b);let L=0;const G=x(E,z);return z.forEach((X,F)=>{if(X!==-1){let O=N[X];if(!O){const{cmds:Q,crds:J}=a.U.glyphToPath(E,X);let ee="",se=0;for(let ge=0,Se=Q.length;ge<Se;ge++){const de=t[Q[ge]];ee+=Q[ge];for(let Ue=1;Ue<=de;Ue++)ee+=(Ue>1?",":"")+J[se++]}let ye,le,I,Ne;if(J.length){ye=le=1/0,I=Ne=-1/0;for(let ge=0,Se=J.length;ge<Se;ge+=2){let de=J[ge],Ue=J[ge+1];de<ye&&(ye=de),Ue<le&&(le=Ue),de>I&&(I=de),Ue>Ne&&(Ne=Ue)}}else ye=I=le=Ne=0;O=N[X]={index:X,advanceWidth:E.hmtx.aWidth[X],xMin:ye,yMin:le,xMax:I,yMax:Ne,path:ee}}Z.call(null,O,K+G[F*3]*V,G[F*3+1]*V,L),K+=G[F*3+2]*V,B&&(K+=B*H)}L+=b.codePointAt(L)>65535?2:1}),K}};return k}return function(N){const q=new Uint8Array(N,0,4),v=a._bin.readASCII(q,0,4);if(v==="wOFF")N=e(N);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return w(a.parse(N)[0])}}const A_=Hi({name:"Typr Font Parser",dependencies:[E_,T_,b_],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function w_(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var M=x>>5;this.buckets.set(M,(this.buckets.get(M)||0)|1<<(31&x))},e.prototype.has=function(x){var M=this.buckets.get(x>>5);return M!==void 0&&(M&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach(function(M,C){x.push((+C).toString(36)+":"+M.toString(36))}),x.join(",")},e.prototype.deserialize=function(x){var M=this;this.buckets.clear(),x.split(",").forEach(function(C){var w=C.split(":");M.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(x){var M=function(w){return w&n}(x).toString(16),C=function(w){return(w&n)+t-1}(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+M+"-"+C+".json"}function o(x,M){var C=x&r,w=M.codePointAt(C/6|0);return((w=(w||48)-48)&1<<C%6)!=0}function s(x,M){var C;(C=x,C.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(E){return parseInt(E.trim(),16)})})).forEach(function(w){var E=w[0],N=w[1];N===void 0&&(N=E),M(E,N)})}function l(x,M){s(x,function(C,w){for(var E=C;E<=w;E++)M(E)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var M=f.get(x);return M||(M=new e,l(x.ranges,function(C){return M.add(C)}),f.set(x,M)),M}var g,_=new Map;function p(x,M,C){return x[M]?M:x[C]?C:function(w){for(var E in w)return E}(x)}function m(x,M){var C=M;if(!x.includes(C)){C=1/0;for(var w=0;w<x.length;w++)Math.abs(x[w]-M)<Math.abs(C-M)&&(C=x[w])}return C}function y(x){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(M){g.add(M)})),g.has(x)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(x,M){M===void 0&&(M={});var C,w=M.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(C=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(C)?"ja":"en");var E=M.category;E===void 0&&(E="sans-serif");var N=M.style;N===void 0&&(N="normal");var q=M.weight;q===void 0&&(q=400);var v=(M.dataUrl||h).replace(/\/$/g,""),R=new Map,U=new Uint8Array(x.length),k={},b={},H=new Array(x.length),B=new Map,Z=!1;function K(L){var G=_.get(L);return G||(G=fetch(v+"/"+L).then(function(X){if(!X.ok)throw new Error(X.statusText);return X.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(X){if(v!==h)return Z||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+X.message),Z=!0),v=h,_.delete(L),K(L);throw X}),_.set(L,G)),G}for(var V=function(L){var G=x.codePointAt(L),X=i(G);H[L]=X,c[X]||B.has(X)||B.set(X,K(X).then(function(F){c[X]=F})),G>65535&&(L++,z=L)},z=0;z<x.length;z++)V(z);return Promise.all(B.values()).then(function(){B.clear();for(var L=function(X){var F=x.codePointAt(X),O=null,Q=c[H[X]],J=void 0;for(var ee in Q){var se=b[ee];if(se===void 0&&(se=b[ee]=new RegExp(ee).test(w||"en")),se){for(var ye in J=ee,Q[ee])if(o(F,Q[ee][ye])){O=ye;break}break}}if(!O){e:for(var le in Q)if(le!==J){for(var I in Q[le])if(o(F,Q[le][I])){O=I;break e}}}O||(console.debug("No font coverage for U+"+F.toString(16)),O="latin"),H[X]=O,u[O]||B.has(O)||B.set(O,K("font-meta/"+O+".json").then(function(Ne){u[O]=Ne})),F>65535&&(X++,G=X)},G=0;G<x.length;G++)L(G);return Promise.all(B.values())}).then(function(){for(var L,G=null,X=0;X<x.length;X++){var F=x.codePointAt(X);if(G&&(y(F)||d(G).has(F)))U[X]=U[X-1];else{G=u[H[X]];var O=k[G.id];if(!O){var Q=G.typeforms,J=p(Q,E,"sans-serif"),ee=p(Q[J],N,"normal"),se=m((L=Q[J])===null||L===void 0?void 0:L[ee],q);O=k[G.id]=v+"/font-files/"+G.id+"/"+J+"."+ee+"."+se+".woff"}var ye=R.get(O);ye==null&&(ye=R.size,R.set(O,ye)),U[X]=ye}F>65535&&(X++,U[X]=U[X-1])}return{fontUrls:Array.from(R.keys()),chars:U}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function R_(a,e){const t=Object.create(null),r=Object.create(null);function n(o,s){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=o,s(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(o,s){let l=t[o];l?s(l):r[o]?r[o].push(s):(r[o]=[s],n(o,c=>{c.src=o,t[o]=c,r[o].forEach(u=>u(c)),delete r[o]}))}return function(o,s,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(o.length),g=[];o.length||y();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(M=>!M.lang||M.lang.test(l)).reverse(),c.length){let E=0;(function N(q=0){for(let v=q,R=o.length;v<R;v++){const U=o.codePointAt(v);if(E===1&&g[d[v-1]].supportsCodePoint(U)||/\s/.test(o[v]))d[v]=d[v-1],E===2&&(p[p.length-1][1]=v);else for(let k=d[v],b=c.length;k<=b;k++)if(k===b){const H=E===2?p[p.length-1]:p[p.length]=[v,v];H[1]=v,E=2}else{d[v]=k;const{src:H,unicodeRange:B}=c[k];if(!B||x(U,B)){const Z=t[H];if(!Z){i(H,()=>{N(v)});return}if(Z.supportsCodePoint(U)){let K=_.get(Z);typeof K!="number"&&(K=g.length,g.push(Z),_.set(Z,K)),d[v]=K,E=1;break}}}U>65535&&v+1<R&&(d[v+1]=d[v],v++,E===2&&(p[p.length-1][1]=v))}m()})()}else p.push([0,o.length-1]),m();function m(){if(p.length){const M=p.map(C=>o.substring(C[0],C[1]+1)).join(`
`);e.getFontsForString(M,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:C,chars:w})=>{const E=g.length;let N=0;p.forEach(v=>{for(let R=0,U=v[1]-v[0];R<=U;R++)d[v[0]+R]=w[N++]+E;N++});let q=0;C.forEach((v,R)=>{i(v,U=>{g[R+E]=U,++q===C.length&&y()})})})}else y()}function y(){s({chars:d,fonts:g})}function x(M,C){for(let w=0;w<C.length;w++){const[E,N=E]=C[w];if(E<=M&&M<=N)return!0}return!1}}}const C_=Hi({name:"FontResolver",dependencies:[R_,A_,w_],init(a,e,t){return a(e,t())}});function L_(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:_,fonts:p,style:m,weight:y,preResolvedFonts:x,unicodeFontsURL:M},C){const w=({chars:E,fonts:N})=>{let q,v;const R=[];for(let U=0;U<E.length;U++)E[U]!==v?(v=E[U],R.push(q={start:U,end:U,fontObj:N[E[U]]})):q.end=U;C(R)};x?w(x):a(g,w,{lang:_,fonts:p,style:m,weight:y,unicodeFontsURL:M})}function s({text:g="",font:_,lang:p,sdfGlyphSize:m=64,fontSize:y=400,fontWeight:x=1,fontStyle:M="normal",letterSpacing:C=0,lineHeight:w="normal",maxWidth:E=1/0,direction:N,textAlign:q="left",textIndent:v=0,whiteSpace:R="normal",overflowWrap:U="normal",anchorX:k=0,anchorY:b=0,metricsOnly:H=!1,unicodeFontsURL:B,preResolvedFonts:Z=null,includeCaretPositions:K=!1,chunkedBoundsSize:V=8192,colorRanges:z=null},L){const G=f(),X={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,C=+C,E=+E,w=w||"normal",v=+v,o({text:g,lang:p,style:M,weight:x,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:B,preResolvedFonts:Z},F=>{X.fontLoad=f()-G;const O=isFinite(E);let Q=null,J=null,ee=null,se=null,ye=null,le=null,I=null,Ne=null,ge=0,Se=0,de=R!=="nowrap";const Ue=new Map,ue=f();let T=v,S=0,D=new h;const te=[D];F.forEach(ce=>{const{fontObj:_e}=ce,{ascender:Ee,descender:ae,unitsPerEm:Ie,lineGap:Pe,capHeight:Te,xHeight:ve}=_e;let fe=Ue.get(_e);if(!fe){const Ae=y/Ie,P=w==="normal"?(Ee-ae+Pe)*Ae:w*y,Me=(P-(Ee-ae)*Ae)/2,he=Math.min(P,(Ee-ae)*Ae),xe=(Ee+ae)/2*Ae+he/2;fe={index:Ue.size,src:_e.src,fontObj:_e,fontSizeMult:Ae,unitsPerEm:Ie,ascender:Ee*Ae,descender:ae*Ae,capHeight:Te*Ae,xHeight:ve*Ae,lineHeight:P,baseline:-Me-Ee*Ae,caretTop:xe,caretBottom:xe-he},Ue.set(_e,fe)}const{fontSizeMult:we}=fe,Oe=g.slice(ce.start,ce.end+1);let je,De;_e.forEachGlyph(Oe,y,C,(Ae,P,Me,he)=>{P+=S,he+=ce.start,je=P,De=Ae;const xe=g.charAt(he),Ce=Ae.advanceWidth*we,Be=D.count;let Le;if("isEmpty"in Ae||(Ae.isWhitespace=!!xe&&new RegExp(n).test(xe),Ae.canBreakAfter=!!xe&&i.test(xe),Ae.isEmpty=Ae.xMin===Ae.xMax||Ae.yMin===Ae.yMax||r.test(xe)),!Ae.isWhitespace&&!Ae.isEmpty&&Se++,de&&O&&!Ae.isWhitespace&&P+Ce+T>E&&Be){if(D.glyphAt(Be-1).glyphObj.canBreakAfter)Le=new h,T=-P;else for(let $e=Be;$e--;)if($e===0&&U==="break-word"){Le=new h,T=-P;break}else if(D.glyphAt($e).glyphObj.canBreakAfter){Le=D.splitAt($e+1);const We=Le.glyphAt(0).x;T-=We;for(let Je=Le.count;Je--;)Le.glyphAt(Je).x-=We;break}Le&&(D.isSoftWrapped=!0,D=Le,te.push(D),ge=E)}let Xe=D.glyphAt(D.count);Xe.glyphObj=Ae,Xe.x=P+T,Xe.y=Me,Xe.width=Ce,Xe.charIndex=he,Xe.fontData=fe,xe===`
`&&(D=new h,te.push(D),T=-(P+Ce+C*y)+v)}),S=je+De.advanceWidth*we+C*y});let Y=0;te.forEach(ce=>{let _e=!0;for(let Ee=ce.count;Ee--;){const ae=ce.glyphAt(Ee);_e&&!ae.glyphObj.isWhitespace&&(ce.width=ae.x+ae.width,ce.width>ge&&(ge=ce.width),_e=!1);let{lineHeight:Ie,capHeight:Pe,xHeight:Te,baseline:ve}=ae.fontData;Ie>ce.lineHeight&&(ce.lineHeight=Ie);const fe=ve-ce.baseline;fe<0&&(ce.baseline+=fe,ce.cap+=fe,ce.ex+=fe),ce.cap=Math.max(ce.cap,ce.baseline+Pe),ce.ex=Math.max(ce.ex,ce.baseline+Te)}ce.baseline-=Y,ce.cap-=Y,ce.ex-=Y,Y+=ce.lineHeight});let $=0,oe=0;if(k&&(typeof k=="number"?$=-k:typeof k=="string"&&($=-ge*(k==="left"?0:k==="center"?.5:k==="right"?1:c(k)))),b&&(typeof b=="number"?oe=-b:typeof b=="string"&&(oe=b==="top"?0:b==="top-baseline"?-te[0].baseline:b==="top-cap"?-te[0].cap:b==="top-ex"?-te[0].ex:b==="middle"?Y/2:b==="bottom"?Y:b==="bottom-baseline"?-te[te.length-1].baseline:c(b)*Y)),!H){const ce=e.getEmbeddingLevels(g,N);Q=new Uint16Array(Se),J=new Uint8Array(Se),ee=new Float32Array(Se*2),se={},I=[1/0,1/0,-1/0,-1/0],Ne=[],K&&(le=new Float32Array(g.length*4)),z&&(ye=new Uint8Array(Se*3));let _e=0,Ee=-1,ae=-1,Ie,Pe;if(te.forEach((Te,ve)=>{let{count:fe,width:we}=Te;if(fe>0){let Oe=0;for(let he=fe;he--&&Te.glyphAt(he).glyphObj.isWhitespace;)Oe++;let je=0,De=0;if(q==="center")je=(ge-we)/2;else if(q==="right")je=ge-we;else if(q==="justify"&&Te.isSoftWrapped){let he=0;for(let xe=fe-Oe;xe--;)Te.glyphAt(xe).glyphObj.isWhitespace&&he++;De=(ge-we)/he}if(De||je){let he=0;for(let xe=0;xe<fe;xe++){let Ce=Te.glyphAt(xe);const Be=Ce.glyphObj;Ce.x+=je+he,De!==0&&Be.isWhitespace&&xe<fe-Oe&&(he+=De,Ce.width+=De)}}const Ae=e.getReorderSegments(g,ce,Te.glyphAt(0).charIndex,Te.glyphAt(Te.count-1).charIndex);for(let he=0;he<Ae.length;he++){const[xe,Ce]=Ae[he];let Be=1/0,Le=-1/0;for(let Xe=0;Xe<fe;Xe++)if(Te.glyphAt(Xe).charIndex>=xe){let $e=Xe,We=Xe;for(;We<fe;We++){let Je=Te.glyphAt(We);if(Je.charIndex>Ce)break;We<fe-Oe&&(Be=Math.min(Be,Je.x),Le=Math.max(Le,Je.x+Je.width))}for(let Je=$e;Je<We;Je++){const lt=Te.glyphAt(Je);lt.x=Le-(lt.x+lt.width-Be)}break}}let P;const Me=he=>P=he;for(let he=0;he<fe;he++){const xe=Te.glyphAt(he);P=xe.glyphObj;const Ce=P.index,Be=ce.levels[xe.charIndex]&1;if(Be){const Le=e.getMirroredCharacter(g[xe.charIndex]);Le&&xe.fontData.fontObj.forEachGlyph(Le,0,0,Me)}if(K){const{charIndex:Le,fontData:Xe}=xe,$e=xe.x+$,We=xe.x+xe.width+$;le[Le*4]=Be?We:$e,le[Le*4+1]=Be?$e:We,le[Le*4+2]=Te.baseline+Xe.caretBottom+oe,le[Le*4+3]=Te.baseline+Xe.caretTop+oe;const Je=Le-Ee;Je>1&&u(le,Ee,Je),Ee=Le}if(z){const{charIndex:Le}=xe;for(;Le>ae;)ae++,z.hasOwnProperty(ae)&&(Pe=z[ae])}if(!P.isWhitespace&&!P.isEmpty){const Le=_e++,{fontSizeMult:Xe,src:$e,index:We}=xe.fontData,Je=se[$e]||(se[$e]={});Je[Ce]||(Je[Ce]={path:P.path,pathBounds:[P.xMin,P.yMin,P.xMax,P.yMax]});const lt=xe.x+$,qt=xe.y+Te.baseline+oe;ee[Le*2]=lt,ee[Le*2+1]=qt;const jt=lt+P.xMin*Xe,Bt=qt+P.yMin*Xe,ln=lt+P.xMax*Xe,Dt=qt+P.yMax*Xe;jt<I[0]&&(I[0]=jt),Bt<I[1]&&(I[1]=Bt),ln>I[2]&&(I[2]=ln),Dt>I[3]&&(I[3]=Dt),Le%V===0&&(Ie={start:Le,end:Le,rect:[1/0,1/0,-1/0,-1/0]},Ne.push(Ie)),Ie.end++;const pt=Ie.rect;if(jt<pt[0]&&(pt[0]=jt),Bt<pt[1]&&(pt[1]=Bt),ln>pt[2]&&(pt[2]=ln),Dt>pt[3]&&(pt[3]=Dt),Q[Le]=Ce,J[Le]=We,z){const cn=Le*3;ye[cn]=Pe>>16&255,ye[cn+1]=Pe>>8&255,ye[cn+2]=Pe&255}}}}}),le){const Te=g.length-Ee;Te>1&&u(le,Ee,Te)}}const me=[];Ue.forEach(({index:ce,src:_e,unitsPerEm:Ee,ascender:ae,descender:Ie,lineHeight:Pe,capHeight:Te,xHeight:ve})=>{me[ce]={src:_e,unitsPerEm:Ee,ascender:ae,descender:Ie,lineHeight:Pe,capHeight:Te,xHeight:ve}}),X.typesetting=f()-ue,L({glyphIds:Q,glyphFontIndices:J,glyphPositions:ee,glyphData:se,fontData:me,caretPositions:le,glyphColors:ye,chunkedBounds:Ne,fontSize:y,topBaseline:oe+te[0].baseline,blockBounds:[$,oe-Y,$+ge,oe],visibleBounds:I,timings:X})})}function l(g,_){s({...g,metricsOnly:!0},p=>{const[m,y,x,M]=p.blockBounds;_({width:x-m,height:M-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],y=g[_*4+1],x=g[_*4+2],M=g[_*4+3],C=(y-m)/p;for(let w=0;w<p;w++){const E=(_+w)*4;g[E]=m+C*w,g[E+1]=m+C*(w+1),g[E+2]=x,g[E+3]=M}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*d.length),_}},h.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(y){this.data[this.index*d.length+p]=y}}),g),{data:null,index:0}),{typeset:s,measure:l}}const ti=()=>(self.performance||Date).now(),ya=lu();let sc;function P_(a,e,t,r,n,i,o,s,l,c,u=!0){return u?D_(a,e,t,r,n,i,o,s,l,c).then(null,f=>(sc||(console.warn("WebGL SDF generation failed, falling back to JS",f),sc=!0),lc(a,e,t,r,n,i,o,s,l,c))):lc(a,e,t,r,n,i,o,s,l,c)}const oa=[],U_=5;let Bs=0;function uu(){const a=ti();for(;oa.length&&ti()-a<U_;)oa.shift()();Bs=oa.length?setTimeout(uu,0):0}const D_=(...a)=>new Promise((e,t)=>{oa.push(()=>{const r=ti();try{ya.webgl.generateIntoCanvas(...a),e({timing:ti()-r})}catch(n){t(n)}}),Bs||(Bs=setTimeout(uu,0))}),I_=4,F_=2e3,oc={};let N_=0;function lc(a,e,t,r,n,i,o,s,l,c){const u="TroikaTextSDFGenerator_JS_"+N_++%I_;let f=oc[u];return f||(f=oc[u]={workerModule:Hi({name:u,workerId:u,dependencies:[lu,ti],init(h,d){const g=h().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:d})=>{const g=ti(),_=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)_[p*4+c]=h[p];return ya.webglUtils.renderImageData(o,_,s,l,a,e,1<<3-c),d+=ti()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{d_(u)},F_)),{timing:d}})}function O_(a){a._warm||(ya.webgl.isSupported(a),a._warm=!0)}const B_=ya.webglUtils.resizeWebGLCanvasWithoutClearing,fr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},G_=new Ze;function Ai(){return(self.performance||Date).now()}const cc=Object.create(null);function z_(a,e){a=H_({},a);const t=Ai(),r=[];if(a.font&&r.push({label:"user",src:V_(a.font)}),a.font=r,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||fr.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||fr.unicodeFontsURL,a.colorRanges!=null){let f={};for(let h in a.colorRanges)if(a.colorRanges.hasOwnProperty(h)){let d=a.colorRanges[h];typeof d!="number"&&(d=G_.set(d).getHex()),f[h]=d}a.colorRanges=f}Object.freeze(a);const{textureWidth:n,sdfExponent:i}=fr,{sdfGlyphSize:o}=a,s=n/o*4;let l=cc[o];if(!l){const f=document.createElement("canvas");f.width=n,f.height=o*256/s,l=cc[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new bt(f,void 0,void 0,void 0,Tt,Tt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,k_(l)}const{sdfTexture:c,sdfCanvas:u}=l;X_(a).then(f=>{const{glyphIds:h,glyphFontIndices:d,fontData:g,glyphPositions:_,fontSize:p,timings:m}=f,y=[],x=new Float32Array(h.length*4);let M=0,C=0;const w=Ai(),E=g.map(U=>{let k=l.glyphsByFont.get(U.src);return k||l.glyphsByFont.set(U.src,k=new Map),k});h.forEach((U,k)=>{const b=d[k],{src:H,unitsPerEm:B}=g[b];let Z=E[b].get(U);if(!Z){const{path:G,pathBounds:X}=f.glyphData[H][U],F=Math.max(X[2]-X[0],X[3]-X[1])/o*(fr.sdfMargin*o+.5),O=l.glyphCount++,Q=[X[0]-F,X[1]-F,X[2]+F,X[3]+F];E[b].set(U,Z={path:G,atlasIndex:O,sdfViewBox:Q}),y.push(Z)}const{sdfViewBox:K}=Z,V=_[C++],z=_[C++],L=p/B;x[M++]=V+K[0]*L,x[M++]=z+K[1]*L,x[M++]=V+K[2]*L,x[M++]=z+K[3]*L,h[k]=Z.atlasIndex}),m.quads=(m.quads||0)+(Ai()-w);const N=Ai();m.sdf={};const q=u.height,v=Math.ceil(l.glyphCount/s),R=Math.pow(2,Math.ceil(Math.log2(v*o)));R>q&&(console.info(`Increasing SDF texture size ${q}->${R}`),B_(u,n,R),c.dispose()),Promise.all(y.map(U=>fu(U,l,a.gpuAccelerateSDF).then(({timing:k})=>{m.sdf[U.atlasIndex]=k}))).then(()=>{y.length&&!l.contextLost&&(hu(l),c.needsUpdate=!0),m.sdfTotal=Ai()-N,m.total=Ai()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:o,sdfExponent:i,glyphBounds:x,glyphAtlasIndices:h,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||O_(u)})}function fu({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},o){if(i)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:l}=fr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(s/r)*r,h=Math.floor(u/(s/r))*r,d=e%4;return P_(r,r,a,t,c,l,n,f,h,d,o)}function k_(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(fu(i,a,!0))})}),Promise.all(r).then(()=>{hu(a),a.sdfTexture.needsUpdate=!0})})}function H_(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let ta;function V_(a){return ta||(ta=typeof document>"u"?{}:document.createElement("a")),ta.href=a,ta.href}function hu(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==r*n*4)&&(o=new Uint8Array(r*n*4),t.image={width:r,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,o)}}const W_=Hi({name:"Typesetter",dependencies:[L_,C_,m_],init(a,e,t){return a(e,t())}}),X_=Hi({name:"Typesetter",dependencies:[W_],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),uc={};function Y_(a){let e=uc[a];if(!e){const t=new yn(1,1,a,a),r=t.clone(),n=t.attributes,i=r.attributes,o=new wt,s=n.uv.count;for(let l=0;l<s;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new Yt([...n[l].array,...i[l].array],n[l].itemSize))}),o.setIndex([...t.index.array,...r.index.array.map(l=>l+s)]),o.translate(.5,.5,0),e=uc[a]=o}return e}const q_="aTroikaGlyphBounds",fc="aTroikaGlyphIndex",j_="aTroikaGlyphColor";class K_ extends o_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Gi,this.boundingBox=new Bi}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Ut?t/2:0,e===Wt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Y_(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){Ss(this,q_,e,4),Ss(this,fc,t,1),Ss(this,j_,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:o,max:s,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,_=i((d+u)/f)!==i((g+u)/f)?-h:o(l(d)*h,l(g)*h),p=i((d-u)/f)!==i((g-u)/f)?h:s(l(d)*h,l(g)*h),m=i((d+n)/f)!==i((g+n)/f)?h*2:s(h-c(d)*h,h-c(g)*h);r.min.set(_,e[1],t<0?-m:0),r.max.set(p,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(fc).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function Ss(a,e,t,r){const n=a.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(a.setAttribute(e,new Kg(t,r)),delete a._maxInstanceCount,a.dispose()):n&&a.deleteAttribute(e)}const Z_=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,J_=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Q_=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,$_=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function ev(a){const e=Os(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new ke},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new it(0,0,0,0)},uTroikaClipRect:{value:new it(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new ke},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ze},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Z_,vertexTransform:J_,fragmentDefs:Q_,fragmentColorTransform:$_,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(cu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const io=new zi({color:16777215,side:Wt,transparent:!0}),hc=8421504,dc=new st,na=new W,Ms=new W,cr=[],tv=new W,ys="+x+y";function pc(a){return Array.isArray(a)?a[0]:a}let du=()=>{const a=new Pt(new yn(1,1),io);return du=()=>a,a},pu=()=>{const a=new Pt(new yn(1,1,32,1),io);return pu=()=>a,a};const nv={type:"syncstart"},iv={type:"synccomplete"},mu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],rv=mu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class gu extends Pt{constructor(){const e=new K_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=hc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ys,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(nv),z_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(iv),e&&e()})))}onBeforeRender(e,t,r,n,i,o){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=Sn}onAfterRender(e,t,r,n,i,o){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=io.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=ev(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return pc(this.material).getDepthMaterial()}get customDistanceMaterial(){return pc(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:s,blockBounds:l}=n;r.uTroikaSDFTexture.value=s,r.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,g,_=0,p=0;if(t){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:M,outlineBlur:C,outlineOpacity:w}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(C)||0),h=w,_=this._parsePercent(x)||0,p=this._parsePercent(M)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??hc),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(_,p),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)r.uTroikaClipRect.value.fromArray(m);else{const y=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const s=e.hasOwnProperty("color")?e.color:e.color=new Ze;(i!==s._input||typeof i=="object")&&s.set(s._input=i)}let o=this.orientation||ys;if(o!==e._orientation){let s=r.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==ys&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;na.set(0,0,0)[u]=c==="-"?1:-1,Ms.set(0,0,0)[h]=f==="-"?-1:1,dc.lookAt(tv,na.cross(Ms),Ms),s.setFromMatrix4(dc)}else s.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new ke){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new ke){return na.copy(e),this.localPositionToTextCoords(this.worldToLocal(na),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,o=n?pu():du(),s=o.geometry,{position:l,uv:c}=s.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,cr.length=0,o.raycast(e,cr);for(let u=0;u<cr.length;u++)cr[u].object=this,t.push(cr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,rv.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}mu.forEach(a=>{const e="_private_"+a;Object.defineProperty(gu.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const av=document.getElementById("scene"),Vi=new eu({canvas:av,antialias:!0,alpha:!1});Vi.setPixelRatio(Math.min(window.devicePixelRatio,2));Vi.setSize(window.innerWidth,window.innerHeight);Vi.outputColorSpace=gt;Vi.setClearColor(984580,1);const _t=new qg;_t.fog=new Js(2099975,6,30);const Un=new Ht(45,window.innerWidth/window.innerHeight,.1,120);Un.position.set(0,.12,8.5);const _u=new su(16769208,1.2);_u.position.set(4,6,6);_t.add(_u);const vu=new su(16763560,.55);vu.position.set(-4,2,3);_t.add(vu);const xu=new r_(16751211,1.1,35);xu.position.set(0,3,-6);_t.add(xu);_t.add(new s_(16770508,.32));function sv(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d"),r=t.createLinearGradient(0,0,0,1024);r.addColorStop(0,"#2a0e08"),r.addColorStop(.45,"#6a1f12"),r.addColorStop(.75,"#c24a22"),r.addColorStop(1,"#f7c37b"),t.fillStyle=r,t.fillRect(0,0,1024,1024);const n=t.createRadialGradient(1024/2,1024*.72,0,1024/2,1024*.72,1024*.45);return n.addColorStop(0,"rgba(255,240,200,0.95)"),n.addColorStop(.35,"rgba(255,200,140,0.55)"),n.addColorStop(1,"rgba(255,200,140,0)"),t.fillStyle=n,t.fillRect(0,0,1024,1024),new eo(e)}const Su=new Pt(new yn(40,24),new zi({map:sv(),depthWrite:!1}));Su.position.set(0,.2,-10);_t.add(Su);function Mu(a,e){const t=new zi({color:a,transparent:!0,opacity:e,blending:Ui,depthWrite:!1});return new Pt(new yn(10,18),t)}const Ea=Mu(16764837,.2);Ea.position.set(-3.2,1.2,-8);Ea.rotation.z=.12;_t.add(Ea);const Ta=Mu(16767410,.16);Ta.position.set(3,.8,-8);Ta.rotation.z=-.1;_t.add(Ta);const ro=2400,la=new Float32Array(ro*3),ca=new Float32Array(ro*3);for(let a=0;a<ro;a++){const e=Math.random()*10+2,t=Math.random()*Math.PI*2,r=(Math.random()-.5)*6;la[a*3]=Math.cos(t)*e,la[a*3+1]=r,la[a*3+2]=Math.sin(t)*e;const n=Math.random()*.4+.6;ca[a*3]=1,ca[a*3+1]=n,ca[a*3+2]=.5+Math.random()*.3}const ao=new wt;ao.setAttribute("position",new At(la,3));ao.setAttribute("color",new At(ca,3));const ov=new $s({vertexColors:!0,size:.03,transparent:!0,opacity:.7,depthWrite:!1}),Gs=new ru(ao,ov);_t.add(Gs);const lv="/fonts/SourceHanSerifCN-VF.otf";function mc({text:a,fontSize:e,position:t,color:r,opacity:n,maxWidth:i,lineHeight:o,depthWrite:s=!0}){const l=new gu;return l.text=a,l.font=lv,l.fontSize=e,l.color=r,l.anchorX="center",l.anchorY="middle",l.position.set(t.x,t.y,t.z),l.maxWidth=i,l.lineHeight=o,l.material.transparent=!0,l.material.opacity=n,l.material.depthTest=!0,l.material.depthWrite=s,l.outlineWidth="3%",l.outlineColor=16762778,l.sync(),l}function yu(a,e,t,r,n){const i=mc({text:a,fontSize:e,position:t,color:r,opacity:0,maxWidth:6.5,lineHeight:1.2,depthWrite:!0}),o=mc({text:a,fontSize:e,position:t.clone().add(new W(0,0,-.08)),color:n,opacity:0,maxWidth:6.5,lineHeight:1.2,depthWrite:!1});return o.scale.setScalar(1.01),_t.add(o),_t.add(i),{front:i,back:o}}const ur=yu("李婷，新年快乐",.9,new W(0,.55,0),16774109,14785127),ia=yu("愿你我如星与风，岁岁相依。",.34,new W(0,-.35,0),16771792,14262906),ba=900,so=new wt,cv=new Float32Array(ba*3),Pi=new Float32Array(ba*3);for(let a=0;a<ba;a++){const e=new W(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(Math.random()*4.5+1.6);Pi[a*3]=e.x,Pi[a*3+1]=e.y,Pi[a*3+2]=e.z}so.setAttribute("position",new At(cv,3));const zs=new $s({color:16773314,size:.08,transparent:!0,opacity:0,depthWrite:!1}),uv=new ru(so,zs);_t.add(uv);let gc=0,Es=!1;const fv=new to(.35,.44,72),ks=new zi({color:16765091,transparent:!0,opacity:0,side:Wt,blending:Ui}),oo=new Pt(fv,ks);oo.rotation.x=Math.PI/2;_t.add(oo);function hv(a,e=.6){const r=document.createElement("canvas");r.width=256,r.height=256;const n=r.getContext("2d"),i=n.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return i.addColorStop(0,a),i.addColorStop(.35,`rgba(255,255,255,${e})`),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,256,256),new eo(r)}function Eu(a,e=.6){const t=new Ze(a),r=new Qs({map:hv(t.getStyle(),e),color:t,transparent:!0,depthWrite:!1,blending:Ui}),n=new nu(r);return n.scale.set(1.2,1.2,1.2),n}const Hs=Eu(16766886,.6),Vs=Eu(10148351,.6);_t.add(Hs);_t.add(Vs);function dv(a="#ffd1c2"){const t=document.createElement("canvas");t.width=128,t.height=128;const r=t.getContext("2d");r.translate(128/2,128/2),r.scale(1,-1),r.beginPath();for(let n=0;n<=Math.PI*2;n+=.02){const i=16*Math.pow(Math.sin(n),3),o=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);r.lineTo(i,o)}return r.closePath(),r.fillStyle=a,r.globalAlpha=.95,r.fill(),r.globalAlpha=.6,r.shadowColor="rgba(255,160,130,0.8)",r.shadowBlur=20,r.fill(),new eo(t)}function pv(){const a=new nu(new Qs({map:dv(),transparent:!0,depthWrite:!1,blending:Ui}));a.scale.set(.35,.35,.35);const e=16,t=new Float32Array(e*3),r=new wt;r.setAttribute("position",new At(t,3));const n=new iu({color:16762792,transparent:!0,opacity:.6}),i=new Zg(r,n);return{head:a,trail:i,start:0,duration:2.6+Math.random()*.8,delay:1+Math.random()*4,curve:null}}const Tu=Array.from({length:10},()=>pv());Tu.forEach(a=>{_t.add(a.trail),_t.add(a.head)});const ra=.6,mv=1.5,gv=3,_v=new l_,_c=document.querySelector(".fallback-text");let vc=!1;function vv(a){return a<.5?2*a*a:1-Math.pow(-2*a+2,2)/2}function bu(){requestAnimationFrame(bu);const a=_v.getElapsedTime(),e=a<2.2?a*.4:.9,t=a<3.2?Math.sin(a*40)*.015:0;Un.position.z=8.5-e+t,Un.position.x=Math.sin(a*.25)*.32+t,Un.position.y=.12+Math.sin(a*.2)*.05,Un.lookAt(0,.08,0),Gs.rotation.y+=5e-4,Gs.rotation.x+=12e-5,Ea.rotation.z=.12+Math.sin(a*.3)*.02,Ta.rotation.z=-.1+Math.cos(a*.25)*.02;const r=Math.min(Math.max((a-ra)/mv,0),1),n=vv(r),i=.88+Math.sin(a*18)*.08;ur.front.material.opacity=n*i,ur.back.material.opacity=n*.6,ia.front.material.opacity=Math.max(n-.2,0),ia.back.material.opacity=Math.max(n-.25,0)*.6;const o=Wa.lerp(1.55,1,n);if(ur.front.scale.setScalar(o),ur.back.scale.setScalar(o*1.01),ia.front.scale.setScalar(o),ia.back.scale.setScalar(o*1.01),a<ra){ks.opacity=Math.min(a/ra,1)*.6;const s=.4+a*1.4;oo.scale.set(s,s,s)}else ks.opacity=Math.max(.6-(a-ra)*.8,0);{const s=a*.9,l=3.2,c=Math.sin(s)*l,u=Math.sin(s)*.6,f=Math.cos(s)*1.1,h=Math.sin(s+Math.PI)*l,d=Math.sin(s+Math.PI)*.6,g=Math.cos(s+Math.PI)*1.1;Hs.position.set(c,u,f),Vs.position.set(h,d,g);const _=1.2,p=Wa.clamp(_+f*.18,.7,1.8),m=Wa.clamp(_+g*.18,.7,1.8);Hs.scale.set(p,p,p),Vs.scale.set(m,m,m)}for(const s of Tu){if(a<s.delay){s.head.visible=!1,s.trail.visible=!1;continue}if(!s.curve||a>s.start+s.duration+s.delay){s.start=a,s.delay=2+Math.random()*4;const c=-8+Math.random()*3.5,u=2.6+Math.random()*1.8,f=-2.5+Math.random()*4,h=4.5+Math.random()*4,d=-2.2+Math.random()*2,g=-3+Math.random()*3.5,_=new W(c+2,u-.5,f-.4),p=new W(h-2,d+.6,g-.4);s.curve=new n_(new W(c,u,f),_,p,new W(h,d,g))}const l=(a-s.start)/s.duration;if(l>=0&&l<=1){s.head.visible=!0,s.trail.visible=!0;const c=s.curve.getPoint(l);s.head.position.copy(c);const u=s.trail.geometry.getAttribute("position");for(let f=0;f<u.count;f++){const h=Math.max(l-f*.03,0),d=s.curve.getPoint(h);u.array[f*3]=d.x,u.array[f*3+1]=d.y,u.array[f*3+2]=d.z}u.needsUpdate=!0,s.trail.material.opacity=.6*(1-l),s.head.material.opacity=1-l*.2}else s.head.visible=!1,s.trail.visible=!1}if(!Es&&a>=gv&&(Es=!0,gc=a,zs.opacity=1),Es){const s=a-gc,l=Math.max(1-s/2,0);zs.opacity=l;const c=so.getAttribute("position");for(let u=0;u<ba;u++)c.array[u*3]=Pi[u*3]*s,c.array[u*3+1]=Pi[u*3+1]*s,c.array[u*3+2]=Pi[u*3+2]*s;c.needsUpdate=!0}!vc&&ur.front.textRenderInfo&&_c&&(_c.style.opacity="0",vc=!0),Vi.render(_t,Un)}bu();window.addEventListener("resize",()=>{const a=window.innerWidth,e=window.innerHeight;Un.aspect=a/e,Un.updateProjectionMatrix(),Vi.setSize(a,e)});
