type RoleType = {
    [key in Roles]: {
        validation: (() => boolean) | null
        onFalse?: () => any
    }
}

export enum Roles {
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
