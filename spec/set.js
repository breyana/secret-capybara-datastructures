import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    const mySet = new Set(['A','B','C'])

    it('adds element to the set', () => {
      expect(() => mySet.add('D'))
        .to.alter(() => mySet.size(), { from: 3, to: 4 })
    })
    it('does not add an element if it exists', () => {
      expect(() => mySet.add('D'))
        .not.to.alter(() => mySet.size())
    })
  })

  context('isEmpty()', () => {
    const mySet = new Set(['A', 'B', 'C'])
    const emptySet = new Set([])

    it('returns true if the set is empty', () => {
      expect(emptySet.isEmpty())
        .to.be.true
    })
    it('returns false if set is not empty', () => {
      expect(mySet.isEmpty())
        .to.be.false
    })
  })

  context('contains()', () => {
    const mySet = new Set(['A','B','C'])

    it('returns true if the set contains the element', () => {
      expect(mySet.contains('B'))
        .to.be.true
    })
    it('returns false if the set does not contain the element', () => {
      expect(mySet.contains('D'))
        .to.be.false
    })
  })

  context('remove()', () => {
    const mySet = new Set(['A','B','C'])

    it('removes an element if it exists', () => {
      expect(() => mySet.remove('B'))
        .to.alter(() => mySet.size(), {from: 3, to: 2})
    })
  })

  context('forEach()', () => {
    const numberSet = new Set([1,2,3])

    it('takes a callback function and passes it each element in sequence', () => {
      expect(numberSet.forEach(num => num += 1))
        .to.eql([2,3,4])
    })
  })

  context('size()', () => {
    it('pushes an element to the top of the stack.', () => {
      const mySet = new Set(['A','B','C'])
      expect(mySet.size())
        .to.eql(3)
    })
  })

  context('union()', () => {
    const mySet = new Set(['A','B','C'])
    const otherSet = new Set(['B', 'C', 'E'])

    it('unions the set with another set', () => {
      expect(() => mySet.union(otherSet))
        .to.alter(() => mySet.size(), {from: 3, to: 4})
    })
    it('returns the resulting set', () => {
      expect(mySet.union(otherSet))
        .to.eql(['A','B','C','E'])
    })

  })

  context('intersect()', () => {
    const mySet = new Set(['A','B','C'])
    const otherSet = new Set(['B', 'C', 'E'])

    it('intersects the set with another set; returns the resulting set', () => {
      expect(mySet.intersect(otherSet))
        .to.eql(['B', 'C'])
    })
  })

  context('difference()', () => {
    const mySet = new Set(['A','B','C'])
    const otherSet = new Set(['B', 'C', 'E'])

    it('returns a set that contains the elements found in the set but not in ' +
       'the other Set.', () => {
      expect(mySet.difference(otherSet))
        .to.eql(['A'])
    })
  })

  context('isSubset()', () => {
    const mySet = new Set(['A','B','C'])
    const otherSet = new Set(['A','B','C','D'])
    const thirdSet = new Set(['C','D','E'])

    it('returns true if the set is a subset of otherSet', () => {
      expect(mySet.isSubset(otherSet))
        .to.be.true
    })
    it('returns false if the set is not a subset of otherSet', () => {
      expect(mySet.isSubset(thirdSet))
        .to.be.false
    })
  })

  context('clone()', () => {
    const mySet = new Set(['A','B','C'])
    it('returns a cloned set', () => {
      expect(mySet.clone())
        .to.eql(new Set(['A','B','C']))
    })
  })

})
