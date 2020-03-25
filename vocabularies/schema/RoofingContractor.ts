import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface RoofingContractor extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function RoofingContractorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoofingContractorClass extends HomeAndConstructionBusinessMixin(Resource) implements RoofingContractor {
  }
  return RoofingContractorClass
}

class RoofingContractorImpl extends RoofingContractorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RoofingContractor>) {
    super(arg)
    this.types.add(schema.RoofingContractor)
    initializeProperties<RoofingContractor>(this, init)
  }
}
RoofingContractorMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RoofingContractor)
RoofingContractorMixin.Class = RoofingContractorImpl
