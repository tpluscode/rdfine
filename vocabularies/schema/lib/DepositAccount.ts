import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BankAccountMixin } from './BankAccount.js';
import { InvestmentOrDepositMixin } from './InvestmentOrDeposit.js';

export interface DepositAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BankAccount<D>, Schema.InvestmentOrDeposit<D>, rdfine.RdfResource<D> {
}

export function DepositAccountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DepositAccount> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
