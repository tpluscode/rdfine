import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import FinancialProductMixin from './FinancialProduct';

export interface BankAccount extends Schema.FinancialProduct, RdfResource {
}

export default function BankAccountMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BankAccountClass extends FinancialProductMixin(Resource) implements BankAccount {
  }
  return BankAccountClass
}

class BankAccountImpl extends BankAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BankAccount>) {
    super(arg, init)
    this.types.add(schema.BankAccount)
  }
}
BankAccountMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BankAccount)
BankAccountMixin.Class = BankAccountImpl
