import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface PublicationEvent extends Schema.Event, RdfResource {
  free: boolean;
  isAccessibleForFree: boolean;
  publishedOn: Schema.BroadcastService;
}

export function PublicationEventMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<PublicationEvent>) {
    super(arg, init)
    this.types.add(schema.PublicationEvent)
  }

  static readonly __mixins: Mixin[] = [PublicationEventMixin, EventMixin];
}
PublicationEventMixin.appliesTo = schema.PublicationEvent
PublicationEventMixin.Class = PublicationEventImpl
