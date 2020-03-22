import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GeneralContractor)
  }
}
GeneralContractorMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GeneralContractor)
GeneralContractorMixin.Class = GeneralContractorImpl