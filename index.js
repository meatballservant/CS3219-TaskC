const http = require("http");
const app = require('./app');
const server = http.createServer(app);
const env = require('./config/env');

const port = env.port 

// server listening 
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});