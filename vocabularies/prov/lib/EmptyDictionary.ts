import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DictionaryMixin } from './Dictionary.js';
import { EmptyCollectionMixin } from './EmptyCollection.js';

export interface EmptyDictionary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Dictionary<D>, Prov.EmptyCollection<D>, rdfine.RdfResource<D> {
}

export function EmptyDictionaryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<EmptyDictionary & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class EmptyDictionaryClass extends EmptyCollectionMixin(DictionaryMixin(Resource)) {
  }
  return EmptyDictionaryClass as any
}

class EmptyDictionaryImpl extends EmptyDictionaryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmptyDictionary>) {
    super(arg, init)
    this.types.add(prov.EmptyDictionary)
  }

  static readonly __mixins: Mixin[] = [EmptyDictionaryMixin, DictionaryMixin, EmptyCollectionMixin];
}
EmptyDictionaryMixin.appliesTo = prov.EmptyDictionary
EmptyDictionaryMixin.Class = EmptyDictionaryImpl

export const fromPointer = createFactory<EmptyDictionary>([EmptyCollectionMixin, DictionaryMixin, EmptyDictionaryMixin], { types: [prov.EmptyDictionary] });
