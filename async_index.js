var myModule = require("./async_module.js");

// 调用代码
(async () => {
	const fun = await myModule(__dirname + "/dist/module.optimized.wasm", "add")
	console.log(fun(1, 2))
	console.log(fun(4, 10000))
})()
