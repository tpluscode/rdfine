import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FinancialProductMixin } from './FinancialProduct';

export interface InvestmentOrDeposit extends Schema.FinancialProduct, RdfResource {
  amount: Schema.MonetaryAmount;
  amountLiteral: number;
}

export function InvestmentOrDepositMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InvestmentOrDepositClass extends FinancialProductMixin(Resource) implements InvestmentOrDeposit {
    @property.resource()
    amount!: Schema.MonetaryAmount;
    @property.literal({ path: schema.amount, type: Number })
    amountLiteral!: number;
  }
  return InvestmentOrDepositClass
}

class InvestmentOrDepositImpl extends InvestmentOrDepositMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InvestmentOrDeposit>) {
    super(arg, init)
    this.types.add(schema.InvestmentOrDeposit)
  }

  static readonly __mixins: Mixin[] = [InvestmentOrDepositMixin, FinancialProductMixin];
}
InvestmentOrDepositMixin.appliesTo = schema.InvestmentOrDeposit
InvestmentOrDepositMixin.Class = InvestmentOrDepositImpl
