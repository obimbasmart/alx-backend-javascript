/**
 * @name: currency name
 * @code: code number
 */
class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() { return this._name; }

  set name(value) { this._name = value; }

  get code() { return this._code; }

  set code(value) { this._code = value; }

  displayFullCurrency() { return `${this.code} (${this.name})`; }
}

export default Currency;
