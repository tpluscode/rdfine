import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface FurnitureStore extends Schema.Store, RdfResource {
}

export function FurnitureStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FurnitureStoreClass extends StoreMixin(Resource) implements FurnitureStore {
  }
  return FurnitureStoreClass
}

class FurnitureStoreImpl extends FurnitureStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FurnitureStore>) {
    super(arg, init)
    this.types.add(schema.FurnitureStore)
  }

  static readonly __mixins: Mixin[] = [FurnitureStoreMixin, StoreMixin];
}
FurnitureStoreMixin.appliesTo = schema.FurnitureStore
FurnitureStoreMixin.Class = FurnitureStoreImpl
