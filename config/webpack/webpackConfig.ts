import webpack from "webpack";
import {BuildOptions} from "./types/webpackConfigTypes";
import {webpackPlugins} from "./support/webpackPlugins";
import {webpackLoaders} from "./support/webpackLoaders";
import {webpackResolvers} from "./support/webpackResolvers";
import {webpackDevServer} from "./support/webpackDevServer";

export function webpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: webpackPlugins(options),
        module: {
            rules: webpackLoaders(),
        },
        resolve: webpackResolvers(options),
        devServer: isDev ? webpackDevServer(options) : undefined
    }
}
