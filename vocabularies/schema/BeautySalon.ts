import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BeautySalon>) {
    super(arg, init)
    this.types.add(schema.BeautySalon)
  }
}
BeautySalonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BeautySalon)
BeautySalonMixin.Class = BeautySalonImpl
