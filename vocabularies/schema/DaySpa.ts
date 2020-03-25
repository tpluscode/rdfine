import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface DaySpa extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function DaySpaMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DaySpaClass extends HealthAndBeautyBusinessMixin(Resource) implements DaySpa {
  }
  return DaySpaClass
}

class DaySpaImpl extends DaySpaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DaySpa>) {
    super(arg)
    this.types.add(schema.DaySpa)
    initializeProperties<DaySpa>(this, init)
  }
}
DaySpaMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DaySpa)
DaySpaMixin.Class = DaySpaImpl
