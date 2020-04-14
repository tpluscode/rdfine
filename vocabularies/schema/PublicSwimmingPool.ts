import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<PublicSwimmingPool>) {
    super(arg, init)
    this.types.add(schema.PublicSwimmingPool)
  }
}
PublicSwimmingPoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PublicSwimmingPool)
PublicSwimmingPoolMixin.Class = PublicSwimmingPoolImpl
