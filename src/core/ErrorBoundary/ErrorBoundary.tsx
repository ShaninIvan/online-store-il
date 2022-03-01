import React, { ErrorInfo, ReactNode } from 'react'

type PropsType = {
    children: ReactNode
    onError: ReactNode
}
type StateType = {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): StateType {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render(): React.ReactNode {
        if (this.state.hasError) {
            return this.props.onError
        }

        return this.props.children
    }
}
