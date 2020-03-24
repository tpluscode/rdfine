import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Bridge>) {
    super(arg)
    this.types.add(schema.Bridge)
    initializeProperties(this, init)
  }
}
BridgeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Bridge)
BridgeMixin.Class = BridgeImpl
