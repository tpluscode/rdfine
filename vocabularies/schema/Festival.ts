import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface Festival extends Schema.Event, RdfResource {
}

export default function FestivalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FestivalClass extends EventMixin(Resource) implements Festival {
  }
  return FestivalClass
}

class FestivalImpl extends FestivalMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Festival)
  }
}
FestivalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Festival)
FestivalMixin.Class = FestivalImpl
