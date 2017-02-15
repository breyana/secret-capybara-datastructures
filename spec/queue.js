import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('increases the queue size', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('thing')

      expect(() => myQueue.enqueue('bar'))
        .to.alter(() => myQueue.length(), { from: 2, to: 3 })
      expect(myQueue.thequeue.data)
        .to.eql('foo')
      expect(myQueue.thequeue.next.data)
        .to.eql('thing')
    })
  })

  context('dequeue()', () => {
    const myQueue = new Queue()
    myQueue.enqueue('foo')
    myQueue.enqueue('bar')

    it('removes the front element in the queue', () => {
      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.length(), { from: 2, to: 1 })
    })
    it('returns the front element in the queue', () => {
      expect(myQueue.dequeue())
        .to.equal('bar')
    })
    it('returns null if the queue is empty', () => {
      expect(myQueue.dequeue())
        .to.be.null
    })
  })
  context('front()', () => {
    const myQueue = new Queue()
    myQueue.enqueue('foo')
    myQueue.enqueue('bar')

    const emptyQueue = new Queue()

    it('returns the top element in the queue', () => {
      expect(myQueue.front())
        .to.equal('foo')
    })
    it('returns null if empty', () => {
      expect(emptyQueue.front())
        .to.be.null
    })
  })
  context('back()', () => {
    const myQueue = new Queue()
    myQueue.enqueue('foo')
    myQueue.enqueue('bar')

    const emptyQueue = new Queue()

    it('returns the back element in the queue', () => {
      expect(myQueue.back())
        .to.equal('bar')
    })
    it('returns null if empty', () => {
      expect(emptyQueue.back())
        .to.be.null
    })
  })
  context('isEmpty()', () => {
    const myQueue = new Queue()
    myQueue.enqueue('foo')
    myQueue.enqueue('bar')

    const emptyQueue = new Queue()

    it('returns true if the queue is empty', () => {
      expect(emptyQueue.isEmpty())
        .to.be.true
    })
    it('returns false if the queue has items', () => {
      expect(myQueue.isEmpty())
        .to.be.false
    })
  })
  context('length()', () => {
    const myQueue = new Queue()
    myQueue.enqueue('foo')
    myQueue.enqueue('bar')

    it('returns the number of elements in the queue', () => {
      expect(myQueue.length())
        .to.equal(2)
    })
  })

})
