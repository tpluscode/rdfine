import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import FinancialServiceMixin from './FinancialService';

export interface AccountingService extends Schema.FinancialService, RdfResource {
}

export default function AccountingServiceMixin<Base extends Constructor>(Resource: Base) {
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
}
AccountingServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AccountingService)
AccountingServiceMixin.Class = AccountingServiceImpl
