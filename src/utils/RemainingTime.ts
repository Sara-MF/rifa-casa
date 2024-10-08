export function remainingTime(date: string) {

    let today: Date = new Date();
    let raffleDate: Date = new Date(date);

    let diffInSeconds = Math.floor((raffleDate.getTime() - today.getTime()) / 1000);
    let days = Math.floor(diffInSeconds / (3600 * 24));
    let hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
    let minutes = Math.floor((diffInSeconds % 3600) / 60);
    let seconds = diffInSeconds % 60;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}