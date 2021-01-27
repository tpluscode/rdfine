import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { DictionaryMixin } from './Dictionary';
import { EmptyCollectionMixin } from './EmptyCollection';

export interface EmptyDictionary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Dictionary<D>, Prov.EmptyCollection<D>, RdfResource<D> {
}

export function EmptyDictionaryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EmptyDictionary> & RdfResourceCore> & Base {
  @namespace(prov)
  class EmptyDictionaryClass extends EmptyCollectionMixin(DictionaryMixin(Resource)) implements Partial<EmptyDictionary> {
  }
  return EmptyDictionaryClass
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
