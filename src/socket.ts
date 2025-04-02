// src/socket.js
import { io } from 'socket.io-client';

// 注意：這裡改成你的 Mac IP + Port
const socket = io('http://192.168.123.150:8000');

export default socket;
