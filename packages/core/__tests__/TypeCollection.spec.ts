import $rdf from 'rdf-ext'
import cf, { GraphPointer } from 'clownface'
import { rdf } from '@tpluscode/rdf-ns-builders'
import TypeCollection from '../lib/TypeCollection.js'
import RdfResourceImpl, { RdfResource, ResourceIdentifier } from '../RdfResource.js'
import { parse, ex } from './_helpers/index.js'
import {expect} from "chai";

const nullResource = {} as RdfResource

describe('TypeCollection', () => {
  let node: GraphPointer<ResourceIdentifier>

  describe('size', () => {
    it('returns 0 when no types', () => {
      // given
      const dataset = $rdf.dataset()
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))

      // then
      expect(tc.size).to.eq(0)
    })

    it('counts types', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))

      // then
      expect(tc.size).to.eq(4)
    })

    it('counts unique types', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type1, ex:Type2, ex:Type1, ex:Type2 .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))

      // then
      expect(tc.size).to.eq(2)
    })
  })

  describe('has', () => {
    it('returns true for type found by string', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))

      // then
      expect(tc.has('http://example.com/Type')).to.eq(true)
    })

    it('returns true for type found by exact node', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))

      // then
      expect(tc.has(ex.Type)).to.eq(true)
    })

    it('returns true for type found by resource', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      const type: RdfResource = {
        ...nullResource,
        id: ex.Type,
      }

      // then
      expect(tc.has(type)).to.eq(true)
    })

    it('returns false for type not found by string', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))

      // then
      expect(tc.has('http://example.com/Type2')).to.eq(false)
    })

    it('returns false for type not found by exact node', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))

      // then
      expect(tc.has(ex.Type2)).to.eq(false)
    })

    it('returns false for type not found by resource', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      const type = {
        ...nullResource,
        id: ex.Type2,
      }

      // then
      expect(tc.has(type)).to.eq(false)
    })
  })

  describe('clear', () => {
    it('removes all resource\'s triples', async function () {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      ex:res2 a ex:Type1 .
    `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      tc.clear()

      // then
      expect(dataset.size).to.eq(1)
      expect(dataset.toCanonical()).to.matchSnapshot(this)
    })
  })

  describe('add', () => {
    it('modifies the dataset when adding named node', function () {
      // given
      const dataset = $rdf.dataset()
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      tc.add(ex.Type)

      // then
      expect(dataset.toCanonical()).to.matchSnapshot(this)
    })

    it('modifies the dataset when adding resource', function () {
      // given
      const dataset = $rdf.dataset()
      node = cf({
        dataset,
      }).namedNode(ex.res)
      const newType = {
        ...nullResource,
        id: ex.Type,
      }

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      tc.add(newType)

      // then
      expect(dataset.toCanonical()).to.matchSnapshot(this)
    })

    it('does not modify the dataset when type already exists on resource', async function () {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)
      const newType = {
        ...nullResource,
        id: ex.Type,
      }

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      tc.add(newType)

      // then
      expect(dataset.toCanonical()).to.matchSnapshot(this)
    })
  })

  describe('delete', () => {
    it('removes the correct triple', async function () {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      ex:res2 a ex:Type1 .
    `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      tc.delete(ex.Type2)

      // then
      expect(dataset.size).to.eq(4)
      expect(dataset.toCanonical()).to.matchSnapshot(this)
    })

    it('returns true if deleted triples', async () => {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1 .
    `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      const deleted = tc.delete(ex.Type1)

      // then
      expect(deleted).to.eq(true)
    })

    it('returns false if deleted nothing', async () => {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1 .
    `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      const deleted = tc.delete(ex.Type2)

      // then
      expect(deleted).to.eq(false)
    })
  })

  describe('forEach', () => {
    it('iterates with thisArg and correct callback params', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      const thisArg = {}

      // then
      tc.forEach(function (this: any, value, value2, set) {
        expect(ex.res.equals(value.id))
        expect(ex.res.equals(value2.id))
        expect(set).to.eq(tc)
        expect(this).to.eq(thisArg)
      }, thisArg)
    })
  })

  describe('entries', () => {
    it('implements the set interface', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new TypeCollection(new RdfResourceImpl(node))
      const entries = tc.entries()

      // then
      for (const [one, two] of entries) {
        expect(ex.Type.equals(one.id))
        expect(ex.Type.equals(two.id))
      }
    })
  })
})

describe('TypeCollection', () => {
  let node: GraphPointer<ResourceIdentifier>

  describe('allGraphs = true', () => {
    describe('size', () => {
      it('counts unique types from all graphs', () => {
        // given
        const dataset = $rdf.dataset()
        cf({ dataset, graph: ex.G1 })
          .namedNode(ex.res)
          .addOut(rdf.type, [ex.Type1, ex.Type2])
        cf({ dataset, graph: ex.G2 })
          .namedNode(ex.res)
          .addOut(rdf.type, [ex.Type1, ex.Type2])
        node = cf({
          dataset,
        }).namedNode(ex.res)

        // when
        const tc = new TypeCollection(new RdfResourceImpl(node), true)

        // then
        expect(tc.size).to.eq(2)
      })
    })

    describe('values', () => {
      it('returns unique types from all graphs', () => {
        // given
        const dataset = $rdf.dataset()
        cf({ dataset, graph: ex.G1 })
          .namedNode(ex.res)
          .addOut(rdf.type, [ex.Type1, ex.Type2])
        cf({ dataset, graph: ex.G2 })
          .namedNode(ex.res)
          .addOut(rdf.type, [ex.Type1, ex.Type2])
        node = cf({
          dataset,
        }).namedNode(ex.res)

        // when
        const tc = new TypeCollection(new RdfResourceImpl(node), true)
        const values = [...tc.values()]

        // then
        expect(values).to.have.length(2)
        expect(values.map(r => r.id)).to.deep
          .contain.all.members([ex.Type1, ex.Type2])
      })
    })
  })
})
