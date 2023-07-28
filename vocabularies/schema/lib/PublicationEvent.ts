import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface PublicationEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
  free: boolean | undefined;
  publishedBy: Schema.Organization<D> | Schema.Person<D> | undefined;
  publishedOn: Schema.BroadcastService<D> | undefined;
}

export function PublicationEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PublicationEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PublicationEventClass extends EventMixin(Resource) {
    @rdfine.property.literal({ type: Boolean })
    free: boolean | undefined;
    @rdfine.property.resource()
    publishedBy: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    publishedOn: Schema.BroadcastService | undefined;
  }
  return PublicationEventClass as any
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

export const fromPointer = createFactory<PublicationEvent>([EventMixin, PublicationEventMixin], { types: [schema.PublicationEvent] });
