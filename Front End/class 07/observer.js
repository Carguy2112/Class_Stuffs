class EventObserver {
  constructor() {
    this._observers = [];
  }

  subscribe(fn) {
    this._observers.push(fn);
  }

  broadcast(data) {
    this._observers.forEach((subscription) => {
      subscription(data);
    });
  }
}
