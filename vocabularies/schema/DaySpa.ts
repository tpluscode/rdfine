import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<DaySpa>) {
    super(arg, init)
    this.types.add(schema.DaySpa)
  }
}
DaySpaMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DaySpa)
DaySpaMixin.Class = DaySpaImpl
