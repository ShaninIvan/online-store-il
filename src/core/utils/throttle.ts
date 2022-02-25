export function throttle(func: Function, ms: number) {
    let isThrottled: boolean = false
    let savedArgs: any
    let savedThis: any

    function wrapper(this: any) {
        if (isThrottled) {
            savedArgs = arguments
            savedThis = this
            return
        }

        func.apply(this, arguments)
        isThrottled = true

        setTimeout(function () {
            isThrottled = false
            savedArgs && wrapper.apply(savedThis, savedArgs)
            savedThis = savedArgs = null
        }, ms)
    }

    return wrapper
}
