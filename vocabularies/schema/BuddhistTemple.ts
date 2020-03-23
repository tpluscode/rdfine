import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BuddhistTemple)
  }
}
BuddhistTempleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BuddhistTemple)
BuddhistTempleMixin.Class = BuddhistTempleImpl
