import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialProductMixin } from './FinancialProduct';

export interface InvestmentOrDeposit<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
}

export function InvestmentOrDepositMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InvestmentOrDeposit> & RdfResourceCore> & Base {
  @namespace(schema)
  class InvestmentOrDepositClass extends FinancialProductMixin(Resource) implements Partial<InvestmentOrDeposit> {
    @property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.amount, type: Number })
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
