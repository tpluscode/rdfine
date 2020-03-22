import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Aquarium)
  }
}
AquariumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Aquarium)
AquariumMixin.Class = AquariumImpl
