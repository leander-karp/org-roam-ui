"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{898:function(n,t,r){r.r(t),r.d(t,{forceCenter:function(){return i.Z},forceCollide:function(){return y},forceLink:function(){return h.Z},forceManyBody:function(){return Z.Z},forceRadial:function(){return g.Z},forceSimulation:function(){return s.Z},forceX:function(){return d},forceY:function(){return p},forceZ:function(){return x}});var i=r(9023),f=r(9999),u=r(9980),e=r(7552),o=r(297),c=r(682);function a(n){return n.x+n.vx}function l(n){return n.y+n.vy}function v(n){return n.z+n.vz}function y(n){var t,r,i,y,h=1,Z=1;function g(){for(var n,o,g,d,p,x,z,A,N=t.length,k=0;k<Z;++k)for(n=0,o=(1===r?(0,f.Z)(t,a):2===r?(0,u.Z)(t,a,l):3===r?(0,e.Z)(t,a,l,v):null).visitAfter(s);n<N;++n)A=(z=i[(g=t[n]).index])*z,d=g.x+g.vx,r>1&&(p=g.y+g.vy),r>2&&(x=g.z+g.vz),o.visit(C);function C(n,t,i,f,u,e,o){var a=[t,i,f,u,e,o],l=a[0],v=a[1],Z=a[2],s=a[r],N=a[r+1],k=a[r+2],C=n.data,M=n.r,_=z+M;if(C){if(C.index>g.index){var w=d-C.x-C.vx,b=r>1?p-C.y-C.vy:0,m=r>2?x-C.z-C.vz:0,E=w*w+b*b+m*m;E<_*_&&(0===w&&(E+=(w=(0,c.Z)(y))*w),r>1&&0===b&&(E+=(b=(0,c.Z)(y))*b),r>2&&0===m&&(E+=(m=(0,c.Z)(y))*m),E=(_-(E=Math.sqrt(E)))/E*h,g.vx+=(w*=E)*(_=(M*=M)/(A+M)),r>1&&(g.vy+=(b*=E)*_),r>2&&(g.vz+=(m*=E)*_),C.vx-=w*(_=1-_),r>1&&(C.vy-=b*_),r>2&&(C.vz-=m*_))}return}return l>d+_||s<d-_||r>1&&(v>p+_||N<p-_)||r>2&&(Z>x+_||k<x-_)}}function s(n){if(n.data)return n.r=i[n.data.index];for(var t=n.r=0;t<Math.pow(2,r);++t)n[t]&&n[t].r>n.r&&(n.r=n[t].r)}function d(){if(t){var r,f,u=t.length;for(r=0,i=Array(u);r<u;++r)i[(f=t[r]).index]=+n(f,r,t)}}return"function"!=typeof n&&(n=(0,o.Z)(null==n?1:+n)),g.initialize=function(n,...i){t=n,y=i.find(n=>"function"==typeof n)||Math.random,r=i.find(n=>[1,2,3].includes(n))||2,d()},g.iterations=function(n){return arguments.length?(Z=+n,g):Z},g.strength=function(n){return arguments.length?(h=+n,g):h},g.radius=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),d(),g):n},g}var h=r(7950),Z=r(1037),g=r(8558),s=r(4384);function d(n){var t,r,i,f=(0,o.Z)(.1);function u(n){for(var f,u=0,e=t.length;u<e;++u)f=t[u],f.vx+=(i[u]-f.x)*r[u]*n}function e(){if(t){var u,e=t.length;for(u=0,r=Array(e),i=Array(e);u<e;++u)r[u]=isNaN(i[u]=+n(t[u],u,t))?0:+f(t[u],u,t)}}return"function"!=typeof n&&(n=(0,o.Z)(null==n?0:+n)),u.initialize=function(n){t=n,e()},u.strength=function(n){return arguments.length?(f="function"==typeof n?n:(0,o.Z)(+n),e(),u):f},u.x=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),e(),u):n},u}function p(n){var t,r,i,f=(0,o.Z)(.1);function u(n){for(var f,u=0,e=t.length;u<e;++u)f=t[u],f.vy+=(i[u]-f.y)*r[u]*n}function e(){if(t){var u,e=t.length;for(u=0,r=Array(e),i=Array(e);u<e;++u)r[u]=isNaN(i[u]=+n(t[u],u,t))?0:+f(t[u],u,t)}}return"function"!=typeof n&&(n=(0,o.Z)(null==n?0:+n)),u.initialize=function(n){t=n,e()},u.strength=function(n){return arguments.length?(f="function"==typeof n?n:(0,o.Z)(+n),e(),u):f},u.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),e(),u):n},u}function x(n){var t,r,i,f=(0,o.Z)(.1);function u(n){for(var f,u=0,e=t.length;u<e;++u)f=t[u],f.vz+=(i[u]-f.z)*r[u]*n}function e(){if(t){var u,e=t.length;for(u=0,r=Array(e),i=Array(e);u<e;++u)r[u]=isNaN(i[u]=+n(t[u],u,t))?0:+f(t[u],u,t)}}return"function"!=typeof n&&(n=(0,o.Z)(null==n?0:+n)),u.initialize=function(n){t=n,e()},u.strength=function(n){return arguments.length?(f="function"==typeof n?n:(0,o.Z)(+n),e(),u):f},u.z=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),e(),u):n},u}}}]);