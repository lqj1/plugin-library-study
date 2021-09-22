## webpack 三部曲

ref: https://juejin.cn/post/6844904079219490830

### 1.webpack 是什么？

webpack 是一个现代 JavaScript 应用程序的静态模块打包器，当 webpack 处理应用程序时，会递归构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个 bundle。

### 2.webpack 的核心概念

- entry: 入口
- output: 输出
- loader: 模块转换器，用于把模块原内容按照需求转换成新内容
- 插件(plugins): 扩展插件，在 webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要做的事情

### 3.初始化项目

- 新建文件夹
- 使用 npm init -y 进行初始化(也可以使用 yarn)
- 要使用 webpack，那么必然需要安装 webpack、webpack-cli:
  `npm install webpack webpack-cli -D `
- 我在做项目时，版本号为
  ├── webpack@5.53.0
  └── webpack-cli@4.8.0
- 新建 src/index.js 文件，我们在文件中随便写点什么:

```javascript
//index.js
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const dog = new Animal('dog');
```
