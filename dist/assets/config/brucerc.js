/* 详情请参考文档：https://jowayyoung.github.io/bruce/app */
export default {
	alias: {}, // 快捷方式：Object
	browsers: [], // 兼容范围：Array
	buildError: null, // 构建失败回调：Function
	buildSuccess: null, // 构建成功回调：Function
	copyFiles: [], // 复制文件：Array或Function
	eslintIgnores: [], // Eslint忽略路径：Array
	eslintRules: {}, // Eslint校验规则：Object
	frame: "js", // 开发框架：String
	linkAssets: [], // 链接资源：Array或Function
	openPages: [], // 打开网页：Array
	proxy: {}, // 接口代理：Object
	proxyHost: "", // 代理域名：String
	publicPath: "", // 公共路径：String或Function
	scriptAssets: [], // 脚本资源：Array或Function
	style: "scss", // 预设样式：String
	stylelintIgnores: [], // Stylelint忽略路径：Array
	stylelintRules: {}, // Stylelint校验规则：Object
	transpileDeps: [], // 转译依赖：Array
	useTs: false // 集成TypeScript：Boolean
};