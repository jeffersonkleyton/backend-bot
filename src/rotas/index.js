module.exports = app => {
    app.get('/start', app.src.venom.iniciarVenom)
}