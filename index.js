const express = require('express');
const consign = require('consign');
const app = express()

// iniciando venom

const port = 3000

consign()
.then('./src/venom.js')
.then('./src/config/middlewares.js')
.then('./src/rotas/index.js')
.into(app)


// iniciando express na porta setada.
app.listen(port, () => {
    console.log('servidor funcionando na porta' + port)
});
