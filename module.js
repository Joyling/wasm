const fs = require("fs");
const wasm = new WebAssembly.Module(
    fs.readFileSync(__dirname + "/dist/module.optimized.wasm"), {}
);
module.exports = new WebAssembly.Instance(wasm).exports;
