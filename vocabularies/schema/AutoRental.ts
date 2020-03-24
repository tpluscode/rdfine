import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface AutoRental extends Schema.AutomotiveBusiness, RdfResource {
}

export default function AutoRentalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoRentalClass extends AutomotiveBusinessMixin(Resource) implements AutoRental {
  }
  return AutoRentalClass
}

class AutoRentalImpl extends AutoRentalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AutoRental>) {
    super(arg)
    this.types.add(schema.AutoRental)
    initializeProperties(this, init)
  }
}
AutoRentalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoRental)
AutoRentalMixin.Class = AutoRentalImpl
