import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FinancialProductMixin } from './FinancialProduct';

export interface LoanOrCredit extends Schema.FinancialProduct, RdfResource {
  amount: Schema.MonetaryAmount;
  amountLiteral: number;
  currency: string;
  loanTerm: Schema.QuantitativeValue;
  requiredCollateral: Schema.Thing;
  requiredCollateralLiteral: string;
}

export function LoanOrCreditMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LoanOrCreditClass extends FinancialProductMixin(Resource) implements LoanOrCredit {
    @property.resource()
    amount!: Schema.MonetaryAmount;
    @property.literal({ path: schema.amount, type: Number })
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
  constructor(arg: ResourceNode, init?: Initializer<LoanOrCredit>) {
    super(arg, init)
    this.types.add(schema.LoanOrCredit)
  }

  static readonly __mixins: Mixin[] = [LoanOrCreditMixin, FinancialProductMixin];
}
LoanOrCreditMixin.appliesTo = schema.LoanOrCredit
LoanOrCreditMixin.Class = LoanOrCreditImpl
