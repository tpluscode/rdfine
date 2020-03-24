import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface BeautySalon extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function BeautySalonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BeautySalonClass extends HealthAndBeautyBusinessMixin(Resource) implements BeautySalon {
  }
  return BeautySalonClass
}

class BeautySalonImpl extends BeautySalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BeautySalon>) {
    super(arg)
    this.types.add(schema.BeautySalon)
    initializeProperties(this, init)
  }
}
BeautySalonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BeautySalon)
BeautySalonMixin.Class = BeautySalonImpl
