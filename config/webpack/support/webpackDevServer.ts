import {BuildOptions} from "../types/webpackConfigTypes";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function webpackDevServer (options: BuildOptions): DevServerConfiguration{
    const {port} = options
    return {
        port,
        open: true,
        historyApiFallback: true
    }
}
