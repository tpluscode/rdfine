import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<HairSalon>) {
    super(arg, init)
    this.types.add(schema.HairSalon)
  }
}
HairSalonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HairSalon)
HairSalonMixin.Class = HairSalonImpl
