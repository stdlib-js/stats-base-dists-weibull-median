// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}function e(r){return t(r/2)}function u(r){return e(r>0?r-1:r+1)}var i=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;function f(r){return r===i||r===o}var a=Math.sqrt;function c(r){return Math.abs(r)}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;var p="function"==typeof Symbol?Symbol.toStringTag:"";var A=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return v.call(r);t=r[p],i=p,n=null!=(u=r)&&l.call(u,i);try{r[p]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[p]=t:delete r[p],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null;var U,m="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h=U,I="function"==typeof Float64Array;var N="function"==typeof Float64Array?Float64Array:null;var s,d="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var F=s,S="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var O,g="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var E=O,j="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var G,L="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,65536,65537]),t=n,r=(j&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var W,M={uint16:G,uint8:E};(W=new M.uint16(1))[0]=4660;var P,V,Y=52===new M.uint8(W.buffer)[0];!0===Y?(P=1,V=0):(P=0,V=1);var _={HIGH:P,LOW:V},q=new F(1),x=new h(q.buffer),k=_.HIGH,z=_.LOW;function B(r,n){return q[0]=n,r[0]=x[k],r[1]=x[z],r}function C(r,n){return 1===arguments.length?B([0,0],r):B(r,n)}var D=!0===Y?0:1,J=new F(1),K=new h(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}function R(r){return 0|r}var X,Z,$=!0===Y?1:0,rr=new F(1),nr=new h(rr.buffer);function tr(r){return rr[0]=r,nr[$]}!0===Y?(X=1,Z=0):(X=0,Z=1);var er={HIGH:X,LOW:Z},ur=new F(1),ir=new h(ur.buffer),or=er.HIGH,fr=er.LOW;function ar(r,n){return ir[or]=r,ir[fr]=n,ur[0]}var cr=[0,0];function yr(r,n){var t,e;return C(cr,r),t=cr[0],t&=2147483647,e=tr(n),ar(t|=e&=2147483648,cr[1])}var vr=!0===Y?1:0,lr=new F(1),pr=new h(lr.buffer);function Ar(r,n){return lr[0]=r,pr[vr]=n>>>0,lr[0]}var wr=[1,1.5],br=[0,.5849624872207642],Ur=[0,1.350039202129749e-8];function mr(n,t){return r(t)||f(t)?(n[0]=t,n[1]=0,n):0!==t&&c(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var hr=[0,0],Ir=[0,0];function Nr(n,t){var e,u;return 0===t||0===n||r(n)||f(n)?n:(function(r,n){1===arguments.length?mr([0,0],r):mr(r,n)}(hr,n),t+=hr[1],t+=function(r){var n=tr(r);return(n=(2146435072&n)>>>20)-1023|0}(n=hr[0]),t<-1074?yr(0,n):t>1023?n<0?o:i:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,C(Ir,n),e=Ir[0],e&=2148532223,u*ar(e|=t+1023<<20,Ir[1])))}var sr=.6931471805599453;var dr=1e300,Fr=1e-300,Sr=[0,0],Hr=[0,0];function Or(n,e){var y,v,l,p,A,w,b,U,m,h,I,N,s,d;if(r(n)||r(e))return NaN;if(C(Sr,e),A=Sr[0],0===Sr[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return a(n);if(-.5===e)return 1/a(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(f(e))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(n===i)?0:i}(n,e)}if(C(Sr,n),p=Sr[0],0===Sr[1]){if(0===p)return function(r,n){return n===o?i:n===i?0:n>0?u(n)?r:0:u(n)?yr(i,r):i}(n,e);if(1===n)return 1;if(-1===n&&u(e))return-1;if(f(n))return n===o?Or(-0,-e):e<0?0:i}if(n<0&&!1===t(e))return(n-n)/(n-n);if(l=c(n),y=2147483647&p|0,v=2147483647&A|0,b=A>>>31|0,w=(w=p>>>31|0)&&u(e)?-1:1,v>1105199104){if(v>1139802112)return function(r,n){return(2147483647&tr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,e);if(y<1072693247)return 1===b?w*dr*dr:w*Fr*Fr;if(y>1072693248)return 0===b?w*dr*dr:w*Fr*Fr;I=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Q(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Hr,l)}else I=function(r,n,t){var e,u,i,o,f,a,c,y,v,l,p,A,w,b,U,m,h,I,N,s,d;return I=0,t<1048576&&(I-=53,t=tr(n*=9007199254740992)),I+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?s=0:N<767610?s=1:(s=0,I+=1,t-=1048576),o=Q(u=(m=(n=Ar(n,t))-(c=wr[s]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ar(0,e+=s<<18),U=(i=u*u)*i*(0===(d=i)?.5999999999999946:.5999999999999946+d*(.4285714285785502+d*(.33333332981837743+d*(.272728123808534+d*(.23066074577556175+.20697501780033842*d))))),a=Q(a=3+(i=o*o)+(U+=(f=h*(m-o*a-o*(n-(a-c))))*(o+u)),0),w=(p=-7.028461650952758e-9*(v=Q(v=(m=o*a)+(h=f*a+(U-(a-3-i))*u),0))+.9617966939259756*(h-(v-m))+Ur[s])-((A=Q(A=(l=.9617967009544373*v)+p+(y=br[s])+(b=I),0))-b-y-l),r[0]=A,r[1]=w,r}(Hr,l,y);if(h=(e-(U=Q(e,0)))*I[0]+e*I[1],m=U*I[0],C(Sr,N=h+m),s=R(Sr[0]),d=R(Sr[1]),s>=1083179008){if(0!=(s-1083179008|d))return w*dr*dr;if(h+8008566259537294e-32>N-m)return w*dr*dr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|d))return w*Fr*Fr;if(h<=N-m)return w*Fr*Fr}return N=function(r,n,t){var e,u,i,o,f,a,c,y,v,l,p;return l=((v=2147483647&r|0)>>20)-1023|0,y=0,v>1071644672&&(e=((y=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-l>>>0,r<0&&(y=-y),n-=i=Ar(0,e)),r=R(r=tr(c=1-((c=(o=.6931471824645996*(i=Q(i=t+n,0)))+(f=(t-(i-n))*sr+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=y<<20>>>0)>>20<=0?Nr(c,y):Ar(c,r)}(s,m,h),w*N}function gr(n,t){return r(n)||r(t)||n<=0||t<=0?NaN:t*Or(sr,1/n)}export{gr as default};
//# sourceMappingURL=mod.js.map
