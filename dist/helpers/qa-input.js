var g=this&&this.__awaiter||function(t,a,e,n){return new(e||(e=Promise))((function(o,s){function i(t){try{p(n.next(t))}catch(t){s(t)}}function m(t){try{p(n.throw(t))}catch(t){s(t)}}function p(t){var a;t.done?o(t.value):(a=t.value,a instanceof e?a:new e((function(t){t(a)}))).then(i,m)}p((n=n.apply(t,a||[])).next())}))};import{CheckPath as Nt,CheckPort as Pt}from"@yangzw/bruce-us/dist/node.js";import{CHECK_TEXT as At,QUESTION_TEXT as Ee}from"../langs/index.js";import{DATA_REGEXP as gt}from"../utils/index.js";const pt={default:"unknown",message:Ee.appName,name:"appName",type:"input",validate:(t="")=>gt.appName.test(t)?!Nt(t)||At.appPath:At.appName},qt=(t="component")=>({default:"demo",message:Ee.mateName,name:"mateName",type:"input",validate:(a="")=>gt.mateName.test(a)?!Nt(`src/${t}s/${a}`)||At.matePath:At.mateName}),Tt={default:9999,message:Ee.port,name:"port",type:"input",validate(t=""){return g(this,void 0,void 0,(function*(){const a=+t,e=yield Pt({port:a});return isNaN(a)||a%1!=0||a<0||a>65535?At.portName:!!e||At.portPath}))}};export{pt as APP_NAME,qt as MATE_NAME,Tt as PORT};