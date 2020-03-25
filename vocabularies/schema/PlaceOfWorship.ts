import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface PlaceOfWorship extends Schema.CivicStructure, RdfResource {
}

export default function PlaceOfWorshipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlaceOfWorshipClass extends CivicStructureMixin(Resource) implements PlaceOfWorship {
  }
  return PlaceOfWorshipClass
}

class PlaceOfWorshipImpl extends PlaceOfWorshipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlaceOfWorship>) {
    super(arg, init)
    this.types.add(schema.PlaceOfWorship)
  }
}
PlaceOfWorshipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PlaceOfWorship)
PlaceOfWorshipMixin.Class = PlaceOfWorshipImpl
