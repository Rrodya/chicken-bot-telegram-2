export function msToTime(duration: number) {
  let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  let Strhours = (hours < 10) ? "0" + hours : hours;
  let Strminutes = (minutes < 10) ? "0" + minutes : minutes;
  let Strseconds = (seconds < 10) ? "0" + seconds : seconds;

  return Strhours + ":" + Strminutes + ":" + Strseconds;
}
