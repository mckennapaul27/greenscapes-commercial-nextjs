const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();

    server.get('/services/:id', (req, res) => {
      const actualPage = '/service';
      const queryParams = {title: req.params.id}
      console.log('1',actualPage)
      console.log('2',queryParams)

      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res);
    })

    const port = 3000;

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log(`Listening on port ${port}...`)
    })  
})
.catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
})