//引入express模块
const express = require('express');
//创建app应用
const app = express();
//设置静态资源目录
app.use(express.static('public'));

// 处理get请求  
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

app.all('/jquery', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); //允许跨域请求
    const data = {
        name: '李四',
        age: 30
    }
    // response.send("hello jquery");
    response.json(data);   //响应json数据
    // response.send(data); //也可以直接发送json数据
    
});
app.all('/axios', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); //允许跨域请求
    response.setHeader('Access-Control-Allow-Headers','*'); //允许跨域请求头
    const data = {
        name: '李四',
        age: 30
    }
    // response.send("hello jquery");
    response.json(data);   //响应json数据
    // response.send(data); //也可以直接发送json数据
    
});

app.all('/fetch', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); //允许跨域请求
    response.setHeader('Access-Control-Allow-Headers','*'); //允许跨域请求头
    const data = {
        name: '李四',
        age: 30
    }
    // response.send("hello jquery");
    response.json(data);   //响应json数据
    // response.send(data); //也可以直接发送json数据
    
});

// 处理post请求
app.post('/login', (request, response) => {
    //获取请求参数
    const { username, password } = request.body; 
    //验证用户名和密码  
    if (username === 'admin' && password === '123456') {
        //登录成功
        response.send('登录成功');
    } else {
        //登录失败  
        response.status(401).send('用户名或密码错误');
    }
});

// 处理put请求
app.put('/user', (request, response) => {
    //获取请求参数
    const { id, name, age } = request.body; 
    //更新用户信息
    // response.send('更新成功');
    response.json({
        id,
        name,
        age
    });
});





// 处理其他路径
app.use((request, response) => {
    response.status(404).send('404 Not Found');
});

//监听端口
app.listen(8000, () => {
    console.log('server is running at http://localhost:8000');
})
    