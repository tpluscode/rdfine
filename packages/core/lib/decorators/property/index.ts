import { Term } from 'rdf-js'
import type { RdfResourceCore } from '../../../RdfResource'
import { EdgeTraversalFactory, PropRef } from '../../path'
import literalPropertyDecorator, { LiteralValues } from '../property/literal'
import resourcePropertyDecorator from '../property/resource'
import * as compare from '../../compare'
import { toLiteral } from '../../conversion'
import { literal } from '@rdf-esm/data-model'
import { propertyDecorator, ObjectOrFactory, PropertyReturnKind, ArrayOrSingle } from './decoratorFactory'
import { Initializer } from '../../../RdfResource'
import { fromInitializer } from '../../resource'

export type { PropertyMeta } from './decoratorFactory'

export interface AccessorOptions {
  values?: PropertyReturnKind | PropertyReturnKind[]
  path?: ArrayOrSingle<PropRef | EdgeTraversalFactory>
  strict?: true
  subjectFromAllGraphs?: true
}

interface TermOptions <TSelf>{
  initial?: ObjectOrFactory<TSelf, Term, Term>
}

function isInitializer(obj: any): obj is Initializer<RdfResourceCore> {
  return typeof obj === 'object' && obj instanceof Object && 'id' in obj
}

export function property<R extends RdfResourceCore<any>>(options: AccessorOptions & TermOptions<R> = {}) {
  return propertyDecorator<R, Term, LiteralValues, Term>({
    ...options,
    fromTerm: (obj) => obj.term,
    toTerm(this: R, value) {
      if (isInitializer(value)) {
        return fromInitializer(this, value).id
      }

      return toLiteral(value) || literal(value.toString())
    },
    valueTypeName: 'RDF/JS term object',
    assertSetValue: () => true,
    compare: compare.terms,
  })
}

property.literal = literalPropertyDecorator

property.resource = resourcePropertyDecorator
