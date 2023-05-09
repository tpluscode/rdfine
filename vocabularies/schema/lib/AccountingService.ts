import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialServiceMixin } from './FinancialService.js';

export interface AccountingService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, rdfine.RdfResource<D> {
}

export function AccountingServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AccountingService> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AccountingServiceClass extends FinancialServiceMixin(Resource) implements Partial<AccountingService> {
  }
  return AccountingServiceClass
}

class AccountingServiceImpl extends AccountingServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AccountingService>) {
    super(arg, init)
    this.types.add(schema.AccountingService)
  }

  static readonly __mixins: Mixin[] = [AccountingServiceMixin, FinancialServiceMixin];
}
AccountingServiceMixin.appliesTo = schema.AccountingService
AccountingServiceMixin.Class = AccountingServiceImpl

export const fromPointer = createFactory<AccountingService>([FinancialServiceMixin, AccountingServiceMixin], { types: [schema.AccountingService] });
