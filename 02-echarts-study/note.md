### 技术

- 前端技术
  - html, css, js
  - Echarts
  - Vue, Vuex, Router, Webpack, Axios
- 后端技术
  - WebSocket, 向前端推送消息
  - Koa2, 后端技术

### 使用步骤

 <!-- 
  1. 引入 echarts.js 文件
  2. 准备一个呈现图标的盒子
  3. 初始化echarts实例对象
  4. 准备配置项(主要)
  5. 将配置项设置给echarts实例对象
-->

### 配置项详解

- xAxis: 直角坐标系中的 x 轴
- yAxis: 直角坐标系中的 y 轴
- series: 系列列表

### 后台项目

1. 项目准备
2. 开发中间件
   2.1 总耗时中间件
   2.2 响应头中间件
   2.3 业务逻辑中间件
3. 允许跨域

#### 同源策略

- 允许跨域
  - 1. 实际是通过 Ajax 访问服务器
  - 2. 同源策略
    - 当前页面的地址和 Ajax 获取数据的地址
    - 同协议、同域名、同端口
    - 127.0.0.1:5500 ajax 请求 127.0.0.1:8888 也属于不同源

#### vue.config.js

- 在项目文件夹目录下创建 vue.config.js 文件

```javascript
module.exports = {
  devServer: {
    port: 8999, // 端口号设置
    open: true, // 自动打开浏览器
  },
};
```
