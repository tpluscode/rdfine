import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';

export interface Optician<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function OpticianMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Optician> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OpticianClass extends Resource implements Partial<Optician> {
  }
  return OpticianClass
}

class OpticianImpl extends OpticianMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Optician>) {
    super(arg, init)
    this.types.add(schema.Optician)
  }

  static readonly __mixins: Mixin[] = [OpticianMixin];
}
OpticianMixin.appliesTo = schema.Optician
OpticianMixin.Class = OpticianImpl

export const fromPointer = createFactory<Optician>([OpticianMixin], { types: [schema.Optician] });
