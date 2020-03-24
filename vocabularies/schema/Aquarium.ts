import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Aquarium extends Schema.CivicStructure, RdfResource {
}

export default function AquariumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AquariumClass extends CivicStructureMixin(Resource) implements Aquarium {
  }
  return AquariumClass
}

class AquariumImpl extends AquariumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Aquarium>) {
    super(arg)
    this.types.add(schema.Aquarium)
    initializeProperties(this, init)
  }
}
AquariumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Aquarium)
AquariumMixin.Class = AquariumImpl
