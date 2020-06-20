'use strict';

module.exports = {
  output: {
    filename: 'app.js',
  },
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: 'last 2 versions',
                    },
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },
};
