# Bruce Cli <img src="https://img.shields.io/badge/bruce--cli-React/Vue应用自动化构建脚手架-66f.svg">

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/bruce-cli)
[![version](https://img.shields.io/badge/version-0.6.2-f66.svg)](https://github.com/JowayYoung/bruce-cli)
[![node](https://img.shields.io/badge/node-%3E%3D%2012.0.0-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![npm](https://img.shields.io/badge/npm-%3E%3D%206.9.0-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/bruce-cli)
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/bruce-cli)
[![coverage](https://img.shields.io/badge/coverage-80%25-09f.svg)](https://github.com/JowayYoung/bruce-cli)
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/bruce-cli)

> `bruce-cli`是一个**React/Vue**应用自动化构建脚手架，其零配置开箱即用的优点非常适合入门级、初中级、快速开发项目的前端同学使用，还可通过创建`brucerc.js`文件覆盖其默认配置，只需专注业务代码的编写无需关注构建代码的编写，让项目结构更简洁。详情请戳[这里](https://github.com/JowayYoung/bruce-cli)，使用时记得查看文档哟，喜欢的话给个Star

![bruce-cli](https://yangzw.vip/static/npm/bruce-cli/bruce-cli.png)

### 🎥背景

在前端技术的日益壮大下，从以前简单的几个文件到现在复杂的一堆文件，各种扩展和工具植入到项目里，使得项目越来越庞大越来越难管理，前端项目也因此趋于`工程化`和`一体化`。日新月异的前端技术已让前端代码的业务逻辑和交互效果越来越复杂，项目会一直维护和迭代，令开发者更加不易于管理。模块化开发和各种框架把项目分成若干个小模块，增加了最后发布的困难，无一个统一的标准，让前端项目结构千奇百怪。通常的项目都是团队开发，每个人的代码编写习惯和逻辑编写风格也很难一致。工作围绕着**开发效率**和**运行性能**的工程化问题是我们作为前端开发者必须得处理的问题。因此前端项目自动化构建在整个项目开发中越来越重要。

### 🔗依赖

> 本项目是一个基于`Webpack4.x.x`开发的极速零配置开箱即用的Web应用构建工具(**每次更新都会保持最新依赖**)，集成各种常用工具(`Handlebars、Postcss`、`Polyfill`、`Sass`、`Less`、`Babel`、`TypeScript`、`Stylelint`、`Eslint`、`Cssnano`、`Uglifyjs`、`Terser`和`Tinyimg`等)扩展构建功能，用于构建和管理**React/Vue**技术栈的项目应用

[![commander](https://img.shields.io/badge/commander-6.x.x-f90.svg)](https://github.com/JowayYoung/bruce-cli)
[![inquirer](https://img.shields.io/badge/inquirer-7.x.x-f90.svg)](https://github.com/JowayYoung/bruce-cli)
[![webpack](https://img.shields.io/badge/webpack-4.x.x-f66.svg)](https://github.com/JowayYoung/bruce-cli)
[![handlebars](https://img.shields.io/badge/handlebars-4.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![postcss](https://img.shields.io/badge/postcss-8.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![polyfill](https://img.shields.io/badge/polyfill-3.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![sass](https://img.shields.io/badge/sass-1.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![less](https://img.shields.io/badge/less-3.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![babel](https://img.shields.io/badge/babel-7.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![typescript](https://img.shields.io/badge/typescript-4.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![stylelint](https://img.shields.io/badge/stylelint-13.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![eslint](https://img.shields.io/badge/eslint-7.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![cssnano](https://img.shields.io/badge/cssnano-4.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![uglifyjs](https://img.shields.io/badge/uglifyjs-3.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![terser](https://img.shields.io/badge/terser-5.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![tinyimg](https://img.shields.io/badge/tinyimg-1.x.x-3c9.svg)](https://github.com/JowayYoung/bruce-cli)
[![react](https://img.shields.io/badge/react-17.x.x-09f.svg)](https://github.com/JowayYoung/bruce-cli)
[![vue](https://img.shields.io/badge/vue-2.x.x-09f.svg)](https://github.com/JowayYoung/bruce-cli)

### 📦安装

`npm i -g bruce-cli`

> 安装失败

- 切换**NPM镜像**为淘宝镜像：`npm config set registry https://registry.npm.taobao.org/`
- 切换**Node镜像**为淘宝镜像：`npm config set disturl https://npm.taobao.org/mirrors/node/`
- 重新执行安装命令：`npm i -g bruce-cli`

### 💻使用

~|命令|缩写
-|-|-
构建项目|**bruce build**|`bruce b`
初始项目|**bruce init**|`bruce i`
切换语言|**bruce locale**|`bruce l`
创建组件|**bruce new**|`bruce n`
删除依赖|**bruce remove**|`bruce r`

### ☎️语言

- [x] **zh-chs**：简体中文 **<font color="#f66">默认</font>**
- [x] **zh-cht**：繁體中文
- [x] **en**：English

### 💡功能

> 命令功能

- [x] **构建项目**：根据终端交互式问答选择所需配置构建项目，可选开发环境、测试环境和生产环境
- [x] **初始项目**：根据终端交互式问答选择所需配置生成项目的骨架文件和入口文件
- [x] **切换语言**：根据终端交互式问答选择所需配置切换终端文本语言，可选简体中文、繁体中文和英文
- [x] **创建组件**：根据终端交互式问答输入所需配置在项目根目录对应的路径下创建模板文件
- [x] **删除依赖**：快速删除项目依赖文件和依赖锁定文件

> 内置功能

- [x] **选择模式**：提供`开发环境`、`测试环境`和`生产环境`三种模式，每种模式对应不同的构建配置和优化方案
- [x] **监听端口**：使用开发模式时，启动本地服务器并监听指定端口，可自动打开浏览器访问页面
- [x] **局部刷新**：启用Webpack内置`Hot Module Replacement`，配合`react-hot-loader`或`vue-loader`增量更新`css文件`和`js文件`，修哪更哪，无需刷新页面即可实时预览修改结果，并保存当前数据状态
- [x] **判断入口**：快速扫描项目指定的入口文件路径，判断其是否存在和合法，项目构建时以入口文件作为根节点，必须得保证其存在和合法
- [x] **插入垫片**：根据项目浏览器兼容性自动插入垫片，兼容低版本浏览器
	- 插入动态`polyfill`，根据浏览器请求时的`UserAgent`返回垫片文件，`babel`编译JS代码时就无需带上垫片编译，起到`减包作用`
	- 插入静态`polyfill`，根据`browserslist`和编写代码中的ES6语法自动插入所需垫片
- [x] **动态导入**：可使用动态导入语法(`import().then()`)，处理代码时会单独分离该模块，执行页面对应操作时才加载该模块，使用才加载不使用则不加载(`代码懒加载`)，减少首屏加载代码大小和渲染时间
- [x] **编译代码**：内置CSS编译器(`postcss/sass/less`)和JS编译器(`babel/typescript`)编译样式和脚本，开发时可使用最新特性或草案规范的语法，使得代码更简洁，提高代码的可读性
	- 内置`raw-loader`，用于处理`txt文件`，把文件内容以字符串的形式导入
	- 内置`handlebars-loader`，用于处理`内联HTML`和`hbs文件`，把HTML元素以内联的形式插入到页面中
	- 内置`style-loader`和`css-loader`，用于处理`css文件`(包含`sass/scss/less`转换后的`css文件`)，把CSS从JS中单独抽离出来
	- 内置`postcss-loader`，用于处理CSS最新特性和草案规范，根据`browserslist`增加CSS属性前缀
	- 内置`sass-loader`，用于处理`sass文件`和`scss文件`，通过`dart-sass`将`sass/scss`编译成`css`
	- 内置`less-loader`，用于处理`less文件`，通过`less`将`sass/less`编译成`css`
	- 内置`babel-loader`，根据预设环境和`browserslist`并结合`polyfill`处理编写的`ES6代码`和`TS代码`，并生成大众浏览器可识别的`ES5代码`
- [x] **校验代码**：确保编写的语法无错误，统一规范团队协作中每位同事的代码编写风格，减少代码冗余，在保证代码语法正确的前提下提高代码的可读性
	- `CSS校验`：内置`stylelint`，配置标准的CSS语法规则，检查和纠正出现的语法错误
	- `JS校验`：内置`eslint`，配置标准的JS和TS语法规则，检查和纠正出现的语法错误
- [x] **分割代码**：构建业务代码，将其分割成`WebpackRuntime代码块`、`第三方依赖代码块`、`公共业务代码块`和`单个业务代码块`四大部分
- [x] **合并代码**：通过对相同模块、相同功能和复用多次的代码整体合并，起到`减包作用`
- [x] **友好提示**：当遇到警告和错误时输出语法高亮的代码片段和解决方式，帮助开发者定位问题
- [x] **压缩合并**：
	- `CSS压缩`：内置`cssnano`，压缩去重抽离出来的CSS
	- `JS压缩`：内置`uglifyjs`和`terser`，压缩去重抽离出来的JS，`uglifyjs`用于压缩`ES5`，`terser`用于压缩`ES6`
	- `图像压缩`：内置`tinyimg`，无损压缩`jpg`和`png`图像
- [x] **代理接口**：使用`proxy`反向代理服务端接口，解决接口跨域问题
- [x] **处理资源**：内置`file-loader`和`url-loader`，用于处理字体、图像、音频和视频等媒体资源，图像小于10k时转换为`Base-64 URL`
- [x] **提升作用**：启用Webpack内置`Scope Hoisting`，分析出模块间的依赖关系，把构建好的模块合并到一个函数中，起到`减包作用`
- [x] **摇树优化**：启用Webpack内置`Tree Shaking`，禁止`babel`把代码转换成`CommonJS规范`，使用`ESM规范`的静态声明特点去除不被引用或不被执行的代码块，起到`减包作用`
- [x] **缓存优化**：在开启文件哈希化后，根据文件哈希值是否发生变化执行构建操作，哈希无变化的文件直接从缓存中获取，减少构建生成文件的时间
- [x] **缓存文件**：首次构建速度可能慢一些，构建完成后会生成本地缓存文件，可提高后续再次构建的速度
- [x] **哈希文件**：可对生成文件设置哈希值，只有文件内容修改才会更改哈希值，用于长缓存优化
- [x] **时化目录**：可时间序列化命名输出的项目根目录，增加时间戳区分版本
- [x] **分析构建**：可在构建完成后展示构建依赖的关系，根据关系图合理分析模块的依赖关系
- [x] **上传文件**：暴露出构建成功的钩子，可在钩子函数上编写上传到服务器的代码用于构建后将文件上传到服务器，还可进行其他操作
- [x] **定制配置**：当部分配置不符合项目需求时，可通过项目根目录下的配置文件`brucerc.js`修改默认配置，构建启动时就会使用该配置文件覆盖默认构建配置

### ⚙️配置

- **alias**：模块导入快捷方式，配置详情请参考[webpack-resolve-alias](https://webpack.js.org/configuration/resolve/#resolve-alias)
- **browserList**：目标浏览器配置列表，配置详情请参考[browserslist](https://github.com/browserslist/browserslist)
- **errorCb(err)**：构建失败回调函数，可自定其他操作
	- `err`：错误信息
- **eslintIgnores**：Eslint忽略路径列表，配置详情请参考[eslint-ignores](https://eslint.org/docs/user-guide/configuring#using-eslintignore-in-packagejson)
- **eslintRules**：Eslint校验规则列表，配置详情请参考[eslint-rules](https://eslint.org/docs/user-guide/configuring#configuring-rules)和[rules](https://eslint.org/docs/rules/)
- **frame**：开发框架(`default`表示普通应用，`react`表示React应用，`vue`表示Vue应用)
- **includeModules**：编译模块白名单列表(`node_modules/xxx`)，默认不对`node_modules`编译
- **openPath**：开发环境下浏览器打开后显示URL路径
- **proxy**：接口代理，配置详情请参考[webpack-dev-server-proxy](https://webpack.js.org/configuration/dev-server/#devserver-proxy)
- **style**：样式格式(`scss/less`)
- **stylelintIgnores**：Stylelint忽略路径列表，配置详情请参考[stylelint-ignores](https://stylelint.io/user-guide/configuration/#ignorefiles)
- **stylelintRules**：Stylelint校验规则列表，配置详情请参考[stylelint-rules](https://stylelint.io/user-guide/configuration/#rules)和[rules](https://stylelint.io/user-guide/rules/)
- **successCb(mode, dir)**：构建成功回调函数，可自定义上传文件操作或其他操作
	- `mode`：运行环境(`test`表示测试环境，`prod`表示生产环境)
	- `dir`：输出路径
- **uploadOpts(mode)**：上传配置函数(必须返回一个**Object**，并包含以下字段)，配置详情请参考[scp2](https://github.com/spmjs/node-scp2)
	- 回调参数
		- `mode`：运行环境(`test`表示测试环境，`prod`表示生产环境)
	- 返回对象
		- `host`：服务器IP地址
		- `password`：密码(不可与`privateKey`共存)
		- `path`：目标文件路径
		- `privateKey`：秘钥(不可与`password`共存)
		- `username`：账号
- **useTs**：集成TypeScript

> 默认配置

```js
module.exports = {
    alias: {},
    browserList: [
        "last 20 Chrome versions",
        "last 20 Firefox versions",
        "last 20 Opera versions",
        "Explorer >= 10",
        "Safari >= 8",
        "Android >= 5",
        "iOS >= 8"
    ],
    errorCb: null,
    eslintIgnores: [],
    eslintRules: {
        // eslint规则配置
        // 查看bruce-cli模块下的temp/configs/eslintrc.{default/react/vue}.js
    },
    frame: "default",
    includeModules: [],
    openPath: "",
    proxy: {},
    style: "scss",
    stylelintIgnores: [],
    stylelintRules: {
        // stylelint规则配置
        // 查看bruce-cli模块下的temp/configs/stylelintrc.{default/react/vue}.js
    },
    successCb: null,
    uploadOpts: null,
    useTs: false
};
```

> 覆盖配置

- 目前只提供`.js`形式的配置文件，可参考以下配置编写
- 因为本项目使用`CommonJS规范`开发，所以必须使用`module.exports = { ... };`导出以下配置
- 如需自定义上传操作，必须把`uploadOpts`设置为`null`或删除该字段，并使用`successCb`定义上传操作

```js
module.exports = {
    alias: {
        swiper: "swiper/dist/js/swiper.js"
    },
    browserList: [
        "> 0.5%",
        "last 2 versions"
    ],
    errorCb(err) {
        console.log("错误信息", err);
    }
    eslintIgnores: [
        "src/components/*"
    ],
    eslintRules: {
        "space-before-function-paren": ["error", "always"]
    },
    frame: "react",
    includeModules: [
        "lodash",
        "trample"
    ],
    openPath: "?abc=123",
    proxy: [{
        changeOrigin: true,
        context: [
            "/login",
            "/list",
            "/detail"
        ],
        secure: false,
        target: "https://www.baidu.com"
    }],
    style: "less",
    stylelintIgnores: [
        "src/assets/css/*"
    ],
    stylelintRules: {
        "color-hex-case": "upper"
    },
    successCb(mode, dir) {
        console.log("运行环境", mode);
        console.log("输出路径", dir);
    },
    uploadOpts(mode) {
        return {
            host: "your server ip",
            password: "your server password",
            path: "/root/www",
            username: "root"
        };
    },
    useTs: true
};
```

### 📋细节

> IDE相关

- 推荐使用[VSCode](https://code.visualstudio.com/)开发项目，以下配置也是基于`VSCode`驱动
- 若启用`Stylelint`或`Eslint`，需在IDE上安装[Stylelint插件](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)和[Eslint插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)才能配合本项目校验代码并高亮显示警告和错误
- `Stylelint`或`Eslint`的详细配置可参考笔者的开源项目[vscode-lint](https://github.com/JowayYoung/vscode-lint)

> CLI相关

- 默认显示语言为`简体中文`，如需切换`繁体中文/英文`请执行`bruce l`切换
- 目前只装备了`React`和`Vue`的构建配置，请勿构建`Angular`或其他`MVVM`项目
- 当前应用只能是`React`应用或`Vue`应用才能使用`bruce n`命令
- 配置文件`brucerc.js`的属性是`null/""/[]/{}`时，会使用内置配置默认值
- 请务必遵循构建错误提示修正相关错误，不要随意改动构建源码和生成配置，否则可能导致项目构建进程无法运行
- 多次构建后可能因为长时间使用长缓存优化，导致缓存有几率读取失败，重新构建时可能会提示错误，此时执行`bruce r`删除`node_modules`并重新安装依赖即可

> 文件相关

- 项目只能单独存在JS或TS，JS项目脚本文件只能是`.js/.jsx/.vue`，TS项目下脚本文件只能是`.ts/.tsx/.vue`
- 应用类型为SPA时，入口文件必须为`src/index.(js|ts|jsx|tsx)`
- 应用类型为MPA时，入口文件必须为`src/pages/pageName/index.(js|ts|jsx|tsx)`
- 当`src/pages`目录存在且包含子文件夹，则自动识别为`MPA项目`
- 使用`CSS精灵图`时，必须把图标统一放到`src/assets/icon`下，且文件格式为`png`
- 暴露出全局变量`RUN_ENV`用于获取当前运行环境，在使用`Eslint`会报语法错误，在代码后面追加`// eslint-disable-line`即可
	- `dev`：开发环境
	- `test`：测试环境
	- `prod`：生产环境
- 文件导入快捷方式
	- `#`：根目录
	- `@`：`src`目录

> 垫片相关

- `@babel/polyfill`在`7.4.0`后被弃用，因此本项目使用的垫片为`core-js`和`regenerator-runtime`
- 如无特殊兼容，入口文件最顶处无需插入`import "core-js/stable";`和`import "regenerator-runtime/runtime";`，构建程序会自行根据预设环境和`browserslist`增加垫片
- 如需兼容低版本浏览器，需手动安装`core-js`和`regenerator-runtime`，在入口文件最顶处插入`import "core-js/stable";`和`import "regenerator-runtime/runtime";`

> ES6相关

- 执行`bruce b`构建项目时，若是首次构建会提示构建`package.json`下`dependencies`的依赖(`Dll构建`)，目的是加快后续开发中`HMR`的构建速度，只构增量建修改过的文件，其余文件一概读取缓存
- 若某个依赖使用ESM按需导入，在执行`bruce b`构建项目时不要选择该依赖加入到`Dll构建`中，并在`brucerc.js`的`includeModules`上增加该依赖，构建时会去除不被引用或不被执行的代码块

> TS相关

- 当使用TS时，会在项目根目录下自动生成配置文件`tsconfig.json`
- 如需修改TS配置，只需修改`tsconfig.json`

> 普通项目相关(*`bruce i`初始项目时选择`default`*)

- 可使用内置`handlebars`模板
- 入口文件必须为`src/index.js`或`src/pages/pageName/index.js`
- 初始时的应用类型为SPA(不提供MPA形式的初始化)，如需转换成MPA，必须按照基础项目规定的入口文件形式重新分配文件路径
- 可用来开发原生JS项目、Jquery项目和Zepto项目等
- 公共函数需放置`src/templates/helpers`目录下，在模板内使用`{{> fileName}}`引用
- 公共模板需放置`src/templates/partials`目录下，在模板内使用`{{fileName param}}`引用
- 公共函数和公共模板的用法和示例请参考[handlebars-loader](https://github.com/pcardune/handlebars-loader)

### ⚖️对比

Github上常见的构建项目都是暴露出很多构建代码，构建代码和业务代码完全耦合在一起，导致维护和升级成本加重，重新开一个项目还是会遇到该问题。

本项目就显得比较特殊，真正实现构建代码和业务代码的完全分离，以`NPM模块`的形式锁定构建代码，只通过一个配置文件与业务代码通讯，让开发者解放双手，只需写好业务代码。

以下对传统构建方案和本构建方案进行一次合理的对比

- 传统构建方案
- 本构建方案

> 传统构建方案

基于`Gulp/Webpack`构建的`React/Vue项目`，项目代码分为**构建代码**和**业务代码**，项目目录和文件配置是比较传统和多人使用的项目搭建方案。整个项目中除去业务代码后，构建代码的文件较多，配置比较分散，较难集中管理，无法做到开箱即用，通用性较低，前期搭建项目构建方案可能花费的时间较多，项目构建时需依赖本项目存在的依赖模块才能驱动。对于增删改构建功能和新同事入门，可能需花较多的时间去查找代码和熟悉构建逻辑。

![传统构建方案目录](https://yangzw.vip/static/npm/bruce-cli/project-c.png)

> 本构建方案

基于本项目构建的`React/Vue项目`，代码只有**业务代码**，构建代码集中在一起做成一个`NPM模块`并安装到全局环境中，通过命令调用本方案驱动需开发的项目，实现构建代码和业务代码完全分离。开发时无需关注如何写好构建代码和使用何种工具扩展构建功能，只需专注于业务代码的编写，整个项目只存在业务代码，可通过配置文件修改默认构建配置，大大缩减项目前期的准备工作，保证项目的**简洁性**、**独立性**、**高效性**和**维护性**。省去项目前期搭建的时间，直接开箱即用，使开发者集中精力写好业务代码。

![本构建方案目录](https://yangzw.vip/static/npm/bruce-cli/project-s.png)

> 方案对比

~|传统构建方案|本构建方案
:-:|-|-
构建文件|`build文件夹`、`config文件夹`<br>`.browserslistrc`<br>`.postcssrc`、`babelrc`<br>`.stylelintignore`、`.stylelintrc`<br>`.eslintignore`、`.eslintrc`|无
业务文件|`src文件夹`|`src文件夹`
配置文件|很多，需分开书写|`brucerc.js`
基础文件|`package.json`、`readme.md`|`package.json`、`readme.md`
依赖模块|Webpack/Gulp技术栈(`构建`)<br>React/Vue技术栈(`业务`)|React/Vue技术栈(`业务`)
安装时间|较慢<br>安装构建和业务代码的依赖模块<br>每次开发都需安装一次|较快<br>只安装业务代码的依赖模块<br>全局安装一次即可
开发准备|编写Webpack/Gulp和多种工具搭配的构建代码|开箱即用
全局使用|不可行|可行
构建复用|新建文件夹，复制粘贴构建代码，修改配置文件等|执行命令行初始项目和构建项目
新手构建|需了解构建代码逻辑和配置文件|执行命令行
后期扩展|在原有构建代码中增删改构建功能|通过配置文件`brucerc.js`增删改构建功能
配置管理|分散到不同的构建配置文件中<br>需对不同工具的配置文件修改|集成构建的基础配置<br>可通过配置文件`brucerc.js`覆盖

### 🔨示例

以下是一个完整的项目开发流程：

- 查看帮助：`bruce -h`
- 查看版本：`bruce -v`
- 切换语言：`bruce l`
- 进入文件夹：`cd projectList`
- 初始项目：`bruce i`
- 进入项目根目录：`cd myProject`
- 构建项目：`bruce b`
- 创建组件(处于开发状态时需另起一个`cmd`窗口执行)：`bruce n`
- 发布项目(处于开发状态时需另起一个`cmd`窗口执行)：`bruce b`
- 删除依赖(出现构建失败或其他突发情况)：`bruce r`

正确使用姿势请看这个[视频](https://www.bilibili.com/video/BV1UK41157fX)，简单易用方便快捷，**一次安装全局运行**，实在是**远离架构专注编码的必备工具**。

笔者的个人官网使用`bruce-cli`构建，可当做`bruce-cli`示例，有兴趣的同学请戳[JowayYoung个人官网](https://yangzw.vip)查看详情。

### 📝待做

- [ ] 修复Vue项目下无法校验`vue文件`以外的`css/sass/scss/less文件`

### 📆日志

**0.6.0**

- [x] 由于`tslint`的性能问题，所有`tslint`功能改由`eslint`代替
- [x] 将`stylelint`和`eslint`的配置格式从`JSON`转换成`JS`

**0.5.0**

- [x] 升级`postcss`，更新其配置文件
- [x] 移除`node-sass`，使用`sass/dark-sass`代替其功能，让`bruce-cli`下载更快运行更稳

**0.4.0**

- [x] 限制`bruce-cli`必须在`Node v12`以上使用
- [x] 修改`core-js`版本检测，如需导入`core-js`作为`polyfill`，必须使用`core-js v3`
- [x] 增加`tinyimg-webpack-plugin`，用于压缩图像
- [x] 调整终端交互面板的显示文案

**0.3.0**

- [x] React项目模板改用`Reack Hooks`的形式
- [x] 移除`publicPathProd`和`publicPathTest`两个参数，打包文件引用路径统一使用绝对路径

### 🔖版权

MIT © [Joway Young](https://github.com/JowayYoung)

本项目由笔者独自开发，全程无任何人参与，经过3年多的时间沉淀出来，整个过程进行了大量的项目测试和应用，目前上线的项目多达`50`多个，足可支撑本项目的可行性和稳定性。

由于自己项目开发经验和技术积累有限，不能保证本项目不存在任何Bug，若在后续使用本项目时发现Bug或产生疑问，可随时在[Issues](https://github.com/JowayYoung/bruce-cli/issues)上提出你的宝贵建议，笔者会立马反馈和修复相关Bug。

### ⏳后记

本项目源于`2017年3月`笔者负责一个`Angular2`项目里的构建代码，从最初的`Webpack2`一直迭代到今天的`Webpack4`，话说`Webpack5`过段时间就要发布了。

最初笔者的构思是写一份构建代码模板存放在`Github`上，然后通过脚本把构建代码拉下来。可是这样构建代码和业务代码还是同时存放在一个文件夹里，不易管理，文件又多又杂。下次新开项目时又要把构建代码复制过去，有时升级构建功能，为了保持构建功能的统一，需同时修改几个项目里的构建代码。既然这样，为何不把那些通用的构建代码抽离出来做成一个NPM模块呢，这样**一次安装全局**运行，多爽呀！

`2017年5月`笔者就开始对这个项目升级改造，做成一个NPM模块，只不过一直在自己负责的项目上应用。因为还没怎样应用到其他的项目上，所以也不敢开源。经过差不多1年大大小小20多个项目的应用，终于稳定了这个项目的功能，所以笔者也决定对`bruce-cli`开源。对于所有通过`bruce-cli`创建的项目都可开箱即用所有的构建功能，如无特殊需求甚至是零配置即可运行项目。

开发这个项目经历了很多，挖的坑很多，填的坑也很多，很苦很累，有段时间还经常熬夜就是为了把它做得更好。不过收获也很大，学习了很多新知识新技能，把常用的Node知识都用上了，也为自己后期做Node应用开发打下了巩固的基础。有付出就有收获，笔者还是一直深信这句话，因为自己确实进步了很多。截止2020年，已成功运用在自己所负责的项目达到`50`多个，再加上一些同行朋友和一些小公司也有使用本项目。

本项目基于`Node12+`开发，为了兼容`Node10+`，所以使用`babel`编译了源码，生成现在线上版本的代码，待更多的项目测试完成和应用起来后会开放源码供大家一起学习和完善。

若觉得`bruce-cli`对你有帮助，可在[Issue](https://github.com/JowayYoung/bruce-cli/issues)上`提出你的宝贵建议`，笔者会认真阅读并整合你的建议。喜欢`bruce-cli`的请给一个[Star](https://github.com/JowayYoung/bruce-cli)，或[Fork](https://github.com/JowayYoung/bruce-cli)本项目到自己的`Github`上，根据自身需求定制功能。

**关注公众号`IQ前端`，一个专注于CSS/JS开发技巧的前端公众号，更多前端小干货等着你喔**

![](https://static.yangzw.vip/frontend/account/IQ前端公众号.jpg)