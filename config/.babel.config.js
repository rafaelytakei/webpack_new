module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", {
		"useBuiltIns": "usage",
		"debug": true,
		"corejs": {
			"version": 3,
			"proposals": true
		},
	}];
  const plugins = [ "@babel/plugin-proposal-class-properties" ];

  return {
    presets,
    plugins
  };
}