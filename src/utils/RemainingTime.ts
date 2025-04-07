export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function remainingTime(date: string): Countdown {

    const today: Date = new Date();
    const raffleDate: Date = new Date(date);

    const diffInSeconds = Math.floor((raffleDate.getTime() - today.getTime()) / 1000);
    const days = Math.floor(diffInSeconds / (3600 * 24));
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}