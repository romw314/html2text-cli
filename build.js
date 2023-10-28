const fs = require('fs');
const { minify } = require('terser');

(async () => {
	const { code } = await minify(fs.readFileSync(process.argv[3], 'utf8'), { mangle: { toplevel: true } });
	fs.writeFileSync(process.argv[2], `#!/usr/bin/env node\n${code}`);
	console.log('Build successful');
})();
