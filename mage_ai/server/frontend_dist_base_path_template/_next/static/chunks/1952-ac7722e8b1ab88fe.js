"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1952],{52749:function(e,n,t){var i=t(82394),r=t(82684),o=t(71180),l=t(55485),d=t(93369),c=t(7267),u=t(38276),s=t(30160),a=t(35576),p=t(17488),f=t(72473),h=t(4015),v=t(70515),m=t(81728),j=t(28598);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n,t,i,g,b=e.createPipeline,Z=e.isLoading,y=e.onClose,P=(0,r.useRef)(null),O=(0,r.useState)(!1),w=O[0],k=O[1],I=(0,r.useState)({name:(0,m.Y6)()}),C=I[0],_=I[1];return(0,r.useEffect)((function(){var e;null===P||void 0===P||null===(e=P.current)||void 0===e||e.focus()}),[]),(0,j.jsxs)(h.Nk,{children:[(0,j.jsx)(h.I5,{children:(0,j.jsx)(l.ZP,{alignItems:"center",justifyContent:"center",children:(0,j.jsx)(f.xq,{size:5*v.iI,warning:!0})})}),(0,j.jsx)(h.gI,{children:(0,j.jsxs)(u.Z,{py:1,children:[(0,j.jsx)(u.Z,{mb:1,children:(0,j.jsx)(s.ZP,{default:!0,children:"New pipeline"})}),(0,j.jsx)(s.ZP,{textOverflow:!0,children:"Using AI"})]})}),(0,j.jsxs)(h.gI,{children:[(0,j.jsx)(s.ZP,{default:!0,children:"Name"}),(0,j.jsx)(p.Z,{alignRight:!0,noBackground:!0,noBorder:!0,onChange:function(e){return _((function(n){return x(x({},n),{},{name:e.target.value})}))},paddingVertical:v.iI,placeholder:"Enter pipeline name...",value:(null===C||void 0===C?void 0:C.name)||""})]}),(0,j.jsx)(h.gI,{children:(0,j.jsxs)(l.ZP,{flexDirection:"column",fullWidth:!0,children:[(0,j.jsx)(u.Z,{mb:2,pt:1,children:(0,j.jsx)(s.ZP,{default:!0,children:"Describe what the pipeline should do"})}),(0,j.jsxs)(u.Z,{pb:1,pr:v.cd,children:[(0,j.jsx)(a.Z,{fullWidth:!0,onChange:function(e){return _((function(n){return x(x({},n),{},{llm:{request:{pipeline_description:e.target.value},use_case:c.z.GENERATE_PIPELINE_WITH_DESCRIPTION}})}))},placeholder:"Type the pipeline purpose...",ref:P,rows:8,value:(null===C||void 0===C||null===(n=C.llm)||void 0===n||null===(t=n.request)||void 0===t?void 0:t.pipeline_description)||""}),(Z||w)&&(0,j.jsx)(u.Z,{mt:1,children:(0,j.jsx)(s.ZP,{warning:!0,children:"Pipeline is being generated using AI based on your description above..."})})]})]})}),(0,j.jsx)(h.$b,{children:(0,j.jsxs)(l.ZP,{fullWidth:!0,children:[(0,j.jsx)(d.ZP,{bold:!0,centerText:!0,disabled:!(null!==C&&void 0!==C&&C.name)||!(null!==C&&void 0!==C&&null!==(i=C.llm)&&void 0!==i&&null!==(g=i.request)&&void 0!==g&&g.pipeline_description),loading:Z||w,onClick:function(){k(!0),b({pipeline:C}).then((function(){return k(!1)}))},primary:!0,tabIndex:0,uuid:"AIControlPanel/CreatePipeline",children:"Create pipeline"}),y&&(0,j.jsx)(u.Z,{ml:1,children:(0,j.jsx)(o.ZP,{onClick:y,tabIndex:0,children:"Cancel"})})]})})]})}},60523:function(e,n,t){var i=t(21831),r=t(82394),o=t(82684),l=t(38626),d=t(34376),c=t(54750),u=t(71180),s=t(90299),a=t(44898),p=t(55485),f=t(88328),h=t(38276),v=t(4190),m=t(48381),j=t(5755),g=t(30160),x=t(35686),b=t(72473),Z=t(84649),y=t(32929),P=t(15610),O=t(19183),w=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n,t=e.contained,r=e.defaultLinkUUID,k=e.defaultTab,C=e.objectType,_=e.onClickCustomTemplate,S=e.pipelineUUID,M=e.showAddingNewTemplates,N=e.showBreadcrumbs,A=e.tabs,E=(0,d.useRouter)(),D=(0,o.useContext)(l.ThemeContext),T=(0,O.i)(),B=T.height,R=T.width,U=(0,o.useMemo)((function(){return A||y.dP}),[A]),H=(0,o.useState)(M||!1),z=H[0],q=H[1],L=(0,o.useState)(r?y.qy.find((function(e){return e.uuid===r})):y.qy[0]),F=L[0],W=L[1],G=(0,o.useState)(k?U.find((function(e){return e.uuid===(null===k||void 0===k?void 0:k.uuid)})):U[0]),V=G[0],Y=G[1],X=(0,o.useState)(null),$=X[0],Q=X[1],J=x.ZP.custom_templates.list({object_type:a.Z},{},{pauseFetch:y.n9.uuid!==(null===V||void 0===V?void 0:V.uuid)}),K=J.data,ee=J.mutate,ne=(0,o.useMemo)((function(){var e=(null===K||void 0===K?void 0:K.custom_templates)||[];return null!==F&&void 0!==F&&F.filterTemplates?null===F||void 0===F?void 0:F.filterTemplates(e):e}),[K,F]),te=x.ZP.custom_templates.list({object_type:a.R},{},{pauseFetch:y.A2.uuid!==(null===V||void 0===V?void 0:V.uuid)}),ie=te.data,re=te.mutate,oe=(0,o.useMemo)((function(){var e=(null===ie||void 0===ie?void 0:ie.custom_templates)||[];return null!==F&&void 0!==F&&F.filterTemplates?null===F||void 0===F?void 0:F.filterTemplates(e):e}),[ie,F]),le=(0,o.useMemo)((function(){return y.qy.map((function(e){var n=e.Icon,t=e.label,i=e.selectedBackgroundColor,r=e.selectedIconProps,o=e.uuid,l=(null===F||void 0===F?void 0:F.uuid)===o,d=I({size:Z.ZG},l&&r?r:{});return(0,w.jsx)(Z.wj,{onClick:function(){return W(e)},selected:l,children:(0,w.jsxs)(p.ZP,{alignItems:"center",children:[(0,w.jsx)(Z.ze,{backgroundColor:l&&i?i(D):null,children:n?(0,w.jsx)(n,I({},d)):(0,w.jsx)(b.pd,I({},d))}),(0,w.jsx)(g.ZP,{bold:!0,large:!0,children:t?t():o})]})},o)}))}),[F,D]),de=(0,o.useMemo)((function(){return y.hS.map((function(e){var n=e.Icon,t=e.label,i=e.selectedBackgroundColor,r=e.selectedIconProps,o=e.uuid,l=(null===F||void 0===F?void 0:F.uuid)===o,d=I({size:Z.ZG},l&&r?r:{});return(0,w.jsx)(Z.wj,{onClick:function(){return W(e)},selected:l,children:(0,w.jsxs)(p.ZP,{alignItems:"center",children:[(0,w.jsx)(Z.ze,{backgroundColor:l&&i?i(D):null,children:n?(0,w.jsx)(n,I({},d)):(0,w.jsx)(b.pd,I({},d))}),(0,w.jsx)(g.ZP,{bold:!0,large:!0,children:t?t():o})]})},o)}))}),[F,D]),ce=(0,o.useMemo)((function(){return null===ne||void 0===ne?void 0:ne.map((function(e){var n=e.description,t=e.name,r=e.tags,o=e.template_uuid,l=e.user,d=[];return null!==r&&void 0!==r&&r.length?d.push.apply(d,(0,i.Z)(r)):null!==l&&void 0!==l&&l.username&&d.push(null===l||void 0===l?void 0:l.username),(0,w.jsxs)(Z.UE,{onClick:function(){_?_(e):E.push("/templates/[...slug]","/templates/".concat(encodeURIComponent(o)))},children:[(0,w.jsx)(Z.Tj,{children:(0,w.jsx)(g.ZP,{bold:!0,monospace:!0,textOverflow:!0,children:t||o})}),(0,w.jsx)(Z.SL,{children:(0,w.jsx)(g.ZP,{default:!!n,italic:!n,muted:!n,textOverflowLines:2,children:n||"No description"})}),(0,w.jsx)(Z.EN,{children:(null===d||void 0===d?void 0:d.length)>=1&&(0,w.jsx)(m.Z,{tags:null===d||void 0===d?void 0:d.map((function(e){return{uuid:e}}))})})]},o)}))}),[ne,_,E]),ue=(0,o.useMemo)((function(){return null===oe||void 0===oe?void 0:oe.map((function(e){var n=e.description,t=e.name,r=e.tags,o=e.template_uuid,l=e.user,d=[];return null!==r&&void 0!==r&&r.length?d.push.apply(d,(0,i.Z)(r)):null!==l&&void 0!==l&&l.username&&d.push(null===l||void 0===l?void 0:l.username),(0,w.jsxs)(Z.UE,{onClick:function(){_?_(e):E.push("/templates/[...slug]","/templates/".concat(encodeURIComponent(o),"?object_type=").concat(a.R))},children:[(0,w.jsx)(Z.Tj,{children:(0,w.jsx)(g.ZP,{bold:!0,monospace:!0,textOverflow:!0,children:t||o})}),(0,w.jsx)(Z.SL,{children:(0,w.jsx)(g.ZP,{default:!!n,italic:!n,muted:!n,textOverflowLines:2,children:n||"No description"})}),(0,w.jsx)(Z.EN,{children:(null===d||void 0===d?void 0:d.length)>=1&&(0,w.jsx)(m.Z,{tags:null===d||void 0===d?void 0:d.map((function(e){return{uuid:e}}))})})]},o)}))}),[oe,_,E]),se=(0,o.useMemo)((function(){if(!N)return null;var e=[];return z?e.push.apply(e,[{label:function(){return"Templates"},onClick:function(){q(!1)}},{bold:!0,label:function(){return"New custom template"}}]):e.push({label:function(){return"Templates"}}),(0,w.jsx)(Z.FX,{children:(0,w.jsx)(c.Z,{breadcrumbs:e})})}),[z,N]),ae=(0,o.useMemo)((function(){return N?36:0}),[N]),pe=(0,o.useMemo)((function(){return B-ae}),[B,ae]);if(z)return n=a.R===C&&S?(0,w.jsx)(f.Z,{onMutateSuccess:re,pipelineUUID:S,templateAttributes:F&&(null===F||void 0===F?void 0:F.uuid)!==(null===y.qy||void 0===y.qy?void 0:y.qy[0].uuid)?{pipeline_type:null===F||void 0===F?void 0:F.uuid}:null,templateUUID:null===$||void 0===$?void 0:$.template_uuid}):(0,w.jsx)(j.Z,{contained:t,heightOffset:ae,onCreateCustomTemplate:t?function(e){Q(e)}:null,onMutateSuccess:ee,templateAttributes:F&&(null===F||void 0===F?void 0:F.uuid)!==(null===y.qy||void 0===y.qy?void 0:y.qy[0].uuid)?{block_type:null===F||void 0===F?void 0:F.uuid}:null,templateUUID:null===$||void 0===$?void 0:$.template_uuid}),t?(0,w.jsxs)(w.Fragment,{children:[N&&se,(0,w.jsx)(Z.Rd,{height:pe,width:R,children:n})]}):n;var fe=(0,w.jsxs)(Z.Nk,{children:[(0,w.jsxs)(Z.bC,{height:t?pe:null,children:[(0,w.jsx)(Z.Yf,{children:(0,w.jsx)(s.Z,{noPadding:!0,onClickTab:function(e){t?Y(e):(0,P.u7)({object_type:y.A2.uuid===e.uuid?a.R:a.Z})},selectedTabUUID:null===V||void 0===V?void 0:V.uuid,tabs:U})}),(0,w.jsxs)(Z.wl,{contained:t,heightOffset:ae,children:[y.n9.uuid===(null===V||void 0===V?void 0:V.uuid)&&le,y.A2.uuid===(null===V||void 0===V?void 0:V.uuid)&&de]})]}),(0,w.jsxs)(Z.w5,{children:[y.n9.uuid===(null===V||void 0===V?void 0:V.uuid)&&(0,w.jsx)(Z.HS,{children:(0,w.jsx)(u.ZP,{beforeIcon:(0,w.jsx)(b.mm,{size:Z.ZG}),onClick:function(){q(!0)},primary:!0,children:"New block template"})}),y.n9.uuid===(null===V||void 0===V?void 0:V.uuid)&&(0,w.jsxs)(w.Fragment,{children:[!K&&(0,w.jsx)(h.Z,{p:2,children:(0,w.jsx)(v.Z,{inverted:!0})}),K&&!(null!==ce&&void 0!==ce&&ce.length)&&(0,w.jsxs)(h.Z,{p:2,children:[(0,w.jsx)(g.ZP,{children:"There are currently no templates matching your search."}),(0,w.jsx)("br",{}),(0,w.jsx)(g.ZP,{children:"Add a new template by clicking the button above."})]}),(null===ce||void 0===ce?void 0:ce.length)>=1&&(0,w.jsx)(Z.n8,{children:ce})]}),y.A2.uuid===(null===V||void 0===V?void 0:V.uuid)&&(0,w.jsxs)(w.Fragment,{children:[!ie&&(0,w.jsx)(h.Z,{p:2,children:(0,w.jsx)(v.Z,{inverted:!0})}),ie&&!(null!==ue&&void 0!==ue&&ue.length)&&(0,w.jsxs)(h.Z,{p:2,children:[(0,w.jsx)(g.ZP,{children:"There are currently no templates matching your search."}),(0,w.jsx)("br",{}),(0,w.jsx)(g.ZP,{children:'Add a new template by right-clicking a pipeline row from the Pipelines page and selecting "Create template".'})]}),(null===ue||void 0===ue?void 0:ue.length)>=1&&(0,w.jsx)(Z.n8,{children:ue})]})]})]});return t?(0,w.jsxs)(w.Fragment,{children:[N&&se,(0,w.jsx)(Z.Rd,{height:pe,width:R,children:fe})]}):fe}},94629:function(e,n,t){t.d(n,{Z:function(){return k}});var i=t(82394),r=t(21831),o=t(82684),l=t(50724),d=t(82555),c=t(97618),u=t(70613),s=t(68487),a=t(68899),p=t(28598);function f(e,n){var t=e.children,i=e.noPadding;return(0,p.jsx)(a.HS,{noPadding:i,ref:n,children:t})}var h=o.forwardRef(f),v=t(62547),m=t(82571),j=t(35686),g=t(98464),x=t(46684),b=t(70515),Z=t(53808),y=t(19183);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e,n){var t,i=e.addProjectBreadcrumbToCustomBreadcrumbs,f=e.after,P=e.afterHeader,w=e.afterHidden,k=e.afterWidth,I=e.afterWidthOverride,C=e.appendBreadcrumbs,_=e.before,S=e.beforeWidth,M=e.breadcrumbs,N=e.children,A=e.errors,E=e.headerMenuItems,D=e.headerOffset,T=e.hideAfterCompletely,B=e.mainContainerHeader,R=e.navigationItems,U=e.setAfterHidden,H=e.setErrors,z=e.subheaderChildren,q=e.subheaderNoPadding,L=e.title,F=e.uuid,W=(0,y.i)().width,G="dashboard_after_width_".concat(F),V="dashboard_before_width_".concat(F),Y=(0,o.useRef)(null),X=(0,o.useState)(I?k:(0,Z.U2)(G,k)),$=X[0],Q=X[1],J=(0,o.useState)(!1),K=J[0],ee=J[1],ne=(0,o.useState)(_?Math.max((0,Z.U2)(V,S),13*b.iI):null),te=ne[0],ie=ne[1],re=(0,o.useState)(!1),oe=re[0],le=re[1],de=(0,o.useState)(null)[1],ce=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,ue=null===ce||void 0===ce?void 0:ce.projects,se={label:function(){var e;return null===ue||void 0===ue||null===(e=ue[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},ae=[];M&&(i&&ae.push(se),ae.push.apply(ae,(0,r.Z)(M))),(null===M||void 0===M||!M.length||C)&&(null===ue||void 0===ue?void 0:ue.length)>=1&&(null!==M&&void 0!==M&&M.length||ae.unshift({bold:!C,label:function(){return L}}),ae.unshift(se)),(0,o.useEffect)((function(){null===Y||void 0===Y||!Y.current||K||oe||null===de||void 0===de||de(Y.current.getBoundingClientRect().width)}),[K,$,oe,te,Y,de,W]),(0,o.useEffect)((function(){K||(0,Z.t8)(G,$)}),[w,K,$,G]),(0,o.useEffect)((function(){oe||(0,Z.t8)(V,te)}),[oe,te,V]);var pe=(0,g.Z)(k);return(0,o.useEffect)((function(){I&&pe!==k&&Q(k)}),[I,k,pe]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{title:L}),(0,p.jsx)(s.Z,{breadcrumbs:ae,menuItems:E,project:null===ue||void 0===ue?void 0:ue[0],version:null===ue||void 0===ue||null===(t=ue[0])||void 0===t?void 0:t.version}),(0,p.jsxs)(a.Nk,{ref:n,children:[0!==(null===R||void 0===R?void 0:R.length)&&(0,p.jsx)(a.lm,{showMore:!0,children:(0,p.jsx)(m.Z,{navigationItems:R,showMore:!0})}),(0,p.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(v.Z,{after:f,afterHeader:P,afterHeightOffset:x.Mz,afterHidden:w,afterMousedownActive:K,afterWidth:$,before:_,beforeHeightOffset:x.Mz,beforeMousedownActive:oe,beforeWidth:a.k1+(_?te:0),headerOffset:D,hideAfterCompletely:!U||T,leftOffset:_?a.k1:null,mainContainerHeader:B,mainContainerRef:Y,setAfterHidden:U,setAfterMousedownActive:ee,setAfterWidth:Q,setBeforeMousedownActive:le,setBeforeWidth:ie,children:[z&&(0,p.jsx)(h,{noPadding:q,children:z}),N]})})]}),A&&(0,p.jsx)(l.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===H||void 0===H?void 0:H(null)},children:(0,p.jsx)(d.Z,O(O({},A),{},{onClose:function(){return null===H||void 0===H?void 0:H(null)}}))})]})}var k=o.forwardRef(w)},65458:function(e,n,t){t.d(n,{d:function(){return s}});var i=t(13507),r=t(72473),o=t(57653),l=t(70515),d=t(81728),c=t(28598),u=1.5*l.iI,s=function(e,n){var t=[{beforeIcon:(0,c.jsx)(r.X5,{}),label:function(){return"Standard (batch)"},onClick:function(){return e({pipeline:{name:(0,d.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{beforeIcon:(0,c.jsx)(r.ZG,{}),label:function(){return"Data integration"},onClick:function(){return e({pipeline:{name:(0,d.Y6)(),type:o.qL.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{beforeIcon:(0,c.jsx)(i.Z,{size:u}),label:function(){return"Streaming"},onClick:function(){return e({pipeline:{name:(0,d.Y6)(),type:o.qL.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}];return null!==n&&void 0!==n&&n.showBrowseTemplates&&t.push({beforeIcon:(0,c.jsx)(r.zQ,{}),label:function(){return"From a template"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showBrowseTemplates)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/custom_template"}),null!==n&&void 0!==n&&n.showAIModal&&t.push({beforeIcon:(0,c.jsx)(r.xq,{}),label:function(){return"Using AI (beta)"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showAIModal)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/AI_modal"}),t}},4015:function(e,n,t){t.d(n,{$b:function(){return s},I5:function(){return c},Nk:function(){return d},gI:function(){return u}});var i=t(38626),r=t(44897),o=t(42631),l=t(70515),d=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-h093u4-0"})([""," ",""],(function(e){return!e.width&&"\n    width: ".concat(40*l.iI,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")})),c=i.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-h093u4-1"})(["padding:","px;",""],2.5*l.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).dashboard,";\n    border-left: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n    border-top-left-radius: ").concat(o.n_,"px;\n    border-top-right-radius: ").concat(o.n_,"px;\n    border-top: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n  ")})),u=i.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-h093u4-2"})(["align-items:center;justify-content:space-between;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).dashboard,";\n    border-left: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n    border-top: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n    display: ").concat((null===e||void 0===e?void 0:e.display)||"flex",";\n    padding-bottom: ").concat(1*l.iI+((null===e||void 0===e?void 0:e.paddingVerticalAddition)||0),"px;\n    padding-left: ").concat(l.cd*l.iI,"px;\n    padding-top: ").concat(1*l.iI+((null===e||void 0===e?void 0:e.paddingVerticalAddition)||0),"px;\n  ")})),s=i.default.div.withConfig({displayName:"indexstyle__FooterStyle",componentId:"sc-h093u4-3"})(["padding:","px ","px;",""],2.5*l.iI,2*l.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).panel,";\n    border-bottom-left-radius: ").concat(o.n_,"px;\n    border-bottom-right-radius: ").concat(o.n_,"px;\n    border-bottom: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n    border-left: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||r.Z.interactive).defaultBorder,";\n  ")}))},48381:function(e,n,t){var i=t(82684),r=t(31882),o=t(55485),l=t(30160),d=t(86735),c=t(28598);n.Z=function(e){var n=e.onClickTag,t=e.tags,u=void 0===t?[]:t,s=(0,i.useMemo)((function(){return(null===u||void 0===u?void 0:u.length)||0}),[u]),a=(0,i.useMemo)((function(){return(0,d.YC)(u||[],"uuid")}),[u]);return(0,c.jsx)(o.ZP,{alignItems:"center",flexWrap:"wrap",children:null===a||void 0===a?void 0:a.reduce((function(e,t){return e.push((0,c.jsx)("div",{style:{marginBottom:2,marginRight:s>=2?4:0,marginTop:2},children:(0,c.jsx)(r.Z,{onClick:n?function(){return n(t)}:null,small:!0,children:(0,c.jsx)(l.ZP,{children:t.uuid})})},"tag-".concat(t.uuid))),e}),[])})}},55729:function(e,n,t){t.d(n,{Z:function(){return T}});var i=t(82394),r=t(75582),o=t(82684),l=t(69864),d=t(71180),c=t(15338),u=t(97618),s=t(55485),a=t(85854),p=t(48670),f=t(65956),h=t(82359),v=t(57114),m=t(38276),j=t(30160),g=t(17488),x=t(69650),b=t(12468),Z=t(35686),y=t(38626),P=t(44897),O=t(42631),w=t(70515),k=y.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],O.n_,w.cd*w.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||P.Z.background).codeArea,";\n  ")})),I=t(72473),C=t(72191),_=t(81728),S=t(72619),M=t(70320),N=t(23780),A=t(28598);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var T=function(e){var n,t,y,P=e.cancelButtonText,O=e.contained,E=e.header,T=e.onCancel,B=e.onSaveSuccess,R=(0,N.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),U=(0,r.Z)(R,1)[0],H=(0,o.useState)(null),z=H[0],q=H[1],L=(0,o.useState)(!1),F=L[0],W=L[1],G=Z.ZP.projects.list(),V=G.data,Y=G.mutate,X=(0,o.useMemo)((function(){var e;return null===V||void 0===V||null===(e=V.projects)||void 0===e?void 0:e[0]}),[V]),$=X||{},Q=$.name,J=$.openai_api_key,K=$.project_uuid,ee=(0,o.useMemo)((function(){return"demo.mage.ai"===window.location.hostname}),[]);(0,o.useEffect)((function(){z||q(X)}),[X,z]);var ne=(0,l.Db)(Z.ZP.projects.useUpdate(Q),{onSuccess:function(e){return(0,S.wD)(e,{callback:function(e){var n,t=e.project;Y(),q(t),W(!1),(0,M.h)(null===t||void 0===t||null===(n=t.features)||void 0===n?void 0:n[h.d.LOCAL_TIMEZONE]),B&&(null===B||void 0===B||B(t))},onErrorCallback:function(e,n){return U({errors:n,response:e})}})}}),te=(0,r.Z)(ne,2),ie=te[0],re=te[1].isLoading,oe=(0,o.useCallback)((function(e){return ie({project:e})}),[ie]),le=(0,A.jsxs)(A.Fragment,{children:[E,(0,A.jsxs)(f.Z,{noPadding:!0,children:[(0,A.jsxs)(m.Z,{p:w.cd,children:[(0,A.jsx)(m.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Project name"})}),(0,A.jsx)(j.ZP,{default:!0,monospace:!0,children:Q})]}),(0,A.jsx)(c.Z,{light:!0}),(0,A.jsxs)(m.Z,{p:w.cd,children:[(0,A.jsx)(m.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Project UUID"})}),(0,A.jsx)(j.ZP,{default:!!K,monospace:!0,muted:!K,children:K||"Not required"})]}),(0,A.jsx)(c.Z,{light:!0}),(0,A.jsx)(m.Z,{p:w.cd,children:(0,A.jsxs)(s.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,A.jsxs)(u.Z,{flexDirection:"column",children:[(0,A.jsx)(m.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Help improve Mage"})}),(0,A.jsxs)(j.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,A.jsx)(p.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,A.jsx)(m.Z,{mr:w.cd}),(0,A.jsx)(x.Z,{compact:!0,checked:null===z||void 0===z?void 0:z.help_improve_mage,onCheck:function(){return q((function(e){return D(D({},e),{},{help_improve_mage:!(null!==z&&void 0!==z&&z.help_improve_mage)})}))}})]})})]}),(0,A.jsx)(m.Z,{mt:w.HN}),(0,A.jsx)(v.Z,{description:"Global settings that are applied to all pipelines in this project.",title:"Pipeline settings",children:(0,A.jsx)(v.S,{description:"Every time a trigger is created or updated in this pipeline, automatically persist it in code.",title:"Save triggers in code automatically",toggleSwitch:{checked:!(null===z||void 0===z||null===(n=z.pipelines)||void 0===n||null===(t=n.settings)||void 0===t||null===(y=t.triggers)||void 0===y||!y.save_in_code_automatically),onCheck:function(e){return q((function(n){var t,i,r,o,l,d;return D(D({},n),{},{pipelines:D(D({},null===n||void 0===n?void 0:n.pipelines),{},{settings:D(D({},null===n||void 0===n||null===(t=n.pipelines)||void 0===t?void 0:t.settings),{},{triggers:D(D({},null===n||void 0===n||null===(i=n.pipelines)||void 0===i||null===(r=i.settings)||void 0===r?void 0:r.triggers),{},{save_in_code_automatically:e(null===n||void 0===n||null===(o=n.pipelines)||void 0===o||null===(l=o.settings)||void 0===l||null===(d=l.triggers)||void 0===d?void 0:d.save_in_code_automatically)})})})})}))}}})}),(0,A.jsx)(m.Z,{mt:w.HN}),(0,A.jsx)(f.Z,{noPadding:!0,overflowVisible:!0,children:(0,A.jsxs)(m.Z,{p:w.cd,children:[(0,A.jsx)(m.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Features"})}),Object.entries((null===z||void 0===z?void 0:z.features)||{}).map((function(e,n){var t=(0,r.Z)(e,2),o=t[0],l=t[1];return(0,A.jsx)(m.Z,{mt:0===n?0:1,children:(0,A.jsxs)(s.ZP,{alignItems:"center",children:[(0,A.jsx)(x.Z,{checked:!!l,compact:!0,onCheck:function(){return q((function(e){return D(D({},e),{},{features:D(D({},null===z||void 0===z?void 0:z.features),{},(0,i.Z)({},o,!l))})}))}}),(0,A.jsx)(m.Z,{mr:w.cd}),(0,A.jsxs)(u.Z,{children:[(0,A.jsx)(j.ZP,{default:!l,monospace:!0,children:(0,_.vg)(o)}),o===h.d.LOCAL_TIMEZONE&&(0,A.jsx)(m.Z,{ml:1,children:(0,A.jsx)(b.Z,{block:!0,description:"Display dates in local timezone. Please note that certain pages (e.g. Monitor page) or components (e.g. Pipeline run bar charts) may still be in UTC time. Dates in local time will have a timezone offset in the timestamp (e.g. -07:00).",lightBackground:!0,muted:!0,size:C._k})})]})]})},o)}))]})}),(0,A.jsx)(m.Z,{mt:w.HN}),(0,A.jsx)(f.Z,{noPadding:!0,children:(0,A.jsxs)(m.Z,{p:w.cd,children:[(0,A.jsx)(m.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"OpenAI"})}),J&&!F?(0,A.jsxs)(s.ZP,D(D({},s.A0),{},{children:[(0,A.jsx)(j.ZP,{default:!0,monospace:!0,children:"API key: ********"}),(0,A.jsx)(d.ZP,{iconOnly:!0,onClick:function(){return W(!0)},secondary:!0,title:"Edit",children:(0,A.jsx)(I.I8,{size:C.bL})})]})):(0,A.jsx)(g.Z,{disabled:ee,label:ee?"Entering API key is disabled on demo":"API key",monospace:!0,onChange:function(e){return q((function(n){return D(D({},n),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===z||void 0===z?void 0:z.openai_api_key)||""})]})}),(0,A.jsx)(m.Z,{mt:w.HN}),(0,A.jsxs)(s.ZP,{alignItems:"center",children:[(0,A.jsx)(d.ZP,{loading:re,onClick:function(){oe({features:null===z||void 0===z?void 0:z.features,help_improve_mage:null===z||void 0===z?void 0:z.help_improve_mage,openai_api_key:null===z||void 0===z?void 0:z.openai_api_key,pipelines:null===z||void 0===z?void 0:z.pipelines})},primary:!0,children:"Save project settings"}),T&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m.Z,{mr:w.cd}),(0,A.jsx)(d.ZP,{onClick:T,secondary:!0,children:P||"Cancel"})]})]})]});return O?(0,A.jsx)(k,{children:le}):le}},57114:function(e,n,t){t.d(n,{S:function(){return Z},Z:function(){return y}});var i=t(82684),r=t(15338),o=t(97618),l=t(55485),d=t(85854),c=t(65956),u=t(82394),s=t(44085),a=t(38276),p=t(30160),f=t(17488),h=t(69650),v=t(72473),m=t(8193),j=t(70515),g=t(28598);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=function(e){var n,t=e.children,i=e.description,r=e.invalid,d=e.selectInput,c=e.textInput,u=e.title,x=e.toggleSwitch,Z=e.warning;return(0,g.jsx)(a.Z,{p:j.cd,children:(0,g.jsxs)(l.ZP,{alignItems:"center",children:[(0,g.jsxs)(l.ZP,{flexDirection:"column",children:[(0,g.jsxs)(p.ZP,{danger:r,default:!0,large:!0,warning:Z,children:[u," ",r&&(0,g.jsx)(p.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),i&&"string"===typeof i&&(0,g.jsx)(p.ZP,{muted:!0,small:!0,children:i}),i&&"string"!==typeof i&&i]}),(0,g.jsx)(a.Z,{mr:j.cd}),(0,g.jsxs)(o.Z,{flex:1,justifyContent:"flex-end",children:[t,c&&(0,g.jsx)(f.Z,b({afterIcon:(0,g.jsx)(v.I8,{}),afterIconClick:function(e,n){var t;null===n||void 0===n||null===(t=n.current)||void 0===t||t.focus()},afterIconSize:m.Z,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0},c)),d&&(0,g.jsx)(s.Z,b(b({},d),{},{afterIcon:(0,g.jsx)(v._M,{}),afterIconSize:m.Z,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0,children:null===d||void 0===d||null===(n=d.options)||void 0===n?void 0:n.map((function(e){var n=e.label,t=e.value;return(0,g.jsx)("option",{value:t,children:n||t},t)}))})),x&&(0,g.jsx)(h.Z,{checked:!(null===x||void 0===x||!x.checked),compact:!0,onCheck:null===x||void 0===x?void 0:x.onCheck})]})]})})},y=function(e){var n=e.children,t=e.description,u=e.headerChildren,s=e.title;return(0,g.jsxs)(c.Z,{noPadding:!0,children:[(0,g.jsx)(a.Z,{p:j.cd,children:(0,g.jsxs)(l.ZP,{alignItems:"center",children:[(0,g.jsxs)(o.Z,{flex:1,flexDirection:"column",children:[(0,g.jsx)(d.Z,{level:4,children:s}),t&&"string"===typeof t&&(0,g.jsx)(a.Z,{mt:1,children:(0,g.jsx)(p.ZP,{muted:!0,children:t})}),t&&"string"!==typeof t&&t]}),u]})}),i.Children.map(n,(function(e,n){return(0,g.jsxs)("div",{children:[(0,g.jsx)(r.Z,{light:!0}),e]},"".concat(s,"-").concat(n))}))]})}},8193:function(e,n,t){t.d(n,{N:function(){return c},Z:function(){return d}});var i=t(38626),r=t(44897),o=t(42631),l=t(70515),d=2*l.iI,c=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1ck7mzt-0"})(["border-radius:","px;padding:","px;",""],o.n_,l.cd*l.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).codeArea,";\n  ")}))}}]);