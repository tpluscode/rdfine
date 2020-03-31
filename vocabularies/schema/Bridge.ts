import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Bridge>) {
    super(arg, init)
    this.types.add(schema.Bridge)
  }
}
BridgeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Bridge)
BridgeMixin.Class = BridgeImpl
