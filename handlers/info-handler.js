const infoHandler = (req, res) => {
    const apiInfo = {
        '/html1': 'Displays the first HTML page.',
        '/html2': 'Displays the second HTML page.',
        '/file/:filename': 'Serves a specified file.',
        '/objects/:type/:id': 'Fetches a specific object by type and ID.',
        '/objects/:type': 'Lists all objects of a certain type.',
        '/objects': 'Shows all available objects.',
        '/info': 'Describes all API endpoints.'
    };

    res.json(apiInfo);
};

module.exports = infoHandler;
