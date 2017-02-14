'use strict'

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

export default class Stack {
  constructor() {
    this.top = 0
    this.size = 0
  }

  push(input) {
    this.size++
    this.top = new Node(input, this.top)
  }

  pop() {
    if(this.size === 0) {
      return null
    }
    this.size--
    let poppedItem = this.top.data
    this.top = this.top.next
    return poppedItem
  }

  peek() {
    if (this.size === 0) {
      return null
    }
    return this.top.data
  }

  isEmpty() {
    if (this.size === 0) {
      return true
    }
    return false
  }

  length() {
    return this.size
  }

}
