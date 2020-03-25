import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<AccountingService>) {
    super(arg)
    this.types.add(schema.AccountingService)
    initializeProperties<AccountingService>(this, init)
  }
}
AccountingServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AccountingService)
AccountingServiceMixin.Class = AccountingServiceImpl
