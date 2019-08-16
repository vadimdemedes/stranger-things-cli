#!/usr/bin/env node
'use strict';
const meow = require('meow');
const strangerThings = require('stranger-things');

const cli = meow(`
	Usage
	  $ stranger-things [options]

	Options
	  --all  Get all words instead of a random word [Default: false]

	Examples
	  $ stranger-things
	  Eleven

	  $ stranger-things --all
	  Eleven
	  Jane
	  Hopper
	  …
`);

if (cli.flags.all) {
	console.log(strangerThings.all.join('\n'));
} else {
	console.log(strangerThings.random());
}
