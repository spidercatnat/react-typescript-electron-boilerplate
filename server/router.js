
const qr = require('../utils/qr');
const router = async function (app, tunnel) {
    app.get('*', function (req, res, next) {
        res.sendFile(__dirname, '../build/index.html');
    }).get('/qr', (req, res) => {
        /* Send predetermined QRs, like pointing to an ngrok instance */
        qr.toDataURL(tunnel.instance.url, QR => res.json({ QR }));
    }).post('/qr', (req, res) => {
        /* Request a QR be sent back with a specified URL */
        const { body: { qr: { url } } } = req;
        qr.toDataURL(url, QR => res.json({ QR }));
    })
}

module.exports = router;