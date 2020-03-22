import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BankOrCreditUnion)
  }
}
BankOrCreditUnionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BankOrCreditUnion)
BankOrCreditUnionMixin.Class = BankOrCreditUnionImpl
