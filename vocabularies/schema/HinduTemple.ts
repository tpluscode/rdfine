import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PlaceOfWorshipMixin from './PlaceOfWorship';

export interface HinduTemple extends Schema.PlaceOfWorship, RdfResource {
}

export default function HinduTempleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HinduTempleClass extends PlaceOfWorshipMixin(Resource) implements HinduTemple {
  }
  return HinduTempleClass
}

class HinduTempleImpl extends HinduTempleMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HinduTemple)
  }
}
HinduTempleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HinduTemple)
HinduTempleMixin.Class = HinduTempleImpl
