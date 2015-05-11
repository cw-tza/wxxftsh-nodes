"use strict";

var jsp = require("uglify-js"),
  log = require('bunyan').createLogger({
    name: 'ast-1', streams: [
      {level: 'debug', stream: process.stdout},
      {level: 'warn', path: 'ast-1.log'}
    ]
  });

function parse(code) {
  try {
    var ast = jsp.parse(code);
    log.info("%s", JSON.stringify(ast));

  } catch (e) {
    log.info("error: %s", e);
  }
}

module.exports.parse = parse;