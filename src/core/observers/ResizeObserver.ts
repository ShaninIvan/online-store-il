import { throttle } from 'core/utils/throttle'

type Listener = (width: number) => any

export class ResizeObserver {
    private constructor() {
        window.addEventListener(
            'resize',
            throttle(this.handleResize.bind(this), 500)
        )
    }

    public static getObserver() {
        if (!ResizeObserver.observer) {
            ResizeObserver.observer = new ResizeObserver()
        }

        return ResizeObserver.observer
    }

    public setListener(listener: Listener) {
        this.listener = listener
    }

    private static observer: ResizeObserver
    private listener: Listener | null = null

    private handleResize() {
        this.listener && this.listener(window.innerWidth)
    }
}
