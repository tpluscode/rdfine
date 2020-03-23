import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface AutoRepair extends Schema.AutomotiveBusiness, RdfResource {
}

export default function AutoRepairMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoRepairClass extends AutomotiveBusinessMixin(Resource) implements AutoRepair {
  }
  return AutoRepairClass
}

class AutoRepairImpl extends AutoRepairMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AutoRepair)
  }
}
AutoRepairMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoRepair)
AutoRepairMixin.Class = AutoRepairImpl
