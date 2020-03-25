import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<InsuranceAgency>) {
    super(arg)
    this.types.add(schema.InsuranceAgency)
    initializeProperties<InsuranceAgency>(this, init)
  }
}
InsuranceAgencyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InsuranceAgency)
InsuranceAgencyMixin.Class = InsuranceAgencyImpl
