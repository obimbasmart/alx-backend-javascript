class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() { return this._length; }

  set length(value) {
    if (typeof (value) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() { return this._students; }

  set students(value) {
    if (typeof (value) !== 'object') {
      throw TypeError('Students must be an iterable');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
