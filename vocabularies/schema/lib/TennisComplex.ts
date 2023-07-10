import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface TennisComplex<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, rdfine.RdfResource<D> {
}

export function TennisComplexMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TennisComplex & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TennisComplexClass extends SportsActivityLocationMixin(Resource) {
  }
  return TennisComplexClass as any
}

class TennisComplexImpl extends TennisComplexMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TennisComplex>) {
    super(arg, init)
    this.types.add(schema.TennisComplex)
  }

  static readonly __mixins: Mixin[] = [TennisComplexMixin, SportsActivityLocationMixin];
}
TennisComplexMixin.appliesTo = schema.TennisComplex
TennisComplexMixin.Class = TennisComplexImpl

export const fromPointer = createFactory<TennisComplex>([SportsActivityLocationMixin, TennisComplexMixin], { types: [schema.TennisComplex] });
