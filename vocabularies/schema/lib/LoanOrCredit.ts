import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialProductMixin } from './FinancialProduct.js';

export interface LoanOrCredit<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, rdfine.RdfResource<D> {
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

export function LoanOrCreditMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LoanOrCredit> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LoanOrCreditClass extends FinancialProductMixin(Resource) implements Partial<LoanOrCredit> {
    @rdfine.property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @rdfine.property.literal()
    currency: string | undefined;
    @rdfine.property.resource()
    gracePeriod: Schema.Duration | undefined;
    @rdfine.property.resource()
    loanRepaymentForm: Schema.RepaymentSpecification | undefined;
    @rdfine.property.resource()
    loanTerm: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal()
    loanType: string | undefined;
    @rdfine.property({ path: schema.loanType })
    loanTypeTerm: RDF.NamedNode | undefined;
    @rdfine.property.literal({ type: Boolean })
    recourseLoan: boolean | undefined;
    @rdfine.property.literal({ type: Boolean })
    renegotiableLoan: boolean | undefined;
    @rdfine.property.resource()
    requiredCollateral: Schema.Thing | undefined;
    @rdfine.property.literal({ path: schema.requiredCollateral })
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

export const fromPointer = createFactory<LoanOrCredit>([FinancialProductMixin, LoanOrCreditMixin], { types: [schema.LoanOrCredit] });
