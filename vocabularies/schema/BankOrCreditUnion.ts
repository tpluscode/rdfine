import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FinancialServiceMixin from './FinancialService';

export interface BankOrCreditUnion extends Schema.FinancialService, RdfResource {
}

export default function BankOrCreditUnionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BankOrCreditUnionClass extends FinancialServiceMixin(Resource) implements BankOrCreditUnion {
  }
  return BankOrCreditUnionClass
}

class BankOrCreditUnionImpl extends BankOrCreditUnionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BankOrCreditUnion>) {
    super(arg)
    this.types.add(schema.BankOrCreditUnion)
    initializeProperties(this, init)
  }
}
BankOrCreditUnionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BankOrCreditUnion)
BankOrCreditUnionMixin.Class = BankOrCreditUnionImpl
