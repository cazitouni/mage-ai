(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1221],{1210:function(n,e,t){"use strict";t.d(e,{Z:function(){return j}});var r=t(82394),i=t(21831),o=t(82684),u=t(47999),c=t(28358),l=t(93461),a=t(57384),s=t(19767),d=t(72454),f=t(28598);function p(n,e){var t=n.children;return(0,f.jsx)(d.HS,{ref:e,children:t})}var h=o.forwardRef(p),b=t(32063),v=t(15270),g=t(82531),m=t(66166),O=t(3055),y=t(49125),w=t(91427),A=t(24141);function E(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?E(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var j=function(n){var e,t=n.after,r=n.afterHidden,p=n.afterWidth,E=n.afterWidthOverride,j=n.before,T=n.beforeWidth,R=n.breadcrumbs,C=n.children,k=n.errors,Z=n.headerMenuItems,S=n.navigationItems,x=n.setErrors,_=n.subheaderChildren,D=n.title,N=n.uuid,M=(0,A.i)().width,I="dashboard_after_width_".concat(N),H="dashboard_before_width_".concat(N),L=(0,o.useRef)(null),B=(0,o.useState)(E?p:(0,w.U2)(I,p)),Y=B[0],V=B[1],z=(0,o.useState)(!1),U=z[0],W=z[1],q=(0,o.useState)(j?Math.max((0,w.U2)(H,T),13*y.iI):null),F=q[0],X=q[1],G=(0,o.useState)(!1),Q=G[0],K=G[1],J=(0,o.useState)(null)[1],$=g.ZP.projects.list({},{revalidateOnFocus:!1}).data,nn=null===$||void 0===$?void 0:$.projects,en=[];R?en.push.apply(en,(0,i.Z)(R)):(null===nn||void 0===nn?void 0:nn.length)>=1&&en.push.apply(en,[{label:function(){var n;return null===(n=nn[0])||void 0===n?void 0:n.name},linkProps:{href:"/"}},{bold:!0,label:function(){return D}}]),(0,o.useEffect)((function(){null===L||void 0===L||!L.current||U||Q||null===J||void 0===J||J(L.current.getBoundingClientRect().width)}),[U,Y,Q,F,L,J,M]),(0,o.useEffect)((function(){U||(0,w.t8)(I,Y)}),[r,U,Y,I]),(0,o.useEffect)((function(){Q||(0,w.t8)(H,F)}),[Q,F,H]);var tn=(0,m.Z)(p);return(0,o.useEffect)((function(){E&&tn!==p&&V(p)}),[E,p,tn]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:D}),(0,f.jsx)(s.Z,{breadcrumbs:en,menuItems:Z,project:null===nn||void 0===nn?void 0:nn[0],version:null===nn||void 0===nn||null===(e=nn[0])||void 0===e?void 0:e.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===S||void 0===S?void 0:S.length)&&(0,f.jsx)(d.lm,{children:(0,f.jsx)(v.Z,{navigationItems:S})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:t,afterHeightOffset:O.Mz,afterHidden:r,afterMousedownActive:U,afterWidth:Y,before:j,beforeHeightOffset:O.Mz,beforeMousedownActive:Q,beforeWidth:d.k1+(j?F:0),hideAfterCompletely:!0,leftOffset:j?d.k1:null,mainContainerRef:L,setAfterMousedownActive:W,setAfterWidth:V,setBeforeMousedownActive:K,setBeforeWidth:X,children:[_&&(0,f.jsx)(h,{children:_}),C]})})]}),k&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===x||void 0===x?void 0:x(null)},children:(0,f.jsx)(c.Z,P(P({},k),{},{onClose:function(){return null===x||void 0===x?void 0:x(null)}}))})]})}},45838:function(n,e,t){"use strict";t.d(e,{GZ:function(){return d},Vq:function(){return a},cE:function(){return f},cl:function(){return c},kA:function(){return l}});var r=t(9518),i=t(23831),o=t(37391),u=t(49125),c=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-1wzfyed-0"})(["position:relative;overflow:auto;"," "," ",""],o.w5,(function(n){return n.minHeight&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.overflowVisible&&"\n    overflow: visible;\n  "})),l=r.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-1"})(["contain:size;width:100%;",""],(function(n){return(n.columnBorders||n.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),a=r.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-2"})([""," ",""],(function(n){return n.highlightOnHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||i.Z.interactive).rowHoverBackground,";\n    }\n  ")}),(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||i.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),s=(0,r.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(u.iI/2,"px ").concat(u.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(u.iI,"px ").concat(2*u.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),d=r.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-3"})([""," "," "," ",""],s,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||i.Z).background.panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||i.Z.borders).medium,";\n    z-index: 2;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),f=r.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-4"})([""," "," "," "," "," "," ",""],s,(function(n){return n.rowVerticalPadding&&"\n    padding-top: ".concat(n.rowVerticalPadding,"px;\n    padding-bottom: ").concat(n.rowVerticalPadding,"px;\n  ")}),(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||i.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||i.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "}))},87815:function(n,e,t){"use strict";var r=t(82394),i=t(12691),o=t.n(i),u=t(82684),c=t(67971),l=t(10919),a=t(86673),s=t(19711),d=t(46261),f=t(45838),p=t(28598);function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function b(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.alignTop,t=n.borderCollapseSeparate,r=n.buildLinkProps,i=n.buildRowProps,h=n.columnBorders,v=n.columnFlex,g=n.columnMaxWidth,m=n.columns,O=void 0===m?[]:m,y=n.compact,w=n.highlightRowOnHover,A=n.isSelectedRow,E=n.noBorder,P=n.noHeader,j=n.onClickRow,T=n.rows,R=n.rowVerticalPadding,C=n.stickyFirstColumn,k=n.stickyHeader,Z=n.uuid,S=n.wrapColumns,x=(0,u.useMemo)((function(){return v.reduce((function(n,e){return n+(e||0)}),0)}),[v]),_=(0,u.useCallback)((function(n){if(v[n]){var e=Math.round(v[n]/x*100);return"".concat(e,"%")}return null}),[v,x]),D=(0,u.useMemo)((function(){return null===T||void 0===T?void 0:T.map((function(n,t){var c,a=null===r||void 0===r?void 0:r(t),s=(null===i||void 0===i?void 0:i(t))||{renderCell:null,renderRow:null},d=s.renderCell,v=s.renderRow,m=[];return n.forEach((function(r,i){var o;d&&(o=d(r,i)),o||(o=(0,p.jsx)(f.cE,{alignTop:e,columnBorders:h,compact:y,last:i===n.length-1,maxWidth:null===g||void 0===g?void 0:g(i),noBorder:E,rowVerticalPadding:R,selected:null===A||void 0===A?void 0:A(t),stickyFirstColumn:C&&0===i,width:_(i),wrapColumns:S,children:r},"".concat(Z,"-row-").concat(t,"-cell-").concat(i))),m.push(o)})),c=v?v(m):(0,p.jsx)(f.Vq,{highlightOnHover:w,noHover:!(a||j),onClick:j?function(){return j(t)}:null,children:m},"".concat(Z,"-row-").concat(t)),a?(0,u.createElement)(o(),b(b({},a),{},{key:"".concat(Z,"-row-link-").concat(t),passHref:!0}),(0,p.jsx)(l.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:c})):c}))}),[e,r,_,h,g,y,i,w,A,E,j,R,T,C,Z,S]);return(0,p.jsxs)(f.kA,{borderCollapseSeparate:t,columnBorders:h,children:[(null===O||void 0===O?void 0:O.length)>=1&&!P&&(0,p.jsx)(f.Vq,{noHover:!0,children:O.map((function(n,e){return(0,p.jsx)(f.GZ,{columnBorders:h,compact:y,last:e===O.length-1,noBorder:E,sticky:k,children:(0,p.jsxs)(c.Z,{alignItems:"center",children:[(0,p.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,p.jsx)(a.Z,{ml:"4px",children:(0,p.jsx)(d.Z,{appearBefore:!0,label:(0,p.jsx)(s.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(Z,"-col-").concat(n.uuid,"-").concat(e))}))}),D]})}},86422:function(n,e,t){"use strict";t.d(e,{$W:function(){return f},DA:function(){return d},HX:function(){return b},J8:function(){return h},Lq:function(){return a},Qj:function(){return v},Ut:function(){return y},V4:function(){return O},VZ:function(){return p},dO:function(){return s},f2:function(){return m},iZ:function(){return g},t6:function(){return u},tf:function(){return l}});var r,i,o,u,c=t(82394);!function(n){n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var l,a,s=(r={},(0,c.Z)(r,u.PYTHON,"PY"),(0,c.Z)(r,u.R,"R"),(0,c.Z)(r,u.SQL,"SQL"),(0,c.Z)(r,u.YAML,"YAML"),r);!function(n){n.CHART="chart",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.TRANSFORMER="transformer"}(l||(l={})),function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(a||(a={}));var d,f=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.TRANSFORMER],p=[l.DATA_EXPORTER,l.DATA_LOADER],h=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],b=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],v=[l.CHART,l.SCRATCHPAD,l.SENSOR],g=[l.SCRATCHPAD];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(d||(d={}));var m=[l.CUSTOM,l.DATA_EXPORTER,l.TRANSFORMER],O=(i={},(0,c.Z)(i,l.CUSTOM,"Custom"),(0,c.Z)(i,l.DATA_EXPORTER,"Data exporter"),(0,c.Z)(i,l.DATA_LOADER,"Data loader"),(0,c.Z)(i,l.SCRATCHPAD,"Scratchpad"),(0,c.Z)(i,l.SENSOR,"Sensor"),(0,c.Z)(i,l.TRANSFORMER,"Transformer"),i),y=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER];o={},(0,c.Z)(o,l.DATA_EXPORTER,"DE"),(0,c.Z)(o,l.DATA_LOADER,"DL"),(0,c.Z)(o,l.SCRATCHPAD,"SP"),(0,c.Z)(o,l.SENSOR,"SR"),(0,c.Z)(o,l.TRANSFORMER,"TF")},93348:function(n,e,t){"use strict";t.d(e,{TR:function(){return d},U5:function(){return l},Xm:function(){return o},Z4:function(){return s},fq:function(){return c},kJ:function(){return a}});var r,i,o,u=t(82394);!function(n){n.API="api",n.EVENT="event",n.TIME="time"}(o||(o={}));var c,l,a,s=(r={},(0,u.Z)(r,o.API,(function(){return"API"})),(0,u.Z)(r,o.EVENT,(function(){return"event"})),(0,u.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(n){n.ACTIVE="active",n.INACTIVE="inactive"}(c||(c={})),function(n){n.ONCE="@once",n.HOURLY="@hourly",n.DAILY="@daily",n.WEEKLY="@weekly",n.MONTHLY="@monthly"}(l||(l={})),function(n){n.CREATED_AT="created_at",n.NAME="name",n.PIPELINE="pipeline_uuid",n.STATUS="status",n.TYPE="schedule_type"}(a||(a={}));var d=(i={},(0,u.Z)(i,a.CREATED_AT,"Created at"),(0,u.Z)(i,a.NAME,"Name"),(0,u.Z)(i,a.PIPELINE,"Pipeline"),(0,u.Z)(i,a.STATUS,"Status"),(0,u.Z)(i,a.TYPE,"Type"),i)},98781:function(n,e,t){"use strict";t.d(e,{a:function(){return u},q:function(){return i}});var r,i,o=t(82394);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(i||(i={}));var u=(r={},(0,o.Z)(r,i.PYTHON,"python3"),(0,o.Z)(r,i.PYSPARK,"pysparkkernel"),r)},30264:function(n,e,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(47999)),u=t(62084),c=t(28598),l=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid"];function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.children,t=n.items,r=n.open,a=n.onClickCallback,d=n.onClickOutside,f=n.parentRef,p=n.uuid,h=(0,i.Z)(n,l),b=(0,c.jsxs)("div",{style:{position:"relative",zIndex:d?3:2},children:[(0,c.jsx)("div",{ref:f,children:e}),(0,c.jsx)(u.Z,s(s({},h),{},{items:t,onClickCallback:a,open:r,parentRef:f,uuid:p}))]});return d?(0,c.jsx)(o.Z,{onClickOutside:d,open:!0,children:b}):b}},5545:function(n,e,t){"use strict";t.r(e);var r=t(77837),i=t(82394),o=t(75582),u=t(38860),c=t.n(u),l=t(83455),a=t(82684),s=t(34376),d=t(60328),f=t(1210),p=t(93461),h=t(30264),b=t(11135),v=t(98781),g=t(41788),m=t(87815),O=t(19711),y=t(82531),w=t(10503),A=t(86422),E=t(99994),P=t(93348),j=t(49125),T=t(90211),R=t(96510),C=t(66653),k=t(28598);function Z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function x(){var n=(0,s.useRouter)(),e=(0,a.useState)({}),t=e[0],r=e[1],u=(0,a.useState)(!1),c=u[0],g=u[1],Z=(0,a.useState)(null),x=Z[0],_=Z[1],D=(0,a.useRef)(null),N=y.ZP.pipelines.list({include_schedules:1}),M=N.data,I=N.mutate,H=(0,a.useMemo)((function(){return(null===M||void 0===M?void 0:M.pipelines)||[]}),[M]),L=(0,a.useCallback)((function(){return g(!1)}),[]),B=(0,l.Db)(y.ZP.pipelines.useCreate(),{onSuccess:function(e){return(0,R.wD)(e,{callback:function(e){var t=e.pipeline.uuid;n.push("/pipelines/[pipeline]/edit","/pipelines/".concat(t,"/edit"))},onErrorCallback:function(n,e){return _({errors:e,response:n})}})}}),Y=(0,o.Z)(B,2),V=Y[0],z=Y[1].isLoading,U=(0,l.Db)((function(n){return y.ZP.pipelines.useUpdate(n.uuid)({pipeline:n})}),{onSuccess:function(n){return(0,R.wD)(n,{callback:function(n){var e=n.pipeline.uuid;r((function(n){return S(S({},n),{},(0,i.Z)({},e,!1))})),I()},onErrorCallback:function(n,e){return _({errors:e,response:n})}})}}),W=(0,o.Z)(U,1)[0];return(0,k.jsx)(f.Z,{errors:x,setErrors:_,subheaderChildren:(0,k.jsx)(h.Z,{disableKeyboardShortcuts:!0,items:[{label:function(){return"Standard (batch)"},onClick:function(){return V({pipeline:{name:(0,T.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{label:function(){return"Data integration"},onClick:function(){return V({pipeline:{name:(0,T.Y6)(),type:v.q.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{label:function(){return"Streaming"},onClick:function(){return V({pipeline:{name:(0,T.Y6)(),type:v.q.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}],onClickCallback:L,onClickOutside:L,open:c,parentRef:D,roundedStyle:!0,uuid:"pipelines/new_pipeline_menu",children:(0,k.jsx)(b.ZP,{background:E.eW,beforeElement:(0,k.jsx)(w.mm,{size:2.5*j.iI}),bold:!0,inline:!0,loading:z,onClick:function(n){n.preventDefault(),g((function(n){return!n}))},uuid:"pipelines/new_pipeline_button",children:"New pipeline"})}),title:"Pipelines",uuid:"pipelines/index",children:(0,k.jsx)(m.Z,{buildLinkProps:function(n){return{as:"/pipelines/".concat(H[n].uuid),href:"/pipelines/[pipeline]"}},columnFlex:[null,1,7,1,1,1,null],columns:[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Name"},{uuid:"Type"},{uuid:"Blocks"},{uuid:"Triggers"},{label:function(){return""},uuid:"view"}],rows:H.map((function(n,e){var o=n.blocks,u=(n.name,n.schedules),c=n.type,l=n.uuid,a=o.filter((function(n){var e=n.type;return A.tf.SCRATCHPAD!==e})).length,s=u.length,f=u.find((function(n){var e=n.status;return P.fq.ACTIVE===e}));return[s>=1?(0,k.jsx)(d.Z,{iconOnly:!0,loading:!!t[l],noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(e){(0,C.j)(e),r((function(n){return S(S({},n),{},(0,i.Z)({},l,!0))})),W(S(S({},n),{},{status:f?P.fq.INACTIVE:P.fq.ACTIVE}))},children:f?(0,k.jsx)(w.dz,{muted:!0,size:2*j.iI}):(0,k.jsx)(w.Py,{default:!0,size:2*j.iI})}):null,(0,k.jsx)(O.ZP,{default:!f,monospace:!0,success:!!f,children:f?P.fq.ACTIVE:s>=1?P.fq.INACTIVE:"no schedules"},"pipeline_status_".concat(e)),(0,k.jsx)(O.ZP,{children:l},"pipeline_name_".concat(e)),(0,k.jsx)(O.ZP,{children:c===v.q.PYTHON?"Standard":(0,T.kC)(c)},"pipeline_type_".concat(e)),(0,k.jsx)(O.ZP,{default:0===a,monospace:!0,children:a},"pipeline_block_count_".concat(e)),(0,k.jsx)(O.ZP,{default:0===s,monospace:!0,children:s},"pipeline_trigger_count_".concat(e)),(0,k.jsx)(p.Z,{flex:1,justifyContent:"flex-end",children:(0,k.jsx)(w._Q,{default:!0,size:2*j.iI})},"chevron_icon_".concat(e))]}))})})}x.getInitialProps=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)}))),e.default=(0,g.Z)(x)},24224:function(n,e,t){"use strict";t.d(e,{HK:function(){return a},Hk:function(){return c},IN:function(){return w},Od:function(){return p},Qj:function(){return g},Sm:function(){return y},YC:function(){return s},fS:function(){return b},m5:function(){return O},mp:function(){return A},mr:function(){return d},oM:function(){return h},ry:function(){return f},sE:function(){return l},tS:function(){return v},w6:function(){return m}});var r=t(82394),i=t(7715);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e,t){var r=t.slice();return r.splice(e,0,n),r}function l(n,e){return null===n||void 0===n?void 0:n.find(e)}function a(n,e){return null===n||void 0===n?void 0:n.reduce((function(n,t){return u(u({},n),{},(0,r.Z)({},e(t),t))}),{})}function s(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.ascending,o=void 0===r||r,u=t.absoluteValue,c=void 0!==u&&u,l="string"===typeof e||"number"===typeof e?function(n){return c?Math.abs((0,i.t2)(n,e)):(0,i.t2)(n,e)}:function(n){return c?Math.abs(e(n)):e(n)};return n.sort((function(n,e){var t=0;return l(n)>l(e)?t=o?1:-1:l(n)<l(e)&&(t=o?-1:1),t}))}function d(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.ascending,r=void 0===t||t;return n.sort((function(n,e){var t=0;return n[0]>e[0]?t=r?1:-1:n[0]<e[0]&&(t=r?-1:1),t}))}function f(n,e){for(var t=-1,r=n.length;1+t<r;){var i=t+(r-t>>1);e(n[i])?t=i:r=i}return r}function p(n,e){var t=n.findIndex(e);return h(n,t)}function h(n,e){return n.slice(0,e).concat(n.slice(e+1,n.length))}function b(n,e){return n.map((function(n){return String(n)})).join()===e.map((function(n){return String(n)})).join()}function v(n,e){return n>e}function g(n,e){return n<e}function m(n){return Array(n).fill(0)}function O(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Array.from(Array(n).keys());return 0!==e&&(t=t.map((function(n){return n+e}))),t}function y(n){return n.reduce((function(n,e){return n+e}),0)}function w(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=n.reduce((function(n,e){return n+e}),0)/n.length;return Math.sqrt(n.reduce((function(n,e){return n.concat(Math.pow(e-t,2))}),[]).reduce((function(n,e){return n+e}),0)/(n.length-(e?0:1)))}function A(n){return n[Math.floor(Math.random()*n.length)]}},90211:function(n,e,t){"use strict";t.d(e,{RA:function(){return a},kC:function(){return s},vg:function(){return g},T3:function(){return y},Mp:function(){return d},Pb:function(){return c},HW:function(){return O},wX:function(){return f},x6:function(){return p},_6:function(){return h},zf:function(){return m},Y6:function(){return A},wE:function(){return E},We:function(){return l},QV:function(){return w},C5:function(){return v}});var r=t(75582),i=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],o=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),u=t(24224);function c(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function a(n){return n.split(" ").join("_")}function s(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function f(n){return n.charAt(0).toLowerCase()+n.slice(1)}function p(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1],u=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(u,".").concat(o):u}function h(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e,o=void 0!==i&&null!==i;if(o||(i=2),1===i)t=n;else{var u=n.length,c=n[u-1];t="y"===c&&"day"!==n?"".concat(n.slice(0,u-1),"ies"):"".concat(n,"s"===c?"es":"s")}if(o){var l=r?p(i):i;return"".concat(l," ").concat(t)}return t}function b(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function v(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s(b(n.toLowerCase()))}function m(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(i,o){if(!e){var u=(0,r.Z)(i,2),c=u[0],l=u[1],a=t.slice(0,o).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(l)*a&&(e=h(c,Math.round(n/a)))}})),e}function O(n){return!isNaN(n)}function y(n){return"".concat(p(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((n||0)*Math.pow(100,e))/100}(n)),"%")}function w(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function A(){return"".concat((0,u.mp)(i)," ").concat((0,u.mp)(o))}function E(n){var e=n.split("/"),t=e[e.length-1].split(".")[0];return e.slice(0,e.length-1).concat(t).join("/")}},79274:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines",function(){return t(5545)}])}},function(n){n.O(0,[3850,2083,9767,9386,9774,2888,179],(function(){return e=79274,n(n.s=e);var e}));var e=n.O();_N_E=e}]);