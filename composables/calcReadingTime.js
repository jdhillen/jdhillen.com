const calcReadingTime = (text) => {
  const wpm = 250;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
};

export default calcReadingTime;
