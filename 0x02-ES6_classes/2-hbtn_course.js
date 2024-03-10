class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  set name(value) { this._name = value; }

  get length() { return this._length; }

  set students(value) { this._name = value; }
}

export default HolbertonCourse;
