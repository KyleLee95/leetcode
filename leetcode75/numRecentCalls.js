var RecentCounter = function () {
  this.calls = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.calls.push(t);
  range_start = t - 3000;
  range_end = t;
  for (let i = 0; i < this.calls.length; i++) {
    //optimization is to remove unneeded elements as they fall out of range.
    //because the smallest we'll ever want to keep is t - 3000
    //and we're guaranteed the fact that t is always increasing

    //we could also maybe potentially create some kind of cache/map to make lookup O(1)
    const currEl = this.calls[i];
    if (currEl < range_start) {
      this.calls.shift();
    }
    return this.calls.length - i;
  }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
