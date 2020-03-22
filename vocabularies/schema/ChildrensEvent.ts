import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface ChildrensEvent extends Schema.Event, RdfResource {
}

export default function ChildrensEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChildrensEventClass extends EventMixin(Resource) implements ChildrensEvent {
  }
  return ChildrensEventClass
}

class ChildrensEventImpl extends ChildrensEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ChildrensEvent)
  }
}
ChildrensEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ChildrensEvent)
ChildrensEventMixin.Class = ChildrensEventImpl