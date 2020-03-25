import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface NailSalon extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function NailSalonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NailSalonClass extends HealthAndBeautyBusinessMixin(Resource) implements NailSalon {
  }
  return NailSalonClass
}

class NailSalonImpl extends NailSalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<NailSalon>) {
    super(arg)
    this.types.add(schema.NailSalon)
    initializeProperties<NailSalon>(this, init)
  }
}
NailSalonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NailSalon)
NailSalonMixin.Class = NailSalonImpl
