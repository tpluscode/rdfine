import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialProductMixin } from './FinancialProduct';

export interface LoanOrCredit<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
  currency: string | undefined;
  gracePeriod: Schema.Duration<D> | undefined;
  loanRepaymentForm: Schema.RepaymentSpecification<D> | undefined;
  loanTerm: Schema.QuantitativeValue<D> | undefined;
  loanType: string | undefined;
  loanTypeTerm: RDF.NamedNode | undefined;
  recourseLoan: boolean | undefined;
  renegotiableLoan: boolean | undefined;
  requiredCollateral: Schema.Thing<D> | undefined;
  requiredCollateralLiteral: string | undefined;
}

export function LoanOrCreditMixin<Base extends Constructor>(Resource: Base): Constructor<LoanOrCredit> & Base {
  @namespace(schema)
  class LoanOrCreditClass extends FinancialProductMixin(Resource) implements Partial<LoanOrCredit> {
    @property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @property.literal()
    currency: string | undefined;
    @property.resource()
    gracePeriod: Schema.Duration | undefined;
    @property.resource()
    loanRepaymentForm: Schema.RepaymentSpecification | undefined;
    @property.resource()
    loanTerm: Schema.QuantitativeValue | undefined;
    @property.literal()
    loanType: string | undefined;
    @property({ path: schema.loanType })
    loanTypeTerm: RDF.NamedNode | undefined;
    @property.literal({ type: Boolean })
    recourseLoan: boolean | undefined;
    @property.literal({ type: Boolean })
    renegotiableLoan: boolean | undefined;
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
