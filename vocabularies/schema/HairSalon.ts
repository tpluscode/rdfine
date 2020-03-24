import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface HairSalon extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function HairSalonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HairSalonClass extends HealthAndBeautyBusinessMixin(Resource) implements HairSalon {
  }
  return HairSalonClass
}

class HairSalonImpl extends HairSalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HairSalon>) {
    super(arg)
    this.types.add(schema.HairSalon)
    initializeProperties(this, init)
  }
}
HairSalonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HairSalon)
HairSalonMixin.Class = HairSalonImpl
