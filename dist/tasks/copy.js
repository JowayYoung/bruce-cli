import{dirname as e}from"path";import{fileURLToPath as i}from"url";import{CopyDir as es,RemoveDir as ze}from"@yangzw/bruce-us/dist/node.js";import ke from"chalk";import we from"figures";import Je from"ora";const zt=Je("文件正在复制中......").start(),h=e(i(import.meta.url));ze("../dist/assets",h),es({dist:"../../dist/assets",distDir:h,src:"../assets",srcDir:h}),zt.stop(),console.log(ke.greenBright(`${we.tick} 文件复制成功`));