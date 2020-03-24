import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.OnDemandEvent)
  }
}
OnDemandEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OnDemandEvent)
OnDemandEventMixin.Class = OnDemandEventImpl
