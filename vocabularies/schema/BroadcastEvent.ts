import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<BroadcastEvent>) {
    super(arg)
    this.types.add(schema.BroadcastEvent)
    initializeProperties<BroadcastEvent>(this, init)
  }
}
BroadcastEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BroadcastEvent)
BroadcastEventMixin.Class = BroadcastEventImpl
