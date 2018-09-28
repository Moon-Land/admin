const randomPick = (arr = []) => {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return arr;
    }
    const len = arr.length;
    const randomIdx = Math.floor(Math.random() * len);
    return arr[randomIdx];
  } else {
    return arr;
  }
};

module.exports.randomPick = randomPick;
