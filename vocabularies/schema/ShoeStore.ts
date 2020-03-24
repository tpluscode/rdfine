import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ShoeStore extends Schema.Store, RdfResource {
}

export default function ShoeStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ShoeStoreClass extends StoreMixin(Resource) implements ShoeStore {
  }
  return ShoeStoreClass
}

class ShoeStoreImpl extends ShoeStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ShoeStore>) {
    super(arg)
    this.types.add(schema.ShoeStore)
    initializeProperties(this, init)
  }
}
ShoeStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ShoeStore)
ShoeStoreMixin.Class = ShoeStoreImpl
