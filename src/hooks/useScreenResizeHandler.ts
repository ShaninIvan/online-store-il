import { throttle } from 'core/utils/throttle'
import { useEffect, useState } from 'react'

function useScreenResizeHandler(this: any) {
    const [, setScreenWidth] = useState<number>(0)

    useEffect(() => {
        window.addEventListener(
            'resize',
            throttle(() => resizeHandler(), 500)
        )
    }, [])

    const resizeHandler = () => {
        setScreenWidth(window.innerWidth)
    }
}

export default useScreenResizeHandler
