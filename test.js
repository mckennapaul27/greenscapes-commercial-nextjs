{
    "name": "greenscapes-commercial",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "build-css": "node-sass-chokidar / -o /",
      "watch-css": "npm run build-css && node-sass-chokidar / -o / --watch --recursive",
      "dev": "next",
      "build": "next build",
      "start": "next start"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "next": "^7.0.2",
      "react": "^16.7.0",
      "react-dom": "^16.7.0",
      "node-sass-chokidar": "^1.3.3"
    },
    "devDependencies": {
      "bulma": "^0.7.1",
      "node-sass": "^4.11.0"
    }
  }
  