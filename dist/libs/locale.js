var g=this&&this.__awaiter||function(t,o,e,n){return new(e||(e=Promise))((function(i,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var o;t.done?i(t.value):(o=t.value,o instanceof e?o:new e((function(t){t(o)}))).then(s,a)}l((n=n.apply(t,o||[])).next())}))};import{readFileSync as le,writeFileSync as ue}from"fs";import{dirname as s}from"path";import{exit as o}from"process";import{fileURLToPath as i}from"url";import{AbsPath as $,CheckPath as Nt,WaitFor as Fe}from"@yangzw/bruce-us/dist/node.js";import Ae from"ora";import{LocaleAnswer as er}from"../helpers/index.js";import{LOCALE_TEXT as XT}from"../langs/index.js";import{ShowTitle as Je}from"../utils/index.js";export default function O(){return g(this,void 0,void 0,(function*(){Je("locale");const{lang:t}=yield er(),e=Ae(XT.doing).start(),n=s(i(import.meta.url)),r=Nt("../langs/index.js",n),a=$("../langs/index."+(r?"js":"ts"),n),l=le(a,"utf8").replace(/"(.+?)"/,`"./${t}.${r?"js":"ts"}"`);ue(a,l,"utf8"),yield Fe(2e3),e.stop(),console.log(XT.done),o(1)}))}