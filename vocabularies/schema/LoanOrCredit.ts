import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FinancialProductMixin } from './FinancialProduct';

export interface LoanOrCredit extends Schema.FinancialProduct, RdfResource {
  amount: Schema.MonetaryAmount | undefined;
  amountLiteral: number | undefined;
  currency: string | undefined;
  loanTerm: Schema.QuantitativeValue | undefined;
  requiredCollateral: Schema.Thing | undefined;
  requiredCollateralLiteral: string | undefined;
}

export function LoanOrCreditMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LoanOrCreditClass extends FinancialProductMixin(Resource) implements LoanOrCredit {
    @property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @property.literal()
    currency: string | undefined;
    @property.resource()
    loanTerm: Schema.QuantitativeValue | undefined;
    @property.resource()
    requiredCollateral: Schema.Thing | undefined;
    @property.literal({ path: schema.requiredCollateral })
    requiredCollateralLiteral: string | undefined;
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
