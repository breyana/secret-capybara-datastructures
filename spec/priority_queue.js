import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PQueue from '../src/priority_queue'

chai.use(chaiChange)

describe.only('Priority Queue', () => {
  'use strict'

  it('exists', () => {
    expect(PQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority to the back of the queue.', () => {
      const myPQueue = new PQueue()

      expect(() => myPQueue.enqueue('foo', 100))
        .to.alter(() => myPQueue.length(), { from: 0, to: 1 })
      expect(myPQueue.thequeue.data)
        .to.eql('foo')
      expect(myPQueue.thequeue.priority)
        .to.eql(100)
    })
  })

  context('front()', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue('foo', 200)
    myPQueue.enqueue('bar', 100)
    myPQueue.enqueue('stuff', 300)

    const emptyPQueue = new PQueue

    it('returns the highest priority in the queue', () => {
      expect(myPQueue.front())
        .to.eql('stuff')
    })
    it('returns null if the queue is empty', () => {
      expect(emptyPQueue.front())
        .to.be.null
    })
  })
  context('back()', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue('foo', 200)
    myPQueue.enqueue('bar', 100)
    myPQueue.enqueue('stuff', 300)

    const emptyPQueue = new PQueue

    it('returns the lowest priority in the queue', () => {
      expect(myPQueue.back())
        .to.eql('bar')
    })
    it('returns null if the queue is empty', () => {
      expect(emptyPQueue.back())
        .to.be.null
    })
  })
  context('dequeue()', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue('foo', 200)
    myPQueue.enqueue('bar', 400)
    myPQueue.enqueue('stuff', 300)

    it('removes the highest priority', () => {
      expect(() => myPQueue.dequeue())
        .to.alter(() => myPQueue.length(), { from: 3, to: 2 })
    })
    it('returns the highest priority if highest is last', () => {
      expect(myPQueue.front())
        .to.eql('stuff')
      expect(myPQueue.dequeue())
        .to.eql('stuff')

    })
    it('returns the only one in queue', () => {
      expect(myPQueue.front())
        .to.eql('foo')
      expect(myPQueue.dequeue())
        .to.eql('foo')
    })
    it('returns null if there are none in the queue', () => {
      expect(myPQueue.dequeue())
        .to.be.null
    })
  })

  context('isEmpty()', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue('foo', 100)
    myPQueue.enqueue('bar', 200)

    const emptyPQueue = new PQueue()

    it('returns true if the queue is empty', () => {
      expect(emptyPQueue.isEmpty())
        .to.be.true
    })
    it('returns false if the queue has items', () => {
      expect(myPQueue.isEmpty())
        .to.be.false
    })
  })
  context('length()', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue('foo', 100)
    myPQueue.enqueue('bar', 200)

    it('returns the number of elements in the queue', () => {
      expect(myPQueue.length())
        .to.equal(2)
    })
  })

})
