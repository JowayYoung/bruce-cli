var x=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(o,n){function r(t){try{c(i.next(t))}catch(t){n(t)}}function l(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,l)}c((i=i.apply(t,e||[])).next())}))};import{watch as w}from"fs";import{basename as _,dirname as t}from"path";import{fileURLToPath as l}from"url";import $ from"@vitejs/plugin-basic-ssl";import F from"@vitejs/plugin-react";import{AbsPath as N,IsEmptyObject as S}from"@yangzw/bruce-us/dist/node.js";import z from"eslint-formatter-pretty";import E from"open";import J from"postcss-preset-env";import P from"stylelint-formatter-pretty";import{createServer as R}from"vite";import k from"vite-plugin-eslint";import A from"vite-plugin-html-config";import{viteStaticCopy as I}from"vite-plugin-static-copy";import L from"vite-plugin-stylelint";import{JudgeFile as U}from"../utils/index.js";import V from"./parse-config.js";export default function W(e){return x(this,void 0,void 0,(function*(){const s=t(l(import.meta.url)),{alias:i,browsers:o,copyFiles:n,eslintIgnores:r,eslintRules:c,linkAssets:p,openPages:m,proxy:a,proxyHost:f,scriptAssets:u,style:d,stylelintIgnores:y,stylelintRules:v}=yield V(),{port:g,useCsslint:h,useHttps:j,useJslint:b,useOpener:O}=e,C=yield R({configFile:!1,css:{postcss:{plugins:[J({browsers:o})]}},define:{"process.env.NODE_ENV":JSON.stringify("development"),RUN_ENV:JSON.stringify("dev")},mode:"development",plugins:[j?$():null,b?k({cacheLocation:N("node_modules/.cache/eslint-vite-plugin/.eslintcache"),exclude:["node_modules",...r].map((t=>N(t))),extensions:["js","ts","jsx","tsx"],formatter:z,overrideConfig:{rules:c},overrideConfigFile:N("../../node_modules/@yangzw/bruce-std/dist/eslintrc.js",s)}):null,F(),A({favicon:"assets/img/favicon.ico",links:"function"==typeof p?p("dev"):p,scripts:[..."function"==typeof u?u("dev"):u,{src:`./${_(U("src"))}`,type:"module"}]}),I({targets:("function"==typeof n?n("dev"):n).filter((t=>t.from.startsWith("src"))).map((t=>({dest:t.to,src:t.from.replace(/^(src)?\/?/,"")})))}),h?L(Object.assign({cacheLocation:N("node_modules/.cache/stylelint-vite-plugin/.stylelintcache"),configFile:N("../../node_modules/@yangzw/bruce-std/dist/stylelintrc.js",s),customSyntax:`postcss-${d}`,exclude:["node_modules",...y].map((t=>N(t))),formatter:P},S(v)?{}:{config:{rules:v}})):null].filter(Boolean),resolve:{alias:Object.assign({"@":N("src")},i),mainFields:["module","jsnext","jsnext:main","browser","main"]},root:N("./src"),server:{host:j&&f||"127.0.0.1",https:j,port:g,proxy:a}});yield C.listen(),C.printUrls();const H=[...new Set(m.length?m:[""])];if(O){const{host:t,port:e}=C.config.server;yield H.reduce(((s,i)=>x(this,void 0,void 0,(function*(){const o=/^https:?/.test(i)?i:`${j?"https":"http"}://${t}:${e}${i.startsWith("/")?i:`/${i}`}`;yield s,yield E(o,{app:{name:"browser"}})}))),Promise.resolve())}const W=U("","configFile"),B=_(W);w(W,{persistent:!0},((t,e)=>x(this,void 0,void 0,(function*(){"change"===t&&e===B&&(yield C.close(),yield C.restart())}))))}))}