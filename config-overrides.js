// import addLessLoader for style overrides
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css', // change to true for style overrides
    }),
    // Uncomment to override default styles
    // addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: { '@primary-color': '#1DA57A' },
    // }),
);