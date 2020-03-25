import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface MotorcycleDealer extends Schema.AutomotiveBusiness, RdfResource {
}

export default function MotorcycleDealerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotorcycleDealerClass extends AutomotiveBusinessMixin(Resource) implements MotorcycleDealer {
  }
  return MotorcycleDealerClass
}

class MotorcycleDealerImpl extends MotorcycleDealerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MotorcycleDealer>) {
    super(arg)
    this.types.add(schema.MotorcycleDealer)
    initializeProperties<MotorcycleDealer>(this, init)
  }
}
MotorcycleDealerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MotorcycleDealer)
MotorcycleDealerMixin.Class = MotorcycleDealerImpl
