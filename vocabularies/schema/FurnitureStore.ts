import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface FurnitureStore extends Schema.Store, RdfResource {
}

export default function FurnitureStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FurnitureStoreClass extends StoreMixin(Resource) implements FurnitureStore {
  }
  return FurnitureStoreClass
}

class FurnitureStoreImpl extends FurnitureStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FurnitureStore)
  }
}
FurnitureStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FurnitureStore)
FurnitureStoreMixin.Class = FurnitureStoreImpl
