import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface LiteraryEvent extends Schema.Event, RdfResource {
}

export default function LiteraryEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiteraryEventClass extends EventMixin(Resource) implements LiteraryEvent {
  }
  return LiteraryEventClass
}

class LiteraryEventImpl extends LiteraryEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LiteraryEvent)
  }
}
LiteraryEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LiteraryEvent)
LiteraryEventMixin.Class = LiteraryEventImpl
