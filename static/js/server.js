//引入express模块
const express = require('express');
//创建app应用
const app = express();
//设置静态资源目录
app.use(express.static('public'));

//设置路由
app.get('/', (request, response) => {
    //设置响应头 
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Access-Control-Allow-Origin', '*'); //允许跨域请求
    response.setHeader('Access-Control-Allow-Headers','*'); //允许跨域请求头
    //发送响应
    // response.send('Hello World!'); 

    const data = {
        name: '张三',
        age: 20
    }

    //响应json数据
    // response.json(data)
    // response.send(data); // 也可以直接发送json数据
    let str = JSON.stringify(data);//将json数据转换为字符串
    setTimeout(() => {   //模拟延迟
        response.send(str);
    },1000)    
 
});
// 处理其他路径
app.use((request, response) => {
    response.status(404).send('404 Not Found');
});

//监听端口
app.listen(8000, () => {
    console.log('server is running at http://localhost:8000');
})
    