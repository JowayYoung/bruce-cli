import{readFileSync as io,renameSync as Ce,writeFileSync as uo}from"fs";import{dirname as w}from"path";import{fileURLToPath as B}from"url";import{AbsPath as E,CopyDir as De}from"@yangzw/bruce-us/dist/node.js";import Ae from"voca";import{JudgeFile as i}from"../../constants/util/index.js";const{camelCase:Ee,titleCase:Fe}=Ae;export default function ke({frame:e="js",name:t="demo",style:o="scss",temp:m="component",useTs:r=!1}={}){const s=w(B(import.meta.url)),c=E(`../../templates/material/${e}${r?"-ts":""}`,s),p=`src/${m}s/${t}`;if(De(c,p),"react"===e){const e=i(p),r=io(e,"utf8").replace(/scss/g,o).replace(/demo/g,t).replace(/Demo/g,Fe(Ee(t))).replace(/component/g,m).replace(/Component/g,Fe(m)),s=E(`${p}/index.scss`),c=E(`${p}/index.${o}`),n=io(s,"utf8").replace(/demo/g,t).replace(/component/g,m);uo(e,r,"utf8"),uo(s,n,"utf8"),Ce(s,c)}else if("vue"===e){const e=E(`${p}/index.vue`),o=io(e,"utf8").replace(/demo/g,t).replace(/Demo/g,Fe(Ee(t))).replace(/component/g,m).replace(/ Component /g,` ${Fe(m)} `);uo(e,o,"utf8")}}