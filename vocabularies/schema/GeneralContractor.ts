import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface GeneralContractor extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function GeneralContractorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GeneralContractorClass extends HomeAndConstructionBusinessMixin(Resource) implements GeneralContractor {
  }
  return GeneralContractorClass
}

class GeneralContractorImpl extends GeneralContractorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<GeneralContractor>) {
    super(arg)
    this.types.add(schema.GeneralContractor)
    initializeProperties(this, init)
  }
}
GeneralContractorMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GeneralContractor)
GeneralContractorMixin.Class = GeneralContractorImpl
