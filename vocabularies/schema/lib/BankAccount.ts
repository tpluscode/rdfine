import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialProductMixin } from './FinancialProduct';

export interface BankAccount<ID extends ResourceNode = ResourceNode> extends Schema.FinancialProduct<ID>, RdfResource<ID> {
  accountMinimumInflow: Schema.MonetaryAmount<SiblingNode<ID>> | undefined;
  accountOverdraftLimit: Schema.MonetaryAmount<SiblingNode<ID>> | undefined;
  bankAccountType: string | undefined;
  bankAccountTypeTerm: RDF.NamedNode | undefined;
}

export function BankAccountMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BankAccountClass extends FinancialProductMixin(Resource) implements BankAccount {
    @property.resource()
    accountMinimumInflow: Schema.MonetaryAmount | undefined;
    @property.resource()
    accountOverdraftLimit: Schema.MonetaryAmount | undefined;
    @property.literal()
    bankAccountType: string | undefined;
    @property({ path: schema.bankAccountType })
    bankAccountTypeTerm: RDF.NamedNode | undefined;
  }
  return BankAccountClass
}

class BankAccountImpl extends BankAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BankAccount>) {
    super(arg, init)
    this.types.add(schema.BankAccount)
  }

  static readonly __mixins: Mixin[] = [BankAccountMixin, FinancialProductMixin];
}
BankAccountMixin.appliesTo = schema.BankAccount
BankAccountMixin.Class = BankAccountImpl
