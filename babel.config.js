const presets = [
  ['@babel/preset-env', {
    debug: true,
    useBuiltIns: 'usage',
    corejs: 3,
  }],
  '@babel/preset-react',
];
const plugins = [['@babel/plugin-proposal-class-properties', { loose: true }]];

module.exports = { presets, plugins };
