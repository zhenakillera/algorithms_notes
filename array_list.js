class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const response = this.data[this.length--];
    delete this.data[this.length--];
    this.length--;
    return response
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    this._collapseTo(index);

    _collapseTo = (index) => {
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }

      delete this.data[this.length - 1];
      this.length--;
    }
  }

}


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr