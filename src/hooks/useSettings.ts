import { useAppSelector } from './useAppSelector'

export const useSettings = () => {
    const { settings } = useAppSelector((state) => state.settings)

    return settings
}
