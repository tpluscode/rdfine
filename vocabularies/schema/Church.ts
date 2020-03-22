import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PlaceOfWorshipMixin from './PlaceOfWorship';

export interface Church extends Schema.PlaceOfWorship, RdfResource {
}

export default function ChurchMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChurchClass extends PlaceOfWorshipMixin(Resource) implements Church {
  }
  return ChurchClass
}

class ChurchImpl extends ChurchMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Church)
  }
}
ChurchMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Church)
ChurchMixin.Class = ChurchImpl