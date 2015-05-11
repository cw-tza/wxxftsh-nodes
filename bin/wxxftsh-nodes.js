#!/usr/bin/env node
"use strict";

var fs = require('fs'),
  schemaFile = fs.readFileSync('../examples/simple.js', {encoding: 'utf8'}),
  ast1 = require('../src/ast/ast-1');

ast1.parse(schemaFile);
