import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface LiquorStore extends Schema.Store, RdfResource {
}

export default function LiquorStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiquorStoreClass extends StoreMixin(Resource) implements LiquorStore {
  }
  return LiquorStoreClass
}

class LiquorStoreImpl extends LiquorStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<LiquorStore>) {
    super(arg)
    this.types.add(schema.LiquorStore)
    initializeProperties(this, init)
  }
}
LiquorStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LiquorStore)
LiquorStoreMixin.Class = LiquorStoreImpl
