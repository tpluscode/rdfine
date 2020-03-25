import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface Store extends Schema.LocalBusiness, RdfResource {
}

export default function StoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class StoreClass extends LocalBusinessMixin(Resource) implements Store {
  }
  return StoreClass
}

class StoreImpl extends StoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Store>) {
    super(arg)
    this.types.add(schema.Store)
    initializeProperties<Store>(this, init)
  }
}
StoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Store)
StoreMixin.Class = StoreImpl
