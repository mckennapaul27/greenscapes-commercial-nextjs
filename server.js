const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
.then(() => {
    const server = express();

    server.get('/services/:id', (req, res) => {
      const actualPage = '/service';
      const queryParams = {id: req.params.id}

      app.render(req, res, actualPage, queryParams)
    })   

    server.get('*', (req, res) => {
      return handle(req, res);
    })

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Listening on port ${port}...`);
    });
})
.catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
})