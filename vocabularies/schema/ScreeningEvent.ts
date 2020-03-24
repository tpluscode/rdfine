import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ScreeningEvent>) {
    super(arg)
    this.types.add(schema.ScreeningEvent)
    initializeProperties(this, init)
  }
}
ScreeningEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ScreeningEvent)
ScreeningEventMixin.Class = ScreeningEventImpl
