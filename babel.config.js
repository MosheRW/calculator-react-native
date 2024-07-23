module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    assets: ['./assets/fonts'],
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };
  assets: ['./assets/fonts']
};
