const CracoLessPlugin = require('craco-less');
const packageInfo = require('./package.json')

module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          style: true
        }
      ]
    ]
  },
  devServer: {
    port: packageInfo.port
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
