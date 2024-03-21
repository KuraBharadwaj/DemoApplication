const express = require('express');
const cds = require('@sap/cds');

cds.on('bootstrap',(app)=>{
    app.use(express.static('../app/app-ui'));
});

module.exports = cds.server; 