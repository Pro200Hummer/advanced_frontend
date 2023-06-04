/**
 * Enum for build mode
 * @enum {string}
 */
export type BuildMode = 'development' | 'production'

/**
 * The BuildPaths interface contains the paths for a build,
 * including the entry, build and html paths.
 */
export interface BuildPaths {
    entry: string
    build: string
    html: string
}

/**
 * @description Interface defining the environment variables necessary to configure webpack.
 *
 * @interface WebpackEvn
 *
 * @property {number} port - The port number to be used by the server.
 * @property {BuildMode} mode - The build mode that will be used for webpack.
 */
export interface WebpackEvn {
    port: number,
    mode: BuildMode
}

/**
 * @description Defines the options used by the Build function.
 *
 * @param mode - The BuildMode to use when building.
 * @param paths - The BuildPaths to use when building.
 * @param isDev - Whether or not to build for a development environment.
 */
export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
    isDev: boolean
}
