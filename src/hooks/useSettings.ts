import useAppSelector from './useAppSelector'

const useSettings = () => {
    const { settings } = useAppSelector((state) => state.settings)

    return settings
}

export default useSettings
