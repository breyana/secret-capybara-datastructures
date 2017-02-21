'use strict'

export default class Set {
  constructor(values) {
    this.array = values
  }

  add(value) {
    if (this.array.indexOf(value) === -1) {
      this.array[this.array.length] = value
      return this.array
    } else {
      return "This value already exists"
    }
  }

  isEmpty() {
    return this.array.length === 0
  }

  contains(value) {
    return this.array.indexOf(value) !== -1
  }

  remove(value) {
    let arr = this.array
    if (this.array.indexOf(value) !== -1) {
      this.array.splice(this.array.indexOf(value), 1)
    } else {
      return "Cannot remove value; value does not exist"
    }
  }

  forEach(func) {
    return this.array.map(func)
  }

  size() {
    return this.array.length
  }

  union(newset) {
    newset.array.forEach(value => {
      if (this.array.indexOf(value) === -1) {
        this.array[this.array.length] = value
      }
    })

    return this.array
  }

  intersect(newset) {
    let intersects = []

    this.array.forEach(value => {
      if (newset.array.indexOf(value) !== -1) {
        if (intersects.indexOf(value) === -1) {
          intersects[intersects.length] = value
        }
      }
    })

    newset.array.forEach(value => {
      if (this.array.indexOf(value) !== -1) {
        if (intersects.indexOf(value) === -1) {
          intersects[intersects.length] = value
        }
      }
    })

    return intersects
  }

  difference(newset) {
    let differences = []

    this.array.forEach(value => {
      if (newset.array.indexOf(value) === -1) {
        if (differences.indexOf(value) === -1) {
          differences[differences.length] = value
        }
      }
    })

    return differences
  }

  isSubset(newset) {
    return this.array.every(values => {
      return newset.array.indexOf(values) !== -1
    })
  }

  clone(newset) {
    return new Set(this.array)
  }

}
