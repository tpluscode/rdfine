import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Park extends Schema.CivicStructure, RdfResource {
}

export default function ParkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ParkClass extends CivicStructureMixin(Resource) implements Park {
  }
  return ParkClass
}

class ParkImpl extends ParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Park>) {
    super(arg)
    this.types.add(schema.Park)
    initializeProperties<Park>(this, init)
  }
}
ParkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Park)
ParkMixin.Class = ParkImpl
