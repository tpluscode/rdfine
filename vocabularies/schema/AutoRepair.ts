import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AutoRepair>) {
    super(arg, init)
    this.types.add(schema.AutoRepair)
  }
}
AutoRepairMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoRepair)
AutoRepairMixin.Class = AutoRepairImpl
