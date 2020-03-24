import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface PublicationEvent extends Schema.Event, RdfResource {
  free: boolean;
  isAccessibleForFree: boolean;
  publishedOn: Schema.BroadcastService;
}

export default function PublicationEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PublicationEventClass extends EventMixin(Resource) implements PublicationEvent {
    @property.literal({ type: Boolean })
    free!: boolean;
    @property.literal({ type: Boolean })
    isAccessibleForFree!: boolean;
    @property.resource()
    publishedOn!: Schema.BroadcastService;
  }
  return PublicationEventClass
}

class PublicationEventImpl extends PublicationEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PublicationEvent)
  }
}
PublicationEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PublicationEvent)
PublicationEventMixin.Class = PublicationEventImpl
