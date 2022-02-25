import { getWorktime, WeekDays } from 'core/utils/getWorktime'

const config: { [key in WeekDays]?: string } = {
    Monday: '9:00 AM - 5:30 PM',
    Tuesday: '9:00 AM - 5:30 PM',
    Wednesday: '9:00 AM - 5:30 PM',
    Thursday: '9:00 AM - 5:30 PM',
    Friday: '9:00 AM - 6:00 PM',
    Saturday: '1:00 AM - 5:00 PM',
}

const expectResult = [
    {
        fullNames: 'Monday-Thursday',
        minNames: 'Mon-Thu',
        time: '9:00 AM - 5:30 PM',
    },
    {
        fullNames: 'Friday',
        minNames: 'Fri',
        time: '9:00 AM - 6:00 PM',
    },
    {
        fullNames: 'Saturday',
        minNames: 'Sat',
        time: '11:00 AM - 5:00 PM',
    },
]

test('Equal worktime result', () => {
    expect(getWorktime(config)).toEqual(expectResult)
})
