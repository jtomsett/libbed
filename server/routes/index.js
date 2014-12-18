/**
 * Created by James on 12/17/2014.
 */
(function(){
    'use strict';
    var express = require('express');
    var router = express.Router();
    var mongojs = require('mongojs');
    var db = mongojs('meanTodo', ['todos']);

    /* GET home page */
    router.get('/', function(req,res){
        res.render(index);
    });

}());