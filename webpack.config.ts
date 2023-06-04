import path from 'path'
import {BuildPaths, WebpackEvn} from "./config/webpack/types/webpackConfigTypes";
import {webpackConfig} from "./config/webpack/webpackConfig";

export default (env: WebpackEvn) => {
    /**
     * @description Object containing paths to various build-related files and folders.
     * @typedef {Object} BuildPaths
     * @property {String} entry - Path to the entry point of the application.
     * @property {String} build - Path where the build will output when completed.
     * @property {String} html - Path to the HTML page that is used to display the application.
     */
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const PORT = env.port || 3000
    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    return webpackConfig({
        mode,
        port: PORT,
        paths,
        isDev
    })
}
