import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    const myStack = new Stack()

    it('pushes an element to the top of the stack.', () => {
      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
      expect(myStack.top.data)
        .to.eql('foo')
    })
  })

  context('pop()', () => {
    const myStack = new Stack()
    myStack.push('foo')
    myStack.push('bar')

    it('removes the top element in the stack', () => {
      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 2, to: 1 })
    })
    it('returns the top element in the stack', () => {
      //at this point, bar should be removed, thus top of the stack is foo
      expect(myStack.pop())
        .to.equal('foo')
    })
    it('returns null if the stack is empty', () => {
      expect(myStack.pop())
        .to.be.null
    })
  })

  context('peek()', () => {
    const myStack = new Stack()
    myStack.push('foo')
    myStack.push('bar')

    const emptyStack = new Stack()

    it('returns the top element in the stack', () => {
      expect(myStack.peek())
        .to.equal('bar')
    })
    it('returns null if empty', () => {
      expect(emptyStack.peek())
        .to.be.null
    })
  })

  context('isEmpty()', () => {
    const myStack = new Stack()
    myStack.push('foo')
    myStack.push('bar')

    const emptyStack = new Stack()

    it('returns true if the stack is empty', () => {
      expect(emptyStack.isEmpty())
        .to.be.true
    })
    it('returns false if the stack has items', () => {
      expect(myStack.isEmpty())
        .to.be.false
    })
  })

  context('length()', () => {
    const myStack = new Stack()
    myStack.push('foo')
    myStack.push('bar')

    it('returns the number of elements in the stack', () => {
      expect(myStack.length())
        .to.equal(2)
    })
  })

})
