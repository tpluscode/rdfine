import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface BuddhistTemple extends Schema.PlaceOfWorship, RdfResource {
}

export function BuddhistTempleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BuddhistTempleClass extends PlaceOfWorshipMixin(Resource) implements BuddhistTemple {
  }
  return BuddhistTempleClass
}

class BuddhistTempleImpl extends BuddhistTempleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BuddhistTemple>) {
    super(arg, init)
    this.types.add(schema.BuddhistTemple)
  }

  static readonly __mixins: Mixin[] = [BuddhistTempleMixin, PlaceOfWorshipMixin];
}
BuddhistTempleMixin.appliesTo = schema.BuddhistTemple
BuddhistTempleMixin.Class = BuddhistTempleImpl
