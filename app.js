const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>DevOps CI/CD Demo</title>
            </head>
            <body>
                <h1>🚀 Node.js CI/CD Demo</h1>
                <p>Application deployed using GitHub Actions and Docker.</p>
                <p>CI/CD Pipeline: Test → Build → Push</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});