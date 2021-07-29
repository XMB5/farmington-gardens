const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../docs');

const files = sh.ls(`${destPath}`)
sh.set('-f');  // prevent globbing accidents, see https://github.com/shelljs/shelljs/wiki/Security-guidelines
for (let file of files) {
    if (file !== 'CNAME') {
        sh.rm('-rf', '--', upath.join(destPath, file));
    }
}
