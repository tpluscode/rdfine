import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FinancialProductMixin from './FinancialProduct';

export interface LoanOrCredit extends Schema.FinancialProduct, RdfResource {
  amount: Schema.MonetaryAmount;
  amountLiteral: number;
  currency: string;
  loanTerm: Schema.QuantitativeValue;
  requiredCollateral: Schema.Thing;
  requiredCollateralLiteral: string;
}

export default function LoanOrCreditMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LoanOrCreditClass extends FinancialProductMixin(Resource) implements LoanOrCredit {
    @property.resource()
    amount!: Schema.MonetaryAmount;
    @property.literal({ type: Number, path: schema.amount })
    amountLiteral!: number;
    @property.literal()
    currency!: string;
    @property.resource()
    loanTerm!: Schema.QuantitativeValue;
    @property.resource()
    requiredCollateral!: Schema.Thing;
    @property.literal({ path: schema.requiredCollateral })
    requiredCollateralLiteral!: string;
  }
  return LoanOrCreditClass
}

class LoanOrCreditImpl extends LoanOrCreditMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LoanOrCredit)
  }
}
LoanOrCreditMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LoanOrCredit)
LoanOrCreditMixin.Class = LoanOrCreditImpl
