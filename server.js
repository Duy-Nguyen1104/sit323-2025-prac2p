const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send(`
        <html>
            <head>
                <title>Simple Express Web Page</title>
                <link rel="stylesheet" href="/global.css">
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to my simple webpaage</h1>
                    <p>This is my work for task 2.1P using express</p>
                    <p>Current server time: ${new Date().toLocaleTimeString()}</p>
                </div>
            </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
