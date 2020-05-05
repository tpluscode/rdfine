import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface HinduTemple extends Schema.PlaceOfWorship, RdfResource {
}

export function HinduTempleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HinduTempleClass extends PlaceOfWorshipMixin(Resource) implements HinduTemple {
  }
  return HinduTempleClass
}

class HinduTempleImpl extends HinduTempleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HinduTemple>) {
    super(arg, init)
    this.types.add(schema.HinduTemple)
  }

  static readonly __mixins: Mixin[] = [HinduTempleMixin, PlaceOfWorshipMixin];
}
HinduTempleMixin.appliesTo = schema.HinduTemple
HinduTempleMixin.Class = HinduTempleImpl
