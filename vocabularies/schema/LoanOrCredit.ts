import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<LoanOrCredit>) {
    super(arg)
    this.types.add(schema.LoanOrCredit)
    initializeProperties<LoanOrCredit>(this, init)
  }
}
LoanOrCreditMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LoanOrCredit)
LoanOrCreditMixin.Class = LoanOrCreditImpl
