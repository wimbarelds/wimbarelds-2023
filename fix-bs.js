import {execSync} from 'child_process';
import replaceInFiles from 'replace-in-files';

console.log(
execSync('rm -rf node_modules/from2/node_modules/readable-stream').toString('utf-8'),
execSync('rm -rf node_modules/through2/node_modules/readable-stream').toString('utf-8'),
execSync('cp -rvf node_modules/readable-stream/. node_modules/from2/node_modules/readable-stream').toString('utf-8'),
execSync('cp -rvf node_modules/readable-stream/. node_modules/through2/node_modules/readable-stream').toString('utf-8'),
);

(async () => {
  await replaceInFiles({
    files: 'node_modules/**/_stream_readable.js',
    from: /'string_decoder\/'/g,
    to: "'string_decoder'",
    optionsForFiles: {
      "ignore": [],
    }
  })
})();
