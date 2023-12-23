import{j,m as k,k as v,l as I,n as H,p as P,q as E,v as h,x as G,i as u,y as z,b as V,o as l,e as C,w as p,z as A,c,d as S,a as w,t as f,F as y,g as T,A as W,C as D,B as L,_ as R}from"./index-GLkMHD7r.js";const N=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:r,colorSplit:a,lineWidth:n}=t;return{[e]:v(v({},I(t)),{borderBlockStart:`${n}px solid ${a}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${n}px solid ${a}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${a}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${n}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:`${n}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStart:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:r}}})}},F=j("Divider",t=>{const e=k(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[N(e)]},{sizePaddingEdgeHorizontal:0}),O=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),q=P({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:O(),setup(t,e){let{slots:r,attrs:a}=e;const{prefixCls:n,direction:x}=E("divider",t),[$,m]=F(n),_=h(()=>t.orientation==="left"&&t.orientationMargin!=null),i=h(()=>t.orientation==="right"&&t.orientationMargin!=null),d=h(()=>{const{type:o,dashed:g,plain:B}=t,s=n.value;return{[s]:!0,[m.value]:!!m.value,[`${s}-${o}`]:!0,[`${s}-dashed`]:!!g,[`${s}-plain`]:!!B,[`${s}-rtl`]:x.value==="rtl",[`${s}-no-default-orientation-margin-left`]:_.value,[`${s}-no-default-orientation-margin-right`]:i.value}}),b=h(()=>{const o=typeof t.orientationMargin=="number"?`${t.orientationMargin}px`:t.orientationMargin;return v(v({},_.value&&{marginLeft:o}),i.value&&{marginRight:o})}),M=h(()=>t.orientation.length>0?"-"+t.orientation:t.orientation);return()=>{var o;const g=G((o=r.default)===null||o===void 0?void 0:o.call(r));return $(u("div",z(z({},a),{},{class:[d.value,g.length?`${n.value}-with-text ${n.value}-with-text${M.value}`:"",a.class],role:"separator"}),[g.length?u("span",{class:`${n.value}-inner-text`,style:b.value},[g]):null]))}}}),J=H(q),Q="/about/assets/opsgin-I85PJQwV.png",U="/about/assets/ui-vmm-oMA3sv3A.jpg",X=["src"],Y=["href"],K={__name:"Projects",setup(t){const e=V([{name:"opsgin",desc:"opsgin",cover:Q,links:[{text:"Repository",url:"https://github.com/slack-utils/opsgin"}],tags:["golang"]},{name:"ui-vmm",desc:"uivmm",cover:U,links:[{text:"site",url:"https://ui-vmm.github.io"},{text:"demo",url:"https://ui-vmm.github.io/demo"}],tags:["golang","vuejs","grpc"]},{name:"SSHPass",desc:"sshpass",links:[{text:"repo",url:"https://github.com/dhalturin/sshpass"}],tags:["c"]}]);return(r,a)=>{const n=J,x=W,$=D,m=L,_=A;return l(),C(_,{class:"projects"},{default:p(()=>[(l(!0),c(y,null,S(e.value,i=>(l(),C(m,{span:12},{default:p(()=>[u($,null,{cover:p(()=>[w("img",{src:i.cover},null,8,X)]),default:p(()=>[u(x,{title:i.name},{description:p(()=>[w("div",null,f(r.$t(i.desc)),1),u(n,{dashed:""}),(l(!0),c(y,null,S(i.links,(d,b)=>(l(),c("span",null,[w("a",{href:d.url,target:"_blank"},f(r.$t(d.text)),9,Y),T(f(b!==i.links.length-1&&", "||""),1)]))),256)),(l(!0),c(y,null,S(i.tags,d=>(l(),c("span",null,", #"+f(d),1))),256))]),_:2},1032,["title"])]),_:2},1024)]),_:2},1024))),256))]),_:1})}}},Z={class:"projects"},tt={__name:"Projects",setup(t){return(e,r)=>(l(),c("div",Z,[u(K)]))}},nt=R(tt,[["__scopeId","data-v-17e78aa1"]]);export{nt as default};
