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

export type SettingsResponseType = {
    data: {
        id: 1
        attributes: SettingsType
    }
    meta: {}
}

export type SettingsStateType = {
    settings: SettingsType
    isLoading: boolean
    error: string | null
}
