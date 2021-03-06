import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BankAccountMixin } from './BankAccount';
import { InvestmentOrDepositMixin } from './InvestmentOrDeposit';

export interface DepositAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BankAccount<D>, Schema.InvestmentOrDeposit<D>, RdfResource<D> {
}

export function DepositAccountMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DepositAccount> & RdfResourceCore> & Base {
  @namespace(schema)
  class DepositAccountClass extends InvestmentOrDepositMixin(BankAccountMixin(Resource)) implements Partial<DepositAccount> {
  }
  return DepositAccountClass
}

class DepositAccountImpl extends DepositAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DepositAccount>) {
    super(arg, init)
    this.types.add(schema.DepositAccount)
  }

  static readonly __mixins: Mixin[] = [DepositAccountMixin, BankAccountMixin, InvestmentOrDepositMixin];
}
DepositAccountMixin.appliesTo = schema.DepositAccount
DepositAccountMixin.Class = DepositAccountImpl

export const fromPointer = createFactory<DepositAccount>([InvestmentOrDepositMixin, BankAccountMixin, DepositAccountMixin], { types: [schema.DepositAccount] });
