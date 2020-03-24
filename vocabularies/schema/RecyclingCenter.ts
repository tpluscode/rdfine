import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface RecyclingCenter extends Schema.LocalBusiness, RdfResource {
}

export default function RecyclingCenterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RecyclingCenterClass extends LocalBusinessMixin(Resource) implements RecyclingCenter {
  }
  return RecyclingCenterClass
}

class RecyclingCenterImpl extends RecyclingCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RecyclingCenter>) {
    super(arg)
    this.types.add(schema.RecyclingCenter)
    initializeProperties(this, init)
  }
}
RecyclingCenterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RecyclingCenter)
RecyclingCenterMixin.Class = RecyclingCenterImpl
