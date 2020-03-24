import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FinancialProductMixin from './FinancialProduct';

export interface InvestmentOrDeposit extends Schema.FinancialProduct, RdfResource {
  amount: Schema.MonetaryAmount;
  amountLiteral: number;
}

export default function InvestmentOrDepositMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InvestmentOrDepositClass extends FinancialProductMixin(Resource) implements InvestmentOrDeposit {
    @property.resource()
    amount!: Schema.MonetaryAmount;
    @property.literal({ type: Number, path: schema.amount })
    amountLiteral!: number;
  }
  return InvestmentOrDepositClass
}

class InvestmentOrDepositImpl extends InvestmentOrDepositMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InvestmentOrDeposit)
  }
}
InvestmentOrDepositMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InvestmentOrDeposit)
InvestmentOrDepositMixin.Class = InvestmentOrDepositImpl
