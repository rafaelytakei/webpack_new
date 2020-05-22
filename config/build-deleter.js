/* Delete the dist folder recursively */

const fs = require('fs');
const paths = require('./paths');

fs.rmdirSync(paths.build, {recursive: true});