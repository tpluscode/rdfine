import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface HVACBusiness extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export function HVACBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HVACBusinessClass extends HomeAndConstructionBusinessMixin(Resource) implements HVACBusiness {
  }
  return HVACBusinessClass
}

class HVACBusinessImpl extends HVACBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HVACBusiness>) {
    super(arg, init)
    this.types.add(schema.HVACBusiness)
  }
}
HVACBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HVACBusiness)
HVACBusinessMixin.Class = HVACBusinessImpl
