import{CssLoader as a,CssUrlLoader as f,PostcssLoader as x,ScssLoader as y,StyleLoader as b}from"../loader/index.js";export default function lr({browsers:e=[],debug:s=!1}={}){return{exclude:/node_modules/,include:/src/,test:/\.scss$/,use:[b(s),a(),x(e),f(),y()]}}