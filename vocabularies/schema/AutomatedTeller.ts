import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FinancialServiceMixin from './FinancialService';

export interface AutomatedTeller extends Schema.FinancialService, RdfResource {
}

export default function AutomatedTellerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutomatedTellerClass extends FinancialServiceMixin(Resource) implements AutomatedTeller {
  }
  return AutomatedTellerClass
}

class AutomatedTellerImpl extends AutomatedTellerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AutomatedTeller>) {
    super(arg)
    this.types.add(schema.AutomatedTeller)
    initializeProperties(this, init)
  }
}
AutomatedTellerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutomatedTeller)
AutomatedTellerMixin.Class = AutomatedTellerImpl
