var typescript = require('rollup-plugin-typescript2');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/Mr-Yolo/react-d3-dom)
 * API https://github.com/Mr-Yolo/react-d3-dom/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} Mr-Yolo. All Rights Reserved
 * Licensed under MIT (https://github.com/Mr-Yolo/react-d3-dom/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.name = 'react-d3-dom';
exports.banner = banner;
exports.getCompiler = getCompiler;
