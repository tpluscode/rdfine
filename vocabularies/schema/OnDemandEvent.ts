import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PublicationEventMixin from './PublicationEvent';

export interface OnDemandEvent extends Schema.PublicationEvent, RdfResource {
}

export default function OnDemandEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OnDemandEventClass extends PublicationEventMixin(Resource) implements OnDemandEvent {
  }
  return OnDemandEventClass
}

class OnDemandEventImpl extends OnDemandEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<OnDemandEvent>) {
    super(arg)
    this.types.add(schema.OnDemandEvent)
    initializeProperties(this, init)
  }
}
OnDemandEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OnDemandEvent)
OnDemandEventMixin.Class = OnDemandEventImpl
