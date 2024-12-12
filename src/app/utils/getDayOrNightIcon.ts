/** @format */

export function getDayOrNightIcon(
    iconName: string,
    dateTimeString: string
): string {
    const hours = new Date(dateTimeString).getHours(); // Get hours from the given date and time string

    const isDayTime = hours >= 7 && hours < 17; // Consider daytime from 7 AM to 5 PM sice its winter 

    return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}