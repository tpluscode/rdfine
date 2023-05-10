import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialProductMixin } from './FinancialProduct.js';

export interface BankAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, rdfine.RdfResource<D> {
  accountMinimumInflow: Schema.MonetaryAmount<D> | undefined;
  accountOverdraftLimit: Schema.MonetaryAmount<D> | undefined;
  bankAccountType: string | undefined;
  bankAccountTypeTerm: RDF.NamedNode | undefined;
}

export function BankAccountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BankAccount> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BankAccountClass extends FinancialProductMixin(Resource) implements Partial<BankAccount> {
    @rdfine.property.resource()
    accountMinimumInflow: Schema.MonetaryAmount | undefined;
    @rdfine.property.resource()
    accountOverdraftLimit: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal()
    bankAccountType: string | undefined;
    @rdfine.property({ path: schema.bankAccountType })
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

export const fromPointer = createFactory<BankAccount>([FinancialProductMixin, BankAccountMixin], { types: [schema.BankAccount] });
