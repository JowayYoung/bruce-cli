/* 详情请参考文档：https://jowayyoung.github.io/bruce/app */
module.exports = {
	alias: {}, // 快捷方式：Object
	browsers: [], // 兼容列表：Array
	buildErrorCb: null, // 构建失败回调函数：Function
	buildSuccessCb: null, // 构建成功回调函数：Function
	eslintIgnores: [], // Eslint忽略路径列表：Array
	eslintRules: {}, // Eslint校验规则列表：Object
	frame: "", // 开发框架：String
	openPages: [], // 打开页面：Array
	proxy: {}, // 接口代理：Object或Array
	proxyHost: "", // 代理域名：String
	publicPath: "", // 公共路径：String或Function
	scriptAssets: [], // 脚本资源：Array
	style: "", // 预设样式：String
	styleAssets: [], // 样式资源：Array
	stylelintIgnores: [], // Stylelint忽略路径列表：Array
	stylelintRules: {}, // Stylelint校验规则列表：Object
	transpileDeps: [], // 转译依赖：Array
	uploadOpts: null, // 上传配置：Object或Function
	useTs: false // 集成TypeScript：Boolean
};