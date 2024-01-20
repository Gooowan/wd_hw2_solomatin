const ducks = require('../data/ducks.js');
const geese = require('../data/geese.js');
const roosters = require('../data/roosters.js');

const dataHandler = (req, res) => {
    const { type, id } = req.params;
    let data;

    switch (type) {
        case 'ducks':
            data = ducks;
            break;
        case 'geese':
            data = geese;
            break;
        case 'roosters':
            data = roosters;
            break;
        default:
            res.status(404).send('Animal not found');
            return;
    }

    if (id) {
        const item = data.find(item => item.id.toString() === id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    } else {
        res.json(data);
    }
};

module.exports = dataHandler;
