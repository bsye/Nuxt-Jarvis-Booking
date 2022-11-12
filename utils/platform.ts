import platformsColors from "../platforms.json"

const currentPlatform = process.env.PLATFORM ? (platformsColors.find(platform => platform.name === process.env.PLATFORM) ?? throwError('The PLATFORM .env variable is not correct'))  : throwError('The PLATFORM .env variable is not set')
const currentPlatformColors = currentPlatform?.colors

export default {
    currentPlatformColors,
}