import { MEDIA } from 'config/media'

type ScreensizeType = {
    mobile: boolean
    tablet: boolean
    desktop: boolean
}

export const useResizeObserver = (): ScreensizeType => {
    const status = {
        mobile: matchMedia(MEDIA.mobile).matches,
        tablet: matchMedia(MEDIA.tablet).matches,
        desktop: matchMedia(MEDIA.desktop).matches,
    }

    return status
}
