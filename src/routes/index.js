var express = require('express');
var router = express.Router();
var ReactDOMServer = require('react-dom/server');
var React = require('react');
import Main from '../components/main'


router.get('/', function(req, res, next) {
    var data = [
        {
            id: 1,
            author: "Pete Hunt",
            text: "This is one comment"
        }, {
            id: 2,
            author: "Jordan Walke",
            text: "This is *another* comment"
        }
    ];


  res.render('layout', {
       title: 'Express',
       html: ReactDOMServer.renderToString(<Main data={data}/>)
   });
});

module.exports = router;
