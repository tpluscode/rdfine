import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PlaceOfWorshipMixin from './PlaceOfWorship';

export interface BuddhistTemple extends Schema.PlaceOfWorship, RdfResource {
}

export default function BuddhistTempleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BuddhistTempleClass extends PlaceOfWorshipMixin(Resource) implements BuddhistTemple {
  }
  return BuddhistTempleClass
}

class BuddhistTempleImpl extends BuddhistTempleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BuddhistTemple>) {
    super(arg)
    this.types.add(schema.BuddhistTemple)
    initializeProperties<BuddhistTemple>(this, init)
  }
}
BuddhistTempleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BuddhistTemple)
BuddhistTempleMixin.Class = BuddhistTempleImpl
