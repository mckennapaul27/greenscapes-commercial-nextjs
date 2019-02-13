const express = require('express');
const next = require('next');
const bodyParser = require('body-parser')
const {sendContactForm} = require('./data/mailer');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const compression = require('compression')  

app.prepare()
.then(() => {
    const server = express();
    server.use(compression()) 
    server.use(bodyParser.json());
    server.use(function(req, res, next) {
      if(req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
        const secureUrl = "https://" + req.headers['host'] + req.url; 
        res.writeHead(301, { "Location":  secureUrl });
        res.end();
      }
      next();
    });

    server.get('/sitemap.xml', (req, res) => {
      const sitemap = path.join(__dirname, 'static', 'sitemap.xml')
      app.serveStatic(req, res, sitemap)
    })

    server.get('/robots.txt', (req, res) => {
      const robots = path.join(__dirname, 'static', 'robots.txt')
      app.serveStatic(req, res, robots)
    })
    server.get('/services/:id', (req, res) => {
      const actualPage = '/service';
      const queryParams = {id: req.params.id}

      app.render(req, res, actualPage, queryParams)
    })   

    server.get('*', (req, res) => {
      return handle(req, res);
    })

    server.post('/api/contact', sendContactForm)
    

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Listening on port ${port}...`);
    });
})
.catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
})