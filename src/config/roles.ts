import { useNavigate } from 'react-router-dom'

type RoleType = {
    [key: string]: {
        validation: (() => boolean) | null
        onFalse?: () => any
    }
}

const navigate = useNavigate()

export const RolesConfig: RoleType = {
    Guest: {
        validation: null,
    },
    // TODO: добавить валидацию для User
    User: {
        validation: () => true,
        onFalse: () => navigate('/login'),
    },
}
