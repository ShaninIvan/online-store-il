import { WeekDays } from 'core/utils/getWorktime'

export enum CONTACTS_DETAILS {
    Address = '1234 Street Adress City Address, 1234',
    Phones = '(00) 1234 5678',
    Email = 'shop@email.com',
    Facebook = 'https://ru-ru.facebook.com/',
    Instagram = 'https://www.instagram.com/',
}

export const CONTACTS_WORKTIME: { [key in WeekDays]?: string } = {
    Monday: '9:00 AM - 5:30 PM',
    Tuesday: '9:00 AM - 5:30 PM',
    Wednesday: '9:00 AM - 5:30 PM',
    Thursday: '9:00 AM - 5:30 PM',
    Friday: '9:00 AM - 6:00 PM',
    Saturday: '1:00 AM - 5:00 PM',
}
