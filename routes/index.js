'use strict';

var _main = require('../assets/components/main');

var express = require('express');
var router = express.Router();
var ReactDOMServer = require('react-dom/server');
var React = require('react');

router.get('/', function (req, res, next) {
     res.render('layout', {
          title: 'Express',
          html: ReactDOMServer.renderToString(React.createElement(_main.MyComponent, null))
     });
});

module.exports = router;