export function startCountdown(remainingTime: number) {
  const countdown = setInterval(() => {
    remainingTime -= 1000;
    if (remainingTime > 0) {
      const hours = Math.floor(remainingTime / (60 * 60 * 1000));
      const minutes = Math.floor(
        (remainingTime % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(
        `Time until next tweet: ${hours}h ${minutes}m ${seconds}s`
      );
    } else {
      clearInterval(countdown);
    }
  }, 1000);
}

export function getEnvVariables(): Record<string, string | undefined> {
  return { ...process.env };
}
