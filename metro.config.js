/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  const myCustomExtensions = [...sourceExts, 'svg', 'tsx', 'ts'];
  // process.env.RN_SRC_EXT comes from Detox Mocking Guide
  const sourceExtensions = process.env.RN_SRC_EXT
    ? [...process.env.RN_SRC_EXT.split(','), ...myCustomExtensions]
    : myCustomExtensions;

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: sourceExtensions,
    },
  };
})();
