import $rdf from 'rdf-ext'
import cf, { SingleContextClownface } from 'clownface'
import ns from '@rdfjs/namespace'
import { TypeCollection } from '../lib/TypeCollection'
import RdfResourceImpl, { RdfResource } from '../lib/RdfResource'
import { parse } from './_helpers'

const ex = ns('http://example.com/')
const nullResource = {} as RdfResource

describe('TypeCollection', () => {
  describe('size', () => {
    it('returns 0 when no types', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)

      // then
      expect(tc.size).toEqual(0)
    })

    it('counts types', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)

      // then
      expect(tc.size).toEqual(4)
    })

    it('counts unique types', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type1, ex:Type2, ex:Type1, ex:Type2 .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)

      // then
      expect(tc.size).toEqual(2)
    })
  })

  describe('has', () => {
    it('returns true for type found by string', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)

      // then
      expect(tc.has('http://example.com/Type')).toBe(true)
    })

    it('returns true for type found by exact node', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)

      // then
      expect(tc.has(ex.Type)).toBe(true)
    })

    it('returns true for type found by resource', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      const type: RdfResource = {
        ...nullResource,
        id: ex.Type,
      }

      // then
      expect(tc.has(type)).toBe(true)
    })

    it('returns false for type not found by string', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)

      // then
      expect(tc.has('http://example.com/Type2')).toBe(false)
    })

    it('returns false for type not found by exact node', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)

      // then
      expect(tc.has(ex.Type2)).toBe(false)
    })

    it('returns false for type not found by resource', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      const type = {
        ...nullResource,
        id: ex.Type2,
      }

      // then
      expect(tc.has(type)).toBe(false)
    })
  })

  describe('clear', () => {
    it('removes all resource\'s triples', async () => {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      ex:res2 a ex:Type1 .
    `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      tc.clear()

      // then
      expect(dataset.size).toEqual(1)
      expect(dataset.toCanonical()).toMatchSnapshot()
    })
  })

  describe('add', () => {
    it('modifies the dataset when adding named node', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      tc.add(ex.Type)

      // then
      expect(dataset.toCanonical()).toMatchSnapshot()
    })

    it('modifies the dataset when adding resource', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface
      const newType = {
        ...nullResource,
        id: ex.Type,
      }

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      tc.add(newType)

      // then
      expect(dataset.toCanonical()).toMatchSnapshot()
    })

    it('does not modify the dataset when type already exists on resource', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface
      const newType = {
        ...nullResource,
        id: ex.Type,
      }

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      tc.add(newType)

      // then
      expect(dataset.toCanonical()).toMatchSnapshot()
    })
  })

  describe('delete', () => {
    it('removes the correct triple', async () => {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      ex:res2 a ex:Type1 .
    `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      tc.delete(ex.Type2)

      // then
      expect(dataset.size).toEqual(4)
      expect(dataset.toCanonical()).toMatchSnapshot()
    })

    it('returns true if deleted triples', async () => {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1 .
    `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      const deleted = tc.delete(ex.Type1)

      // then
      expect(deleted).toEqual(true)
    })

    it('returns false if deleted nothing', async () => {
      // given
      const dataset = await parse(`
      @prefix ex: <${ex().value}> .
      
      ex:res a ex:Type1 .
    `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      const deleted = tc.delete(ex.Type2)

      // then
      expect(deleted).toEqual(false)
    })
  })

  describe('forEach', () => {
    it('iterates with thisArg and correct callback params', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type .
      `)
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      const thisArg = {}

      // then
      tc.forEach(function (this: any, value, value2, set) {
        expect(ex.res.equals(value.id))
        expect(ex.res.equals(value2.id))
        expect(set).toBe(tc)
        expect(this).toBe(thisArg)
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
      const node = cf({
        dataset,
        term: ex.res,
      }) as any as SingleContextClownface

      // when
      const tc = new TypeCollection(node, RdfResourceImpl)
      const entries = tc.entries()

      // then
      for (const [one, two] of entries) {
        expect(ex.Type.equals(one.id))
        expect(ex.Type.equals(two.id))
      }
    })
  })
})
