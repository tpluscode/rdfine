import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface PublicationEvent<ID extends ResourceNode = ResourceNode> extends Schema.Event<ID>, RdfResource<ID> {
  free: boolean | undefined;
  publishedBy: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  publishedOn: Schema.BroadcastService<SiblingNode<ID>> | undefined;
}

export function PublicationEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PublicationEventClass extends EventMixin(Resource) implements PublicationEvent {
    @property.literal({ type: Boolean })
    free: boolean | undefined;
    @property.resource()
    publishedBy: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    publishedOn: Schema.BroadcastService | undefined;
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
