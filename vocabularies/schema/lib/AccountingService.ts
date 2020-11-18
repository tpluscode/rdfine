import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialServiceMixin } from './FinancialService';

export interface AccountingService<ID extends ResourceNode = ResourceNode> extends Schema.FinancialService<ID>, RdfResource<ID> {
}

export function AccountingServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AccountingServiceClass extends FinancialServiceMixin(Resource) implements AccountingService {
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
