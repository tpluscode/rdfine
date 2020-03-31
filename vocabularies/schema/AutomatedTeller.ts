import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AutomatedTeller>) {
    super(arg, init)
    this.types.add(schema.AutomatedTeller)
  }
}
AutomatedTellerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutomatedTeller)
AutomatedTellerMixin.Class = AutomatedTellerImpl
