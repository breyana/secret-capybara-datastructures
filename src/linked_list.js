'use strict'

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

export default class LinkedList {
  constructor() {
    this.list = null
    this.size = 0
  }

  getHeadNode() {
    return this.list
  }

  getTailNode() {
    let temp = this.list
    while (temp.next) {
      temp = temp.next
    }
    return temp
  }

  contains(value) {
    let status = false
    let temp = this.list
    while (temp) {
      if (temp.data === value) {
        status = true
      }
      temp = temp.next
    }
    return status
  }

  find(value) {
    let temp = this.list
    while (temp) {
      if (temp.data === value) {
        return temp
      }
      temp = temp.next
    }
    return -1
  }

  insert(value) {
    if (!this.list) {
      this.list = new Node(value, null)
      this.size++
      return
    }

    let temp = this.list
    while (temp.next) {
      temp = temp.next
    }

    temp.next = new Node(value, null)
    this.size++
  }

  insertFirst(value) {
    this.list = new Node(value, this.list)
    this.size++
  }

  insertBefore(valueToFind, valueToPlace) {
    if (this.size === 1) {
      if(this.list.data === valueToFind) {
        this.list = new Node(valueToPlace, this.list)
        this.size++
        return
      }
    } else {
      let temp = this.list
      while(temp.next) {
        if(temp.next.data === valueToFind) {
          temp.next = new Node(valueToPlace, temp.next)
          this.size++
          return
        }
        temp = temp.next
      }
    }
    return -1
  }

  insertAfter(valueToFind, valueToPlace) {
    if (this.size === 1) {
      if(this.list.data === valueToFind) {
        this.list.next = new Node(valueToPlace, null)
        this.size++
        return
      }
    } else if (this.list.data === valueToFind) {
      let theRest = this.list.next
      this.list.next = new Node(valueToPlace, theRest)
      this.size++
    } else {
      let temp = this.list
      while(temp.next) {
        if(temp.next.data === valueToFind) {
          temp.next.next = new Node(valueToPlace, temp.next.next)
          this.size++
          return
        }
        temp = temp.next
      }
    }
    return -1
  }

  _remove() {
    /*does not work*/
    function check(obj) {
      if(obj.next) {
        console.log('object.next exists', obj)
        check(obj.next)
      } else {
        console.log('obj.next does not exist', obj);
        obj = null
      }
    }
    check(this.list)
    // if (!this.next) {
    //   this.list = null
    // } else if (this.next.next) {
    //   let temp = this.list
    //   while(temp.next.next) {
    //     temp = temp.next
    //   }
    //   temp.next = null
    // } else if (this.size === 1){
    //   this.list = null
    // }
    // console.log(this.list)
    this.size--

  }

  removeFirst() {
    /*does not work*/
    this.list = this.list.next
    this.size--
  }

  isEmpty(){
    return this.size === 0
  }

  _size() {
    return this.size
  }

  _clear() {
    this.list = null
    this.size = 0
  }

  data() {
    return this.data
  }

  next() {
    return this.next
  }
}
