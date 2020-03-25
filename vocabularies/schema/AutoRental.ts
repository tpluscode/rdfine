import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AutoRental>) {
    super(arg, init)
    this.types.add(schema.AutoRental)
  }
}
AutoRentalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoRental)
AutoRentalMixin.Class = AutoRentalImpl
