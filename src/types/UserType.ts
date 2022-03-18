import IAPIState from './IAPIState'

export interface UserStateType extends IAPIState {
    jwt: string | null
    user: {
        username: string
        email: string
    }
}
