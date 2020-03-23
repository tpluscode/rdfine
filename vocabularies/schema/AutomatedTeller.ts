import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AutomatedTeller)
  }
}
AutomatedTellerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutomatedTeller)
AutomatedTellerMixin.Class = AutomatedTellerImpl
