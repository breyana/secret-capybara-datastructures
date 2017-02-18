import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

describe.only('Linked List', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('first')
    myLinkedList.insert('second')
    myLinkedList.insert('third')

    it('Returns an object', () => {
      expect(myLinkedList.getHeadNode())
        .to.be.a.object
    })
    it('Returns the first node in the list', () => {
      expect(myLinkedList.getHeadNode().data)
      .to.eql('first')
    })
  })
  context('getTailNode()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('first')
    myLinkedList.insert('second')
    myLinkedList.insert('third')

    it('Returns an object', () => {
      expect(myLinkedList.getTailNode())
        .to.be.a.object
    })
    it('Returns the first node in the list', () => {
      expect(myLinkedList.getTailNode().data)
      .to.eql('third')
    })
  })
  context('contains()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('first')
    myLinkedList.insert('second')

    it('returns true the set contains the element', () => {
      expect(myLinkedList.contains('first'))
      .to.be.true
    })
    it('returns true if the element is last in the set', () => {
      expect(myLinkedList.contains('second'))
      .to.be.true
    })
    it('returns false if the set does not contain the element', () => {
      expect(myLinkedList.contains('third'))
      .to.be.false
    })
  })
  context('find()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('first')
    myLinkedList.insert('second')

    it('Returns the first node containing the provided data', () => {
      expect(myLinkedList.find('second').data)
      .to.eql('second')
    })
    it('Returns -1 if provided data is not found', () => {
      expect(myLinkedList.find('third'))
      .to.eql(-1)
    })
  })

  context('insert()', () => {
    it('Inserts a node (with data provided) to the tail', () => {
      const myLinkedList = new LinkedList()

      expect(() => myLinkedList.insert('foo'))
        .to.alter(() => myLinkedList._size(), { from: 0, to: 1 })
    })
  })

  context('insertFirst()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('second')

    it('Inserts a node to the head of the list', () => {
      expect(() => myLinkedList.insertFirst('first'))
        .to.alter(() => myLinkedList._size(), { from: 1, to: 2 })
      expect(myLinkedList.list.data)
        .to.eql('first')
    })
  })

  context('insertBefore()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('second')

    it('Inserts a node with value \'first\' before the first node containing ' +
      '\'second\'', () => {
      expect(() => myLinkedList.insertBefore('second', 'first'))
        .to.alter(() => myLinkedList._size(), {from: 1, to: 2})
      expect(myLinkedList.list.data)
        .to.eql('first')
    })
  })

  context('insertAfter()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('first')

    it('Inserts a node with value \'third\' after the first node containing ' +
      '\'first\'', () => {
      expect(() => myLinkedList.insertAfter('first', 'third'))
        .to.alter(() => myLinkedList._size(), {from: 1, to: 2})
      expect(myLinkedList.list.data)
        .to.eql('first')
      expect(myLinkedList.list.next.data)
        .to.eql('third')
    })
    it('Inserts a node with value \'second\' after the first node containing ' +
      '\'first\'', () => {
      expect(() => myLinkedList.insertAfter('first', 'second'))
        .to.alter(() => myLinkedList._size(), {from: 2, to: 3})
      expect(myLinkedList.list.data)
        .to.eql('first')
      expect(myLinkedList.list.next.data)
        .to.eql('second')
      console.log('Final list: ', LinkedList)
    })
  })

  context('remove()', () => {
    const myLinkedList = new LinkedList()

    it('', () => {
    })
  })

  context('removeFirst()', () => {
    const myLinkedList = new LinkedList()

    it('', () => {
    })
  })

  context('isEmpty()', () => {
    const myLinkedList = new LinkedList()

    it('', () => {
    })
  })

  context('size()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('foo')
    myLinkedList.insert('bar')

    it('Returns the size of the list (number of nodes)', () => {
      expect(myLinkedList._size())
      .to.eql(2)
    })
  })

  context('clear()', () => {
    const myLinkedList = new LinkedList()
    myLinkedList.insert('first')
    myLinkedList.insert('second')

    it('Clears the list of all nodes/data', () => {
      expect(() => myLinkedList._clear())
        .to.alter(() => myLinkedList._size(), {from: 2, to: 0})
      expect(myLinkedList.list)
        .to.be.null
    })
  })

})
