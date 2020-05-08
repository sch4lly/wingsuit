/**
 * Wingsuit Design System.
 */
import ConfigBundle from "./ConfigBundle";

// Library Imports
const merge = require('webpack-merge');
const {ProgressPlugin, ProvidePlugin} = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');


merge.multiple();

interface BundleItems {
  [key: string]: ConfigBundle;
}

export default class Server {


  private environment = 'production';

  private bundles: {} = {};

  public addConfigBundle(bundle: ConfigBundle) {
    this.bundles[bundle.getName()] = bundle;
  }

  public getBundles(): BundleItems {
    return this.bundles;
  }

  /**
   * Every app using Wingsuit must run its config through this "wingsuit"
   * function to ensure it adheres to Wingsuit standards of dev/prod config.
   *
   * @param {Object} appWebpack - The collection of shared, dev, prod webpack config
   * @param {Object} appWebpack.shared - Shared webpack config common to dev and prod
   * @param {Object} appWebpack.dev - Webpack config unique to dev
   * @param {Object} appWebpack.prod - Webpack config unique to prod
   * @param {Object} appConfig - Full app config
   * @param {Object} options - Compile options
   * @param {('hot'|'extract')} options.cssMode - The method of handling CSS output
   * @returns {*} - Fully merged and customized webpack config
   */
  public generateWebpack(environment: string, module: NodeModule, webpackConfigs: [] = []) {
    this.environment = environment;
    const bundles = this.getBundles();
    const shared: any = [];
    const environmentSpe: any = [];
    Object.keys(bundles).forEach((key) => {
      shared.push(bundles[key].getSharedWebpackConfig());
    });
    Object.keys(bundles).forEach((key) => {
      environmentSpe.push(environment === 'production' ? bundles[key].getProductionWebpackConfig() : bundles[key].getDevelopmentWebpackConfig());
    });

    let config =  merge.smartStrategy({
      // Prepend the css style-loader vs MiniExtractTextPlugin
      entry: 'append',
      'module.rules.use': 'replace',
    })(
      ...environmentSpe,
      ...shared,
      ...webpackConfigs,
      ...[
        {
          mode: this.environment,
          output: {
            filename: '[name].js',
          },
          node: {},
          devtool: this.environment === 'development' ? 'eval' : 'source-map',
          optimization: {
            minimizer: [
              new TerserPlugin({
                sourceMap: this.environment === 'production',
              }),
            ],
          },
          plugins: [
            new ProgressPlugin({profile: false}),
            new ProvidePlugin({}),
          ],
        }
      ]
    );

    Object.keys(bundles).forEach((key) => {
      config = bundles[key].alterFinalConfig(config);
    });
    return config;
  }

}
