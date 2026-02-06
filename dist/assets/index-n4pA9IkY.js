(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hs="161",Fc=0,zs=1,Nc=2,Cl=1,Oc=2,pn=3,_n=0,Tt=1,en=2,Cn=0,Mi=1,Hs=2,Vs=3,Ws=4,Bc=5,Vn=100,Gc=101,kc=102,Xs=103,Ys=104,zc=200,Hc=201,Vc=202,Wc=203,Za=204,Ja=205,Xc=206,Yc=207,qc=208,jc=209,Kc=210,Zc=211,Jc=212,Qc=213,$c=214,eu=0,tu=1,nu=2,Wr=3,iu=4,ru=5,au=6,su=7,Ll=0,ou=1,lu=2,Ln=0,cu=1,uu=2,fu=3,hu=4,du=5,pu=6,Ul=300,Ti=301,bi=302,Qa=303,$a=304,Zr=306,es=1e3,tn=1001,ts=1002,Et=1003,qs=1004,Hi=1005,Mt=1006,da=1007,Xn=1008,Un=1009,mu=1010,gu=1011,ds=1012,Pl=1013,Rn=1014,mn=1015,$i=1016,Dl=1017,Il=1018,qn=1020,_u=1021,nn=1023,vu=1024,xu=1025,jn=1026,Ai=1027,Su=1028,Fl=1029,Mu=1030,Nl=1031,Ol=1033,pa=33776,ma=33777,ga=33778,_a=33779,js=35840,Ks=35841,Zs=35842,Js=35843,Bl=36196,Qs=37492,$s=37496,eo=37808,to=37809,no=37810,io=37811,ro=37812,ao=37813,so=37814,oo=37815,lo=37816,co=37817,uo=37818,fo=37819,ho=37820,po=37821,va=36492,mo=36494,go=36495,yu=36283,_o=36284,vo=36285,xo=36286,Gl=3e3,Kn=3001,Eu=3200,kl=3201,Tu=0,bu=1,zt="",pt="srgb",vn="srgb-linear",ps="display-p3",Jr="display-p3-linear",Xr="linear",rt="srgb",Yr="rec709",qr="p3",ti=7680,So=519,Au=512,wu=513,Ru=514,zl=515,Cu=516,Lu=517,Uu=518,Pu=519,Mo=35044,yo="300 es",ns=1035,gn=2e3,jr=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,o=n.length;i<o;i++)n[i].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,is=180/Math.PI;function er(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[a&255]+xt[a>>8&255]+xt[a>>16&255]+xt[a>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toLowerCase()}function Pt(a,e,t){return Math.max(e,Math.min(t,a))}function Du(a,e){return(a%e+e)%e}function Sa(a,e,t){return(1-t)*a+t*e}function Eo(a){return(a&a-1)===0&&a!==0}function rs(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Vi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ut(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*r-o*n+e.x,this.y=i*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,r,n,i,o,s,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,o,s,l,c)}set(e,t,r,n,i,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],m=r[5],g=r[8],_=n[0],d=n[3],p=n[6],y=n[1],x=n[4],M=n[7],C=n[2],R=n[5],E=n[8];return i[0]=o*_+s*y+l*C,i[3]=o*d+s*x+l*R,i[6]=o*p+s*M+l*E,i[1]=c*_+u*y+f*C,i[4]=c*d+u*x+f*R,i[7]=c*p+u*M+f*E,i[2]=h*_+m*y+g*C,i[5]=h*d+m*x+g*R,i[8]=h*p+m*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-r*i*u+r*s*l+n*i*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,h=s*l-u*i,m=c*i-o*l,g=t*f+r*h+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(n*c-u*r)*_,e[2]=(s*r-n*o)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-s*t)*_,e[6]=m*_,e[7]=(r*l-c*t)*_,e[8]=(o*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,o,s){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new je;function Hl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Kr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Iu(){const a=Kr("canvas");return a.style.display="block",a}const To={};function yi(a){a in To||(To[a]=!0,console.warn(a))}const bo=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ao=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pr={[vn]:{transfer:Xr,primaries:Yr,toReference:a=>a,fromReference:a=>a},[pt]:{transfer:rt,primaries:Yr,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Jr]:{transfer:Xr,primaries:qr,toReference:a=>a.applyMatrix3(Ao),fromReference:a=>a.applyMatrix3(bo)},[ps]:{transfer:rt,primaries:qr,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Ao),fromReference:a=>a.applyMatrix3(bo).convertLinearToSRGB()}},Fu=new Set([vn,Jr]),et={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Fu.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const r=pr[e].toReference,n=pr[t].fromReference;return n(r(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return pr[a].primaries},getTransfer:function(a){return a===zt?Xr:pr[a].transfer}};function Ei(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ya(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ni;class Vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Kr("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let o=0;o<i.length;o++)i[o]=Ei(i[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ei(t[r]/255)*255):t[r]=Ei(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nu=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?i.push(Ea(n[o].image)):i.push(Ea(n[o]))}else i=Ea(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Ea(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Vl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;class bt extends Ri{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,r=tn,n=tn,i=Mt,o=Xn,s=nn,l=Un,c=bt.DEFAULT_ANISOTROPY,u=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=er(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Kn?pt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?Kn:Gl}set encoding(e){yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?pt:zt}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Ul;bt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,r=0,n=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*i,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*i,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*i,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(m+1)/2,C=(p+1)/2,R=(u+h)/4,E=(f+_)/4,O=(g+d)/4;return x>M&&x>C?x<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(x),n=R/r,i=E/r):M>C?M<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(M),r=R/n,i=O/n):C<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(C),r=E/i,n=O/i),this.set(r,n,i,t),this}let y=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bu extends Ri{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Kn?pt:zt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new bt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Bu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Xl extends bt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gu extends bt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,o,s){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const h=i[o+0],m=i[o+1],g=i[o+2],_=i[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==m||u!==g){let d=1-s;const p=l*h+c*m+u*g+f*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),R=Math.atan2(C,p*y);d=Math.sin(d*R)/C,s=Math.sin(s*R)/C}const M=s*y;if(l=l*d+h*M,c=c*d+m*M,u=u*d+g*M,f=f*d+_*M,d===1-s){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,o){const s=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=i[o],h=i[o+1],m=i[o+2],g=i[o+3];return e[t]=s*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-s*m,e[t+2]=c*g+u*m+s*h-l*f,e[t+3]=u*g-s*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(n/2),f=s(i/2),h=l(r/2),m=l(n/2),g=l(i/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=r+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(i-c)*m,this._z=(o-n)*m}else if(r>s&&r>f){const m=2*Math.sqrt(1+r-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(i+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-r-f);this._w=(i-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-r-s);this._w=(o-n)/m,this._x=(i+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+o*s+n*c-i*l,this._y=n*u+o*l+i*s-r*c,this._z=i*u+o*c+r*l-n*s,this._w=o*u-r*s-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+i*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=i,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,o=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*o,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*o,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),u=2*(s*t-i*n),f=2*(i*r-o*t);return this.x=t+l*c+o*f-s*u,this.y=r+l*u+s*c-i*f,this.z=n+l*f+i*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-i*s,this.y=i*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new j,wo=new tr;class Ci{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=i.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(i,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mr.copy(r.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const n=e.children;for(let i=0,o=n.length;i<o;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),gr.subVectors(this.max,Wi),ii.subVectors(e.a,Wi),ri.subVectors(e.b,Wi),ai.subVectors(e.c,Wi),yn.subVectors(ri,ii),En.subVectors(ai,ri),Nn.subVectors(ii,ai);let t=[0,-yn.z,yn.y,0,-En.z,En.y,0,-Nn.z,Nn.y,yn.z,0,-yn.x,En.z,0,-En.x,Nn.z,0,-Nn.x,-yn.y,yn.x,0,-En.y,En.x,0,-Nn.y,Nn.x,0];return!ba(t,ii,ri,ai,gr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,ii,ri,ai,gr))?!1:(_r.crossVectors(yn,En),t=[_r.x,_r.y,_r.z],ba(t,ii,ri,ai,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new j,new j,new j,new j,new j,new j,new j,new j],Jt=new j,mr=new Ci,ii=new j,ri=new j,ai=new j,yn=new j,En=new j,Nn=new j,Wi=new j,gr=new j,_r=new j,On=new j;function ba(a,e,t,r,n){for(let i=0,o=a.length-3;i<=o;i+=3){On.fromArray(a,i);const s=n.x*Math.abs(On.x)+n.y*Math.abs(On.y)+n.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),u=r.dot(On);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const ku=new Ci,Xi=new j,Aa=new j;class nr{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ku.setFromPoints(e).getCenter(r);let n=0;for(let i=0,o=e.length;i<o;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Xi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Aa)),this.expandByPoint(Xi.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new j,wa=new j,vr=new j,Tn=new j,Ra=new j,xr=new j,Ca=new j;class Yl{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){wa.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(wa);const i=e.distanceTo(t)*.5,o=-this.direction.dot(vr),s=Tn.dot(this.direction),l=-Tn.dot(vr),c=Tn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-s,h=o*s-l,g=i*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,m=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=i,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*l)+c;else h=-i,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*i+s)),h=f>0?-i:Math.min(Math.max(-i,-l),i),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-l),i),m=h*(h+2*l)+c):(f=Math.max(0,-(o*i+s)),h=f>0?i:Math.min(Math.max(-i,-l),i),m=-f*f+h*(h+2*l)+c);else h=o>0?-i:i,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(wa).addScaledVector(vr,h),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const r=un.dot(this.direction),n=un.dot(un)-r*r,i=e.radius*e.radius;if(n>i)return null;const o=Math.sqrt(i-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),r>o||i>n||((i>r||isNaN(r))&&(r=i),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,r,n,i){Ra.subVectors(t,e),xr.subVectors(r,e),Ca.crossVectors(Ra,xr);let o=this.direction.dot(Ca),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const l=s*this.direction.dot(xr.crossVectors(Tn,xr));if(l<0)return null;const c=s*this.direction.dot(Ra.cross(Tn));if(c<0||l+c>o)return null;const u=-s*Tn.dot(Ca);return u<0?null:this.at(u/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,r,n,i,o,s,l,c,u,f,h,m,g,_,d){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,o,s,l,c,u,f,h,m,g,_,d)}set(e,t,r,n,i,o,s,l,c,u,f,h,m,g,_,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/si.setFromMatrixColumn(e,0).length(),i=1/si.setFromMatrixColumn(e,1).length(),o=1/si.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=o*u,m=o*f,g=s*u,_=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-s*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h+_*s,t[4]=g*s-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=_+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h-_*s,t[4]=-o*f,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=_-h*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=s*u,_=s*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=s*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zu,e,Hu)}lookAt(e,t,r){const n=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),bn.crossVectors(r,Nt),bn.lengthSq()===0&&(Math.abs(r.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),bn.crossVectors(r,Nt)),bn.normalize(),Sr.crossVectors(Nt,bn),n[0]=bn.x,n[4]=Sr.x,n[8]=Nt.x,n[1]=bn.y,n[5]=Sr.y,n[9]=Nt.y,n[2]=bn.z,n[6]=Sr.z,n[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],m=r[13],g=r[2],_=r[6],d=r[10],p=r[14],y=r[3],x=r[7],M=r[11],C=r[15],R=n[0],E=n[4],O=n[8],Y=n[12],v=n[1],w=n[5],P=n[9],z=n[13],b=n[2],H=n[6],B=n[10],Z=n[14],K=n[3],V=n[7],k=n[11],L=n[15];return i[0]=o*R+s*v+l*b+c*K,i[4]=o*E+s*w+l*H+c*V,i[8]=o*O+s*P+l*B+c*k,i[12]=o*Y+s*z+l*Z+c*L,i[1]=u*R+f*v+h*b+m*K,i[5]=u*E+f*w+h*H+m*V,i[9]=u*O+f*P+h*B+m*k,i[13]=u*Y+f*z+h*Z+m*L,i[2]=g*R+_*v+d*b+p*K,i[6]=g*E+_*w+d*H+p*V,i[10]=g*O+_*P+d*B+p*k,i[14]=g*Y+_*z+d*Z+p*L,i[3]=y*R+x*v+M*b+C*K,i[7]=y*E+x*w+M*H+C*V,i[11]=y*O+x*P+M*B+C*k,i[15]=y*Y+x*z+M*Z+C*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],_=e[7],d=e[11],p=e[15];return g*(+i*l*f-n*c*f-i*s*h+r*c*h+n*s*m-r*l*m)+_*(+t*l*m-t*c*h+i*o*h-n*o*m+n*c*u-i*l*u)+d*(+t*c*f-t*s*m-i*o*f+r*o*m+i*s*u-r*c*u)+p*(-n*s*u-t*l*f+t*s*h+n*o*f-r*o*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],_=e[13],d=e[14],p=e[15],y=f*d*c-_*h*c+_*l*m-s*d*m-f*l*p+s*h*p,x=g*h*c-u*d*c-g*l*m+o*d*m+u*l*p-o*h*p,M=u*_*c-g*f*c+g*s*m-o*_*m-u*s*p+o*f*p,C=g*f*l-u*_*l-g*s*h+o*_*h+u*s*d-o*f*d,R=t*y+r*x+n*M+i*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=y*E,e[1]=(_*h*i-f*d*i-_*n*m+r*d*m+f*n*p-r*h*p)*E,e[2]=(s*d*i-_*l*i+_*n*c-r*d*c-s*n*p+r*l*p)*E,e[3]=(f*l*i-s*h*i-f*n*c+r*h*c+s*n*m-r*l*m)*E,e[4]=x*E,e[5]=(u*d*i-g*h*i+g*n*m-t*d*m-u*n*p+t*h*p)*E,e[6]=(g*l*i-o*d*i-g*n*c+t*d*c+o*n*p-t*l*p)*E,e[7]=(o*h*i-u*l*i+u*n*c-t*h*c-o*n*m+t*l*m)*E,e[8]=M*E,e[9]=(g*f*i-u*_*i-g*r*m+t*_*m+u*r*p-t*f*p)*E,e[10]=(o*_*i-g*s*i+g*r*c-t*_*c-o*r*p+t*s*p)*E,e[11]=(u*s*i-o*f*i-u*r*c+t*f*c+o*r*m-t*s*m)*E,e[12]=C*E,e[13]=(u*_*n-g*f*n+g*r*h-t*_*h-u*r*d+t*f*d)*E,e[14]=(g*s*n-o*_*n-g*r*l+t*_*l+o*r*d-t*s*d)*E,e[15]=(o*f*n-u*s*n+u*r*l-t*f*l-o*r*h+t*s*h)*E,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,o=e.x,s=e.y,l=e.z,c=i*o,u=i*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+r,u*l-n*o,0,c*l-n*s,u*l+n*o,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,o){return this.set(1,r,i,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,o=t._y,s=t._z,l=t._w,c=i+i,u=o+o,f=s+s,h=i*c,m=i*u,g=i*f,_=o*u,d=o*f,p=s*f,y=l*c,x=l*u,M=l*f,C=r.x,R=r.y,E=r.z;return n[0]=(1-(_+p))*C,n[1]=(m+M)*C,n[2]=(g-x)*C,n[3]=0,n[4]=(m-M)*R,n[5]=(1-(h+p))*R,n[6]=(d+y)*R,n[7]=0,n[8]=(g+x)*E,n[9]=(d-y)*E,n[10]=(1-(h+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=si.set(n[0],n[1],n[2]).length();const o=si.set(n[4],n[5],n[6]).length(),s=si.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Qt.copy(this);const c=1/i,u=1/o,f=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),r.x=i,r.y=o,r.z=s,this}makePerspective(e,t,r,n,i,o,s=gn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),f=(t+e)/(t-e),h=(r+n)/(r-n);let m,g;if(s===gn)m=-(o+i)/(o-i),g=-2*o*i/(o-i);else if(s===jr)m=-o/(o-i),g=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,o,s=gn){const l=this.elements,c=1/(t-e),u=1/(r-n),f=1/(o-i),h=(t+e)*c,m=(r+n)*u;let g,_;if(s===gn)g=(o+i)*f,_=-2*f;else if(s===jr)g=i*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const si=new j,Qt=new lt,zu=new j(0,0,0),Hu=new j(1,1,1),bn=new j,Sr=new j,Nt=new j,Ro=new lt,Co=new tr;class Qr{constructor(e=0,t=0,r=0,n=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Co.setFromEuler(this),this.setFromQuaternion(Co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vu=0;const Lo=new j,oi=new tr,fn=new lt,Mr=new j,Yi=new j,Wu=new j,Xu=new tr,Uo=new j(1,0,0),Po=new j(0,1,0),Do=new j(0,0,1),Yu={type:"added"},qu={type:"removed"};class gt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new j,t=new Qr,r=new tr,n=new j(1,1,1);function i(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new lt},normalMatrix:{value:new je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Uo,e)}rotateY(e){return this.rotateOnAxis(Po,e)}rotateZ(e){return this.rotateOnAxis(Do,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uo,e)}translateY(e){return this.translateOnAxis(Po,e)}translateZ(e){return this.translateOnAxis(Do,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Mr.copy(e):Mr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Yi,Mr,this.up):fn.lookAt(Mr,Yi,this.up),this.quaternion.setFromRotationMatrix(fn),n&&(fn.extractRotation(n.matrixWorld),oi.setFromRotationMatrix(fn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,o=n.length;i<o;i++){const s=n[i];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(i(e.materials,this.material[l]));n.material=s}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(i(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),g.length>0&&(r.nodes=g)}return r.object=n,r;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}gt.DEFAULT_UP=new j(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new j,hn=new j,La=new j,dn=new j,li=new j,ci=new j,Io=new j,Ua=new j,Pa=new j,Da=new j;class ln{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),$t.subVectors(e,t),n.cross($t);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){$t.subVectors(n,t),hn.subVectors(r,t),La.subVectors(e,t);const o=$t.dot($t),s=$t.dot(hn),l=$t.dot(La),c=hn.dot(hn),u=hn.dot(La),f=o*c-s*s;if(f===0)return i.set(0,0,0),null;const h=1/f,m=(c*l-s*u)*h,g=(o*u-s*l)*h;return i.set(1-m-g,g,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,r,n,i,o,s,l){return this.getBarycoord(e,t,r,n,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(s,dn.z),l)}static isFrontFacing(e,t,r,n){return $t.subVectors(r,t),hn.subVectors(e,t),$t.cross(hn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$t.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return ln.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let o,s;li.subVectors(n,r),ci.subVectors(i,r),Ua.subVectors(e,r);const l=li.dot(Ua),c=ci.dot(Ua);if(l<=0&&c<=0)return t.copy(r);Pa.subVectors(e,n);const u=li.dot(Pa),f=ci.dot(Pa);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(r).addScaledVector(li,o);Da.subVectors(e,i);const m=li.dot(Da),g=ci.dot(Da);if(g>=0&&m<=g)return t.copy(i);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(r).addScaledVector(ci,s);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Io.subVectors(i,n),s=(f-u)/(f-u+(m-g)),t.copy(n).addScaledVector(Io,s);const p=1/(d+_+h);return o=_*p,s=h*p,t.copy(r).addScaledVector(li,o).addScaledVector(ci,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ia(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=r,et.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=et.workingColorSpace){if(e=Du(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,o=2*r-i;this.r=Ia(o,i,e+1/3),this.g=Ia(o,i,e),this.b=Ia(o,i,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=pt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const r=jl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return et.fromWorkingColorSpace(St.copy(this),e),Math.round(Pt(St.r*255,0,255))*65536+Math.round(Pt(St.g*255,0,255))*256+Math.round(Pt(St.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(St.copy(this),t);const r=St.r,n=St.g,i=St.b,o=Math.max(r,n,i),s=Math.min(r,n,i);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case r:l=(n-i)/f+(n<i?6:0);break;case n:l=(i-r)/f+2;break;case i:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=pt){et.fromWorkingColorSpace(St.copy(this),e);const t=St.r,r=St.g,n=St.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(yr);const r=Sa(An.h,yr.h,t),n=Sa(An.s,yr.s,t),i=Sa(An.l,yr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Je;Je.NAMES=jl;let ju=0;class ir extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Mi,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(r.blending=this.blending),this.side!==_n&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Za&&(r.blendSrc=this.blendSrc),this.blendDst!==Ja&&(r.blendDst=this.blendDst),this.blendEquation!==Vn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const o=[];for(const s in i){const l=i[s];delete l.metadata,o.push(l)}return o}if(t){const i=n(e.textures),o=n(e.images);i.length>0&&(r.textures=i),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rr extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new j,Er=new Ke;class Gt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return yi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ut(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),e}}class Kl extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Zl extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class rn extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ku=0;const kt=new lt,Fa=new gt,ui=new j,Ot=new Ci,qi=new Ci,dt=new j;class Ht extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hl(e)?Zl:Kl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new je().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,r){return kt.makeTranslation(e,t,r),this.applyMatrix4(kt),this}scale(e,t,r){return kt.makeScale(e,t,r),this.applyMatrix4(kt),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Ot.setFromBufferAttribute(i),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];qi.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(Ot.min,qi.min),Ot.expandByPoint(dt),dt.addVectors(Ot.max,qi.max),Ot.expandByPoint(dt)):(Ot.expandByPoint(qi.min),Ot.expandByPoint(qi.max))}Ot.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)dt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(dt));if(t)for(let i=0,o=t.length;i<o;i++){const s=t[i],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)dt.fromBufferAttribute(s,c),l&&(ui.fromBufferAttribute(e,c),dt.add(ui)),n=Math.max(n,r.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let v=0;v<s;v++)c[v]=new j,u[v]=new j;const f=new j,h=new j,m=new j,g=new Ke,_=new Ke,d=new Ke,p=new j,y=new j;function x(v,w,P){f.fromArray(n,v*3),h.fromArray(n,w*3),m.fromArray(n,P*3),g.fromArray(o,v*2),_.fromArray(o,w*2),d.fromArray(o,P*2),h.sub(f),m.sub(f),_.sub(g),d.sub(g);const z=1/(_.x*d.y-d.x*_.y);isFinite(z)&&(p.copy(h).multiplyScalar(d.y).addScaledVector(m,-_.y).multiplyScalar(z),y.copy(m).multiplyScalar(_.x).addScaledVector(h,-d.x).multiplyScalar(z),c[v].add(p),c[w].add(p),c[P].add(p),u[v].add(y),u[w].add(y),u[P].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:r.length}]);for(let v=0,w=M.length;v<w;++v){const P=M[v],z=P.start,b=P.count;for(let H=z,B=z+b;H<B;H+=3)x(r[H+0],r[H+1],r[H+2])}const C=new j,R=new j,E=new j,O=new j;function Y(v){E.fromArray(i,v*3),O.copy(E);const w=c[v];C.copy(w),C.sub(E.multiplyScalar(E.dot(w))).normalize(),R.crossVectors(O,w);const z=R.dot(u[v])<0?-1:1;l[v*4]=C.x,l[v*4+1]=C.y,l[v*4+2]=C.z,l[v*4+3]=z}for(let v=0,w=M.length;v<w;++v){const P=M[v],z=P.start,b=P.count;for(let H=z,B=z+b;H<B;H+=3)Y(r[H+0]),Y(r[H+1]),Y(r[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const n=new j,i=new j,o=new j,s=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),d=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),s.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,d),s.add(u),l.add(u),c.add(u),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){s.isInterleavedBufferAttribute?m=l[_]*s.data.stride+s.offset:m=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new Gt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const i=this.morphAttributes;for(const s in i){const l=[],c=i[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,r);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new lt,Bn=new Yl,Tr=new nr,No=new j,fi=new j,hi=new j,di=new j,Na=new j,br=new j,Ar=new Ke,wr=new Ke,Rr=new Ke,Oo=new j,Bo=new j,Go=new j,Cr=new j,Lr=new j;class Dt extends gt{constructor(e=new Ht,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(i&&s){br.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=s[l],f=i[l];u!==0&&(Na.fromBufferAttribute(f,e),o?br.addScaledVector(Na,u):br.addScaledVector(Na.sub(t),u))}t.add(br)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tr.copy(r.boundingSphere),Tr.applyMatrix4(i),Bn.copy(e.ray).recast(e.near),!(Tr.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Tr,No)===null||Bn.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Fo.copy(i).invert(),Bn.copy(e.ray).applyMatrix4(Fo),!(r.boundingBox!==null&&Bn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,o=this.material,s=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,m=i.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const d=h[g],p=o[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(s.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,C=x;M<C;M+=3){const R=s.getX(M),E=s.getX(M+1),O=s.getX(M+2);n=Ur(this,p,e,r,c,u,f,R,E,O),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=s.getX(d),x=s.getX(d+1),M=s.getX(d+2);n=Ur(this,o,e,r,c,u,f,y,x,M),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const d=h[g],p=o[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,C=x;M<C;M+=3){const R=M,E=M+1,O=M+2;n=Ur(this,p,e,r,c,u,f,R,E,O),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=d,x=d+1,M=d+2;n=Ur(this,o,e,r,c,u,f,y,x,M),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}}}function Zu(a,e,t,r,n,i,o,s){let l;if(e.side===Tt?l=r.intersectTriangle(o,i,n,!0,s):l=r.intersectTriangle(n,i,o,e.side===_n,s),l===null)return null;Lr.copy(s),Lr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:a}}function Ur(a,e,t,r,n,i,o,s,l,c){a.getVertexPosition(s,fi),a.getVertexPosition(l,hi),a.getVertexPosition(c,di);const u=Zu(a,e,t,r,fi,hi,di,Cr);if(u){n&&(Ar.fromBufferAttribute(n,s),wr.fromBufferAttribute(n,l),Rr.fromBufferAttribute(n,c),u.uv=ln.getInterpolation(Cr,fi,hi,di,Ar,wr,Rr,new Ke)),i&&(Ar.fromBufferAttribute(i,s),wr.fromBufferAttribute(i,l),Rr.fromBufferAttribute(i,c),u.uv1=ln.getInterpolation(Cr,fi,hi,di,Ar,wr,Rr,new Ke),u.uv2=u.uv1),o&&(Oo.fromBufferAttribute(o,s),Bo.fromBufferAttribute(o,l),Go.fromBufferAttribute(o,c),u.normal=ln.getInterpolation(Cr,fi,hi,di,Oo,Bo,Go,new j),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new j,materialIndex:0};ln.getNormal(fi,hi,di,f.normal),u.face=f}return u}class ar extends Ht{constructor(e=1,t=1,r=1,n=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:o};const s=this;n=Math.floor(n),i=Math.floor(i),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,r,t,e,o,i,0),g("z","y","x",1,-1,r,t,-e,o,i,1),g("x","z","y",1,1,e,r,t,n,o,2),g("x","z","y",1,-1,e,r,-t,n,o,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function g(_,d,p,y,x,M,C,R,E,O,Y){const v=M/E,w=C/O,P=M/2,z=C/2,b=R/2,H=E+1,B=O+1;let Z=0,K=0;const V=new j;for(let k=0;k<B;k++){const L=k*w-z;for(let G=0;G<H;G++){const W=G*v-P;V[_]=W*y,V[d]=L*x,V[p]=b,c.push(V.x,V.y,V.z),V[_]=0,V[d]=0,V[p]=R>0?1:-1,u.push(V.x,V.y,V.z),f.push(G/E),f.push(1-k/O),Z+=1}}for(let k=0;k<O;k++)for(let L=0;L<E;L++){const G=h+L+H*k,W=h+L+H*(k+1),F=h+(L+1)+H*(k+1),N=h+(L+1)+H*k;l.push(G,W,N),l.push(W,F,N),K+=6}s.addGroup(m,K,Y),m+=K,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function yt(a){const e={};for(let t=0;t<a.length;t++){const r=wi(a[t]);for(const n in r)e[n]=r[n]}return e}function Ju(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Jl(a){return a.getRenderTarget()===null?a.outputColorSpace:et.workingColorSpace}const Ql={clone:wi,merge:yt};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class $l extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new j,ko=new Ke,zo=new Ke;class Bt extends $l{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,ko,zo),t.subVectors(zo,ko)}setViewOffset(e,t,r,n,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;i+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(i+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class ef extends gt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Bt(pi,mi,e,t);n.layers=this.layers,this.add(n);const i=new Bt(pi,mi,e,t);i.layers=this.layers,this.add(i);const o=new Bt(pi,mi,e,t);o.layers=this.layers,this.add(o);const s=new Bt(pi,mi,e,t);s.layers=this.layers,this.add(s);const l=new Bt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Bt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,o,s,l]=t;for(const c of t)this.remove(c);if(e===gn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,o,s,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class ec extends bt{constructor(e,t,r,n,i,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,r,n,i,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tf extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?pt:zt),this.texture=new ec(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ar(5,5,5),i=new Pn({name:"CubemapFromEquirect",uniforms:wi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tt,blending:Cn});i.uniforms.tEquirect.value=t;const o=new Dt(n,i),s=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Mt),new ef(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(i)}}const Oa=new j,nf=new j,rf=new je;class zn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Oa.subVectors(r,t).cross(nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Oa),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||rf.getNormalMatrix(e),n=this.coplanarPoint(Oa).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new nr,Pr=new j;class ms{constructor(e=new zn,t=new zn,r=new zn,n=new zn,i=new zn,o=new zn){this.planes=[e,t,r,n,i,o]}set(e,t,r,n,i,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(i),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=gn){const r=this.planes,n=e.elements,i=n[0],o=n[1],s=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],m=n[8],g=n[9],_=n[10],d=n[11],p=n[12],y=n[13],x=n[14],M=n[15];if(r[0].setComponents(l-i,h-c,d-m,M-p).normalize(),r[1].setComponents(l+i,h+c,d+m,M+p).normalize(),r[2].setComponents(l+o,h+u,d+g,M+y).normalize(),r[3].setComponents(l-o,h-u,d-g,M-y).normalize(),r[4].setComponents(l-s,h-f,d-_,M-x).normalize(),t===gn)r[5].setComponents(l+s,h+f,d+_,M+x).normalize();else if(t===jr)r[5].setComponents(s,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Pr.x=n.normal.x>0?e.max.x:e.min.x,Pr.y=n.normal.y>0?e.max.y:e.min.y,Pr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tc(){let a=null,e=!1,t=null,r=null;function n(i,o){t(i,o),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function af(a,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const f=c.array,h=c.usage,m=f.byteLength,g=a.createBuffer();a.bindBuffer(u,g),a.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=a.SHORT;else if(f instanceof Uint32Array)_=a.UNSIGNED_INT;else if(f instanceof Int32Array)_=a.INT;else if(f instanceof Int8Array)_=a.BYTE;else if(f instanceof Uint8Array)_=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function i(c,u,f){const h=u.array,m=u._updateRange,g=u.updateRanges;if(a.bindBuffer(f,c),m.count===-1&&g.length===0&&a.bufferSubData(f,0,h),g.length!==0){for(let _=0,d=g.length;_<d;_++){const p=g[_];t?a.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):a.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?a.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):a.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(a.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=r.get(c);(!h||h.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);if(f===void 0)r.set(c,n(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,c,u),f.version=c.version}}return{get:o,remove:s,update:l}}class Qn extends Ht{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,u=l+1,f=e/s,h=t/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const y=p*h-o;for(let x=0;x<c;x++){const M=x*f-i;g.push(M,-y,0),_.push(0,0,1),d.push(x/s),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<s;y++){const x=y+c*p,M=y+c*(p+1),C=y+1+c*(p+1),R=y+1+c*p;m.push(x,M,R),m.push(M,C,R)}this.setIndex(m),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,Sf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`
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
}`,Bf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,eh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rh=`PhysicalMaterial material;
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
#endif`,ah=`struct PhysicalMaterial {
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
}`,sh=`
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
#endif`,oh=`#if defined( RE_IndirectDiffuse )
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
#endif`,lh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gh=`#if defined( USE_POINTS_UV )
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
#endif`,_h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sh=`#ifdef USE_MORPHNORMALS
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
#endif`,Mh=`#ifdef USE_MORPHTARGETS
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
#endif`,yh=`#ifdef USE_MORPHTARGETS
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
#endif`,Eh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Th=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rh=`#ifdef USE_NORMALMAP
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
#endif`,Ch=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ih=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wh=`float getShadowMask() {
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
}`,Xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yh=`#ifdef USE_SKINNING
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
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jh=`#ifdef USE_SKINNING
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
#endif`,Kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$h=`#ifdef USE_TRANSMISSION
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
#endif`,ed=`#ifdef USE_TRANSMISSION
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
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sd=`uniform sampler2D t2D;
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
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`#include <common>
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
}`,hd=`#if DEPTH_PACKING == 3200
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
}`,dd=`#define DISTANCE
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
}`,pd=`#define DISTANCE
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`uniform float scale;
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
}`,vd=`uniform vec3 diffuse;
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
}`,xd=`#include <common>
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
}`,Sd=`uniform vec3 diffuse;
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
}`,Md=`#define LAMBERT
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
}`,yd=`#define LAMBERT
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
}`,Ed=`#define MATCAP
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
}`,Td=`#define MATCAP
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
}`,bd=`#define NORMAL
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
}`,Ad=`#define NORMAL
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
}`,wd=`#define PHONG
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
}`,Rd=`#define PHONG
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
}`,Cd=`#define STANDARD
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
}`,Ld=`#define STANDARD
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
}`,Ud=`#define TOON
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
}`,Pd=`#define TOON
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
}`,Dd=`uniform float size;
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
}`,Id=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Nd=`uniform vec3 color;
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
}`,Od=`uniform float rotation;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:sf,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:uf,alphatest_pars_fragment:ff,aomap_fragment:hf,aomap_pars_fragment:df,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:vf,iridescence_fragment:xf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Ef,clipping_planes_vertex:Tf,color_fragment:bf,color_pars_fragment:Af,color_pars_vertex:wf,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Df,emissivemap_fragment:If,emissivemap_pars_fragment:Ff,colorspace_fragment:Nf,colorspace_pars_fragment:Of,envmap_fragment:Bf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:kf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:$f,envmap_vertex:Hf,fog_vertex:Vf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:Yf,gradientmap_pars_fragment:qf,lightmap_fragment:jf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:eh,lights_toon_pars_fragment:th,lights_phong_fragment:nh,lights_phong_pars_fragment:ih,lights_physical_fragment:rh,lights_physical_pars_fragment:ah,lights_fragment_begin:sh,lights_fragment_maps:oh,lights_fragment_end:lh,logdepthbuf_fragment:ch,logdepthbuf_pars_fragment:uh,logdepthbuf_pars_vertex:fh,logdepthbuf_vertex:hh,map_fragment:dh,map_pars_fragment:ph,map_particle_fragment:mh,map_particle_pars_fragment:gh,metalnessmap_fragment:_h,metalnessmap_pars_fragment:vh,morphcolor_vertex:xh,morphnormal_vertex:Sh,morphtarget_pars_vertex:Mh,morphtarget_vertex:yh,normal_fragment_begin:Eh,normal_fragment_maps:Th,normal_pars_fragment:bh,normal_pars_vertex:Ah,normal_vertex:wh,normalmap_pars_fragment:Rh,clearcoat_normal_fragment_begin:Ch,clearcoat_normal_fragment_maps:Lh,clearcoat_pars_fragment:Uh,iridescence_pars_fragment:Ph,opaque_fragment:Dh,packing:Ih,premultiplied_alpha_fragment:Fh,project_vertex:Nh,dithering_fragment:Oh,dithering_pars_fragment:Bh,roughnessmap_fragment:Gh,roughnessmap_pars_fragment:kh,shadowmap_pars_fragment:zh,shadowmap_pars_vertex:Hh,shadowmap_vertex:Vh,shadowmask_pars_fragment:Wh,skinbase_vertex:Xh,skinning_pars_vertex:Yh,skinning_vertex:qh,skinnormal_vertex:jh,specularmap_fragment:Kh,specularmap_pars_fragment:Zh,tonemapping_fragment:Jh,tonemapping_pars_fragment:Qh,transmission_fragment:$h,transmission_pars_fragment:ed,uv_pars_fragment:td,uv_pars_vertex:nd,uv_vertex:id,worldpos_vertex:rd,background_vert:ad,background_frag:sd,backgroundCube_vert:od,backgroundCube_frag:ld,cube_vert:cd,cube_frag:ud,depth_vert:fd,depth_frag:hd,distanceRGBA_vert:dd,distanceRGBA_frag:pd,equirect_vert:md,equirect_frag:gd,linedashed_vert:_d,linedashed_frag:vd,meshbasic_vert:xd,meshbasic_frag:Sd,meshlambert_vert:Md,meshlambert_frag:yd,meshmatcap_vert:Ed,meshmatcap_frag:Td,meshnormal_vert:bd,meshnormal_frag:Ad,meshphong_vert:wd,meshphong_frag:Rd,meshphysical_vert:Cd,meshphysical_frag:Ld,meshtoon_vert:Ud,meshtoon_frag:Pd,points_vert:Dd,points_frag:Id,shadow_vert:Fd,shadow_frag:Nd,sprite_vert:Od,sprite_frag:Bd},be={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},on={basic:{uniforms:yt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:yt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:yt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:yt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:yt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:yt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:yt([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:yt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:yt([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:yt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:yt([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:yt([be.common,be.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:yt([be.lights,be.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};on.physical={uniforms:yt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Dr={r:0,b:0,g:0};function Gd(a,e,t,r,n,i,o){const s=new Je(0);let l=i===!0?0:1,c,u,f=null,h=0,m=null;function g(d,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(s,l):x&&x.isColor&&(_(x,1),y=!0);const M=a.xr.getEnvironmentBlendMode();M==="additive"?r.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zr)?(u===void 0&&(u=new Dt(new ar(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:wi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=et.getTransfer(x.colorSpace)!==rt,(f!==x||h!==x.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,m=a.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Dt(new Qn(2,2),new Pn({name:"BackgroundMaterial",uniforms:wi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,m=a.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,p){d.getRGB(Dr,Jl(a)),r.buffers.color.setClear(Dr.r,Dr.g,Dr.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(d,p=1){s.set(d),l=p,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(s,l)},render:g}}function kd(a,e,t,r){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||i!==null,s={},l=d(null);let c=l,u=!1;function f(b,H,B,Z,K){let V=!1;if(o){const k=_(Z,B,H);c!==k&&(c=k,m(c.object)),V=p(b,Z,B,K),V&&y(b,Z,B,K)}else{const k=H.wireframe===!0;(c.geometry!==Z.id||c.program!==B.id||c.wireframe!==k)&&(c.geometry=Z.id,c.program=B.id,c.wireframe=k,V=!0)}K!==null&&t.update(K,a.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,O(b,H,B,Z),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return r.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function m(b){return r.isWebGL2?a.bindVertexArray(b):i.bindVertexArrayOES(b)}function g(b){return r.isWebGL2?a.deleteVertexArray(b):i.deleteVertexArrayOES(b)}function _(b,H,B){const Z=B.wireframe===!0;let K=s[b.id];K===void 0&&(K={},s[b.id]=K);let V=K[H.id];V===void 0&&(V={},K[H.id]=V);let k=V[Z];return k===void 0&&(k=d(h()),V[Z]=k),k}function d(b){const H=[],B=[],Z=[];for(let K=0;K<n;K++)H[K]=0,B[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:Z,object:b,attributes:{},index:null}}function p(b,H,B,Z){const K=c.attributes,V=H.attributes;let k=0;const L=B.getAttributes();for(const G in L)if(L[G].location>=0){const F=K[G];let N=V[G];if(N===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(N=b.instanceColor)),F===void 0||F.attribute!==N||N&&F.data!==N.data)return!0;k++}return c.attributesNum!==k||c.index!==Z}function y(b,H,B,Z){const K={},V=H.attributes;let k=0;const L=B.getAttributes();for(const G in L)if(L[G].location>=0){let F=V[G];F===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(F=b.instanceColor));const N={};N.attribute=F,F&&F.data&&(N.data=F.data),K[G]=N,k++}c.attributes=K,c.attributesNum=k,c.index=Z}function x(){const b=c.newAttributes;for(let H=0,B=b.length;H<B;H++)b[H]=0}function M(b){C(b,0)}function C(b,H){const B=c.newAttributes,Z=c.enabledAttributes,K=c.attributeDivisors;B[b]=1,Z[b]===0&&(a.enableVertexAttribArray(b),Z[b]=1),K[b]!==H&&((r.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,H),K[b]=H)}function R(){const b=c.newAttributes,H=c.enabledAttributes;for(let B=0,Z=H.length;B<Z;B++)H[B]!==b[B]&&(a.disableVertexAttribArray(B),H[B]=0)}function E(b,H,B,Z,K,V,k){k===!0?a.vertexAttribIPointer(b,H,B,K,V):a.vertexAttribPointer(b,H,B,Z,K,V)}function O(b,H,B,Z){if(r.isWebGL2===!1&&(b.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=Z.attributes,V=B.getAttributes(),k=H.defaultAttributeValues;for(const L in V){const G=V[L];if(G.location>=0){let W=K[L];if(W===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),W!==void 0){const F=W.normalized,N=W.itemSize,Q=t.get(W);if(Q===void 0)continue;const J=Q.buffer,ee=Q.type,se=Q.bytesPerElement,ye=r.isWebGL2===!0&&(ee===a.INT||ee===a.UNSIGNED_INT||W.gpuType===Pl);if(W.isInterleavedBufferAttribute){const le=W.data,I=le.stride,Ne=W.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<G.locationSize;ge++)C(G.location+ge,le.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<G.locationSize;ge++)M(G.location+ge);a.bindBuffer(a.ARRAY_BUFFER,J);for(let ge=0;ge<G.locationSize;ge++)E(G.location+ge,N/G.locationSize,ee,F,I*se,(Ne+N/G.locationSize*ge)*se,ye)}else{if(W.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)C(G.location+le,W.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let le=0;le<G.locationSize;le++)M(G.location+le);a.bindBuffer(a.ARRAY_BUFFER,J);for(let le=0;le<G.locationSize;le++)E(G.location+le,N/G.locationSize,ee,F,N*se,N/G.locationSize*le*se,ye)}}else if(k!==void 0){const F=k[L];if(F!==void 0)switch(F.length){case 2:a.vertexAttrib2fv(G.location,F);break;case 3:a.vertexAttrib3fv(G.location,F);break;case 4:a.vertexAttrib4fv(G.location,F);break;default:a.vertexAttrib1fv(G.location,F)}}}}R()}function Y(){P();for(const b in s){const H=s[b];for(const B in H){const Z=H[B];for(const K in Z)g(Z[K].object),delete Z[K];delete H[B]}delete s[b]}}function v(b){if(s[b.id]===void 0)return;const H=s[b.id];for(const B in H){const Z=H[B];for(const K in Z)g(Z[K].object),delete Z[K];delete H[B]}delete s[b.id]}function w(b){for(const H in s){const B=s[H];if(B[b.id]===void 0)continue;const Z=B[b.id];for(const K in Z)g(Z[K].object),delete Z[K];delete B[b.id]}}function P(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:P,resetDefaultState:z,dispose:Y,releaseStatesOfGeometry:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function zd(a,e,t,r){const n=r.isWebGL2;let i;function o(u){i=u}function s(u,f){a.drawArrays(i,u,f),t.update(f,i,1)}function l(u,f,h){if(h===0)return;let m,g;if(n)m=a,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](i,u,f,h),t.update(f,i,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{m.multiDrawArraysWEBGL(i,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,i,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Hd(a,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=i(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),d=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),C=x&&M,R=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:R}}function Vd(a){const e=this;let t=null,r=0,n=!1,i=!1;const o=new zn,s=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||r!==0||n;return n=h,r=f.length,m},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,p=a.get(f);if(!n||g===null||g.length===0||i&&!d)i?u(null):c();else{const y=i?0:r,x=y*4;let M=p.clippingState||null;l.value=M,M=u(g,h,x,m);for(let C=0;C!==x;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,m,g){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,y=h.matrixWorldInverse;s.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(y,s),o.normal.toArray(d,M),d[M+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function Wd(a){let e=new WeakMap;function t(o,s){return s===Qa?o.mapping=Ti:s===$a&&(o.mapping=bi),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===Qa||s===$a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tf(l.height);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class nc extends $l{constructor(e=-1,t=1,r=1,n=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,o=i+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(i,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,Ho=[.125,.215,.35,.446,.526,.582],Wn=20,Ba=new nc,Vo=new Je;let Ga=null,ka=0,za=0;const Hn=(1+Math.sqrt(5))/2,gi=1/Hn,Wo=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Hn,gi),new j(0,Hn,-gi),new j(gi,0,Hn),new j(-gi,0,Hn),new j(Hn,gi,0),new j(-Hn,gi,0)];class Xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Ga=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,ka,za),e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:$i,format:nn,colorSpace:vn,depthBuffer:!1},n=Yo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xd(i)),this._blurMaterial=Yd(i,e,t)}return n}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,r,n){const s=new Bt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Vo),u.toneMapping=Ln,u.autoClear=!1;const m=new rr({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new Dt(new ar,m);let _=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,_=!0):(m.color.copy(Vo),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):y===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const x=this._cubeSize;Ir(n,y*x,p>2?x:0,x,x),u.setRenderTarget(n),_&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ti||e.mapping===bi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const i=n?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],i),s=i.uniforms;s.envMap.value=e;const l=this._cubeSize;Ir(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,Ba)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Wo[(n-1)%Wo.length];this._blur(e,n-1,n,i,o)}t.autoClear=r}_blur(e,t,r,n,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",i),this._halfBlur(o,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dt(this._lodPlanes[n],c),h=c.uniforms,m=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),_=i/g,d=isFinite(i)?1+Math.floor(u*_):Wn;d>Wn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Wn}`);const p=[];let y=0;for(let E=0;E<Wn;++E){const O=E/_,Y=Math.exp(-O*O/2);p.push(Y),E===0?y+=Y:E<d&&(y+=2*Y)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-r;const M=this._sizeLods[n],C=3*M*(n>x-xi?n-x+xi:0),R=4*(this._cubeSize-M);Ir(t,C,R,3*M,2*M),l.setRenderTarget(t),l.render(f,Ba)}}function Xd(a){const e=[],t=[],r=[];let n=a;const i=a-xi+1+Ho.length;for(let o=0;o<i;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>a-xi?l=Ho[o-a+xi-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,d=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(d*g*m),M=new Float32Array(p*g*m);for(let R=0;R<m;R++){const E=R%3*2/3-1,O=R>2?0:-1,Y=[E,O,0,E+2/3,O,0,E+2/3,O+1,0,E,O,0,E+2/3,O+1,0,E,O+1,0];y.set(Y,_*g*R),x.set(h,d*g*R);const v=[R,R,R,R,R,R];M.set(v,p*g*R)}const C=new Ht;C.setAttribute("position",new Gt(y,_)),C.setAttribute("uv",new Gt(x,d)),C.setAttribute("faceIndex",new Gt(M,p)),e.push(C),n>xi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Yo(a,e,t){const r=new Jn(a,e,t);return r.texture.mapping=Zr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ir(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Yd(a,e,t){const r=new Float32Array(Wn),n=new j(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:gs(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function qo(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function jo(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function gs(){return`

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
	`}function qd(a){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===Qa||l===$a,u=l===Ti||l===bi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Xo(a)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new Xo(a));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",i),h.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function jd(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Kd(a,e,t,r){const n={},i=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)e.remove(_[d])}h.removeEventListener("dispose",o),delete n[h.id];const m=i.get(h);m&&(e.remove(m),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],a.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)e.update(_[d],a.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let x=0,M=y.length;x<M;x+=3){const C=y[x+0],R=y[x+1],E=y[x+2];h.push(C,R,R,E,E,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const C=x+0,R=x+1,E=x+2;h.push(C,R,R,E,E,C)}}else return;const d=new(Hl(h)?Zl:Kl)(h,1);d.version=_;const p=i.get(f);p&&e.remove(p),i.set(f,d)}function u(f){const h=i.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return i.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Zd(a,e,t,r){const n=r.isWebGL2;let i;function o(m){i=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function u(m,g){a.drawElements(i,g,s,m*l),t.update(g,i,1)}function f(m,g,_){if(_===0)return;let d,p;if(n)d=a,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](i,g,s,m*l,_),t.update(g,i,_)}function h(m,g,_){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{d.multiDrawElementsWEBGL(i,g,0,s,m,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,i,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Jd(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(i/3);break;case a.LINES:t.lines+=s*(i/2);break;case a.LINE_STRIP:t.lines+=s*(i-1);break;case a.LINE_LOOP:t.lines+=s*i;break;case a.POINTS:t.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Qd(a,e){return a[0]-e[0]}function $d(a,e){return Math.abs(e[1])-Math.abs(a[1])}function ep(a,e,t){const r={},n=new Float32Array(8),i=new WeakMap,o=new nt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let d=i.get(u);if(d===void 0||d.count!==_){let H=function(){z.dispose(),i.delete(u),u.removeEventListener("dispose",H)};var m=H;d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let Y=0;x===!0&&(Y=1),M===!0&&(Y=2),C===!0&&(Y=3);let v=u.attributes.position.count*Y,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const P=new Float32Array(v*w*4*_),z=new Xl(P,v,w,_);z.type=mn,z.needsUpdate=!0;const b=Y*4;for(let B=0;B<_;B++){const Z=R[B],K=E[B],V=O[B],k=v*w*4*B;for(let L=0;L<Z.count;L++){const G=L*b;x===!0&&(o.fromBufferAttribute(Z,L),P[k+G+0]=o.x,P[k+G+1]=o.y,P[k+G+2]=o.z,P[k+G+3]=0),M===!0&&(o.fromBufferAttribute(K,L),P[k+G+4]=o.x,P[k+G+5]=o.y,P[k+G+6]=o.z,P[k+G+7]=0),C===!0&&(o.fromBufferAttribute(V,L),P[k+G+8]=o.x,P[k+G+9]=o.y,P[k+G+10]=o.z,P[k+G+11]=V.itemSize===4?o.w:1)}}d={count:_,texture:z,size:new Ke(v,w)},i.set(u,d),u.addEventListener("dispose",H)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];const y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}else{const g=h===void 0?0:h.length;let _=r[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];r[u.id]=_}for(let M=0;M<g;M++){const C=_[M];C[0]=M,C[1]=h[M]}_.sort($d);for(let M=0;M<8;M++)M<g&&_[M][1]?(s[M][0]=_[M][0],s[M][1]=_[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(Qd);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const C=s[M],R=C[0],E=C[1];R!==Number.MAX_SAFE_INTEGER&&E?(d&&u.getAttribute("morphTarget"+M)!==d[R]&&u.setAttribute("morphTarget"+M,d[R]),p&&u.getAttribute("morphNormal"+M)!==p[R]&&u.setAttribute("morphNormal"+M,p[R]),n[M]=E,y+=E):(d&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),n[M]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(a,"morphTargetBaseInfluence",x),f.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:l}}function tp(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:o}}class ic extends bt{constructor(e,t,r,n,i,o,s,l,c,u){if(u=u!==void 0?u:jn,u!==jn&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===jn&&(r=Rn),r===void 0&&u===Ai&&(r=qn),super(null,n,i,o,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rc=new bt,ac=new ic(1,1);ac.compareFunction=zl;const sc=new Xl,oc=new Gu,lc=new ec,Ko=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),$o=new Float32Array(4);function Li(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=Ko[n];if(i===void 0&&(i=new Float32Array(n),Ko[n]=i),e!==0){r.toArray(i,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(i,s)}return i}function ut(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function ft(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function $r(a,e){let t=Zo[e];t===void 0&&(t=new Int32Array(e),Zo[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function np(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ip(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;a.uniform2fv(this.addr,e),ft(t,e)}}function rp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;a.uniform3fv(this.addr,e),ft(t,e)}}function ap(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;a.uniform4fv(this.addr,e),ft(t,e)}}function sp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ut(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,r))return;$o.set(r),a.uniformMatrix2fv(this.addr,!1,$o),ft(t,r)}}function op(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ut(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,r))return;Qo.set(r),a.uniformMatrix3fv(this.addr,!1,Qo),ft(t,r)}}function lp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ut(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,r))return;Jo.set(r),a.uniformMatrix4fv(this.addr,!1,Jo),ft(t,r)}}function cp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function up(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;a.uniform2iv(this.addr,e),ft(t,e)}}function fp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;a.uniform3iv(this.addr,e),ft(t,e)}}function hp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;a.uniform4iv(this.addr,e),ft(t,e)}}function dp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function pp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;a.uniform2uiv(this.addr,e),ft(t,e)}}function mp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;a.uniform3uiv(this.addr,e),ft(t,e)}}function gp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;a.uniform4uiv(this.addr,e),ft(t,e)}}function _p(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);const i=this.type===a.SAMPLER_2D_SHADOW?ac:rc;t.setTexture2D(e||i,n)}function vp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||oc,n)}function xp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||lc,n)}function Sp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||sc,n)}function Mp(a){switch(a){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return ap;case 35674:return sp;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return up;case 35668:case 35672:return fp;case 35669:case 35673:return hp;case 5125:return dp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Sp}}function yp(a,e){a.uniform1fv(this.addr,e)}function Ep(a,e){const t=Li(e,this.size,2);a.uniform2fv(this.addr,t)}function Tp(a,e){const t=Li(e,this.size,3);a.uniform3fv(this.addr,t)}function bp(a,e){const t=Li(e,this.size,4);a.uniform4fv(this.addr,t)}function Ap(a,e){const t=Li(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function wp(a,e){const t=Li(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Rp(a,e){const t=Li(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Cp(a,e){a.uniform1iv(this.addr,e)}function Lp(a,e){a.uniform2iv(this.addr,e)}function Up(a,e){a.uniform3iv(this.addr,e)}function Pp(a,e){a.uniform4iv(this.addr,e)}function Dp(a,e){a.uniform1uiv(this.addr,e)}function Ip(a,e){a.uniform2uiv(this.addr,e)}function Fp(a,e){a.uniform3uiv(this.addr,e)}function Np(a,e){a.uniform4uiv(this.addr,e)}function Op(a,e,t){const r=this.cache,n=e.length,i=$r(t,n);ut(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||rc,i[o])}function Bp(a,e,t){const r=this.cache,n=e.length,i=$r(t,n);ut(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||oc,i[o])}function Gp(a,e,t){const r=this.cache,n=e.length,i=$r(t,n);ut(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||lc,i[o])}function kp(a,e,t){const r=this.cache,n=e.length,i=$r(t,n);ut(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||sc,i[o])}function zp(a){switch(a){case 5126:return yp;case 35664:return Ep;case 35665:return Tp;case 35666:return bp;case 35674:return Ap;case 35675:return wp;case 35676:return Rp;case 5124:case 35670:return Cp;case 35667:case 35671:return Lp;case 35668:case 35672:return Up;case 35669:case 35673:return Pp;case 5125:return Dp;case 36294:return Ip;case 36295:return Fp;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return kp}}class Hp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Mp(t.type)}}class Vp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zp(t.type)}}class Wp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,o=n.length;i!==o;++i){const s=n[i];s.setValue(e,t[s.id],r)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function el(a,e){a.seq.push(e),a.map[e.id]=e}function Xp(a,e,t){const r=a.name,n=r.length;for(Ha.lastIndex=0;;){const i=Ha.exec(r),o=Ha.lastIndex;let s=i[1];const l=i[2]==="]",c=i[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){el(t,c===void 0?new Hp(s,a,e):new Vp(s,a,e));break}else{let f=t.map[s];f===void 0&&(f=new Wp(s),el(t,f)),t=f}}}class kr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),o=e.getUniformLocation(t,i.name);Xp(i,o,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,o=t.length;i!==o;++i){const s=t[i],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function tl(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Yp=37297;let qp=0;function jp(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=n;o<i;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function Kp(a){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(a);let r;switch(e===t?r="":e===qr&&t===Yr?r="LinearDisplayP3ToLinearSRGB":e===Yr&&t===qr&&(r="LinearSRGBToLinearDisplayP3"),a){case vn:case Jr:return[r,"LinearTransferOETF"];case pt:case ps:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[r,"LinearTransferOETF"]}}function nl(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+jp(a.getShaderSource(e),o)}else return n}function Zp(a,e){const t=Kp(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jp(a,e){let t;switch(e){case cu:t="Linear";break;case uu:t="Reinhard";break;case fu:t="OptimizedCineon";break;case hu:t="ACESFilmic";break;case pu:t="AgX";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.alphaToCoverage||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function $p(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Si).join(`
`)}function em(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function tm(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),o=i.name;let s=1;i.type===a.FLOAT_MAT2&&(s=2),i.type===a.FLOAT_MAT3&&(s=3),i.type===a.FLOAT_MAT4&&(s=4),t[o]={type:i.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Si(a){return a!==""}function il(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function as(a){return a.replace(nm,rm)}const im=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rm(a,e){let t=Ye[e];if(t===void 0){const r=im.get(e);if(r!==void 0)t=Ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return as(t)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(a){return a.replace(am,sm)}function sm(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function sl(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function om(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function lm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ti:case bi:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function um(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function fm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function hm(a,e,t,r){const n=a.getContext(),i=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=om(t),c=lm(t),u=cm(t),f=um(t),h=fm(t),m=t.isWebGL2?"":Qp(t),g=$p(t),_=em(i),d=n.createProgram();let p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Si).join(`
`),p.length>0&&(p+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Si).join(`
`),y.length>0&&(y+=`
`)):(p=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),y=[m,sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Zp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Si).join(`
`)),o=as(o),o=il(o,t),o=rl(o,t),s=as(s),s=il(s,t),s=rl(s,t),o=al(o),s=al(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=x+p+o,C=x+y+s,R=tl(n,n.VERTEX_SHADER,M),E=tl(n,n.FRAGMENT_SHADER,C);n.attachShader(d,R),n.attachShader(d,E),t.index0AttributeName!==void 0?n.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d);function O(P){if(a.debug.checkShaderErrors){const z=n.getProgramInfoLog(d).trim(),b=n.getShaderInfoLog(R).trim(),H=n.getShaderInfoLog(E).trim();let B=!0,Z=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(B=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,d,R,E);else{const K=nl(n,R,"vertex"),V=nl(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+K+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(b===""||H==="")&&(Z=!1);Z&&(P.diagnostics={runnable:B,programLog:z,vertexShader:{log:b,prefix:p},fragmentShader:{log:H,prefix:y}})}n.deleteShader(R),n.deleteShader(E),Y=new kr(n,d),v=tm(n,d)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let v;this.getAttributes=function(){return v===void 0&&O(this),v};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(d,Yp)),w},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qp++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=R,this.fragmentShader=E,this}let dm=0;class pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new mm(e),t.set(e,r)),r}}class mm{constructor(e){this.id=dm++,this.code=e,this.usedTimes=0}}function gm(a,e,t,r,n,i,o){const s=new ql,l=new pm,c=new Set,u=[],f=n.isWebGL2,h=n.logarithmicDepthBuffer,m=n.vertexTextures;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,w,P,z,b){const H=z.fog,B=b.geometry,Z=v.isMeshStandardMaterial?z.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),V=K&&K.mapping===Zr?K.image.height:null,k=_[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const L=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=L!==void 0?L.length:0;let W=0;B.morphAttributes.position!==void 0&&(W=1),B.morphAttributes.normal!==void 0&&(W=2),B.morphAttributes.color!==void 0&&(W=3);let F,N,Q,J;if(k){const Le=on[k];F=Le.vertexShader,N=Le.fragmentShader}else F=v.vertexShader,N=v.fragmentShader,l.update(v),Q=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);const ee=a.getRenderTarget(),se=b.isInstancedMesh===!0,ye=b.isBatchedMesh===!0,le=!!v.map,I=!!v.matcap,Ne=!!K,ge=!!v.aoMap,Se=!!v.lightMap,de=!!v.bumpMap,Pe=!!v.normalMap,ue=!!v.displacementMap,T=!!v.emissiveMap,S=!!v.metalnessMap,D=!!v.roughnessMap,te=v.anisotropy>0,X=v.clearcoat>0,$=v.iridescence>0,oe=v.sheen>0,me=v.transmission>0,ce=te&&!!v.anisotropyMap,_e=X&&!!v.clearcoatMap,Ee=X&&!!v.clearcoatNormalMap,ae=X&&!!v.clearcoatRoughnessMap,Ie=$&&!!v.iridescenceMap,Ue=$&&!!v.iridescenceThicknessMap,Te=oe&&!!v.sheenColorMap,ve=oe&&!!v.sheenRoughnessMap,fe=!!v.specularMap,we=!!v.specularColorMap,Oe=!!v.specularIntensityMap,qe=me&&!!v.transmissionMap,De=me&&!!v.thicknessMap,Ae=!!v.gradientMap,U=!!v.alphaMap,Me=v.alphaTest>0,he=!!v.alphaHash,xe=!!v.extensions;let Ce=Ln;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ce=a.toneMapping);const Be={isWebGL2:f,shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:F,fragmentShader:N,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ye,instancing:se,instancingColor:se&&b.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:ee===null?a.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:vn,alphaToCoverage:!!v.alphaToCoverage,map:le,matcap:I,envMap:Ne,envMapMode:Ne&&K.mapping,envMapCubeUVHeight:V,aoMap:ge,lightMap:Se,bumpMap:de,normalMap:Pe,displacementMap:m&&ue,emissiveMap:T,normalMapObjectSpace:Pe&&v.normalMapType===bu,normalMapTangentSpace:Pe&&v.normalMapType===Tu,metalnessMap:S,roughnessMap:D,anisotropy:te,anisotropyMap:ce,clearcoat:X,clearcoatMap:_e,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ae,iridescence:$,iridescenceMap:Ie,iridescenceThicknessMap:Ue,sheen:oe,sheenColorMap:Te,sheenRoughnessMap:ve,specularMap:fe,specularColorMap:we,specularIntensityMap:Oe,transmission:me,transmissionMap:qe,thicknessMap:De,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===Mi&&v.alphaToCoverage===!1,alphaMap:U,alphaTest:Me,alphaHash:he,combine:v.combine,mapUv:le&&d(v.map.channel),aoMapUv:ge&&d(v.aoMap.channel),lightMapUv:Se&&d(v.lightMap.channel),bumpMapUv:de&&d(v.bumpMap.channel),normalMapUv:Pe&&d(v.normalMap.channel),displacementMapUv:ue&&d(v.displacementMap.channel),emissiveMapUv:T&&d(v.emissiveMap.channel),metalnessMapUv:S&&d(v.metalnessMap.channel),roughnessMapUv:D&&d(v.roughnessMap.channel),anisotropyMapUv:ce&&d(v.anisotropyMap.channel),clearcoatMapUv:_e&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&d(v.sheenRoughnessMap.channel),specularMapUv:fe&&d(v.specularMap.channel),specularColorMapUv:we&&d(v.specularColorMap.channel),specularIntensityMapUv:Oe&&d(v.specularIntensityMap.channel),transmissionMapUv:qe&&d(v.transmissionMap.channel),thicknessMapUv:De&&d(v.thicknessMap.channel),alphaMapUv:U&&d(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pe||te),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!B.attributes.uv&&(le||U),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:b.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ce,useLegacyLights:a._useLegacyLights,decodeVideoTexture:le&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===Tt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:xe&&v.extensions.derivatives===!0,extensionFragDepth:xe&&v.extensions.fragDepth===!0,extensionDrawBuffers:xe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xe&&v.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function y(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(w,v),M(w,v),w.push(a.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),w.batching&&s.enable(19),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.alphaToCoverage&&s.enable(20),v.push(s.mask)}function C(v){const w=_[v.type];let P;if(w){const z=on[w];P=Ql.clone(z.uniforms)}else P=v.uniforms;return P}function R(v,w){let P;for(let z=0,b=u.length;z<b;z++){const H=u[z];if(H.cacheKey===w){P=H,++P.usedTimes;break}}return P===void 0&&(P=new hm(a,w,v,i),u.push(P)),P}function E(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function O(v){l.remove(v)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:C,acquireProgram:R,releaseProgram:E,releaseShaderCache:O,programs:u,dispose:Y}}function _m(){let a=new WeakMap;function e(i){let o=a.get(i);return o===void 0&&(o={},a.set(i,o)),o}function t(i){a.delete(i)}function r(i,o,s){a.get(i)[o]=s}function n(){a=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function vm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ol(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ll(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function o(f,h,m,g,_,d){let p=a[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},a[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=d),e++,p}function s(f,h,m,g,_,d){const p=o(f,h,m,g,_,d);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(f,h,m,g,_,d){const p=o(f,h,m,g,_,d);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||vm),r.length>1&&r.sort(h||ol),n.length>1&&n.sort(h||ol)}function u(){for(let f=e,h=a.length;f<h;f++){const m=a[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:s,unshift:l,finish:u,sort:c}}function xm(){let a=new WeakMap;function e(r,n){const i=a.get(r);let o;return i===void 0?(o=new ll,a.set(r,[o])):n>=i.length?(o=new ll,i.push(o)):o=i[n],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Sm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Je};break;case"SpotLight":t={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return a[e.id]=t,t}}}function Mm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ym=0;function Em(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Tm(a,e){const t=new Sm,r=Mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new j);const i=new j,o=new lt,s=new lt;function l(u,f){let h=0,m=0,g=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let _=0,d=0,p=0,y=0,x=0,M=0,C=0,R=0,E=0,O=0,Y=0;u.sort(Em);const v=f===!0?Math.PI:1;for(let P=0,z=u.length;P<z;P++){const b=u[P],H=b.color,B=b.intensity,Z=b.distance,K=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=H.r*B*v,m+=H.g*B*v,g+=H.b*B*v;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],B);Y++}else if(b.isDirectionalLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity*v),b.castShadow){const k=b.shadow,L=r.get(b);L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,n.directionalShadow[_]=L,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=b.shadow.matrix,M++}n.directional[_]=V,_++}else if(b.isSpotLight){const V=t.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(H).multiplyScalar(B*v),V.distance=Z,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[p]=V;const k=b.shadow;if(b.map&&(n.spotLightMap[E]=b.map,E++,k.updateMatrices(b),b.castShadow&&O++),n.spotLightMatrix[p]=k.matrix,b.castShadow){const L=r.get(b);L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,n.spotShadow[p]=L,n.spotShadowMap[p]=K,R++}p++}else if(b.isRectAreaLight){const V=t.get(b);V.color.copy(H).multiplyScalar(B),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[y]=V,y++}else if(b.isPointLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity*v),V.distance=b.distance,V.decay=b.decay,b.castShadow){const k=b.shadow,L=r.get(b);L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,L.shadowCameraNear=k.camera.near,L.shadowCameraFar=k.camera.far,n.pointShadow[d]=L,n.pointShadowMap[d]=K,n.pointShadowMatrix[d]=b.shadow.matrix,C++}n.point[d]=V,d++}else if(b.isHemisphereLight){const V=t.get(b);V.skyColor.copy(b.color).multiplyScalar(B*v),V.groundColor.copy(b.groundColor).multiplyScalar(B*v),n.hemi[x]=V,x++}}y>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=g;const w=n.hash;(w.directionalLength!==_||w.pointLength!==d||w.spotLength!==p||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==M||w.numPointShadows!==C||w.numSpotShadows!==R||w.numSpotMaps!==E||w.numLightProbes!==Y)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=y,n.point.length=d,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=R+E-O,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=Y,w.directionalLength=_,w.pointLength=d,w.spotLength=p,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=M,w.numPointShadows=C,w.numSpotShadows=R,w.numSpotMaps=E,w.numLightProbes=Y,n.version=ym++)}function c(u,f){let h=0,m=0,g=0,_=0,d=0;const p=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const M=u[y];if(M.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(p),h++}else if(M.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),s.identity(),o.copy(M.matrixWorld),o.premultiply(p),s.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),_++}else if(M.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const C=n.hemi[d];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),d++}}}return{setup:l,setupView:c,state:n}}function cl(a,e){const t=new Tm(a,e),r=[],n=[];function i(){r.length=0,n.length=0}function o(f){r.push(f)}function s(f){n.push(f)}function l(f){t.setup(r,f)}function c(f){t.setupView(r,f)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function bm(a,e){let t=new WeakMap;function r(i,o=0){const s=t.get(i);let l;return s===void 0?(l=new cl(a,e),t.set(i,[l])):o>=s.length?(l=new cl(a,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class cc extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uc extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wm=`uniform sampler2D shadow_pass;
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
}`;function Rm(a,e,t){let r=new ms;const n=new Ke,i=new Ke,o=new nt,s=new cc({depthPacking:kl}),l=new uc,c={},u=t.maxTextureSize,f={[_n]:Tt,[Tt]:_n,[en]:en},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Am,fragmentShader:wm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let p=this.type;this.render=function(R,E,O){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const Y=a.getRenderTarget(),v=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Cn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const z=p!==pn&&this.type===pn,b=p===pn&&this.type!==pn;for(let H=0,B=R.length;H<B;H++){const Z=R[H],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const V=K.getFrameExtents();if(n.multiply(V),i.copy(K.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/V.x),n.x=i.x*V.x,K.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/V.y),n.y=i.y*V.y,K.mapSize.y=i.y)),K.map===null||z===!0||b===!0){const L=this.type!==pn?{minFilter:Et,magFilter:Et}:{};K.map!==null&&K.map.dispose(),K.map=new Jn(n.x,n.y,L),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}a.setRenderTarget(K.map),a.clear();const k=K.getViewportCount();for(let L=0;L<k;L++){const G=K.getViewport(L);o.set(i.x*G.x,i.y*G.y,i.x*G.z,i.y*G.w),P.viewport(o),K.updateMatrices(Z,L),r=K.getFrustum(),M(E,O,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===pn&&y(K,O),K.needsUpdate=!1}p=this.type,d.needsUpdate=!1,a.setRenderTarget(Y,v,w)};function y(R,E){const O=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Jn(n.x,n.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(E,null,O,h,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(E,null,O,m,_,null)}function x(R,E,O,Y){let v=null;const w=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)v=w;else if(v=O.isPointLight===!0?l:s,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const P=v.uuid,z=E.uuid;let b=c[P];b===void 0&&(b={},c[P]=b);let H=b[z];H===void 0&&(H=v.clone(),b[z]=H,E.addEventListener("dispose",C)),v=H}if(v.visible=E.visible,v.wireframe=E.wireframe,Y===pn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=a.properties.get(v);P.light=O}return v}function M(R,E,O,Y,v){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===pn)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const z=e.update(R),b=R.material;if(Array.isArray(b)){const H=z.groups;for(let B=0,Z=H.length;B<Z;B++){const K=H[B],V=b[K.materialIndex];if(V&&V.visible){const k=x(R,V,Y,v);R.onBeforeShadow(a,R,E,O,z,k,K),a.renderBufferDirect(O,null,z,k,R,K),R.onAfterShadow(a,R,E,O,z,k,K)}}}else if(b.visible){const H=x(R,b,Y,v);R.onBeforeShadow(a,R,E,O,z,H,null),a.renderBufferDirect(O,null,z,H,R,null),R.onAfterShadow(a,R,E,O,z,H,null)}}const P=R.children;for(let z=0,b=P.length;z<b;z++)M(P[z],E,O,Y,v)}function C(R){R.target.removeEventListener("dispose",C);for(const O in c){const Y=c[O],v=R.target.uuid;v in Y&&(Y[v].dispose(),delete Y[v])}}}function Cm(a,e,t){const r=t.isWebGL2;function n(){let U=!1;const Me=new nt;let he=null;const xe=new nt(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!U&&(a.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,Be,Le,We,Qe){Qe===!0&&(Ce*=We,Be*=We,Le*=We),Me.set(Ce,Be,Le,We),xe.equals(Me)===!1&&(a.clearColor(Ce,Be,Le,We),xe.copy(Me))},reset:function(){U=!1,he=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,Me=null,he=null,xe=null;return{setTest:function(Ce){Ce?se(a.DEPTH_TEST):ye(a.DEPTH_TEST)},setMask:function(Ce){Me!==Ce&&!U&&(a.depthMask(Ce),Me=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case eu:a.depthFunc(a.NEVER);break;case tu:a.depthFunc(a.ALWAYS);break;case nu:a.depthFunc(a.LESS);break;case Wr:a.depthFunc(a.LEQUAL);break;case iu:a.depthFunc(a.EQUAL);break;case ru:a.depthFunc(a.GEQUAL);break;case au:a.depthFunc(a.GREATER);break;case su:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){xe!==Ce&&(a.clearDepth(Ce),xe=Ce)},reset:function(){U=!1,Me=null,he=null,xe=null}}}function o(){let U=!1,Me=null,he=null,xe=null,Ce=null,Be=null,Le=null,We=null,Qe=null;return{setTest:function(Ve){U||(Ve?se(a.STENCIL_TEST):ye(a.STENCIL_TEST))},setMask:function(Ve){Me!==Ve&&!U&&(a.stencilMask(Ve),Me=Ve)},setFunc:function(Ve,Ze,st){(he!==Ve||xe!==Ze||Ce!==st)&&(a.stencilFunc(Ve,Ze,st),he=Ve,xe=Ze,Ce=st)},setOp:function(Ve,Ze,st){(Be!==Ve||Le!==Ze||We!==st)&&(a.stencilOp(Ve,Ze,st),Be=Ve,Le=Ze,We=st)},setLocked:function(Ve){U=Ve},setClear:function(Ve){Qe!==Ve&&(a.clearStencil(Ve),Qe=Ve)},reset:function(){U=!1,Me=null,he=null,xe=null,Ce=null,Be=null,Le=null,We=null,Qe=null}}}const s=new n,l=new i,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,_=[],d=null,p=!1,y=null,x=null,M=null,C=null,R=null,E=null,O=null,Y=new Je(0,0,0),v=0,w=!1,P=null,z=null,b=null,H=null,B=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const k=a.getParameter(a.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),K=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),K=V>=2);let L=null,G={};const W=a.getParameter(a.SCISSOR_BOX),F=a.getParameter(a.VIEWPORT),N=new nt().fromArray(W),Q=new nt().fromArray(F);function J(U,Me,he,xe){const Ce=new Uint8Array(4),Be=a.createTexture();a.bindTexture(U,Be),a.texParameteri(U,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(U,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Le=0;Le<he;Le++)r&&(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)?a.texImage3D(Me,0,a.RGBA,1,1,xe,0,a.RGBA,a.UNSIGNED_BYTE,Ce):a.texImage2D(Me+Le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ce);return Be}const ee={};ee[a.TEXTURE_2D]=J(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=J(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ee[a.TEXTURE_2D_ARRAY]=J(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=J(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(a.DEPTH_TEST),l.setFunc(Wr),ue(!1),T(zs),se(a.CULL_FACE),de(Cn);function se(U){h[U]!==!0&&(a.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(a.disable(U),h[U]=!1)}function le(U,Me){return m[U]!==Me?(a.bindFramebuffer(U,Me),m[U]=Me,r&&(U===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Me),U===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Me)),!0):!1}function I(U,Me){let he=_,xe=!1;if(U)if(he=g.get(Me),he===void 0&&(he=[],g.set(Me,he)),U.isWebGLMultipleRenderTargets){const Ce=U.texture;if(he.length!==Ce.length||he[0]!==a.COLOR_ATTACHMENT0){for(let Be=0,Le=Ce.length;Be<Le;Be++)he[Be]=a.COLOR_ATTACHMENT0+Be;he.length=Ce.length,xe=!0}}else he[0]!==a.COLOR_ATTACHMENT0&&(he[0]=a.COLOR_ATTACHMENT0,xe=!0);else he[0]!==a.BACK&&(he[0]=a.BACK,xe=!0);xe&&(t.isWebGL2?a.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ne(U){return d!==U?(a.useProgram(U),d=U,!0):!1}const ge={[Vn]:a.FUNC_ADD,[Gc]:a.FUNC_SUBTRACT,[kc]:a.FUNC_REVERSE_SUBTRACT};if(r)ge[Xs]=a.MIN,ge[Ys]=a.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ge[Xs]=U.MIN_EXT,ge[Ys]=U.MAX_EXT)}const Se={[zc]:a.ZERO,[Hc]:a.ONE,[Vc]:a.SRC_COLOR,[Za]:a.SRC_ALPHA,[Kc]:a.SRC_ALPHA_SATURATE,[qc]:a.DST_COLOR,[Xc]:a.DST_ALPHA,[Wc]:a.ONE_MINUS_SRC_COLOR,[Ja]:a.ONE_MINUS_SRC_ALPHA,[jc]:a.ONE_MINUS_DST_COLOR,[Yc]:a.ONE_MINUS_DST_ALPHA,[Zc]:a.CONSTANT_COLOR,[Jc]:a.ONE_MINUS_CONSTANT_COLOR,[Qc]:a.CONSTANT_ALPHA,[$c]:a.ONE_MINUS_CONSTANT_ALPHA};function de(U,Me,he,xe,Ce,Be,Le,We,Qe,Ve){if(U===Cn){p===!0&&(ye(a.BLEND),p=!1);return}if(p===!1&&(se(a.BLEND),p=!0),U!==Bc){if(U!==y||Ve!==w){if((x!==Vn||R!==Vn)&&(a.blendEquation(a.FUNC_ADD),x=Vn,R=Vn),Ve)switch(U){case Mi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Hs:a.blendFunc(a.ONE,a.ONE);break;case Vs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ws:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Mi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Hs:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Vs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ws:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,C=null,E=null,O=null,Y.set(0,0,0),v=0,y=U,w=Ve}return}Ce=Ce||Me,Be=Be||he,Le=Le||xe,(Me!==x||Ce!==R)&&(a.blendEquationSeparate(ge[Me],ge[Ce]),x=Me,R=Ce),(he!==M||xe!==C||Be!==E||Le!==O)&&(a.blendFuncSeparate(Se[he],Se[xe],Se[Be],Se[Le]),M=he,C=xe,E=Be,O=Le),(We.equals(Y)===!1||Qe!==v)&&(a.blendColor(We.r,We.g,We.b,Qe),Y.copy(We),v=Qe),y=U,w=!1}function Pe(U,Me){U.side===en?ye(a.CULL_FACE):se(a.CULL_FACE);let he=U.side===Tt;Me&&(he=!he),ue(he),U.blending===Mi&&U.transparent===!1?de(Cn):de(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),s.setMask(U.colorWrite);const xe=U.stencilWrite;c.setTest(xe),xe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),D(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(a.SAMPLE_ALPHA_TO_COVERAGE):ye(a.SAMPLE_ALPHA_TO_COVERAGE)}function ue(U){P!==U&&(U?a.frontFace(a.CW):a.frontFace(a.CCW),P=U)}function T(U){U!==Fc?(se(a.CULL_FACE),U!==z&&(U===zs?a.cullFace(a.BACK):U===Nc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ye(a.CULL_FACE),z=U}function S(U){U!==b&&(K&&a.lineWidth(U),b=U)}function D(U,Me,he){U?(se(a.POLYGON_OFFSET_FILL),(H!==Me||B!==he)&&(a.polygonOffset(Me,he),H=Me,B=he)):ye(a.POLYGON_OFFSET_FILL)}function te(U){U?se(a.SCISSOR_TEST):ye(a.SCISSOR_TEST)}function X(U){U===void 0&&(U=a.TEXTURE0+Z-1),L!==U&&(a.activeTexture(U),L=U)}function $(U,Me,he){he===void 0&&(L===null?he=a.TEXTURE0+Z-1:he=L);let xe=G[he];xe===void 0&&(xe={type:void 0,texture:void 0},G[he]=xe),(xe.type!==U||xe.texture!==Me)&&(L!==he&&(a.activeTexture(he),L=he),a.bindTexture(U,Me||ee[U]),xe.type=U,xe.texture=Me)}function oe(){const U=G[L];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function me(){try{a.compressedTexImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{a.compressedTexImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{a.texSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{a.texSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{a.texStorage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{a.texStorage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{a.texImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(U){N.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),N.copy(U))}function Oe(U){Q.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function qe(U,Me){let he=f.get(Me);he===void 0&&(he=new WeakMap,f.set(Me,he));let xe=he.get(U);xe===void 0&&(xe=a.getUniformBlockIndex(Me,U.name),he.set(U,xe))}function De(U,Me){const xe=f.get(Me).get(U);u.get(Me)!==xe&&(a.uniformBlockBinding(Me,xe,U.__bindingPointIndex),u.set(Me,xe))}function Ae(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),r===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},L=null,G={},m={},g=new WeakMap,_=[],d=null,p=!1,y=null,x=null,M=null,C=null,R=null,E=null,O=null,Y=new Je(0,0,0),v=0,w=!1,P=null,z=null,b=null,H=null,B=null,N.set(0,0,a.canvas.width,a.canvas.height),Q.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:se,disable:ye,bindFramebuffer:le,drawBuffers:I,useProgram:Ne,setBlending:de,setMaterial:Pe,setFlipSided:ue,setCullFace:T,setLineWidth:S,setPolygonOffset:D,setScissorTest:te,activeTexture:X,bindTexture:$,unbindTexture:oe,compressedTexImage2D:me,compressedTexImage3D:ce,texImage2D:ve,texImage3D:fe,updateUBOMapping:qe,uniformBlockBinding:De,texStorage2D:Ue,texStorage3D:Te,texSubImage2D:_e,texSubImage3D:Ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ie,scissor:we,viewport:Oe,reset:Ae}}function Lm(a,e,t,r,n,i,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return m?new OffscreenCanvas(T,S):Kr("canvas")}function _(T,S,D,te){let X=1;if((T.width>te||T.height>te)&&(X=te/Math.max(T.width,T.height)),X<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const $=S?rs:Math.floor,oe=$(X*T.width),me=$(X*T.height);f===void 0&&(f=g(oe,me));const ce=D?g(oe,me):f;return ce.width=oe,ce.height=me,ce.getContext("2d").drawImage(T,0,0,oe,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+oe+"x"+me+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function d(T){return Eo(T.width)&&Eo(T.height)}function p(T){return s?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==Et&&T.minFilter!==Mt}function y(T,S){return T.generateMipmaps&&S&&T.minFilter!==Et&&T.minFilter!==Mt}function x(T){a.generateMipmap(T)}function M(T,S,D,te,X=!1){if(s===!1)return S;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=S;if(S===a.RED&&(D===a.FLOAT&&($=a.R32F),D===a.HALF_FLOAT&&($=a.R16F),D===a.UNSIGNED_BYTE&&($=a.R8)),S===a.RED_INTEGER&&(D===a.UNSIGNED_BYTE&&($=a.R8UI),D===a.UNSIGNED_SHORT&&($=a.R16UI),D===a.UNSIGNED_INT&&($=a.R32UI),D===a.BYTE&&($=a.R8I),D===a.SHORT&&($=a.R16I),D===a.INT&&($=a.R32I)),S===a.RG&&(D===a.FLOAT&&($=a.RG32F),D===a.HALF_FLOAT&&($=a.RG16F),D===a.UNSIGNED_BYTE&&($=a.RG8)),S===a.RGBA){const oe=X?Xr:et.getTransfer(te);D===a.FLOAT&&($=a.RGBA32F),D===a.HALF_FLOAT&&($=a.RGBA16F),D===a.UNSIGNED_BYTE&&($=oe===rt?a.SRGB8_ALPHA8:a.RGBA8),D===a.UNSIGNED_SHORT_4_4_4_4&&($=a.RGBA4),D===a.UNSIGNED_SHORT_5_5_5_1&&($=a.RGB5_A1)}return($===a.R16F||$===a.R32F||$===a.RG16F||$===a.RG32F||$===a.RGBA16F||$===a.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function C(T,S,D){return y(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==Mt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){return T===Et||T===qs||T===Hi?a.NEAREST:a.LINEAR}function E(T){const S=T.target;S.removeEventListener("dispose",E),Y(S),S.isVideoTexture&&u.delete(S)}function O(T){const S=T.target;S.removeEventListener("dispose",O),w(S)}function Y(T){const S=r.get(T);if(S.__webglInit===void 0)return;const D=T.source,te=h.get(D);if(te){const X=te[S.__cacheKey];X.usedTimes--,X.usedTimes===0&&v(T),Object.keys(te).length===0&&h.delete(D)}r.remove(T)}function v(T){const S=r.get(T);a.deleteTexture(S.__webglTexture);const D=T.source,te=h.get(D);delete te[S.__cacheKey],o.memory.textures--}function w(T){const S=T.texture,D=r.get(T),te=r.get(S);if(te.__webglTexture!==void 0&&(a.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(D.__webglFramebuffer[X]))for(let $=0;$<D.__webglFramebuffer[X].length;$++)a.deleteFramebuffer(D.__webglFramebuffer[X][$]);else a.deleteFramebuffer(D.__webglFramebuffer[X]);D.__webglDepthbuffer&&a.deleteRenderbuffer(D.__webglDepthbuffer[X])}else{if(Array.isArray(D.__webglFramebuffer))for(let X=0;X<D.__webglFramebuffer.length;X++)a.deleteFramebuffer(D.__webglFramebuffer[X]);else a.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&a.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&a.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let X=0;X<D.__webglColorRenderbuffer.length;X++)D.__webglColorRenderbuffer[X]&&a.deleteRenderbuffer(D.__webglColorRenderbuffer[X]);D.__webglDepthRenderbuffer&&a.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let X=0,$=S.length;X<$;X++){const oe=r.get(S[X]);oe.__webglTexture&&(a.deleteTexture(oe.__webglTexture),o.memory.textures--),r.remove(S[X])}r.remove(S),r.remove(T)}let P=0;function z(){P=0}function b(){const T=P;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),P+=1,T}function H(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function B(T,S){const D=r.get(T);if(T.isVideoTexture&&Pe(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(D,T,S);return}}t.bindTexture(a.TEXTURE_2D,D.__webglTexture,a.TEXTURE0+S)}function Z(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){N(D,T,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,D.__webglTexture,a.TEXTURE0+S)}function K(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){N(D,T,S);return}t.bindTexture(a.TEXTURE_3D,D.__webglTexture,a.TEXTURE0+S)}function V(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){Q(D,T,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+S)}const k={[es]:a.REPEAT,[tn]:a.CLAMP_TO_EDGE,[ts]:a.MIRRORED_REPEAT},L={[Et]:a.NEAREST,[qs]:a.NEAREST_MIPMAP_NEAREST,[Hi]:a.NEAREST_MIPMAP_LINEAR,[Mt]:a.LINEAR,[da]:a.LINEAR_MIPMAP_NEAREST,[Xn]:a.LINEAR_MIPMAP_LINEAR},G={[Au]:a.NEVER,[Pu]:a.ALWAYS,[wu]:a.LESS,[zl]:a.LEQUAL,[Ru]:a.EQUAL,[Uu]:a.GEQUAL,[Cu]:a.GREATER,[Lu]:a.NOTEQUAL};function W(T,S,D){if(S.type===mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Mt||S.magFilter===da||S.magFilter===Hi||S.magFilter===Xn||S.minFilter===Mt||S.minFilter===da||S.minFilter===Hi||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D?(a.texParameteri(T,a.TEXTURE_WRAP_S,k[S.wrapS]),a.texParameteri(T,a.TEXTURE_WRAP_T,k[S.wrapT]),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,k[S.wrapR]),a.texParameteri(T,a.TEXTURE_MAG_FILTER,L[S.magFilter]),a.texParameteri(T,a.TEXTURE_MIN_FILTER,L[S.minFilter])):(a.texParameteri(T,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(T,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(S.wrapS!==tn||S.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,a.TEXTURE_MAG_FILTER,R(S.magFilter)),a.texParameteri(T,a.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Et&&S.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(a.texParameteri(T,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(T,a.TEXTURE_COMPARE_FUNC,G[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Et||S.minFilter!==Hi&&S.minFilter!==Xn||S.type===mn&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||r.get(S).__currentAnisotropy)&&(a.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy)}}function F(T,S){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));const te=S.source;let X=h.get(te);X===void 0&&(X={},h.set(te,X));const $=H(S);if($!==T.__cacheKey){X[$]===void 0&&(X[$]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,D=!0),X[$].usedTimes++;const oe=X[T.__cacheKey];oe!==void 0&&(X[T.__cacheKey].usedTimes--,oe.usedTimes===0&&v(S)),T.__cacheKey=$,T.__webglTexture=X[$].texture}return D}function N(T,S,D){let te=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=a.TEXTURE_3D);const X=F(T,S),$=S.source;t.bindTexture(te,T.__webglTexture,a.TEXTURE0+D);const oe=r.get($);if($.version!==oe.__version||X===!0){t.activeTexture(a.TEXTURE0+D);const me=et.getPrimaries(et.workingColorSpace),ce=S.colorSpace===zt?null:et.getPrimaries(S.colorSpace),_e=S.colorSpace===zt||me===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ee=p(S)&&d(S.image)===!1;let ae=_(S.image,Ee,!1,n.maxTextureSize);ae=ue(S,ae);const Ie=d(ae)||s,Ue=i.convert(S.format,S.colorSpace);let Te=i.convert(S.type),ve=M(S.internalFormat,Ue,Te,S.colorSpace,S.isVideoTexture);W(te,S,Ie);let fe;const we=S.mipmaps,Oe=s&&S.isVideoTexture!==!0&&ve!==Bl,qe=oe.__version===void 0||X===!0,De=$.dataReady,Ae=C(S,ae,Ie);if(S.isDepthTexture)ve=a.DEPTH_COMPONENT,s?S.type===mn?ve=a.DEPTH_COMPONENT32F:S.type===Rn?ve=a.DEPTH_COMPONENT24:S.type===qn?ve=a.DEPTH24_STENCIL8:ve=a.DEPTH_COMPONENT16:S.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===jn&&ve===a.DEPTH_COMPONENT&&S.type!==ds&&S.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Rn,Te=i.convert(S.type)),S.format===Ai&&ve===a.DEPTH_COMPONENT&&(ve=a.DEPTH_STENCIL,S.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=qn,Te=i.convert(S.type))),qe&&(Oe?t.texStorage2D(a.TEXTURE_2D,1,ve,ae.width,ae.height):t.texImage2D(a.TEXTURE_2D,0,ve,ae.width,ae.height,0,Ue,Te,null));else if(S.isDataTexture)if(we.length>0&&Ie){Oe&&qe&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let U=0,Me=we.length;U<Me;U++)fe=we[U],Oe?De&&t.texSubImage2D(a.TEXTURE_2D,U,0,0,fe.width,fe.height,Ue,Te,fe.data):t.texImage2D(a.TEXTURE_2D,U,ve,fe.width,fe.height,0,Ue,Te,fe.data);S.generateMipmaps=!1}else Oe?(qe&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,ae.width,ae.height),De&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ae.width,ae.height,Ue,Te,ae.data)):t.texImage2D(a.TEXTURE_2D,0,ve,ae.width,ae.height,0,Ue,Te,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&qe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,ve,we[0].width,we[0].height,ae.depth);for(let U=0,Me=we.length;U<Me;U++)fe=we[U],S.format!==nn?Ue!==null?Oe?De&&t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,U,0,0,0,fe.width,fe.height,ae.depth,Ue,fe.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,U,ve,fe.width,fe.height,ae.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?De&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,U,0,0,0,fe.width,fe.height,ae.depth,Ue,Te,fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,U,ve,fe.width,fe.height,ae.depth,0,Ue,Te,fe.data)}else{Oe&&qe&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let U=0,Me=we.length;U<Me;U++)fe=we[U],S.format!==nn?Ue!==null?Oe?De&&t.compressedTexSubImage2D(a.TEXTURE_2D,U,0,0,fe.width,fe.height,Ue,fe.data):t.compressedTexImage2D(a.TEXTURE_2D,U,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?De&&t.texSubImage2D(a.TEXTURE_2D,U,0,0,fe.width,fe.height,Ue,Te,fe.data):t.texImage2D(a.TEXTURE_2D,U,ve,fe.width,fe.height,0,Ue,Te,fe.data)}else if(S.isDataArrayTexture)Oe?(qe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,ve,ae.width,ae.height,ae.depth),De&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ue,Te,ae.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,ve,ae.width,ae.height,ae.depth,0,Ue,Te,ae.data);else if(S.isData3DTexture)Oe?(qe&&t.texStorage3D(a.TEXTURE_3D,Ae,ve,ae.width,ae.height,ae.depth),De&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ue,Te,ae.data)):t.texImage3D(a.TEXTURE_3D,0,ve,ae.width,ae.height,ae.depth,0,Ue,Te,ae.data);else if(S.isFramebufferTexture){if(qe)if(Oe)t.texStorage2D(a.TEXTURE_2D,Ae,ve,ae.width,ae.height);else{let U=ae.width,Me=ae.height;for(let he=0;he<Ae;he++)t.texImage2D(a.TEXTURE_2D,he,ve,U,Me,0,Ue,Te,null),U>>=1,Me>>=1}}else if(we.length>0&&Ie){Oe&&qe&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,we[0].width,we[0].height);for(let U=0,Me=we.length;U<Me;U++)fe=we[U],Oe?De&&t.texSubImage2D(a.TEXTURE_2D,U,0,0,Ue,Te,fe):t.texImage2D(a.TEXTURE_2D,U,ve,Ue,Te,fe);S.generateMipmaps=!1}else Oe?(qe&&t.texStorage2D(a.TEXTURE_2D,Ae,ve,ae.width,ae.height),De&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ue,Te,ae)):t.texImage2D(a.TEXTURE_2D,0,ve,Ue,Te,ae);y(S,Ie)&&x(te),oe.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Q(T,S,D){if(S.image.length!==6)return;const te=F(T,S),X=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,T.__webglTexture,a.TEXTURE0+D);const $=r.get(X);if(X.version!==$.__version||te===!0){t.activeTexture(a.TEXTURE0+D);const oe=et.getPrimaries(et.workingColorSpace),me=S.colorSpace===zt?null:et.getPrimaries(S.colorSpace),ce=S.colorSpace===zt||oe===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let U=0;U<6;U++)!_e&&!Ee?ae[U]=_(S.image[U],!1,!0,n.maxCubemapSize):ae[U]=Ee?S.image[U].image:S.image[U],ae[U]=ue(S,ae[U]);const Ie=ae[0],Ue=d(Ie)||s,Te=i.convert(S.format,S.colorSpace),ve=i.convert(S.type),fe=M(S.internalFormat,Te,ve,S.colorSpace),we=s&&S.isVideoTexture!==!0,Oe=$.__version===void 0||te===!0,qe=X.dataReady;let De=C(S,Ie,Ue);W(a.TEXTURE_CUBE_MAP,S,Ue);let Ae;if(_e){we&&Oe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,De,fe,Ie.width,Ie.height);for(let U=0;U<6;U++){Ae=ae[U].mipmaps;for(let Me=0;Me<Ae.length;Me++){const he=Ae[Me];S.format!==nn?Te!==null?we?qe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me,0,0,he.width,he.height,Te,he.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?qe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me,0,0,he.width,he.height,Te,ve,he.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me,fe,he.width,he.height,0,Te,ve,he.data)}}}else{Ae=S.mipmaps,we&&Oe&&(Ae.length>0&&De++,t.texStorage2D(a.TEXTURE_CUBE_MAP,De,fe,ae[0].width,ae[0].height));for(let U=0;U<6;U++)if(Ee){we?qe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ae[U].width,ae[U].height,Te,ve,ae[U].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,fe,ae[U].width,ae[U].height,0,Te,ve,ae[U].data);for(let Me=0;Me<Ae.length;Me++){const xe=Ae[Me].image[U].image;we?qe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me+1,0,0,xe.width,xe.height,Te,ve,xe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me+1,fe,xe.width,xe.height,0,Te,ve,xe.data)}}else{we?qe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Te,ve,ae[U]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,fe,Te,ve,ae[U]);for(let Me=0;Me<Ae.length;Me++){const he=Ae[Me];we?qe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me+1,0,0,Te,ve,he.image[U]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me+1,fe,Te,ve,he.image[U])}}}y(S,Ue)&&x(a.TEXTURE_CUBE_MAP),$.__version=X.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function J(T,S,D,te,X,$){const oe=i.convert(D.format,D.colorSpace),me=i.convert(D.type),ce=M(D.internalFormat,oe,me,D.colorSpace);if(!r.get(S).__hasExternalTextures){const Ee=Math.max(1,S.width>>$),ae=Math.max(1,S.height>>$);X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?t.texImage3D(X,$,ce,Ee,ae,S.depth,0,oe,me,null):t.texImage2D(X,$,ce,Ee,ae,0,oe,me,null)}t.bindFramebuffer(a.FRAMEBUFFER,T),de(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,te,X,r.get(D).__webglTexture,0,Se(S)):(X===a.TEXTURE_2D||X>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,te,X,r.get(D).__webglTexture,$),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ee(T,S,D){if(a.bindRenderbuffer(a.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let te=s===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(D||de(S)){const X=S.depthTexture;X&&X.isDepthTexture&&(X.type===mn?te=a.DEPTH_COMPONENT32F:X.type===Rn&&(te=a.DEPTH_COMPONENT24));const $=Se(S);de(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$,te,S.width,S.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,$,te,S.width,S.height)}else a.renderbufferStorage(a.RENDERBUFFER,te,S.width,S.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const te=Se(S);D&&de(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,te,a.DEPTH24_STENCIL8,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,te,a.DEPTH24_STENCIL8,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,T)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let X=0;X<te.length;X++){const $=te[X],oe=i.convert($.format,$.colorSpace),me=i.convert($.type),ce=M($.internalFormat,oe,me,$.colorSpace),_e=Se(S);D&&de(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,_e,ce,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,_e,ce,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ce,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function se(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const te=r.get(S.depthTexture).__webglTexture,X=Se(S);if(S.depthTexture.format===jn)de(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0);else if(S.depthTexture.format===Ai)de(S)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(T){const S=r.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,T)}else if(D){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=a.createRenderbuffer(),ee(S.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),ee(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function le(T,S,D){const te=r.get(T);S!==void 0&&J(te.__webglFramebuffer,T,T.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),D!==void 0&&ye(T)}function I(T){const S=T.texture,D=r.get(T),te=r.get(S);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=S.version,o.memory.textures++);const X=T.isWebGLCubeRenderTarget===!0,$=T.isWebGLMultipleRenderTargets===!0,oe=d(T)||s;if(X){D.__webglFramebuffer=[];for(let me=0;me<6;me++)if(s&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[me]=[];for(let ce=0;ce<S.mipmaps.length;ce++)D.__webglFramebuffer[me][ce]=a.createFramebuffer()}else D.__webglFramebuffer[me]=a.createFramebuffer()}else{if(s&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)D.__webglFramebuffer[me]=a.createFramebuffer()}else D.__webglFramebuffer=a.createFramebuffer();if($)if(n.drawBuffers){const me=T.texture;for(let ce=0,_e=me.length;ce<_e;ce++){const Ee=r.get(me[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&de(T)===!1){const me=$?S:[S];D.__webglMultisampledFramebuffer=a.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ce=0;ce<me.length;ce++){const _e=me[ce];D.__webglColorRenderbuffer[ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,D.__webglColorRenderbuffer[ce]);const Ee=i.convert(_e.format,_e.colorSpace),ae=i.convert(_e.type),Ie=M(_e.internalFormat,Ee,ae,_e.colorSpace,T.isXRRenderTarget===!0),Ue=Se(T);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Ie,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,D.__webglColorRenderbuffer[ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=a.createRenderbuffer(),ee(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(X){t.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture),W(a.TEXTURE_CUBE_MAP,S,oe);for(let me=0;me<6;me++)if(s&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)J(D.__webglFramebuffer[me][ce],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,ce);else J(D.__webglFramebuffer[me],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(S,oe)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const me=T.texture;for(let ce=0,_e=me.length;ce<_e;ce++){const Ee=me[ce],ae=r.get(Ee);t.bindTexture(a.TEXTURE_2D,ae.__webglTexture),W(a.TEXTURE_2D,Ee,oe),J(D.__webglFramebuffer,T,Ee,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,0),y(Ee,oe)&&x(a.TEXTURE_2D)}t.unbindTexture()}else{let me=a.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?me=T.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,te.__webglTexture),W(me,S,oe),s&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)J(D.__webglFramebuffer[ce],T,S,a.COLOR_ATTACHMENT0,me,ce);else J(D.__webglFramebuffer,T,S,a.COLOR_ATTACHMENT0,me,0);y(S,oe)&&x(me),t.unbindTexture()}T.depthBuffer&&ye(T)}function Ne(T){const S=d(T)||s,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,X=D.length;te<X;te++){const $=D[te];if(y($,S)){const oe=T.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,me=r.get($).__webglTexture;t.bindTexture(oe,me),x(oe),t.unbindTexture()}}}function ge(T){if(s&&T.samples>0&&de(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,te=T.height;let X=a.COLOR_BUFFER_BIT;const $=[],oe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=r.get(T),ce=T.isWebGLMultipleRenderTargets===!0;if(ce)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(a.FRAMEBUFFER,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){$.push(a.COLOR_ATTACHMENT0+_e),T.depthBuffer&&$.push(oe);const Ee=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(X|=a.DEPTH_BUFFER_BIT),T.stencilBuffer&&(X|=a.STENCIL_BUFFER_BIT)),ce&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,me.__webglColorRenderbuffer[_e]),Ee===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[oe]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[oe])),ce){const ae=r.get(S[_e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ae,0)}a.blitFramebuffer(0,0,D,te,0,0,D,te,X,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(a.FRAMEBUFFER,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ee=r.get(S[_e]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,Ee,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Se(T){return Math.min(n.maxSamples,T.samples)}function de(T){const S=r.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function ue(T,S){const D=T.colorSpace,te=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ns||D!==vn&&D!==zt&&(et.getTransfer(D)===rt?s===!1?e.has("EXT_sRGB")===!0&&te===nn?(T.format=ns,T.minFilter=Mt,T.generateMipmaps=!1):S=Vl.sRGBToLinear(S):(te!==nn||X!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),S}this.allocateTextureUnit=b,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=J,this.useMultisampledRTT=de}function Um(a,e,t){const r=t.isWebGL2;function n(i,o=zt){let s;const l=et.getTransfer(o);if(i===Un)return a.UNSIGNED_BYTE;if(i===Dl)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return a.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return a.BYTE;if(i===gu)return a.SHORT;if(i===ds)return a.UNSIGNED_SHORT;if(i===Pl)return a.INT;if(i===Rn)return a.UNSIGNED_INT;if(i===mn)return a.FLOAT;if(i===$i)return r?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===_u)return a.ALPHA;if(i===nn)return a.RGBA;if(i===vu)return a.LUMINANCE;if(i===xu)return a.LUMINANCE_ALPHA;if(i===jn)return a.DEPTH_COMPONENT;if(i===Ai)return a.DEPTH_STENCIL;if(i===ns)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===Su)return a.RED;if(i===Fl)return a.RED_INTEGER;if(i===Mu)return a.RG;if(i===Nl)return a.RG_INTEGER;if(i===Ol)return a.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===_a)if(l===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===js||i===Ks||i===Zs||i===Js)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===js)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ks)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Js)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Qs||i===$s)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qs)return l===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$s)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eo||i===to||i===no||i===io||i===ro||i===ao||i===so||i===oo||i===lo||i===co||i===uo||i===fo||i===ho||i===po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eo)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===to)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===no)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ro)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ao)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===so)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uo)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fo)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ho)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===mo||i===go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===va)return l===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yu||i===_o||i===vo||i===xo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===va)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qn?r?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:n}}class Pm extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dm={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,r),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Fr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
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

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new bt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,n=new Pn({extensions:{fragDepth:!0},vertexShader:Im,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Dt(new Qn(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Om extends Ri{constructor(e,t){super();const r=this;let n=null,i=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const _=new Nm,d=t.getContextAttributes();let p=null,y=null;const x=[],M=[],C=new Ke;let R=null;const E=new Bt;E.layers.enable(1),E.viewport=new nt;const O=new Bt;O.layers.enable(2),O.viewport=new nt;const Y=[E,O],v=new Pm;v.layers.enable(1),v.layers.enable(2);let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let N=x[F];return N===void 0&&(N=new Va,x[F]=N),N.getTargetRaySpace()},this.getControllerGrip=function(F){let N=x[F];return N===void 0&&(N=new Va,x[F]=N),N.getGripSpace()},this.getHand=function(F){let N=x[F];return N===void 0&&(N=new Va,x[F]=N),N.getHandSpace()};function z(F){const N=M.indexOf(F.inputSource);if(N===-1)return;const Q=x[N];Q!==void 0&&(Q.update(F.inputSource,F.frame,c||o),Q.dispatchEvent({type:F.type,data:F.inputSource}))}function b(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",b),n.removeEventListener("inputsourceschange",H);for(let F=0;F<x.length;F++){const N=M[F];N!==null&&(M[F]=null,x[F].disconnect(N))}w=null,P=null,_.reset(),e.setRenderTarget(p),m=null,h=null,f=null,n=null,y=null,W.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){i=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",b),n.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:n.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(n,t,N),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Jn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let N=null,Q=null,J=null;d.depth&&(J=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=d.stencil?Ai:jn,Q=d.stencil?qn:Rn);const ee={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:i};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer(ee),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Jn(h.textureWidth,h.textureHeight,{format:nn,type:Un,depthTexture:new ic(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const se=e.properties.get(y);se.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),W.setContext(n),W.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function H(F){for(let N=0;N<F.removed.length;N++){const Q=F.removed[N],J=M.indexOf(Q);J>=0&&(M[J]=null,x[J].disconnect(Q))}for(let N=0;N<F.added.length;N++){const Q=F.added[N];let J=M.indexOf(Q);if(J===-1){for(let se=0;se<x.length;se++)if(se>=M.length){M.push(Q),J=se;break}else if(M[se]===null){M[se]=Q,J=se;break}if(J===-1)break}const ee=x[J];ee&&ee.connect(Q)}}const B=new j,Z=new j;function K(F,N,Q){B.setFromMatrixPosition(N.matrixWorld),Z.setFromMatrixPosition(Q.matrixWorld);const J=B.distanceTo(Z),ee=N.projectionMatrix.elements,se=Q.projectionMatrix.elements,ye=ee[14]/(ee[10]-1),le=ee[14]/(ee[10]+1),I=(ee[9]+1)/ee[5],Ne=(ee[9]-1)/ee[5],ge=(ee[8]-1)/ee[0],Se=(se[8]+1)/se[0],de=ye*ge,Pe=ye*Se,ue=J/(-ge+Se),T=ue*-ge;N.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(T),F.translateZ(ue),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const S=ye+ue,D=le+ue,te=de-T,X=Pe+(J-T),$=I*le/D*S,oe=Ne*le/D*S;F.projectionMatrix.makePerspective(te,X,$,oe,S,D),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function V(F,N){N===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(N.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),v.near=O.near=E.near=F.near,v.far=O.far=E.far=F.far,(w!==v.near||P!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,P=v.far,E.near=w,E.far=P,O.near=w,O.far=P,E.updateProjectionMatrix(),O.updateProjectionMatrix(),F.updateProjectionMatrix());const N=F.parent,Q=v.cameras;V(v,N);for(let J=0;J<Q.length;J++)V(Q[J],N);Q.length===2?K(v,E,O):v.projectionMatrix.copy(E.projectionMatrix),k(F,v,N)};function k(F,N,Q){Q===null?F.matrix.copy(N.matrixWorld):(F.matrix.copy(Q.matrixWorld),F.matrix.invert(),F.matrix.multiply(N.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(N.projectionMatrix),F.projectionMatrixInverse.copy(N.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=is*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null};let L=null;function G(F,N){if(u=N.getViewerPose(c||o),g=N,u!==null){const Q=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let J=!1;Q.length!==v.cameras.length&&(v.cameras.length=0,J=!0);for(let se=0;se<Q.length;se++){const ye=Q[se];let le=null;if(m!==null)le=m.getViewport(ye);else{const Ne=f.getViewSubImage(h,ye);le=Ne.viewport,se===0&&(e.setRenderTargetTextures(y,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(y))}let I=Y[se];I===void 0&&(I=new Bt,I.layers.enable(se),I.viewport=new nt,Y[se]=I),I.matrix.fromArray(ye.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ye.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(le.x,le.y,le.width,le.height),se===0&&(v.matrix.copy(I.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),J===!0&&v.cameras.push(I)}const ee=n.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const se=f.getDepthInformation(Q[0]);se&&se.isValid&&se.texture&&_.init(e,se,n.renderState)}}for(let Q=0;Q<x.length;Q++){const J=M[Q],ee=x[Q];J!==null&&ee!==void 0&&ee.update(J,N,c||o)}_.render(e,v),L&&L(F,N),N.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:N}),g=null}const W=new tc;W.setAnimationLoop(G),this.setAnimationLoop=function(F){L=F},this.dispose=function(){}}}function Bm(a,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function r(d,p){p.color.getRGB(d.fogColor.value,Jl(a)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),f(d,p)):p.isMeshPhongMaterial?(i(d,p),u(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,M)):p.isMeshMatcapMaterial?(i(d,p),g(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),_(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&s(d,p)):p.isPointsMaterial?l(d,p,y,x):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Tt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Tt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(d.envMap.value=y,d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const x=a._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function s(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=x*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const y=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Gm(a,e,t,r){let n={},i={},o=[];const s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const M=x.program;r.uniformBlockBinding(y,M)}function c(y,x){let M=n[y.id];M===void 0&&(g(y),M=u(y),n[y.id]=M,y.addEventListener("dispose",d));const C=x.program;r.updateUBOMapping(y,C);const R=e.render.frame;i[y.id]!==R&&(h(y),i[y.id]=R)}function u(y){const x=f();y.__bindingPointIndex=x;const M=a.createBuffer(),C=y.__size,R=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,C,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=n[y.id],M=y.uniforms,C=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let R=0,E=M.length;R<E;R++){const O=Array.isArray(M[R])?M[R]:[M[R]];for(let Y=0,v=O.length;Y<v;Y++){const w=O[Y];if(m(w,R,Y,C)===!0){const P=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let b=0;for(let H=0;H<z.length;H++){const B=z[H],Z=_(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,P+b,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,b),b+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,P,w.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function m(y,x,M,C){const R=y.value,E=x+"_"+M;if(C[E]===void 0)return typeof R=="number"||typeof R=="boolean"?C[E]=R:C[E]=R.clone(),!0;{const O=C[E];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return C[E]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(y){const x=y.uniforms;let M=0;const C=16;for(let E=0,O=x.length;E<O;E++){const Y=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,w=Y.length;v<w;v++){const P=Y[v],z=Array.isArray(P.value)?P.value:[P.value];for(let b=0,H=z.length;b<H;b++){const B=z[b],Z=_(B),K=M%C;K!==0&&C-K<Z.boundary&&(M+=C-K),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=Z.storage}}}const R=M%C;return R>0&&(M+=C-R),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(y){const x=y.target;x.removeEventListener("dispose",d);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),a.deleteBuffer(n[x.id]),delete n[x.id],delete i[x.id]}function p(){for(const y in n)a.deleteBuffer(n[y]);o=[],n={},i={}}return{bind:l,update:c,dispose:p}}class fc{constructor(e={}){const{canvas:t=Iu(),context:r=null,depth:n=!0,stencil:i=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let M=!1,C=0,R=0,E=null,O=-1,Y=null;const v=new nt,w=new nt;let P=null;const z=new Je(0);let b=0,H=t.width,B=t.height,Z=1,K=null,V=null;const k=new nt(0,0,H,B),L=new nt(0,0,H,B);let G=!1;const W=new ms;let F=!1,N=!1,Q=null;const J=new lt,ee=new Ke,se=new j,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return E===null?Z:1}let I=r;function Ne(A,q){for(let ie=0;ie<A.length;ie++){const re=A[ie],ne=t.getContext(re,q);if(ne!==null)return ne}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hs}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Me,!1),I===null){const q=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&q.shift(),I=Ne(q,A),I===null)throw Ne(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,Se,de,Pe,ue,T,S,D,te,X,$,oe,me,ce,_e,Ee,ae,Ie,Ue,Te,ve,fe,we,Oe;function qe(){ge=new jd(I),Se=new Hd(I,ge,e),ge.init(Se),fe=new Um(I,ge,Se),de=new Cm(I,ge,Se),Pe=new Jd(I),ue=new _m,T=new Lm(I,ge,de,ue,Se,fe,Pe),S=new Wd(x),D=new qd(x),te=new af(I,Se),we=new kd(I,ge,te,Se),X=new Kd(I,te,Pe,we),$=new tp(I,X,te,Pe),Ue=new ep(I,Se,T),Ee=new Vd(ue),oe=new gm(x,S,D,ge,Se,we,Ee),me=new Bm(x,ue),ce=new xm,_e=new bm(ge,Se),Ie=new Gd(x,S,D,de,$,h,l),ae=new Rm(x,$,Se),Oe=new Gm(I,Pe,Se,de),Te=new zd(I,ge,Pe,Se),ve=new Zd(I,ge,Pe,Se),Pe.programs=oe.programs,x.capabilities=Se,x.extensions=ge,x.properties=ue,x.renderLists=ce,x.shadowMap=ae,x.state=de,x.info=Pe}qe();const De=new Om(x,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(H,B,!1))},this.getSize=function(A){return A.set(H,B)},this.setSize=function(A,q,ie=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,B=q,t.width=Math.floor(A*Z),t.height=Math.floor(q*Z),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(H*Z,B*Z).floor()},this.setDrawingBufferSize=function(A,q,ie){H=A,B=q,Z=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(k)},this.setViewport=function(A,q,ie,re){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,q,ie,re),de.viewport(v.copy(k).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(L)},this.setScissor=function(A,q,ie,re){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,q,ie,re),de.scissor(w.copy(L).multiplyScalar(Z).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){de.setScissorTest(G=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(A=!0,q=!0,ie=!0){let re=0;if(A){let ne=!1;if(E!==null){const Re=E.texture.format;ne=Re===Ol||Re===Nl||Re===Fl}if(ne){const Re=E.texture.type,Fe=Re===Un||Re===Rn||Re===ds||Re===qn||Re===Dl||Re===Il,Ge=Ie.getClearColor(),pe=Ie.getClearAlpha(),ze=Ge.r,He=Ge.g,ke=Ge.b;Fe?(m[0]=ze,m[1]=He,m[2]=ke,m[3]=pe,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=ze,g[1]=He,g[2]=ke,g[3]=pe,I.clearBufferiv(I.COLOR,0,g))}else re|=I.COLOR_BUFFER_BIT}q&&(re|=I.DEPTH_BUFFER_BIT),ie&&(re|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ce.dispose(),_e.dispose(),ue.dispose(),S.dispose(),D.dispose(),$.dispose(),we.dispose(),Oe.dispose(),oe.dispose(),De.dispose(),De.removeEventListener("sessionstart",Qe),De.removeEventListener("sessionend",Ve),Q&&(Q.dispose(),Q=null),Ze.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Pe.autoReset,q=ae.enabled,ie=ae.autoUpdate,re=ae.needsUpdate,ne=ae.type;qe(),Pe.autoReset=A,ae.enabled=q,ae.autoUpdate=ie,ae.needsUpdate=re,ae.type=ne}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const q=A.target;q.removeEventListener("dispose",he),xe(q)}function xe(A){Ce(A),ue.remove(A)}function Ce(A){const q=ue.get(A).programs;q!==void 0&&(q.forEach(function(ie){oe.releaseProgram(ie)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,re,ne,Re){q===null&&(q=ye);const Fe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ge=or(A,q,ie,re,ne);de.setMaterial(re,Fe);let pe=ie.index,ze=1;if(re.wireframe===!0){if(pe=X.getWireframeAttribute(ie),pe===void 0)return;ze=2}const He=ie.drawRange,ke=ie.attributes.position;let tt=He.start*ze,_t=(He.start+He.count)*ze;Re!==null&&(tt=Math.max(tt,Re.start*ze),_t=Math.min(_t,(Re.start+Re.count)*ze)),pe!==null?(tt=Math.max(tt,0),_t=Math.min(_t,pe.count)):ke!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,ke.count));const ot=_t-tt;if(ot<0||ot===1/0)return;we.setup(ne,re,Ge,ie,pe);let wt,$e=Te;if(pe!==null&&(wt=te.get(pe),$e=ve,$e.setIndex(wt)),ne.isMesh)re.wireframe===!0?(de.setLineWidth(re.wireframeLinewidth*le()),$e.setMode(I.LINES)):$e.setMode(I.TRIANGLES);else if(ne.isLine){let Xe=re.linewidth;Xe===void 0&&(Xe=1),de.setLineWidth(Xe*le()),ne.isLineSegments?$e.setMode(I.LINES):ne.isLineLoop?$e.setMode(I.LINE_LOOP):$e.setMode(I.LINE_STRIP)}else ne.isPoints?$e.setMode(I.POINTS):ne.isSprite&&$e.setMode(I.TRIANGLES);if(ne.isBatchedMesh)$e.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)$e.renderInstances(tt,ot,ne.count);else if(ie.isInstancedBufferGeometry){const Xe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,xn=Math.min(ie.instanceCount,Xe);$e.renderInstances(tt,ot,xn)}else $e.render(tt,ot)};function Be(A,q,ie){A.transparent===!0&&A.side===en&&A.forceSinglePass===!1?(A.side=Tt,A.needsUpdate=!0,At(A,q,ie),A.side=_n,A.needsUpdate=!0,At(A,q,ie),A.side=en):At(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),d=_e.get(ie),d.init(),y.push(d),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),A!==ie&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),d.setupLights(x._useLegacyLights);const re=new Set;return A.traverse(function(ne){const Re=ne.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){const Ge=Re[Fe];Be(Ge,ie,ne),re.add(Ge)}else Be(Re,ie,ne),re.add(Re)}),y.pop(),d=null,re},this.compileAsync=function(A,q,ie=null){const re=this.compile(A,q,ie);return new Promise(ne=>{function Re(){if(re.forEach(function(Fe){ue.get(Fe).currentProgram.isReady()&&re.delete(Fe)}),re.size===0){ne(A);return}setTimeout(Re,10)}ge.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Le=null;function We(A){Le&&Le(A)}function Qe(){Ze.stop()}function Ve(){Ze.start()}const Ze=new tc;Ze.setAnimationLoop(We),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(A){Le=A,De.setAnimationLoop(A),A===null?Ze.stop():Ze.start()},De.addEventListener("sessionstart",Qe),De.addEventListener("sessionend",Ve),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,q,E),d=_e.get(A,y.length),d.init(),y.push(d),J.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W.setFromProjectionMatrix(J),N=this.localClippingEnabled,F=Ee.init(this.clippingPlanes,N),_=ce.get(A,p.length),_.init(),p.push(_),st(A,q,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,V),this.info.render.frame++,F===!0&&Ee.beginShadows();const ie=d.state.shadowsArray;if(ae.render(ie,A,q),F===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1)&&Ie.render(_,A),d.setupLights(x._useLegacyLights),q.isArrayCamera){const re=q.cameras;for(let ne=0,Re=re.length;ne<Re;ne++){const Fe=re[ne];Wt(_,A,Fe,Fe.viewport)}}else Wt(_,A,q);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,q),we.resetDefaultState(),O=-1,Y=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function st(A,q,ie,re){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){re&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const Fe=$.update(A),Ge=A.material;Ge.visible&&_.push(A,Fe,Ge,ie,se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const Fe=$.update(A),Ge=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),se.copy(Fe.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Ge)){const pe=Fe.groups;for(let ze=0,He=pe.length;ze<He;ze++){const ke=pe[ze],tt=Ge[ke.materialIndex];tt&&tt.visible&&_.push(A,Fe,tt,ie,se.z,ke)}}else Ge.visible&&_.push(A,Fe,Ge,ie,se.z,null)}}const Re=A.children;for(let Fe=0,Ge=Re.length;Fe<Ge;Fe++)st(Re[Fe],q,ie,re)}function Wt(A,q,ie,re){const ne=A.opaque,Re=A.transmissive,Fe=A.transparent;d.setupLightsView(ie),F===!0&&Ee.setGlobalState(x.clippingPlanes,ie),Re.length>0&&Xt(ne,Re,q,ie),re&&de.viewport(v.copy(re)),ne.length>0&&It(ne,q,ie),Re.length>0&&It(Re,q,ie),Fe.length>0&&It(Fe,q,ie),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Xt(A,q,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const Re=Se.isWebGL2;Q===null&&(Q=new Jn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?$i:Un,minFilter:Xn,samples:Re?4:0})),x.getDrawingBufferSize(ee),Re?Q.setSize(ee.x,ee.y):Q.setSize(rs(ee.x),rs(ee.y));const Fe=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(z),b=x.getClearAlpha(),b<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=Ln,It(A,ie,re),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q);let pe=!1;for(let ze=0,He=q.length;ze<He;ze++){const ke=q[ze],tt=ke.object,_t=ke.geometry,ot=ke.material,wt=ke.group;if(ot.side===en&&tt.layers.test(re.layers)){const $e=ot.side;ot.side=Tt,ot.needsUpdate=!0,an(tt,ie,re,_t,ot,wt),ot.side=$e,ot.needsUpdate=!0,pe=!0}}pe===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q)),x.setRenderTarget(Fe),x.setClearColor(z,b),x.toneMapping=Ge}function It(A,q,ie){const re=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Re=A.length;ne<Re;ne++){const Fe=A[ne],Ge=Fe.object,pe=Fe.geometry,ze=re===null?Fe.material:re,He=Fe.group;Ge.layers.test(ie.layers)&&an(Ge,q,ie,pe,ze,He)}}function an(A,q,ie,re,ne,Re){A.onBeforeRender(x,q,ie,re,ne,Re),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(x,q,ie,re,A,Re),ne.transparent===!0&&ne.side===en&&ne.forceSinglePass===!1?(ne.side=Tt,ne.needsUpdate=!0,x.renderBufferDirect(ie,q,re,ne,A,Re),ne.side=_n,ne.needsUpdate=!0,x.renderBufferDirect(ie,q,re,ne,A,Re),ne.side=en):x.renderBufferDirect(ie,q,re,ne,A,Re),A.onAfterRender(x,q,ie,re,ne,Re)}function At(A,q,ie){q.isScene!==!0&&(q=ye);const re=ue.get(A),ne=d.state.lights,Re=d.state.shadowsArray,Fe=ne.state.version,Ge=oe.getParameters(A,ne.state,Re,q,ie),pe=oe.getProgramCacheKey(Ge);let ze=re.programs;re.environment=A.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(A.isMeshStandardMaterial?D:S).get(A.envMap||re.environment),ze===void 0&&(A.addEventListener("dispose",he),ze=new Map,re.programs=ze);let He=ze.get(pe);if(He!==void 0){if(re.currentProgram===He&&re.lightsStateVersion===Fe)return sn(A,Ge),He}else Ge.uniforms=oe.getUniforms(A),A.onBuild(ie,Ge,x),A.onBeforeCompile(Ge,x),He=oe.acquireProgram(Ge,pe),ze.set(pe,He),re.uniforms=Ge.uniforms;const ke=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Ee.uniform),sn(A,Ge),re.needsLights=ta(A),re.lightsStateVersion=Fe,re.needsLights&&(ke.ambientLightColor.value=ne.state.ambient,ke.lightProbe.value=ne.state.probe,ke.directionalLights.value=ne.state.directional,ke.directionalLightShadows.value=ne.state.directionalShadow,ke.spotLights.value=ne.state.spot,ke.spotLightShadows.value=ne.state.spotShadow,ke.rectAreaLights.value=ne.state.rectArea,ke.ltc_1.value=ne.state.rectAreaLTC1,ke.ltc_2.value=ne.state.rectAreaLTC2,ke.pointLights.value=ne.state.point,ke.pointLightShadows.value=ne.state.pointShadow,ke.hemisphereLights.value=ne.state.hemi,ke.directionalShadowMap.value=ne.state.directionalShadowMap,ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ke.spotShadowMap.value=ne.state.spotShadowMap,ke.spotLightMatrix.value=ne.state.spotLightMatrix,ke.spotLightMap.value=ne.state.spotLightMap,ke.pointShadowMap.value=ne.state.pointShadowMap,ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=He,re.uniformsList=null,He}function ht(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=kr.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function sn(A,q){const ie=ue.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function or(A,q,ie,re,ne){q.isScene!==!0&&(q=ye),T.resetTextureUnits();const Re=q.fog,Fe=re.isMeshStandardMaterial?q.environment:null,Ge=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:vn,pe=(re.isMeshStandardMaterial?D:S).get(re.envMap||Fe),ze=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,He=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),ke=!!ie.morphAttributes.position,tt=!!ie.morphAttributes.normal,_t=!!ie.morphAttributes.color;let ot=Ln;re.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ot=x.toneMapping);const wt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,$e=wt!==void 0?wt.length:0,Xe=ue.get(re),xn=d.state.lights;if(F===!0&&(N===!0||A!==Y)){const vt=A===Y&&re.id===O;Ee.setState(re,A,vt)}let it=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==xn.state.version||Xe.outputColorSpace!==Ge||ne.isBatchedMesh&&Xe.batching===!1||!ne.isBatchedMesh&&Xe.batching===!0||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||ne.isInstancedMesh&&Xe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Xe.instancingColor===!1&&ne.instanceColor!==null||Xe.envMap!==pe||re.fog===!0&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ee.numPlanes||Xe.numIntersection!==Ee.numIntersection)||Xe.vertexAlphas!==ze||Xe.vertexTangents!==He||Xe.morphTargets!==ke||Xe.morphNormals!==tt||Xe.morphColors!==_t||Xe.toneMapping!==ot||Se.isWebGL2===!0&&Xe.morphTargetsCount!==$e)&&(it=!0):(it=!0,Xe.__version=re.version);let Yt=Xe.currentProgram;it===!0&&(Yt=At(re,q,ne));let Di=!1,qt=!1,Dn=!1;const at=Yt.getUniforms(),jt=Xe.uniforms;if(de.useProgram(Yt.program)&&(Di=!0,qt=!0,Dn=!0),re.id!==O&&(O=re.id,qt=!0),Di||Y!==A){at.setValue(I,"projectionMatrix",A.projectionMatrix),at.setValue(I,"viewMatrix",A.matrixWorldInverse);const vt=at.map.cameraPosition;vt!==void 0&&vt.setValue(I,se.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&at.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,qt=!0,Dn=!0)}if(ne.isSkinnedMesh){at.setOptional(I,ne,"bindMatrix"),at.setOptional(I,ne,"bindMatrixInverse");const vt=ne.skeleton;vt&&(Se.floatVertexTextures?(vt.boneTexture===null&&vt.computeBoneTexture(),at.setValue(I,"boneTexture",vt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(at.setOptional(I,ne,"batchingTexture"),at.setValue(I,"batchingTexture",ne._matricesTexture,T));const In=ie.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0&&Se.isWebGL2===!0)&&Ue.update(ne,ie,Yt),(qt||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,at.setValue(I,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(jt.envMap.value=pe,jt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),qt&&(at.setValue(I,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Pi(jt,Dn),Re&&re.fog===!0&&me.refreshFogUniforms(jt,Re),me.refreshMaterialUniforms(jt,re,Z,B,Q),kr.upload(I,ht(Xe),jt,T)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(kr.upload(I,ht(Xe),jt,T),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&at.setValue(I,"center",ne.center),at.setValue(I,"modelViewMatrix",ne.modelViewMatrix),at.setValue(I,"normalMatrix",ne.normalMatrix),at.setValue(I,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const vt=re.uniformsGroups;for(let Rt=0,na=vt.length;Rt<na;Rt++)if(Se.isWebGL2){const Fn=vt[Rt];Oe.update(Fn,Yt),Oe.bind(Fn,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function Pi(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function ta(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,q,ie){ue.get(A.texture).__webglTexture=q,ue.get(A.depthTexture).__webglTexture=ie;const re=ue.get(A);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,q){const ie=ue.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ie=0){E=A,C=q,R=ie;let re=!0,ne=null,Re=!1,Fe=!1;if(A){const pe=ue.get(A);pe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(I.FRAMEBUFFER,null),re=!1):pe.__webglFramebuffer===void 0?T.setupRenderTarget(A):pe.__hasExternalTextures&&T.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Fe=!0);const He=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[q])?ne=He[q][ie]:ne=He[q],Re=!0):Se.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?ne=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?ne=He[ie]:ne=He,v.copy(A.viewport),w.copy(A.scissor),P=A.scissorTest}else v.copy(k).multiplyScalar(Z).floor(),w.copy(L).multiplyScalar(Z).floor(),P=G;if(de.bindFramebuffer(I.FRAMEBUFFER,ne)&&Se.drawBuffers&&re&&de.drawBuffers(A,ne),de.viewport(v),de.scissor(w),de.setScissorTest(P),Re){const pe=ue.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe.__webglTexture,ie)}else if(Fe){const pe=ue.get(A.texture),ze=q||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.__webglTexture,ie||0,ze)}O=-1},this.readRenderTargetPixels=function(A,q,ie,re,ne,Re,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){de.bindFramebuffer(I.FRAMEBUFFER,Ge);try{const pe=A.texture,ze=pe.format,He=pe.type;if(ze!==nn&&fe.convert(ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=He===$i&&(ge.has("EXT_color_buffer_half_float")||Se.isWebGL2&&ge.has("EXT_color_buffer_float"));if(He!==Un&&fe.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===mn&&(Se.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-re&&ie>=0&&ie<=A.height-ne&&I.readPixels(q,ie,re,ne,fe.convert(ze),fe.convert(He),Re)}finally{const pe=E!==null?ue.get(E).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(A,q,ie=0){const re=Math.pow(2,-ie),ne=Math.floor(q.image.width*re),Re=Math.floor(q.image.height*re);T.setTexture2D(q,0),I.copyTexSubImage2D(I.TEXTURE_2D,ie,0,0,A.x,A.y,ne,Re),de.unbindTexture()},this.copyTextureToTexture=function(A,q,ie,re=0){const ne=q.image.width,Re=q.image.height,Fe=fe.convert(ie.format),Ge=fe.convert(ie.type);T.setTexture2D(ie,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ie.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ie.unpackAlignment),q.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,re,A.x,A.y,ne,Re,Fe,Ge,q.image.data):q.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,re,A.x,A.y,q.mipmaps[0].width,q.mipmaps[0].height,Fe,q.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,re,A.x,A.y,Fe,Ge,q.image),re===0&&ie.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ie,re,ne=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,Fe=A.max.y-A.min.y+1,Ge=A.max.z-A.min.z+1,pe=fe.convert(re.format),ze=fe.convert(re.type);let He;if(re.isData3DTexture)T.setTexture3D(re,0),He=I.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)T.setTexture2DArray(re,0),He=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,re.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,re.unpackAlignment);const ke=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_t=I.getParameter(I.UNPACK_SKIP_PIXELS),ot=I.getParameter(I.UNPACK_SKIP_ROWS),wt=I.getParameter(I.UNPACK_SKIP_IMAGES),$e=ie.isCompressedTexture?ie.mipmaps[ne]:ie.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,$e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),ie.isDataTexture||ie.isData3DTexture?I.texSubImage3D(He,ne,q.x,q.y,q.z,Re,Fe,Ge,pe,ze,$e.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(He,ne,q.x,q.y,q.z,Re,Fe,Ge,pe,$e.data)):I.texSubImage3D(He,ne,q.x,q.y,q.z,Re,Fe,Ge,pe,ze,$e),I.pixelStorei(I.UNPACK_ROW_LENGTH,ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt),ne===0&&re.generateMipmaps&&I.generateMipmap(He),de.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){C=0,R=0,E=null,de.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ps?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Jr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?Kn:Gl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?pt:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class km extends fc{}km.prototype.isWebGL1Renderer=!0;class _s{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=r}clone(){return new _s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Hm extends Gt{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class hc extends ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ul=new lt,ss=new Yl,Nr=new nr,Or=new j;class Vm extends gt{constructor(e=new Ht,t=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nr.copy(r.boundingSphere),Nr.applyMatrix4(n),Nr.radius+=i,e.ray.intersectsSphere(Nr)===!1)return;ul.copy(n).invert(),ss.copy(e.ray).applyMatrix4(ul);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=r.index,f=r.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,_=m;g<_;g++){const d=c.getX(g);Or.fromBufferAttribute(f,d),fl(Or,d,l,n,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,_=m;g<_;g++)Or.fromBufferAttribute(f,g),fl(Or,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function fl(a,e,t,r,n,i,o){const s=ss.distanceSqToPoint(a);if(s<t){const l=new j;ss.closestPointToPoint(a,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;i.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class vs extends Ht{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(o+s,Math.PI);let c=0;const u=[],f=new j,h=new j,m=[],g=[],_=[],d=[];for(let p=0;p<=r;p++){const y=[],x=p/r;let M=0;p===0&&o===0?M=.5/t:p===r&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const R=C/t;f.x=-e*Math.cos(n+R*i)*Math.sin(o+x*s),f.y=e*Math.cos(o+x*s),f.z=e*Math.sin(n+R*i)*Math.sin(o+x*s),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),d.push(R+M,1-x),y.push(c++)}u.push(y)}for(let p=0;p<r;p++)for(let y=0;y<t;y++){const x=u[p][y+1],M=u[p][y],C=u[p+1][y],R=u[p+1][y+1];(p!==0||o>0)&&m.push(x,M,R),(p!==r-1||l<Math.PI)&&m.push(M,C,R)}this.setIndex(m),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xs extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wa=new lt,hl=new j,dl=new j;class dc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dl),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pl=new lt,ji=new j,Xa=new j;class Wm extends dc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),ji.setFromMatrixPosition(e.matrixWorld),r.position.copy(ji),Xa.copy(r.position),Xa.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Xa),r.updateMatrixWorld(),n.makeTranslation(-ji.x,-ji.y,-ji.z),pl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl)}}class Xm extends xs{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new Wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ym extends dc{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pc extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Ym}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qm extends xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jm extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hs);function Km(){var a=Object.create(null);function e(n,i){var o=n.id,s=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(m){if(m instanceof Error)throw m}),h=a[h.id].value),h}),c=r("<"+s+">.init",c),u&&(u=r("<"+s+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[o]={id:o,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var o,s=n.id,l=n.args;(!a[s]||typeof a[s].value!="function")&&i(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var c=(o=a[s]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=a[s].getTransferables&&a[s].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(m){console.error(m),i(m)}}}function r(n,i){var o=void 0;self.troikaDefine=function(l){return o=l};var s=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(l){console.error(l)}return URL.revokeObjectURL(s),delete self.troikaDefine,o}self.addEventListener("message",function(n){var i=n.data,o=i.messageId,s=i.action,l=i.data;try{s==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),s==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Zm(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var mc=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return mc=function(){return a},a},Jm=0,Qm=0,Ya=!1,Ji=Object.create(null),Qi=Object.create(null),os=Object.create(null);function Ui(a){if((!a||typeof a.init!="function")&&!Ya)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId;if(!mc())return Zm(a);n==null&&(n="#default");var i="workerModule"+ ++Jm,o=a.name||i,s=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Ya=!0,c=Ui({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+zr(c)+`
)}`}),Ya=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!s){s=ml(n,"registerModule",l.workerModuleData);var f=function(){s=null,Qi[n].delete(f)};(Qi[n]||(Qi[n]=new Set)).add(f)}return s.then(function(h){var m=h.isCallable;if(m)return ml(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:o,dependencies:e,init:zr(t),getTransferables:r&&zr(r)},l}function $m(a){Qi[a]&&Qi[a].forEach(function(e){e()}),Ji[a]&&(Ji[a].terminate(),delete Ji[a])}function zr(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function eg(a){var e=Ji[a];if(!e){var t=zr(Km);e=Ji[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,o=os[i];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete os[i],o(n)}}return e}function ml(a,e,t){return new Promise(function(r,n){var i=++Qm;os[i]=function(o){o.success?r(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},eg(a).postMessage({messageId:i,action:e,data:t})})}function gc(){var a=function(e){function t(V,k,L,G,W,F,N,Q){var J=1-N;Q.x=J*J*V+2*J*N*L+N*N*W,Q.y=J*J*k+2*J*N*G+N*N*F}function r(V,k,L,G,W,F,N,Q,J,ee){var se=1-J;ee.x=se*se*se*V+3*se*se*J*L+3*se*J*J*W+J*J*J*N,ee.y=se*se*se*k+3*se*se*J*G+3*se*J*J*F+J*J*J*Q}function n(V,k){for(var L=/([MLQCZ])([^MLQCZ]*)/g,G,W,F,N,Q;G=L.exec(V);){var J=G[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ee){return parseFloat(ee)});switch(G[1]){case"M":N=W=J[0],Q=F=J[1];break;case"L":(J[0]!==N||J[1]!==Q)&&k("L",N,Q,N=J[0],Q=J[1]);break;case"Q":{k("Q",N,Q,N=J[2],Q=J[3],J[0],J[1]);break}case"C":{k("C",N,Q,N=J[4],Q=J[5],J[0],J[1],J[2],J[3]);break}case"Z":(N!==W||Q!==F)&&k("L",N,Q,W,F);break}}}function i(V,k,L){L===void 0&&(L=16);var G={x:0,y:0};n(V,function(W,F,N,Q,J,ee,se,ye,le){switch(W){case"L":k(F,N,Q,J);break;case"Q":{for(var I=F,Ne=N,ge=1;ge<L;ge++)t(F,N,ee,se,Q,J,ge/(L-1),G),k(I,Ne,G.x,G.y),I=G.x,Ne=G.y;break}case"C":{for(var Se=F,de=N,Pe=1;Pe<L;Pe++)r(F,N,ee,se,ye,le,Q,J,Pe/(L-1),G),k(Se,de,G.x,G.y),Se=G.x,de=G.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,k){var L=V.getContext?V.getContext("webgl",c):V,G=l.get(L);if(!G){let Se=function(D){var te=F[D];if(!te&&(te=F[D]=L.getExtension(D),!te))throw new Error(D+" not supported");return te},de=function(D,te){var X=L.createShader(te);return L.shaderSource(X,D),L.compileShader(X),X},Pe=function(D,te,X,$){if(!N[D]){var oe={},me={},ce=L.createProgram();L.attachShader(ce,de(te,L.VERTEX_SHADER)),L.attachShader(ce,de(X,L.FRAGMENT_SHADER)),L.linkProgram(ce),N[D]={program:ce,transaction:function(Ee){L.useProgram(ce),Ee({setUniform:function(Ie,Ue){for(var Te=[],ve=arguments.length-2;ve-- >0;)Te[ve]=arguments[ve+2];var fe=me[Ue]||(me[Ue]=L.getUniformLocation(ce,Ue));L["uniform"+Ie].apply(L,[fe].concat(Te))},setAttribute:function(Ie,Ue,Te,ve,fe){var we=oe[Ie];we||(we=oe[Ie]={buf:L.createBuffer(),loc:L.getAttribLocation(ce,Ie),data:null}),L.bindBuffer(L.ARRAY_BUFFER,we.buf),L.vertexAttribPointer(we.loc,Ue,L.FLOAT,!1,0,0),L.enableVertexAttribArray(we.loc),W?L.vertexAttribDivisor(we.loc,ve):Se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(we.loc,ve),fe!==we.data&&(L.bufferData(L.ARRAY_BUFFER,fe,Te),we.data=fe)}})}}}N[D].transaction($)},ue=function(D,te){J++;try{L.activeTexture(L.TEXTURE0+J);var X=Q[D];X||(X=Q[D]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,X),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,X),te(X,J)}finally{J--}},T=function(D,te,X){var $=L.createFramebuffer();ee.push($),L.bindFramebuffer(L.FRAMEBUFFER,$),L.activeTexture(L.TEXTURE0+te),L.bindTexture(L.TEXTURE_2D,D),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,D,0);try{X($)}finally{L.deleteFramebuffer($),L.bindFramebuffer(L.FRAMEBUFFER,ee[--ee.length-1]||null)}},S=function(){F={},N={},Q={},J=-1,ee.length=0};var se=Se,ye=de,le=Pe,I=ue,Ne=T,ge=S,W=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,F={},N={},Q={},J=-1,ee=[];L.canvas.addEventListener("webglcontextlost",function(D){S(),D.preventDefault()},!1),l.set(L,G={gl:L,isWebGL2:W,getExtension:Se,withProgram:Pe,withTexture:ue,withTextureFramebuffer:T,handleContextLoss:S})}k(G)}function f(V,k,L,G,W,F,N,Q){N===void 0&&(N=15),Q===void 0&&(Q=null),u(V,function(J){var ee=J.gl,se=J.withProgram,ye=J.withTexture;ye("copy",function(le,I){ee.texImage2D(ee.TEXTURE_2D,0,ee.RGBA,W,F,0,ee.RGBA,ee.UNSIGNED_BYTE,k),se("copy",o,s,function(Ne){var ge=Ne.setUniform,Se=Ne.setAttribute;Se("aUV",2,ee.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),ge("1i","image",I),ee.bindFramebuffer(ee.FRAMEBUFFER,Q||null),ee.disable(ee.BLEND),ee.colorMask(N&8,N&4,N&2,N&1),ee.viewport(L,G,W,F),ee.scissor(L,G,W,F),ee.drawArrays(ee.TRIANGLES,0,3)})})})}function h(V,k,L){var G=V.width,W=V.height;u(V,function(F){var N=F.gl,Q=new Uint8Array(G*W*4);N.readPixels(0,0,G,W,N.RGBA,N.UNSIGNED_BYTE,Q),V.width=k,V.height=L,f(N,Q,0,0,G,W)})}var m=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(V,k,L,G,W,F){F===void 0&&(F=1);var N=new Uint8Array(V*k),Q=G[2]-G[0],J=G[3]-G[1],ee=[];i(L,function(Se,de,Pe,ue){ee.push({x1:Se,y1:de,x2:Pe,y2:ue,minX:Math.min(Se,Pe),minY:Math.min(de,ue),maxX:Math.max(Se,Pe),maxY:Math.max(de,ue)})}),ee.sort(function(Se,de){return Se.maxX-de.maxX});for(var se=0;se<V;se++)for(var ye=0;ye<k;ye++){var le=Ne(G[0]+Q*(se+.5)/V,G[1]+J*(ye+.5)/k),I=Math.pow(1-Math.abs(le)/W,F)/2;le<0&&(I=1-I),I=Math.max(0,Math.min(255,Math.round(I*255))),N[ye*V+se]=I}return N;function Ne(Se,de){for(var Pe=1/0,ue=1/0,T=ee.length;T--;){var S=ee[T];if(S.maxX+ue<=Se)break;if(Se+ue>S.minX&&de-ue<S.maxY&&de+ue>S.minY){var D=p(Se,de,S.x1,S.y1,S.x2,S.y2);D<Pe&&(Pe=D,ue=Math.sqrt(Pe))}}return ge(Se,de)&&(ue=-ue),ue}function ge(Se,de){for(var Pe=0,ue=ee.length;ue--;){var T=ee[ue];if(T.maxX<=Se)break;var S=T.y1>de!=T.y2>de&&Se<(T.x2-T.x1)*(de-T.y1)/(T.y2-T.y1)+T.x1;S&&(Pe+=T.y1<T.y2?1:-1)}return Pe!==0}}function _(V,k,L,G,W,F,N,Q,J,ee){F===void 0&&(F=1),Q===void 0&&(Q=0),J===void 0&&(J=0),ee===void 0&&(ee=0),d(V,k,L,G,W,F,N,null,Q,J,ee)}function d(V,k,L,G,W,F,N,Q,J,ee,se){F===void 0&&(F=1),J===void 0&&(J=0),ee===void 0&&(ee=0),se===void 0&&(se=0);for(var ye=g(V,k,L,G,W,F),le=new Uint8Array(ye.length*4),I=0;I<ye.length;I++)le[I*4+se]=ye[I];f(N,le,J,ee,V,k,1<<3-se,Q)}function p(V,k,L,G,W,F){var N=W-L,Q=F-G,J=N*N+Q*Q,ee=J?Math.max(0,Math.min(1,((V-L)*N+(k-G)*Q)/J)):0,se=V-(L+ee*N),ye=k-(G+ee*Q);return se*se+ye*ye}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:d}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",C="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",R=new Float32Array([0,0,2,0,0,2]),E=null,O=!1,Y={},v=new WeakMap;function w(V){if(!O&&!H(V))throw new Error("WebGL generation not supported")}function P(V,k,L,G,W,F,N){if(F===void 0&&(F=1),N===void 0&&(N=null),!N&&(N=E,!N)){var Q=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!Q)throw new Error("OffscreenCanvas or DOM canvas not supported");N=E=Q.getContext("webgl",{depth:!1})}w(N);var J=new Uint8Array(V*k*4);u(N,function(le){var I=le.gl,Ne=le.withTexture,ge=le.withTextureFramebuffer;Ne("readable",function(Se,de){I.texImage2D(I.TEXTURE_2D,0,I.RGBA,V,k,0,I.RGBA,I.UNSIGNED_BYTE,null),ge(Se,de,function(Pe){b(V,k,L,G,W,F,I,Pe,0,0,0),I.readPixels(0,0,V,k,I.RGBA,I.UNSIGNED_BYTE,J)})})});for(var ee=new Uint8Array(V*k),se=0,ye=0;se<J.length;se+=4)ee[ye++]=J[se];return ee}function z(V,k,L,G,W,F,N,Q,J,ee){F===void 0&&(F=1),Q===void 0&&(Q=0),J===void 0&&(J=0),ee===void 0&&(ee=0),b(V,k,L,G,W,F,N,null,Q,J,ee)}function b(V,k,L,G,W,F,N,Q,J,ee,se){F===void 0&&(F=1),J===void 0&&(J=0),ee===void 0&&(ee=0),se===void 0&&(se=0),w(N);var ye=[];i(L,function(le,I,Ne,ge){ye.push(le,I,Ne,ge)}),ye=new Float32Array(ye),u(N,function(le){var I=le.gl,Ne=le.isWebGL2,ge=le.getExtension,Se=le.withProgram,de=le.withTexture,Pe=le.withTextureFramebuffer,ue=le.handleContextLoss;if(de("rawDistances",function(T,S){(V!==T._lastWidth||k!==T._lastHeight)&&I.texImage2D(I.TEXTURE_2D,0,I.RGBA,T._lastWidth=V,T._lastHeight=k,0,I.RGBA,I.UNSIGNED_BYTE,null),Se("main",x,M,function(D){var te=D.setAttribute,X=D.setUniform,$=!Ne&&ge("ANGLE_instanced_arrays"),oe=!Ne&&ge("EXT_blend_minmax");te("aUV",2,I.STATIC_DRAW,0,R),te("aLineSegment",4,I.DYNAMIC_DRAW,1,ye),X.apply(void 0,["4f","uGlyphBounds"].concat(G)),X("1f","uMaxDistance",W),X("1f","uExponent",F),Pe(T,S,function(me){I.enable(I.BLEND),I.colorMask(!0,!0,!0,!0),I.viewport(0,0,V,k),I.scissor(0,0,V,k),I.blendFunc(I.ONE,I.ONE),I.blendEquationSeparate(I.FUNC_ADD,Ne?I.MAX:oe.MAX_EXT),I.clear(I.COLOR_BUFFER_BIT),Ne?I.drawArraysInstanced(I.TRIANGLES,0,3,ye.length/4):$.drawArraysInstancedANGLE(I.TRIANGLES,0,3,ye.length/4)})}),Se("post",o,C,function(D){D.setAttribute("aUV",2,I.STATIC_DRAW,0,R),D.setUniform("1i","tex",S),I.bindFramebuffer(I.FRAMEBUFFER,Q),I.disable(I.BLEND),I.colorMask(se===0,se===1,se===2,se===3),I.viewport(J,ee,V,k),I.scissor(J,ee,V,k),I.drawArrays(I.TRIANGLES,0,3)})}),I.isContextLost())throw ue(),new Error("webgl context lost")})}function H(V){var k=!V||V===E?Y:V.canvas||V,L=v.get(k);if(L===void 0){O=!0;var G=null;try{var W=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);L=F&&W.length===F.length&&F.every(function(N,Q){return N===W[Q]}),L||(G="bad trial run results",console.info(W,F))}catch(N){L=!1,G=N.message}G&&console.warn("WebGL SDF generation not supported:",G),O=!1,v.set(k,L)}return L}var B=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:z,generateIntoFramebuffer:b,isSupported:H});function Z(V,k,L,G,W,F){W===void 0&&(W=Math.max(G[2]-G[0],G[3]-G[1])/2),F===void 0&&(F=1);try{return P.apply(B,arguments)}catch(N){return console.info("WebGL SDF generation failed, falling back to JS",N),g.apply(y,arguments)}}function K(V,k,L,G,W,F,N,Q,J,ee){W===void 0&&(W=Math.max(G[2]-G[0],G[3]-G[1])/2),F===void 0&&(F=1),Q===void 0&&(Q=0),J===void 0&&(J=0),ee===void 0&&(ee=0);try{return z.apply(B,arguments)}catch(se){return console.info("WebGL SDF generation failed, falling back to JS",se),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=Z,e.generateIntoCanvas=K,e.javascript=y,e.pathToLineSegments=i,e.webgl=B,e.webglUtils=m,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function tg(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(ue,T){r[ue]=1<<T+1,n[r[ue]]=ue}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,o=r.L|r.R|r.AL,s=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function f(){if(!u){u=new Map;var ue=function(S){if(t.hasOwnProperty(S)){var D=0;t[S].split(",").forEach(function(te){var X=te.split("+"),$=X[0],oe=X[1];$=parseInt($,36),oe=oe?parseInt(oe,36):0,u.set(D+=$,r[S]);for(var me=0;me<oe;me++)u.set(++D,r[S])})}};for(var T in t)ue(T)}}function h(ue){return f(),u.get(ue.codePointAt(0))||r.L}function m(ue){return n[h(ue)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ue,T){var S=36,D=0,te=new Map,X=T&&new Map,$;return ue.split(",").forEach(function oe(me){if(me.indexOf("+")!==-1)for(var ce=+me;ce--;)oe($);else{$=me;var _e=me.split(">"),Ee=_e[0],ae=_e[1];Ee=String.fromCodePoint(D+=parseInt(Ee,S)),ae=String.fromCodePoint(D+=parseInt(ae,S)),te.set(Ee,ae),T&&X.set(ae,Ee)}}),{map:te,reverseMap:X}}var d,p,y;function x(){if(!d){var ue=_(g.pairs,!0),T=ue.map,S=ue.reverseMap;d=T,p=S,y=_(g.canonical,!1).map}}function M(ue){return x(),d.get(ue)||null}function C(ue){return x(),p.get(ue)||null}function R(ue){return x(),y.get(ue)||null}var E=r.L,O=r.R,Y=r.EN,v=r.ES,w=r.ET,P=r.AN,z=r.CS,b=r.B,H=r.S,B=r.ON,Z=r.BN,K=r.NSM,V=r.AL,k=r.LRO,L=r.RLO,G=r.LRE,W=r.RLE,F=r.PDF,N=r.LRI,Q=r.RLI,J=r.FSI,ee=r.PDI;function se(ue,T){for(var S=125,D=new Uint32Array(ue.length),te=0;te<ue.length;te++)D[te]=h(ue[te]);var X=new Map;function $(Ct,Zt){var Lt=D[Ct];D[Ct]=Zt,X.set(Lt,X.get(Lt)-1),Lt&s&&X.set(s,X.get(s)-1),X.set(Zt,(X.get(Zt)||0)+1),Zt&s&&X.set(s,(X.get(s)||0)+1)}for(var oe=new Uint8Array(ue.length),me=new Map,ce=[],_e=null,Ee=0;Ee<ue.length;Ee++)_e||ce.push(_e={start:Ee,end:ue.length-1,level:T==="rtl"?1:T==="ltr"?0:Gs(Ee,!1)}),D[Ee]&b&&(_e.end=Ee,_e=null);for(var ae=W|G|L|k|i|ee|F|b,Ie=function(Ct){return Ct+(Ct&1?1:2)},Ue=function(Ct){return Ct+(Ct&1?2:1)},Te=0;Te<ce.length;Te++){_e=ce[Te];var ve=[{_level:_e.level,_override:0,_isolate:0}],fe=void 0,we=0,Oe=0,qe=0;X.clear();for(var De=_e.start;De<=_e.end;De++){var Ae=D[De];if(fe=ve[ve.length-1],X.set(Ae,(X.get(Ae)||0)+1),Ae&s&&X.set(s,(X.get(s)||0)+1),Ae&ae)if(Ae&(W|G)){oe[De]=fe._level;var U=(Ae===W?Ue:Ie)(fe._level);U<=S&&!we&&!Oe?ve.push({_level:U,_override:0,_isolate:0}):we||Oe++}else if(Ae&(L|k)){oe[De]=fe._level;var Me=(Ae===L?Ue:Ie)(fe._level);Me<=S&&!we&&!Oe?ve.push({_level:Me,_override:Ae&L?O:E,_isolate:0}):we||Oe++}else if(Ae&i){Ae&J&&(Ae=Gs(De+1,!0)===1?Q:N),oe[De]=fe._level,fe._override&&$(De,fe._override);var he=(Ae===Q?Ue:Ie)(fe._level);he<=S&&we===0&&Oe===0?(qe++,ve.push({_level:he,_override:0,_isolate:1,_isolInitIndex:De})):we++}else if(Ae&ee){if(we>0)we--;else if(qe>0){for(Oe=0;!ve[ve.length-1]._isolate;)ve.pop();var xe=ve[ve.length-1]._isolInitIndex;xe!=null&&(me.set(xe,De),me.set(De,xe)),ve.pop(),qe--}fe=ve[ve.length-1],oe[De]=fe._level,fe._override&&$(De,fe._override)}else Ae&F?(we===0&&(Oe>0?Oe--:!fe._isolate&&ve.length>1&&(ve.pop(),fe=ve[ve.length-1])),oe[De]=fe._level):Ae&b&&(oe[De]=_e.level);else oe[De]=fe._level,fe._override&&Ae!==Z&&$(De,fe._override)}for(var Ce=[],Be=null,Le=_e.start;Le<=_e.end;Le++){var We=D[Le];if(!(We&l)){var Qe=oe[Le],Ve=We&i,Ze=We===ee;Be&&Qe===Be._level?(Be._end=Le,Be._endsWithIsolInit=Ve):Ce.push(Be={_start:Le,_end:Le,_level:Qe,_startsWithPDI:Ze,_endsWithIsolInit:Ve})}}for(var st=[],Wt=0;Wt<Ce.length;Wt++){var Xt=Ce[Wt];if(!Xt._startsWithPDI||Xt._startsWithPDI&&!me.has(Xt._start)){for(var It=[Be=Xt],an=void 0;Be&&Be._endsWithIsolInit&&(an=me.get(Be._end))!=null;)for(var At=Wt+1;At<Ce.length;At++)if(Ce[At]._start===an){It.push(Be=Ce[At]);break}for(var ht=[],sn=0;sn<It.length;sn++)for(var or=It[sn],Pi=or._start;Pi<=or._end;Pi++)ht.push(Pi);for(var ta=oe[ht[0]],A=_e.level,q=ht[0]-1;q>=0;q--)if(!(D[q]&l)){A=oe[q];break}var ie=ht[ht.length-1],re=oe[ie],ne=_e.level;if(!(D[ie]&i)){for(var Re=ie+1;Re<=_e.end;Re++)if(!(D[Re]&l)){ne=oe[Re];break}}st.push({_seqIndices:ht,_sosType:Math.max(A,ta)%2?O:E,_eosType:Math.max(ne,re)%2?O:E})}}for(var Fe=0;Fe<st.length;Fe++){var Ge=st[Fe],pe=Ge._seqIndices,ze=Ge._sosType,He=Ge._eosType,ke=oe[pe[0]]&1?O:E;if(X.get(K))for(var tt=0;tt<pe.length;tt++){var _t=pe[tt];if(D[_t]&K){for(var ot=ze,wt=tt-1;wt>=0;wt--)if(!(D[pe[wt]]&l)){ot=D[pe[wt]];break}$(_t,ot&(i|ee)?B:ot)}}if(X.get(Y))for(var $e=0;$e<pe.length;$e++){var Xe=pe[$e];if(D[Xe]&Y)for(var xn=$e-1;xn>=-1;xn--){var it=xn===-1?ze:D[pe[xn]];if(it&o){it===V&&$(Xe,P);break}}}if(X.get(V))for(var Yt=0;Yt<pe.length;Yt++){var Di=pe[Yt];D[Di]&V&&$(Di,O)}if(X.get(v)||X.get(z))for(var qt=1;qt<pe.length-1;qt++){var Dn=pe[qt];if(D[Dn]&(v|z)){for(var at=0,jt=0,In=qt-1;In>=0&&(at=D[pe[In]],!!(at&l));In--);for(var vt=qt+1;vt<pe.length&&(jt=D[pe[vt]],!!(jt&l));vt++);at===jt&&(D[Dn]===v?at===Y:at&(Y|P))&&$(Dn,at)}}if(X.get(Y))for(var Rt=0;Rt<pe.length;Rt++){var na=pe[Rt];if(D[na]&Y){for(var Fn=Rt-1;Fn>=0&&D[pe[Fn]]&(w|l);Fn--)$(pe[Fn],Y);for(Rt++;Rt<pe.length&&D[pe[Rt]]&(w|l|Y);Rt++)D[pe[Rt]]!==Y&&$(pe[Rt],Y)}}if(X.get(w)||X.get(v)||X.get(z))for(var Ii=0;Ii<pe.length;Ii++){var As=pe[Ii];if(D[As]&(w|v|z)){$(As,B);for(var lr=Ii-1;lr>=0&&D[pe[lr]]&l;lr--)$(pe[lr],B);for(var cr=Ii+1;cr<pe.length&&D[pe[cr]]&l;cr++)$(pe[cr],B)}}if(X.get(Y))for(var ia=0,ws=ze;ia<pe.length;ia++){var Rs=pe[ia],ra=D[Rs];ra&Y?ws===E&&$(Rs,E):ra&o&&(ws=ra)}if(X.get(s)){var Fi=O|Y|P,Cs=Fi|E,ur=[];{for(var $n=[],ei=0;ei<pe.length;ei++)if(D[pe[ei]]&s){var Ni=ue[pe[ei]],Ls=void 0;if(M(Ni)!==null)if($n.length<63)$n.push({char:Ni,seqIndex:ei});else break;else if((Ls=C(Ni))!==null)for(var Oi=$n.length-1;Oi>=0;Oi--){var aa=$n[Oi].char;if(aa===Ls||aa===C(R(Ni))||M(R(aa))===Ni){ur.push([$n[Oi].seqIndex,ei]),$n.length=Oi;break}}}ur.sort(function(Ct,Zt){return Ct[0]-Zt[0]})}for(var sa=0;sa<ur.length;sa++){for(var Us=ur[sa],fr=Us[0],oa=Us[1],Ps=!1,Kt=0,la=fr+1;la<oa;la++){var Ds=pe[la];if(D[Ds]&Cs){Ps=!0;var Is=D[Ds]&Fi?O:E;if(Is===ke){Kt=Is;break}}}if(Ps&&!Kt){Kt=ze;for(var ca=fr-1;ca>=0;ca--){var Fs=pe[ca];if(D[Fs]&Cs){var Ns=D[Fs]&Fi?O:E;Ns!==ke?Kt=Ns:Kt=ke;break}}}if(Kt){if(D[pe[fr]]=D[pe[oa]]=Kt,Kt!==ke){for(var Bi=fr+1;Bi<pe.length;Bi++)if(!(D[pe[Bi]]&l)){h(ue[pe[Bi]])&K&&(D[pe[Bi]]=Kt);break}}if(Kt!==ke){for(var Gi=oa+1;Gi<pe.length;Gi++)if(!(D[pe[Gi]]&l)){h(ue[pe[Gi]])&K&&(D[pe[Gi]]=Kt);break}}}}for(var Sn=0;Sn<pe.length;Sn++)if(D[pe[Sn]]&s){for(var Os=Sn,ua=Sn,fa=ze,ki=Sn-1;ki>=0;ki--)if(D[pe[ki]]&l)Os=ki;else{fa=D[pe[ki]]&Fi?O:E;break}for(var Bs=He,zi=Sn+1;zi<pe.length;zi++)if(D[pe[zi]]&(s|l))ua=zi;else{Bs=D[pe[zi]]&Fi?O:E;break}for(var ha=Os;ha<=ua;ha++)D[pe[ha]]=fa===Bs?fa:ke;Sn=ua}}}for(var Ft=_e.start;Ft<=_e.end;Ft++){var Dc=oe[Ft],hr=D[Ft];if(Dc&1?hr&(E|Y|P)&&oe[Ft]++:hr&O?oe[Ft]++:hr&(P|Y)&&(oe[Ft]+=2),hr&l&&(oe[Ft]=Ft===0?_e.level:oe[Ft-1]),Ft===_e.end||h(ue[Ft])&(H|b))for(var dr=Ft;dr>=0&&h(ue[dr])&c;dr--)oe[dr]=_e.level}}return{levels:oe,paragraphs:ce};function Gs(Ct,Zt){for(var Lt=Ct;Lt<ue.length;Lt++){var Mn=D[Lt];if(Mn&(O|V))return 1;if(Mn&(b|E)||Zt&&Mn===ee)return 0;if(Mn&i){var ks=Ic(Lt);Lt=ks===-1?ue.length:ks}}return 0}function Ic(Ct){for(var Zt=1,Lt=Ct+1;Lt<ue.length;Lt++){var Mn=D[Lt];if(Mn&b)break;if(Mn&ee){if(--Zt===0)return Lt}else Mn&i&&Zt++}return-1}}var ye="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",le;function I(){if(!le){var ue=_(ye,!0),T=ue.map,S=ue.reverseMap;S.forEach(function(D,te){T.set(te,D)}),le=T}}function Ne(ue){return I(),le.get(ue)||null}function ge(ue,T,S,D){var te=ue.length;S=Math.max(0,S==null?0:+S),D=Math.min(te-1,D==null?te-1:+D);for(var X=new Map,$=S;$<=D;$++)if(T[$]&1){var oe=Ne(ue[$]);oe!==null&&X.set($,oe)}return X}function Se(ue,T,S,D){var te=ue.length;S=Math.max(0,S==null?0:+S),D=Math.min(te-1,D==null?te-1:+D);var X=[];return T.paragraphs.forEach(function($){var oe=Math.max(S,$.start),me=Math.min(D,$.end);if(oe<me){for(var ce=T.levels.slice(oe,me+1),_e=me;_e>=oe&&h(ue[_e])&c;_e--)ce[_e]=$.level;for(var Ee=$.level,ae=1/0,Ie=0;Ie<ce.length;Ie++){var Ue=ce[Ie];Ue>Ee&&(Ee=Ue),Ue<ae&&(ae=Ue|1)}for(var Te=Ee;Te>=ae;Te--)for(var ve=0;ve<ce.length;ve++)if(ce[ve]>=Te){for(var fe=ve;ve+1<ce.length&&ce[ve+1]>=Te;)ve++;ve>fe&&X.push([fe+oe,ve+oe])}}}),X}function de(ue,T,S,D){var te=Pe(ue,T,S,D),X=[].concat(ue);return te.forEach(function($,oe){X[oe]=(T.levels[$]&1?Ne(ue[$]):null)||ue[$]}),X.join("")}function Pe(ue,T,S,D){for(var te=Se(ue,T,S,D),X=[],$=0;$<ue.length;$++)X[$]=$;return te.forEach(function(oe){for(var me=oe[0],ce=oe[1],_e=X.slice(me,ce+1),Ee=_e.length;Ee--;)X[ce-Ee]=_e[Ee]}),X}return e.closingToOpeningBracket=C,e.getBidiCharType=h,e.getBidiCharTypeName=m,e.getCanonicalBracket=R,e.getEmbeddingLevels=se,e.getMirroredCharacter=Ne,e.getMirroredCharactersMap=ge,e.getReorderSegments=Se,e.getReorderedIndices=Pe,e.getReorderedString=de,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const _c=/\bvoid\s+main\s*\(\s*\)\s*{/g;function ls(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ye[n];return i?ls(i):r}return a.replace(e,t)}const mt=[];for(let a=0;a<256;a++)mt[a]=(a<16?"0":"")+a.toString(16);function ng(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mt[a&255]+mt[a>>8&255]+mt[a>>16&255]+mt[a>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toUpperCase()}const kn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},ig=Date.now(),gl=new WeakMap,_l=new Map;let rg=1e10;function cs(a,e){const t=lg(e);let r=gl.get(a);if(r||gl.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=_l[f];if(!h){const m=ag(this,c,e,t);h=_l[f]=m}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,kn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-ig}}),this[n]&&this[n](c)},o=function(){return s(e.chained?a:a.clone())},s=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:rg++}),u.uuid=ng(),u.uniforms=kn({},c.uniforms,e.uniforms),u.defines=kn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=kn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(kn(this.extensions,c.extensions),kn(this.defines,c.defines),kn(this.uniforms,Ql.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return s(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=cs(a.isDerivedMaterial?a.getDepthMaterial():new cc({depthPacking:kl}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=cs(a.isDerivedMaterial?a.getDistanceMaterial():new uc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=o,new o}function ag(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:m,timeUniform:g}=r;if(i=i||"",o=o||"",s=s||"",c=c||"",u=u||"",f=f||"",(l||m)&&(e=ls(e)),(h||m)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=ls(t)),m){let _=m({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,d=>(_.push(d),"")),f=`${h}
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
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,d,p,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,p))?d:`troika_${d}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=vl(e,n,i,o,s),t=vl(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function vl(a,e,t,r,n){return(r||n||t)&&(a=a.replace(_c,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function sg(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let og=0;const xl=new Map;function lg(a){const e=JSON.stringify(a,sg);let t=xl.get(e);return t==null&&xl.set(e,t=++og),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function cg(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,o=new Uint8Array(n);if(i.readASCII(o,0,4)=="ttcf"){var s=4;i.readUshort(o,s),s+=2,i.readUshort(o,s),s+=2;var l=i.readUint(o,s);s+=4;for(var c=[],u=0;u<l;u++){var f=i.readUint(o,s);s+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(n,i){var o=e._bin,s=i;o.readFixed(n,i),i+=4;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:s},f={},h=0;h<l;h++){var m=o.readASCII(n,i,4);i+=4,o.readUint(n,i),i+=4;var g=o.readUint(n,i);i+=4;var _=o.readUint(n,i);i+=4,f[m]={offset:g,length:_}}for(h=0;h<c.length;h++){var d=c[h];f[d]&&(u[d.trim()]=e[d.trim()].parse(n,f[d].offset,f[d].length,u))}return u},_tabOffset:function(n,i,o){for(var s=e._bin,l=s.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var f=s.readASCII(n,c,4);c+=4,s.readUint(n,c),c+=4;var h=s.readUint(n,c);if(c+=4,s.readUint(n,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(e._bin.readUshort(n,i+2*l));return s},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,o){for(var s="",l=0;l<o;l++)s+=String.fromCharCode(n[i+l]);return s},readUnicode:function(n,i,o){for(var s="",l=0;l<o;l++){var c=n[i++]<<8|n[i++];s+=String.fromCharCode(c)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,o){var s=e._bin._tdec;return s&&i==0&&o==n.length?s.decode(n):e._bin.readASCII(n,i,o)},readBytes:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(n[i+l]);return s},readASCIIArray:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(String.fromCharCode(n[i+l]));return s},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,o,s,l){var c=e._bin,u={},f=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var m=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+m),u.lookupList=e._lctf.readLookupList(n,f+g,l),u},e._lctf.readLookupList=function(n,i,o){var s=e._bin,l=i,c=[],u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=s.readUshort(n,i);i+=2;var m=e._lctf.readLookupTable(n,l+h,o);c.push(m)}return c},e._lctf.readLookupTable=function(n,i,o){var s=e._bin,l=i,c={tabs:[]};c.ltype=s.readUshort(n,i),i+=2,c.flag=s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var m=s.readUshort(n,i);i+=2;var g=o(n,f,l+m,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,o=0;o<32;o++)n>>>o&1&&i++;return i},e._lctf.readClassDef=function(n,i){var o=e._bin,s=[],l=o.readUshort(n,i);if(i+=2,l==1){var c=o.readUshort(n,i);i+=2;var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++)s.push(c+f),s.push(c+f),s.push(o.readUshort(n,i)),i+=2}if(l==2){var h=o.readUshort(n,i);for(i+=2,f=0;f<h;f++)s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2}return s},e._lctf.getInterval=function(n,i){for(var o=0;o<n.length;o+=3){var s=n[o],l=n[o+1];if(n[o+2],s<=i&&i<=l)return o}return-1},e._lctf.readCoverage=function(n,i){var o=e._bin,s={};s.fmt=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);return i+=2,s.fmt==1&&(s.tab=o.readUshorts(n,i,l)),s.fmt==2&&(s.tab=o.readUshorts(n,i,3*l)),s},e._lctf.coverageIndex=function(n,i){var o=n.tab;if(n.fmt==1)return o.indexOf(i);if(n.fmt==2){var s=e._lctf.getInterval(o,i);if(s!=-1)return o[s+2]+(i-o[s])}return-1},e._lctf.readFeatureList=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2;var m=e._lctf.readFeatureTable(n,s+h);m.tag=f.trim(),l.push(m)}return l},e._lctf.readFeatureTable=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2,c>0&&(l.featureParams=s+c);var u=o.readUshort(n,i);i+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(n,i+2*f));return l},e._lctf.readScriptList=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readScriptTable(n,s+h)}return l},e._lctf.readScriptTable=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,s+c));var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readASCII(n,i,4);i+=4;var m=o.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,s+m)}return l},e._lctf.readLangSysTable=function(n,i){var o=e._bin,s={};o.readUshort(n,i),i+=2,s.reqFeature=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);return i+=2,s.features=o.readUshorts(n,i,l),s},e.CFF={},e.CFF.parse=function(n,i,o){var s=e._bin;(n=new Uint8Array(n.buffer,i,o))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(s.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var m=h[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(s.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,m),m.CharStrings){i=m.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var d=[];for(u=0;u<g.length-1;u++)d.push(s.readBytes(n,i+g[u],g[u+1]-g[u]));m.CharStrings=d}if(m.ROS){i=m.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),m.FDArray=[],u=0;u<p.length-1;u++){var y=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,y,_),m.FDArray.push(y)}i+=p[p.length-1],i=m.FDSelect,m.FDSelect=[];var x=n[i];if(i++,x!=3)throw x;var M=s.readUshort(n,i);for(i+=2,u=0;u<M+1;u++)m.FDSelect.push(s.readUshort(n,i),n[i+2]),i+=3}return m.Encoding&&(m.Encoding=e.CFF.readEncoding(n,m.Encoding,m.CharStrings.length)),m.charset&&(m.charset=e.CFF.readCharset(n,m.charset,m.CharStrings.length)),e.CFF._readFDict(n,m,_),m},e.CFF._readFDict=function(n,i,o){var s;for(var l in i.Private&&(s=i.Private[1],i.Private=e.CFF.readDict(n,s,s+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,s+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=o[i[l]-426+35])},e.CFF.readSubrs=function(n,i,o){var s=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(s.readBytes(n,i+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==i)return o;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,o){e._bin;var s=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)s.push(n[i+u]);return s},e.CFF.readCharset=function(n,i,o){var s=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<o;u++){var f=s.readUshort(n,i);i+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=s.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=s.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,i,o){var s=e._bin,l=s.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)o.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)o.push(s.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&s.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,o){var s=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=s.readShort(n,i+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=s.readInt(n,i+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(n,i,o){for(var s=i+o,l=e._bin,c=[];i<s;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,m=null,g=null;u<=20&&(m=u,h=1),u==12&&(m=100*u+f,h=2),u!=19&&u!=20||(m=u,h=2),21<=u&&u<=27&&(m=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(m=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g??"o"+m),i+=h}return c},e.CFF.readDict=function(n,i,o){for(var s=e._bin,l={},c=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,m=null,g=null;if(u==28&&(g=s.readShort(n,i+1),h=3),u==29&&(g=s.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=s.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var d=n[i+h];h++;var p=d>>4,y=15&d;if(p!=15&&_.push(p),y!=15&&_.push(y),y==15)break}for(var x="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],C=0;C<_.length;C++)x+=M[_[C]];g=parseFloat(x)}u<=21&&(m=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(m=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),m!=null?(l[m]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,o){n=new Uint8Array(n.buffer,i,o),i=0;var s=e._bin,l={};s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=s.readUshort(n,i);i+=2;var m=s.readUshort(n,i);i+=2;var g=s.readUint(n,i);i+=4;var _="p"+h+"e"+m,d=u.indexOf(g);if(d==-1){var p;d=l.tables.length,u.push(g);var y=s.readUshort(n,g);y==0?p=e.cmap.parse0(n,g):y==4?p=e.cmap.parse4(n,g):y==6?p=e.cmap.parse6(n,g):y==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+y,h,m,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=d}return l},e.cmap.parse0=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,s.map=[];for(var c=0;c<l-6;c++)s.map.push(n[i+c]);return s},e.cmap.parse4=function(n,i){var o=e._bin,s=i,l={};l.format=o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;var f=u/2;l.searchRange=o.readUshort(n,i),i+=2,l.entrySelector=o.readUshort(n,i),i+=2,l.rangeShift=o.readUshort(n,i),i+=2,l.endCount=o.readUshorts(n,i,f),i+=2*f,i+=2,l.startCount=o.readUshorts(n,i,f),i+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(n,i)),i+=2;for(l.idRangeOffset=o.readUshorts(n,i,f),i+=2*f,l.glyphIdArray=[];i<s+c;)l.glyphIdArray.push(o.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,s.firstCode=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,s.glyphIdArray=[];for(var c=0;c<l;c++)s.glyphIdArray.push(o.readUshort(n,i)),i+=2;return s},e.cmap.parse12=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2,i+=2,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4;var l=o.readUint(n,i);i+=4,s.groups=[];for(var c=0;c<l;c++){var u=i+12*c,f=o.readUint(n,u+0),h=o.readUint(n,u+4),m=o.readUint(n,u+8);s.groups.push([f,h,m])}return s},e.glyf={},e.glyf.parse=function(n,i,o,s){for(var l=[],c=0;c<s.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var o=e._bin,s=n._data,l=e._tabOffset(s,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=o.readShort(s,l),l+=2,c.xMin=o.readShort(s,l),l+=2,c.yMin=o.readShort(s,l),l+=2,c.xMax=o.readShort(s,l),l+=2,c.yMax=o.readShort(s,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(s,l)),l+=2;var f=o.readUshort(s,l);if(l+=2,s.length-l<f)return null;c.instructions=o.readBytes(s,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var m=s[l];if(l++,c.flags.push(m),(8&m)!=0){var g=s[l];l++;for(var _=0;_<g;_++)c.flags.push(m),u++}}for(c.xs=[],u=0;u<h;u++){var d=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;d?(c.xs.push(p?s[l]:-s[l]),l++):p?c.xs.push(0):(c.xs.push(o.readShort(s,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)d=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,d?(c.ys.push(p?s[l]:-s[l]),l++):p?c.ys.push(0):(c.ys.push(o.readShort(s,l)),l+=2);var y=0,x=0;for(u=0;u<h;u++)y+=c.xs[u],x+=c.ys[u],c.xs[u]=y,c.ys[u]=x}else{var M;c.parts=[];do{M=o.readUshort(s,l),l+=2;var C={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(C),C.glyphIndex=o.readUshort(s,l),l+=2,1&M){var R=o.readShort(s,l);l+=2;var E=o.readShort(s,l);l+=2}else R=o.readInt8(s,l),l++,E=o.readInt8(s,l),l++;2&M?(C.m.tx=R,C.m.ty=E):(C.p1=R,C.p2=E),8&M?(C.m.a=C.m.d=o.readF2dot14(s,l),l+=2):64&M?(C.m.a=o.readF2dot14(s,l),l+=2,C.m.d=o.readF2dot14(s,l),l+=2):128&M&&(C.m.a=o.readF2dot14(s,l),l+=2,C.m.b=o.readF2dot14(s,l),l+=2,C.m.c=o.readF2dot14(s,l),l+=2,C.m.d=o.readF2dot14(s,l),l+=2)}while(32&M);if(256&M){var O=o.readUshort(s,l);for(l+=2,c.instr=[],u=0;u<O;u++)c.instr.push(s[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,o,s){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,o,s){return e._lctf.parse(n,i,o,s,e.GPOS.subt)},e.GPOS.subt=function(n,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,o);o+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,o,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,o),o+=2;var m=l.readUshort(n,o);o+=2;var g=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(m);if(u.fmt==1){u.pairsets=[];var d=l.readUshort(n,o);o+=2;for(var p=0;p<d;p++){var y=c+l.readUshort(n,o);o+=2;var x=l.readUshort(n,y);y+=2;for(var M=[],C=0;C<x;C++){var R=l.readUshort(n,y);y+=2,h!=0&&(P=e.GPOS.readValueRecord(n,y,h),y+=2*g),m!=0&&(z=e.GPOS.readValueRecord(n,y,m),y+=2*_),M.push({gid2:R,val1:P,val2:z})}u.pairsets.push(M)}}if(u.fmt==2){var E=l.readUshort(n,o);o+=2;var O=l.readUshort(n,o);o+=2;var Y=l.readUshort(n,o);o+=2;var v=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+E),u.classDef2=e._lctf.readClassDef(n,c+O),u.matrix=[],p=0;p<Y;p++){var w=[];for(C=0;C<v;C++){var P=null,z=null;h!=0&&(P=e.GPOS.readValueRecord(n,o,h),o+=2*g),m!=0&&(z=e.GPOS.readValueRecord(n,o,m),o+=2*_),w.push({val1:P,val2:z})}u.matrix.push(w)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var b=l.readUshort(n,o);o+=2;var H=l.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=b;else if(s.ltype!=b)throw"invalid extension substitution";return e.GPOS.subt(n,s.ltype,c+H)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,o){var s=e._bin,l=[];return l.push(1&o?s.readShort(n,i):0),i+=1&o?2:0,l.push(2&o?s.readShort(n,i):0),i+=2&o?2:0,l.push(4&o?s.readShort(n,i):0),i+=4&o?2:0,l.push(8&o?s.readShort(n,i):0),i+=8&o?2:0,l},e.GPOS.readBaseArray=function(n,i,o){var s=e._bin,l=[],c=i,u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],m=0;m<o;m++)h.push(e.GPOS.readAnchorRecord(n,c+s.readUshort(n,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,i){var o=e._bin,s=[],l=i,c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,o.readUshort(n,i+2)+l);f.markClass=o.readUshort(n,i),s.push(f),i+=4}return s},e.GPOS.readAnchorRecord=function(n,i){var o=e._bin,s={};return s.fmt=o.readUshort(n,i),s.x=o.readShort(n,i+2),s.y=o.readShort(n,i+4),s},e.GSUB={},e.GSUB.parse=function(n,i,o,s){return e._lctf.parse(n,i,o,s,e.GSUB.subt)},e.GSUB.subt=function(n,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var h=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,h),o+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(n,o),o+=2,u.seqs=[];for(var m=0;m<h;m++){var g=l.readUshort(n,o)+c;o+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],h=l.readUshort(n,o),o+=2,m=0;m<h;m++){var d=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+d))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var y=l.readUshort(n,o);for(o+=2,m=0;m<y;m++){var x=l.readUshort(n,o);o+=2,u.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(m=0;m<3;m++){h=l.readUshort(n,o),o+=2;for(var M=[],C=0;C<h;C++)M.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*C)));o+=2*h,m==0&&(u.backCvg=M),m==1&&(u.inptCvg=M),m==2&&(u.ahedCvg=M)}h=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,h)}}else{if(i==7&&u.fmt==1){var R=l.readUshort(n,o);o+=2;var E=l.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=R;else if(s.ltype!=R)throw"invalid extension substitution";return e.GSUB.subt(n,s.ltype,c+E)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var o=e._bin.readUshort,s=i,l=[],c=o(n,i);i+=2;for(var u=0;u<c;u++){var f=o(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,s+f))}return l},e.GSUB.readSubClassRule=function(n,i){var o=e._bin.readUshort,s={},l=o(n,i),c=o(n,i+=2);i+=2,s.input=[];for(var u=0;u<l-1;u++)s.input.push(o(n,i)),i+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),s},e.GSUB.readSubstLookupRecords=function(n,i,o){for(var s=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(s(n,i),s(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,s+f))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var o=e._bin,s={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,i);i+=2,c==1&&u--,s[l[c]]=o.readUshorts(n,i,u),i+=2*s[l[c]].length}return u=o.readUshort(n,i),i+=2,s.subst=o.readUshorts(n,i,2*u),i+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,s+f))}return l},e.GSUB.readLigature=function(n,i){var o=e._bin,s={chain:[]};s.nglyph=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)s.chain.push(o.readUshort(n,i)),i+=2;return s},e.head={},e.head.parse=function(n,i,o){var s=e._bin,l={};return s.readFixed(n,i),i+=4,l.fontRevision=s.readFixed(n,i),i+=4,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4,l.flags=s.readUshort(n,i),i+=2,l.unitsPerEm=s.readUshort(n,i),i+=2,l.created=s.readUint64(n,i),i+=8,l.modified=s.readUint64(n,i),i+=8,l.xMin=s.readShort(n,i),i+=2,l.yMin=s.readShort(n,i),i+=2,l.xMax=s.readShort(n,i),i+=2,l.yMax=s.readShort(n,i),i+=2,l.macStyle=s.readUshort(n,i),i+=2,l.lowestRecPPEM=s.readUshort(n,i),i+=2,l.fontDirectionHint=s.readShort(n,i),i+=2,l.indexToLocFormat=s.readShort(n,i),i+=2,l.glyphDataFormat=s.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,o){var s=e._bin,l={};return s.readFixed(n,i),i+=4,l.ascender=s.readShort(n,i),i+=2,l.descender=s.readShort(n,i),i+=2,l.lineGap=s.readShort(n,i),i+=2,l.advanceWidthMax=s.readUshort(n,i),i+=2,l.minLeftSideBearing=s.readShort(n,i),i+=2,l.minRightSideBearing=s.readShort(n,i),i+=2,l.xMaxExtent=s.readShort(n,i),i+=2,l.caretSlopeRise=s.readShort(n,i),i+=2,l.caretSlopeRun=s.readShort(n,i),i+=2,l.caretOffset=s.readShort(n,i),i+=2,i+=8,l.metricDataFormat=s.readShort(n,i),i+=2,l.numberOfHMetrics=s.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,o,s){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<s.maxp.numGlyphs;h++)h<s.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,f=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,i,o,s){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,o,s);var u=l.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,o=l.readUshort(n,i),i+=2;var m=l.readUshort(n,i);i+=2;var g=m>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,o,s){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var m=h>>>8;if((m&=15)!=0)throw"unknown kern table format: "+m;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,o){var s=e._bin,l=-1,c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2;var h=s.readUshort(n,i);i+=2;var m=s.readShort(n,i);i+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(h),g.vals.push(m),l=f}return i},e.loca={},e.loca.parse=function(n,i,o,s){var l=e._bin,c=[],u=s.head.indexToLocFormat,f=s.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,o){var s=e._bin,l={},c=s.readUint(n,i);return i+=4,l.numGlyphs=s.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=s.readUshort(n,i),i+=2,l.maxContours=s.readUshort(n,i),i+=2,l.maxCompositePoints=s.readUshort(n,i),i+=2,l.maxCompositeContours=s.readUshort(n,i),i+=2,l.maxZones=s.readUshort(n,i),i+=2,l.maxTwilightPoints=s.readUshort(n,i),i+=2,l.maxStorage=s.readUshort(n,i),i+=2,l.maxFunctionDefs=s.readUshort(n,i),i+=2,l.maxInstructionDefs=s.readUshort(n,i),i+=2,l.maxStackElements=s.readUshort(n,i),i+=2,l.maxSizeOfInstructions=s.readUshort(n,i),i+=2,l.maxComponentElements=s.readUshort(n,i),i+=2,l.maxComponentDepth=s.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,o){var s=e._bin,l={};s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,m=0;m<c;m++){var g=s.readUshort(n,i);i+=2;var _=s.readUshort(n,i);i+=2;var d=s.readUshort(n,i);i+=2;var p=s.readUshort(n,i);i+=2;var y=s.readUshort(n,i);i+=2;var x=s.readUshort(n,i);i+=2;var M,C=f[p],R=h+12*c+x;if(g==0)M=s.readUnicode(n,R,y/2);else if(g==3&&_==0)M=s.readUnicode(n,R,y/2);else if(_==0)M=s.readASCII(n,R,y);else if(_==1)M=s.readUnicode(n,R,y/2);else if(_==3)M=s.readUnicode(n,R,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;M=s.readASCII(n,R,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var E="p"+g+","+d.toString(16);l[E]==null&&(l[E]={}),l[E][C!==void 0?C:p]=M,l[E]._lang=d}for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==1033)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==0)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==3084)return l[O];for(var O in l)if(l[O].postScriptName!=null)return l[O];for(var O in l){u=O;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,o){var s=e._bin.readUshort(n,i);i+=2;var l={};if(s==0)e["OS/2"].version0(n,i,l);else if(s==1)e["OS/2"].version1(n,i,l);else if(s==2||s==3||s==4)e["OS/2"].version2(n,i,l);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,o){var s=e._bin;return o.xAvgCharWidth=s.readShort(n,i),i+=2,o.usWeightClass=s.readUshort(n,i),i+=2,o.usWidthClass=s.readUshort(n,i),i+=2,o.fsType=s.readUshort(n,i),i+=2,o.ySubscriptXSize=s.readShort(n,i),i+=2,o.ySubscriptYSize=s.readShort(n,i),i+=2,o.ySubscriptXOffset=s.readShort(n,i),i+=2,o.ySubscriptYOffset=s.readShort(n,i),i+=2,o.ySuperscriptXSize=s.readShort(n,i),i+=2,o.ySuperscriptYSize=s.readShort(n,i),i+=2,o.ySuperscriptXOffset=s.readShort(n,i),i+=2,o.ySuperscriptYOffset=s.readShort(n,i),i+=2,o.yStrikeoutSize=s.readShort(n,i),i+=2,o.yStrikeoutPosition=s.readShort(n,i),i+=2,o.sFamilyClass=s.readShort(n,i),i+=2,o.panose=s.readBytes(n,i,10),i+=10,o.ulUnicodeRange1=s.readUint(n,i),i+=4,o.ulUnicodeRange2=s.readUint(n,i),i+=4,o.ulUnicodeRange3=s.readUint(n,i),i+=4,o.ulUnicodeRange4=s.readUint(n,i),i+=4,o.achVendID=[s.readInt8(n,i),s.readInt8(n,i+1),s.readInt8(n,i+2),s.readInt8(n,i+3)],i+=4,o.fsSelection=s.readUshort(n,i),i+=2,o.usFirstCharIndex=s.readUshort(n,i),i+=2,o.usLastCharIndex=s.readUshort(n,i),i+=2,o.sTypoAscender=s.readShort(n,i),i+=2,o.sTypoDescender=s.readShort(n,i),i+=2,o.sTypoLineGap=s.readShort(n,i),i+=2,o.usWinAscent=s.readUshort(n,i),i+=2,o.usWinDescent=s.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,o){var s=e._bin;return i=e["OS/2"].version0(n,i,o),o.ulCodePageRange1=s.readUint(n,i),i+=4,o.ulCodePageRange2=s.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,o){var s=e._bin;return i=e["OS/2"].version1(n,i,o),o.sxHeight=s.readShort(n,i),i+=2,o.sCapHeight=s.readShort(n,i),i+=2,o.usDefault=s.readUshort(n,i),i+=2,o.usBreak=s.readUshort(n,i),i+=2,o.usMaxContext=s.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,o){var s=e._bin;return i=e["OS/2"].version2(n,i,o),o.usLowerOpticalPointSize=s.readUshort(n,i),i+=2,o.usUpperOpticalPointSize=s.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,o){var s=e._bin,l={};return l.version=s.readFixed(n,i),i+=4,l.italicAngle=s.readFixed(n,i),i+=4,l.underlinePosition=s.readShort(n,i),i+=2,l.underlineThickness=s.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var o=n.cmap,s=-1;if(o.p0e4!=null?s=o.p0e4:o.p3e1!=null?s=o.p3e1:o.p1e0!=null?s=o.p1e0:o.p0e3!=null&&(s=o.p0e3),s==-1)throw"no familiar platform and encoding!";var l=o.tables[s];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var s=n.SVG.entries[i];return s==null?o:(typeof s=="string"&&(s=e.SVG.toPath(s),n.SVG.entries[i]=s),s)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,o)}else n.glyf&&e.U._drawGlyf(i,n,o);return o},e.U._drawGlyf=function(n,i,o){var s=i.glyf[n];s==null&&(s=i.glyf[n]=e.glyf._parseGlyf(i,n)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,o):e.U._compoGlyph(s,i,o))},e.U._simpleGlyph=function(n,i){for(var o=0;o<n.noc;o++){for(var s=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=s;c<=l;c++){var u=c==s?l:c-1,f=c==l?s:c+1,h=1&n.flags[c],m=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],d=n.ys[c];if(c==s)if(h){if(!m){e.U.P.moveTo(i,_,d);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else m?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+d)/2);h?m&&e.U.P.lineTo(i,_,d):g?e.U.P.qcurveTo(i,_,d,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,_,d,(_+n.xs[f])/2,(d+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,o){for(var s=0;s<n.parts.length;s++){var l={cmds:[],crds:[]},c=n.parts[s];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],m=l.crds[f+1];o.crds.push(h*u.a+m*u.b+u.tx),o.crds.push(h*u.c+m*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,i){var o=e._lctf.getInterval(i,n);return o==-1?0:i[o+2]},e.U._applySubs=function(n,i,o,s){for(var l=n.length-i-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(o.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],m=0;m<h.length;m++){var g=h[m],_=g.chain.length;if(!(_>l)){for(var d=!0,p=0,y=0;y<_;y++){for(;n[i+p+(1+y)]==-1;)p++;g.chain[y]!=n[i+p+(1+y)]&&(d=!1)}if(d){for(n[i]=g.nglyph,y=0;y<_+p;y++)n[i+y+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var x=e._lctf.getInterval(f.cDef,n[i]),M=f.cDef[x+2],C=f.scset[M],R=0;R<C.length;R++){var E=C[R],O=E.input;if(!(O.length>l)){for(d=!0,y=0;y<O.length;y++){var Y=e._lctf.getInterval(f.cDef,n[i+1+y]);if(x==-1&&f.cDef[Y+2]!=O[y]){d=!1;break}}if(d){var v=E.substLookupRecords;for(m=0;m<v.length;m+=2)v[m],v[m+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var w=f.lookupRec;for(R=0;R<w.length;R+=2){x=w[R];var P=s[w[R+1]];e.U._applySubs(n,i+x,P,s)}}}}},e.U._glsCovered=function(n,i,o){for(var s=0;s<i.length;s++)if(e._lctf.coverageIndex(i[s],n[o+s])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,o){for(var s={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),m=0;m<h.crds.length;m+=2)s.crds.push(h.crds[m]+l),s.crds.push(h.crds[m+1]);for(o&&s.cmds.push(o),m=0;m<h.cmds.length;m++)s.cmds.push(h.cmds[m]);o&&s.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return s},e.U.P={},e.U.P.moveTo=function(n,i,o){n.cmds.push("M"),n.crds.push(i,o)},e.U.P.lineTo=function(n,i,o){n.cmds.push("L"),n.crds.push(i,o)},e.U.P.curveTo=function(n,i,o,s,l,c,u){n.cmds.push("C"),n.crds.push(i,o,s,l,c,u)},e.U.P.qcurveTo=function(n,i,o,s,l){n.cmds.push("Q"),n.crds.push(i,o,s,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,o,s,l){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,m=i.open,g=0,_=i.x,d=i.y,p=0,y=0,x=0,M=0,C=0,R=0,E=0,O=0,Y=0,v=0,w={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,w);var P=w.val;if(g+=w.size,P=="o1"||P=="o18")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o4")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),m&&e.U.P.closePath(l),d+=c.pop(),e.U.P.moveTo(l,_,d),m=!0;else if(P=="o5")for(;c.length>0;)_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d);else if(P=="o6"||P=="o7")for(var z=c.length,b=P=="o6",H=0;H<z;H++){var B=c.shift();b?_+=B:d+=B,b=!b,e.U.P.lineTo(l,_,d)}else if(P=="o8"||P=="o24"){z=c.length;for(var Z=0;Z+6<=z;)p=_+c.shift(),y=d+c.shift(),x=p+c.shift(),M=y+c.shift(),_=x+c.shift(),d=M+c.shift(),e.U.P.curveTo(l,p,y,x,M,_,d),Z+=6;P=="o24"&&(_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(y=d,x=(p=_+c.shift())+c.shift(),v=M=y+c.shift(),R=M,O=d,_=(E=(C=(Y=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,x,M,Y,v),e.U.P.curveTo(l,C,R,E,O,_,d)),P=="o1235"&&(p=_+c.shift(),y=d+c.shift(),x=p+c.shift(),M=y+c.shift(),Y=x+c.shift(),v=M+c.shift(),C=Y+c.shift(),R=v+c.shift(),E=C+c.shift(),O=R+c.shift(),_=E+c.shift(),d=O+c.shift(),c.shift(),e.U.P.curveTo(l,p,y,x,M,Y,v),e.U.P.curveTo(l,C,R,E,O,_,d)),P=="o1236"&&(p=_+c.shift(),y=d+c.shift(),x=p+c.shift(),v=M=y+c.shift(),R=M,E=(C=(Y=x+c.shift())+c.shift())+c.shift(),O=R+c.shift(),_=E+c.shift(),e.U.P.curveTo(l,p,y,x,M,Y,v),e.U.P.curveTo(l,C,R,E,O,_,d)),P=="o1237"&&(p=_+c.shift(),y=d+c.shift(),x=p+c.shift(),M=y+c.shift(),Y=x+c.shift(),v=M+c.shift(),C=Y+c.shift(),R=v+c.shift(),E=C+c.shift(),O=R+c.shift(),Math.abs(E-_)>Math.abs(O-d)?_=E+c.shift():d=O+c.shift(),e.U.P.curveTo(l,p,y,x,M,Y,v),e.U.P.curveTo(l,C,R,E,O,_,d));else if(P=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var K=c.shift(),V=c.shift(),k=c.shift(),L=c.shift(),G=e.CFF.glyphBySE(o,k),W=e.CFF.glyphBySE(o,L);e.U._drawCFF(o.CharStrings[G],i,o,s,l),i.x=K,i.y=V,e.U._drawCFF(o.CharStrings[W],i,o,s,l)}m&&(e.U.P.closePath(l),m=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(P=="o21")c.length>2&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),d+=c.pop(),_+=c.pop(),m&&e.U.P.closePath(l),e.U.P.moveTo(l,_,d),m=!0;else if(P=="o22")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),_+=c.pop(),m&&e.U.P.closePath(l),e.U.P.moveTo(l,_,d),m=!0;else if(P=="o25"){for(;c.length>6;)_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d);p=_+c.shift(),y=d+c.shift(),x=p+c.shift(),M=y+c.shift(),_=x+c.shift(),d=M+c.shift(),e.U.P.curveTo(l,p,y,x,M,_,d)}else if(P=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,y=d+c.shift(),_=x=p+c.shift(),d=(M=y+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,x,M,_,d);else if(P=="o27")for(c.length%2&&(d+=c.shift());c.length>0;)y=d,x=(p=_+c.shift())+c.shift(),M=y+c.shift(),_=x+c.shift(),d=M,e.U.P.curveTo(l,p,y,x,M,_,d);else if(P=="o10"||P=="o29"){var F=P=="o10"?s:o;if(c.length==0)console.debug("error: empty stack");else{var N=c.pop(),Q=F.Subrs[N+F.Bias];i.x=_,i.y=d,i.nStems=u,i.haveWidth=f,i.width=h,i.open=m,e.U._drawCFF(Q,i,o,s,l),_=i.x,d=i.y,u=i.nStems,f=i.haveWidth,h=i.width,m=i.open}}else if(P=="o30"||P=="o31"){var J=c.length,ee=(Z=0,P=="o31");for(Z+=J-(z=-3&J);Z<z;)ee?(y=d,x=(p=_+c.shift())+c.shift(),d=(M=y+c.shift())+c.shift(),z-Z==5?(_=x+c.shift(),Z++):_=x,ee=!1):(p=_,y=d+c.shift(),x=p+c.shift(),M=y+c.shift(),_=x+c.shift(),z-Z==5?(d=M+c.shift(),Z++):d=M,ee=!0),e.U.P.curveTo(l,p,y,x,M,_,d),Z+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}i.x=_,i.y=d,i.nStems=u,i.haveWidth=f,i.width=h,i.open=m};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function ug(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(P,z){for(var b=new t(31),H=0;H<31;++H)b[H]=z+=1<<P[H-1];var B=new r(b[30]);for(H=1;H<30;++H)for(var Z=b[H];Z<b[H+1];++Z)B[Z]=Z-b[H]<<5|H;return[b,B]},l=s(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=s(i,0)[0],h=new t(32768),m=0;m<32768;++m){var g=(43690&m)>>>1|(21845&m)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[m]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(P,z,b){for(var H=P.length,B=0,Z=new t(z);B<H;++B)++Z[P[B]-1];var K,V=new t(z);for(B=0;B<z;++B)V[B]=V[B-1]+Z[B-1]<<1;{K=new t(1<<z);var k=15-z;for(B=0;B<H;++B)if(P[B])for(var L=B<<4|P[B],G=z-P[B],W=V[P[B]-1]++<<G,F=W|(1<<G)-1;W<=F;++W)K[h[W]>>>k]=L}return K},d=new e(288);for(m=0;m<144;++m)d[m]=8;for(m=144;m<256;++m)d[m]=9;for(m=256;m<280;++m)d[m]=7;for(m=280;m<288;++m)d[m]=8;var p=new e(32);for(m=0;m<32;++m)p[m]=5;var y=_(d,9),x=_(p,5),M=function(P){for(var z=P[0],b=1;b<P.length;++b)P[b]>z&&(z=P[b]);return z},C=function(P,z,b){var H=z/8|0;return(P[H]|P[H+1]<<8)>>(7&z)&b},R=function(P,z){var b=z/8|0;return(P[b]|P[b+1]<<8|P[b+2]<<16)>>(7&z)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],O=function(P,z,b){var H=new Error(z||E[P]);if(H.code=P,Error.captureStackTrace&&Error.captureStackTrace(H,O),!b)throw H;return H},Y=function(P,z,b){var H=P.length;if(!H||b&&!b.l&&H<5)return z||new e(0);var B=!z||b,Z=!b||b.i;b||(b={}),z||(z=new e(3*H));var K,V=function(fe){var we=z.length;if(fe>we){var Oe=new e(Math.max(2*we,fe));Oe.set(z),z=Oe}},k=b.f||0,L=b.p||0,G=b.b||0,W=b.l,F=b.d,N=b.m,Q=b.n,J=8*H;do{if(!W){b.f=k=C(P,L,1);var ee=C(P,L+1,3);if(L+=3,!ee){var se=P[(S=((K=L)/8|0)+(7&K&&1)+4)-4]|P[S-3]<<8,ye=S+se;if(ye>H){Z&&O(0);break}B&&V(G+se),z.set(P.subarray(S,ye),G),b.b=G+=se,b.p=L=8*ye;continue}if(ee==1)W=y,F=x,N=9,Q=5;else if(ee==2){var le=C(P,L,31)+257,I=C(P,L+10,15)+4,Ne=le+C(P,L+5,31)+1;L+=14;for(var ge=new e(Ne),Se=new e(19),de=0;de<I;++de)Se[o[de]]=C(P,L+3*de,7);L+=3*I;var Pe=M(Se),ue=(1<<Pe)-1,T=_(Se,Pe);for(de=0;de<Ne;){var S,D=T[C(P,L,ue)];if(L+=15&D,(S=D>>>4)<16)ge[de++]=S;else{var te=0,X=0;for(S==16?(X=3+C(P,L,3),L+=2,te=ge[de-1]):S==17?(X=3+C(P,L,7),L+=3):S==18&&(X=11+C(P,L,127),L+=7);X--;)ge[de++]=te}}var $=ge.subarray(0,le),oe=ge.subarray(le);N=M($),Q=M(oe),W=_($,N),F=_(oe,Q)}else O(1);if(L>J){Z&&O(0);break}}B&&V(G+131072);for(var me=(1<<N)-1,ce=(1<<Q)-1,_e=L;;_e=L){var Ee=(te=W[R(P,L)&me])>>>4;if((L+=15&te)>J){Z&&O(0);break}if(te||O(2),Ee<256)z[G++]=Ee;else{if(Ee==256){_e=L,W=null;break}var ae=Ee-254;if(Ee>264){var Ie=n[de=Ee-257];ae=C(P,L,(1<<Ie)-1)+c[de],L+=Ie}var Ue=F[R(P,L)&ce],Te=Ue>>>4;if(Ue||O(3),L+=15&Ue,oe=f[Te],Te>3&&(Ie=i[Te],oe+=R(P,L)&(1<<Ie)-1,L+=Ie),L>J){Z&&O(0);break}B&&V(G+131072);for(var ve=G+ae;G<ve;G+=4)z[G]=z[G-oe],z[G+1]=z[G+1-oe],z[G+2]=z[G+2-oe],z[G+3]=z[G+3-oe];G=ve}}b.l=W,b.p=_e,b.b=G,W&&(k=1,b.m=N,b.d=F,b.n=Q)}while(!k);return G==z.length?z:function(fe,we,Oe){(Oe==null||Oe>fe.length)&&(Oe=fe.length);var qe=new(fe instanceof t?t:fe instanceof r?r:e)(Oe-we);return qe.set(fe.subarray(we,Oe)),qe}(z,0,G)},v=new e(0),w=typeof TextDecoder<"u"&&new TextDecoder;try{w.decode(v,{stream:!0})}catch{}return a.convert_streams=function(P){var z=new DataView(P),b=0;function H(){var le=z.getUint16(b);return b+=2,le}function B(){var le=z.getUint32(b);return b+=4,le}function Z(le){se.setUint16(ye,le),ye+=2}function K(le){se.setUint32(ye,le),ye+=4}for(var V={signature:B(),flavor:B(),length:B(),numTables:H(),reserved:H(),totalSfntSize:B(),majorVersion:H(),minorVersion:H(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},k=0;Math.pow(2,k)<=V.numTables;)k++;k--;for(var L=16*Math.pow(2,k),G=16*V.numTables-L,W=12,F=[],N=0;N<V.numTables;N++)F.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),W+=16;var Q,J=new Uint8Array(12+16*F.length+F.reduce(function(le,I){return le+I.origLength+4},0)),ee=J.buffer,se=new DataView(ee),ye=0;return K(V.flavor),Z(V.numTables),Z(L),Z(k),Z(G),F.forEach(function(le){K(le.tag),K(le.origChecksum),K(W),K(le.origLength),le.outOffset=W,(W+=le.origLength)%4!=0&&(W+=4-W%4)}),F.forEach(function(le){var I,Ne=P.slice(le.offset,le.offset+le.compLength);if(le.compLength!=le.origLength){var ge=new Uint8Array(le.origLength);I=new Uint8Array(Ne,2),Y(I,ge)}else ge=new Uint8Array(Ne);J.set(ge,le.outOffset);var Se=0;(W=le.outOffset+le.origLength)%4!=0&&(Se=4-W%4),J.set(new Uint8Array(Se).buffer,le.outOffset+le.origLength),Q=W+Se}),ee.slice(0,Q)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function fg(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,o=4,s=8,l=16,c=32;let u;function f(E){if(!u){const O={R:i,L:n,D:o,C:l,U:c,T:s};u=new Map;for(let Y in r){let v=0;r[Y].split(",").forEach(w=>{let[P,z]=w.split("+");P=parseInt(P,36),z=z?parseInt(z,36):0,u.set(v+=P,O[Y]);for(let b=z;b--;)u.set(++v,O[Y])})}}return u.get(E)||c}const h=1,m=2,g=3,_=4,d=[null,"isol","init","fina","medi"];function p(E){const O=new Uint8Array(E.length);let Y=c,v=h,w=-1;for(let P=0;P<E.length;P++){const z=E.codePointAt(P);let b=f(z)|0,H=h;b&s||(Y&(n|o|l)?b&(i|o|l)?(H=g,(v===h||v===g)&&O[w]++):b&(n|c)&&(v===m||v===_)&&O[w]--:Y&(i|c)&&(v===m||v===_)&&O[w]--,v=O[P]=H,Y=b,w=P,z>65535&&P++)}return O}function y(E,O){const Y=[];for(let w=0;w<O.length;w++){const P=O.codePointAt(w);P>65535&&w++,Y.push(a.U.codeToGlyph(E,P))}const v=E.GSUB;if(v){const{lookupList:w,featureList:P}=v;let z;const b=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,H=[];P.forEach(B=>{if(b.test(B.tag))for(let Z=0;Z<B.tab.length;Z++){if(H[B.tab[Z]])continue;H[B.tab[Z]]=!0;const K=w[B.tab[Z]],V=/^(isol|init|fina|medi)$/.test(B.tag);V&&!z&&(z=p(O));for(let k=0;k<Y.length;k++)(!z||!V||d[z[k]]===B.tag)&&a.U._applySubs(Y,k,K,w)}})}return Y}function x(E,O){const Y=new Int16Array(O.length*3);let v=0;for(;v<O.length;v++){const b=O[v];if(b===-1)continue;Y[v*3+2]=E.hmtx.aWidth[b];const H=E.GPOS;if(H){const B=H.lookupList;for(let Z=0;Z<B.length;Z++){const K=B[Z];for(let V=0;V<K.tabs.length;V++){const k=K.tabs[V];if(K.ltype===1){if(a._lctf.coverageIndex(k.coverage,b)!==-1&&k.pos){z(k.pos,v);break}}else if(K.ltype===2){let L=null,G=w();if(G!==-1){const W=a._lctf.coverageIndex(k.coverage,O[G]);if(W!==-1){if(k.fmt===1){const F=k.pairsets[W];for(let N=0;N<F.length;N++)F[N].gid2===b&&(L=F[N])}else if(k.fmt===2){const F=a.U._getGlyphClass(O[G],k.classDef1),N=a.U._getGlyphClass(b,k.classDef2);L=k.matrix[F][N]}if(L){L.val1&&z(L.val1,G),L.val2&&z(L.val2,v);break}}}}else if(K.ltype===4){const L=a._lctf.coverageIndex(k.markCoverage,b);if(L!==-1){const G=w(P),W=G===-1?-1:a._lctf.coverageIndex(k.baseCoverage,O[G]);if(W!==-1){const F=k.markArray[L],N=k.baseArray[W][F.markClass];Y[v*3]=N.x-F.x+Y[G*3]-Y[G*3+2],Y[v*3+1]=N.y-F.y+Y[G*3+1];break}}}else if(K.ltype===6){const L=a._lctf.coverageIndex(k.mark1Coverage,b);if(L!==-1){const G=w();if(G!==-1){const W=O[G];if(M(E,W)===3){const F=a._lctf.coverageIndex(k.mark2Coverage,W);if(F!==-1){const N=k.mark1Array[L],Q=k.mark2Array[F][N.markClass];Y[v*3]=Q.x-N.x+Y[G*3]-Y[G*3+2],Y[v*3+1]=Q.y-N.y+Y[G*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const B=w();if(B!==-1){const Z=E.kern.glyph1.indexOf(O[B]);if(Z!==-1){const K=E.kern.rval[Z].glyph2.indexOf(b);K!==-1&&(Y[B*3+2]+=E.kern.rval[Z].vals[K])}}}}return Y;function w(b){for(let H=v-1;H>=0;H--)if(O[H]!==-1&&(!b||b(O[H])))return H;return-1}function P(b){return M(E,b)===1}function z(b,H){for(let B=0;B<3;B++)Y[H*3+B]+=b[B]||0}}function M(E,O){const Y=E.GDEF&&E.GDEF.glyphClassDef;return Y?a.U._getGlyphClass(O,Y):0}function C(...E){for(let O=0;O<E.length;O++)if(typeof E[O]=="number")return E[O]}function R(E){const O=Object.create(null),Y=E["OS/2"],v=E.hhea,w=E.head.unitsPerEm,P=C(Y&&Y.sTypoAscender,v&&v.ascender,w),z={unitsPerEm:w,ascender:P,descender:C(Y&&Y.sTypoDescender,v&&v.descender,0),capHeight:C(Y&&Y.sCapHeight,P),xHeight:C(Y&&Y.sxHeight,P),lineGap:C(Y&&Y.sTypoLineGap,v&&v.lineGap),supportsCodePoint(b){return a.U.codeToGlyph(E,b)>0},forEachGlyph(b,H,B,Z){let K=0;const V=1/z.unitsPerEm*H,k=y(E,b);let L=0;const G=x(E,k);return k.forEach((W,F)=>{if(W!==-1){let N=O[W];if(!N){const{cmds:Q,crds:J}=a.U.glyphToPath(E,W);let ee="",se=0;for(let ge=0,Se=Q.length;ge<Se;ge++){const de=t[Q[ge]];ee+=Q[ge];for(let Pe=1;Pe<=de;Pe++)ee+=(Pe>1?",":"")+J[se++]}let ye,le,I,Ne;if(J.length){ye=le=1/0,I=Ne=-1/0;for(let ge=0,Se=J.length;ge<Se;ge+=2){let de=J[ge],Pe=J[ge+1];de<ye&&(ye=de),Pe<le&&(le=Pe),de>I&&(I=de),Pe>Ne&&(Ne=Pe)}}else ye=I=le=Ne=0;N=O[W]={index:W,advanceWidth:E.hmtx.aWidth[W],xMin:ye,yMin:le,xMax:I,yMax:Ne,path:ee}}Z.call(null,N,K+G[F*3]*V,G[F*3+1]*V,L),K+=G[F*3+2]*V,B&&(K+=B*H)}L+=b.codePointAt(L)>65535?2:1}),K}};return z}return function(O){const Y=new Uint8Array(O,0,4),v=a._bin.readASCII(Y,0,4);if(v==="wOFF")O=e(O);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return R(a.parse(O)[0])}}const hg=Ui({name:"Typr Font Parser",dependencies:[cg,ug,fg],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function dg(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var M=x>>5;this.buckets.set(M,(this.buckets.get(M)||0)|1<<(31&x))},e.prototype.has=function(x){var M=this.buckets.get(x>>5);return M!==void 0&&(M&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach(function(M,C){x.push((+C).toString(36)+":"+M.toString(36))}),x.join(",")},e.prototype.deserialize=function(x){var M=this;this.buckets.clear(),x.split(",").forEach(function(C){var R=C.split(":");M.buckets.set(parseInt(R[0],36),parseInt(R[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(x){var M=function(R){return R&n}(x).toString(16),C=function(R){return(R&n)+t-1}(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+M+"-"+C+".json"}function o(x,M){var C=x&r,R=M.codePointAt(C/6|0);return((R=(R||48)-48)&1<<C%6)!=0}function s(x,M){var C;(C=x,C.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(R){return R.split("-").map(function(E){return parseInt(E.trim(),16)})})).forEach(function(R){var E=R[0],O=R[1];O===void 0&&(O=E),M(E,O)})}function l(x,M){s(x,function(C,R){for(var E=C;E<=R;E++)M(E)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function m(x){var M=f.get(x);return M||(M=new e,l(x.ranges,function(C){return M.add(C)}),f.set(x,M)),M}var g,_=new Map;function d(x,M,C){return x[M]?M:x[C]?C:function(R){for(var E in R)return E}(x)}function p(x,M){var C=M;if(!x.includes(C)){C=1/0;for(var R=0;R<x.length;R++)Math.abs(x[R]-M)<Math.abs(C-M)&&(C=x[R])}return C}function y(x){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(M){g.add(M)})),g.has(x)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(x,M){M===void 0&&(M={});var C,R=M.lang;R===void 0&&(R=new RegExp("\\p{Script=Hangul}","u").test(C=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(C)?"ja":"en");var E=M.category;E===void 0&&(E="sans-serif");var O=M.style;O===void 0&&(O="normal");var Y=M.weight;Y===void 0&&(Y=400);var v=(M.dataUrl||h).replace(/\/$/g,""),w=new Map,P=new Uint8Array(x.length),z={},b={},H=new Array(x.length),B=new Map,Z=!1;function K(L){var G=_.get(L);return G||(G=fetch(v+"/"+L).then(function(W){if(!W.ok)throw new Error(W.statusText);return W.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(W){if(v!==h)return Z||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+W.message),Z=!0),v=h,_.delete(L),K(L);throw W}),_.set(L,G)),G}for(var V=function(L){var G=x.codePointAt(L),W=i(G);H[L]=W,c[W]||B.has(W)||B.set(W,K(W).then(function(F){c[W]=F})),G>65535&&(L++,k=L)},k=0;k<x.length;k++)V(k);return Promise.all(B.values()).then(function(){B.clear();for(var L=function(W){var F=x.codePointAt(W),N=null,Q=c[H[W]],J=void 0;for(var ee in Q){var se=b[ee];if(se===void 0&&(se=b[ee]=new RegExp(ee).test(R||"en")),se){for(var ye in J=ee,Q[ee])if(o(F,Q[ee][ye])){N=ye;break}break}}if(!N){e:for(var le in Q)if(le!==J){for(var I in Q[le])if(o(F,Q[le][I])){N=I;break e}}}N||(console.debug("No font coverage for U+"+F.toString(16)),N="latin"),H[W]=N,u[N]||B.has(N)||B.set(N,K("font-meta/"+N+".json").then(function(Ne){u[N]=Ne})),F>65535&&(W++,G=W)},G=0;G<x.length;G++)L(G);return Promise.all(B.values())}).then(function(){for(var L,G=null,W=0;W<x.length;W++){var F=x.codePointAt(W);if(G&&(y(F)||m(G).has(F)))P[W]=P[W-1];else{G=u[H[W]];var N=z[G.id];if(!N){var Q=G.typeforms,J=d(Q,E,"sans-serif"),ee=d(Q[J],O,"normal"),se=p((L=Q[J])===null||L===void 0?void 0:L[ee],Y);N=z[G.id]=v+"/font-files/"+G.id+"/"+J+"."+ee+"."+se+".woff"}var ye=w.get(N);ye==null&&(ye=w.size,w.set(N,ye)),P[W]=ye}F>65535&&(W++,P[W]=P[W-1])}return{fontUrls:Array.from(w.keys()),chars:P}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function pg(a,e){const t=Object.create(null),r=Object.create(null);function n(o,s){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=o,s(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(o,s){let l=t[o];l?s(l):r[o]?r[o].push(s):(r[o]=[s],n(o,c=>{c.src=o,t[o]=c,r[o].forEach(u=>u(c)),delete r[o]}))}return function(o,s,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const m=new Uint8Array(o.length),g=[];o.length||y();const _=new Map,d=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(M=>!M.lang||M.lang.test(l)).reverse(),c.length){let E=0;(function O(Y=0){for(let v=Y,w=o.length;v<w;v++){const P=o.codePointAt(v);if(E===1&&g[m[v-1]].supportsCodePoint(P)||/\s/.test(o[v]))m[v]=m[v-1],E===2&&(d[d.length-1][1]=v);else for(let z=m[v],b=c.length;z<=b;z++)if(z===b){const H=E===2?d[d.length-1]:d[d.length]=[v,v];H[1]=v,E=2}else{m[v]=z;const{src:H,unicodeRange:B}=c[z];if(!B||x(P,B)){const Z=t[H];if(!Z){i(H,()=>{O(v)});return}if(Z.supportsCodePoint(P)){let K=_.get(Z);typeof K!="number"&&(K=g.length,g.push(Z),_.set(Z,K)),m[v]=K,E=1;break}}}P>65535&&v+1<w&&(m[v+1]=m[v],v++,E===2&&(d[d.length-1][1]=v))}p()})()}else d.push([0,o.length-1]),p();function p(){if(d.length){const M=d.map(C=>o.substring(C[0],C[1]+1)).join(`
`);e.getFontsForString(M,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:C,chars:R})=>{const E=g.length;let O=0;d.forEach(v=>{for(let w=0,P=v[1]-v[0];w<=P;w++)m[v[0]+w]=R[O++]+E;O++});let Y=0;C.forEach((v,w)=>{i(v,P=>{g[w+E]=P,++Y===C.length&&y()})})})}else y()}function y(){s({chars:m,fonts:g})}function x(M,C){for(let R=0;R<C.length;R++){const[E,O=E]=C[R];if(E<=M&&M<=O)return!0}return!1}}}const mg=Ui({name:"FontResolver",dependencies:[pg,hg,dg],init(a,e,t){return a(e,t())}});function gg(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:_,fonts:d,style:p,weight:y,preResolvedFonts:x,unicodeFontsURL:M},C){const R=({chars:E,fonts:O})=>{let Y,v;const w=[];for(let P=0;P<E.length;P++)E[P]!==v?(v=E[P],w.push(Y={start:P,end:P,fontObj:O[E[P]]})):Y.end=P;C(w)};x?R(x):a(g,R,{lang:_,fonts:d,style:p,weight:y,unicodeFontsURL:M})}function s({text:g="",font:_,lang:d,sdfGlyphSize:p=64,fontSize:y=400,fontWeight:x=1,fontStyle:M="normal",letterSpacing:C=0,lineHeight:R="normal",maxWidth:E=1/0,direction:O,textAlign:Y="left",textIndent:v=0,whiteSpace:w="normal",overflowWrap:P="normal",anchorX:z=0,anchorY:b=0,metricsOnly:H=!1,unicodeFontsURL:B,preResolvedFonts:Z=null,includeCaretPositions:K=!1,chunkedBoundsSize:V=8192,colorRanges:k=null},L){const G=f(),W={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,C=+C,E=+E,R=R||"normal",v=+v,o({text:g,lang:d,style:M,weight:x,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:B,preResolvedFonts:Z},F=>{W.fontLoad=f()-G;const N=isFinite(E);let Q=null,J=null,ee=null,se=null,ye=null,le=null,I=null,Ne=null,ge=0,Se=0,de=w!=="nowrap";const Pe=new Map,ue=f();let T=v,S=0,D=new h;const te=[D];F.forEach(ce=>{const{fontObj:_e}=ce,{ascender:Ee,descender:ae,unitsPerEm:Ie,lineGap:Ue,capHeight:Te,xHeight:ve}=_e;let fe=Pe.get(_e);if(!fe){const Ae=y/Ie,U=R==="normal"?(Ee-ae+Ue)*Ae:R*y,Me=(U-(Ee-ae)*Ae)/2,he=Math.min(U,(Ee-ae)*Ae),xe=(Ee+ae)/2*Ae+he/2;fe={index:Pe.size,src:_e.src,fontObj:_e,fontSizeMult:Ae,unitsPerEm:Ie,ascender:Ee*Ae,descender:ae*Ae,capHeight:Te*Ae,xHeight:ve*Ae,lineHeight:U,baseline:-Me-Ee*Ae,caretTop:xe,caretBottom:xe-he},Pe.set(_e,fe)}const{fontSizeMult:we}=fe,Oe=g.slice(ce.start,ce.end+1);let qe,De;_e.forEachGlyph(Oe,y,C,(Ae,U,Me,he)=>{U+=S,he+=ce.start,qe=U,De=Ae;const xe=g.charAt(he),Ce=Ae.advanceWidth*we,Be=D.count;let Le;if("isEmpty"in Ae||(Ae.isWhitespace=!!xe&&new RegExp(n).test(xe),Ae.canBreakAfter=!!xe&&i.test(xe),Ae.isEmpty=Ae.xMin===Ae.xMax||Ae.yMin===Ae.yMax||r.test(xe)),!Ae.isWhitespace&&!Ae.isEmpty&&Se++,de&&N&&!Ae.isWhitespace&&U+Ce+T>E&&Be){if(D.glyphAt(Be-1).glyphObj.canBreakAfter)Le=new h,T=-U;else for(let Qe=Be;Qe--;)if(Qe===0&&P==="break-word"){Le=new h,T=-U;break}else if(D.glyphAt(Qe).glyphObj.canBreakAfter){Le=D.splitAt(Qe+1);const Ve=Le.glyphAt(0).x;T-=Ve;for(let Ze=Le.count;Ze--;)Le.glyphAt(Ze).x-=Ve;break}Le&&(D.isSoftWrapped=!0,D=Le,te.push(D),ge=E)}let We=D.glyphAt(D.count);We.glyphObj=Ae,We.x=U+T,We.y=Me,We.width=Ce,We.charIndex=he,We.fontData=fe,xe===`
`&&(D=new h,te.push(D),T=-(U+Ce+C*y)+v)}),S=qe+De.advanceWidth*we+C*y});let X=0;te.forEach(ce=>{let _e=!0;for(let Ee=ce.count;Ee--;){const ae=ce.glyphAt(Ee);_e&&!ae.glyphObj.isWhitespace&&(ce.width=ae.x+ae.width,ce.width>ge&&(ge=ce.width),_e=!1);let{lineHeight:Ie,capHeight:Ue,xHeight:Te,baseline:ve}=ae.fontData;Ie>ce.lineHeight&&(ce.lineHeight=Ie);const fe=ve-ce.baseline;fe<0&&(ce.baseline+=fe,ce.cap+=fe,ce.ex+=fe),ce.cap=Math.max(ce.cap,ce.baseline+Ue),ce.ex=Math.max(ce.ex,ce.baseline+Te)}ce.baseline-=X,ce.cap-=X,ce.ex-=X,X+=ce.lineHeight});let $=0,oe=0;if(z&&(typeof z=="number"?$=-z:typeof z=="string"&&($=-ge*(z==="left"?0:z==="center"?.5:z==="right"?1:c(z)))),b&&(typeof b=="number"?oe=-b:typeof b=="string"&&(oe=b==="top"?0:b==="top-baseline"?-te[0].baseline:b==="top-cap"?-te[0].cap:b==="top-ex"?-te[0].ex:b==="middle"?X/2:b==="bottom"?X:b==="bottom-baseline"?-te[te.length-1].baseline:c(b)*X)),!H){const ce=e.getEmbeddingLevels(g,O);Q=new Uint16Array(Se),J=new Uint8Array(Se),ee=new Float32Array(Se*2),se={},I=[1/0,1/0,-1/0,-1/0],Ne=[],K&&(le=new Float32Array(g.length*4)),k&&(ye=new Uint8Array(Se*3));let _e=0,Ee=-1,ae=-1,Ie,Ue;if(te.forEach((Te,ve)=>{let{count:fe,width:we}=Te;if(fe>0){let Oe=0;for(let he=fe;he--&&Te.glyphAt(he).glyphObj.isWhitespace;)Oe++;let qe=0,De=0;if(Y==="center")qe=(ge-we)/2;else if(Y==="right")qe=ge-we;else if(Y==="justify"&&Te.isSoftWrapped){let he=0;for(let xe=fe-Oe;xe--;)Te.glyphAt(xe).glyphObj.isWhitespace&&he++;De=(ge-we)/he}if(De||qe){let he=0;for(let xe=0;xe<fe;xe++){let Ce=Te.glyphAt(xe);const Be=Ce.glyphObj;Ce.x+=qe+he,De!==0&&Be.isWhitespace&&xe<fe-Oe&&(he+=De,Ce.width+=De)}}const Ae=e.getReorderSegments(g,ce,Te.glyphAt(0).charIndex,Te.glyphAt(Te.count-1).charIndex);for(let he=0;he<Ae.length;he++){const[xe,Ce]=Ae[he];let Be=1/0,Le=-1/0;for(let We=0;We<fe;We++)if(Te.glyphAt(We).charIndex>=xe){let Qe=We,Ve=We;for(;Ve<fe;Ve++){let Ze=Te.glyphAt(Ve);if(Ze.charIndex>Ce)break;Ve<fe-Oe&&(Be=Math.min(Be,Ze.x),Le=Math.max(Le,Ze.x+Ze.width))}for(let Ze=Qe;Ze<Ve;Ze++){const st=Te.glyphAt(Ze);st.x=Le-(st.x+st.width-Be)}break}}let U;const Me=he=>U=he;for(let he=0;he<fe;he++){const xe=Te.glyphAt(he);U=xe.glyphObj;const Ce=U.index,Be=ce.levels[xe.charIndex]&1;if(Be){const Le=e.getMirroredCharacter(g[xe.charIndex]);Le&&xe.fontData.fontObj.forEachGlyph(Le,0,0,Me)}if(K){const{charIndex:Le,fontData:We}=xe,Qe=xe.x+$,Ve=xe.x+xe.width+$;le[Le*4]=Be?Ve:Qe,le[Le*4+1]=Be?Qe:Ve,le[Le*4+2]=Te.baseline+We.caretBottom+oe,le[Le*4+3]=Te.baseline+We.caretTop+oe;const Ze=Le-Ee;Ze>1&&u(le,Ee,Ze),Ee=Le}if(k){const{charIndex:Le}=xe;for(;Le>ae;)ae++,k.hasOwnProperty(ae)&&(Ue=k[ae])}if(!U.isWhitespace&&!U.isEmpty){const Le=_e++,{fontSizeMult:We,src:Qe,index:Ve}=xe.fontData,Ze=se[Qe]||(se[Qe]={});Ze[Ce]||(Ze[Ce]={path:U.path,pathBounds:[U.xMin,U.yMin,U.xMax,U.yMax]});const st=xe.x+$,Wt=xe.y+Te.baseline+oe;ee[Le*2]=st,ee[Le*2+1]=Wt;const Xt=st+U.xMin*We,It=Wt+U.yMin*We,an=st+U.xMax*We,At=Wt+U.yMax*We;Xt<I[0]&&(I[0]=Xt),It<I[1]&&(I[1]=It),an>I[2]&&(I[2]=an),At>I[3]&&(I[3]=At),Le%V===0&&(Ie={start:Le,end:Le,rect:[1/0,1/0,-1/0,-1/0]},Ne.push(Ie)),Ie.end++;const ht=Ie.rect;if(Xt<ht[0]&&(ht[0]=Xt),It<ht[1]&&(ht[1]=It),an>ht[2]&&(ht[2]=an),At>ht[3]&&(ht[3]=At),Q[Le]=Ce,J[Le]=Ve,k){const sn=Le*3;ye[sn]=Ue>>16&255,ye[sn+1]=Ue>>8&255,ye[sn+2]=Ue&255}}}}}),le){const Te=g.length-Ee;Te>1&&u(le,Ee,Te)}}const me=[];Pe.forEach(({index:ce,src:_e,unitsPerEm:Ee,ascender:ae,descender:Ie,lineHeight:Ue,capHeight:Te,xHeight:ve})=>{me[ce]={src:_e,unitsPerEm:Ee,ascender:ae,descender:Ie,lineHeight:Ue,capHeight:Te,xHeight:ve}}),W.typesetting=f()-ue,L({glyphIds:Q,glyphFontIndices:J,glyphPositions:ee,glyphData:se,fontData:me,caretPositions:le,glyphColors:ye,chunkedBounds:Ne,fontSize:y,topBaseline:oe+te[0].baseline,blockBounds:[$,oe-X,$+ge,oe],visibleBounds:I,timings:W})})}function l(g,_){s({...g,metricsOnly:!0},d=>{const[p,y,x,M]=d.blockBounds;_({width:x-p,height:M-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),d=_?parseFloat(_[1]):NaN;return isNaN(d)?0:d/100}function u(g,_,d){const p=g[_*4],y=g[_*4+1],x=g[_*4+2],M=g[_*4+3],C=(y-p)/d;for(let R=0;R<d;R++){const E=(_+R)*4;g[E]=p+C*R,g[E+1]=p+C*(R+1),g[E+2]=x,g[E+3]=M}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const m=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/m.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*m.length),_}},h.flyweight=m.reduce((g,_,d,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*m.length+d]},set(y){this.data[this.index*m.length+d]=y}}),g),{data:null,index:0}),{typeset:s,measure:l}}const Zn=()=>(self.performance||Date).now(),ea=gc();let Sl;function _g(a,e,t,r,n,i,o,s,l,c,u=!0){return u?xg(a,e,t,r,n,i,o,s,l,c).then(null,f=>(Sl||(console.warn("WebGL SDF generation failed, falling back to JS",f),Sl=!0),yl(a,e,t,r,n,i,o,s,l,c))):yl(a,e,t,r,n,i,o,s,l,c)}const Hr=[],vg=5;let us=0;function vc(){const a=Zn();for(;Hr.length&&Zn()-a<vg;)Hr.shift()();us=Hr.length?setTimeout(vc,0):0}const xg=(...a)=>new Promise((e,t)=>{Hr.push(()=>{const r=Zn();try{ea.webgl.generateIntoCanvas(...a),e({timing:Zn()-r})}catch(n){t(n)}}),us||(us=setTimeout(vc,0))}),Sg=4,Mg=2e3,Ml={};let yg=0;function yl(a,e,t,r,n,i,o,s,l,c){const u="TroikaTextSDFGenerator_JS_"+yg++%Sg;let f=Ml[u];return f||(f=Ml[u]={workerModule:Ui({name:u,workerId:u,dependencies:[gc,Zn],init(h,m){const g=h().javascript.generate;return function(..._){const d=m();return{textureData:g(..._),timing:m()-d}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:m})=>{const g=Zn(),_=new Uint8Array(h.length*4);for(let d=0;d<h.length;d++)_[d*4+c]=h[d];return ea.webglUtils.renderImageData(o,_,s,l,a,e,1<<3-c),m+=Zn()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{$m(u)},Mg)),{timing:m}})}function Eg(a){a._warm||(ea.webgl.isSupported(a),a._warm=!0)}const Tg=ea.webglUtils.resizeWebGLCanvasWithoutClearing,Zi={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},bg=new Je;function _i(){return(self.performance||Date).now()}const El=Object.create(null);function Ag(a,e){a=Rg({},a);const t=_i(),r=[];if(a.font&&r.push({label:"user",src:Cg(a.font)}),a.font=r,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Zi.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||Zi.unicodeFontsURL,a.colorRanges!=null){let f={};for(let h in a.colorRanges)if(a.colorRanges.hasOwnProperty(h)){let m=a.colorRanges[h];typeof m!="number"&&(m=bg.set(m).getHex()),f[h]=m}a.colorRanges=f}Object.freeze(a);const{textureWidth:n,sdfExponent:i}=Zi,{sdfGlyphSize:o}=a,s=n/o*4;let l=El[o];if(!l){const f=document.createElement("canvas");f.width=n,f.height=o*256/s,l=El[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new bt(f,void 0,void 0,void 0,Mt,Mt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,wg(l)}const{sdfTexture:c,sdfCanvas:u}=l;Ug(a).then(f=>{const{glyphIds:h,glyphFontIndices:m,fontData:g,glyphPositions:_,fontSize:d,timings:p}=f,y=[],x=new Float32Array(h.length*4);let M=0,C=0;const R=_i(),E=g.map(P=>{let z=l.glyphsByFont.get(P.src);return z||l.glyphsByFont.set(P.src,z=new Map),z});h.forEach((P,z)=>{const b=m[z],{src:H,unitsPerEm:B}=g[b];let Z=E[b].get(P);if(!Z){const{path:G,pathBounds:W}=f.glyphData[H][P],F=Math.max(W[2]-W[0],W[3]-W[1])/o*(Zi.sdfMargin*o+.5),N=l.glyphCount++,Q=[W[0]-F,W[1]-F,W[2]+F,W[3]+F];E[b].set(P,Z={path:G,atlasIndex:N,sdfViewBox:Q}),y.push(Z)}const{sdfViewBox:K}=Z,V=_[C++],k=_[C++],L=d/B;x[M++]=V+K[0]*L,x[M++]=k+K[1]*L,x[M++]=V+K[2]*L,x[M++]=k+K[3]*L,h[z]=Z.atlasIndex}),p.quads=(p.quads||0)+(_i()-R);const O=_i();p.sdf={};const Y=u.height,v=Math.ceil(l.glyphCount/s),w=Math.pow(2,Math.ceil(Math.log2(v*o)));w>Y&&(console.info(`Increasing SDF texture size ${Y}->${w}`),Tg(u,n,w),c.dispose()),Promise.all(y.map(P=>xc(P,l,a.gpuAccelerateSDF).then(({timing:z})=>{p.sdf[P.atlasIndex]=z}))).then(()=>{y.length&&!l.contextLost&&(Sc(l),c.needsUpdate=!0),p.sdfTotal=_i()-O,p.total=_i()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:o,sdfExponent:i,glyphBounds:x,glyphAtlasIndices:h,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||Eg(u)})}function xc({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},o){if(i)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:l}=Zi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(s/r)*r,h=Math.floor(u/(s/r))*r,m=e%4;return _g(r,r,a,t,c,l,n,f,h,m,o)}function wg(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(xc(i,a,!0))})}),Promise.all(r).then(()=>{Sc(a),a.sdfTexture.needsUpdate=!0})})}function Rg(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Br;function Cg(a){return Br||(Br=typeof document>"u"?{}:document.createElement("a")),Br.href=a,Br.href}function Sc(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==r*n*4)&&(o=new Uint8Array(r*n*4),t.image={width:r,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,o)}}const Lg=Ui({name:"Typesetter",dependencies:[gg,mg,tg],init(a,e,t){return a(e,t())}}),Ug=Ui({name:"Typesetter",dependencies:[Lg],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),Tl={};function Pg(a){let e=Tl[a];if(!e){const t=new Qn(1,1,a,a),r=t.clone(),n=t.attributes,i=r.attributes,o=new Ht,s=n.uv.count;for(let l=0;l<s;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new rn([...n[l].array,...i[l].array],n[l].itemSize))}),o.setIndex([...t.index.array,...r.index.array.map(l=>l+s)]),o.translate(.5,.5,0),e=Tl[a]=o}return e}const Dg="aTroikaGlyphBounds",bl="aTroikaGlyphIndex",Ig="aTroikaGlyphColor";class Fg extends jm{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new nr,this.boundingBox=new Ci}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Tt?t/2:0,e===en?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Pg(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){qa(this,Dg,e,4),qa(this,bl,t,1),qa(this,Ig,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:o,max:s,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),m=e[0]/h,g=e[2]/h,_=i((m+u)/f)!==i((g+u)/f)?-h:o(l(m)*h,l(g)*h),d=i((m-u)/f)!==i((g-u)/f)?h:s(l(m)*h,l(g)*h),p=i((m+n)/f)!==i((g+n)/f)?h*2:s(h-c(m)*h,h-c(g)*h);r.min.set(_,e[1],t<0?-p:0),r.max.set(d,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(bl).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function qa(a,e,t,r){const n=a.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(a.setAttribute(e,new Hm(t,r)),delete a._maxInstanceCount,a.dispose()):n&&a.deleteAttribute(e)}const Ng=`
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
`,Og=`
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
`,Bg=`
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
`,Gg=`
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
`;function kg(a){const e=cs(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ke},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new nt(0,0,0,0)},uTroikaClipRect:{value:new nt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ke},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Ng,vertexTransform:Og,fragmentDefs:Bg,fragmentColorTransform:Gg,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(_c,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ss=new rr({color:16777215,side:en,transparent:!0}),Al=8421504,wl=new lt,Gr=new j,ja=new j,Ki=[],zg=new j,Ka="+x+y";function Rl(a){return Array.isArray(a)?a[0]:a}let Mc=()=>{const a=new Dt(new Qn(1,1),Ss);return Mc=()=>a,a},yc=()=>{const a=new Dt(new Qn(1,1,32,1),Ss);return yc=()=>a,a};const Hg={type:"syncstart"},Vg={type:"synccomplete"},Ec=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Wg=Ec.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Tc extends Dt{constructor(){const e=new Fg;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Al,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ka,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Hg),Ag({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(Vg),e&&e()})))}onBeforeRender(e,t,r,n,i,o){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=_n}onAfterRender(e,t,r,n,i,o){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ss.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=kg(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Rl(this.material).getDepthMaterial()}get customDistanceMaterial(){return Rl(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:s,blockBounds:l}=n;r.uTroikaSDFTexture.value=s,r.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,m,g,_=0,d=0;if(t){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:M,outlineBlur:C,outlineOpacity:R}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(C)||0),h=R,_=this._parsePercent(x)||0,d=this._parsePercent(M)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Al),m=this.strokeOpacity,m==null&&(m=1)),h=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(_,d),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=m,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const y=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const s=e.hasOwnProperty("color")?e.color:e.color=new Je;(i!==s._input||typeof i=="object")&&s.set(s._input=i)}let o=this.orientation||Ka;if(o!==e._orientation){let s=r.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==Ka&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;Gr.set(0,0,0)[u]=c==="-"?1:-1,ja.set(0,0,0)[h]=f==="-"?-1:1,wl.lookAt(zg,Gr.cross(ja),ja),s.setFromMatrix4(wl)}else s.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ke){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Ke){return Gr.copy(e),this.localPositionToTextCoords(this.worldToLocal(Gr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,o=n?yc():Mc(),s=o.geometry,{position:l,uv:c}=s.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let m=0;n&&(m=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,m)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,Ki.length=0,o.raycast(e,Ki);for(let u=0;u<Ki.length;u++)Ki[u].object=this,t.push(Ki[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Wg.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Ec.forEach(a=>{const e="_private_"+a;Object.defineProperty(Tc.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const Xg=document.getElementById("scene"),sr=new fc({canvas:Xg,antialias:!0,alpha:!0});sr.setPixelRatio(Math.min(window.devicePixelRatio,2));sr.setSize(window.innerWidth,window.innerHeight);sr.outputColorSpace=pt;const Vt=new zm;Vt.fog=new _s(1706758,6,18);const Yn=new Bt(45,window.innerWidth/window.innerHeight,.1,100);Yn.position.set(0,.2,7.5);const bc=new pc(16766634,1.2);bc.position.set(4,6,6);Vt.add(bc);const Ac=new pc(16762785,.5);Ac.position.set(-4,2,3);Vt.add(Ac);const wc=new Xm(16755302,.9,20);wc.position.set(0,3,-4);Vt.add(wc);Vt.add(new qm(16770508,.35));const Ms=1200,Vr=new Float32Array(Ms*3),Rc=new Float32Array(Ms);for(let a=0;a<Ms;a++){const e=Math.random()*7+2,t=Math.random()*Math.PI*2,r=(Math.random()-.5)*4;Vr[a*3]=Math.cos(t)*e,Vr[a*3+1]=r,Vr[a*3+2]=Math.sin(t)*e,Rc[a]=Math.random()*1.5+.5}const ys=new Ht;ys.setAttribute("position",new Gt(Vr,3));ys.setAttribute("size",new Gt(Rc,1));const Yg=new hc({color:16765834,size:.035,transparent:!0,opacity:.6,depthWrite:!1}),fs=new Vm(ys,Yg);Vt.add(fs);const qg="/fonts/SourceHanSerifCN-VF.otf";function Es({text:a,fontSize:e,position:t,color:r,opacity:n,maxWidth:i,lineHeight:o}){const s=new Tc;return s.text=a,s.font=qg,s.fontSize=e,s.color=r,s.anchorX="center",s.anchorY="middle",s.position.set(t.x,t.y,t.z),s.maxWidth=i,s.lineHeight=o,s.material.transparent=!0,s.material.opacity=n,s.outlineWidth="2%",s.outlineColor=16765608,s.sync(),s}const Cc=Es({text:"新年快乐，李婷",fontSize:.75,position:new j(0,1.3,0),color:16773334,opacity:0,maxWidth:6,lineHeight:1.2});Vt.add(Cc);const jg=["身无彩凤双飞翼，心有灵犀一点通。","两情若是久长时，又岂在朝朝暮暮。","问世间，情是何物，直教生死相许？","Love looks not with the eyes, but with the mind."],Kg=jg.map((a,e)=>{const t=Es({text:a,fontSize:.28,position:new j(0,.45-e*.45,.05),color:16774886,opacity:0,maxWidth:7.2,lineHeight:1.3});return Vt.add(t),t}),Lc=Es({text:"愿你我如星与风，岁岁相依。",fontSize:.32,position:new j(0,-1.7,.05),color:16771792,opacity:0,maxWidth:6.5,lineHeight:1.2});Vt.add(Lc);const Uc=new vs(.25,32,32),Zg=new rr({color:16757872}),Ts=new Dt(Uc,Zg);Ts.position.set(-1.8,-.4,-1.2);Vt.add(Ts);const bs=new Dt(Uc,new rr({color:16767400}));bs.position.set(2,.8,-1.6);Vt.add(bs);let vi=0;function Pc(){vi+=.005,requestAnimationFrame(Pc),Yn.position.x=Math.sin(vi*.7)*.6,Yn.position.y=.2+Math.sin(vi*.4)*.1,Yn.lookAt(0,.2,0),fs.rotation.y+=6e-4,fs.rotation.x+=2e-4;const a=(e,t,r)=>{const n=Math.min(Math.max((vi-t)/r,0),1);e.material.opacity=n};a(Cc,.2,.8),Kg.forEach((e,t)=>a(e,.7+t*.4,.8)),a(Lc,2.6,1),Ts.scale.setScalar(1+Math.sin(vi*1.4)*.08),bs.scale.setScalar(1+Math.cos(vi*1.2)*.08),sr.render(Vt,Yn)}Pc();window.addEventListener("resize",()=>{const a=window.innerWidth,e=window.innerHeight;Yn.aspect=a/e,Yn.updateProjectionMatrix(),sr.setSize(a,e)});
