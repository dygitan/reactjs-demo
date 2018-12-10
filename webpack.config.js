const path = require('path');

module.exports = env => {
    const { NODE_ENV: mode } = env ? env : { NODE_ENV: 'development' };
    const config = {
        entry: `${path.resolve(__dirname, 'src')}/app/index.js`,
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
        }
    };

    return config;
};
