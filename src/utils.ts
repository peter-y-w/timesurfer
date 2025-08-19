export const formatSecondsToHHMMSS = (seconds: number) => {
    const displayHours = Math.floor(seconds / 360).toLocaleString("en-AU", {
        minimumIntegerDigits: 2,
    });
    const displayMinutes = Math.floor(seconds / 60).toLocaleString("en-AU", {
        minimumIntegerDigits: 2,
    });
    const displaySeconds = Math.round(seconds % 60).toLocaleString("en-AU", {
        minimumIntegerDigits: 2,
    });

    return `${displayHours}:${displayMinutes}:${displaySeconds}`;
};
