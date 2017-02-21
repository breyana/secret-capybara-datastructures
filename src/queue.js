'use strict'

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

export default class Queue {
  constructor() {
    this.thequeue = null
    this.size = 0
  }

  enqueue(input) {
    if (!this.thequeue) {
      this.thequeue = new Node(input, null)
      this.size++
      return
    }

    let temp = this.thequeue
    while (temp.next) {
      temp = temp.next
    }

    temp.next = new Node(input, null)

    this.size++
  }

  dequeue() {
    if (!this.thequeue) {
      return null
    }
    let temp = this.thequeue.data
    this.thequeue = this.thequeue.next
    this.size--
    return temp
  }

  front() {
    if (this.size === 0) {
      return null
    }
    return this.thequeue.data
  }

  back() {
    if (!this.thequeue) {
      return null
    }
    let temp = this.thequeue
    while (temp.next) {
      temp = temp.next
    }
    return temp.data
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }

}
