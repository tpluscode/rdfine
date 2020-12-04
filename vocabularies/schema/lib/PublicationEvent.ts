import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface PublicationEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
  free: boolean | undefined;
  publishedBy: Schema.Organization<D> | Schema.Person<D> | undefined;
  publishedOn: Schema.BroadcastService<D> | undefined;
}

export function PublicationEventMixin<Base extends Constructor>(Resource: Base): Constructor<PublicationEvent> & Base {
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
