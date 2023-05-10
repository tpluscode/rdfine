import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialProductMixin } from './FinancialProduct.js';

export interface InvestmentOrDeposit<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, rdfine.RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
}

export function InvestmentOrDepositMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<InvestmentOrDeposit> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InvestmentOrDepositClass extends FinancialProductMixin(Resource) implements Partial<InvestmentOrDeposit> {
    @rdfine.property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
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

export const fromPointer = createFactory<InvestmentOrDeposit>([FinancialProductMixin, InvestmentOrDepositMixin], { types: [schema.InvestmentOrDeposit] });
