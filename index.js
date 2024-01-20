const express = require('express');
const cors = require('cors');

const { page1, page2 } = require('./handlers/html-handler');
const fileHandler = require('./handlers/file-handler');
const dataHandler = require('./handlers/data-handler');
const infoHandler = require('./handlers/info-handler');

const app = express();
const port = 4000;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
app.use(cors(corsOptions));

app.use('/assets', express.static('assets'));


app.get('/page1', page1);
app.get('/page2', page2);
app.get('/file/:filename', fileHandler);
app.get('/objects/:type/:id', dataHandler);
app.get('/objects/:type', dataHandler);
app.get('/objects', dataHandler);
app.get('/info', infoHandler);


app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
