/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();

    var firstSurface = new Surface({
        content: '<H1>Niraj Shrestha<H1>',
        size: [300, undefined],
        properties: {
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            color: 'white',
            fontSize: '24px',
            border: '15px'
        }
    });

    mainContext.add(firstSurface);

});
