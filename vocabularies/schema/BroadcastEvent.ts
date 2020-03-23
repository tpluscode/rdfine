import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PublicationEventMixin from './PublicationEvent';

export interface BroadcastEvent extends Schema.PublicationEvent, RdfResource {
  broadcastOfEvent: Schema.Event;
  isLiveBroadcast: boolean;
  videoFormat: string;
}

export default function BroadcastEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastEventClass extends PublicationEventMixin(Resource) implements BroadcastEvent {
    @property.resource()
    broadcastOfEvent!: Schema.Event;
    @property.literal({ type: Boolean })
    isLiveBroadcast!: boolean;
    @property.literal()
    videoFormat!: string;
  }
  return BroadcastEventClass
}

class BroadcastEventImpl extends BroadcastEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BroadcastEvent)
  }
}
BroadcastEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BroadcastEvent)
BroadcastEventMixin.Class = BroadcastEventImpl
