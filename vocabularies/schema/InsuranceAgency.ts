import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FinancialServiceMixin from './FinancialService';

export interface InsuranceAgency extends Schema.FinancialService, RdfResource {
}

export default function InsuranceAgencyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InsuranceAgencyClass extends FinancialServiceMixin(Resource) implements InsuranceAgency {
  }
  return InsuranceAgencyClass
}

class InsuranceAgencyImpl extends InsuranceAgencyMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InsuranceAgency)
  }
}
InsuranceAgencyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InsuranceAgency)
InsuranceAgencyMixin.Class = InsuranceAgencyImpl
