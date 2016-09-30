const events = {
  events: {},
  subscribe(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  unsubscribe(eventName, fn) {
    if (!this.events[eventName]) {
      return;
    }

    for (let i = 0; i < this.events[eventName].length; i += 1) {
      if (this.events[eventName][i] === fn) {
        this.events[eventName].splice(i, 1);
        break;
      }
    }
  },
  publish(eventName, data) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach((fn) => {
      fn(data);
    });
  },
};

module.exports = events;
