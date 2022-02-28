import { MouseObserver } from 'core/observers/MouseObserver'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Popup.module.less'

type PropsType = {
    toggle: React.ReactNode
    children: React.ReactNode
}

export const Popup: React.FC<PropsType> = ({ toggle, children }) => {
    const [open, setOpen] = useState<boolean>(false)

    const posState = {
        pos: {
            top: '',
            left: '',
        },
        arrowPos: {},
    }

    const [position, setPosition] = useState<typeof posState>(posState)

    const popupRef: React.LegacyRef<HTMLDivElement> = useRef(null)
    const contentRef: React.LegacyRef<HTMLDivElement> = useRef(null)

    const mouse = MouseObserver.getObserver()

    useEffect(() => {
        if (open) {
            const cursorPos = mouse.getCursorPositon()
            const contentWidth = contentRef.current?.clientWidth ?? 0
            const popupPos = {
                pos: {
                    top: `${cursorPos.clientY + 40}px`,
                    left:
                        cursorPos.screenHalf === 'left'
                            ? `${cursorPos.clientX - 34}px`
                            : `${cursorPos.clientX - contentWidth + 34}px`,
                },
                arrowPos:
                    cursorPos.screenHalf === 'left'
                        ? { left: `20px` }
                        : { right: `20px` },
            }

            setPosition(popupPos)
        }
    }, [open, mouse])

    useEffect(() => {
        const clickListener = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        mouse.addListener(clickListener)

        return () => {
            mouse.removeListener(clickListener)
        }
    }, [mouse])

    return (
        <div ref={popupRef} className={styles.popup}>
            <div
                className={`${styles.toggle} ${open ? 'opened' : ''}`}
                onClick={() => setOpen(!open)}
            >
                {toggle}
            </div>
            <div
                ref={contentRef}
                className={`${styles.window} ${open ? styles.opened : ''}`}
                style={position.pos}
            >
                <div className={styles.arrow} style={position.arrowPos}>
                    <svg width='28' height='18'>
                        <polyline
                            points='0,18 14,0 28,18'
                            fill='#FFFFFF'
                            stroke='#CCCCCC'
                        />
                        <line x1={0} y1={18} x2={28} y2={18} stroke='#FFFFFF' />
                    </svg>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    )
}
