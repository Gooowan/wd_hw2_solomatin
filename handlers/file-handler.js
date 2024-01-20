const path = require('path');

const fileHandler = (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, '..', 'assets', 'files', filename);
    res.sendFile(filepath);
}

module.exports = fileHandler;
