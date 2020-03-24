import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import BankAccountMixin from './BankAccount';
import InvestmentOrDepositMixin from './InvestmentOrDeposit';

export interface DepositAccount extends Schema.BankAccount, Schema.InvestmentOrDeposit, RdfResource {
}

export default function DepositAccountMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepositAccountClass extends InvestmentOrDepositMixin(BankAccountMixin(Resource)) implements DepositAccount {
  }
  return DepositAccountClass
}

class DepositAccountImpl extends DepositAccountMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DepositAccount)
  }
}
DepositAccountMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepositAccount)
DepositAccountMixin.Class = DepositAccountImpl
