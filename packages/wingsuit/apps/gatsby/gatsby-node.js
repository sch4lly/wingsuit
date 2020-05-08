exports.onCreateWebpackConfig = ({
                                   stage,
                                   rules,
                                   loaders,
                                   plugins,
                                   actions,
                                 }) => {
  const wingsuit = require('@wingsuit-designsystem/core');
  const pack = wingsuit.getAppPack('production', module);
  actions.setWebpackConfig(pack)
}
