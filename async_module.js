// 异步引入例子
const fs = require("fs");
const readFile = require("util").promisify(fs.readFile);

const getInstance = async (wasm, importObject={}) => {
	let buffer = new Uint8Array(wasm)
	return await WebAssembly.instantiate(wasm, importObject)
}

let ins;

const noop = () => {};

const exportFun = (obj, funName) => {
	return (typeof obj[funName] === "function") 
		? obj[funName] : noop;
}

async function getModuleFun(filePath, funName ,importObject={}) {
	if (ins){
		return exportFun(ins, funName)
	}

	const wasmText = await readFile(filePath);
	const mod = await getInstance(wasmText, importObject);

	return exportFun(mod.instance.exports, funName)
}

module.exports = getModuleFun;
