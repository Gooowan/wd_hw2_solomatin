const path = require('path');

const page1 = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'page1.html'));
};

const page2 = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'page2.html'));
};

module.exports = { page1, page2 };
