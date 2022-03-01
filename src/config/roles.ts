type RoleType = {
    [key in ROLES]: {
        validation: (() => boolean) | null
        onFalse?: () => any
    }
}

export enum ROLES {
    Guest = 'Guest',
    User = 'User',
}

export const RolesConfig: RoleType = {
    Guest: {
        validation: null,
    },
    // TODO: добавить валидацию для User
    User: {
        validation: () => true,
    },
}
