exports.onCreateWebpackConfig = ({
                                   stage,
                    getConfig,
                                   rules,
                                   loaders,
                                   plugins,
                                   actions,
                                 }) => {
  if(stage === 'develop-html'){

    const wingsuit = require('@wingsuit-designsystem/core');
    const pack = wingsuit.getAppPack('production', module, [getConfig()]);
    actions.replaceWebpackConfig(pack);
  }
}
