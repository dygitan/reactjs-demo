const glob = require('glob');
const _ = require('lodash');
const path = require('path');

const entries = Object.assign(
    _.reduce(
        glob.sync(`${path.resolve('src', 'app/**/index.js')}`),
        (obj, val) => {
            const dirs = val.split('/');
            const bundleName = dirs[dirs.length - 2];
            obj[bundleName] = val;
            return obj;
        },
        {}
    )
);

module.exports = env => {
    const { NODE_ENV: mode } = env ? env : { NODE_ENV: 'development' };
    const config = {
        entry: entries,
        mode,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: /src/
                }
            ]
        },
        output: {
            path: `${path.resolve(__dirname, 'public')}/dist`,
            filename: 'bundle-[name].min.js',
            publicPath: `/dist/`
        },
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, 'src/app')
            }
        }
    };

    return config;
};
