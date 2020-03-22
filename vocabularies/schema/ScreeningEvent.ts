import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface ScreeningEvent extends Schema.Event, RdfResource {
  videoFormat: string;
  workPresented: Schema.Movie;
}

export default function ScreeningEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ScreeningEventClass extends EventMixin(Resource) implements ScreeningEvent {
    @property.literal()
    videoFormat!: string;
    @property.resource()
    workPresented!: Schema.Movie;
  }
  return ScreeningEventClass
}

class ScreeningEventImpl extends ScreeningEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ScreeningEvent)
  }
}
ScreeningEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ScreeningEvent)
ScreeningEventMixin.Class = ScreeningEventImpl
