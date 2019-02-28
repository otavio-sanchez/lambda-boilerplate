'use strict';

const _awsServerlessExpress = require('aws-serverless-express');

const _interopRequireDefault = (obj) => { return obj && obj.__esModule ? obj : { default: obj }; }

const _awsServerlessExpress2 = _interopRequireDefault(_awsServerlessExpress);

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

const app = (0, _express2.default)();

const server = _awsServerlessExpress2.default.createServer(app);

app.use(_express.json()) 

app.get('/articles', (req, res) => {
    
   const articles = {
       "articles": [
           {
               'title' : 'Article 1',
               'text:' : 'Text Article'
           }
       ]
   }

   res.send(articles)
});

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});

exports.handler =  (event, context) => {
    return _awsServerlessExpress2.default.proxy(server, event, context);
};