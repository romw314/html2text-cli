console.log(require('html-to-text').convert(require('node:fs').readFileSync(process.argv[2], 'utf8')));
