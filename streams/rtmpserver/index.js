//copiamos https://github.com/illuspas/Node-Media-Server#npm-version-recommended en package.json //eliminamos la prueba y añadimos el script para que se ejecute el start cada vez q se ejecuta este script


const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
