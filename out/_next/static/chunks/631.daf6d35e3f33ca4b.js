"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[631],{4631:function(e,l,t){t.r(l),t.d(l,{default:function(){return O}});var r=t(5893),i=t(6353),n=t(6467),o=t(8940),d=t(7747),u=t(8837),a=t(6765),c=t(7294),s=t(2802),h=t.n(s),g=t(5871),v=t(2280),f=t(2591),p=t(2663),k=t.n(p),m=t(3179);let C=e=>{var l;let{linksByNodeId:t,visuals:r,highlightedNodes:i,previouslyHighlightedNodes:n,opacity:o,node:d}=e,u=null!==(l=t[d.id])&&void 0!==l?l:[],a=u.length?u.filter(e=>"parent"===e.type).length:0,c=3+u.length*r.nodeSizeLinks-(m.hX.parent?0:a);return 1===r.highlightNodeSize?c:c*(i[d.id]||n[d.id]?1+o*(r.highlightNodeSize-1):1)};function b(e,l){return"rgba("+(e=e.replace("#","")).match(RegExp("(.{"+e.length/3+"})","g")).map(l=>parseInt(e.length%2?l+l:l,16)).concat(isFinite(l)?l:1).join(",")+")"}let y=(e,l,t,r,i)=>i?Math.max(e,r):1*e*(-1*(l.highlightFade*r-1));var S=t(5315);let N=e=>{let{ids:l,excludedIds:t,n:r,linksByNodeId:i}=e,n=[l[0]],o=[],d=[l[0]];return Array.from({length:r},()=>{n.forEach(e=>{var l;(null!==(l=i[e])&&void 0!==l?l:[]).forEach(e=>{let[l,r]=(0,S.J)(e);if(!t.some(e=>[l,r].includes(e))){if(!d.includes(l)){o.push(l);return}d.includes(r)||o.push(r)}})}),n=o,o.forEach(e=>e&&d.push(e)),o=[]}),d};var x=t(9055);let I=(e,l,t)=>Math.min(Math.max(e,l),t),F=e=>{var l,t;let{id:r,linksByNodeId:i,visuals:n,coloring:o,cluster:d}=e,u=null!==(t=null===(l=i[r])||void 0===l?void 0:l.length)&&void 0!==t?t:0;return"degree"===o.method?n.nodeColorScheme[I(u,0,n.nodeColorScheme.length-1)]:n.nodeColorScheme[u&&d[r]%n.nodeColorScheme.length]},L=e=>{var l,t;let{node:r,theme:i,highlightedNodes:n,previouslyHighlightedNodes:o,visuals:d,tagColors:u,highlightColors:a,opacity:c,emacsNodeId:s,linksByNodeId:h,cluster:g,coloring:v}=e,f=n[r.id]||o[r.id];if(d.emacsNodeColor&&r.id===s)return(0,x.p)(d.emacsNodeColor,i);if(u&&(null==r?void 0:r.tags.some(e=>u[e]))){let e=u[null==r?void 0:r.tags.filter(e=>u[e])[0]];return f?a[e][e](d.highlightFade*c):a[e][d.backgroundColor](d.highlightFade*c)}return d.citeNodeColor&&(null==r?void 0:null===(l=r.properties)||void 0===l?void 0:l.ROAM_REFS)&&(null==r?void 0:null===(t=r.properties)||void 0===t?void 0:t.FILELESS)?f?(0,x.p)(d.citeNodeColor,i):a[d.citeNodeColor][d.backgroundColor](d.highlightFade*c):d.refNodeColor&&r.properties.ROAM_REFS?f?(0,x.p)(d.refNodeColor,i):a[d.refNodeColor][d.backgroundColor](d.highlightFade*c):f?d.nodeHighlight?a[F({id:r.id,cluster:g,coloring:v,linksByNodeId:h,visuals:d})][d.nodeHighlight](c):(0,x.p)(F({id:r.id,cluster:g,coloring:v,linksByNodeId:h,visuals:d}),i):a[F({id:r.id,cluster:g,coloring:v,linksByNodeId:h,visuals:d})][d.backgroundColor](d.highlightFade*c)},w=(e,l)=>{var t,r;return(null===(t=e.source)||void 0===t?void 0:t.id)===(null==l?void 0:l.id)||(null===(r=e.target)||void 0===r?void 0:r.id)===(null==l?void 0:l.id)},E=e=>{let{sourceId:l,targetId:t,linksByNodeId:r,visuals:i,coloring:n,cluster:o}=e;return r[l].length>r[t].length?F({id:l,linksByNodeId:r,visuals:i,cluster:o,coloring:n}):F({id:t,visuals:i,linksByNodeId:r,cluster:o,coloring:n})},M=e=>{let{sourceId:l,targetId:t,needsHighlighting:r,theme:i,visuals:n,highlightColors:o,opacity:d,linksByNodeId:u,coloring:a,cluster:c}=e;if(!n.linkHighlight&&!n.linkColorScheme&&!r){let e=E({sourceId:l,targetId:t,linksByNodeId:u,visuals:n,coloring:a,cluster:c});return(0,x.p)(e,i)}if(!r&&!n.linkColorScheme)return o[E({sourceId:l,targetId:t,linksByNodeId:u,visuals:n,coloring:a,cluster:c})][n.backgroundColor](n.highlightFade*d);if(!r)return o[n.linkColorScheme][n.backgroundColor](n.highlightFade*d);if(!n.linkHighlight&&!n.linkColorScheme){let e=E({sourceId:l,targetId:t,linksByNodeId:u,visuals:n,coloring:a,cluster:c});return(0,x.p)(e,i)}return n.linkHighlight?n.linkColorScheme?o[n.linkColorScheme][n.linkHighlight](d):o[E({sourceId:l,targetId:t,linksByNodeId:u,visuals:n,coloring:a,cluster:c})][n.linkHighlight](d):(0,x.p)(n.linkColorScheme,i)},R=t.e(674).then(t.bind(t,898));function O(e){let{graphRef:l,physics:t,graphData:s,threeDim:p,linksByNodeId:m,filter:I,emacsNodeId:F,nodeById:E,visuals:O,behavior:D,mouse:H,scope:B,local:A,webSocket:j,tagColors:z,setPreviewNode:T,sidebarHighlightedNode:W,windowWidth:J,windowHeight:Z,openContextMenu:_,contextMenu:G,handleLocal:P,variables:V,clusterRef:X,coloring:Y}=e,{dailyDir:$}=V,[q,K]=(0,c.useState)(null),Q=(0,o.F)(),{emacsTheme:U}=(0,c.useContext)(i.N),ee=(e,l,t)=>{switch(e){case H.preview:T(l);break;case H.local:P(l,D.localSame);break;case H.follow:(0,f.y2)(l,j);break;case H.context:_(l,t)}},el=(0,c.useRef)(null);(0,c.useEffect)(()=>{F&&K(E[F])},[F]);let et=(0,c.useRef)({}),er=(0,c.useRef)({}),ei=(0,c.useMemo)(()=>{var e;er.current={};let l=null==s?void 0:null===(e=s.nodes)||void 0===e?void 0:e.filter(e=>{var l,t,r,i;return!(I.dirsBlocklist.length&&I.dirsBlocklist.some(l=>{var t;return null==e?void 0:null===(t=e.file)||void 0===t?void 0:t.includes(l)})||I.dirsAllowlist.length>0&&!I.dirsAllowlist.some(l=>{var t;return null==e?void 0:null===(t=e.file)||void 0===t?void 0:t.includes(l)})||I.tagsBlacklist.length&&I.tagsBlacklist.some(l=>{var t;return(null==e?void 0:null===(t=e.tags)||void 0===t?void 0:t.indexOf(l))>-1})||I.tagsWhitelist.length>0&&!I.tagsWhitelist.some(l=>{var t;return(null==e?void 0:null===(t=e.tags)||void 0===t?void 0:t.indexOf(l))>-1})||I.filelessCites&&(null==e?void 0:null===(l=e.properties)||void 0===l?void 0:l.FILELESS)||(null==I?void 0:I.bad)&&(null==e?void 0:null===(t=e.properties)||void 0===t?void 0:t.bad)||I.dailies&&$&&(null===(r=e.file)||void 0===r?void 0:r.includes($)))&&(!I.noter||null===(i=e.properties)||void 0===i||!i.NOTER_PAGE)||(er.current={...er.current,[e.id]:e},!1)}).filter(e=>{var l;let t=(null!==(l=m[null==e?void 0:e.id])&&void 0!==l?l:[]).filter(e=>!er.current[e.source]&&!er.current[e.target]);return!I.orphans||(I.parent?0!==t.length:0!==t.length&&t.some(e=>!["parent","heading"].includes(e.type)))}),t=l.map(e=>e.id),r=s.links.filter(e=>{let[l,r]=(0,S.J)(e);return!!(t.includes(l)&&t.includes(r))&&(I.parent?"heading"===I.parent?"parent"!==e.type:"heading"!==e.type:!["parent","heading"].includes(e.type))});et.current=r.reduce((e,l)=>{var t,r;let[i,n]=(0,S.J)(l);return{...e,[i]:[...null!==(t=e[i])&&void 0!==t?t:[],l],[n]:[...null!==(r=e[n])&&void 0!==r?r:[],l]}},{});let i=r.map(e=>{let[l,t]=(0,S.J)(e);return{target:l,source:t,weight:"cite"===e.type?1:2}});if("community"===Y.method){let e=h()().nodes(t).edges(i);X.current=e()}return{nodes:l,links:r}},[I,s,Y.method]),[en,eo]=(0,c.useState)({nodes:[],links:[]});(0,c.useEffect)(()=>{if(!B.nodeIds.length)return;let e=B.nodeIds.length>1?en.nodes.filter(e=>!B.excludedNodeIds.includes(e.id)):[],l=e.map(e=>e.id),t=N({ids:B.nodeIds,excludedIds:B.excludedNodeIds,n:A.neighbors,linksByNodeId:et.current}),r=ei.nodes.filter(r=>{if(e.length){var i;return!l.includes(r.id)&&(null!==(i=et.current[r.id])&&void 0!==i?i:[]).some(e=>{let[l,t]=(0,S.J)(e);return!B.excludedNodeIds.includes(l)&&!B.excludedNodeIds.includes(t)&&(B.nodeIds.includes(l)||B.nodeIds.includes(t))})}return t.includes(r.id)}).map(e=>({...e,x:0,y:0,vy:0,vx:0})),i=[...e,...r],n=i.map(e=>e.id),o=[],d=ei.links.filter(e=>{let[t,r]=(0,S.J)(e);return!(o.length&&l.includes(r)&&l.includes(t))&&n.includes(t)&&n.includes(r)}).map(e=>{let[l,t]=(0,S.J)(e);return{source:l,target:t}});eo({nodes:i,links:[...o,...d]})},[A.neighbors,I,B,B.excludedNodeIds,B.nodeIds,s,ei.links,ei.nodes]),(0,c.useEffect)(()=>{(async()=>{let e=l.current,r=await R;t.gravityOn&&!(B.nodeIds.length&&!t.gravityLocal)?(e.d3Force("x",r.forceX().strength(t.gravity)),e.d3Force("y",r.forceY().strength(t.gravity)),p&&e.d3Force("z",r.forceZ().strength(t.gravity))):(e.d3Force("x",null),e.d3Force("y",null),p&&e.d3Force("z",null)),t.centering?e.d3Force("center",r.forceCenter().strength(t.centeringStrength)):e.d3Force("center",null),t.linkStrength&&e.d3Force("link").strength(t.linkStrength),t.linkIts&&e.d3Force("link").iterations(t.linkIts),t.charge&&e.d3Force("charge").strength(t.charge),e.d3Force("collide",t.collision?r.forceCollide().radius(t.collisionStrength):null)})()},[t,p,B]),(0,c.useEffect)(()=>{var e;null===(e=l.current)||void 0===e||e.d3ReheatSimulation()},[t,B.nodeIds.length]);let ed=(0,c.useRef)(0),[eu,ea]=(0,c.useState)(1),[ec,es]=(0,u.Z)(e=>ea(e),{duration:O.animationSpeed,algorithm:v.Al[O.algorithmName]}),[eh,eg]=(0,u.Z)(e=>ea(Math.min(eu,-1*(e-1))),{duration:O.animationSpeed,algorithm:v.Al[O.algorithmName]}),ev=(0,c.useMemo)(()=>{var e;if(!el.current)return{};let l=et.current[el.current.id];return l?Object.fromEntries([null===(e=el.current)||void 0===e?void 0:e.id,...l.flatMap(e=>[e.source,e.target])].map(e=>[e,{}])):{}},[el.current,et.current]);(0,c.useEffect)(()=>{(null==W?void 0:W.id)?K(W):K(null)},[W]);let ef=(0,c.useRef)(null);(0,c.useEffect)(()=>{if(el.current=q,q&&(ef.current=q),!O.highlightAnim)return q?ea(1):ea(0);q?ec():(es(),eu>.5?eh():ea(0))},[q]);let ep=(0,c.useMemo)(()=>Object.fromEntries(v.bG.map(e=>{let l=(0,x.p)(e,Q);return[e,Object.fromEntries(v.bG.map(e=>[e,a.Z(l,(0,x.p)(e,Q))]))]})),[U]),ek=(0,c.useMemo)(()=>{var e,l;let t=null===ef.current||void 0===ef.current?[]:null!==(l=et.current[ef.current.id])&&void 0!==l?l:[];return Object.fromEntries([null===(e=ef.current)||void 0===e?void 0:e.id,...t.flatMap(e=>(0,S.J)(e))].map(e=>[e,{}]))},[JSON.stringify(q),ef.current,et.current]),em=(0,c.useMemo)(()=>(0,x.p)(O.labelTextColor,Q),[O.labelTextColor,U]),eC=(0,c.useMemo)(()=>(0,x.p)(O.labelBackgroundColor,Q),[O.labelBackgroundColor,U]),[eb,ey]=(0,c.useState)(!1),eS=(0,c.useRef)(1),eN={graphData:B.nodeIds.length?en:ei,width:J,height:Z,backgroundColor:(0,x.p)(O.backgroundColor,Q),warmupTicks:1===B.nodeIds.length?100:B.nodeIds.length>1?20:0,onZoom:e=>{let{k:l}=e;return eS.current=l},nodeColor:e=>L({node:e,theme:Q,visuals:O,cluster:X.current,coloring:Y,emacsNodeId:F,highlightColors:ep,highlightedNodes:ev,previouslyHighlightedNodes:ek,linksByNodeId:et.current,opacity:eu,tagColors:z}),nodeRelSize:O.nodeRel,nodeVal:e=>C({node:e,highlightedNodes:ev,linksByNodeId:et.current,opacity:eu,previouslyHighlightedNodes:ek,visuals:O})/Math.pow(eS.current,O.nodeZoomSize),nodeCanvasObject:(e,l,t)=>{!function(e){var l,t,r,i;let{labelBackgroundColor:n,labelTextColor:o,node:d,ctx:u,globalScale:a,highlightedNodes:c,previouslyHighlightedNodes:s,visuals:h,opacity:g,filteredLinksByNodeId:v,hoverNode:f,lastHoverNode:p}=e;if(!d||!h.labels)return;let m=null!==(l=null==f?void 0:f.id)&&void 0!==l?l:"",S=null!==(t=null==p?void 0:p.id)&&void 0!==t?t:"",N=null!==(r=v[d.id])&&void 0!==r?r:[],x=!!(c[d.id]||s[d.id]),I=Math.min(5*(a-h.labelScale)+2*Math.pow(Math.min(N.length,h.labelDynamicDegree),h.labelDynamicStrength),1);if(I<.01&&!x)return;let F=null!==(i=d.title)&&void 0!==i?i:"",L=F.substring(0,h.labelLength),w=Math.cbrt(h.nodeRel*C({node:d,highlightedNodes:c,linksByNodeId:v,opacity:g,previouslyHighlightedNodes:s,visuals:h})/Math.pow(a,h.nodeZoomSize)),E=h.labelFontSize/Math.cbrt(Math.pow(a,h.nodeZoomSize)),M=[1.1*u.measureText(L).width,E].map(e=>e+.5*E),R=y(I,h,a,g,x);if(h.labelBackgroundColor&&h.labelBackgroundOpacity){let e=b(n,R*h.labelBackgroundOpacity);u.fillStyle=e,u.fillRect(d.x-M[0]/2,d.y-M[1]/2+w,...M)}u.textAlign="center",u.textBaseline="middle";let O=b(o,R);u.fillStyle=O,u.font="".concat(E,"px Sans-Serif");let D=k()(L,{width:h.labelWordWrap}).split("\n"),H=F.length>h.labelLength?[...D.slice(0,-1),"".concat(D.slice(-1),"...")]:D,B=[m,S].includes(d.id)?1+.3*g:1;H.forEach((e,l)=>{u.fillText(e,d.x,d.y+B*w*8+h.labelLineSpace*E*l)})}({nodeRel:O.nodeRel,filteredLinksByNodeId:et.current,lastHoverNode:ef.current,node:e,ctx:l,globalScale:t,highlightedNodes:ev,previouslyHighlightedNodes:ek,visuals:O,opacity:eu,labelTextColor:em,labelBackgroundColor:eC,hoverNode:q})},nodeCanvasObjectMode:()=>"after",linkDirectionalParticles:O.particles?O.particlesNumber:void 0,linkDirectionalArrowLength:O.arrows?O.arrowsLength:void 0,linkDirectionalArrowRelPos:O.arrowsPos,linkDirectionalArrowColor:O.arrowsColor?()=>(0,x.p)(O.arrowsColor,Q):void 0,linkColor:e=>{var l;let t="object"==typeof e.source?e.source.id:e.source,r="object"==typeof e.target?e.target.id:e.target,i=w(e,el.current),n=w(e,ef.current),o=i||n;return O.refLinkColor&&"ref"===e.type?o&&(O.refLinkHighlightColor||O.linkHighlight)?ep[O.refLinkColor][O.refLinkHighlightColor||O.linkHighlight](eu):ep[O.refLinkColor][O.backgroundColor](O.highlightFade*eu):O.citeLinkColor&&(null===(l=e.type)||void 0===l?void 0:l.includes("cite"))?o&&(O.citeLinkHighlightColor||O.linkHighlight)?ep[O.citeLinkColor][O.citeLinkHighlightColor||O.linkHighlight](eu):ep[O.citeLinkColor][O.backgroundColor](O.highlightFade*eu):M({sourceId:t,targetId:r,needsHighlighting:o,theme:Q,cluster:X.current,coloring:Y,highlightColors:ep,linksByNodeId:et.current,opacity:eu,visuals:O})},linkWidth:e=>{if(1===O.highlightLinkSize)return O.linkWidth;let l=w(e,el.current),t=w(e,ef.current);return l||t?O.linkWidth*(1+eu*(O.highlightLinkSize-1)):O.linkWidth},linkDirectionalParticleWidth:O.particlesWidth,d3AlphaDecay:t.alphaDecay,d3AlphaMin:t.alphaMin,d3VelocityDecay:t.velocityDecay,onNodeClick:(e,l)=>{let t=l.timeStamp-ed.current<200;if(ed.current=l.timeStamp,t)return ee("double",e,l);let r=ed.current;return setTimeout(()=>{if(ed.current===r)return ee("click",e,l)},200)},onNodeHover:e=>{O.highlight&&!eb&&(q||(eg(),ea(0)),K(e))},onNodeRightClick:(e,l)=>{ee("right",e,l)},onNodeDrag:e=>{K(e),ey(!0)},onNodeDragEnd:()=>{K(null),ey(!1)}};return(0,r.jsx)(d.xu,{overflow:"hidden",onClick:G.onClose,children:p?(0,r.jsx)(n.s6,{ref:l,...eN,nodeThreeObjectExtend:!0,nodeOpacity:O.nodeOpacity,nodeResolution:O.nodeResolution,linkOpacity:O.linkOpacity,nodeThreeObject:e=>{if(!O.labels||O.labels<3&&!ev[e.id])return;let l=new g.Z(e.title.substring(0,40));return l.color=(0,x.p)(O.labelTextColor,Q),l.backgroundColor=(0,x.p)(O.labelBackgroundColor,Q),l.padding=2,l.textHeight=8,l}}):(0,r.jsx)(n.f$,{ref:l,...eN,linkLineDash:e=>{var l;return O.citeDashes&&(null===(l=e.type)||void 0===l?void 0:l.includes("cite"))?[O.citeDashLength,O.citeGapLength]:O.refDashes&&"ref"==e.type?[O.refDashLength,O.refGapLength]:null}})})}}}]);