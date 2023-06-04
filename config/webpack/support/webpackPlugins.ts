import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "../types/webpackConfigTypes";


export function webpackPlugins(options: BuildOptions): Array<webpack.WebpackPluginInstance>{
    const {paths} = options

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}
