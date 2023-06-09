module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.webp$/,
        use: 'file-loader',
      },
      // ...
    ],
  },
  // ...
};
