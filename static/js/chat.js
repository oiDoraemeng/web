const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = {
    customer: null,
    agent: null
};

wss.on('connection', function connection(ws, req) {
    // 简单区分客户和客服端，可以通过URL参数或其他方式进行更复杂的区分
    console.log('客户端已连接');
    console.log(req.url);
    if (req.url === '/customer') {
        clients.customer = ws;
        ws.send('欢迎咨询，请问有什么可以帮助您的？');
    } else if (req.url === '/agent') {
        clients.agent = ws;
        ws.send('客服已连接，您可以开始接收客户消息');
    }

    // 当WebSocket接收到消息时触发该函数
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        message = message.toString('utf8');
        
        // 如果当前WebSocket连接是客户端并且有代理已连接，则将消息发送到代理
        if (ws === clients.customer && clients.agent) {
            clients.agent.send(message);
        } 
        // 如果当前WebSocket连接是代理并且有客户端已连接，则将消息发送到客户端
        else if (ws === clients.agent && clients.customer) {
            clients.customer.send(message);
        }
    });

    ws.on('close', function() {
        if (ws === clients.customer) {
            clients.customer = null;
        } else if (ws === clients.agent) {
            clients.agent = null;
        }
    });
});

console.log('WebSocket服务器已启动，端口8080');
