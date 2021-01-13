const venom = require('venom-bot')
module.exports = app => {
   
    const iniciarVenom = async (req, res) => {
        venom.create(
            'sessionName',
            async (base64Qr, asciiQR, attempts, urlCode) => {

                var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                    response = {};

                if (matches.length !== 3) {
                    return new Error('Invalid input string');
                }
                response.type = matches[1];
                response.data = new Buffer.from(matches[2], 'base64');

                var imageBuffer = response;
                require('fs').writeFileSync(
                    'out.png',
                    imageBuffer['data'],
                    'binary',
                    function (err) {
                        if (err != null) {
                            console.log(err);
                        }
                    }
                );
            },
            undefined,
            { logQR: false }
        )
            .then((client) => {
                start(client);
            })
            .catch((erro) => {
                console.log(erro);
            })
    }

    async function exportarQr(qrCode, path) {

    }

    function start(client) {
        client.onMessage((message) => {
            client.sendText(message.from, 'Olá');

        });
    }

    return { iniciarVenom }
}
