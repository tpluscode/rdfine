import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialProductMixin } from './FinancialProduct';

export interface BankAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, RdfResource<D> {
  accountMinimumInflow: Schema.MonetaryAmount<D> | undefined;
  accountOverdraftLimit: Schema.MonetaryAmount<D> | undefined;
  bankAccountType: string | undefined;
  bankAccountTypeTerm: RDF.NamedNode | undefined;
}

export function BankAccountMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BankAccount> & RdfResourceCore> & Base {
  @namespace(schema)
  class BankAccountClass extends FinancialProductMixin(Resource) implements Partial<BankAccount> {
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

export const fromPointer = createFactory<BankAccount>([FinancialProductMixin, BankAccountMixin], { types: [schema.BankAccount] });
