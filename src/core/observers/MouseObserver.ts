import React from 'react'

type CursorPos = {
    clientX: number
    clientY: number
    screenHalf: 'left' | 'right'
}

type Listener = (event: React.MouseEvent) => any

export class MouseObserver {
    private constructor() {}

    public static getObserver() {
        if (!MouseObserver.observer) {
            MouseObserver.observer = new MouseObserver()
        }

        return MouseObserver.observer
    }

    public getCursorPositon() {
        return this.cursorPos
    }

    public addListener(listener: Listener) {
        this.listeners.add(listener)
    }

    public removeListener(listener: Listener) {
        this.listeners.delete(listener)
    }

    private static observer: MouseObserver

    private cursorPos: CursorPos = {
        clientX: 0,
        clientY: 0,
        screenHalf: 'left',
    }

    private listeners = new Set<Listener>()

    private clickHandler(event: React.MouseEvent) {
        this.cursorPos.clientX = event.clientX + window.scrollX
        this.cursorPos.clientY = event.clientY + window.screenY
        this.cursorPos.screenHalf =
            event.clientX < window.innerWidth / 2 ? 'left' : 'right'

        this.listeners.forEach((listener) => {
            listener(event)
        })
    }
}
