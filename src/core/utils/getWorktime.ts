import { CONTACTS_WORKTIME } from 'config/contacts'

export enum WeekDays {
    Sun = 'Sunday',
    Mon = 'Monday',
    Tue = 'Tuesday',
    Wed = 'Wednesday',
    Thu = 'Thursday',
    Fri = 'Friday',
    Sat = 'Saturday',
}

type WorktimeReturnType = {
    fullNames: string
    minNames: string
    time: string
}[]

export const getWorktime = (config: { [key in WeekDays]?: string }) => {
    const days = Object.values(WeekDays)
    const currentDay = days[new Date().getDay()]
    const worktime: WorktimeReturnType = []

    while (days.length > 0) {
        const day = days[0]
        let result = ''
        let minresult = ''
        if (day in config) {
            result += day
            minresult += day.substring(0, 3)
        }
    }

    return worktime
}
