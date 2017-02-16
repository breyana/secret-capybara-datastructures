'use strict'

class Node {
  constructor(data, priority, next) {
    this.data = data
    this.priority = priority
    this.next = next
  }
}

export default class Queue {
  constructor() {
    this.thequeue = null
    this.size = 0
  }

  enqueue(input, priority) {
    if (!this.thequeue) {
      this.thequeue = new Node(input, priority, null)
      this.size++
      return
    }

    let currentNode = this.thequeue
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = new Node(input, priority, null)

    this.size++

  }

  front() {
    if (!this.thequeue) {
      return null
    }
    let evaluateHigherPriority = () => {
      if (currentNode.priority > highestPriorityNode.priority) {
        highestPriorityNode = currentNode
      }
    }
    let highestPriorityNode = this.thequeue
    let currentNode = this.thequeue
    while (currentNode.next) {
      evaluateHigherPriority()
      currentNode = currentNode.next
    }
    evaluateHigherPriority()
    return highestPriorityNode.data
  }

  back() {
    if (!this.thequeue) {
      return null
    }
    let evaluateLowerPriority = () => {
      if (currentNode.priority < lowestPriorityNode.priority) {
        lowestPriorityNode = currentNode
      }
    }
    let lowestPriorityNode = this.thequeue
    let currentNode = this.thequeue
    while (currentNode.next) {
      evaluateLowerPriority()
      currentNode = currentNode.next
    }
    evaluateLowerPriority()
    return lowestPriorityNode.data
  }

  dequeue() {
    if (!this.thequeue) {
      return null
    }

    let toDequeue = this.front()

    if (!this.thequeue.next) {
      this.thequeue = null
      return toDequeue
    }

    let currentNode = this.thequeue
    while (currentNode.next) {
      if (toDequeue === currentNode.next.data) {
        if (currentNode.next.next) {
          currentNode.next = currentNode.next.next
        } else {
          currentNode.next = null
          break
        }
      }

      currentNode = currentNode.next
    }
    this.size--
    return toDequeue
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }
}
