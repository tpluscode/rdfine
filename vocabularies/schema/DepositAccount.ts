import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { BankAccountMixin } from './BankAccount';
import { InvestmentOrDepositMixin } from './InvestmentOrDeposit';

export interface DepositAccount extends Schema.BankAccount, Schema.InvestmentOrDeposit, RdfResource {
}

export function DepositAccountMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepositAccountClass extends InvestmentOrDepositMixin(BankAccountMixin(Resource)) implements DepositAccount {
  }
  return DepositAccountClass
}

class DepositAccountImpl extends DepositAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DepositAccount>) {
    super(arg, init)
    this.types.add(schema.DepositAccount)
  }
}
DepositAccountMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepositAccount)
DepositAccountMixin.Class = DepositAccountImpl
