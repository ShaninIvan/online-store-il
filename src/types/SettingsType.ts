import IAPIState from './IAPIState'

export type SettingsType = {
    discount: number
    contacts: {
        address: string
        email: string
        facebook: string
        instagram: string
        phone: string
    }
}

export interface SettingsStateType extends IAPIState {
    settings: SettingsType
}
