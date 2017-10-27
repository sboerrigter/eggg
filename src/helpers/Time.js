export default {
  format(time) {
    return this.minutes(time) + ':' + this.seconds(time);
  },

  minutes(time) {
    return this.leadingZero(Math.floor(time / 60));
  },

  seconds(time) {
    return this.leadingZero(time % 60);
  },

  leadingZero(number) {
    if (number < 10) {
      number = '0' + number;
    }

    return number;
  }
}
