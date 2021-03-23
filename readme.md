## 什么是WebAssembly
WebAssembly是一种可以使用非JavaScript编程语言编写代码并且能在浏览器上运行的技术方案，实际上，是一种新的字节码格式（当然还有很多优点）

## Web第四种语言
2019年12月5日，WebAssembly正式成为World Wide Web Consortium(W3C)的标准，加入到了HTML,CSS和JavaScript的行列（可以直接在浏览器控制台输出WebAssembly）

## 转换
JSX TypeScript -> Converter -> .js -> Browser
C/C++ Obj-C Swift -> Compiler -> .wasm -> Browser

## WebAssembly的工作原理
WebAssembly是除了JavaScript以外，另一种可以在网页中运行的编程语言，过去如果你想在浏览器中运行代码来对网页中各种元素进行控制，只有JavaScript这一种选择。

WebAssembly与其它的汇编语言不一样，它不依赖具体的物理机器。可以抽象的理解成它是“概念机器的机器语言”

## WebAssembly的优势
- 文件加载： WebAssembly文件体积更小，所以下载速度更快
- 解析：解码WebAssembly比解析JavaScript更快
- 编译和优化：编译和优化所需的时间较少，因为在将文件推送到服务器之前已经进行了更多优化，JavaScript需要为动态类型多次编译代码
- 重新优化：WebAssembly代码不需要重新优化，因为编译器有足够的信息可以在第一次运行时获取正确的代码。
- 执行：执行可以更快，WebAssembly指令更接近机器码
- 垃圾回收：目前WebAssembly不支持直接垃圾回收，垃圾回收都是手动控制的，所以比自动垃圾回收效率更高
- 安全：可以放hash和签名等

## WebAssembly的应用
WebAssembly可用于视频和音频编解码器，图形和3D，多媒体和游戏，密码计算或便携式语言实现等领域