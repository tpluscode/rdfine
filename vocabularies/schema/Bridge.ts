import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Bridge extends Schema.CivicStructure, RdfResource {
}

export default function BridgeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BridgeClass extends CivicStructureMixin(Resource) implements Bridge {
  }
  return BridgeClass
}

class BridgeImpl extends BridgeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Bridge)
  }
}
BridgeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Bridge)
BridgeMixin.Class = BridgeImpl
