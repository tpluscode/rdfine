import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface MotorcycleRepair extends Schema.AutomotiveBusiness, RdfResource {
}

export default function MotorcycleRepairMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotorcycleRepairClass extends AutomotiveBusinessMixin(Resource) implements MotorcycleRepair {
  }
  return MotorcycleRepairClass
}

class MotorcycleRepairImpl extends MotorcycleRepairMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MotorcycleRepair>) {
    super(arg)
    this.types.add(schema.MotorcycleRepair)
    initializeProperties<MotorcycleRepair>(this, init)
  }
}
MotorcycleRepairMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MotorcycleRepair)
MotorcycleRepairMixin.Class = MotorcycleRepairImpl
