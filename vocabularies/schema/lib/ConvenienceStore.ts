import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface ConvenienceStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function ConvenienceStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ConvenienceStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ConvenienceStoreClass extends StoreMixin(Resource) implements Partial<ConvenienceStore> {
  }
  return ConvenienceStoreClass
}

class ConvenienceStoreImpl extends ConvenienceStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConvenienceStore>) {
    super(arg, init)
    this.types.add(schema.ConvenienceStore)
  }

  static readonly __mixins: Mixin[] = [ConvenienceStoreMixin, StoreMixin];
}
ConvenienceStoreMixin.appliesTo = schema.ConvenienceStore
ConvenienceStoreMixin.Class = ConvenienceStoreImpl

export const fromPointer = createFactory<ConvenienceStore>([StoreMixin, ConvenienceStoreMixin], { types: [schema.ConvenienceStore] });
