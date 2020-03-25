import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface HVACBusiness extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function HVACBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HVACBusinessClass extends HomeAndConstructionBusinessMixin(Resource) implements HVACBusiness {
  }
  return HVACBusinessClass
}

class HVACBusinessImpl extends HVACBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HVACBusiness>) {
    super(arg)
    this.types.add(schema.HVACBusiness)
    initializeProperties<HVACBusiness>(this, init)
  }
}
HVACBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HVACBusiness)
HVACBusinessMixin.Class = HVACBusinessImpl
