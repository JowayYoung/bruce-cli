const e=require("child_process"),s=require("fs"),t=require("util"),i=require("make-dir"),r=require("ora"),p=require("recursive-copy"),{COMPONENT:a,PACKAGE:o,PORJECT:c}=require("./template"),{NEW_TEXT:n}=require("../i18n"),{AbsPath:m,AsyncTo:l,TitleCase:u}=require("../util/setting");module.exports=class{constructor({compName:e="components/demo",deps:s={},devDeps:t={},frame:i="default",projName:r="demo",style:p="scss",useMpa:a=!1,useProps:o=!1,useTs:c=!1}){this.frame=i,this.projName=r,this.compName=`src/${e}`,this.style=p,this.deps=s,this.devDeps=t,this.useMpa=a,this.useTs=c,this.useProps=o,this.writeProject={default:this.initProjForD,react:this.initProjForR}[i],this.writeComponent={react:this.initCompForR}[i]}async writeConfig(){s.mkdirSync(m(this.projName));const e=m("../temp/configs/brucerc.js",1),t=m(`${this.projName}/brucerc.js`),i=s.readFileSync(e,"utf8").replace(/frame: "default"/g,`frame: "${this.frame}"`).replace(/style: "scss"/g,`style: "${this.style}"`).replace(/useTs: false/g,`useTs: ${this.useTs}`);s.writeFileSync(t,i,"utf8");const r=Object.assign(o,{dependencies:this.deps,devDependencies:this.devDeps,name:this.projName}),a=m(`${this.projName}/package.json`),c=JSON.stringify(r,null,"\t");if(s.writeFileSync(a,c,"utf8"),this.useTs){const e=m("../temp/configs/tsconfig.json",1),s=m(`${this.projName}/tsconfig.json`);await p(e,s)}const n=m("../temp/assets",1),l=m(`${this.projName}/src/assets`);await p(n,l)}async initProjForD(){await this.writeConfig();const e=m("../temp/projects/default",1),s=m(`${this.projName}/src`);await p(e,s)}async initProjForR(){await this.writeConfig();const e=this.useMpa?["home","about","contact"]:["index"],t=this.useTs?"ts":"js",{importO:r,importR:p,note:a,render:o}=c,n=e=>this.useMpa?`pages/${e}/`:"",l=(e,s)=>`${this.projName}/src/${n(e)}index.${s}`,h=m("../temp/projects/react/template.txt",1),d=s.readFileSync(h,"utf8"),y=m("../temp/projects/react/style.txt",1),f=s.readFileSync(y,"utf8"),g=m("../temp/projects/react/script.txt",1),j=s.readFileSync(g,"utf8");for(let c of e){this.useMpa&&await i(m(`${this.projName}/src/pages/${c}`));const e=m(l(c,"html")),h=d.replace(/Demo/g,u(c));s.writeFileSync(e,h,"utf8");const y=m(l(c,this.style)),g=f.replace(/demo/g,c);s.writeFileSync(y,g,"utf8");const $=m(l(c,t+"x"));let w=j.replace(/scss/g,this.style).replace(/demo-page/g,c+"-page").replace(/demo.jsx/g,`${n(c)}index.${t}x`).replace(/Demo/g,u(c)).replace(/#importR#/g,p[t]).replace(/#importO#/g,r[t]).replace(/#render#/g,o[t]).replace(/#note#/g,a[t]);this.useMpa&&(w=w.replace(/.\/assets/g,"@/assets")),s.writeFileSync($,w,"utf8")}}async initCompForR(){await i(m(this.compName));const p=this.compName.split("/").pop(),o=this.useTs?"ts":"js",{importPT:c,importR:h,interfaces:d,props:y,render:f,statics:g}=a,j=m("../temp/components/react/style.txt",1),$=m(`${this.compName}/index.${this.style}`),w=s.readFileSync(j,"utf8").replace(/demo/g,p);s.writeFileSync($,w,"utf8");const N=m("../temp/components/react/script.txt",1),F=m(`${this.compName}/index.${o}x`),P=s.readFileSync(N,"utf8"),x=h[o]+(this.useProps?c[o]:""),S=this.useProps?g[o]:"",T=this.useProps?d[o]:"",D=f[o],C=this.useProps?y[o]:"",q=P.replace(/scss/g,this.style).replace(/Demo/g,u(p)).replace(/demo/g,p).replace(/#import#/g,x).replace(/#static#/g,S).replace(/#interface#/,T).replace(/#render#/g,D).replace(/#props#/g,C);if(s.writeFileSync(F,q,"utf8"),this.useProps&&!this.deps["prop-types"]){const s=`yarn add prop-types${this.useProps?" && yarn add -D @types/prop-types":""}`,i=`npm i prop-types${this.useProps?" && npm i -D @types/prop-types":""}`,p=t.promisify(e.exec),a=r(n.installing);a.start();const[o,c]=await l(p(s));(o||!c)&&await p(i),a.stop()}}};