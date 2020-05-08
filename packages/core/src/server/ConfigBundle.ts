export default interface ConfigBundle {

  getName();

  getSharedWebpackConfig(): {};

  getProductionWebpackConfig(): {};

  getDevelopmentWebpackConfig(): {};

  alterFinalConfig(config: {}): {};
}
