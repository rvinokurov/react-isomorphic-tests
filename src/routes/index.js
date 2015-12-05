var express = require('express');
var router = express.Router();
var ReactDOMServer = require('react-dom/server');
var React = require('react');
import {MyComponent} from '../components/main'

router.get('/', function(req, res, next) {
  res.render('layout', {
       title: 'Express',
       html: ReactDOMServer.renderToString(<MyComponent />)
   });
});

module.exports = router;
