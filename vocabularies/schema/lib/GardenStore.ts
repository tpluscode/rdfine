import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface GardenStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function GardenStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GardenStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GardenStoreClass extends StoreMixin(Resource) {
  }
  return GardenStoreClass as any
}

class GardenStoreImpl extends GardenStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GardenStore>) {
    super(arg, init)
    this.types.add(schema.GardenStore)
  }

  static readonly __mixins: Mixin[] = [GardenStoreMixin, StoreMixin];
}
GardenStoreMixin.appliesTo = schema.GardenStore
GardenStoreMixin.Class = GardenStoreImpl

export const fromPointer = createFactory<GardenStore>([StoreMixin, GardenStoreMixin], { types: [schema.GardenStore] });
