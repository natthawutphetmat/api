const WebSocket = require('ws');
const fs = require('fs');

// สร้าง WebSocket Server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (data) => {
        console.log('Received data');
        
        // เก็บข้อมูลเป็นไฟล์หรือส่งต่อไปยังฝั่ง Admin
        fs.writeFileSync(`screenshots/screenshot-${Date.now()}.jpg`, data);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error(`Error: ${error.message}`);
    });
});

console.log('WebSocket server started on ws://localhost:8080');
