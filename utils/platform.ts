import platformsColors from "../platforms.json"

const currentPlatform = process.env.PLATFORM ? (platformsColors.find(platform => platform.name === process.env.PLATFORM) ?? throwError('The PLATFORM .env variable is not correct'))  : throwError('The PLATFORM .env variable is not set')

const getPlatformConfig = (config: String) => {
    return currentPlatform[config] ? currentPlatform[config] : throwError('The specified configuration wasn\'t found')
}

export default {
    currentPlatformColors: getPlatformConfig('colors'),
    getPlatformConfig,
}