import{_ as d}from"./BxB1FLkV.js";import{g as y}from"./CmZz3ImM.js";import{k as f,g as x,c as g,a as e,b as v,d as u,t as m,j as n,o as N}from"./DxmIxXmG.js";const k={class:"container flex flex-col items-center my-20 space-y-5"},V={__name:"my-account",setup(b){const i=y`
  query MyAccount {
    viewer {
      id
      name
      email
      avatar {
        url
    }
    }
  }
`,{data:p}=f(i),o=x(()=>{var a;return(a=p.value)==null?void 0:a.viewer});return(a,t)=>{var s,r,l,c;const _=d;return N(),g("section",null,[e("div",k,[e("p",null,[t[0]||(t[0]=u(" My Account, Name: ")),e("strong",null,m((s=n(o))==null?void 0:s.name),1)]),e("p",null,[t[1]||(t[1]=u(" Email: ")),e("strong",null,m((r=n(o))==null?void 0:r.email),1)]),v(_,{src:(c=(l=n(o))==null?void 0:l.avatar)==null?void 0:c.url,class:"h-[200px] object-cover rounded-full block"},null,8,["src"])])])}}};export{V as default};
