import * as express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
 
const app = express();
 
app.use('/home', createProxyMiddleware({ target: 'https://instagram.com', changeOrigin: true }));
app.listen(8100);