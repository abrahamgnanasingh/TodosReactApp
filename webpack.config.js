function buildConfig(env) {
    // console.log(env);
    if (!env) env = 'dev';
    return require('./webpack.config.' + env + '.js')({ env: env });
}

module.exports = buildConfig;