import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<DepositAccount>) {
    super(arg)
    this.types.add(schema.DepositAccount)
    initializeProperties(this, init)
  }
}
DepositAccountMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepositAccount)
DepositAccountMixin.Class = DepositAccountImpl
