import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface PublicSwimmingPool extends Schema.SportsActivityLocation, RdfResource {
}

export default function PublicSwimmingPoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PublicSwimmingPoolClass extends SportsActivityLocationMixin(Resource) implements PublicSwimmingPool {
  }
  return PublicSwimmingPoolClass
}

class PublicSwimmingPoolImpl extends PublicSwimmingPoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PublicSwimmingPool>) {
    super(arg)
    this.types.add(schema.PublicSwimmingPool)
    initializeProperties<PublicSwimmingPool>(this, init)
  }
}
PublicSwimmingPoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PublicSwimmingPool)
PublicSwimmingPoolMixin.Class = PublicSwimmingPoolImpl
