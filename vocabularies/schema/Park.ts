import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Park>) {
    super(arg, init)
    this.types.add(schema.Park)
  }
}
ParkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Park)
ParkMixin.Class = ParkImpl
